import { useEffect } from "react";
import { useSocketContext } from "../context/socketContext"
import useConversationStore from "../zustandStore/useConversation"

const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages,setMessages} = useConversationStore();

    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            setMessages([...messages,newMessage])
        })


        // this is a cleanup function that ensures that the event listener is removed when the component is unmounted so that every time the component is re-rendered , a new event listener is added instead of event listeners stacking up
        return ()=> socket?.off("newMessage");
    },[socket,messages,setMessages])
}

export default useListenMessages;