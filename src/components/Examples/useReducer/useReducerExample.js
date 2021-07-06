import React, { useReducer } from "react"

const initialState = { count: 0 }

function reducer(state, action) {
    console.log("state: ", state);
    console.log("action: ", action);

    switch (action.type) {
        case 'decrement':
            return { count: state.count - 1 };
        case 'increment':
            return { count: state.count + 1 };
        default:
            throw new Error();
    }
}

const UseReducerExample = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    // dispatch() : updates (action) in reducer function 
    // return from reducer function updates (state)

    return (
        <>
            <h1>useReducer Example (Counter)</h1>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </>
    )
}

export default UseReducerExample;