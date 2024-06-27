import NavBar from "../../components/navbar";
import { CapaSection } from "../../sections/capaSection";
import { ServicosSection } from "../../sections/servicosSection";

export const Home = () => {
  return (
    <>
      <NavBar />
      <CapaSection></CapaSection>
      <p>OLA MUNDO</p>
      <ServicosSection />
    </>
  );
};
