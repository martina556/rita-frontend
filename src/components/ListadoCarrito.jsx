import { useContext } from 'react'
import ItemCarrito from './ItemCarrito.jsx'
import CarritoContext from '../context/CarritoContext'
import Modal from './Modal.jsx'
import './ListadoCarrito.scss'

const ListadoCarrito = () => {

  const { carrito, limpiarCarritoContext, guardarCarritoContext } = useContext(CarritoContext)

  const handleComprar = () => {
    console.log('Comprando...')
    guardarCarritoContext()
  }

  const handleLimpiarCarrito = () => {
    console.log('Vaciando carrito...')
    limpiarCarritoContext()
  }



  return (
    <>
 

        <table className='tabla-carrito'>
           {/*  <thead>
                <tr>
                    <th>Foto</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead> */}
            <tbody>
                {
                    carrito.length <= 0 ? (
                        <tr>
                            <td colSpan={5} style={{textAlign: 'center'}}>No hay productos</td>
                        </tr>
                    ) : (
                        carrito.map((producto, idx) => (
                            <ItemCarrito key={idx} producto={producto} />
                        ))
                    )
                }
            </tbody>
        </table>
        <hr />
        { !carrito.length <= 0 && (
                <>
                <div className='button-carrito'>
                    <button className='button-carrito_acciones' onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
                    <button className='button-carrito_acciones' onClick={handleComprar}>Comprar</button>
                </div>
                    
                </>
            )
        }
    </>
  )
}

export default ListadoCarrito