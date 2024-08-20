import jwt, { decode } from 'jsonwebtoken';
import User from "../models/users.models.js";

const protectMessageRoute = async (req, res, next) => {
    try {
        // jwtToken is the name that we have given to the cookie that we have set in the browser in the generateWebToken.js file
        // here we are checking if the jwtToken cookie is present in the request or not
        // but for receiving the cookie in the request we need to install the cookie-parser package
        const token = req.cookies.jwtToken;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized access - Please login to access this route" });
        }

        // jwt.verify() is a method that verifies the token that we have received from the client side with the secret key that we have set in the .env file

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        // console.log(decodedToken);
        /* 
        here `uniqueEntryId` is contained in the payload of the token that is received from the
        client's browser during response 
        the payload is assigned to `decodedToken` variable upon succussful verification of the token
        `uniqueEntryId` is the same payload that was sent while signing and sending a cookie during the
        signup or login to the client's browser as response
        */
        /* 
        here the details of a certain user is being retrieved from the database and we are unselecting 
        the password values of a user when retrieving data from the database
        .select() is a function of the mongoose
        */
        const user = await User.findById(decodedToken.uniqueEntryId).select("-password");

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        req.user = user;

        next();

    } catch (error) {
        console.error(error);

        // Handle token verification errors specifically
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: "Invalid token" });
        }

        // Handle token expiration errors specifically
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: "Token expired" });
        }

        // Handle other errors generically
        res.status(500).json({ error: "Internal server error" });
    }

}


export default protectMessageRoute;