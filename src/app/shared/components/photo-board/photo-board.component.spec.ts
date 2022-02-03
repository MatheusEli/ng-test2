import { SimpleChange, SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Photo } from './interfaces/photo';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardModule } from './photo-board.module';


function buildPhotoList(): Photo[] {
    const photos: Photo[] = [];
    for (let i = 0; i < 8; i++) {

        photos.push({
            id: i + 1,
            description: 'Some photo',
            url: 'https://picsum.photos/200/30' + i
        });
    }

    return photos;
}

describe(`${PhotoBoardComponent.name}`, () => {

    let fixture: ComponentFixture<PhotoBoardComponent> = null;
    let component: PhotoBoardComponent = null;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PhotoBoardModule]
        }).compileComponents();

        fixture = TestBed.createComponent(PhotoBoardComponent);
        component = fixture.componentInstance;
    });

    it('Should display rows and columns when (@Input photos) has value', () => {
        component.photos = buildPhotoList();
        fixture.detectChanges();
        const change:SimpleChanges = {
            photos: new SimpleChange([], component.photos, true)
        };
        component.ngOnChanges(change);
        expect(component.rows.length).withContext('Number of rows').toBe(2);
        expect(component.rows[0].length).withContext('Number of columns of the first row').toBe(4);
        expect(component.rows[1].length).withContext('Number of columns of the first row').toBe(4);
    });
});