import mongoose from "mongoose";


// Message model is being created to send messages and capture the receiverId, senderId and the message
const messageSchema = new mongoose.Schema({
    senderId:{
        /* mongoose.Schema.Types.ObjectId indicates that senderId is a 
        reference to another document's _id field, specifically a User document*/
        type: mongoose.Schema.Types.ObjectId,
        // ref is used to refer to the model that the id is from
        ref: "User",
        required: true,
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    messageContent:{
        type: String,
        required: true,
    }
},{timestamps:true})

const Message= mongoose.model("Message",messageSchema);
export default Message;