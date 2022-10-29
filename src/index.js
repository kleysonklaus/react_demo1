import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Posts } from './Posts'

const root = ReactDOM.createRoot(document.getElementById('root'))


function Counter() {

    const [mensaje, setMensaje] = useState('')
    const [counter, setCounter] = useState(0)

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
            <hr />
            <h1>Counter: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>
                Incrementar
            </button>

        </div>
    </>
}

root.render(<>

    <Counter />
</>
)