import { Button } from "@nextui-org/react";
import imgChifa from "./../../assets/11366200.png";
import styles from "./SectionFood.module.css"; // Importamos el CSS como módulo

export const SectionFood = () => {
  return (
    <div className={styles.foodSection}>
      <div className={styles.foodImage}>
        <img src={imgChifa} alt="Delicious Chifa dish" />
      </div>
      <div className={styles.foodContent}>
        <h4 className={styles.offerTitle}>WE OFFER</h4>
        <h2 className={styles.deliveryTitle}>
          <span>Free</span> Delivery!
        </h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
          maiores adipisci quidem, illo obcaecati, voluptatum id beatae quasi ad
          ducimus repudiandae, veritatis dicta reprehenderit neque quaerat
          deleniti provident? Voluptate, ea?
        </p>
        <div style={{ marginTop: "15px" }}>
          <Button size="lg" style={{ background: "#2cd035", color: "white" }}>
            Order Now: 0800-555-1234
          </Button>
        </div>
      </div>
    </div>
  );
};
