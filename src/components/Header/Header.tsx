import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import Search from "../../assets/icons/search.svg"
import Shopping from "../../assets/icons/shopping-bag.svg"

function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>SHOPPIT</h1>
        <div className={styles["link-container"]}>
          <Link className={styles.link} to='home'>
            Home
          </Link>
          <Link className={styles.link} to='products'>
            Products
          </Link>
        </div>
        <div className={styles["search-field"]}>
          <input
            className={styles.input}
            type='search'
            placeholder='Search for items'
          />
          <img className={styles["search-icon"]} src={Search} alt='Search' />
        </div>
        <img
          className={styles["shopping-icon"]}
          src={Shopping}
          alt='Shopping Bag'
        />
      </header>
      <header className={styles["second-header"]}>
        <div className={styles.banner}>50% Global Discount</div>
        <div className={styles.banner}>Free Worldwide Delivery</div>
      </header>
    </>
  )
}

export default Header
