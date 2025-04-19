import { Photo } from '@/types/homePage'

export type ParsedLocationPage = {
  stores: Location[];
}

export type Location = {
  location: string;
  storePhoto: Photo;
  address: string;
  openingHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  },
}