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
    },
    {
        id: 3,
        nombre: 'joe',
        image: 'https://robohash.org/user3'
    }
]

root.render(<>
    {
        users.map((user, index) => {
            return <div key={index}>
                <h1>{user.nombre}</h1>
                <img src={user.image} />
            </div>
        })
    }
    {/* <Posts /> */}
</>
)