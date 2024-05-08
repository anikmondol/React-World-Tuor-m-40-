import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountry = (country) => {
        setVisitedCountries([...visitedCountries, country])
    }


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    // console.log(countries);

    return (
        <div>
            <h3>Countries {countries.length}</h3>
            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                {/* visited countries */}
                <ol className="country">
                    {
                        visitedCountries.map((country, index) => <li key={index}>{country.name.common}</li>)
                    }
                </ol>

            </div>
            {/* display country */}
            <div className="country_container">
                {
                    countries.map((country, index) => <Country country={country} handleVisitedCountry={handleVisitedCountry} key={index}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;