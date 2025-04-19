import { GlobalConfig } from 'payload';

const AboutPage: GlobalConfig = {
  slug: "about-page",
  access: {
    read: () => true
  },
  fields: [
    {
      name: "storeTitle",
      label: "Store Title",
      type: "text",
      required: true,
      admin: {
        placeholder: "Please enter the name of your store"
      }
    },
    {
      name: "storeAbout",
      label: "Store About",
      type: "textarea",
      required: true,
      admin: {
        placeholder: "Please enter your stores description"
      }
    },
    {
      name: "socials",
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "social",
          type: "text",
          required: true,
          admin: {
            placeholder: "Please enter the social media name for your store"
          }
        },
        {
          name: "handle",
          type: "text",
          required: true,
          admin: {
            placeholder: "Please enter the handle for that social"
          }
        },
        {
          name: "link",
          type: "text",
          required: true,
          admin: {
            placeholder: "Please enter the link to that social"
          }
        }
      ]
    },
    {
      name: "storePhotos",
      label: "Store Photos",
      type: 'upload',
      relationTo: "media",
      required: true,
      minRows: 1,
      hasMany: true,
      displayPreview: true
    }
  ]
};

export default AboutPage;