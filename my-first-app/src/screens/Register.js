import React, { useMemo, useState } from 'react'

const expensiveCalculation = (num) => {
    console.log("calculation...")
    for (let i = 0; i < 100000000; i++) {
        num = num + i;
    }
    return num;

}

function Register() {

    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);
    const calculation = useMemo(()=>expensiveCalculation(count),[count])  

    const increment = () => {
        setCount((c) => c + 1);
    }

    const addTodo = () => {
        setTodos((e) => [...e, "Todo Task"])
    }

    

return (
    <div>
        <div>
            <h2>My Todos</h2>
            {
                todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>
                })
            }
            <button onClick={addTodo}>Add Todo</button>
        </div>
        <hr />

        <div>
            Count : {count}
            <button onClick={increment}>+</button>
            <h2>Expensive Calculation</h2>
            {calculation}
        </div>
    </div>
)
}

export default Register