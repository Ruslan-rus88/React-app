import React, { useReducer, useContext } from "react"
import css from "./signIn.module.css"
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


const SignIn = () => {

    // reducer
    const [state, dispatch] = useReducer(reducer, { formType: "Sign in", actionButtonText: "Sign up" })

    // Context
    const ctx = useContext(NavContext)

    return (
        <div className={css.signIn}>
            <div className={css.signIn__container}>
                <button className={css.close} onClick={() => { ctx.setNavPage("Home") }}><VscClose /></button>
                <h2 className={css.signIn__title}>{state.formType}</h2>

                {/* form */}
                {state.formType === "Sign in" && <SignInForm />}
                {state.formType === "Sign up" && <SignUpForm />}
                {/* form */}

                <div className={css.actions}>
                    <button
                        className={css.signIn__action_btn}
                        onClick={() => dispatch({ type: "change-form" })}
                    >
                        {state.actionButtonText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;