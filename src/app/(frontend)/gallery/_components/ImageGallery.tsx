"use client";

import { GalleryPageParsed } from '@/types/galleryPage';
import { ImageList, ImageListItem } from '@mui/material';
import Image from 'next/image';
import { useRef, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface GalleryProps {
  galleryPage: GalleryPageParsed
}

export default function ImageGallery({ galleryPage }: GalleryProps) {

  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const zoomRef = useRef(null);

  const images = galleryPage.galleryPhotos;

  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  let cols = 3;
  if (isXs) cols = 1;
  else if (isMd) cols = 2;

  return (
    <>
      <ImageList variant="masonry" cols={cols} gap={8}>
        {galleryPage.galleryPhotos.map((photo, index) => (
          <ImageListItem key={index} onClick={() => { setOpen(true); setPhotoIndex(index); }} style={{ cursor: 'pointer' }}>
            <div className="relative group cursor-pointer">
              <Image
                src={photo.src}
                alt={photo.alt}
                height={photo.height}
                width={photo.width}
                className="transition duration-200 ease-in-out"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition duration-200"></div>
            </div>
          </ImageListItem>
        ))}
      </ImageList>

      {open &&
        <Lightbox
          index={photoIndex}
          open={open}
          close={() => setOpen(false)}
          slides={images}
          plugins={[Zoom]}
          zoom={{ ref: zoomRef }}
        />
      }
    </>
  )
}