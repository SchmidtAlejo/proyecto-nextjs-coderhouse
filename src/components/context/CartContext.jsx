'use client'

import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
        setTotal(JSON.parse(localStorage.getItem("total")) || 0);
    }, [])

    const addToCart = (item) => {
        setCart([...cart, item]);
        setTotal(total + item.price * item.qty);
        localStorage.setItem("cart", JSON.stringify([...cart, item]));
        localStorage.setItem("total", JSON.stringify(total + item.price * item.qty));
    }

    const isInCart = (id) => {
        return cart.find((element) => element.id === id) !== undefined;
    }

    const emptyCart = () => {
        setCart([]);
        setTotal(0);
        localStorage.removeItem("cart");
        localStorage.removeItem("total");
    }

    const removeItem = (item) => {
        const newCart = [...cart];
        const index = cart.indexOf(item);
        newCart.splice(index, 1);
        setCart(newCart);
        setTotal(total - item.price * item.qty);
        localStorage.setItem("cart", JSON.stringify(newCart));
        localStorage.setItem("total", JSON.stringify(total - item.price * item.qty));
    }

    return (
        <CartContext.Provider value={{ addToCart, cart, isInCart, emptyCart, removeItem, total }}>
            {children}
        </CartContext.Provider>
    )
}
