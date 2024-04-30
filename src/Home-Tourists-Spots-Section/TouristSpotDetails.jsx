import { useLoaderData } from "react-router-dom";
import {Helmet} from "react-helmet";

const TouristSpotDetails = () => {
    const tourist = useLoaderData();
    const {image,
        tourists_spot_name,
        country_Name,
        location,
        short_description,
        average_cost,
        seasonality,
        travel_time,
        totalVisitorsPerYear,
        email,
        name,
       }= tourist;
    return (
        <div className="container mx-auto font-display">
            <Helmet>
      <title>ShareTrip | View Tourist Spot</title>
    </Helmet>
            <div className="">
                <div className="hero-content flex-col gap-10 items-center  lg:flex-row">
                    <div className="  flex justify-center items-center  rounded-lg" style={{ backgroundColor: 'rgba(19, 19, 19, 0.05)' }}>
                        <img src={image} className="  h-[450px] rounded-lg " />
                    </div>
                    <div className="w-[100%]">
                        <h1 className="text-5xl font-bold">{tourists_spot_name}</h1>
                        <h1 className="p-1 rounded-lg text-xl mt-3 font-medium text-[#424242] " >Location: { location}</h1>
                        <hr className='-ml-0 h-[1px] border-none bg-slate-200 mx-auto w-[80%]' />
                        <div className="flex items-center gap-10">
                        <h1 className="p-1 rounded-lg text-lg font-bold text-[#006aff] -mt-2">Country Name: {country_Name}</h1>
                        <h1 className="p-1 rounded-lg text-lg font-bold  -mt-2">Average Cost: {average_cost}</h1>
                        </div>
                        
                        <hr className='-ml-0  h-[1px] border-none bg-slate-200 mx-auto w-[80%]' />
                        <div className="flex gap-10  text-[#424242]">
                                <p>Total Visitors PerYear:</p>
                                <p>{totalVisitorsPerYear}</p>
                            </div>
                        <p className="py-6"><span className="font-bold">Description: </span> {short_description}</p>
                        <div className='flex  gap-10'>
                            <p>Added By: </p>
                            <p className='bg-[#F3F3F3] p-1 rounded-lg text-base font-medium text-[#006aff]'>{email}</p>
                            <p className='bg-[#F3F3F3] p-1 rounded-lg text-base font-medium text-[#006aff]'>{name}</p>
                            
                        </div>
                        <hr className='-ml-0 h-[1px] border-none bg-slate-200 mx-auto w-[80%]' />
                        <div>
                           
                            <div className="flex gap-10 mt-3">
                                <p>Seasonality:</p>
                                <p>{seasonality}</p>
                            </div>
                            <div className="flex gap-10 ">
                                <p>Travel Time:</p>
                                <p>{travel_time}</p>
                            </div>
                            
                           

                        </div>
                        
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default TouristSpotDetails;