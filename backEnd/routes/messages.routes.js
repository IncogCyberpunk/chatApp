import express from 'express';
import sendMessages from "../controllers/messagesControllers/sendMessages.controllers.js";
import getMessages from "../controllers/messagesControllers/getMessages.controllers.js";
import checkCookieAndToken from "../middlewares/checkCookies.middleware.js";

const router=express.Router();

router.get("/:id",checkCookieAndToken,getMessages)
// checkCookieAndToken is a custom middleware that checks if user is logged in or not and if there is such user in the database or not
router.post('/send/:id',checkCookieAndToken,sendMessages);

export default router;