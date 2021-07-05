import React, { useContext } from "react"
import css from "./home.module.scss"
import NavContext from "../../context/navContext"

const Home = () => {
    const ctx = useContext(NavContext)

    return (
        <div className={css.home__page}>
            <div className="wrapper">
                {
                    !ctx.isLoggedIn &&
                    <div className={css.home}>
                        <h2 className={css.signInText}>Hello there!<br /> Please sign in to view the content!!</h2>
                        <div className={css.note__box}>
                            <h4 className={css.note__important}>Important!!</h4>
                            <p className={css.note__text}>
                                The local storage of your browser will be used to save all entered data in Sign up and Sign in forms
                            </p>
                        </div>
                    </div>
                }
                {
                    ctx.isLoggedIn &&
                    <div className={css.home}>
                        <h2 className={css.greeting}>Hello {ctx.loggedUser.name} {ctx.loggedUser.lastName}</h2>
                        <h1 className={css.title}>Welcome to My React World!!</h1>
                        <p>Please choose a page in navbar</p>
                    </div>
                }
            </div >
        </div>
    )
}

export default Home;