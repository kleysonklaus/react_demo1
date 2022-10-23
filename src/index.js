import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))


function Greeting() {
    const user = {
        firstName: 'Ryan',
        lastName: 'Ray'
    }

    // return <h1>{user.firstName}</h1>
    // return <h1>{JSON.stringify(user)}</h1>
    return <div>
        <h1>{user.firstName}</h1>
        <h3>{user.lastName}</h3>
    </div>
}


root.render(
    <Greeting />
)