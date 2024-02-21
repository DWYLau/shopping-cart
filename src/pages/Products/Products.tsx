import { useEffect, useState } from "react"
import { fetchData } from "../../utils/api"
import Sidebar from "../../components/Sidebar/Sidebar"

function Products() {
  const [products, setProducts] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
      .then(data => {
        setProducts(data)
        console.log(data)
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading</div>

  if (!loading)
    return (
      <section>
        <Sidebar />
      </section>
    )
}

export default Products
