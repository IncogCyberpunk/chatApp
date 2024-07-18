import express from 'express';

import getUsersForSidebar from "../controllers/usersControllers/getUsers.controllers.js"
import checkCookies from "../middlewares/checkCookies.middleware.js";

const router=express.Router();
// we are creating this route to get all users and display them in the sidebar like in messenger
router.get('/',checkCookies,getUsersForSidebar);

export default router;