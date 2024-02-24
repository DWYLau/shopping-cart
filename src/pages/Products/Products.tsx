import { useEffect, useState } from "react"
import { fetchData } from "../../utils/api"
import Sidebar from "../../components/Sidebar/Sidebar"
import styles from "./Products.module.css"
import star from "../../assets/icons/star.png"
import like from "../../assets/icons/like.png"

function Products() {
  const [products, setProducts] = useState<any>([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    {
      fetchData()
        .then(data => {
          setProducts(data)
          console.log(data)
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false))
    }
  }, [])

  if (loading) return <div>Loading</div>

  if (!loading && products)
    return (
      <section className={styles["flex-container"]}>
        <Sidebar />
        <div className={styles["grid-container"]}>
          {products.map(product => {
            return (
              <div className={styles.card}>
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
                  <button>Add To Cart</button>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    )
}

export default Products
