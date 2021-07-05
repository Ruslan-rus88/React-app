import React, { useReducer, useContext } from "react"
import css from "./sign.module.scss"
import { VscClose } from "react-icons/vsc";
import NavContext from "../../context/navContext";
import SignUpForm from "./signUpForm";
import SignInForm from "./signInForm";

const reducer = (state, action) => {
    switch (action.type) {
        case "change-form":
            if (state.formType === "Sign in") {
                return { ...state, formType: "Sign up", actionButtonText: "Sign in" }
            } else {
                return { ...state, formType: "Sign in", actionButtonText: "Sign up" }
            }
        default:
            throw new Error();
    }
}


const Sign = () => {

    // reducer
    const [state, dispatch] = useReducer(reducer, { formType: "Sign in", actionButtonText: "Sign up" })

    // Context
    const ctx = useContext(NavContext)

    return (
        <div className={css.sign}>
            <div className={css.sign__container}>
                <div className={css.sign__header}>
                    <h2 className={css.sign__title}>{state.formType}</h2>
                    <button className={css.sign__close_btn} onClick={() => { ctx.setNavPage("Home") }}><VscClose /></button>
                </div>

                {/* form */}
                {state.formType === "Sign in" && <SignInForm />}
                {state.formType === "Sign up" && <SignUpForm />}
                {/* form */}

                <div className={css.sign__actions}>
                    <button
                        className={css.sign__action_btn}
                        onClick={() => dispatch({ type: "change-form" })}
                    >
                        {state.actionButtonText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sign;