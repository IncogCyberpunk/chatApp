import { useSocketContext } from "../../../context/socketContext";
import useConversationStore from "../../../zustandStore/useConversation";


// `conversation` is an object prop that is passed to the component from the Conversations component
export default function Conversation({conversation,emoji,isLastConversation}) {
  const {selectedConversation, setSelectedConversation} = useConversationStore();
  // ?. is the optional chaining operator. It returns undefined if the property is not found,which is used here so that the code doesn't break if selectedConversation is null or undefined.
  const isSelected = selectedConversation?._id === conversation._id;

  const {onlineUsers}= useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div className={`flex  gap-5 justify-between items-center hover:bg-sky-500 rounded px-4 cursor-pointer py-2 ${isSelected ? "text-xl bg-violet-600": ""}`} 
      onClick={() => setSelectedConversation(conversation)} >

        <div className={`avatar ${isOnline ? "online" : ""}`} >
          <div className="w-14 rounded-full">
            <img src={conversation.profilePicture} alt="User avatar" srcset="" />
          </div>
        </div>

        <div className="flex flex-1 justify-between gap-3">
          <p className={`font-bold text-gray-300 `}>{conversation.fullName} </p>
          <span className="text-2xl">{emoji}</span>
        </div>
        
      </div>
      {isLastConversation? null : <div className="divider my-0 py-0 h-2 "></div>}
    </>
  );
}
