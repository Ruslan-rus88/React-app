import React, { useState, useEffect, useCallback } from 'react'
import css from "./countries.module.scss"
import { v4 as uuidv4 } from "uuid"
import CountryCard from './country-card';

const Countries = ({ setError }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [inputCountry, setInputCountry] = useState("");
    const [requestedCountry, setRequestedCountry] = useState(undefined);
    const [displayedCountry, setDisplayedCountry] = useState(undefined);
    // used to save the list before displaying country card, to get it back after closing the card
    const [previousCountriesList, setPreviousCountriesList] = useState(undefined);

    const fetchCountriesHandler = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("https://restcountries.eu/rest/v2/all")

            if (!response.ok) {
                throw new Error("Something went wrong")
            }

            const data = await response.json()
            const requestedCountry1 = data.filter((item) => {
                return item.name.toLowerCase().includes(inputCountry.toLowerCase())
            })
            setRequestedCountry(requestedCountry1)
            setIsLoading(false)

        } catch (error) {
            setError({
                title: "Loading Error", errorMessage: error.message
            })
            console.log(error.message);
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

    const filterHandler = (e) => {
        switch (e.target.value) {
            case "area":
                setRequestedCountry([...requestedCountry.sort((a, b) => a.area < b.area ? 1 : a.area > b.area ? -1 : 0)])
                return;
            case "population":
                setRequestedCountry([...requestedCountry.sort((a, b) => a.population < b.population ? 1 : a.population > b.population ? -1 : 0)])
                return;
            case "none":
                fetchCountriesHandler();
                return;
            default:
                return;
        }
    }

    const selectCountryHandler = (country) => {
        setPreviousCountriesList(requestedCountry)
        setDisplayedCountry(country);
        setRequestedCountry(undefined)
    }

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
            <div className={css.options}>
                <h2 className={css.options__title}>Options:</h2>
                <label htmlFor="select-filter" className={css.select__label}>Sort by:</label>
                <select name="select-filter" id="select-filter" className={css.select} onChange={(e) => { filterHandler(e) }}>
                    <option className={css.select__option} value="none">None</option>
                    <option className={css.select__option} value="area">Area</option>
                    <option className={css.select__option} value="population">Population</option>
                </select>
            </div>
            {isLoading && <div className={css.loading}>Loading...</div>}
            {!isLoading && requestedCountry &&
                <React.Fragment>
                    <div className={css.results}>Select the country to find more information about it!</div>
                    <ul className={css.list}>
                        {requestedCountry.map(country => {
                            return <li
                                key={uuidv4()}
                                onClick={() => selectCountryHandler(country)}
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
                    setRequestedCountry={setRequestedCountry}
                    previousCountriesList={previousCountriesList} />
            }
        </div >
    )
}
export default Countries;