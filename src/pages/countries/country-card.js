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
                <table className={css.properties_table}>
                    <tr className={css.properties_row}>
                        <td className={css.properties_title}>Native Name:</td>
                        <td className={css.properties_value}>{country.nativeName}</td>
                    </tr>
                    <tr className={css.properties_row}>
                        <td className={css.properties_title}>Capital:</td>
                        <td className={css.properties_value}>{country.capital}</td>
                    </tr>
                    <tr className={css.properties_row}>
                        <td className={css.properties_title}>Area:</td>
                        <td className={css.properties_value}>{country.area} KM * 2</td>
                    </tr>
                    <tr className={css.properties_row}>
                        <td className={css.properties_title}>Population:</td>
                        <td className={css.properties_value}>{country.population}</td>
                    </tr>
                    <tr className={css.properties_row}>
                        <td className={css.properties_title}>Calling code:</td>
                        <td className={css.properties_value}>
                            {country.callingCodes.map(code => <span key={uuidv4()}> {code} </span>)}
                        </td>
                    </tr>
                    <tr className={css.properties_row}>
                        <td className={css.properties_title}>Time zones:</td>
                        <td className={css.properties_value}>
                            {country.timezones.map((zone, index) => {
                                return (<span key={uuidv4()}>{index > 0 ? "," : ""} {zone} </span>)
                            })}
                        </td>
                    </tr>
                    <tr className={css.properties_row}>
                        <td className={css.properties_title}>Currencies:</td>
                        <td className={css.properties_value}>
                            {country.currencies.map((currency, index) => {
                                return (<span key={uuidv4()}>{index > 0 ? "," : ""} {currency.name} ({currency.symbol}) </span>)
                            })}
                        </td>
                    </tr>
                    <tr className={css.properties_row}>
                        <td className={css.properties_title}>Languages:</td>
                        <td className={css.properties_value}>
                            {country.languages.map((language, index) => {
                                return (<span key={uuidv4()}>{index > 0 ? "," : ""} {language.name} ({language.nativeName}) </span>)
                            })}
                        </td>
                    </tr>
                </table>
                <button type="button" className={css.button} onClick={closeBtnHandler}>Back to list</button>

            </div>
        </div>
    )

}
export default CountryCard