import Conversation from '../../models/conversations.models.js';
import Message from '../../models/messages.models.js';
import { getReceiverSocketId } from '../../socket/socket.js';


const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        // we are capturing the receiver id from the url 
        const { id: receiverId } = req.params;
        /*we are not actually sending the userId by ourselves in req.body so
         we are going to use a middle ware that puts userId in the req.body automatically*/
        const senderId = req.user._id;

        // looking in the database if any earlier conversation is present or not between the two users
        let conversation = await Conversation.findOne({
            participantsId: {
                $all: [senderId, receiverId],
            }
        })

        if (!conversation) {
            conversation = new Conversation({
                participantsId: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            receiverId,
            senderId,
            messageContent: message,
        })

        if (newMessage) {
            // push the newMessage's id into the messages which is defined in models/conversation.models.js
            conversation.messagesId.push(newMessage._id);
        }

        res.status(201).json(newMessage);


        // await conversation.save();
        // await newMessage.save();

        // better apporach to use the below instead of manually executing the individual promises
        // this way both of them run in parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        // SOCKET IO FUNCTIONALITY TO MAKE MESSAGING REALTIME
        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){
            //  io.to(<socketId>).emit() is used to emit an event to a specific socket(client)
            io.to(receiverSocketId).emit("newMessage",newMessage);
        }

    } catch (error) {
        console.log("Error in sendMessage controller", error.message);
        res.status(500).json({ error: "Internal server error" });

    }
}

export default sendMessage;