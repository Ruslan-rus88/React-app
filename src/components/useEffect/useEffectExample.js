import React, { useState, useEffect } from "react"

const UseEffectExample = () => {
    const [input, setInput] = useState("")

    useEffect(() => {
        console.log("Use Effect runs one time only");
    }, [])

    useEffect(() => {
        console.log("Use Effect with return CLEANUP FUNCTION");

        return () => {
            // it will be triggered after leaving UseEffectExample
            console.log("--------\nCLEANUP\n--------");
        }
    }, [])

    // useEffect(() => {
    //     console.log("Use Effect runs on each change of --UseEffectExample--");
    // })

    useEffect(() => {
        const exampleTimeout = setTimeout(() => {
            console.log("***********\n***********\nfetch data example!!\n***********\n***********");
        }, 1000)

        return () => {
            // return function run before the next useEffect start
            /************************
              important  to avoid running useEffect on each change for input
             *************************/
            console.log("clear timeout!");
            clearTimeout(exampleTimeout)
        }
    }, [input])

    /********************************************IMPORTANT ***********************************************
    If we have an object as a dependency ex:
    
                                                    const [user, setUser] = useState( {name: "" ,  age: "" } )
                                                    const {name : user_Name} = user
                                                    useEffect( () => {} , [user_Name])

    ********************************************IMPORTANT ***********************************************/


    const changeHandler = (e) => {
        setInput(e.target.value)
    }

    return (
        <div>
            <h2>useEffect Example</h2>
            <label htmlFor="input">Input</label>
            <input type="text" id="input" onChange={changeHandler} value={input}></input>
        </div>
    )
}

export default UseEffectExample