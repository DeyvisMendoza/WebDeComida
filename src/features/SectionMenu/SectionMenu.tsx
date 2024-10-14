import styles from "./SectionMenu.module.css"; // Importar el CSS module
import { useNavigate } from "react-router-dom";
import menuData from "../../pages/FullMenu/MenuData.json";
import { Button } from "@nextui-org/react";

export const SectionMenu = () => {
  const limit = 6; // Cambiar aquí para establecer el límite
  const navigate = useNavigate();

  const goToFullMenu = () => {
    navigate("/full-menu");
  };

  const limitedMenuItems = menuData.items.slice(0, limit);

  return (
    <div className={styles.sectionMenu}>
      <div className={styles.sectionMenuContent}>
        <div className={styles.sectionMenuHeader}>
          <h4 style={{ color: "#2cd035" }}>TASTY & CRUNCHY</h4>
          <h2 className={styles.sectionMenuTitle}>OUR MENU</h2>
          <h4 className={styles.sectionMenuDescription}>
            Our talented chef prepares the best jandns
          </h4>
        </div>
        <div className={styles.sectionMenuItems}>
          <div className={styles.sectionMenuGrid}>
            {limitedMenuItems.map((item, index) => (
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
      <div className={styles.sectionMenuButtonContainer}>
        <Button
          onClick={goToFullMenu}
          size="lg"
          style={{ color: "#2cd035" }}
          variant="bordered"
          color="success"
        >
          Full Menu
        </Button>
      </div>
    </div>
  );
};
