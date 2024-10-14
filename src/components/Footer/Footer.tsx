import { Link } from "react-router-dom";
import styles from "./Footer.module.css"; // Importar el CSS module

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerText}>
        <h4>Copyright Bold Themes 2024</h4>
      </div>
      <div className={styles.footerLinks}>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">PAGES</Link>
          </li>
          <li>
            <Link to="/contact">OUR OFFER</Link>
          </li>
          <li>
            <Link to="/galleries">GALLERIES</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
