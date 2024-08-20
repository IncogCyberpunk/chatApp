import Conversation from "./conversation"
import useGetConversations from "../../../hooks/useGetConversations.js"
import getRandomEmoji from "../../../utils/emoji.js";

export default function Conversations(){
    const {loading,conversations} = useGetConversations();
    // console.log(`Converstaions stored in database are:`,conversations);
    
    return (
        <>
            <div className="flex flex-col  overflow-auto max-h-84">
               {conversations.map((conversation,index) => {
                
                    // explicit return from an arrow function
                   return (
                       <Conversation 
                       key={conversation._id}
                       //here conversations is an array of objects, so we are passing each object as a prop to the Conversation component 
                       conversation={conversation}
                       // the emoji returned by getRandomEmoji() is being passed 
                       emoji={getRandomEmoji()}
                       // to know if the conversation is the last one
                       isLastConversation={index === conversations.length - 1}
        
                       />
                    ) 
                    // or can simply use implicit return for the arrow function
                }
               )}
               {loading ? <span className='loading loading-spinner '></span> : null}
            </div>
        </>
    )
}