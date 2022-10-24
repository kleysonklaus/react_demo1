import React from 'react'
import ReactDOM from 'react-dom/client'
import { Greeting, UserCard } from './Greeting'
import { Button } from './Button'

import Product, { NavBar } from './product'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<>

    <Button text="click me" />
    <Button text="pay" />
    <Button text="string " />

    {/* <UserCard
        name="ryan"
        amount={3000}
        married={true}
        points={[10, 99.9, 12, 45]}
        address={{ street: "main street", city: "NY" }}
        greet={function () { alert("hola") }}
    />
    <UserCard
        name="usuario 2"
        amount={1000}
        married={false}
        points={[12, 45]}
        address={{ street: "av some where", city: "New York" }}
        greet={function () { alert("hola") }}
    /> */}
</>
)