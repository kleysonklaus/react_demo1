export function Greeting({ title, name = "default value" }) {
    // console.log(title, name)
    return <h1>{title} es igual a = {name}</h1>
}
export function UserCard(props) {
    console.log(props)
    return <>
        <h1>{props.name}</h1>
        <h1>{props.amount}</h1>
        <h1>{props.married ? "casado" : "soltero"}</h1>
        <ul>
            <li>{props.address.city}</li>
            <li>{props.address.street}</li>
        </ul>
        <h1>{props.points}</h1>
        <h1>{props.address.toString()}</h1>
    </>
}