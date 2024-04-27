import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Layouts/Root";
import Login from "../Auth/Login/Login";
import Signup from "../Auth/SignUp/Signup";
import Home from "../Components/Home/Home";
import TouristSpotDetails from "../Home-Tourists-Spots-Section/TouristSpotDetails";
import AddTouristsSpot from "../Components/AddTouristsSpot/AddTouristsSpot";
import AllTouristsSpot from "../Components/AllTouristsSpot/AllTouristsSpot";


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
        },
        {
          path:"/tourist/:id",
          element: <TouristSpotDetails></TouristSpotDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/tourist/${params.id}`)
        },
        {
          path:"/addtouristspots",
          element:<AddTouristsSpot></AddTouristsSpot>
        },
        {
          path:"/AllTouristsSpot",
          element: <AllTouristsSpot></AllTouristsSpot>,
          loader:()=> fetch('http://localhost:5000/touristSpots')
        }
      ]
    },
  ]);

export default Route;