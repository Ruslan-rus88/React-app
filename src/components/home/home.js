import React, { useContext } from "react"
import css from "./home.module.css"
import NavContext from "../../context/navContext"
import { VscArrowUp } from "react-icons/vsc";

const Home = () => {
    const ctx = useContext(NavContext)

    return (
        <div className="wrapper">
            {
                !ctx.isLoggedIn &&
                <div className={css.home}>
                    <h2 className={css.signInText}>Hello there!<br /> Please sign in to view the content!!</h2>
                    <VscArrowUp className={css.arrowUp} />
                </div>
            }
            {
                ctx.isLoggedIn &&
                <div className={css.home}>
                    <h2 className={css.greeting}>Hello {ctx.loggedUser.name} {ctx.loggedUser.lastName}</h2>
                    <h1 className={css.title}>Welcome to My React App!!</h1>
                    <p>Please choose a page in navbar</p>
                </div>
            }
        </div >
    )
}

export default Home;