import styles from "./SectionTitle.module.css"; // Importar el CSS module
import { CalendarBox } from "../../components/CalendarBox/CalendarBox";
import { Button } from "@nextui-org/react";

export const SectionTitle = () => {
  return (
    <div className={styles.sectionTitleContainer}>
      <div className={styles.titleContent}>
        <p className={styles.restaurantName}>VEGAN TAVERNA</p>
        <h2>
          <span className={styles.highlightText}>Go</span> Green
        </h2>
        <p className={styles.introText}>
          Fresh, organic ingredients. Carefully prepared. <br />
          Eat green for a reason
        </p>
        <div className={styles.buttonContainer}>
          <Button size="lg" style={{ background: "#2cd035", color: "white" }}>
            Get started
          </Button>
          <Button size="lg" style={{ background: "#2cd035", color: "white" }}>
            Our Menu
          </Button>
        </div>
      </div>
      <div className={styles.calendarSection}>
        <CalendarBox />
      </div>
    </div>
  );
};
