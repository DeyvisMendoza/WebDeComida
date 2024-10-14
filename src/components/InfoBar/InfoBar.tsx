import { Link } from "react-router-dom";
import styles from "./InfoBar.module.css"; // Importar el CSS module

export const InfoBar = () => {
  return (
    <div className={styles.section1}>
      <div>
        <p>
          <span>TODAY'S SPECIAL:</span> Dinner for two our
        </p>
      </div>
      <div>
        <Link to="/">FULL MENU</Link>
      </div>
    </div>
  );
};
