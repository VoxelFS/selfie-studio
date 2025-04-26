"use server";

import { getPayload } from 'src/lib/payload';

export const getGalleryPage = async () => {
  const payload = await getPayload()
  return await payload.findGlobal({
    slug: "gallery-page"
  });
}