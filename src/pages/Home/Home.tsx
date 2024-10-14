import { Footer } from "../../components/Footer/Footer";
import { InfoBar } from "../../components/InfoBar/InfoBar";
import { NavBar } from "../../components/NavBar/NavBar";
import { SectionBurger } from "../../features/SectionBurguer/SectionBurger";
import { SectionFood } from "../../features/SectionFood/SectionFood";
import { SectionLogos } from "../../features/SectionLogos/SectionLogos";
import { SectionMap } from "../../features/SectionMaps/SectionMap";
import { SectionMenu } from "../../features/SectionMenu/SectionMenu";
import { SectionTitle } from "../../features/SectionTitle/SectionTitle";
import "./home.css";

export const Home = () =>
  // { children }: { children: React.ReactNode }
  {
    return (
      <>
        <div className="home-container">
          <div className="home">
            <NavBar />
            <SectionTitle />
          </div>
          <InfoBar />
          <SectionFood />
          <SectionBurger />
          <SectionMenu />
          <SectionLogos />
          <SectionMap />
          <Footer />
        </div>
      </>
    );
  };
