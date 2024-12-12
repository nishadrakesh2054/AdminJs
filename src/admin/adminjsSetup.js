// /admin/adminjsSetup.js
import AdminJS from "adminjs";

import { Database, Resource } from "@adminjs/mongoose";
import Gallery from "../../models/galleryModel.js";
import Contact from "../../models/contactModel.js";


AdminJS.registerAdapter({ Database, Resource });

const admin = new AdminJS({
  rootPath: "/admin",

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
  ],
});

export default admin;
