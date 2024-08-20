import toast from "react-hot-toast";
import {useState} from "react";
import { useAuthContext } from "../context/authContext";

const useLogin =  () => {
    const [loading, setLoading] = useState(false)
//     When you define the useLogin hook, the line const { setAuthUser } = useAuthContext(); is executed immediately when useLogin is called.
// This means that setAuthUser is captured in the scope of the useLogin hook as soon as the hook is invoked.
// so even if the login function inside the useLogin is only called later, it still has access to setAuthUser.
    const {setAuthUser}=useAuthContext();
    
    const login= async (username,password) => {

        const success = handleInputErrors(username, password);
        if(!success) return;

        setLoading(true);
        try {
            const res= await fetch("/api/auth/login",{
                method: "POST",
                headers:{ "Content-Type": "application/json"},
                body: JSON.stringify({username,password})  
            })
            const data= await res.json();

            if(data.error){
                throw new Error(data.error);
            }

            localStorage.setItem("user-info",JSON.stringify(data));
            setAuthUser(data);

            toast.success("Login successful");
            
        } catch (error) {
            console.log(error);

            //message is a property of the error object
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }

    return {loading,login};
}

export default useLogin;


function handleInputErrors(username, pasword){
    if (!username || !password){
        toast.error("Please fill in all fields");
        return false
    }

    return true
}