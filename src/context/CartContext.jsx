import { createContext } from 'react';

export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
  cartCount: 0,
  setCartCount: () => {},
})

