import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductosContext from '../context/ProductosContext';
import CarritoContext from '../context/CarritoContext';
import './ProductDetail.scss';

const ProductDetail = () => {
  const { id } = useParams();
  const { productos } = useContext(ProductosContext);

  const { agregarProductoAlCarritoContext } = useContext(CarritoContext)

  const handleAgregar = (producto) => {
    console.log('Agregando el producto al carrito...')
    agregarProductoAlCarritoContext(producto)
  }

  if (!productos) return <p>Cargando productos...</p>;


  const producto = productos.find((p) => p.id === id);

  if (!producto) return <p>Producto no encontrado</p>;



  return (
    <main className='productDetail-main'>
      <div className='productDetail-info'>
        <h2>{producto.name}</h2>
        <p>{producto.description}</p>
        <span>${producto.precio}</span>
        <button 
              className='productDetail-info__button' 
              onClick={() => {
                handleAgregar(producto);
              }}
            >
              Agregar
            </button> 
      </div>
      <div className='productDetail-image'>
        <img src={`/${producto.foto}`} alt={producto.name} className='productDetail-image__product' />
     </div>
      
    </main>
  );
};

export default ProductDetail;
