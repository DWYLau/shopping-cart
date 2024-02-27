import { useState } from "react"
import styles from "./Sidebar.module.css"

function Sidebar() {
  const [category, setCategory] = useState("")

  function handleCheck(event: React.ChangeEvent<HTMLInputElement>): void {
    setCategory(event.target.value.toLowerCase())
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
    </div>
  )
}

export default Sidebar
