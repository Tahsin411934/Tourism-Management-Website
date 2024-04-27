import { useLoaderData } from "react-router-dom";


const AllTouristsSpot = () => {

    const spots= useLoaderData();
    console.log(spots)
    return (
        <div>
            
        </div>
    );
};

export default AllTouristsSpot;