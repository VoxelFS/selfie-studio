import { s3Storage } from '@payloadcms/storage-s3';

const storage = s3Storage({
  collections: {
    media: {
      disableLocalStorage: true,
      prefix: "media"
    },
  },
  bucket: process.env.R2_BUCKET || "",
  config: {
    endpoint: process.env.R2_ENDPOINT || "",
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID || "",
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "",
    },
    region: "auto",
  }
});

export default storage;