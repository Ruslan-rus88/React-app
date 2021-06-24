import React, { useState, useEffect } from "react"
import ErrorModal from "./components/errorModal/errorModal"
import Users from "./components/users/users"
import UsersUseReducer from "./components/users/usersUseReducer"
import UseRefExample from "./components/useRef/useRefExample"
import UseEffectExample from "./components/useEffect/useEffectExample"
import UseReducerExample from "./components/useReducer/useReducerExample"
import MainHeader from "./components/header/mainHeader"
import Home from "./components/home/home"
import SignIn from "./components/signIn/signIn"
import navContext from "./context/navContext"
import Countries from "./components/countries/countries"

function App() {
  const [error, setError] = useState(null)
  const [activePage, setActivePage] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedUser, setLoggedUser] = useState({})

  const resetError = () => setError(null)

  // const navBarPages = ["Home", "Countries", "Users", "Users(useReducer)", "UseRef", "UseEffect", "UseReducer"]
  const navBarPages = ["Home", "Countries", "Users"]

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
        navPage: activePage,
        setNavPage: setNavPageFunction,
        navBarPages: navBarPages,
      }}>
      <MainHeader navBarPages={navBarPages} />

      {error &&
        <ErrorModal
          title={error.title}
          errorMessage={error.errorMessage}
          resetError={resetError} />}

      {activePage === "Home" && <Home />}
      {activePage === "Countries" && <Countries />}
      {activePage === "Sign in" && <SignIn />}
      {activePage === "Users" && <Users setError={setError} />}
      {activePage === "Users(useReducer)" && <UsersUseReducer setError={setError} />}
      {activePage === "UseRef" && <UseRefExample />}
      {activePage === "UseEffect" && <UseEffectExample />}
      {activePage === "UseReducer" && <UseReducerExample />}
    </navContext.Provider>
  );
}

export default App;
