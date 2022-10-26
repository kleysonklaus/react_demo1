import React from 'react'
import ReactDOM from 'react-dom/client'
import { Greeting, UserCard } from './Greeting'
import { Button } from './Button'
import { TaskCard } from './Task'
import Product, { NavBar } from './product'
import { Saludar } from './Saludar'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<>

    <TaskCard ready={false} />
    <Saludar />
</>
)