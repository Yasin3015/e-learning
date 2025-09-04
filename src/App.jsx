import { useCallback, useMemo } from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import useActiveSection from "./hooks/useActiveSection";
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import BannerSection from "./components/BannerSection";
import PricingSection from "./components/PricingSection";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
// import './app.css';

export default function App() {
  // Define your sections (ids must match the Section id props)
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

  // Smooth scroll to section (with slight offset handled by scroll-mt in Section)
  const handleLinkClick = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <main className="relative">
      <Navbar sections={sections} activeId={activeId} onLinkClick={handleLinkClick} />

      {/* spacer to account for fixed navbar height */}
      <div className="h-16" />

      <Hero />
      <FeaturesSection />
      <BannerSection />
      <PricingSection />
      <ContactUs />
      <Footer />
    </main>
  );
}
