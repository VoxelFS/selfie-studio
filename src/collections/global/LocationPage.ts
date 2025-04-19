import { GlobalConfig } from 'payload';

const LocationPage: GlobalConfig = {
  slug: "location-page",
  access: {
    read: () => true
  },
  fields: [
    {
      name: "stores",
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "location",
          label: "location",
          type: 'text',
          admin: {
            placeholder: "Enter the location of your store."
          },
          required: true
        },
        {
          name: "storePhoto",
          label: "Store Photo",
          type: "upload",
          relationTo: "media",
          required: true,
          displayPreview: true
        },
        {
          name: "address",
          label: "Store Address",
          type: "text",
          admin: {
            placeholder: "Enter the address of your store."
          },
          required: true
        },
        {
          name: "opening-hours",
          label: "Opening Hours",
          type: "group",
          fields: [
            { name: "monday", label: "Monday", type: "text", required: true, admin: { placeholder: "e.g: 9am-5pm" } },
            { name: "tuesday", label: "Tuesday", type: "text", required: true, admin: { placeholder: "e.g: 9am-5pm" } },
            { name: "wednesday", label: "Wednesday", type: "text", required: true, admin: { placeholder: "e.g: 9am-5pm" } },
            { name: "thursday", label: "Thursday", type: "text", required: true, admin: { placeholder: "e.g: 9am-5pm" } },
            { name: "friday", label: "Friday", type: "text", required: true, admin: { placeholder: "e.g: 9am-5pm" } },
            { name: "saturday", label: "Saturday", type: "text", required: true, admin: { placeholder: "e.g: 9am-5pm" } },
            { name: "sunday", label: "Sunday", type: "text", required: true, admin: { placeholder: "e.g: 9am-5pm" } },
          ]
        }
      ]
    }
  ]
}

export default LocationPage;