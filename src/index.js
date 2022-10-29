import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Posts } from './Posts'

const root = ReactDOM.createRoot(document.getElementById('root'))


function Counter() {

    const [mensaje, setMensaje] = useState('')

    useEffect(() => {
        console.log("render")
    }, [])
    // con el arreglo vacio solo se ejecutara una vez

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