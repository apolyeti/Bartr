import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.CLOUD_NAME,
      apiKey: process.env.CLOUD_API_KEY,
      apiSecret: process.env.CLOUD_API_SECRET
    }
  });

export default cld;