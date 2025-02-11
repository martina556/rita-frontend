import ListadoCarrito from "../components/ListadoCarrito"
import useTitulo from "../hooks/useTitulo"
import './Carrito.scss'

const Carrito = () => {

  useTitulo('Carrito')

  return (
    <>
    <main className="main-carrito">
      <h1 className="carrito-titulo">Mi carrito</h1>
      <hr />
      <ListadoCarrito/>
    </main>
      
      
    </>
  )
}

export default Carrito