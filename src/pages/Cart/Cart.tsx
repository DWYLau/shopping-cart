import styles from "./Cart.module.css"
import { useEffect } from "react"

import { useCart } from "../../components/context/CartContext"

function Cart() {
  const { cart, setCart } = useCart()

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <div className={styles["flex-container"]}>
      <div>Summary</div>
      <div>Total Section</div>
    </div>
  )
}

export default Cart
