import TodoList from "./TodoList";

function MyComponent() {

    const nombre = 'John Doe';
    // const mensaje = `Hola, ${nombre}`; // No es lo mismo que JSX
    const isActive = false;

    const estilo = {
        fontSize: isActive ? '24px' : '16px',
        color: isActive ? 'green' : 'red'
    }

    return (
        <div>
            <h1 style={estilo}>Bienvenido, {nombre}!</h1>
            <p>Esta es una aplicación de ejemplo en React.</p>
            <div>
                <p>Hola Mundo!</p>
            </div>
            <TodoList />
        </div>
    )
}

export default MyComponent