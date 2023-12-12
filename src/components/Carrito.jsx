import { useState } from 'react';
import ProductCard from './ProductCard'

function Carrito() {
    const [carritoItems, setCarritoItems] = useState([]);

    const handleAddCarrito = (producto) => {
        setCarritoItems([...carritoItems, producto]);
    }

    const productos = [
        {
            id: 1,
            nombre: 'Remera',
            precio: 50
        },
        {
            id: 2,
            nombre: 'Jean',
            precio: 75
        },
        {
            id: 3,
            nombre: 'Gorra',
            precio: 20
        },
    ];

    return (
        <div>
            <h2>Productos</h2>
            {
                productos.map((producto) => {
                    return (
                        <ProductCard
                            key={producto.nombre}
                            nombre={producto.nombre}
                            precio={producto.precio}
                            image=''
                            onAgregarCarrito={handleAddCarrito}
                            isCarrito={false}
                        />
                    )
                })
            }
            <h2>Carrito de compras</h2>
            {
                carritoItems.map((producto) => {
                    return (
                        <ProductCard
                            key={producto.nombre}
                            nombre={producto.nombre}
                            precio={producto.precio}
                            image=''
                            isCarrito={true}
                        />
                    )
                })
            }
        </div>
    )
}

export default Carrito;