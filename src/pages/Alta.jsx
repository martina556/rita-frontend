import useTitulo from "../hooks/useTitulo"
import Formulario from "../components/Formulario"
import Tabla from "../components/Tabla"
import './Alta.scss'

const Alta = () => {
  useTitulo('Alta')
  return (
    <>
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