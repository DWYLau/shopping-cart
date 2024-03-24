import { useEffect } from "react"
import { useCart } from "../../components/context/CartContext"

function Cart() {
  const { cart, setCart } = useCart()

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return <div>Cart</div>
}

export default Cart
