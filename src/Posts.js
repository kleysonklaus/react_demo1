import { AiFillGithub } from "react-icons/ai";
export const Posts = () => {
    return <>
        <button onClick={() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))
        }}>
            <AiFillGithub /> Traer Datos
        </button>
    </>
}