import { Photo } from '@/types/homePage'

export type AboutPageParsed = {
  storeTitle: string;
  storeAbout: string;
  socials: Socials[];
  storePhotos: Photo[];
};

export type Socials = {
  social: string;
  handle: string;
  link: string;
  id: string;
}