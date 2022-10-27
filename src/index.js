import React from 'react'
import ReactDOM from 'react-dom/client'
import { Greeting, UserCard } from './Greeting'
import { Button } from './Button'
import { TaskCard } from './Task'
import Product, { NavBar } from './product'
import { Saludar } from './Saludar'

const root = ReactDOM.createRoot(document.getElementById('root'))

const handleChange = (e) => {
    console.log(e.target.value)
}

root.render(<>

    <TaskCard ready={false} />
    <Saludar />
    <Button text='saludar' />
    <input onChange={handleChange} />
    <input onDoubleClick={() => console.log('double click')} />
</>
)