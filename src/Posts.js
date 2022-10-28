export const Posts = () => {
    return <>
        <button onClick={() => {
            // fetch('https://jsonplaceholder.typicode.com/posts')
            fetch('https://jsonplaceholder.typicode.xyz/posts')
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))
        }}>
            Traer Datos
        </button>
    </>
}