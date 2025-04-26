'use server'

import { getPayload } from 'src/lib/payload'

export const getLocationPage = async () => {
  const payload = await getPayload()
  return await payload.findGlobal({
    slug: 'location-page',
  })
}