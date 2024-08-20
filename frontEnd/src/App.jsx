import React from "react";
import {createBrowserRouter,RouterProvider,Navigate,} from "react-router-dom";
import { AuthContextProvider, useAuthContext } from "./context/authContext.jsx";
import Login from "./pages/login/login.jsx";
import SignUp from "./pages/signUp/signUp.jsx";
import Home from "./pages/home/home.jsx";


const App = () => {
  // if not destructed then authUser simply holds the values returned by useAuthContext
  const {authUser} = useAuthContext();
  // here authUser is a state and if it changes the condition is checked again and so the redirecting is done

  const router = createBrowserRouter([
    {
      path: "/",
     
      /*
      element: authUser ? <Home/> : <Login/> 
       same as using navigate to redirect to pages but navigiate is more efficient
       as the element is not rendered and the page is redirected and the url too changes itself
       */
      element: authUser ? <Home /> : <Navigate to="/login" />,
    },
    {
      path: "/home",
      element: authUser ? <Home /> : <Navigate to="/login" />,

    },
    {
      path: "/login",
      element: authUser ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: (authUser ? <Navigate to="/" /> : <SignUp />),
    },
  ]);
  // FOR REDIRECTING PAGES USE NAVIGATE

  return (
    // <AuthContextProvider>
        <div className="p-4 h-screen flex items-center justify-center">
          <RouterProvider router={router} />
        </div>
    // </AuthContextProvider>
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
