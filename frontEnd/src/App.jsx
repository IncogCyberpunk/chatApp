import React from "react";
import { createBrowserRouter, RouterProvider, Navigate, Link } from "react-router-dom";
import { AuthContextProvider, useAuthContext } from "./context/authContext.jsx";
import Login from "./pages/login/login.jsx";
import SignUp from "./pages/signUp/signUp.jsx";
import Home from "./pages/home/home.jsx";


const App = () => {
  const { authUser } = useAuthContext();
  
  const router = createBrowserRouter([
    {
      path: "/",

      /* same as using navigate to redirect to pages but navigiate is more efficient
       as the element is not rendered and the page is redirected and the url too changes itself*/
      // element: authUser ? <Home/> : <Login/> ,
      element:  authUser ? <Home/>: <Navigate to="/login"/>,
    },
    {
      path: "/login",
      element:  authUser ? <Navigate to="/" /> : <Login/>,
      // element: authUser ? <Home/> : <Login/>,
    },
    {
      path: "/signup",
      element:  authUser ? <Navigate to="/" /> : <SignUp/>,
      // element: authUser ? <Home/> : <SignUp/>,
    },
  ]);

    // FOR REDIRECTING PAGES USE NAVIGATE

    return (
          <div className="p-4 h-screen flex items-center justify-center">
            <AuthContextProvider>
              <RouterProvider router={router} />
            </AuthContextProvider>
          </div>
    );
  };

export default App;


  /* 
  TRADITIONAL WAY OF ROUTING (need to import BrowserRouter from react-router-dom)
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />} />
  <Route path="/home" element={<Home />} />
  <Route path="/aboutus" element={<AboutUs />} />
  <Route path="/contactus" element={<ContactUs />} />
  <Route path="/reportabug" element={<ReportABug />} />
  <Route path="/user/:username" element={<User />} />
  <Route path="/user/:username/post/:postid" element={<Post />} />
  </Routes>
  </BrowserRouter>
  */