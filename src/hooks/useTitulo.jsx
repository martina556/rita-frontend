import { useEffect } from "react"


const useTitulo = ( textoTitulo = 'Sin título') => {

    useEffect(() => {
      document.title = `Rita Cosmeticos - ${textoTitulo}`
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
}

export default useTitulo