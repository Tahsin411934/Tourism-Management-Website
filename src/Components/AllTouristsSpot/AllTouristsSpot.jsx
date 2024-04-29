import { useLoaderData } from "react-router-dom";
import SingleTouristSpot from "./SingleTouristSpot";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

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
            <Fade cascade damping={0.1}>
            <div className=" mb-10 text-center p-1 rounded-xl" >
                <h1 className=' mt-5 text-2xl lg:text-2xl font-bold text-[#1A2B3D]'>Explore Your Tourist Spot </h1>
                <p className='text-slate-600 mt-3'>
                    Prepare to experience  rich culture and explore the majestic beauties of Cox’s Bazar, Sylhet,  Bandarban, <br></br> Sajek Valley,   Rangamati etc. Plan your trip now!  </p>
            </div> </Fade>
        <div className="text-center mb-10">
                <label ></label>
                <select className="btn bg-[#006aff] text-white hover:bg-[#2d5081]" id="sort" value={sortBy} onChange={handleSortChange}>
                    <option disabled value="">Sort by: Average Cost:</option>
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