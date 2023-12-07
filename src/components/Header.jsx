
import Button from './Button';

import '../styles/Header.css';

function Header(props) {
    // console.log(props.titulo);

    const handleClickBtn = (text) => {
        alert('Click en el boton: ' + text);
    }

    return (
        <header className='header-container'>
            <Button tarea={handleClickBtn} label='Inicio'/>
            <Button tarea={handleClickBtn} label='Sobre nosotros'/>
            <Button tarea={handleClickBtn} label='Contacto'/>
        </header>
    )
}

export default Header;