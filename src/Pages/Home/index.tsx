import NavBar from "../../components/NavBar";
import { CapaSection } from "../../sections/CapaSection";
import { ServicosSection } from "../../sections/ServicosSection";
import { QuemSomosSection } from "../../sections/QuemSomosSection";
import { PortifolioSection } from "../../sections/PortifolioSection";
import { Footer } from "../../components/Footer";
import { Onda } from "./styles";

export const Home = () => {
  return (
    <div>
      <NavBar isActive={true} />
      <CapaSection />
      <ServicosSection />
      <QuemSomosSection />
      <PortifolioSection />
      <Footer />
    </div>
  );
};
