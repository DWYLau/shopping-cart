import { Product } from "../../utils/types"
import styles from "./CartCard.module.css"

interface Props {
  product: Product
}

function CartCard({ product }: Props) {
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
          <button className={styles.button}>Change Quantity</button>
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
