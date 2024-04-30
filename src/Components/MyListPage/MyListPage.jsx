import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyListPage = () => {
    const MyAddedList = useLoaderData();
    const [MyAddedSpots, setMyAddedSpots] = useState(MyAddedList);
    console.log(MyAddedList);

    const handleDlt = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tourism-management-website-server-beta.vercel.app/touristSpots/${_id}`, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data.deletedCount);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                        });
                        const remaining = MyAddedSpots.filter(MyAddedSpot => MyAddedSpot._id !== _id);
                        setMyAddedSpots(remaining);
                    }
                })
                .catch(error => console.error("Error occurred while deleting:", error));
            }
        });
    };





    
    return (
        <div className="container mx-auto mb-10">
            <Helmet>
          <title>ShareTrip | My List</title>
        </Helmet>
             <h1 className=" text-center text-2xl font-bold italic mt-10 mb-10 lg:w-[95%] mx-auto">
             Explore your Added dreams Tourist Spots
        <h1 className="text-xs text-[#424242] font-normal mt-1">you can Edit Your  <span className=" font-bold text-[#006aff]">Tourist Spots!</span> <span className="font-bold"></span>  </h1>
      </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Tourists Spot Name</th>
                            <th>Country Name</th>
                            <th>Average Cost</th>
                            <th>Travel Time</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {
                        MyAddedSpots.map(myAddedSpot => (
                            <tbody key={myAddedSpot._id}>
                                <tr>
                                    <td>{myAddedSpot.tourists_spot_name}</td>
                                    <td>{myAddedSpot.country_name}</td>
                                    <td>{myAddedSpot.average_cost}</td>
                                    <td>{myAddedSpot.travel_time}</td>
                                    <td>
                                        <div className="flex gap-3">
                                            
                                           <Link to={`/update/${myAddedSpot._id}`}> <button  className="btn btn-primary"> Update </button></Link>
                                            <button onClick={() => handleDlt(myAddedSpot._id)} className="btn bg-red-500"> Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </div>
        </div>
    );
};

export default MyListPage;
