import {createContext, useState,useEffect,useContext} from 'react';
import { useAuthContext } from './authContext';
import io from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () => useContext(SocketContext);

export const SocketContextProvider = ({children}) => {
    const [socket,setSocket]=useState(null);
    const [onlineUsers,setOnlineUsers]=useState([]);
    const {authUser} = useAuthContext(); 

    useEffect(()=>{
        if(authUser){
            const socket= io("http://localhost:5000",{
                withCredentials: true,
                query:{
                    userId: authUser._id,
                }
            });

            setSocket(socket);

            //socket.on() is used to listen to events both in client and server side
            socket.on("getOnlineUsers",(users) => {
                setOnlineUsers(users);
            });

            return () => socket.close();
        }
        else{
            // disconnect the socket if the user is not authenticated
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[authUser])

  return (
    <SocketContext.Provider value={{socket,onlineUsers}}>
        {children}
    </SocketContext.Provider>
  )
}
