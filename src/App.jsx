import { BrowserRouter } from 'react-router-dom'

import Rutas from './routes/Rutas'
import Header from './components/Header'
import Footer from './components/Footer'
import { useContext } from 'react'
import ProductosContext from './context/ProductosContext'
import Modal from './components/Modal'

const App = () => {

  const { error403, setError403 } = useContext(ProductosContext);
  return (
    <>
      {error403 && (
        <Modal
          message="No tienes permisos para realizar esta acción."
          onClose={() => setError403(false)}
          
        />
        
      )}

      <BrowserRouter>
        <Header />
        <Rutas />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;