import styles from "./SectionMap.module.css"; // Importar el CSS module
import { LuClock8 } from "react-icons/lu";
import { SiGooglemaps } from "react-icons/si";

export const SectionMap = () => {
  return (
    <div className={styles.sectionMap}>
      <div className={styles.sectionMapInfo}>
        <div className={styles.sectionMapSubtitle}>
          <h3>CALL US</h3>
        </div>
        <p className={styles.sectionMapPhone}>+1 2024-365-66</p>
        <div className={styles.sectionMapDetails}>
          <div className={styles.sectionMapIconItem}>
            <LuClock8 size={60} color="#2cd035" />
            <div className={styles.sectionMapText}>
              <p>mon-thu: 11.00 – 23.00</p>
              <p>sat: 12.00 – 23.00</p>
              <p>sun: 12.00 – 21.00</p>
            </div>
          </div>
          <div className={styles.sectionMapIconItem}>
            <SiGooglemaps size={60} color="#2cd035" />
            <div className={styles.sectionMapText}>
              <p>60 East 65th Street</p>
              <p>New York City</p>
              <p>NY 10065</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sectionMapMap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49306.54286232092!2d-77.06337019936741!3d-12.01562135436466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce300d8854e1%3A0x6a1b58f36fcc79a6!2sPlaza%20Norte!5e0!3m2!1ses-419!2spe!4v1727211708976!5m2!1ses-419!2spe"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
