import { Footer } from "../../components/footer";
import NavBar from "../../components/navbar";
import { CapaSection } from "../../sections/capaSection";
import { QuemSomosSection } from "../../sections/quemSomosSection";
import { ServicosSection } from "../../sections/servicosSection";

export const Home = () => {
  return (
    <>
      <NavBar />
      <CapaSection></CapaSection>
      <ServicosSection />
      <QuemSomosSection />
      <Footer />
    </>
  );
};
