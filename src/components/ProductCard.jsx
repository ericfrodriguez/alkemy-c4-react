
function ProductCard({isCarrito, nombre, precio, image, onAgregarCarrito }) {

    const contenedor = {
        margin: '20px'
    }

    const producto = {
        nombre: nombre,
        precio: precio,
    }

    return (
        <div style={contenedor}>
            <h3>{nombre}</h3>
            <img width='150' src={image} alt="" />
            <p>{precio}</p>
            <div>
                { 
                    isCarrito
                    ? null
                    : <button onClick={() => onAgregarCarrito(producto)}>Agregar al carrito</button>
                }
            </div>
        </div>
    )
}

export default ProductCard;