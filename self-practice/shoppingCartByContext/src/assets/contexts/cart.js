import { useContext, createContext } from "react";

export const CartContext = createContext({
    item:{},
    addItem: () => {},
    removeItem: () => {}
}) 

export const CartProvider = CartContext.Provider


export default function useCart(){
    return useContext(CartContext)
} 