import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';
import { buildPhotoList } from '../../shared/components/photo-board/test/build-photo-list';
import { of } from 'rxjs';

describe(PhotoListComponent.name, () => {

    let fixture: ComponentFixture<PhotoListComponent> = null;
    let component: PhotoListComponent = null;
    let service: PhotoBoardService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PhotoListModule, HttpClientModule]
        }).compileComponents();

        fixture = TestBed.createComponent(PhotoListComponent);
        component = fixture.componentInstance;
        service = TestBed.inject(PhotoBoardService);
    });

    it('Should create component', () => {
        expect(component).toBeTruthy();
    });

    it(`(D) Should display board when data arrives`, () => {
        const photos = buildPhotoList();
        spyOn(service, 'getPhotos').and.returnValue(of(photos));
        fixture.detectChanges();
        const board = fixture.nativeElement.querySelector('app-photo-board');
        let loader = fixture.nativeElement.querySelector('.loader');
        expect(loader).withContext('Should not display loader').toBeNull();
        expect(board).withContext('Should display board').toBeTruthy()
    });

    it(`(D) Should display loader while waiting for data`, () => {
        const photos = buildPhotoList();
        spyOn(service, 'getPhotos').and.returnValue(null);
        fixture.detectChanges();
        const board = fixture.nativeElement.querySelector('app-photo-board');
        let loader = fixture.nativeElement.querySelector('.loader');
        expect(loader).withContext('Should display loader').toBeTruthy();
        expect(board).withContext('Should not display board').toBeNull()
    });
});