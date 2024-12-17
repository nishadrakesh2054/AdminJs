import AdminJSExpress from "@adminjs/express";
import * as url from "url";
import express from "express";
import connectDatabase from "./db/Database.js";

import admin from "./src/admin/adminjsSetup.js";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";
import os from "os";

// all routes imported 
import galleryRoutes from "./routes/galleryRoute.js";
import contactRoutes from "./routes/contactRoute.js";
import brandLogoRoutes from "./routes/brandRoute.js";
import getTouchRoutes from "./routes/getTouchRoute.js";
import heroRoutes from "./routes/heroRoute.js";
import academyRoute from "./routes/academyRoute.js";
import programRoutes from "./routes/programRoute.js";
import ageGroupRoutes from "./routes/ageGroupRoute.js";





const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const PORT = 3000;
const app = express();

// Admin credentials (replace with a more secure method in production)
// const DEFAULT_ADMIN = {
//   email: process.env.ADMIN_EMAIL,
//   password: process.env.ADMIN_PASSWORD,
// };
os.tmpdir = () => "D:\\temp";
const DEFAULT_ADMIN = {
  email: "admin@example.com",
  password: "password",
};
// Authentication logic
const authenticate = async (email, password) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

const start = async () => {
  // Middleware to parse JSON requests
  app.use(express.json());
  app.use(cors());
  app.use(morgan("dev"));
  dotenv.config();

  app.use("/uploads", express.static(path.join(__dirname, "/public/uploads")));
  app.use(express.static(path.join(__dirname, "public")));
  //   app.use(express.static(path.join(process.cwd(), "public")));

  // Connect to MongoDB
  await connectDatabase();

  // Add authentication to AdminJS
  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,

    {
      authenticate,
      cookieName: "adminjs",
      cookiePassword: "sessionsecret",
    },
    null,
    {
      resave: true,
      saveUninitialized: true,
      secret: "sessionsecret",
      cookie: {
        httpOnly: process.env.NODE_ENV === "production",
        secure: process.env.NODE_ENV === "production",
      },
    }
  );

  // Use the authenticated router
  app.use(admin.options.rootPath, adminRouter);

  //   all routes here defined
  app.use("/api/galleries", galleryRoutes);
  app.use("/api/contact", contactRoutes);
  app.use("/api/brandlogos", brandLogoRoutes);
  app.use("/api/getintouch", getTouchRoutes);
  app.use("/api/hero", heroRoutes);
  app.use("/api/academy", academyRoute);
  app.use("/api/program", programRoutes);
  app.use("/api/agegroup", ageGroupRoutes);

  // Catch-all route for non-API and non-admin routes (React App)
  app.get("*", (req, res) => {
    if (!req.path.startsWith("/api") && !req.path.startsWith("/admin")) {
      res.sendFile(path.join(__dirname, "public/index.html"));
    } else {
      res.status(404).send("Not Found");
    }
  });

  // Start the server
  app.listen(PORT, () => {
    console.log(
      `AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
    );
  });
};

start();
