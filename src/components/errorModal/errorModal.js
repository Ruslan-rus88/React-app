import React from "react"
import css from "./errorModal.module.scss"

const ErrorModal = ({ title, errorMessage, resetError }) => {
    return (
        <div className={css.error__container}>
            <div className={css.error__background} onClick={resetError}></div>
            <div className={css.error__box}>
                <header className={css.error__header}>
                    <h1 className={css.error__title}>{title}</h1>
                </header>
                <main className={css.error__main}>
                    <p className={css.error__message}>{errorMessage}</p>
                </main>
                <footer className={css.error__footer}>
                    <button className={css.error__button} onClick={resetError}>Close</button>
                </footer>
            </div>
        </div>
    )
}

export default ErrorModal;