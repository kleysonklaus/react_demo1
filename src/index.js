import React from 'react'
import ReactDOM from 'react-dom/client'
import { Greeting, UserCard } from './Greeting'

import Product, { NavBar } from './product'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<>
    <Greeting title="hola" />
    <Greeting x="bye" />
    <Greeting y={30} />
    <Greeting z={true} />
    <Greeting a={[1, 2, 3]} />
    {/* <UserCard />
    <Product />
    <NavBar /> */}
</>
)