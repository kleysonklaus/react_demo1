import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Posts } from './Posts'

const root = ReactDOM.createRoot(document.getElementById('root'))


function Counter() {

    const [counter, setCounter] = useState(0)

    return <>
        <h1>Counter : {counter}</h1>
        <button onClick={
            () => {
                console.log(counter)
                setCounter(counter + 1)
            }
        }>
            Sumar
        </button>
        <button onClick={
            () => {
                console.log(counter)
                setCounter(counter - 1)
            }
        }>
            Restar
        </button>
    </>
}

root.render(<>

    <Counter />
</>
)