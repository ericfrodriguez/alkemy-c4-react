
function ProductCard({nombre, precio, image}) {

    const contenedor = {
        margin: '20px'
    }

    return (
        <div style={contenedor}>
            <h3>{nombre}</h3>
            <img width='150' src={image} alt="" />
            <p>{precio}</p>
        </div>
    )
}

export default ProductCard;