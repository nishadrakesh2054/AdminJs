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
import PointsTable from "../../models/PointsTableModel.js";
import GameGroup from "../../models/gameGroupModel.js";
import GamePointsTable from "../../models/gamePointsTable.js";

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
  /*---------------------------------------------------------------------------------------Photo or gallery  management--------------------------------------*/

  // for Hero or home slider section
  {
    resource: HeroSlider,
    options: {
      navigation: {
        name: "Media",
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
        name: "Media",
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
  // for brand logo
  {
    resource: BrandLogo,
    options: {
      navigation: {
        name: "Media",
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

  /*--------------------------------- -----------------------------------------------------events  Management--------------------------------------------------*/

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
  //   Game resource
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

  /*-----------------------------------------------------------------------------------------Academic resource management----------------------------------------*/

  //   academic resource
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
  //   Program resource
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

  /*--------------------------------------------------------------------------------------Game points Table--------------------------------------------------------*/
  // game points table resource
  {
    resource: PointsTable,
    options: {
      navigation: {
        name: "Points Table",
        icon: "Medal",
      },
      properties: {
        _id: { isVisible: false },
        schoolName: {
          position: 1,
          isRequired: true,
        },
        goldFirst: { position: 2, isRequired: true },
        silverSecond: { position: 3, isRequired: true },
        bronzeThird: { position: 4, isRequired: true },
        totalPoints: {
          position: 5,
          isDisabled: true,
          isSortable: true,
        },
        position: {
          position: 6,
          isDisabled: true,
          isSortable: true,
        },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
          before: async (request) => {
            if (request.payload.schoolName) {
              request.filters.schoolName = {
                $regex: request.payload.schoolName,
                $options: "i",
              };
            }
            return request;
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
          before: async (request) => {
            if (
              request.payload.goldFirst ||
              request.payload.silverSecond ||
              request.payload.bronzeThird
            ) {
              request.payload.totalPoints =
                request.payload.goldFirst * 5 +
                request.payload.silverSecond * 3 +
                request.payload.bronzeThird * 1;
            }
            return request;
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },

          before: async (request) => {
            if (
              request.payload.goldFirst ||
              request.payload.silverSecond ||
              request.payload.bronzeThird
            ) {
              request.payload.totalPoints =
                request.payload.goldFirst * 5 +
                request.payload.silverSecond * 3 +
                request.payload.bronzeThird * 1;
            }
            return request;
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
  },

  /*-------------------------------------------------------------------------------------Tournament Management-----------------------------------------------------*/
  // game group resources
  {
    resource: GameGroup,
    options: {
      navigation: {
        name: "Tournament Management",
        icon: "Medal",
      },

      properties: {
        name: {
          isTitle: true,
        },
        description: {
          type: "textarea",
        },
        gameId: {
          isVisible: { list: true, filter: true, show: true, edit: true },
        },
      },

      actions: {
        new: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "Admin",
        },
        edit: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "Admin",
        },
        delete: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "Admin",
        },
        show: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin &&
            (currentAdmin.role === "Admin" || currentAdmin.role === "editor"),
        },
        list: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin &&
            (currentAdmin.role === "Admin" || currentAdmin.role === "editor"),
        },
      },
    },
  },

  // game Point Table Resources
  {
    resource: GamePointsTable,
    options: {
      navigation: {
        name: "Tournament Management",
        icon: "Medal",
      },
      properties: {
        _id: { isVisible: false },
        schoolId: {
          isVisible: {
            list: true,
            filter: true,
            show: true,
            edit: true,
          },
          reference: "School",
          availableValues: async () => {
            const schools = await School.findAll();
            return schools.map((school) => ({
              value: school.id,
              label: school.name,
            }));
          },
        },
        gameId: {
          isVisible: { list: true, filter: true, show: true, edit: true },
          reference: "Game",
          availableValues: async () => {
            const games = await Game.findAll();
            return games.map((game) => ({
              value: game.id,
              label: game.nameWithCategory,
            }));
          },
        },
        groupId: {
          isVisible: { list: true, filter: true, show: true, edit: true },
          reference: "GameGroup", // Assuming "GameGroup" is a referenced collection
          availableValues: async () => {
            const groups = await GameGroup.findAll(); // Ensure GameGroup model is imported
            return groups.map((group) => ({
              value: group.id,
              label: group.name,
            }));
          },
        },
        played: {
          isVisible: {
            list: true,
            filter: true,
            show: true,
            edit: true,
          },
        },
        won: {
          isVisible: {
            list: true,
            filter: true,
            show: true,
            edit: true,
          },
        },
        lost: {
          isVisible: {
            list: true,
            filter: true,
            show: true,
            edit: true,
          },
        },
        drawn: {
          isVisible: {
            list: true,
            filter: true,
            show: true,
            edit: true,
          },
        },
        points: {
          isVisible: {
            list: true,
            filter: true,
            show: true,
            edit: true,
          },
        },
        additionalStats: {
          isVisible: {
            list: false,
            filter: false,
            show: true,
            edit: true,
          },
        },
      },
      actions: {
        new: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "Admin",
        },
        edit: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "Admin",
        },
        delete: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "Admin",
        },
        show: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin &&
            (currentAdmin.role === "Admin" || currentAdmin.role === "editor"),
        },
        list: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin &&
            (currentAdmin.role === "Admin" || currentAdmin.role === "editor"),
        },
      },
    },
  },

  /*-----------------------------------------------------------------------------------for Special Capms or events ------------------------------------------------*/

  // for Special Capms section
  {
    resource: SpecialCamps,
    options: {
      navigation: {
        name: "Events",
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

  /*--------------------------------------------------------------------------------Career model management--------------------------------------------------------*/
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
  // 2. career config
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

  /*--------------------------------- ------------------------------------------------communication and engagement functions----------------------------------------*/

  // for contact section
  {
    resource: Contact,
    options: {
      navigation: { name: "Communication", icon: "User" },
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
      navigation: { name: "Communication", icon: "User" },
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

  /*--------------------------------- -------------------------------------------------authentication on role based acces----------------------------------------------*/

  {
    resource: Users,
    options: {
      navigation: { name: "Admin Access Management", icon: "User" },
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
