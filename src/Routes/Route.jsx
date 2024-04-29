import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Login from "../Auth/Login/Login";
import Signup from "../Auth/SignUp/Signup";
import Home from "../Components/Home/Home";
import TouristSpotDetails from "../Home-Tourists-Spots-Section/TouristSpotDetails";
import AddTouristsSpot from "../Components/AddTouristsSpot/AddTouristsSpot";
import AllTouristsSpot from "../Components/AllTouristsSpot/AllTouristsSpot";
import ViewSingleTouristSpot from "../Components/AllTouristsSpot/ViewSingleTouristSpot";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import MyListPage from "../Components/MyListPage/MyListPage";
import UpdatedPage from "../Components/UpdatedPage/UpdatedPage";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/tourist/:id",
        element: 
        <PrivateRoute><TouristSpotDetails /></PrivateRoute>,
        
        loader: ({ params }) => fetch(`http://localhost:5000/tourist/${params.id}`)
      },
      {
        path: "/addtouristspots",
        element: <AddTouristsSpot />
      },
      {
        path: "/AllTouristsSpot",
        element: <AllTouristsSpot />,
        loader: () => fetch('http://localhost:5000/touristSpot') 
      },
      {
        path: "/ViewSingleTouristSpot/:id",
        element: <ViewSingleTouristSpot />,
        loader: ({ params }) => fetch(`http://localhost:5000/touristSpot/${params.id}`) 
      },
      {
        path:"/MyListPage/:email",
        element:<MyListPage/>,
        loader: ({ params }) => fetch(`http://localhost:5000/touristSpotByEmail/${params.email}`) 
      },
      {
        path:"/update/:id",
        element:<UpdatedPage></UpdatedPage>,
        loader: ({ params }) => fetch(`http://localhost:5000/touristSpot/${params.id}`) 
      }
    ]
  }
]);

export default Route;
