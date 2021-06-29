import React, { useContext, useRef } from "react"
import css from "./mainHeader.module.scss"
import { v4 as uuid } from "uuid"
import navContext from "../../context/navContext"
import { VscMenu, VscArrowUp } from "react-icons/vsc";


const MainHeader = ({ navBarPages }) => {
    const ctx = useContext(navContext)

    // to hide navBar after selecting the page
    const displayCheckboxRef = useRef();

    // Add new navBar pages here:
    const logFunction = () => {
        displayCheckboxRef.current.checked = false;
        if (!ctx.isLoggedIn) {
            ctx.setNavPage("Sign in");
            return;
        }
        localStorage.removeItem("loggedUser")
        ctx.setIsLoggedIn(false)
        ctx.setNavPage("Home")
    }

    const selectPageHandler = (page) => {
        ctx.setNavPage(page);
        displayCheckboxRef.current.checked = false;
    }
    return (
        <header className={css.header}>
            <div className={`wrapper ${css.header__wrapper}`}>
                <div className={`${css.box} ${css.box__logo}`}>
                    <h1 className={css.logo__title}>React App</h1>
                </div>
                <input
                    ref={displayCheckboxRef}
                    id="display__checkbox"
                    type="checkbox"
                    className={css.display__checkbox} />
                <label htmlFor="display__checkbox" className={css.display__label}>
                    <VscMenu className={css.menu__icon} />
                </label>
                <div className={`${css.box} ${css.box__navBar}`}>
                    <nav className={css.nav}>
                        {ctx.isLoggedIn && <ul className={css.header__list}>
                            {navBarPages.map(page => {
                                return <li
                                    className={`${css.header__item} ${ctx.navPage === page ? css.active : ""}`}
                                    onClick={() => selectPageHandler(page)}
                                    key={uuid()}
                                >
                                    {page}
                                </li>
                            })}
                        </ul>}
                        <div className={css.actions}>
                            <button
                                className={`${css.button} ${!ctx.isLoggedIn ? css.signInBtn : ""}`}
                                onClick={logFunction}>
                                {!ctx.isLoggedIn ? "Sign in" : "Sign out"}
                            </button>
                            {!ctx.isLoggedIn && <VscArrowUp className={css.arrowUp} />}
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default MainHeader;