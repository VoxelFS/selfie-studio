'use server'

import { revalidatePath } from 'next/cache'

export async function revalidateAll() {
  revalidatePath('/')

  // Add any dynamic revalidation logic here, e.g., pull slugs and loop
  console.log('Revalidated all paths')
}