import React from 'react'
import css from "./country-card.module.scss"
import { v4 as uuidv4 } from "uuid"

const CountryCard = ({ displayedCountry, setDisplayedCountry, fetchCountriesHandler }) => {

    const closeBtnHandler = () => {
        setDisplayedCountry(undefined);
        fetchCountriesHandler();
    }

    return (
        <div className={css.countryCard}>
            <div className="wrapper">
                <h2 className={css.title}>{displayedCountry.name}</h2>
                <figure className={css.flag_box}>
                    <img src={displayedCountry.flag} alt={`${displayedCountry.name} flag`} className={css.flag} />
                </figure>
                <ul className={css.list}>
                    <li className={css.item}>
                        <span className={css.subTitle} > Native Name: </span> {displayedCountry.nativeName}
                    </li>
                    <li className={css.item}>
                        <span className={css.subTitle}>Capital: </span> {displayedCountry.capital}
                    </li>
                    <li className={css.item}>
                        <span className={css.subTitle}>Area: </span> {displayedCountry.area} KM * 2
                    </li>
                    <li className={css.item}>
                        <span className={css.subTitle}>Population: </span> {displayedCountry.population}
                    </li>
                    <li className={css.item}>
                        <span className={css.subTitle} > Calling code:
                        </span>
                        {displayedCountry.callingCodes.map(code => <span key={uuidv4()}> {code} </span>)}
                    </li>
                    <li className={css.item}>
                        <span className={css.subTitle} > Time zones:
                        </span>
                        {displayedCountry.timezones.map((zone, index) => {
                            return (<span key={uuidv4()}>{index > 0 ? "," : ""} {zone} </span>)
                        })}
                    </li>
                    <li className={css.item}>
                        <span className={css.subTitle} > Currencies:
                        </span>
                        {displayedCountry.currencies.map((currency, index) => {
                            return (<span key={uuidv4()}>{index > 0 ? "," : ""} {currency.name} ({currency.symbol}) </span>)
                        })}
                    </li>
                    <li className={css.item}>
                        <span className={css.subTitle} > Languages:
                        </span>
                        {displayedCountry.languages.map((language, index) => {
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