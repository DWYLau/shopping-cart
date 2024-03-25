import { useState } from "react"
import { Product } from "../../utils/types"
import styles from "./CartCard.module.css"
import { useCart } from "../context/CartContext"

interface Props {
  product: Product
}

function CartCard({ product }: Props) {
  const [editQuantity, setEditQuantity] = useState(false)
  const [editItem, setEditItem] = useState<Product | null>(null)
  const { cart, setCart } = useCart()

  function changeEditStatus() {
    setEditQuantity(true)
  }

  function changeQuantity(
    event: React.ChangeEvent<HTMLInputElement>,
    item: Product
  ): void {
    const quantity = parseInt(event.target.value, 10)
    setEditItem({ ...item, number: quantity })
  }

  function confirmQuantity() {
    if (editItem) {
      if (cart && cart.some((product) => product.title === editItem.title)) {
        const updatedCart = cart.map((product) => {
          if (editItem.number && product.title === editItem.title) {
            return {
              ...product,
              number: editItem.number,
              total: editItem.number * product.price,
            }
          } else {
            return product
          }
        })
        setCart(updatedCart)
        setEditQuantity(false)
      }
    }
  }

  return (
    <div className={styles.card}>
      <img className={styles.image} src={product.image} alt="Product Image" />
      <div className={styles.summary}>
        <h3>{product.title}</h3>
        <div className={styles["extra-info"]}>
          <h3 className={styles.quantity}>Quantity: {product.number}</h3>
          <h3>Price: £{product.price.toFixed(2)}</h3>
        </div>
        <div className={styles["button-container"]}>
          {!editQuantity ? (
            <button onClick={changeEditStatus} className={styles.button}>
              Change Quantity
            </button>
          ) : (
            <div className={styles["quantity-container"]}>
              <button
                onClick={confirmQuantity}
                className={styles["confirm-button"]}
              >
                Confirm
              </button>
              <input
                onChange={(event) => changeQuantity(event, product)}
                className={styles["input-number"]}
                type="number"
                id="quantity"
                name="quantity"
                defaultValue={product.number}
              />
            </div>
          )}

          <button className={styles.button}>Remove</button>
        </div>
      </div>
      <div className={styles.total}>
        <h2>Total Price</h2>
        <h3>£{product.total?.toFixed(2)}</h3>
      </div>
    </div>
  )
}

export default CartCard
