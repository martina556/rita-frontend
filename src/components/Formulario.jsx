import { useContext, useState, useEffect } from "react"
import ProductosContext from "../context/ProductosContext"
import './Formulario.scss'

const Formulario = () => {

const formInit={
  id: null,
  name: '',
  precio: '',
  stock:'',
  marca:'',
  category:'',
  description:'',
  foto:'',
  envio: false,

}
const  [form, setForm] = useState(formInit)

const {crearProductoContext, actualizarProductoContext, productoAEditar, setProductoAEditar} = useContext(ProductosContext)
 
useEffect(() => {
  productoAEditar ? setForm(productoAEditar) : setForm(formInit)
}, [productoAEditar])
 



const handleSubmit = async e => {
  e.preventDefault()
console.log('handleSubmit')


try{
  if (form.id === null)
{
  console.log('Creando un producto')
  await crearProductoContext(form)
}else{
  console.log('Actualizando producto')
  await actualizarProductoContext(form)
}
handleReset()
}catch (error){
 console.error('[handleSubmit]', error)
}
}

const handleChange =e =>{

console.log(e.target.type)
const { type, name, checked, value} = e.target

setForm({
  ...form,
  [name]: type == 'checkbox' ? checked : value
})
}

const handleReset =() =>{
console.log('handleReset')
setForm(formInit)
setProductoAEditar(null)
}



  return (
    <>
    <div className="form-alta">
      <div className="form-alta_titulo">
      <h3>Agregar o editar producto</h3>
    </div>
    
    <form className="forma-alta_content" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="lbl-nombre">Nombre</label>
          <input 
            type="text" 
            name="name" 
            id="lbl-name" 
            value={form.name}  
            onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="lbl-precio">Precio</label>
          <input 
            type="text" 
            name="precio" 
            id="lbl-precio" 
            value={form.precio} 
            onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="lbl-stock">Stock</label>
          <input 
            type="text" 
            name="stock" 
            id="lbl-stock" 
            value={form.stock} 
            onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="lbl-marca">Marca</label>
          <input 
            type="text" 
            name="marca" 
            id="lbl-marca" 
            value={form.marca} 
            onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="lbl-categoria">Categoria</label>
          <input 
            type="text" 
            name="category" 
            id="lbl-category" 
            value={form.category} 
            onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="lbl-detalles">Detalles</label>
          <input 
            type="text" 
            name="description" 
            id="lbl-description" 
            value={form.description} 
            onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="lbl-foto">Foto</label>
          <input 
            type="text" 
            name="foto" 
            id="lbl-foto" 
            value={form.foto} 
            onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="lbl-envio">Envio</label>
          <input 
            type="checkbox"
            name="envio"
            id="lbl-envio"
            checked={form.envio}
            onChange={handleChange}/>
      </div>
      <div className="button-alta">
        <button className="button-alta_acciones" type="submit"  >Guardar</button>
        <button className="button-alta_acciones" type="reset" onClick={handleReset} >Limpiar</button>
      </div>
      
    </form>
    </div>
    
    </>
  )
}

export default Formulario