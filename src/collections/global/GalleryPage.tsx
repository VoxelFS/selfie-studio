import { GlobalConfig } from 'payload';

export const GalleryPage: GlobalConfig = {
  slug: "gallery-page",
  access: {
    read: () => true
  },
  fields: [
    {
      name: "galleryPhotos",
      label: "Gallery Photos",
      type: 'upload',
      relationTo: "media",
      required: true,
      minRows: 1,
      hasMany: true,
      displayPreview: true
    }
  ]
}