import { AboutPage } from '@/payload-types'
import { AboutPageParsed, Socials } from '@/types/aboutPage'

export default function parseAboutPage(data: AboutPage): AboutPageParsed | undefined {
  if (!data) {
    return undefined;
  }

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
  };
}