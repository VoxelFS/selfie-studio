"use server";

import { getPayload } from 'src/lib/payload';

export const getAboutPage = async () => {
  const payload = await getPayload()
  return await payload.findGlobal({
    slug: "about-page"
  });
}