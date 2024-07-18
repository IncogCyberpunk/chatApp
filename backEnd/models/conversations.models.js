import mongoose from "mongoose";

// we are making a model of converstaions to show the conversations list as we can see in Messenger
const conversationSchema= new mongoose.Schema({
    // it's saying participants is an array and it contains objects of type ObjectId and the ref is User
    participantsId:[
        {
            /*
            An array of mongoose.Schema.Types.ObjectId indicates that 
            participants is an array of references to User documents.
            */
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],

    /* participants is an array and we are defining the schema for that array inside braces{} */
    // the messages' id sent by someone are saved here
    messagesId: [
        {
            /* 
            -Type: An array of mongoose.Schema.Types.ObjectId indicates that message is an array of references to Message documents.
            -default: [] sets the default value to an empty array, ensuring that a conversation starts with no messages.
            */
            type: mongoose.Schema.Types.ObjectId,
            // The ref: "Message" tells Mongoose that the ObjectIds in the messagesId array are references to documents in the Message collection which have an _id field same as that inthe messagesId array.
            // this is helpful to get messages from their unique objectIds'
            ref: "Message",
            default: [],
        },
    ]
},{timestamps: true});

const Conversation= mongoose.model("Conversation", conversationSchema);
    
export default Conversation;