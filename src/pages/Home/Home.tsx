import styles from "./Home.module.css"
import Zoolander from "../../assets/images/zoolander.webp"
import model1 from "../../assets/images/model1.jpg"
import model2 from "../../assets/images/model2.jpg"
import model3 from "../../assets/images/model3.jpg"
import model4 from "../../assets/images/model4.jpg"
import model5 from "../../assets/images/model5.jpg"
import model6 from "../../assets/images/model6.jpg"
import { Link } from "react-router-dom"

function Home() {
  return (
    <section>
      <div className={styles.banner}>Up to 50% discount on selected items!</div>
      <div className={styles["image-container"]}>
        <img
          className={styles.image}
          src={Zoolander}
          alt='Model turning around'
        />
      </div>
      <div className={styles["model-container"]}>
        <div className={styles.card}>
          <img src={model1} alt='Model' />
          <h2>Latest Trends</h2>
        </div>
        <div className={styles.card}>
          <img src={model2} alt='Model' />
          <h2>Modern Looks</h2>
        </div>
        <div className={styles.card}>
          <img src={model3} alt='Model' />
          <h2>Stylish Vogue</h2>
        </div>
        <div className={styles.card}>
          <img src={model4} alt='Model' />
          <h2>Formal Fashion</h2>
        </div>
      </div>
      <div className={styles["second-banner"]}>Special Spring Sale!</div>
      <div className={styles["flex-container"]}>
        <div className={styles["model-container2"]}>
          <img src={model5} alt='Model' />
          <h2>Classical</h2>
          <Link to='products'>
            <button>Products</button>
          </Link>
        </div>
        <div className={styles["model-container2"]}>
          <img src={model6} alt='Model' />
          <h2>Contemporary</h2>
          <Link to='products'>
            <button>Products</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home
