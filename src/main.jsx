import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { ProductosProvider } from './context/ProductosContext.jsx'
import { CarritoProvider } from './context/CarritoContext.jsx'
import { GlobalUserProvider } from './context/UsuarioContext.jsx'



createRoot(document.getElementById('root')).render(
    <GlobalUserProvider>
    <ProductosProvider>
        <CarritoProvider>
            <App />
        </CarritoProvider> 
    </ProductosProvider>
    </GlobalUserProvider>
)
