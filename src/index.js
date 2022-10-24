import React from 'react'
import ReactDOM from 'react-dom/client'
import { Greeting, UserCard } from './Greeting'

import Product, { NavBar } from './product'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<>
    {/* <Greeting title="hola" name="aguas" />
    <Greeting title="kleyson" name="mareas" />
    <Greeting title="klaus" />
    <Greeting title="altura" />
    <Greeting title="rojo" /> */}
    <UserCard
        name="ryan"
        amount={3000}
        married={true}
        points={[10, 99.9, 12, 45]}
        address={{ street: "main street", city: "NY" }}
    />
    {/* <Product />
    <NavBar /> */}
</>
)