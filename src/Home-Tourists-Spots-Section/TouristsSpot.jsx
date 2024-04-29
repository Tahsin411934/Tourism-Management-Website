import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";


const TouristsSpot = ({touristsSpot}) => {
    const {image,
        tourists_spot_name,
        country_Name,
        location,
        short_description,
        average_cost,
        seasonality,
        travel_time,
        totalVisitorsPerYear,
        User_Email,
        User_Name,
        id }= touristsSpot;
    return (
      <>
        <div className="container mx-auto">
            <div className=" font-display">
      <div className="card w-80 bg-base-100 shadow-xl bg-contain mb-10 bg-center">
        <figure className="w-[100%] pt-10">
          <img
            src={image}
            alt="House Image"
            className="rounded-xl h-[200px] "
          />
        </figure>
        <div className="flex justify-center items-center">
        <div className="card-body items-center ">
          <h2 className="card-title">{tourists_spot_name} | {country_Name} </h2>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-1">
              <CiLocationOn />
              <p>{location}</p>
            </div>
          <p>Cost: {average_cost} </p>
          </div>
          <div className="card-actions">
           <Link to={`/tourist/${id}`} ><button className="btn bg-[#006aff] text-[#fff]">View Details</button></Link> 
          </div>
        </div>
        </div>
      </div>
    </div>
   
        </div>
        
        </>
    );
};

export default TouristsSpot;