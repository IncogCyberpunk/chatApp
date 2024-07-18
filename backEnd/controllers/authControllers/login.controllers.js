import User from "../../models/users.models.js";
import bcrypt from 'bcryptjs';
import generateToken from "../../utils/generateWebToken.js";


const login = async(req, res) => {
    try {
        // renaming variables while destructuring i.e."aliasing"w
        const { username: usernameEntered, password: passwordEntered } = req.body;

        console.log(usernameEntered, passwordEntered);
        // checking if the exsiting user is in the database or not. If yes it returns an object else null
        const existingUser = await User.findOne({username: usernameEntered});

        /* The optional chaining operator(?.) is used to safely access properties of an object that might be null or undefined 
         so that instead of an error being returned  existingUser?.password will return undefined.
         The logical OR operator (||) is used to provide a default value if the left-hand side is false.
         If existingUser is undefined passwordEntered is compared with an empty string so isPasswordCorrect gets assigned false
         */
        const isPasswordCorrect = await bcrypt.compare(passwordEntered, existingUser?.password || "");

        
        if(!existingUser|| !isPasswordCorrect){
            return res.status(404).json({error: "Invalid credentials.Please try again"});
        }

        generateToken(existingUser._id,res);

        res.status(200).json({
            _id: existingUser._id,
            fullName: existingUser.fullName,
            userName: existingUser.username,
            profilePicture: existingUser.profilePicture
        })
        
    } catch (error) {
        console.log("Internal server error \n", error);
        res.status(500).json({ error: "Something went wrong" });
        
    }
}

export default login;