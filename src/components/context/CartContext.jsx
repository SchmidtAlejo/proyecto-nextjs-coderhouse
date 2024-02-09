'use client'

import { createContext, useContext, useState } from "react"

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart,item]);
    }

    const buy = () => {
        setCart([])
    }

    const emptyCart = () => {
        setCart([])
    }

    const removeItem = (item) => {
        const newCart = [...cart];
        const index = cart.indexOf(item);
        newCart.splice(index, 1);
        setCart(newCart);        
    }

    return(
        <CartContext.Provider value={{addToCart, cart, buy, emptyCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}
