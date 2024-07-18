import User from "../../models/users.models.js";
import bcrypt from 'bcryptjs';
import generateToken from "../../utils/generateWebToken.js";

 const signUp= async(req,res) => {
    try {
        // done to trim and remove the white spaces from the start and end of the string so that it can be destructured as const later
        // .trim() METHOD RETURNS A NEW STRING INSTEAD OF CHANGING THE ORIGINAL STRING
        req.body.username = req.body.username.trim();
        const {fullName,username,password,confirmPassword,gender}=req.body; //destructuring the request body
        console.log("Request body: ",req.body);
        if (password !== confirmPassword) {
            return res.status(400).json({error:"Passwords do not match"});
        }
        
        const user= await User.findOne({ username });

        if(user){
            return res.status(400).json({error:"User already exists. Try another one"});
        }

        //encrytping the password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(password,salt);

        const boyProfile=`https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfile=`https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser= new User({

            // `fullName,` is equivalent to `fullName:fullName,`
            fullName: fullName,
            username,
            password: hashedPassword,
            gender,
            profilePicture: gender.toLowerCase() === "male" ? boyProfile : girlProfile,
        })

        if(newUser){
            // generate JWT web tokens 
             await generateToken(newUser._id,res)

            await newUser.save().then(() => {
                console.log("User saved successfully into the database");
            })
    
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                profilePicture: newUser.profilePicture
            });
        }
        else{
            res.status(400).json({error:"Something went wrong"});   
        }

    } catch (error) {
        console.log("Internal server error \n",error);
        res.status(500).json({error:"Something went wrong"});
        
    }
}


export default signUp;