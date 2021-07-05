import React, { useState, useEffect } from "react";
import ErrorModal from "./components/errorModal/errorModal";
import MainHeader from "./components/header/mainHeader";
import navContext from "./context/navContext";

// routes
import { Route, Switch, Redirect } from "react-router-dom";
import { HOME_PATH, COUNTRIES_PATH, USERS_PATH, SIGN_PATH } from "./routes/paths";

// Pages
import Home from "./pages/home/home";
import Countries from "./pages/countries/countries";
import Users from "./pages/users/users";
import Sign from "./pages/sign/sign"

function App() {
  const [error, setError] = useState(null)
  const [activePage, setActivePage] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedUser, setLoggedUser] = useState({})

  const resetError = () => setError(null)

  useEffect(() => {
    let active_page = localStorage.getItem("activePage")
    if (active_page === null) {
      setActivePage("Home")
      localStorage.setItem("activePage", JSON.stringify("Home"))
    } else if (activePage === "") {
      setActivePage(JSON.parse(active_page))
    } else {
      localStorage.setItem("activePage", JSON.stringify(activePage))
    }
  }, [activePage])


  /*  update the value of navContext   */
  const setLoggedUserFunction = (user) => {
    setLoggedUser(user)
  }

  const setNavPageFunction = (page) => {
    setActivePage(page)
  }

  const setIsLoggedInFunction = (val) => {
    setIsLoggedIn(val);
  }
  /*  update the value of navContext   */

  useEffect(() => {
    let user = localStorage.getItem("loggedUser")
    user = JSON.parse(user)
    if (user) {
      setLoggedUser(user)
      setIsLoggedIn(true)
    }
    console.log("user:", user);
  }, [setIsLoggedIn])

  return (
    <navContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        loggedUser: loggedUser,
        setLoggedUser: setLoggedUserFunction,
        setIsLoggedIn: setIsLoggedInFunction,
        // navPage: activePage,
        // setNavPage: setNavPageFunction,
        // navBarPages: navBarPages,
        setError: setError,
      }}>

      <MainHeader />
      <Switch>
        <Route path="/" exact >
          <Redirect to={HOME_PATH} />
        </Route>
        <Route path={HOME_PATH} >
          <Home />
        </Route>
        <Route path={COUNTRIES_PATH} exact >
          <Countries />
        </Route>
        <Route path={USERS_PATH} >
          <Users />
        </Route>
        <Route path={SIGN_PATH} >
          <Sign />
        </Route>
      </Switch>

      {error &&
        <ErrorModal
          title={error.title}
          errorMessage={error.errorMessage}
          resetError={resetError} />
      }
    </navContext.Provider>
  );
}

export default App;
