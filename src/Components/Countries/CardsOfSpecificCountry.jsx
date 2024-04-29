import { useLoaderData } from "react-router-dom";

const CardsOfSpecificCountry = () => {
    const cards = useLoaderData();
    console.log(cards)
    return (
        <div>
            
        </div>
    );
};

export default CardsOfSpecificCountry;