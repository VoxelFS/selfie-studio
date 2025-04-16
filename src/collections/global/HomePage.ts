import { GlobalConfig } from 'payload';

const HomePage: GlobalConfig = {
  slug: "home-page",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "Photos",
      type: "upload",
      relationTo: "media",
      required: true,
      displayPreview: true,
      hasMany: true,
      minRows: 1
    }
  ]
}

export default HomePage;