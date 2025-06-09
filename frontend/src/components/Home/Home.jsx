import { ChevronRight, Globe, GraduationCap, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
// home components
import Accordeon from "./HomeComponents/Accordeon";
import Testimonials from "./HomeComponents/Testimonials";
import WhyHortensia from "./HomeComponents/WhyHortensia";
import Hero from "./HomeComponents/Hero";
const Home = () => {
  const { t } = useTranslation("Home");
  return (
    <div className="min-h-screen relative overflow-hidden mt-10">
      <Hero />
      <WhyHortensia />
      <Accordeon />
      <Testimonials />
    </div>
  );
};

export default Home;
