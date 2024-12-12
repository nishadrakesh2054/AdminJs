import AdminJSExpress from "@adminjs/express";
import express from "express";
import connectDatabase from "./db/Database.js";
import galleryRoutes from "./routes/galleryRoute.js";
import contactRoutes from "./routes/contactRoute.js";
import brandLogoRoutes from './routes/brandRoute.js';
import admin from "./src/admin/adminjsSetup.js";
import cors from 'cors'
import morgan from "morgan";
import dotenv from 'dotenv';
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 3000;
const app = express();

// Admin credentials (replace with a more secure method in production)
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

  // Middleware to inject FontAwesome into AdminJS
  app.use("/admin", (req, res, next) => {
    res.locals.fontAwesome =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    next();
  });

  // Use the authenticated router
  app.use(admin.options.rootPath, adminRouter);

  //   all routes here defined
  app.use("/api/galleries", galleryRoutes);
  app.use("/api/contact", contactRoutes);
  app.use('/api/brand-logos', brandLogoRoutes);


  // Start the server
  app.listen(PORT, () => {
    console.log(
      `AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
    );
  });
};

start();
