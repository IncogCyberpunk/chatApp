import express from "express"
import login from '../controllers/authControllers/login.controllers.js';
import signUp from '../controllers/authControllers/signup.controllers.js';
import logOut from '../controllers/authControllers/logout.controllers.js';

// WAY FOR CREATING CUSTOM MIDDLEWARES
// WE ARE USING MIDDLEWARES SO AS TO NOT MAKE THE ROUTES' CODE TOO CLUTTERED
// USING MIDDLEWARES WE CAN MAKE ROUTERS' CODE NEAT 
const router=express.Router();

// we use controllers to handle the logic of the routes i.e. the arrow functions which define 
// what to do when a certain route is hit are defined in the controllers
router.post("/signup",signUp)

router.post("/login",login)

router.post("/logout",logOut)


export default router;