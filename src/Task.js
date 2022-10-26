import './task.css'

export function TaskCard({ ready }) {


    return <div className='card'>
        <h1>Mi primer tarea</h1>
        <p><span>{ready ? 'Tarea Realizada' : 'Tarea Pendiente'}</span></p>
    </div>

}