import { useEffect, useState } from "react";
import TouristsSpot from "./TouristsSpot";


const TouristsSpots = () => {
    const [touristsSpots,setTouristsSpots]=useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/tourist')
        .then(res=>res.json())
        .then(data=>setTouristsSpots(data))
    },[])
    return (
        <div className="container mx-auto grid grid-cols-3">
            {
                touristsSpots.map(touristsSpot=><TouristsSpot key={touristsSpot.id} touristsSpot={touristsSpot}></TouristsSpot>)
            }
        </div>
    );
};

export default TouristsSpots;