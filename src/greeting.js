export function Greeting({ title, name = "default value" }) {
    // console.log(title, name)
    return <h1>{title} es igual a = {name}</h1>
}
export function UserCard({ name, amount, married, address, points, greet }) {
    console.log(name, amount, married, address, points, greet)
    return <>
        <h1>{name}</h1>
        <h1>{amount}</h1>
        <h1>{married ? "casado" : "soltero"}</h1>
        <ul>
            <li>{address.city}</li>
            <li>{address.street}</li>
        </ul>
        <h1>{points}</h1>
        <h1>{address.toString()}</h1>
    </>
}