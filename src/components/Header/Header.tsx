import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import Search from "../../assets/icons/search.svg"
import Shopping from "../../assets/icons/shopping-bag.svg"
import { useSearch } from "../context/SearchContext"

function Header() {
  const { searchValue, setSearchValue } = useSearch()

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>): void {
    setSearchValue(event.target.value)
  }

  return (
    <>
      <header className={styles.header}>
        <Link className={styles.logo} to={"/"}>
          SHOPPIT
        </Link>
        <div className={styles["link-container"]}>
          <Link className={styles.link} to='/'>
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
            value={searchValue ?? ""}
            onChange={handleSearch}
          />
          <img className={styles["search-icon"]} src={Search} />
        </div>
        <Link to='cart'>
          <img
            className={styles["shopping-icon"]}
            src={Shopping}
            alt='Shopping Bag'
          />
        </Link>
      </header>
      <header className={styles["second-header"]}>
        <div className={styles.banner}>50% Global Discount</div>
        <div className={styles.banner}>Free Worldwide Delivery</div>
      </header>
    </>
  )
}

export default Header