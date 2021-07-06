import React from "react"
import css from "./sign.module.scss"
import { VscClose } from "react-icons/vsc";
import SignInForm from "./signInForm";
import { Link, useHistory } from "react-router-dom";
import { HOME_PATH, SIGN_UP_PATH } from "../../routes/paths";

const SignIn = () => {
    const history = useHistory()

    const closeHandler = () => {
        history.push(HOME_PATH)
    }

    return (
        <div className={css.sign}>
            <div className={css.sign__container}>
                <div className={css.sign__header}>
                    <h2 className={css.sign__title}>Sign in</h2>
                    <button className={css.sign__close_btn} onClick={closeHandler}><VscClose /></button>
                </div>
                <SignInForm />
                <div className={css.sign__actions}>
                    <button
                        className={css.sign__action_btn}
                    >
                        <Link className={css.sign__link} to={SIGN_UP_PATH}>
                            Sign up
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;