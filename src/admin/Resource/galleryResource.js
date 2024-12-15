import Gallery from "../../../models/galleryModel.js";

const localProvider = {
    bucket: "public/uploads",
    opts: {
      baseUrl: "/uploads",
    },
  };

 const galleryResources = [
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
];
export  default galleryResources