import { useLoaderData } from "react-router-dom";
import SingleTouristSpot from "./SingleTouristSpot";
import { useState } from "react";


const AllTouristsSpot = () => {
    const spots = useLoaderData();
    const [sortBy, setSortBy] = useState(""); 

    const handleSortChange = (e) => {
        setSortBy(e.target.value); 
    };

    const sortedSpots = spots.sort((a, b) => {
        if (sortBy === "ascending") {
            return a.average_cost - b.average_cost;
        } else if (sortBy === "descending") {
            return b.average_cost - a.average_cost;
        } else {
            return 0;
        }
    });
      
   
    console.log(spots)
    return (
        <div className="container mx-auto font-Murecho"> 
        <div className="text-center mb-5">
                <label >Sort by: Average Cost:</label>
                <select className="btn " id="sort" value={sortBy} onChange={handleSortChange}>
                    <option value="">Select</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </div>
        <div className="container mx-auto grid grid-cols-3 gap-5">
            {
                 sortedSpots && sortedSpots.map(spot=> <SingleTouristSpot key={spot._id} spot={spot}></SingleTouristSpot>)
            }
        </div>
        </div>
    );
};

export default AllTouristsSpot;