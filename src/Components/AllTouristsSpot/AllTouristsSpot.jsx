import { useLoaderData } from "react-router-dom";
import SingleTouristSpot from "./SingleTouristSpot";


const AllTouristsSpot = () => {
    const spots = useLoaderData();
    
      
   
    console.log(spots)
    return (
        <div className="container mx-auto"> 
        <div className="container mx-auto grid grid-cols-3 gap-5">
            {
                 spots && spots.map(spot=> <SingleTouristSpot key={spot._id} spot={spot}></SingleTouristSpot>)
            }
        </div>
        </div>
    );
};

export default AllTouristsSpot;