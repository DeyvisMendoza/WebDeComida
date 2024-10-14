import { useState, useEffect } from "react";
import menuData from "./MenuData.json";
import styles from "./FullMenu.module.css"; // Importar el CSS module
import { NavBar } from "../../components/NavBar/NavBar";

interface MenuItem {
  title: string;
  description: string;
  price: string;
}

export const FullMenu = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    // Cargamos los datos del json
    setMenuItems(menuData.items);
  }, []);

  return (
    <>
      <NavBar />
      <div className={styles.sectionMenu}>
        <div className={styles.sectionMenuContent}>
          <div className={styles.sectionMenuHeader}>
            <h4 style={{ color: "#2cd035" }}>TASTY & CRUNCHY</h4>
            <h2 className={styles.sectionMenuTitle}>OUR MENU</h2>
            <h4 className={styles.sectionMenuDescription}>
              Our talented chef prepares the best dishes
            </h4>
          </div>
          <div className={styles.sectionMenuItems}>
            <div className={styles.sectionMenuGrid}>
              {menuItems.map((item, index) => (
                <div key={index} className={styles.sectionMenuItem}>
                  <div className={styles.sectionMenuDetails}>
                    <span className={styles.sectionMenuItemTitle}>{item.title}</span>
                    <p className={styles.sectionMenuItemDescription}>
                      {item.description}
                    </p>
                  </div>
                  <span className={styles.sectionMenuItemPrice}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
