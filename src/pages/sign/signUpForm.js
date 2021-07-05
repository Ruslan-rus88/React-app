import React, { useReducer } from 'react'
import css from "./sign.module.scss"

const initialState = {
    name: "",
    nameIsValid: false,
    lastName: "",
    lastNameIsValid: false,
    email: "",
    emailIsValid: false,
    password: "",
    passwordIsValid: false
}

const reducer = (state, action) => {
    const emailRE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    switch (action.type) {
        case "updateName":
            return { ...state, name: action.name, nameIsValid: action.name.trim().length > 0 }
        case "updateLastName":
            return { ...state, lastName: action.lastName, lastNameIsValid: action.lastName.trim().length > 0 }
        case "updateEmail":
            return { ...state, email: action.email, emailIsValid: emailRE.test(action.email) }
        case "updatePassword":
            return { ...state, password: action.password, passwordIsValid: action.password.trim().length >= 6 }
        case "submit":
            let users = localStorage.getItem("logged-users")
            users = JSON.parse(users)
            // console.log("users: ", users);
            let usersList = [{
                name: state.name,
                lastName: state.lastName,
                email: state.email,
                password: state.password,
            }]

            if (users) {
                // check if the user already exist in local storage
                let test = users.filter(user => user.email === state.email);
                if (test.length !== 0) {
                    return initialState;
                } else {
                    usersList = [...users].concat(usersList)
                }
            }
            localStorage.setItem("logged-users", JSON.stringify(usersList))
            return initialState;
        default:
            return;
    }
}

const SignUpForm = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const submitHandler = (e) => {
        e.preventDefault();
        if (state.nameIsValid && state.lastNameIsValid && state.emailIsValid && state.passwordIsValid) {
            dispatch({ type: "submit" })
        }
    }

    return (
        <form className={css.sign__form} onSubmit={submitHandler}>
            {/* <button onClick={() => { console.log(state) }}>test</button> */}
            <div className={css.sign__Block}>
                <input
                    type="text"
                    className={`${css.signInput} ${!state.nameIsValid ? css.invalidInput : ""}`}
                    id="signup_name"
                    placeholder="Name"
                    value={state.name}
                    onChange={(e) => dispatch({ type: "updateName", name: e.target.value })} />
            </div>
            <div className={css.sign__Block}>
                <input
                    type="text"
                    className={`${css.signInput} ${!state.lastNameIsValid ? css.invalidInput : ""}`}
                    id="signup_lastName"
                    placeholder="Last Name"
                    value={state.lastName}
                    onChange={(e) => dispatch({ type: "updateLastName", lastName: e.target.value })} />
            </div>
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
                <button type="submit" className={css.sign__submit}>Sign up</button>
            </div>
        </form>
    )
}

export default SignUpForm;