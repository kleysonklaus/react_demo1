import React from 'react'
import ReactDOM from 'react-dom/client'
import { Greeting, UserCard } from './greeting'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<>
    <Greeting />
    <UserCard />
    <Greeting />
    <Greeting />
</>
)