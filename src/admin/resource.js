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
import ManualRegistration from "../../models/ManualRegistrationModel.js";
import RegistrationPayment from "../../models/registrationPAymentModel.js";
import School from "../../models/schoolModel.js";
import Participation from "../../models/participationModel.js";
import Career from "../../models/careerModel.js";
import Application from "../../models/applicationModel.js";

import uploadFeature from "@adminjs/upload";
import { componentLoader } from "./componentsLoader.js";
import bcrypt from "bcrypt";

const localProvider = {
  bucket: "public/uploads",
  opts: {
    baseUrl: "/uploads",
  },
};

// Hashing function for passwords
const hashPassword = async (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

export const Resources = [
  // photo or gallery section

  // for brand logo
  {
    resource: BrandLogo,
    options: {
      navigation: {
        name: "Photos",
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
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
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
        uploadPath(record, filename) {
          return `${filename}`; // Save directly under public/uploads with original filename
        },
      }),
    ],
  },
  // for Hero or home slider section
  {
    resource: HeroSlider,
    options: {
      navigation: {
        name: "Photos",
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
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
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
        uploadPath(record, filename) {
          return `${filename}`; // Save directly under public/uploads with original filename
        },
      }),
    ],
  },
  // for gallery section
  {
    resource: Gallery,
    options: {
      navigation: {
        name: "Photos",
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
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
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
        uploadPath(record, filename) {
          return `${filename}`; // Save directly under public/uploads with original filename
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
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
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
        uploadPath(record, filename) {
          return `${filename}`; // Save directly under public/uploads with original filename
        },
      }),
    ],
  },

  //  Event management
  //   Game model
  {
    resource: Game,
    options: {
      navigation: {
        name: "Events Management",
        icon: "Game",
      },
      properties: {
        _id: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
  },
  //   manual registratiom
  {
    resource: ManualRegistration,
    options: {
      navigation: {
        name: "Events Management",
        icon: "ManualRegistration",
      },
      properties: {
        noOfParticipants: {
          isVisible: ({ record }) => record && record.gameType === "Individual",
        },
        totalAmount: {
          isVisible: true,
          isDisabled: false,
        },

        schoolEmail: {
          isVisible: {
            list: false,
            filter: true,
            show: true,
            edit: true,
          },
        },
      },
      listProperties: [
        "schoolName",
        "schoolContactNo",
        "gameName",
        "gameType",
        "gameCategory",
        "noOfParticipants",
        "gameFee",
        "totalAmount",
      ],
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
  },
  // Registration Payment
  {
    resource: RegistrationPayment,
    options: {
      navigation: {
        name: "Events Management",
        icon: "Money",
      },
      actions: {
        new: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
        },
        edit: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
        },
        delete: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
        },
        show: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
        },
        list: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
        },
      },
    },
  },
  // School
  {
    resource: School,
    options: {
      navigation: {
        name: "Events Management",
        icon: "Events",
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
  },
  // Participation
  {
    resource: Participation,
    options: {
      navigation: {
        name: "Events Management",
        icon: "Events",
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },

      properties: {
        _id: { isVisible: false },
        schoolId: {
          isVisible: { list: true, edit: true, filter: true, show: true },
        },

        gameId: {
          isVisible: { list: true, edit: true, filter: true, show: true },
        },
      },
    },
  },

  //   academic management
  //   academic model
  {
    resource: Academy,
    options: {
      navigation: {
        name: "Academic Management",
        icon: "School",
      },
      properties: {
        _id: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
  },
  //   Program model
  {
    resource: Program,
    options: {
      navigation: {
        name: "Academic Management",
        icon: "School",
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
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
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
        uploadPath(record, filename) {
          return `${filename}`; // Save directly under public/uploads with original filename
        },
      }),
    ],
  },

  //   for age group
  {
    resource: AgeGroup,
    options: {
      navigation: {
        name: "Academic Management",
        icon: "School",
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
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
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
        uploadPath(record, filename) {
          return `${filename}`; // Save directly under public/uploads with original filename
        },
      }),
    ],
  },

  // carreer Resources and application configuration
  // 1. career config
  {
    resource: Career,
    options: {
      navigation: { name: "Careers", icon: "Briefcase" },

      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
      properties: {
        description: {
          type: "richtext",
          custom: {
            quill: {
              modules: {
                toolbar: [
                  ["bold", "italic", "underline", "strike"],
                  ["blockquote", "code-block"],
                  [{ header: 1 }, { header: 2 }],
                  [{ list: "ordered" }, { list: "bullet" }],
                  [{ script: "sub" }, { script: "super" }],
                  [{ indent: "-1" }, { indent: "+1" }],
                  [{ direction: "rtl" }],
                  [{ size: ["small", false, "large", "huge"] }],
                  [{ header: [1, 2, 3, 4, 5, 6, false] }],
                  [{ color: [] }, { background: [] }],
                  [{ font: [] }],
                  [{ align: [] }],
                  ["clean"],
                ],
              },
              theme: "snow",
              placeholder: "Type your content here...",
              bounds: ".admin-bro_Edit",
            },
          },
        },
      },
    },
  },

  // 1. Application config
  {
    resource: Application,
    options: {
      navigation: { name: "Careers", icon: "Briefcase" },

      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },

  

    },
  },

  //   communication and engagement functions
  // for contact section
  {
    resource: Contact,
    options: {
      navigation: { name: "User Management", icon: "User" },
      properties: {
        _id: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
  },

  //   get in touch section
  {
    resource: User,
    options: {
      navigation: { name: "User Management", icon: "User" },
      properties: {
        _id: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
  },

  //  authentication based on role
  {
    resource: Users,
    options: {
      navigation: { name: "User Management", icon: "User" },
      properties: {
        _id: {
          isVisible: { list: false, filter: false, show: false, edit: false },
        },
        password: {
          isVisible: { list: false, filter: false, show: false, edit: true },
        },
      },

      actions: {
        new: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
          before: async (request) => {
            if (request.payload?.password) {
              // Hash the password before saving a new user
              request.payload.password = await hashPassword(
                request.payload.password
              );
            }
            return request;
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
          before: async (request) => {
            if (request.method === "post") {
              if (request.payload?.password) {
                // Hash the new password if it is being updated
                request.payload.password = await hashPassword(
                  request.payload.password
                );
              } else {
                // If password is not provided, remove it from the payload to avoid overwriting with empty
                delete request.payload?.password;
              }
            }
            return request;
          },
        },
        show: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
          after: async (response) => {
            // Ensure the password is not shown in the show view
            response.record.params.password = "";
            return response;
          },
        },
        list: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
          after: async (response) => {
            // Ensure the password is not shown in the list view
            response.records.forEach((record) => {
              record.params.password = "";
            });
            return response;
          },
        },
      },
    },
  },
];
