import { Link } from "react-router-dom";

const Country = ({ country }) => {
    console.log(country);
    const slicedDescription = country.description.slice(0,120);
    return (
        <Link to={`/countries/${country.country}`}>
        <div>
             <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 mb-5">
                <img src={country.image} alt="" className="object-cover object-center w-full rounded-md h-36 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <h2 className="text-xl font-semibold tracking-wide">{country.country}</h2>
                </div>
                <p className="dark:text-gray-800">{slicedDescription}</p>
            </div>
        </div>
        </Link>
    );
};

export default Country;
