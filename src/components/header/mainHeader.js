import React, { useContext, useRef } from "react"
import css from "./mainHeader.module.scss"
import navContext from "../../context/navContext"
import { VscMenu, VscArrowUp } from "react-icons/vsc";
import { HOME_PATH, COUNTRIES_PATH, USERS_PATH, SIGN_PATH } from "../../routes/paths";
import { Link, NavLink, useParams, useHistory } from "react-router-dom";

const MainHeader = () => {
    const params = useParams();
    const history = useHistory();
    console.log("params: ", params);

    const ctx = useContext(navContext)

    // to hide navBar after selecting the page
    const displayCheckboxRef = useRef();

    const logFunction = () => {
        displayCheckboxRef.current.checked = false;
        if (ctx.isLoggedIn) {
            localStorage.removeItem("loggedUser")
            ctx.setIsLoggedIn(false)
            // navigate to home page after sign out
            history.push(HOME_PATH)
        }
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
                        {ctx.isLoggedIn &&
                            <ul className={css.header__list}>
                                <li className={css.header__item}>
                                    <NavLink to={HOME_PATH} className={css.header__NavLink} activeClassName={css.active} >Home</NavLink>
                                </li>
                                <li className={css.header__item}>
                                    <NavLink to={COUNTRIES_PATH} className={css.header__NavLink} activeClassName={css.active} >Countries</NavLink>
                                </li>
                                <li className={css.header__item}>
                                    <NavLink to={USERS_PATH} className={css.header__NavLink} activeClassName={css.active} >Users</NavLink>
                                </li>
                            </ul>
                        }
                        <div className={css.actions}>
                            <button
                                className={`${css.button} ${!ctx.isLoggedIn ? css.signInBtn : ""}`}
                                onClick={logFunction}
                            >
                                {ctx.isLoggedIn
                                    ? "Sign out"
                                    : <Link className={css.sign__link} to={SIGN_PATH}>
                                        Sign in
                                    </Link>}
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