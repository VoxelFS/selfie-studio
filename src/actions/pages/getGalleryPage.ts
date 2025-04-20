"use server";

import { getPayload } from '@/libs/payload';

export const getGalleryPage = async () => {
  const payload = await getPayload()
  return await payload.findGlobal({
    slug: "gallery-page"
  });
}