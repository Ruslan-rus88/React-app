import React, { useState, useEffect } from "react"
import "./users.css"
import { v4 as uuid } from 'uuid';
import { VscTrash } from "react-icons/vsc";
// import wrapper from "../helpers/wrapper";

const Users = ({ setError }) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [users, setUsers] = useState([])
    const [validFirstName, setValidFirstName] = useState(true)
    const [validLastName, setValidLastName] = useState(true)

    useEffect(() => {
        let usersList = localStorage.getItem("usersList")
        if (usersList) {
            setUsers(JSON.parse(usersList))
        }
    }, [])

    const firstNameHandler = (e) => {
        setFirstName(e.target.value);
        setValidFirstName(e.target.value.trim().length > 0);
    }
    const lastNameHandler = (e) => {
        setLastName(e.target.value);
        setValidLastName(e.target.value.trim().length > 0);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const FirstNameLength = firstName.trim().length;
        const LastNameLength = lastName.trim().length;

        if (FirstNameLength < 1 && LastNameLength < 1) {
            setError({
                title: "Wrong input",
                errorMessage: "Please enter valid names!"
            });
            setValidFirstName(false);
            setValidLastName(false);
            return;
        }
        if (FirstNameLength < 1) {
            setError({
                title: "Wrong input",
                errorMessage: "Please enter a valid first name!"
            });
            setValidFirstName(false);
            return;
        }
        if (LastNameLength < 1) {
            setError({
                title: "Wrong input",
                errorMessage: "Please enter a valid last name!"
            });
            setValidLastName(false);
            return;
        }

        let usersList = localStorage.getItem("usersList")
        usersList = JSON.parse(usersList)

        if (usersList) {
            usersList = [...usersList, { firstName: firstName, lastName: lastName, id: uuid() }]
        } else {
            usersList = [{ firstName: firstName, lastName: lastName, id: uuid() }]
        }
        localStorage.setItem("usersList", JSON.stringify(usersList))

        setUsers(usersList)
        setFirstName("");
        setLastName("");
    }

    const deleteUser = (id) => {
        let usersList = localStorage.getItem("usersList")
        usersList = JSON.parse(usersList)
        usersList = usersList.filter(user => user.id !== id)
        localStorage.setItem("usersList", JSON.stringify(usersList))
        setUsers(usersList);
    }

    // const testHandler = () => {
    //     console.log(validFirstName, validLastName);
    // }

    return (
        /*     1. <></>
                2. <Fragment></Fragment> need to import it
                3. <React.Fragment></React.Fragment> no need to import
                4. <wrapper></wrapper>  in this example wrapper is not necessary (it used to return children without returning containing div inside JSX)
                5. <div></div> or any other tag     */
        <React.Fragment>
            <div className="users wrapper">
                {/* <button onClick={testHandler}>test</button> */}
                <form className="users__form" onSubmit={submitHandler}>
                    <div className="users__form--container">
                        <label htmlFor="first-name" className={`users__label ${!validFirstName ? 'notValid' : ""}`}>First Name:</label>
                        <input
                            type="text"
                            id="first-name"
                            className={`users__input ${!validFirstName ? 'notValidInput' : ""}`}
                            placeholder="Enter First Name"
                            onChange={firstNameHandler}
                            value={firstName}>
                        </input>
                    </div>
                    <div className="users__form--container">
                        <label htmlFor="last-name" className={`users__label ${!validLastName ? "notValid" : ""}`}>Last Name:</label>
                        <input
                            type="text"
                            id="last-name"
                            className={`users__input ${!validLastName ? 'notValidInput' : ""}`}
                            placeholder="Enter Last Name"
                            onChange={lastNameHandler}
                            value={lastName}>
                        </input>
                    </div>
                    <button className="users__btn" type="Submit">Submit</button>
                </form>
                <h2 className="users__title">Users</h2>
                {users && <ul className="users__list">
                    {users.map((user) => {
                        return (
                            <li
                                className="users__item"
                                key={user.id}>
                                <span>{user.firstName} {user.lastName}</span>
                                <button className="users__delete" onClick={() => deleteUser(user.id)}><VscTrash /></button>
                            </li>
                        )
                    })}
                </ul>}
                {users.length === 0 && <div className="users__empty">....No users to display....</div>}
            </div>
        </React.Fragment>
    )
}

export default Users;