import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/authContext.jsx"; 
import { SocketContextProvider } from "./context/socketContext.jsx";

/* 
Ensure that AuthContextProvider wraps the App component in main.jsx. 
This guarantees that the context is available when useAuthContext 
is called in the App component.
*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    {/* if the AuthContextProvider is being setup in app.jsx , 
    acc. to the flow of code useAuthContext will be rendered/called earlier than the 
    AuthContextProvider is setup/rendered ; which makes the useAuthContext to be undefined
     */}
    <AuthContextProvider>
      <SocketContextProvider>
      <Toaster />
      <App />
      </SocketContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);


// 3:22:00 
