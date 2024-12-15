import Gallery from "../../models/galleryModel.js";

import Contact from "../../models/contactModel.js";
import BrandLogo from "../../models/brandModel.js";
import User from "../../models/GetTouchModel.js";
import Users from "../../models/UserModel.js";
import uploadFeature from "@adminjs/upload";
import { componentLoader } from "./componentsLoader.js";
import passwordsFeature from "@adminjs/passwords";
import argon2 from "argon2";

const localProvider = {
  bucket: "public/uploads",
  opts: {
    baseUrl: "/uploads",
  },
};

export const Resources = [
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

  //   // for brand logo
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
          type: "file",
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

  //   get in touch section
  {
    resource: User,
    options: {
      navigation: {
        label: "UserBook",
        icon: "book",
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

  //  authentication based on role
  {
    resource: Users,
    options: {
      navigation: {
        label: "User Management",
        icon: "User",
      },
      properties: {
        _id: {
          isVisible: { list: false, filter: false, show: false, edit: false },
        },
        password: {
          isVisible: { list: false, filter: false, show: false, edit: true },
        },
      },
      actions: {
        new: { isVisible: true },
        edit: {
          isVisible: true,
        },
        delete: { isVisible: true },
      },
      features: [
        passwordsFeature({
          componentLoader,
          properties: {
            encryptedPassword: "password",
            password: "newPassword",
          },
          hash: argon2.hash,
        }),
      ],
    },
  },
];
