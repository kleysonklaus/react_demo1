import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Posts } from './Posts'

const root = ReactDOM.createRoot(document.getElementById('root'))


function Counter() {


    let counter = 10
    return <>
        <h1>Counter : {counter}</h1>
        <button onClick={
            () => {
                counter = counter + 1
                console.log(counter)
            }
        }>
            Sumar
        </button>
    </>
}

root.render(<>

    <Counter />
</>
)