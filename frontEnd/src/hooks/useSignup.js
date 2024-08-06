import {useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

const useSignup = () => {
    
    const [loading, setLoading] = useState(false);
    const { setAuthUser }  = useAuthContext();
     
    const signUp = async ({fullName,username,password,confirmPassword,gender})=>{
        const success = handleInputErrors(fullName,username,password,confirmPassword,gender);
        if (!success) return;

        
        setLoading(true);
        try {
            // we added the proxy in the vite.config.js file to avoid the CORS error
            const res= await fetch("/api/auth/signup",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                // JSON.stringify() expects a single value or an object, so we passed an object with the values
                // JSON.stringify() converts the object to a string as body can only accepts a string
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
            })

            // JSON.parse() can be used to convert a string to an object

            const data = await res.json();
            
            // here the res.json() from backend sends an error and we are using toast to 
            // display the error message from the data object
            if (data.error){
                /* when data.error is obttained from a bad request ,
                new error is thrown and then control leaves the try block 
                and  goes to the catch block so the toast.error() is
                executed with error.message being the data.error */
                throw new Error(data.error);
            }

            //localstorage the token by saving the data object as "user-info" by converting it to a string
            localStorage.setItem("user-info",JSON.stringify(data));
            // context
            setAuthUser(data);

            console.log("Response from the server after attempt of signing up")
            console.log(data);
            
            toast.success("Sign up successful");
        } catch (error) {
            console.log(error)
            toast.error(error.message);
            
        }
        finally{
            setLoading(false);
        }
        
    };

    return {loading , signUp}

}
 

export default useSignup


function handleInputErrors(fullName,username,password,confirmPassword,gender){
    if (!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("Please fill in all fields");
        return false
    }

    if (password !== confirmPassword){
        toast.error("Passwords do not match ");
        return false
    }

    if(password.length <6){
        toast.error("Password must be at least 6 characters long");
        return false
    }

    return true
}