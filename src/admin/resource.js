import Gallery from "../../models/galleryModel.js";
import Contact from "../../models/contactModel.js";
import BrandLogo from "../../models/brandModel.js";
import User from "../../models/GetTouchModel.js";
import Users from "../../models/UserModel.js";
import SpecialCamps from "../../models/SpecialCapmsModel.js";
import HeroSlider from "../../models/HeroModel.js";
import Academy from "../../models/academyModel.js";
import Program from "../../models/programModel.js";
import AgeGroup from "../../models/ageGroupModel.js";
import Game from "../../models/gameModel.js";

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
  // for Hero or home slider section
  {
    resource: HeroSlider,
    options: {
      navigation: {
        label: "Hero Slider",
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
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
      }),
    ],
  },
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
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
      }),
    ],
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
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
      }),
    ],
  },

  // for Special Capms section
  {
    resource: SpecialCamps,
    options: {
      navigation: {
        label: "SpecialCamps",
        icon: "Image",
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
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
      }),
    ],
  },

  //   academic model
  {
    resource: Academy,
    options: {
      navigation: {
        label: "Academy",
        icon: "Home ",
      },
      properties: {
        _id: { isVisible: false },
      },
      actions: {
        list: { isVisible: true },
        new: { isVisible: true },
        edit: { isVisible: true },
        delete: { isVisible: true },
      },
    },
  },
  //   Program model
  {
    resource: Program,
    options: {
      navigation: {
        label: "Program",
        icon: "Home ",
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
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
      }),
    ],
  },

  //   for age group
  {
    resource: AgeGroup,
    options: {
      navigation: {
        label: "AgeGroup",
        icon: "Home ",
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
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
      }),
    ],
  },

  //   Game model
  {
    resource: Game,
    options: {
      navigation: {
        label: "Game",
        icon: "Home ",
      },
      properties: {
        _id: { isVisible: false },
      },
      actions: {
        list: { isVisible: true },
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
        label: "Contact",
        icon: "Book",
      },
      properties: {
        _id: { isVisible: false },
      },
      actions: {
        new: { isVisible: true },
        edit: { isVisible: false },
        delete: { isVisible: true },
      },
    },
  },

  //   get in touch section
  {
    resource: User,
    options: {
      navigation: {
        label: "UserBook",
        icon: "Users",
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
