import React, { createContext, useState, useContext, useEffect } from 'react';

const GlobalUserContext = createContext();



export const GlobalUserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const ADMIN_USER = import.meta.env.VITE_ADMIN_USER;
  
    useEffect(() => {
      const userName = prompt("Por favor, ingresa tu nombre de usuario:");
      if (userName && userName.trim() !== "") {
        setUser(userName);
        console.log("Usuario guardado:", userName); 
    } else {
        console.warn("No se ingresó un nombre de usuario válido.");
    }
}, []);
  
    const isAdmin = user === ADMIN_USER;

    return (
      <GlobalUserContext.Provider value={{ user, setUser, isAdmin }}>
        {children}
      </GlobalUserContext.Provider>
    );
  };
  

export  const UseUserContext = () => useContext(GlobalUserContext);