import styles from "./Sidebar.module.css"

function Sidebar() {
  return (
    <div className={styles["flex-container"]}>
      <h2>Category</h2>
      <label className={styles.label}>
        <input type='checkbox' name='checkbox' />
        Checkbox
      </label>
    </div>
  )
}

export default Sidebar
