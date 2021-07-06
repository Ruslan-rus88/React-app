import React, { useReducer, useEffect } from 'react'
import css from "./sign.module.scss"
import { SIGN_IN_PATH } from '../../routes/paths'
import { useHistory } from 'react-router-dom'

const initialState = {
    name: "",
    nameIsValid: true,
    lastName: "",
    lastNameIsValid: true,
    email: "",
    emailIsValid: true,
    password: "",
    passwordIsValid: true,
    userAdded: false
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

            let usersList = [{
                name: state.name,
                lastName: state.lastName,
                email: state.email,
                password: state.password,
            }]

            if (users) {
                // check if the user already exist in local storage
                let test = users.filter(user => user.email === state.email);
                console.log("test: ", test);
                if (test.length !== 0) {
                    return initialState;
                } else {
                    usersList = [...users].concat(usersList)
                }
            }
            localStorage.setItem("logged-users", JSON.stringify(usersList))
            return { ...initialState, userAdded: true };
        default:
            return;
    }
}

const SignUpForm = () => {

    const history = useHistory();
    const [state, dispatch] = useReducer(reducer, initialState)

    const submitHandler = async (e) => {
        e.preventDefault();
        if (state.nameIsValid && state.lastNameIsValid && state.emailIsValid && state.passwordIsValid) {
            await dispatch({ type: "submit" })
            console.log("test");

        }
    }

    // navigate to signIn page after successful sign in
    useEffect(() => {
        if (state.userAdded) {
            history.push(SIGN_IN_PATH)
        }
    }, [state.userAdded])

    return (
        <form className={css.sign__form} onSubmit={submitHandler}>
            {/* <button onClick={() => { console.log(state) }}>test</button> */}
            <div className={css.sign__Block}>
                <input
                    required
                    type="text"
                    className={`${css.signInput} ${!state.nameIsValid ? css.invalidInput : ""}`}
                    id="signup_name"
                    placeholder="Name"
                    value={state.name}
                    onChange={(e) => dispatch({ type: "updateName", name: e.target.value })} />
            </div>
            <div className={css.sign__Block}>
                <input
                    required
                    type="text"
                    className={`${css.signInput} ${!state.lastNameIsValid ? css.invalidInput : ""}`}
                    id="signup_lastName"
                    placeholder="Last Name"
                    value={state.lastName}
                    onChange={(e) => dispatch({ type: "updateLastName", lastName: e.target.value })} />
            </div>
            <div className={css.sign__Block}>
                <input
                    required
                    type="text"
                    className={`${css.signInput} ${!state.emailIsValid ? css.invalidInput : ""}`}
                    id="signup_email"
                    placeholder="Email"
                    value={state.email}
                    onChange={(e) => dispatch({ type: "updateEmail", email: e.target.value })} />
            </div>
            <div className={css.sign__Block}>
                <input
                    required
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