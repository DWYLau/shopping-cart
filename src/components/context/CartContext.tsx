import React, { createContext, useContext, useState, ReactNode } from "react"
import { Product } from "../../utils/types"

type CartContextType = {
  cart: Product[] | null
  setCart: React.Dispatch<React.SetStateAction<Product[] | null>>
}

type CartProviderProps = {
  children: ReactNode
}

const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
})

function useCart(): CartContextType {
  return useContext(CartContext)
}

function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[] | null>(null)

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export { useCart, CartProvider }
