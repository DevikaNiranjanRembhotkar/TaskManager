import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connect from "./src/db/connect.js";
import cookieParser from "cookie-parser";
import fs from "node:fs";
import errorHandler from "./src/helpers/errorhandler.js";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

// middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// error handler middleware
app.use(errorHandler);

//routes
const routesPath = join(__dirname, 'src', 'routes');
const routeFiles = fs.readdirSync(routesPath);

routeFiles.forEach((file) => {
  // use dynamic import
  import(join(routesPath, file))
    .then((route) => {
      app.use("/api/v1", route.default);
    })
    .catch((err) => {
      console.log("Failed to load route file:", file, err);
    });
});

const server = async () => {
  try {
    await connect();

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log("Failed to start server.....", error.message);
    process.exit(1);
  }
};

server();