import styles from "./SectionBurger.module.css";
import hambur from "../../assets/11006664.png";
import hambur2 from "../../assets/11006660.png";
import hambur3 from "../../assets/11366200.png";
import hambur4 from "../../assets/11006666.png";

export const SectionBurger = () => {
  return (
    <div className={styles.opciones}>
      <div className={styles.mainContainer}>
        <div className={styles.titles}>
          <h4 style={{ color: "#2cd035" }}>TASTY & CRUNCHY</h4>
          <h2>Chose & Enjoy</h2>
          <h4>Inspirado por asdnaosdas y tambie por asjbdk</h4>
        </div>
        <div className={styles.containers}>
          <div className={styles.minContainer}>
            <img src={hambur} alt="" />
            <h3>adasdasd</h3>
            <p>adasdasdasdasbdhasbdhsbdh</p>
            <button className={styles.boton}>boton</button>
          </div>
          <div className={styles.minContainer}>
            <img src={hambur2} alt="" />
            <h3>adasdasd</h3>
            <p>adasdasdasdasbdhasbdhsbdh</p>
            <button className={styles.boton}>boton</button>
          </div>
          <div className={styles.minContainer}>
            <img src={hambur3} alt="" />
            <h3>adasdasd</h3>
            <p>adasdasdasdasbdhasbdhsbdh</p>
            <button className={styles.boton}>boton</button>
          </div>
          <div className={styles.minContainer}>
            <img src={hambur4} alt="" />
            <h3>adasdasd</h3>
            <p>adasdasdasdasbdhasbdhsbdh</p>
            <button className={styles.boton}>boton</button>
          </div>
        </div>
      </div>
    </div>
  );
};
