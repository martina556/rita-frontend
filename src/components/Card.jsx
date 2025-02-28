import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.scss'
import CarritoContext from '../context/CarritoContext.jsx';


const Card = ({ producto }) => {

  const { agregarProductoAlCarritoContext } = useContext(CarritoContext)
  const navigate = useNavigate()

  const handleAgregar = (producto) => {
    console.log('Agregando el producto al carrito...')
    agregarProductoAlCarritoContext(producto)
  }
  const handleVerDetalles = () => {
    navigate(`/producto/${producto.id}`);
  };
  return (
    <div className='card'onClick={handleVerDetalles}>
    <article className='card__article'>
      <div className='card__image-container'>
        <img src={producto.foto} alt={producto.name} className='card__image' />
      </div>
      <div className='card__content'>
        <h2 className='card__heading'>{producto.name}</h2>
        <div className='button-card'>
        <button 
              className='button-card-carrito' 
              onClick={(e) => {
                e.stopPropagation();
                handleAgregar(producto);
              }}
            >
              Agregar
            </button> 
        </div>
        
      </div>
    </article>
  </div>
  )
}

export default Card