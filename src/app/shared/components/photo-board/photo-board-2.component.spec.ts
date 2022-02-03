import { Component, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
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

describe(`${PhotoBoardComponent.name} outros`, () => {

    let fixture: ComponentFixture<PhotoBoardTestComponent> = null;
    let component: PhotoBoardTestComponent = null;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PhotoBoardTestComponent],
            imports: [PhotoBoardModule]
        }).compileComponents();

        fixture = TestBed.createComponent(PhotoBoardTestComponent);
        component = fixture.componentInstance;
    });

    it('Should display rows and columns when (@Input photos) has value', () => {
        component.photos = buildPhotoList();
        fixture.detectChanges();

        expect(component.board.rows.length).withContext('Number of rows').toBe(2);
        expect(component.board.rows[0].length).withContext('Number of columns of the first row').toBe(4);
        expect(component.board.rows[1].length).withContext('Number of columns of the first row').toBe(4);
    });
});

@Component({
    template: `<app-photo-board [photos] = "photos"></app-photo-board>`
})
class PhotoBoardTestComponent {
    @ViewChild(PhotoBoardComponent) public board: PhotoBoardComponent;
    public photos: Photo[] = [];
}