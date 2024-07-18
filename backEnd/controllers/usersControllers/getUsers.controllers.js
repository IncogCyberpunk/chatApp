import User from "../../models/users.models.js"


// we are creating this controller to get all users and display them in the sidebar like in messenger
const getUsers = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        // we are getting all users except the logged in user
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password ");
        // can exclude multiple values too: .select("-password -email");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log(`Error in getting the users \n ${error}`);
        res.status(400).json({ message: "Error in getting the users" });
    }
}

export default getUsers;