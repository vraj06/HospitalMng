import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload"; 
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";

// Load environment variables
config({ path: "./config/config.env" });

const app = express();

// CORS configuration
const corsOptions = {
  origin: [process.env.FRONTEND_URL_ONE, process.env.FRONTEND_URL_TWO, "https://starlit-capybara-865865.netlify.app"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Ensure OPTIONS is included
  allowedHeaders: ["Content-Type", "Authorization"], // Include necessary headers
  credentials: true, // If you need to send cookies or other credentials
};

app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Define routes
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

// Connect to the database
dbConnection();

// Error handling middleware
app.use(errorMiddleware);

export default app;