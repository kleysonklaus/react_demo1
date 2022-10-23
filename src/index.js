import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))


function Greeting() {
    const married = true
    // if (married) {
    //     return <h1>Estoy Casado</h1>
    // } else {
    //     return <h1>No Estoy Casado</h1>
    // }

    return <h1>{married ? 'estoy casado 😍' : 'no lo estoy 🤣'}</h1>
}


root.render(
    <Greeting />
)