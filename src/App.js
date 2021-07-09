import React, { useState, useEffect } from "react";
import ErrorModal from "./components/errorModal/errorModal";
import MainHeader from "./components/header/mainHeader";
import navContext from "./context/navContext";
import { BrowserRouter as Router } from "react-router-dom";
import { routes } from './routes/routes';

// routes
import { Route, Switch, Redirect } from "react-router-dom";
import { HOME_PATH, COUNTRIES_PATH, USERS_PATH, SIGN_IN_PATH, SIGN_UP_PATH } from "./routes/paths";

// Pages
import Home from "./pages/home/home";
import Countries from "./pages/countries/countries";
import Users from "./pages/users/users";
import SignIn from "./pages/sign/signIn"
import SignUp from "./pages/sign/signUp"
import CountryCard from "./pages/countries/country-card";

function App() {
  const [error, setError] = useState(null)
  const [activePage, setActivePage] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedUser, setLoggedUser] = useState({})
  const [displayedCountry, setDisplayedCountry] = useState(undefined)

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

  const setIsLoggedInFunction = (val) => {
    setIsLoggedIn(val);
  }

  const setDisplayedCountryFunction = (country) => {
    setDisplayedCountry(country);
  }
  /*  update the value of navContext   */

  useEffect(() => {
    let user = localStorage.getItem("loggedUser")
    user = JSON.parse(user)
    if (user) {
      setLoggedUser(user)
      setIsLoggedIn(true)
    }
    // console.log("user:", user);
  }, [setIsLoggedIn])

  return (
    <Router>
      <navContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          setIsLoggedIn: setIsLoggedInFunction,
          loggedUser: loggedUser,
          setLoggedUser: setLoggedUserFunction,
          setError: setError,
          displayedCountry: displayedCountry,
          setDisplayedCountry: setDisplayedCountryFunction,
        }}>
        <MainHeader />

        <Switch>
          {routes.map((route, i) => (
            <Route
              path={route.path}
              exact={route.exact}
              key={i}
              render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes}/>
              )}
            />
          ))}
        </Switch>

        {error &&
        <ErrorModal
          title={error.title}
          errorMessage={error.errorMessage}
          resetError={resetError} />
        }
      </navContext.Provider>
    </Router>
  );
}

export default App;
