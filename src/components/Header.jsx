import { useContext } from "react";
import UserContext from "../context/UserContext";

function Header() {
    // console.log(props.titulo);
    const { user } = useContext(UserContext);
    // console.log('User Context', user);

    const anchorStyles = {
        textDecoration: 'none',
        color: 'white',
        cursor: 'pointer',
    }

    return (
        <header style={{
            backgroundColor: 'tomato',
            width: '100%',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px'
        }}>
            <div style={{
                marginLeft: 'auto'
            }}>
                <div style={{
                    display: 'flex',
                    gap: '10px'
                }}>
                    <span style={anchorStyles} href="">
                        Inicio
                    </span>
                    <span style={anchorStyles} href="">
                        Blog
                    </span>
                    <span style={anchorStyles} href="">
                        Contacto
                    </span>
                </div>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                marginLeft: 50
            }}>
                <img
                    style={{
                        borderRadius: '100px',
                        width: 60,
                        height: 60,
                        objectFit: 'cover'
                    }}
                    src={user.image}
                    alt=""
                />
                <p>{user.name}</p>
            </div>
        </header>
    )
}

export default Header;

{/* <span
                        onClick={() => setUser({
                            name: 'Messi',
                            image: 'https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg'
                        })}
                        style={anchorStyles} href="">
                        Inicio
                    </span> */}