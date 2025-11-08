'use client';

import { CartItem } from '@/utils/interface';
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
interface CartContextType {
  cart: CartItem[];
  total: number;
  addToCart: (item: CartItem) => void;
  isInCart: (id: string) => boolean;
  emptyCart: () => void;
  removeItem: (item: CartItem) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    const storedTotal = localStorage.getItem('total');

    if (storedCart) setCart(JSON.parse(storedCart));
    if (storedTotal) setTotal(JSON.parse(storedTotal));
  }, []);

  const addToCart = (item: CartItem) => {
    const newCart = [...cart, item];
    const newTotal = total + item.price * item.qty;

    setCart(newCart);
    setTotal(newTotal);

    localStorage.setItem('cart', JSON.stringify(newCart));
    localStorage.setItem('total', JSON.stringify(newTotal));
  };

  const isInCart = (id: string): boolean => {
    return cart.some((element) => element.id === id);
  };

  const emptyCart = () => {
    setCart([]);
    setTotal(0);
    localStorage.removeItem('cart');
    localStorage.removeItem('total');
  };

  const removeItem = (item: CartItem) => {
    const index = cart.indexOf(item);
    if (index === -1) return;

    const newCart = [...cart];
    newCart.splice(index, 1);

    const newTotal = total - item.price * item.qty;

    setCart(newCart);
    setTotal(newTotal);

    localStorage.setItem('cart', JSON.stringify(newCart));
    localStorage.setItem('total', JSON.stringify(newTotal));
  };

  return (
    <CartContext.Provider
      value={{ addToCart, cart, isInCart, emptyCart, removeItem, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
