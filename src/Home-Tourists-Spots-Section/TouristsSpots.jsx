import { useEffect, useState } from "react";
import TouristsSpot from "./TouristsSpot";
import MostPopularDestinations from "../Components/MostPopularDestinations/MostPopularDestinations";
import Faq from "../Components/FAQ/Faq";
import Countries from "../Components/Countries/Countries";



const TouristsSpots = () => {
    const [touristsSpots, setTouristsSpots] = useState([]);

    useEffect(() => {
        fetch('https://tourism-management-website-server-beta.vercel.app/tourist')
            .then(res => res.json())
            .then(data => setTouristsSpots(data))
    }, [])
    return (
        <div className="font-Murecho">
            <div className=" mt-12 text-center p-1 rounded-xl" >
                <h1 className=' mt-5 text-2xl lg:text-2xl font-bold text-[#1A2B3D]'>Explore Your Tourist Spot </h1>
                <p className='text-slate-600'>
                    Prepare to experience  rich culture and explore the majestic beauties of Cox’s Bazar, Sylhet,  Bandarban, <br></br> Sajek Valley,   Rangamati etc. Plan your trip now!  </p>
            </div>
            <div className="container mx-auto lg:grid grid-cols-3 pt-5">
                {
                    touristsSpots.map(touristsSpot => <TouristsSpot key={touristsSpot.id} touristsSpot={touristsSpot}></TouristsSpot>)
                }
            </div>
            <div className="container mx-auto rounded-2xl bg-gradient-to-r from-[#b9d9ff] to-[#fee1c3] w-full h-[170px] mt-10 mb-10">
                <div className="lg:flex pt-[5%] items-center justify-center gap-56">
                    <div className=" text-[#1A2B3D]">
                        <h1 className="text-2xl font-bold">Members can save on lifestyle</h1>
                        <p className="text-xs">Enjoy privileges such as exclusive flight prices, unbelievable discounts on thousands <br />
                            of hotels, and much more</p>
                    </div>
                    <div className=" btn bg-[#d66f00] text-[#fff] text-xs py-0 rounded-full" ><button >Find Holiday Saving</button></div>
                </div>
            </div>
            <MostPopularDestinations></MostPopularDestinations>
            <Faq/>
            <Countries/>

        </div>
    );
};

export default TouristsSpots;