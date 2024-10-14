import styles from "./SectionLogos.module.css"; // Importamos el CSS como módulo
import { Carousel } from "@mantine/carousel";

export const SectionLogos = () => {
  return (
    <div className={styles.sectionLogos}>
      <div className={styles.sectionLogos__container}>
        <div className={styles.sectionLogos__header}>
          <h4 style={{ color: "#2cd035" }}>TASTY & CRUNCHY</h4>
          <h2 className={styles.sectionLogos__title}>Our awards</h2>
          <h4 className={styles.sectionLogos__description}>
            Capitalize on Lorem ipsum dolor, sit amet consectetur adipisicing
            elit
          </h4>
        </div>
        <Carousel
          withIndicators
          height={200}
          slideSize={{ base: "100%", sm: "50%", md: "18%" }}
          slideGap={{ base: 0, sm: 0, md: 8 }} // Cambia el espaciado entre las diapositivas
          loop
          align="start"
        >
          <Carousel.Slide>
            <img
              className={styles.sectionLogos__image}
              src="https://blog.hubspot.es/hs-fs/hubfs/ES%20Blog%20images/Los%2015%20logos%20m%C3%A1s%20creativos%20e%20inspiradores%20del%20mundo/logo_famoso_starbucks.jpg?width=650&name=logo_famoso_starbucks.jpg"
              alt="Award Logo"
            />
          </Carousel.Slide>
          {/* Repetir el mismo Carousel.Slide para los demás logos */}
          <Carousel.Slide>
            <img
              className={styles.sectionLogos__image}
              src="https://blog.hubspot.es/hs-fs/hubfs/ES%20Blog%20images/Los%2015%20logos%20m%C3%A1s%20creativos%20e%20inspiradores%20del%20mundo/logo_famoso_starbucks.jpg?width=650&name=logo_famoso_starbucks.jpg"
              alt="Award Logo"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              className={styles.sectionLogos__image}
              src="https://blog.hubspot.es/hs-fs/hubfs/ES%20Blog%20images/Los%2015%20logos%20m%C3%A1s%20creativos%20e%20inspiradores%20del%20mundo/logo_famoso_starbucks.jpg?width=650&name=logo_famoso_starbucks.jpg"
              alt="Award Logo"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              className={styles.sectionLogos__image}
              src="https://blog.hubspot.es/hs-fs/hubfs/ES%20Blog%20images/Los%2015%20logos%20m%C3%A1s%20creativos%20e%20inspiradores%20del%20mundo/logo_famoso_starbucks.jpg?width=650&name=logo_famoso_starbucks.jpg"
              alt="Award Logo"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              className={styles.sectionLogos__image}
              src="https://blog.hubspot.es/hs-fs/hubfs/ES%20Blog%20images/Los%2015%20logos%20m%C3%A1s%20creativos%20e%20inspiradores%20del%20mundo/logo_famoso_starbucks.jpg?width=650&name=logo_famoso_starbucks.jpg"
              alt="Award Logo"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              className={styles.sectionLogos__image}
              src="https://blog.hubspot.es/hs-fs/hubfs/ES%20Blog%20images/Los%2015%20logos%20m%C3%A1s%20creativos%20e%20inspiradores%20del%20mundo/logo_famoso_starbucks.jpg?width=650&name=logo_famoso_starbucks.jpg"
              alt="Award Logo"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              className={styles.sectionLogos__image}
              src="https://blog.hubspot.es/hs-fs/hubfs/ES%20Blog%20images/Los%2015%20logos%20m%C3%A1s%20creativos%20e%20inspiradores%20del%20mundo/logo_famoso_starbucks.jpg?width=650&name=logo_famoso_starbucks.jpg"
              alt="Award Logo"
            />
          </Carousel.Slide>
          {/* Repite el código de la imagen para los demás slides como en tu código original */}
        </Carousel>
      </div>
    </div>
  );
};
