import { AboutPage, Media } from '@/payload-types'
import { Photo } from '@/types/homePage'
import { AboutPageParsed, Socials } from '@/types/aboutPage'

export default function parseAboutPage(data: AboutPage): AboutPageParsed | undefined {
  if (!data) {
    return undefined;
  }

  const storePhotos: Photo[] = data.storePhotos
    .filter((photo): photo is Media => typeof photo === 'object' && photo !== null)
    .map((photo) => ({
      alt: photo.alt,
      src: photo.url as string,
      width: photo.width as number,
      height: photo.height as number
    }));

  const socials: Socials[] = (data.socials ?? [])
    .filter((s): s is Socials => typeof s === 'object' && s !== null && 'social' in s)
    .map((s) => ({
      social: s.social,
      handle: s.handle,
      link: s.link,
      id: s.id
    }));

  return {
    storeTitle: data.storeTitle,
    storeAbout: data.storeAbout,
    socials: socials,
    storePhotos: storePhotos
  };
}