import React, { useState, useEffect, useCallback } from 'react'
import css from "./countries.module.scss"
import { v4 as uuidv4 } from "uuid"
import CountryCard from './country-card';

const Countries = () => {
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [inputCountry, setInputCountry] = useState("");
    const [requestedCountry, setRequestedCountry] = useState(undefined);
    const [displayedCountry, setDisplayedCountry] = useState(undefined);

    const fetchCountriesHandler = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("https://restcountries.eu/rest/v2/all")

            if (!response.ok) {
                throw new Error("something went wrong")
            }

            const data = await response.json()
            const requestedCountry1 = data.filter((item) => {
                return item.name.toLowerCase().includes(inputCountry.toLowerCase())
            })
            setRequestedCountry(requestedCountry1)
            setIsLoading(false)

        } catch (error) {
            setError(error.message)
        }
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        fetchCountriesHandler();
        setInputCountry("")
    }

    const handleChange = (e) => {
        setInputCountry(e.target.value)
    }

    useEffect(() => {
        fetchCountriesHandler();
    }, [])

    return (
        <div className={`${css.countries} wrapper`}>

            {/* <button onClick={() => {
                console.log("inputCountry: ", inputCountry);
                console.log("requestedCountry: ", requestedCountry);
            }}>test</button> */}

            <h2 className={css.title}>Let's read about countries!!</h2>
            <form onSubmit={formSubmitHandler} className={css.form}>
                <input
                    type="text"
                    className={css.input}
                    id="countryName"
                    value={inputCountry}
                    placeholder="Enter country Name"
                    onChange={handleChange} />
                <button type="submit" className={css.button}>Find</button>
            </form>
            {isLoading && <div className={css.loading}>Loading...</div>}
            {!isLoading &&
                <React.Fragment>
                    <div className={css.results}>Select the country to find more information about it!</div>
                    <ul className={css.list}>
                        {requestedCountry && requestedCountry.map(country => {
                            return <li
                                key={uuidv4()}
                                onClick={() => {
                                    setDisplayedCountry(country);
                                    setRequestedCountry([country])
                                }}
                                className={css.item}>
                                <div className={css.box_country}>
                                    <h3 className={css.countryName}>{country.name}</h3>
                                    <img src={country.flag} alt={`country.name flag`} className={css.flag} />
                                </div>
                            </li>
                        })}
                    </ul>
                </React.Fragment>}
            {
                displayedCountry &&
                <CountryCard
                    displayedCountry={displayedCountry}
                    setDisplayedCountry={setDisplayedCountry}
                    fetchCountriesHandler={fetchCountriesHandler} />
            }
        </div >
    )
}
export default Countries;