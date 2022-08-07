import { createContext, useContext, useState } from 'react';

{/* <img src="https://img.icons8.com/material-outlined/24/000000/plus--v1.png"/> */}
{/* <img src="https://img.icons8.com/ios/50/000000/minus.png"/> */}
const ShoppingCartContext = createContext({});
export function useShoppingCart() {


  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [carItems, setCartItems]= useState([])

    
  return (
    <ShoppingCartContext.Provider>
      {children}
    </ShoppingCartContext.Provider>
  );
}
