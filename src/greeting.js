export function Greeting({ title, name = "default value" }) {
    console.log(title, name)
    return <h1>{title} es igual a = {name}</h1>
}
export function UserCard() {
    return <h1>User Card</h1>
}