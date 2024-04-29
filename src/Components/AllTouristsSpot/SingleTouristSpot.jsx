import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from 'react-router-dom';

const SingleTouristSpot = ({spot}) => {
    const { 
        image,
        tourists_spot_name,
        location,
        average_cost,
        seasonality,
        travel_time,
        total_visitors_per_year,
        _id 
      } = spot || {};
    return (
        <div>

        

            <div className="">
            <div className=" bg-[#F3F3F3]  card  shadow-xl">
            <div className=" relative  p-3 rounded-xl   ">
                <figure><img className="h-[300px] w-full rounded-xl" src={image} alt="IMAGE" /></figure>
                <div className="card-body absolute top-[30%] left-20">
                    <h2 className="card-title text-white  p-2 rounded-lg text-center ">{tourists_spot_name}</h2>
                    
                    
                </div>
                
            </div> 
            <div className="p-7">
            <div className='flex  gap-10 -mt-1'>
                        <p className='bg-[#F3F3F3] shadow-md p-1 rounded-lg text-base font-medium text-[#23BE0A]'>{average_cost} Taka</p>
                        <p className='bg-[#F3F3F3] shadow-md p-1 rounded-lg text-base font-medium text-[#23BE0A]'>{travel_time}</p>
                    </div>
            <h1 className="card-title mt-2"> {location} </h1>
            <span className='  card-title p-1 rounded-lg text-base font-medium text-[#424242] '>Visitor Per Year: {total_visitors_per_year}</span>
            <hr className='-ml-0 h-[1px] border-none bg-slate-200 mt-2 mb-2 mx-auto w-[90%] m-auto' />

            <div className='card-title p-1 rounded-lg text-base font-medium text-[#424242] -mt-4 flex justify-between items-center'>
                        <p>Season</p>
                        <div className='flex justify-center items-center gap-2 mr-7 mt-1 mb-3'>
                            <p>{seasonality}  </p>
                            <TiWeatherPartlySunny />
                            
                        </div>
                    </div>
            <div className="w-full">
                        <Link to={`/ViewSingleTouristSpot/${_id}`}><button className="btn w-full btn-primary">View Details</button></Link> 
                    </div>
                    </div>
        </div>
        </div>
            
        </div>
    );
};

export default SingleTouristSpot;

