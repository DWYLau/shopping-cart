import styles from "./Cart.module.css"
import { useEffect, useState } from "react"
import { useCart } from "../../components/context/CartContext"
import { Link } from "react-router-dom"
import CartCard from "../../components/CartCard/CartCard"

function Cart() {
  const [total, setTotal] = useState(0)
  const [editQuantity, setEditQuantity] = useState(false)
  const { cart, setCart } = useCart()

  function handleDelete() {}

  function handleQuantity() {}

  useEffect(() => {
    function calculateTotal() {
      if (cart) {
        const total = cart.reduce((acc, product) => {
          if (product.total) {
            return acc + product.total
          } else {
            return acc
          }
        }, 0)
        setTotal(total)
        return total
      } else {
        return 0
      }
    }
    calculateTotal()
  }, [])

  if (!cart)
    return (
      <div className={styles["notice-container"]}>
        <h1 className={styles.title}>Your Shoppit cart is empty.</h1>
        <h2 className={styles.subtitle}>
          Would you like to <Link to="/products">continue shopping?</Link>
        </h2>
      </div>
    )

  return (
    <div className={styles["flex-container"]}>
      <section className={styles.summary}>
        <h1 className={styles["section-header"]}>Shopping Cart</h1>
        <div className={styles["card-container"]}>
          {cart && cart.map((product) => <CartCard product={product} />)}
        </div>
      </section>
      <section className={styles["total-summary"]}>
        <div className={styles["section-header"]}>
          Subtotal ({cart.length} items)
        </div>
        <div className={styles.info}>
          <h1>Total: £{total.toFixed(2)}</h1>
          <Link className={styles["checkout-button"]} to="/checkout">
            Checkout
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Cart
