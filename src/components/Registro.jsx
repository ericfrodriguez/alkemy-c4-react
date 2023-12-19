import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Registro() {
    const { setUser } = useContext(UserContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');

    const [submitted, setSubmitted] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleImageChange = (event) => {
        setImage(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setSubmitted(true);

        // Validar credenciales

        const nuevoUsuario = {
            name: name,
            image: image
        }

        setUser(nuevoUsuario)
    }

    return (
        <div>
            <h2>Registro de usuario</h2>
            <form onSubmit={handleSubmit}>
                <div style={{
                    margin: '20px 0px'
                }}>
                    <label htmlFor="name">Nombre: </label>
                    <input onChange={handleNameChange} id="name" type="text" />
                </div>
                <div style={{
                    margin: '20px 0px'
                }}>
                    <label htmlFor="email">Email: </label>
                    <input onChange={handleEmailChange} id="email" type="text" />
                </div>
                <div style={{
                    margin: '20px 0px'
                }}>
                    <label htmlFor="image">Imagen: </label>
                    <input onChange={handleImageChange} id="image" type="text" />
                </div>
                <button type="submit">Registrarse</button>
            </form>
            {
                submitted
                    ? (
                        <div style={{
                            margin: '20px 0px'
                        }}>
                            <h2>Datos del usuario</h2>
                            <p>Nombre: {name}</p>
                            <p>Email: {email}</p>
                        </div>
                    )
                    : null
            }
        </div>
    )
}
export default Registro