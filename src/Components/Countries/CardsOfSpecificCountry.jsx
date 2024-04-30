import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const CardsOfSpecificCountry = () => {
    const cards = useLoaderData();
    console.log(cards);
    
    return (
        <>
         <Fade cascade damping={0.1}>
            <div className=" mb-10 text-center p-1 rounded-xl" >
                <h1 className=' mt-5 text-2xl lg:text-2xl font-bold text-[#1A2B3D]'>Explore Your Tourist Spot </h1>
                <p className='text-slate-600 mt-3'>
                    Prepare to experience  rich culture and explore the majestic beauties of Cox’s Bazar, Sylhet,  Bandarban, <br></br> Sajek Valley,   Rangamati etc. Plan your trip now!  </p>
            </div> </Fade>
        <div className="container mx-auto font-display grid grid-cols-2 gap-10">
            <Helmet>
                <title>LuxeVillas | View Tourist Spot</title>
            </Helmet>
           
            {cards?.map((card, index) => (
                <div className="hero-content flex-col gap-10 items-center lg:flex-row shadow-lg " key={index}>
                    
                    <div className="w-[100%]">
                        <h1 className="text-5xl font-bold">{card.tourists_spot_name}</h1>
                        <h1 className="p-1 rounded-lg text-xl mt-3 font-medium text-[#424242]">Location: {card.location}</h1>
                        <hr className="-ml-0 h-[1px] border-none bg-slate-200 mx-auto w-[80%]" />
                        <div className="flex items-center gap-10">
                            <h1 className="p-1 rounded-lg text-lg font-bold text-[#006aff] -mt-2">Country Name: {card.country_name}</h1>
                            <h1 className="p-1 rounded-lg text-lg font-bold -mt-2">Average Cost: {card.average_cost}</h1>
                        </div>
                        <hr className="-ml-0 h-[1px] border-none bg-slate-200 mx-auto w-[80%]" />
                        <p className="py-6"><span className="font-bold">Description: </span> {card.short_description}</p>
                        <hr className="-ml-0 h-[1px] border-none bg-slate-200 mx-auto w-[80%]" />
                        <div className="flex gap-10 mt-3 mb-3">
                                <p>Seasonality:</p>
                                <p>{card.seasonality}</p>
                            </div>
                        <hr className="-ml-0 h-[1px] border-none bg-slate-200 mx-auto w-[80%]" />
                        <div className="flex items-center justify-center  mt-5">
                           
                            <Link className="" to={`/ViewSingleTouristSpot/${card._id}`}><button className="btn w-full btn-primary ">View Details</button></Link> 
                           
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}

export default CardsOfSpecificCountry;
