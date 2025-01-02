import { useEffect } from "react";
import { useSocketContext } from "../context/socketContext"
import useConversationStore from "../zustandStore/useConversation"

import notificationSound  from "../assets/notification.mp3"

const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages,setMessages} = useConversationStore();

    useEffect(()=>{
        // here an event is being attached to the socket so removing off the event listener is very important
        socket?.on("newMessage",(newMessage)=>{
            // adding a `shouldShake` property to the newMessage object to later trigger the shake animation in the Message component
            const audio= new Audio(notificationSound);
            audio.play();
            newMessage.shouldShake=true;
            setMessages([...messages,newMessage])
        })


        
        /* this is a cleanup function that ensures that the event listener attarched to the socket 
        is removed when the component is unmounted so that every time the component is re-rendered
         , a new event listener is added to the socket instead of present and to prevent event listeners stacking up*/
        // VERY ESSENTIAL TO DO WHEN ATTACHING EVENTS TO SOCKET (e.g. socket?.on("newMessage"),event as done above)
        return ()=> socket?.off("newMessage");
    },[socket,messages,setMessages])
}

export default useListenMessages;