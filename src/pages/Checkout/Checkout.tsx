import styles from "./Checkout.module.css"

function Checkout() {
  return (
    <div className={styles["notice-container"]}>
      <h1 className={styles.title}>Thank you for checking out.</h1>
      <h2 className={styles.subtitle}>
        Thank you for checking out my Shopping Cart application!
      </h2>
      <h2 className={styles.subtitle}>
        If you notice any bugs or have any suggestions, please email me at
        dereklau15@gmail.com!
      </h2>
    </div>
  )
}

export default Checkout
