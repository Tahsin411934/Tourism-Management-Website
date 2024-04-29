import { useEffect, useState } from "react";
import Country from "./Country";
import { Typewriter } from 'react-simple-typewriter'

const Countries = () => {
    const handleType = () => {
        // access word count number
        
      }
    
      const handleDone = () => {
        console.log(`Done after 5 loops!`)
      }
    
    const [countries, setCountries] = useState([]);
    console.log(countries)
    useEffect(() => {
        fetch('http://localhost:5000/countries')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <>
        <div className=" mt-20 text-center p-1 rounded-xl" >
                <h1 style={{ paddingTop: '0rem', margin: 'auto 0', fontWeight: 'normal' }} className=' text-2xl lg:text-2xl pb-3 font-bold text-[#1A2B3D]'>{' '} <span style={{ color: '#102C57', fontWeight: 'bold' }}> <Typewriter
            words={['Asian Tour Package']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
                <p className='text-slate-600 pb-12'>
                &quot; Prepare to experience  rich culture and explore the majestic beauties of Cox’s Bazar, Sylhet,  Bandarban, <br></br> Sajek Valley,   Rangamati etc. Plan your trip now!  &quot;</p>
            </div>
        <div className="container mx-auto grid grid-cols-3">
           {
            countries.map(country=> <Country key={country._id} country={country}></Country>)
           }
        </div>
        </>
    );
};

export default Countries;