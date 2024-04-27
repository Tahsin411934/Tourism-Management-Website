import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Layouts/Root";
import Login from "../Auth/Login/Login";
import Signup from "../Auth/SignUp/Signup";
import Home from "../Components/Home/Home";

  const Route = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root> ,

      children:[
        {
            path:"/",
            element:<Home></Home>

        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
            path:"/signup",
            element: <Signup></Signup>
        }
      ]
    },
  ]);

export default Route;