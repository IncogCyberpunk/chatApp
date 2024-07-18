import Conversation from "../../models/conversations.models.js";
import Message from "../../models/messages.models.js";

const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        // below is the id of the user that is trying to get messages
        // the id is got by the checkCookies middleware which gets the user trying to send or get the messages' id 
        const senderId = req.user._id;

        const conversations = await Conversation.findOne({
            //  here we are telling mongoose to find a conversation list which matches an array containing the senderId and the userToChatId
            participantsId: { $all: [senderId, userToChatId] },
        })
            /* The .populate("messagesId") function call tells Mongoose to replace the messagesId array(which is an array of ObjectIds referencing to the messages' Ids) in the Conversation document with the actual messages which have the same ObjectIds as stored in messagesId array .(i.e. it replaces the ObjectIds with the actual messages that match the ObjectIds)
            */
            .populate("messagesId");
        
        if (!conversations) {
            return res.status(200).json(["No messages found"]);
        }
        const messages= conversations.messagesId;
        res.status(200).json(messages);



    } catch (error) {
        console.log("Error in getting the messages \n Error: \n", error);
        res.status(500).json({ error: "Error in getting messages" });
    }
}

export default getMessages;