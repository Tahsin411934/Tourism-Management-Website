import { useLoaderData } from "react-router-dom";
import {Helmet} from "react-helmet";

const TouristSpotDetails = () => {
    const tourist = useLoaderData();
    console.log(tourist)
    return (
        <div>
            <div className="container mx-auto font-display">
            <Helmet>
      <title>LuxeVillas | view property</title>
    </Helmet>
            <div className="">
                <div className="hero-content flex-col gap-10 items-center  lg:flex-row">
                    <div className="  flex justify-center items-center  rounded-lg" style={{ backgroundColor: 'rgba(19, 19, 19, 0.05)' }}>
                        <img src="" className="  h-[450px] rounded-lg " />
                    </div>
                    <div className="w-[100%]">
                        <h1 className="text-5xl font-bold"></h1>
                        <h1 className="p-1 rounded-lg text-xl mt-3 font-medium text-[#424242] " >segment_name: </h1>
                        <hr className='-ml-0 h-[1px] border-none bg-slate-200 mx-auto w-[80%]' />
                        <div className="flex items-center gap-10">
                        <h1 className="p-1 rounded-lg text-lg font-bold text-[#04aa6d] -mt-2">Status: </h1>
                        <h1 className="p-1 rounded-lg text-lg font-bold  -mt-2">Price: </h1>
                        </div>
                        
                        <hr className='-ml-0 h-[1px] border-none bg-slate-200 mx-auto w-[80%]' />
                        <p className="py-6"><span className="font-bold">Description: </span> </p>
                        <div className='flex  gap-10'>
                            <p>Facilities</p>
                            <p className='bg-[#F3F3F3] p-1 rounded-lg text-base font-medium text-[#04aa6d]'></p>
                            <p className='bg-[#F3F3F3] p-1 rounded-lg text-base font-medium text-[#04aa6d]'></p>
                            <p className='bg-[#F3F3F3] p-1 rounded-lg text-base font-medium text-[#04aa6d]'></p>
                            <p className='bg-[#F3F3F3] p-1 rounded-lg text-base font-medium text-[#04aa6d]'></p>
                        </div>
                        <hr className='-ml-0 h-[1px] border-none bg-slate-200 mx-auto w-[80%]' />
                        <div>
                           
                            <div className="flex gap-10 mt-3">
                                <p>Area:</p>
                                <p></p>
                            </div>
                            <div className="flex gap-10 ">
                                <p>Location:</p>
                                <p></p>
                            </div>
                           

                        </div>
                        
                    </div>
                </div>
            </div>
           
        </div>
        </div>
    );
};

export default TouristSpotDetails;