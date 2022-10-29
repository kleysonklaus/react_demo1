import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Posts } from './Posts'

const root = ReactDOM.createRoot(document.getElementById('root'))


function Counter() {

    const [mensaje, setMensaje] = useState('')

    return <>
        <div>
            <input onChange={(e) => {
                setMensaje(e.target.value)
                console.log(mensaje)
            }

            } />
            <button onClick={(e) => {
                alert("el mensaje es: " + mensaje)
            }}>
                Guardar
            </button>
        </div>
    </>
}

root.render(<>

    <Counter />
</>
)