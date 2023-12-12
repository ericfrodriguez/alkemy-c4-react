import { useState } from "react";
import Counter from "./Counter";

function Efectos() {
    const [mostrar, setMostrar] = useState(true)

    return (
        <>
            {
                mostrar
                    ? <Counter />
                    : null
            }
            <div>
                <button onClick={() => setMostrar(true)}>Mostrar</button>
                <button onClick={() => setMostrar(false)}>Ocultar</button>
            </div>
        </>
    )
}

export default Efectos;