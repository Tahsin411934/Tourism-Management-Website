
import { useEffect } from "react";
import Swal from "sweetalert2";


const ShowMyAddedList = ({myAddedSpot , MyAddedSports,setMyAddedSports}) => {
    useEffect(() => {
        // This effect will trigger whenever MyAddedSports or _id changes
        console.log("MyAddedSports or _id changed");
    }, [MyAddedSports]);

console.log(MyAddedSports)
   const handleDlt=(_id)=>{
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
        
          fetch(`http://localhost:5000/touristSpot/${_id}`,{
            method:'DELETE',

          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data.deletedCount);
            if (data.deletedCount > 0) {
                const remaining = MyAddedSports.filter(MyAddedSport => MyAddedSport._id.toString() !== _id);

                setMyAddedSports(remaining)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",    
                  });
            }
          })
        }
      });
   }
    return (
       
    );
};

export default ShowMyAddedList;