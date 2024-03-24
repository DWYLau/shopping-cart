import Header from "../../components/Header/Header"
import { Outlet } from "react-router-dom"
import { SearchProvider } from "../../components/context/SearchContext"
import { CartProvider } from "../../components/context/CartContext"

function Base() {
  return (
    <CartProvider>
      <SearchProvider>
        <Header />
        <Outlet />
      </SearchProvider>
    </CartProvider>
  )
}

export default Base
