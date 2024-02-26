import React, { useEffect, useState } from 'react'

function Register() {

    const [email, setEmail] = useState()
    const [pwd, setPwd] = useState()

    const [age, setAge] = useState(12)


    // useEffect(()=>{}, []) syntax of useEffect

    useEffect(() => {
        console.log("age :" + age)
    }, [age])

    function handleRegister(event) {
        event.preventDefault(); // do not reload the screen on calling this func


    }

    function increaseAge(event) {
        event.preventDefault(); // do not reload the screen on calling this func
        setAge(age + 1)

    }

    console.log(email)
    console.log(pwd)
    console.log(age)
    return (
        <form>
            <h1>{age}</h1>
            <button onClick={increaseAge}>Increase</button>


            {age > 18 ? (
                <div>
                    <input
                        className="form" type='email' placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <input className="form" type='password' placeholder='Enter pwd'
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                    ></input>
                    <button onClick={handleRegister}>Submit</button>
                </div>
            ) : (<h1>kid</h1>)}


        </form>
    )
}

export default Register