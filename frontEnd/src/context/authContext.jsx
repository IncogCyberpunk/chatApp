import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// done so that we can simply the syntax: 
// values = useContext(AuthContext); to values = useAuthContext();
export const useAuthContext = () => {
  // useContext(AuthContext) stores the context value, i.e. `value` prop of the nearest <AuthContext.Provider> component
  return useContext(AuthContext);
};



/* done to simplify the syntax anywhere AuthContext is being wanted to use 

import {AuthContext}  from "./authContext.jsx";

<Component>
    <AuthContext.Provider value={{authUser,setAuthUser}} />
</Component>
*/
// here children prop is being destructured from the props object
export const AuthContextProvider = ({children}) => {
  const [authUser, setAuthUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user-info")) || null;
    } catch (error) {
      console.error("Failed to parse user info from localStorage", error);
      return null;
    }
  });

  return (
    // AuthContext is the context created above
    /* 
    The {children} prop is necessary in the AuthContextProvider component
     to render any nested components that are wrapped by the provider.
      This is how you pass down the context to any child components that 
      need to consume it. Without {children}, the provider component would not render its children,
       meaning none of the wrapped components would appear in the application.
    */
   // value prop is used to pass the values that can be futher accessed by the useAuthContext function/hook defined above
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
