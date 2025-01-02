import {useState} from 'react';
import {useAuthContext} from '../context/authContext';
import toast from 'react-hot-toast';
import useConversationStore from '../zustandStore/useConversation';

const useLogout = () => {
    const [loading,setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();
    const [clickCount,setClickCount]= useState(0);
    const {setSelectedConversation}=useConversationStore();
    
    const logout =  async () => {
        setLoading(true);
        
        try {
            const res = await fetch("/api/auth/logout",{
                method: "POST",
                headers:{ "Content-Type":"application/json"},
            })
            const data= await res.json();
            if(data.error){
                throw new Error(data.error);
            }

            localStorage.removeItem("user-info")
            setAuthUser(null);
            if (localStorage.getItem("user-info") === null && clickCount === 0){
                toast.success("Logged out successfully");
                setClickCount(1);
            }
            else{
                toast.error("Already logged out");
            }
            setSelectedConversation(null);
        } catch (error) {
            console.log(error.message);
            toast.error("Error logging out");
        } finally{
            setLoading(false);

        }
    }

    return {loading, logout}
}

export default useLogout;