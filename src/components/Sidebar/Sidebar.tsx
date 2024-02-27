import { useState } from "react"
import styles from "./Sidebar.module.css"
import { useSearch } from "../context/SearchContext"

interface Props {
  getCategory: (value: string) => void
}

function Sidebar({ getCategory }: Props) {
  const [category, setCategory] = useState("")
  const { setSearchValue } = useSearch()

  function handleCheck(event: React.ChangeEvent<HTMLInputElement>): void {
    setCategory(event.target.value.toLowerCase())
    getCategory(event.target.value.toLowerCase())
    setSearchValue("")
  }

  function handleReset() {
    setCategory("")
    getCategory("")
    setSearchValue("")
  }

  return (
    <div className={styles["flex-container"]}>
      <h2>Category</h2>
      <label className={styles.label}>
        <input
          type='checkbox'
          name='mens-clothes'
          value="Men's Clothing"
          onChange={handleCheck}
          checked={category === "men's clothing"}
        />
        Men's Clothing
      </label>
      <label className={styles.label}>
        <input
          type='checkbox'
          name='women-clothes'
          value="Women's Clothing"
          onChange={handleCheck}
          checked={category === "women's clothing"}
        />
        Women's Clothing
      </label>
      <label className={styles.label}>
        <input
          type='checkbox'
          name='jewelery'
          value='Jewelery'
          onChange={handleCheck}
          checked={category === "jewelery"}
        />
        Jewelery
      </label>
      <label className={styles.label}>
        <input
          type='checkbox'
          name='electronics'
          value='Electronics'
          onChange={handleCheck}
          checked={category === "electronics"}
        />
        Electronics
      </label>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Sidebar
