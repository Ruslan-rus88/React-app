import React, { useRef, Fragment } from 'react'

const UseRefExample = () => {
    // same as: document.getElementById("input")
    const inputRef = useRef()
    const testRef = useRef("<h2>initial ref</h2>")

    const inputHandler = () => {
        console.log(inputRef.current);
        console.log(inputRef.current.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // same as: document.getElementById("input").value
        inputRef.current.value = ""
    }

    const testHandler = () => {
        console.log("test");
        testRef.current.innerHTML = "<h2>test is <i>passed!</i></h2"
        console.log(testRef.current.innerHTML);
    }
    return (
        <Fragment>
            <form onSubmit={submitHandler}>
                <label htmlFor="input">Name</label>
                <input id="input" ref={inputRef} onChange={inputHandler}></input>
                <button type="submit">Submit</button>
            </form>
            <br /><br />
            <button ref={testRef} onClick={() => { testHandler() }}>initial test</button>
        </Fragment>
    )
}

export default UseRefExample;