import { useCallback, useEffect, useMemo } from "react";
import Navbar from "./components/Navbar";
import useActiveSection from "./hooks/useActiveSection";
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import BannerSection from "./components/BannerSection";
import PricingSection from "./components/PricingSection";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import SuccessPopup from "./components/SuccessPopup";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);
  const sections = useMemo(
    () => [
      { id: "home", label: "Home", title: "Learn Future Skills Anytime, Anywhere" },
      { id: "features", label: "Features", title: "Why Choose EduPro" },
      { id: "pricing", label: "Pricing", title: "Simple, Transparent Pricing" },
      { id: "contact", label: "Contact", title: "Have Questions? Get in Touch." },
    ],
    []
  );

  const activeId = useActiveSection(sections.map((s) => s.id));
  const handleLinkClick = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <main className="relative">
      <Navbar sections={sections} activeId={activeId} onLinkClick={handleLinkClick} />
      <Hero />
      <FeaturesSection />
      <BannerSection />
      <PricingSection />
      <ContactUs />
      <Footer />
    </main>
  );
}
