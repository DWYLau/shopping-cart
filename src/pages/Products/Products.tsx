import { useEffect, useState, useRef, useCallback } from "react"
import { fetchData } from "../../utils/api"
import Sidebar from "../../components/Sidebar/Sidebar"
import Card from "../../components/Card/Card"
import styles from "./Products.module.css"
import { Product } from "../../utils/types"
import { useSearch } from "../../components/context/SearchContext"
import { useCart } from "../../components/context/CartContext"

function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [product, setProduct] = useState<Product | null>()
  const [item, setItem] = useState<Product | null>()
  const [errorID, setErrorID] = useState<Error | null>(null)
  const [loading, setLoading] = useState(true)
  const [shoppingCart, setShoppingCart] = useState<Product[]>([])
  const [searching, setSearching] = useState(false)
  const [categorized, setCategorized] = useState(false)
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([])
  const [categorizedProducts, setCategorizedProducts] = useState<Product[]>([])
  const [category, setCategory] = useState<string | null>("")
  const { searchValue } = useSearch()
  const { cart, setCart } = useCart()

  const categorizedProductsRef = useRef<Product[]>([])

  function handleQuantity(
    event: React.ChangeEvent<HTMLInputElement>,
    item: Product
  ): void {
    const value: number = parseInt(event.target.value, 10)
    if (value > 0) {
      const quantifiedProduct = { ...item, number: value }
      setProduct(quantifiedProduct)
    } else if (value === 0) {
      setProduct(null)
    }
  }

  function addCart(item: Product) {
    setItem(item)
    if (product && product.title !== item.title) {
      return
    } else if (product === null) {
      return
    } else if (product) {
      setShoppingCart((prevItems) => [...prevItems, product])
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

  const makeUniqueCart = useCallback(() => {
    if (item) {
      if (shoppingCart.some((product) => product.title === item.title)) {
        const productMap = shoppingCart.reduce((map, item) => {
          const existingProduct = map.get(item.id)
          if (existingProduct) {
            existingProduct.number += item.number
          } else {
            map.set(item.id, { ...item })
          }
          return map
        }, new Map())

        const uniqueCart = [...productMap.values()]
        setCart(uniqueCart)
      }
    }
  }, [shoppingCart, item, setCart])

  // useEffect hooks

  useEffect(() => {
    if (cart && cart.length !== 0) {
      setShoppingCart(cart)
    }
  }, [])

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
    makeUniqueCart()
  }, [makeUniqueCart])

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
