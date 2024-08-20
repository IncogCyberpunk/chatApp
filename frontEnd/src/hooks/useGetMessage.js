import { useEffect, useState } from "react";
import toast from "react-hot-toast"
import useConversationStore from "../zustandStore/useConversation";

export default function useGetMessages() {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversationStore();
    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);

            try {
                const res = await fetch(`/api/messages/${selectedConversation._id}`);
                const data = await res.json();
                if(data.error) throw new Error(data.error);
                setMessages(data);
            } catch (error) {
                console.log("The error is "+error);
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }

        // done so that getMessages is called only when selectedConversation is true (i.e. a conversation is selected)
        if(selectedConversation?._id) getMessages();
        // dependency to re-run the effect when selectedConversation changes
    }, [selectedConversation?._id])

    return {loading,messages}
}