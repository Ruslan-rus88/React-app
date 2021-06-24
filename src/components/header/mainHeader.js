import React, { useContext } from "react"
import css from "./mainHeader.module.scss"
import { v4 as uuid } from "uuid"
import navContext from "../../context/navContext"

const MainHeader = ({ navBarPages }) => {
    const ctx = useContext(navContext)

    // Add new navBar pages here:
    const logOutFunction = () => {
        localStorage.removeItem("loggedUser")
        ctx.setIsLoggedIn(false)
        ctx.setNavPage("Home")
    }
    return (
        <header className={css.header}>
            <div className={`wrapper ${css.header__wrapper}`}>
                <div className={`${css.box} ${css.box__logo}`}>
                    <h1 className={css.logo__title}>React App</h1>
                </div>
                <div className={`${css.box} ${css.box__navBar}`}>
                    {ctx.isLoggedIn && <nav className={css.nav}>
                        <ul className={css.header__list}>
                            {navBarPages.map(page => {
                                return <li
                                    className={`${css.header__item} ${ctx.navPage === page ? css.active : ""}`}
                                    onClick={() => ctx.setNavPage(page)}
                                    key={uuid()}
                                >
                                    {page}
                                </li>
                            })}
                        </ul>
                    </nav>}
                </div>
                <div className={`${css.box} ${css.box__login}`}>
                    {!ctx.isLoggedIn && <button className={`${css.button} ${css.signInBtn}`} onClick={() => ctx.setNavPage("Sign in")}>Sign in</button>}
                    {ctx.isLoggedIn && <button className={css.button} onClick={logOutFunction}>Sign out</button>}
                </div>
            </div>
        </header>
    )
}

export default MainHeader;