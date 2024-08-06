import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/authContext.jsx"; 

/* 
Ensure that AuthContextProvider wraps the App component in main.jsx. 
This guarantees that the context is available when useAuthContext 
is called in the App component.
*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Toaster />
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);



