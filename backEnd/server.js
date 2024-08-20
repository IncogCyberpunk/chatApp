import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import {app,server} from "./socket/socket.js";
import cors from "cors"
import path from "path"

import authRoutes from "./routes/auth.routes.js";
import messagesRoutes from "./routes/messages.routes.js";
import usersRoutes from "./routes/users.routes.js";

import connectToMongoDb from "../backEnd/db/connectToMongoDb.js";

// __dirname is a special global variable in Node.js that is automatically defined by Node.js (in CommonJS modules) to represent the absolute path of the directory containing the currently executing file.
// in ES modules (type: module in package.json) __dirname is not available by default, so we have to define it manually using path.resolve()
// path.resolve() returns the absolute path of the current working directory
const __dirname = path.resolve();

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


// providing the path to serve the static files by using path.jon to join the path of root directory with the frontEnd/dist directory
app.use(express.static(path.join(__dirname,"frontEnd/dist")))
// dist folder is created after building the react app using npm run build where all the static files are stored

// this means any url  not matched by the above routes will be served the index.html file
app.get("*",(req,res)=>{
    // same as path.join(__dirname,"frontEnd/dist/index.html")
    res.sendFile(path.join(__dirname,"frontEnd","dist","index.html"))
})

server.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`Server is running on port ${PORT}`);
})