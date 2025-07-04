import Blog from "../components/sections/Blog";
import CareerOffers from "../components/sections/CareerOffers";
import Footer from "../components/sections/Footer";
import HeroSection from "../components/sections/HeroSection";
import ImpactSection from "../components/sections/ImpactSection";
import InfoBanner from "../components/sections/InfoBanner";
import OurPartner from "../components/sections/OurPartner";
import PortalsSection from "../components/sections/PortalSection";
import TestimonialSection from "../components/sections/Testimonal";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PortalsSection />
      <CareerOffers />
      <ImpactSection />
      <Blog />
      <InfoBanner />
      <TestimonialSection />
      <OurPartner />
      <Footer />
    </>
  );
};

export default Home;
