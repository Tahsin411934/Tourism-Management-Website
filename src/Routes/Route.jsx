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
import CardsOfSpecificCountry from "../Components/Countries/CardsOfSpecificCountry";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
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
        
        loader: ({ params }) => fetch(`https://tourism-management-website-server-beta.vercel.app/tourist/${params.id}`)
      },
      {
        path: "/addtouristspots",
        element: <PrivateRoute><AddTouristsSpot /></PrivateRoute>
      },
      {
        path: "/AllTouristsSpot",
        element:<PrivateRoute> <AllTouristsSpot /></PrivateRoute>,
        loader: () => fetch('https://tourism-management-website-server-beta.vercel.app/touristSpot') 
      },
      {
        path: "/ViewSingleTouristSpot/:id",
        element: <PrivateRoute><ViewSingleTouristSpot /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://tourism-management-website-server-beta.vercel.app/touristSpots/${params.id}`) 
      },
      {
        path:"/MyListPage/:email",
        element:<PrivateRoute><MyListPage/></PrivateRoute>,
        loader: ({ params }) => fetch(`https://tourism-management-website-server-beta.vercel.app/touristSpotByEmail/${params.email}`) 
      },
      {
        path:"/update/:id",
        element:<UpdatedPage></UpdatedPage>,
        loader: ({ params }) => fetch(`https://tourism-management-website-server-beta.vercel.app/touristSpots/${params.id}`) 
      },
      {
        path:"/countries/:country",
        element:<PrivateRoute><CardsOfSpecificCountry/></PrivateRoute>,
        loader:({params})=> fetch(`https://tourism-management-website-server-beta.vercel.app/touristSpot/${params.country}`)
      }
    ]
  }
]);

export default Route;
