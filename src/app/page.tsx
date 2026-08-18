import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ExperienceSection />
      <ContactSection />
      {/* Aquí iremos agregando las siguientes secciones: Servicios, Portafolio, etc. */}
    </div>
  );
}