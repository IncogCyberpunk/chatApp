const logOut=(req,res) => {
    try {
        res.cookie("jwtToken",'',{maxAge: 0});
        res.status(200).json({message:"Logged out successfully"});
    } catch (error) {
        console.log("Internal server error \n",error);
        res.status(500).json({error:"Something went wrong"});
    }
}

export default logOut;