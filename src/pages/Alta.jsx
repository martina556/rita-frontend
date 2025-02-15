import useTitulo from "../hooks/useTitulo"
import Formulario from "../components/Formulario"
import Tabla from "../components/Tabla"
import { useContext } from "react"
import ProductosContext from "../context/ProductosContext"
import Modal from "../components/Modal"
import './Alta.scss'

const Alta = () => {
  useTitulo('Alta')
  const { error403, setError403 } = useContext(ProductosContext);

  return (
    <>
    {error403 && (
        <Modal onClose={() => setError403(false)}>
          No tienes permisos para realizar esta acción.
        </Modal>
      )}
    <section className="section-alta">
      <header className="alta-header">
        <h1>Formulario de Alta de productos</h1>
      </header>
      <div className="alta-content">
        <Formulario/>
      <Tabla/>
      </div>
      
    </section>
   
    </>
  )
}

export default Alta