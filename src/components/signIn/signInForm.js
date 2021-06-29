import React, { useReducer, useContext, useEffect } from 'react'
import css from "./signIn.module.scss"
import NavContext from '../../context/navContext'

const initialState = {
    email: "",
    emailIsValid: false,
    password: "",
    passwordIsValid: false,
    loggedUser: {}
}

const reducer = (state, action) => {
    const emailRE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    switch (action.type) {
        case "updateEmail":
            return { ...state, email: action.email, emailIsValid: emailRE.test(action.email) }
        case "updatePassword":
            return { ...state, password: action.password, passwordIsValid: action.password.trim().length >= 6 }
        case "submit":
            let users = localStorage.getItem("logged-users")
            users = JSON.parse(users)
            let loggedUser = {}
            if (users) {
                // check if the user already exist in local storage
                users.forEach(user => {
                    if (user.email === state.email && user.password === state.password) {
                        loggedUser = user
                        localStorage.setItem("loggedUser", JSON.stringify(user))
                    }
                })
            };
            return { ...initialState, loggedUser: loggedUser };
        default:
            return;
    }
}


const SignInForm = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const ctx = useContext(NavContext)

    useEffect(() => {
        if (state.loggedUser !== ctx.loggedUser && state.loggedUser.email) {
            ctx.setLoggedUser(state.loggedUser)
            ctx.setNavPage("Home")
            ctx.setIsLoggedIn(true)
        }
    }, [state.loggedUser])

    const submitHandler = (e) => {
        e.preventDefault();
        if (state.emailIsValid && state.passwordIsValid) {
            dispatch({ type: "submit" })
        }
    }

    return (
        <form className={css.sign__form} onSubmit={submitHandler}>
            <div className={css.sign__Block}>
                <input
                    type="text"
                    className={`${css.signInput} ${!state.emailIsValid ? css.invalidInput : ""}`}
                    id="signup_email"
                    placeholder="Email"
                    value={state.email}
                    onChange={(e) => dispatch({ type: "updateEmail", email: e.target.value })} />
            </div>
            <div className={css.sign__Block}>
                <input
                    type="password"
                    className={`${css.signInput} ${!state.passwordIsValid ? css.invalidInput : ""}`}
                    id="signup_password"
                    placeholder="Password"
                    value={state.password}
                    onChange={(e) => dispatch({ type: "updatePassword", password: e.target.value })} />
            </div>
            <div className={`${css.sign__Block} ${css.sign__Block_submit}`} >
                <button className={css.sign__submit}>Sign in</button>
            </div>
        </form>
    )
}

export default SignInForm;