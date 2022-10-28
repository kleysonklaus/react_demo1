import React from 'react'
import ReactDOM from 'react-dom/client'
import { Greeting, UserCard } from './Greeting'
import { Button } from './Button'
import { TaskCard } from './Task'
import Product, { NavBar } from './product'
import { Saludar } from './Saludar'
import { Posts } from './Posts'

const root = ReactDOM.createRoot(document.getElementById('root'))

const handleChange = (e) => {
    console.log(e.target.value)
}

root.render(<>
    <Posts />


</>
)