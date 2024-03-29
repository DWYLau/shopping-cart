import styles from "./Card.module.css"
import star from "../../assets/icons/star.png"
import like from "../../assets/icons/like.png"
import { Product } from "../../utils/types"

interface Props {
  key: number
  product: Product
  handleQuantity: (
    event: React.ChangeEvent<HTMLInputElement>,
    product: Product
  ) => void
  addCart: (product: Product) => void
}

function Card({ product, handleQuantity, addCart }: Props) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={product.image} alt="" />
      <h3>{product.title}</h3>

      <div className={styles["rating-container"]}>
        <div className={styles.rating}>
          <img className={styles.icon} src={star} alt="Rating" />
          <h3>{product.rating.rate}</h3>
        </div>

        <div className={styles.likes}>
          <img className={styles.icon} src={like} alt="Likes" />
          <h3>{product.rating.count}</h3>
        </div>

        <h3>£{product.price.toFixed(2)}</h3>
      </div>

      <div className={styles["button-container"]}>
        <input
          id="quantity-input"
          onChange={(event) => handleQuantity(event, product)}
          type="number"
          min={0}
          max={100}
          defaultValue={0}
          className={styles["input-number"]}
        />
        <button
          onClick={() => addCart(product)}
          className={styles["cart-button"]}
        >
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default Card
