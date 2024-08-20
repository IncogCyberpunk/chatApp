import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import {app,server} from "./socket/socket.js";

import authRoutes from "./routes/auth.routes.js";
import messagesRoutes from "./routes/messages.routes.js";
import usersRoutes from "./routes/users.routes.js";

import connectToMongoDb from "../backEnd/db/connectToMongoDb.js";

dotenv.config();

app.disable('x-powered-by'); // to disable the x-powered-by header so as to not expose that the backend is running on express
app.use(express.json());// to parse incoming Json data from the request body to the server
app.use(cookieParser());// to parse the cookies that are sent from the client side to the server

const PORT=process.env.PORT || 5000;

app.use(cors())

// CUSTOM MIDDLEWARES
app.use("/api/auth",authRoutes);
app.use("/api/messages",messagesRoutes);
app.use("/api/users",usersRoutes);

server.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`Server is running on port ${PORT}`);
})