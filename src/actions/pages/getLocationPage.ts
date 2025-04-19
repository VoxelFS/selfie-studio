'use server'

import { getPayload } from '@/libs/payload'

export const getLocationPage = async () => {
  const payload = await getPayload()
  return await payload.findGlobal({
    slug: 'location-page',
  })
}