import jwt from "jsonwebtoken";

const generateToken = (uniqueEntryId, res) => {
    /* 
    here uniqueEntryId is the payload that is being encoded and being sent to the client 
    - 
    PAYLOAD: Part of the token that contains the claims or data (such as user information) that you want to transmit securely.
    The payload carries information that identifies the user and possibly other claims. 
    This allows the server to authenticate the user and manage sessions without maintaining server-side session state.
    */
   // uniqueEntryId is passed through braces to make it an object (if not passed through braces only it's value will be passed) such that payload contains key-value pair type of information of the uniqueEntryId
    const token = jwt.sign({ uniqueEntryId }, process.env.JWT_SECRET_KEY, {
        expiresIn: "10d",
    });

    // set the token in the cookie while sending the response
    /* syntax of res.cookie() method:
      res.cookie(name, value, [options]);
      - options: (Optional) An object containing additional options for the cookie, such as maxAge, expires, path, domain, secure, httpOnly, etc.
    */

    res.cookie("jwtToken", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // in milliseconds
        httpOnly: true, //prevent XSS attacks cross-site scripting attacks
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production" ? true : false,
    });
};

export default generateToken;
