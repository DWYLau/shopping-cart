import { useEffect, useState } from "react"
import { fetchData } from "../../utils/api"
import Sidebar from "../../components/Sidebar/Sidebar"
import styles from "./Products.module.css"

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
                <div>
                  <h3>{product.rating.rate}</h3>
                  <h3>{product.rating.count}</h3>
                </div>

                <h3>{product.price}</h3>
              </div>
            )
          })}
        </div>
      </section>
    )
}

export default Products
