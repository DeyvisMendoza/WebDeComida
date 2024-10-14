import { FaCalendarAlt } from "react-icons/fa"; // Importa correctamente el icono
import { Button, Input } from "@nextui-org/react";
import styles from "./CalendarBox.module.css"; // Importar el CSS module

export const CalendarBox = () => {
  return (
    <div className={styles.tableBook}>
      <div className={styles.bookDetails}>
        <div className={styles.iconContainer}>
          <FaCalendarAlt color="#2CD035" size={70} />
          <div className={styles.pes}>
            <p className={styles.p}>Book a table</p>
            <p>Powered by OpenTable</p>
          </div>
        </div>

        <div className={styles.dateDetails}>
          <Input size={"sm"} label="10/09/2024" />
          <Input size={"sm"} label="7:00 pm" />
          <Input size={"sm"} label="2 people" />
          <Button size="lg" style={{ background: "#2cd035", color: "white" }}>
            Find a table
          </Button>
        </div>
      </div>
    </div>
  );
};
