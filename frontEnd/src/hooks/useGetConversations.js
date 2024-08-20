import { useEffect, useState } from "react"
import toast from "react-hot-toast";


const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    // useEffect is a hook that runs after the first render of the component 
    // second argument is dependencies such as props or states  that decide when the useEffect is called ([] means it is called only once after the first render)
    useEffect(() => {
        // useEffect expects the first argument to return nothing(i.e. undefined) or  a be a synchronous cleanup function , not a Promise so we cannot use async await directly 
        const getConversations = async () => {
            // setLoading(true);
            // fetch("/api/conversations")
            // .then(res => res.json())
            // .then(data => {
            //     setConversations(data);
            // })
            // .catch(err => console.log(err))
            // .finally(() => setLoading(false))

            setLoading(true);
            try {
                const res = await fetch('/api/users');
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setConversations(data);
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            } finally {
                setLoading(false);
            }

        }
        getConversations();

    }, [])
    
    return { loading, conversations };
}

export default useGetConversations;