import {Server } from "socket.io";
import express from "express";
import http from "http";
import cors from "cors";

const app=express();

// done to create a http server instance from the express app
const server = http.createServer(app);
const io= new Server(server,{
    cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
        credentials: true,
	},
})

// receiverkey is the key of the userSocketMap object
// this returns the value of the key which is the socket.id of the receiver
export const getReceiverSocketId = (receiverkey)=> userSocketMap[receiverkey];

const userSocketMap = {};

// listening to when the user connects to the server at localhost:3000 
io.on("connection",(socket) => {
    console.log("User connected ",socket.id)

    const userId=socket.handshake.query.userId;
    if(userId != "undefined"){
        // creating a key-value pair in userSocketMap object with key as userId and value as socket.id
        userSocketMap[userId] = socket.id;
    }

    io.emit("getOnlineUsers",Object.keys(userSocketMap))

    // socket.on() is used to listen to the certain events both in client and server side
    socket.on("disconnect",() => {
        console.log("User disconnected",socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers",Object.keys(userSocketMap))
    })
})

export {app,io,server}