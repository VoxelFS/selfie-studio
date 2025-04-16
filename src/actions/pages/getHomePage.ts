"use server";

import { getPayload } from '@/libs/payload';

export const getHomePage = async () => {
  const payload = await getPayload()
  return await payload.findGlobal({
    slug: "home-page"
  })
}