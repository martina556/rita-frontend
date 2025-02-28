import { createContext, useEffect, useState } from 'react';
import { UseUserContext } from './UsuarioContext';
import axios from 'axios';

const ProductosContext = createContext("TEST");



const ProductosProvider = ({ children }) => {

    const url = window.env?.VITE_BACKEND_PRODUCTOS || import.meta.env.VITE_BACKEND_PRODUCTOS;

    console.log(url, "URL")

    const [productos, setProductos] = useState(null)

    const [productoAEditar, setProductoAEditar] = useState(null)

    const { user } = UseUserContext();
    console.log("Usuario en ProductosContext:", user);

    const [error403, setError403] = useState(false);


    useEffect(() => {
        getAllProductos()
    }, [])

    const getAllProductos = async () => {
        try {
            const prods = await axios(url, {})
            console.log(prods)
            setProductos(prods.data)
        } catch (error) {
            console.error('getAllProductos', error)
        }
    }

    const crearProductoContext = async (nuevoProducto) => {
        try {
            const config = {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                data: {
                    ...nuevoProducto,
                    user
                },
            }
        
            const { data : newProduct } = await axios(url, config) 
            
            setProductos([...productos, newProduct]) 
    

        } catch (error) {
            console.error('[crearProductoContext]', error)
            if (error.response.status === 403) setError403(true);
        }
    }

    const actualizarProductoContext = async (productoEditado) => {

        try {
            //console.log(productoEditado)
            const config = {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                data: ({ ...productoEditado, user })
            }
            const urlEdicion = `${url}/${productoEditado.id}`;
            await axios(urlEdicion, config)

            

            const nuevoEstadoProducto = productos.map(producto => producto.id === productoEditado.id ? productoEditado : producto)
            setProductos(nuevoEstadoProducto)

        } catch (error) {
            console.error('[actualizarProductoContext', error)
            if (error.response.status === 403) setError403(true) ;

        }
    }

    const eliminarProductoContext = async (productoId) => {
        try {
            const config = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                data: { user },
            };
            console.log(config, "options");
            console.log(productoId, "productoId");


            const urlDelete = `${url}${productoId}`; // Usa el ID del producto directamente en la URL

            await axios(urlDelete, config)


            // Actualiza la lista de productos filtrando el producto eliminado
            setProductos((prevProductos) =>
                prevProductos.filter((producto) => producto.id !== productoId)
            );
        } catch (error) {
            console.error('[eliminarProductoContext]', error);
            if (error.response.status === 403) setError403(true) ;
        }
    };






    const data = {
        productos,
        crearProductoContext,
        actualizarProductoContext,
        productoAEditar,
        setProductoAEditar,
        eliminarProductoContext,
        error403,
        setError403
    }
    //console.log(data, "DATA")
    //console.log(productos, "context")  
    return (
        <ProductosContext.Provider value={data}>
            {children}
        </ProductosContext.Provider>
    )
}

export { ProductosProvider }
export default ProductosContext;