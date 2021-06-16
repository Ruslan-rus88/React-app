import React from "react"
import "./errorModal.css"

const ErrorModal = ({ title, errorMessage, resetError }) => {
    return <div className="error__container">
        <div className="error__background" onClick={resetError}></div>
        <div className="error__wrapper">
            <header className="error__header">
                <h1 className="error__title">{title}</h1>
            </header>
            <main className="error__main">
                <p className="error__message">{errorMessage}</p>
            </main>
            <footer className="error__footer">
                <button className="error__button" onClick={resetError}>Close</button>
            </footer>
        </div>
    </div>
}

export default ErrorModal;