import { useEffect, useState } from "react"
import { fetchData } from "../../utils/api"
import Sidebar from "../../components/Sidebar/Sidebar"
import styles from "./Products.module.css"
import star from "../../assets/icons/star.png"
import like from "../../assets/icons/like.png"
import { Product } from "../../utils/types"
import { useSearch } from "../../components/context/SearchContext"

function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(0)
  const [cart, setCart] = useState<Product[]>([])
  const [searching, setSearching] = useState(false)
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([])
  const { searchValue } = useSearch()

  function handleQuantity(event: React.ChangeEvent<HTMLInputElement>): void {
    const newValue: number = parseInt(event.target.value, 10)
    setQuantity(newValue)
  }

  function addCart(product: Product) {
    if (quantity > 0) {
      product.number = quantity
      product.total = product.number * product.price
      setCart(prevProducts => [...prevProducts, product])
      console.log(cart)
    } else {
      return
    }
  }

  useEffect(() => {
    function handleSearch() {
      if (searchValue) {
        const filteredProducts = products.filter(product =>
          product.title.toLowerCase().startsWith(searchValue.toLowerCase())
        )
        setSearchedProducts(filteredProducts)
      }
    }

    if (searching === false) {
      fetchData()
        .then(data => {
          setProducts(data)
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false))
    }
    if (searchValue != "") {
      setSearching(true)
      handleSearch()
    } else {
      setSearching(false)
    }
  }, [error, cart, searching, searchValue, products])

  if (loading) return <div>Loading</div>

  if (searching) {
    return (
      <section className={styles["flex-container"]}>
        <Sidebar />
        <div className={styles["grid-container"]}>
          {searchedProducts.map(product => {
            return (
              <div key={product.id} className={styles.card}>
                <img className={styles.image} src={product.image} alt='' />
                <h3>{product.title}</h3>

                <div className={styles["rating-container"]}>
                  <div className={styles.rating}>
                    <img className={styles.icon} src={star} alt='Rating' />
                    <h3>{product.rating.rate}</h3>
                  </div>

                  <div className={styles.likes}>
                    <img className={styles.icon} src={like} alt='Likes' />
                    <h3>{product.rating.count}</h3>
                  </div>

                  <h3>£{product.price}</h3>
                </div>

                <div className={styles["button-container"]}>
                  <input
                    onChange={handleQuantity}
                    type='number'
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
          })}
        </div>
      </section>
    )
  }

  if (!loading && products && !searching)
    return (
      <section className={styles["flex-container"]}>
        <Sidebar />
        <div className={styles["grid-container"]}>
          {products.map(product => {
            return (
              <div key={product.id} className={styles.card}>
                <img className={styles.image} src={product.image} alt='' />
                <h3>{product.title}</h3>

                <div className={styles["rating-container"]}>
                  <div className={styles.rating}>
                    <img className={styles.icon} src={star} alt='Rating' />
                    <h3>{product.rating.rate}</h3>
                  </div>

                  <div className={styles.likes}>
                    <img className={styles.icon} src={like} alt='Likes' />
                    <h3>{product.rating.count}</h3>
                  </div>

                  <h3>£{product.price}</h3>
                </div>

                <div className={styles["button-container"]}>
                  <input
                    onChange={handleQuantity}
                    type='number'
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
          })}
        </div>
      </section>
    )
}

export default Products