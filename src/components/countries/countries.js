import React, { useState, useEffect, useRef } from 'react'
import css from "./countries.module.scss"
import { v4 as uuidv4 } from "uuid"
import CountryCard from './country-card';

/*
 todo:
1. display error if no country was found in search bar
2. create a function for search bar
3. adjust the country card - create a new component for the lines
go to sleep :)
*/

const Countries = ({ setError }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [inputCountry, setInputCountry] = useState("");
    const [requestedCountry, setRequestedCountry] = useState(undefined);
    const [displayedCountry, setDisplayedCountry] = useState(undefined);
    const [allCountriesList, setAllCountriesList] = useState(undefined);
    // used to save the list before displaying country card, to get it back after closing the card
    const [previousCountriesList, setPreviousCountriesList] = useState(undefined);

    // used to reset the sort filter after changing the region
    const sortRef = useRef();
    const regionRef = useRef();

    const fetchCountriesHandler = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("https://restcountries.eu/rest/v2/all")

            if (!response.ok) {
                throw new Error("Something went wrong")
            }
            const data = await response.json()

            setRequestedCountry(data)
            setAllCountriesList(data)
            setIsLoading(false)
        } catch (error) {
            setError({
                title: "Loading Error", errorMessage: error.message
            })
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchCountriesHandler();
    }, [])

    const formSubmitHandler = (e) => {
        e.preventDefault();
        sortRef.current.value = "None"
        regionRef.current.value = "All"
        const searchedCountries = [...allCountriesList.filter((item) => {
            return item.name.toLowerCase().includes(inputCountry.toLowerCase())
        })]
        if (searchedCountries.length === 0) {
            setError({
                title: "Search Error", errorMessage: "No countries found! Please search again"
            })
            return;
        }
        setRequestedCountry(searchedCountries)
        setInputCountry("")
    }

    const handleChange = (e) => {
        setInputCountry(e.target.value)
    }

    const selectRegionHandler = (e) => {
        setPreviousCountriesList(requestedCountry)
        sortRef.current.value = "None"
        if (e.target.value === "All") {
            setRequestedCountry(allCountriesList)
            return;
        }
        setRequestedCountry([...allCountriesList.filter(country => {
            return e.target.value === country.region
        })])
    }

    const filterHandler = (e) => {
        switch (e.target.value) {
            case "area":
                setRequestedCountry([...requestedCountry.sort((a, b) => a.area < b.area ? 1 : a.area > b.area ? -1 : 0)])
                return;
            case "population":
                setRequestedCountry([...requestedCountry.sort((a, b) => a.population < b.population ? 1 : a.population > b.population ? -1 : 0)])
                return;
            case "name":
                setRequestedCountry([...requestedCountry.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)])
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
                <div className={css.options__box}>
                    <div className={css.filters__box}>
                        <div className={css.select__box}>
                            <label htmlFor="select-region" className={css.select__label}>Region:</label>
                            <select
                                name="select-region"
                                id="select-region"
                                className={css.select}
                                ref={regionRef}
                                onChange={(e) => { selectRegionHandler(e) }}>
                                <option className={css.select__option} value="All">All</option>
                                <option className={css.select__option} value="Asia">Asia</option>
                                <option className={css.select__option} value="Europe">Europe</option>
                                <option className={css.select__option} value="Africa">Africa</option>
                                <option className={css.select__option} value="Oceania">Oceania</option>
                                <option className={css.select__option} value="Americas">Americas</option>
                                <option className={css.select__option} value="Polar">Polar</option>
                            </select>
                        </div>
                        <div className={css.select__box}>
                            <label htmlFor="select-filter" className={css.select__label}>Sort by:</label>
                            <select
                                name="select-filter"
                                id="select-filter"
                                className={css.select}
                                ref={sortRef}
                                onChange={(e) => { filterHandler(e) }}>
                                <option className={css.select__option} value="None">None</option>
                                <option className={css.select__option} value="name">Name</option>
                                <option className={css.select__option} value="area">Area</option>
                                <option className={css.select__option} value="population">Population</option>
                            </select>
                        </div>
                    </div>
                    <div className={css.Random__box}>
                        <button
                            className={css.random__btn}
                            type="button"
                            onClick={() => { selectCountryHandler(requestedCountry[Math.ceil(Math.random() * (requestedCountry.length - 1))]) }}>
                            Random Select
                        </button>
                    </div>
                </div>
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