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
        <div className="container mx-auto">
            <div className=" font-display">
      <div className="card w-96 bg-base-100 shadow-xl bg-contain bg-center">
        <figure className=" pt-10">
          <img
            src={image}
            alt="House Image"
            className="rounded-xl h-[300px] "
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"> |  </h2>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-1">
              <CiLocationOn />
              <p>{tourists_spot_name}</p>
            </div>
          <p>Price: </p>
          </div>
          <div className="card-actions">
           <Link to={`/viewProperty/${id}`} ><button className="btn bg-[#006aff] text-[#fff]">View Property</button></Link> 
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default TouristsSpot;