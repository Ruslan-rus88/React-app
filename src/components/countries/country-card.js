import React from 'react'
import css from "./country-card.module.scss"
import { v4 as uuidv4 } from "uuid"

const CountryCard = ({ displayedCountry, setDisplayedCountry, setRequestedCountry, previousCountriesList }) => {

    const country = displayedCountry;

    const closeBtnHandler = () => {
        setDisplayedCountry(undefined);
        setRequestedCountry(previousCountriesList)
    }

    return (
        <div className={css.countryCard}>
            <div className="wrapper">
                <h2 className={css.title}>{country.name}</h2>
                <figure className={css.flag_box}>
                    <img src={country.flag} alt={`${country.name} flag`} className={css.flag} />
                </figure>
                <ul className={css.list}>
                    <li className={css.item}>
                        <span className={css.subTitle} > Native Name: </span> {country.nativeName}
                    </li>
                    <li className={css.item}>
                        <span className={css.subTitle}>Capital: </span> {country.capital}
                    </li>
                    <li className={css.item}>
                        <span className={css.subTitle}>Area: </span> {country.area} KM * 2
                    </li>
                    <li className={css.item}>
                        <span className={css.subTitle}>Population: </span> {country.population}
                    </li>
                    <li className={css.item}>
                        <span className={css.subTitle} > Calling code:
                        </span>
                        {country.callingCodes.map(code => <span key={uuidv4()}> {code} </span>)}
                    </li>
                    <li className={css.item}>
                        <span className={css.subTitle} > Time zones:
                        </span>
                        {country.timezones.map((zone, index) => {
                            return (<span key={uuidv4()}>{index > 0 ? "," : ""} {zone} </span>)
                        })}
                    </li>
                    <li className={css.item}>
                        <span className={css.subTitle} > Currencies:
                        </span>
                        {country.currencies.map((currency, index) => {
                            return (<span key={uuidv4()}>{index > 0 ? "," : ""} {currency.name} ({currency.symbol}) </span>)
                        })}
                    </li>
                    <li className={css.item}>
                        <span className={css.subTitle} > Languages:
                        </span>
                        {country.languages.map((language, index) => {
                            return (<span key={uuidv4()}>{index > 0 ? "," : ""} {language.name} ({language.nativeName}) </span>)
                        })}
                    </li>
                </ul>
                <button type="button" className={css.button} onClick={closeBtnHandler}>Back to list</button>

            </div>
        </div>
    )

}
export default CountryCard