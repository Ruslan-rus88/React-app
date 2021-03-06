import React from "react"

const NavContext = React.createContext({
    isLoggedIn: false,
    loggedUser: {},
    setLoggedUser: () => { },
    setIsLoggedIn: () => { },
    navPage: "Home",
    setNavPage: () => { },
    navBarPages: [],
    setError: () => { },
})

export default NavContext;