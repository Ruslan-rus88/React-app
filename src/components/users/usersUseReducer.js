import React, { useEffect, useReducer } from "react"
import "./users.css"
import { v4 as uuid } from 'uuid';
import { VscTrash } from "react-icons/vsc";

const initialState = {
    firstName: "",
    lastName: "",
    validFirstName: null,
    validLastName: null,
    users: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case "update_users_list":
            return { ...state, users: action.usersList }

        case "fistName_update":
            return { ...state, firstName: action.value, validFirstName: action.value.trim().length > 0 };

        case "lastName_update":
            return { ...state, lastName: action.value, validLastName: action.value.trim().length > 0 };

        case "delete_user":
            let filteredUsers = state.users.filter(user => user.id !== action.id);
            localStorage.setItem("useReducer_usersList", JSON.stringify(filteredUsers));
            return { ...state, users: filteredUsers };

        case "submit_user":
            let updatedUsers = [...action.oldUsersList, { firstName: state.firstName, lastName: state.lastName, id: uuid() }];
            localStorage.setItem("useReducer_usersList", JSON.stringify(updatedUsers));
            return {
                firstName: "",
                lastName: "",
                validFirstName: null,
                validLastName: null,
                users: updatedUsers
            }

        default:
            throw new Error();
    }
}

const UsersUseReducer = ({ setError }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        let usersList = localStorage.getItem("useReducer_usersList")
        usersList = JSON.parse(usersList)
        if (usersList) {
            dispatch({ type: "update_users_list", usersList: usersList })
        }
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();

        if (!state.validFirstName && !state.validLastName) {
            setError({
                title: "Wrong input",
                errorMessage: "Please enter valid names!"
            });
            return;
        }
        if (!state.validFirstName) {
            setError({
                title: "Wrong input",
                errorMessage: "Please enter a valid first name!"
            });
            return;
        }
        if (!state.validLastName) {
            setError({
                title: "Wrong input",
                errorMessage: "Please enter a valid last name!"
            });
            return;
        }

        let usersList = localStorage.getItem("useReducer_usersList")
        dispatch({
            type: "submit_user",
            oldUsersList: usersList ? JSON.parse(usersList) : [],
        });
    }

    return (
        <React.Fragment>
            <div className="users wrapper">
                <form className="users__form" onSubmit={submitHandler}>
                    <div className="users__form--container">
                        <label htmlFor="first-name" className={`users__label ${state.validFirstName === false ? 'notValid' : ""}`}>First Name:</label>
                        <input
                            type="text"
                            id="first-name"
                            className={`users__input ${state.validFirstName === false ? 'notValidInput' : ""}`}
                            placeholder="Enter First Name"
                            onChange={(e) => dispatch({ type: "fistName_update", value: e.target.value })}
                            value={state.firstName}>
                        </input>
                    </div>
                    <div className="users__form--container">
                        <label htmlFor="last-name" className={`users__label ${state.validLastName === false ? "notValid" : ""}`}>Last Name:</label>
                        <input
                            type="text"
                            id="last-name"
                            className={`users__input ${state.validLastName === false ? 'notValidInput' : ""}`}
                            placeholder="Enter Last Name"
                            onChange={(e) => dispatch({ type: "lastName_update", value: e.target.value })}
                            value={state.lastName}>
                        </input>
                    </div>
                    <button className="users__btn" type="Submit">Submit</button>
                </form>
                <h2 className="users__title">Users</h2>
                {state.users && <ul className="users__list">
                    {state.users.map((user) => {
                        return (
                            <li
                                className="users__item"
                                key={user.id}>
                                <span>{user.firstName} {user.lastName}</span>
                                <button className="users__delete" onClick={() => dispatch({ type: "delete_user", id: user.id })}><VscTrash /></button>
                            </li>
                        )
                    })}
                </ul>}
                {state.users.length === 0 && <div className="users__empty">....No users to display....</div>}
            </div>
        </React.Fragment>
    )
}

export default UsersUseReducer;