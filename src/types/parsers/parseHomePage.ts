import { HomePage, Media } from '@/payload-types'
import { HomePageParsed, Photo } from '@/types/homePage'

export default function parseHomePage(data: HomePage): HomePageParsed | undefined {
  if (!data) {
    return undefined;
  }

  const photos: Photo[] = data.Photos
    .filter((photo): photo is Media => typeof photo === 'object' && photo !== null)
    .map((photo) => ({
      alt: photo.alt,
      src: photo.url as string,
      width: photo.width as number,
      height: photo.height as number
    }));

  return {
    photos,
  }
}