// /admin/adminjsSetup.js
import AdminJS, { ComponentLoader } from "adminjs";
import { Database, Resource } from "@adminjs/mongoose";
import Gallery from "../../models/galleryModel.js";
import Contact from "../../models/contactModel.js";
import BrandLogo from "../../models/brandModel.js";
import uploadFeature from "@adminjs/upload";

AdminJS.registerAdapter({ Database, Resource });
const componentLoader = new ComponentLoader();

const localProvider = {
  bucket: "public/uploads",
  opts: {
    baseUrl: "/uploads",
  },
};

const admin = new AdminJS({
  rootPath: "/admin",
  componentLoader,

  resources: [
    // for gallery section
    {
      resource: Gallery,
      options: {
        navigation: {
          label: "Gallery",
          icon: "Image",
        },
        properties: {
          _id: { isVisible: false },
        },
        actions: {
          new: { isVisible: true },
          edit: { isVisible: true },
          delete: { isVisible: true },
        },
      },
    },

    // for contact section
    {
      resource: Contact,
      options: {
        navigation: {
          label: "Contacts",
          icon: "fas fa-address-book",
        },
        properties: {
          _id: { isVisible: false },
        },
        actions: {
          new: { isVisible: false },
          edit: { isVisible: false },
          delete: { isVisible: true },
        },
      },
    },

    // for brand logo
    {
      resource: BrandLogo,
      options: {
        navigation: {
          label: "BrandLogo",
          icon: "Camera",
        },
        properties: {
          _id: { isVisible: false },
          image: {
            type: "string",
            isVisible: { list: true, edit: true, filter: true, show: true },
          },
          imageKey: { isVisible: false },
          bucket: { isVisible: false },
          mime: { isVisible: false },
        },
        actions: {
          list: { isVisible: true },
          new: { isVisible: true },
          edit: { isVisible: true },
          delete: { isVisible: true },
        },
      },
      features: [
        uploadFeature({
          provider: { local: localProvider },
          
          componentLoader,
          properties: {
            filePath: "image", // Field in the model for file uploads
            key: "imageKey", // Field to store file key/path
            bucket: "bucket", // Field to store bucket/folder name
            mimeType: "mime", // Field to store MIME type
          },
          validation: {
            mimeTypes: ["image/png", "image/jpeg", "image/jpg"], // Accept only specific file types
          },
        }),
      ],
    },
  ],
});

export default admin;
