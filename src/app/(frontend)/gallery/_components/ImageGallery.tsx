import { GalleryPageParsed } from '@/types/galleryPage';
import { ImageList, ImageListItem } from '@mui/material';
import Image from 'next/image';

interface GalleryProps {
  galleryPage: GalleryPageParsed
}

export default function ImageGallery({ galleryPage }: GalleryProps) {
  return (
    <>
      <ImageList variant="masonry" cols={3} gap={8}>
        {galleryPage.galleryPhotos.map((photo, index) => (
          <ImageListItem key={index}>
            <Image
              src={photo.src}
              alt={photo.alt}
              height={photo.height}
              width={photo.width}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}