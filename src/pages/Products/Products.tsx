import { useEffect, useState, useRef, useCallback } from "react"
import { fetchData } from "../../utils/api"
import Sidebar from "../../components/Sidebar/Sidebar"
import Card from "../../components/Card/Card"
import styles from "./Products.module.css"
import { Product } from "../../utils/types"
import { useSearch } from "../../components/context/SearchContext"

function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [errorID, setErrorID] = useState<Error | null>(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(0)
  const [cart, setCart] = useState<Product[]>([])
  const [searching, setSearching] = useState(false)
  const [categorized, setCategorized] = useState(false)
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([])
  const [categorizedProducts, setCategorizedProducts] = useState<Product[]>([])
  const [category, setCategory] = useState<string | null>("")
  const { searchValue } = useSearch()

  const categorizedProductsRef = useRef<Product[]>([])

  function handleQuantity(event: React.ChangeEvent<HTMLInputElement>): void {
    const newValue: number = parseInt(event.target.value, 10)
    setQuantity(newValue)
  }

  function addCart(product: Product) {
    if (quantity > 0) {
      product.number = quantity
      product.total = product.number * product.price
      setCart((prevProducts) => [...prevProducts, product])
      console.log(cart)
    } else {
      return
    }
  }

  function getCategory(value: string) {
    setCategory(value)
  }

  // callbacks for useEffect

  const fetchProducts = useCallback(async () => {
    try {
      if (searching === false) {
        const data = await fetchData()
        setProducts(data)
        console.log(data)
      }
    } catch (error) {
      setErrorID(error as Error)
      console.log(errorID)
    } finally {
      setLoading(false)
    }
  }, [searching, errorID])

  const handleSearch = useCallback(() => {
    if (searchValue && !categorized) {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().startsWith(searchValue.toLowerCase())
      )
      console.log(filteredProducts)
      setSearchedProducts(filteredProducts)
    } else if (searchValue && categorized) {
      const filteredProducts = categorizedProductsRef.current.filter(
        (product) =>
          product.title.toLowerCase().startsWith(searchValue.toLowerCase())
      )
      setSearchedProducts(filteredProducts)
    }
  }, [searchValue, categorized, products])

  const handleCategory = useCallback(() => {
    if (categorized) {
      const filteredProducts = products.filter(
        (product) => product.category === category
      )
      categorizedProductsRef.current = filteredProducts
      setCategorizedProducts(filteredProducts)
      setCategorized(true)
    } else {
      categorizedProductsRef.current = []
      setCategorizedProducts([])
      setCategorized(false)
    }
  }, [categorized, products, category])

  // useEffect hook

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  useEffect(() => {
    handleSearch()
  }, [handleSearch])

  useEffect(() => {
    handleCategory()
  }, [handleCategory])

  useEffect(() => {
    if (searchValue !== "") {
      setSearching(true)
    } else {
      setSearching(false)
    }
  }, [searchValue])

  useEffect(() => {
    if (category !== "") {
      setCategorized(true)
    } else {
      setCategorized(false)
    }
  }, [category])

  if (loading) return <div>Loading</div>

  if (searching || categorized) {
    return (
      <section className={styles["flex-container"]}>
        <Sidebar getCategory={getCategory} />
        <div className={styles["grid-container"]}>
          {searching
            ? searchedProducts.map((product) => (
                <Card
                  key={product.id}
                  product={product}
                  handleQuantity={handleQuantity}
                  addCart={addCart}
                />
              ))
            : categorizedProducts.map((product) => (
                <Card
                  key={product.id}
                  product={product}
                  handleQuantity={handleQuantity}
                  addCart={addCart}
                />
              ))}
        </div>
      </section>
    )
  }

  if (!loading && products && !searching && !categorized)
    return (
      <section className={styles["flex-container"]}>
        <Sidebar getCategory={getCategory} />
        <div className={styles["grid-container"]}>
          {products.map((product) => {
            return (
              <Card
                key={product.id}
                product={product}
                handleQuantity={handleQuantity}
                addCart={addCart}
              />
            )
          })}
        </div>
      </section>
    )
}

export default Products
