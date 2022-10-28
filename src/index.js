import React from 'react'
import ReactDOM from 'react-dom/client'
import { Posts } from './Posts'

const root = ReactDOM.createRoot(document.getElementById('root'))

const users = [
    {
        id: 1,
        nombre: 'ryan rey',
        image: 'https://robohash.org/user1'
    },
    {
        id: 2,
        nombre: 'joe',
        image: 'https://robohash.org/user2'
    }
]

root.render(<>
    {
        users.map((user, index) => {
            return <h1 key={index}>{user.nombre}</h1>
        })
    }
    {/* <Posts /> */}
</>
)