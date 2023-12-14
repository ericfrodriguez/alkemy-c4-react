// import ProductCard from './components/ProductCard.jsx'
// import MyComponent from './components/MyComponent.jsx'
import Counter from './components/Counter.jsx'
// import Carrito from './components/Carrito.jsx'

import './App.css'
import Contenedor from './components/Contenedor.jsx'
// import Efectos from './components/Efectos.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
// import Registro from './components/Registro.jsx'
import UserProvider from './context/UserProvider.jsx'

function App() {

  return (
    <UserProvider>
      <Header />

      <Contenedor>
      <Counter />
      </Contenedor>


        {/* <Registro /> */}
      {/* <Efectos /> */}
      {/* <Carrito /> */}
      {/* <MyComponent /> {/* Elementos */}
      {/* <MyCompenent>{children}</MyCompenent> Contenedor*/}
      <Footer />
    </UserProvider>
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