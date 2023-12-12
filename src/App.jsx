// import ProductCard from './components/ProductCard.jsx'
// import MyComponent from './components/MyComponent.jsx'
// import Counter from './components/Counter.jsx'
// import Carrito from './components/Carrito.jsx'

import './App.css'
import Efectos from './components/Efectos.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'

function App() {

  return (
    <>
      <Header titulo={'Titulo del blog'} />

      <div style={{
        margin: '50px 5px'
      }}>
        <Efectos />
      </div>

      {/* <Carrito /> */}
      {/* <Counter /> */}
      {/* <MyComponent /> {/* Elementos */}
      {/* <MyCompenent>{children}</MyCompenent> Contenedor*/}
      <Footer />
    </>
  )
}

export default App


// function useState() {
//   // Toda la logica
//   let estadoActual;

//   function cambiarEstado() {

//   }

//   return [estadoActual, cambiarEstado];
// }

// // Como usar el useState
// const [pepito, setPepito] = useState([]);