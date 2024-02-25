import React from 'react'

function Register() {

    function handleRegister(event) {
        event.preventDefault(); // do not reload the screen on calling this func
        console.log("hello world");
    }


    const age = 19;
    return (
        <form>

            {
                age > 18 ? (
                    <div>
                        <input type='email' placeholder='Enter email test@test.com'></input>
                        <button onClick={handleRegister}>Submit</button>
                    </div>
                ) : (
                    <h1>kid</h1>
                )
            }


        </form>
    )
}

export default Register