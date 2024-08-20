import {useAuthContext }from "../../context/authContext"
import formatTime from "../../utils/convertToReadableTime";
import useConversationStore from "../../zustandStore/useConversation";


export default function Message({ message, messageContent }) {
  const { authUser } = useAuthContext();
  const { selectedConversation }= useConversationStore();
  const fromMe = message.senderId === authUser._id;
  const chatClassType = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePicture : selectedConversation.profilePicture;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gray-700"; 
  const shakeClass = message.shouldShake ? "shake": ""

  const deliveredTime =formatTime(message.createdAt);

  return (
    <>
      <div className="">
        <div className={`chat ${chatClassType}`}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src={profilePic}
              />
            </div>
          </div>
          {/* <div className="chat-header pr-3">
            <span className="font-bold text-white pl-3">You</span>
          </div> */}
          {/* break-all property is used so that the text breaks when the max. width and the max. height condiitons are met (it's diff. than overflow) */}
          <div className={`chat-bubble max-w-48 max-h-32 break-all text-white overflow-y-scroll overflow-x-clip ${shakeClass} ${bubbleBgColor}`}>{messageContent}</div>
          <div className="chat-footer opacity-90">{deliveredTime}</div>
        </div>
      </div>
    </>
  );
}
