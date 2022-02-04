import { Photo } from '../interfaces/photo';

export function buildPhotoList(): Photo[] {
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