import { LocationPage, Media } from '@/payload-types'
import { Location, ParsedLocationPage } from '@/types/locationPage'

export default function ParseLocationPage(data: LocationPage): ParsedLocationPage | undefined {
  if (!data || !Array.isArray(data.stores)) {
    return undefined;
  }

  const stores: Location[] = data.stores
    .filter((store) => typeof store === 'object' && store !== null)
    .map((store) => ({
      location: store.location,
      storePhoto: {
        alt: (store.storePhoto as Media).alt,
        src: (store.storePhoto as Media).url as string,
        width: (store.storePhoto as Media).width as number,
        height: (store.storePhoto as Media).height as number,
      },
      address: store.address,
      openingHours: {
        monday: store['opening-hours'].monday,
        tuesday: store['opening-hours'].tuesday,
        wednesday: store['opening-hours'].wednesday,
        thursday: store['opening-hours'].thursday,
        friday: store['opening-hours'].friday,
        saturday: store['opening-hours'].saturday,
        sunday: store['opening-hours'].sunday,
      }
    }));

  return {
    stores,
  }
}