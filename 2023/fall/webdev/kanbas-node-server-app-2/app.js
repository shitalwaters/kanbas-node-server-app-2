import express from 'express';
import session from "express-session";
import "dotenv/config";
import Hello from "./hello.js"
import Lab5 from "./Lab5.js";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
mongoose.connect("mongodb://localhost:27017")
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from './assignments/routes.js';

const app = express()
console.log(process.env.FRONTEND_URL);
app.use(
    cors({   credentials: true,
        origin: process.env.FRONTEND_URL})
);
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
  }
  app.use(session(sessionOptions));
  
app.use(express.json());

UserRoutes(app);
AssignmentRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app)
Hello(app)
app.listen(process.env.PORT || 4000);