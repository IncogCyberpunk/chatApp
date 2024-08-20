import useConversationStore from '../zustandStore/useConversation';
import toast from 'react-hot-toast';
import { useState } from 'react';

// never make an hook async because it will return a promise not the things we desire to return 
function useSendMessage() {
    const [loading, setLoading] = useState(false);
    const { selectedConversation, messages, setMessages } = useConversationStore();

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message })
            })
            const data = await res.json();
            if (data.error) throw new Error(data.error);
            // need to fix that the last message sent doesn't contain the updated time
            setMessages([...messages, data])
            toast.success("Sent message successfully")
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { sendMessage, loading };
}

export default useSendMessage;