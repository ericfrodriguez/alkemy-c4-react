import { useState, useEffect } from 'react';
import Button from './Button';

function Counter() {

    let [contador, setContador] = useState(0); // Estado local
    let [contador2, setContador2] = useState(0); // Estado local

    useEffect(() => {
        // Se ejecuta cunado se monta el componente
        console.log('Se montó y/o se actualizó el componente');

        // Funcion de limpieza
        return () => {
            console.log('Se desmontó mi componente');
        }
    }, [contador, contador2]);

    // Sin array de dependencias. Se ejecuta cada vez que se actualiza y se monta el componente
    // Con el array de dependencias vacio. Se ejecuta cuando el componente se monta por primera vez

    const handleSuma = () => {
        setContador(contador + 1);
        // console.log(contador);
    }

    const handleSuma2 = () => {
        setContador2(contador2 + 1);
        // console.log(contador);
    }

    return (
        <>
            <p>Contador: {contador}</p>
            <p>Contador2: {contador2}</p>
            <Button
                label='Incrementar'
                tarea={handleSuma}
            />
            <Button
                label='Incrementar2'
                tarea={handleSuma2}
            />
        </>
    )
}

export default Counter;