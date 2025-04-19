"use server";

import { getPayload } from '@/libs/payload';

export const getAboutPage = async () => {
  const payload = await getPayload()
  return await payload.findGlobal({
    slug: "about-page"
  });
}