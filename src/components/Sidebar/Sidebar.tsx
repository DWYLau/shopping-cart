import styles from "./Sidebar.module.css"

function Sidebar() {
  return (
    <div className={styles["flex-container"]}>
      <h2>Category</h2>
      <label className={styles.label}>
        <input type='checkbox' name='mens-clothes' />
        Men's Clothing
      </label>
      <label className={styles.label}>
        <input type='checkbox' name='women-clothes' />
        Women's Clothing
      </label>
      <label className={styles.label}>
        <input type='checkbox' name='jewelry' />
        Jewelry
      </label>
      <label className={styles.label}>
        <input type='checkbox' name='electronics' />
        Electronics
      </label>
    </div>
  )
}

export default Sidebar
