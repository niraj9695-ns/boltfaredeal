import { useEffect, useState } from "react";
import { ASSETS } from "../lib/assets";
import { HomeHeroSection } from "../components/home/HomeHeroSection";
import { HomeAboutSection } from "../components/home/HomeAboutSection";
import { HomeServicesSection } from "../components/home/HomeServicesSection";
import { HomeWhyChooseUsSection } from "../components/home/HomeWhyChooseUsSection";
import { HomeClientsSection } from "../components/home/HomeClientsSection";
import { HomePortfolioSection } from "../components/home/HomePortfolioSection";

export const Home = () => {
  const [isLightTheme, setIsLightTheme] = useState(() => document.documentElement.getAttribute("data-theme") === "light");
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  useEffect(() => {
    const syncTheme = () => {
      setIsLightTheme(document.documentElement.getAttribute("data-theme") === "light");
    };

    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  const heroImage = isLightTheme ? ASSETS.heroBgLight : ASSETS.heroBgLarge;

  return (
    <>
      <HomeHeroSection heroImage={heroImage} />
      <HomeAboutSection isLightTheme={isLightTheme} />
      <HomeServicesSection
        activeServiceIndex={activeServiceIndex}
        setActiveServiceIndex={setActiveServiceIndex}
      />
      <HomeWhyChooseUsSection />
      <HomeClientsSection />
      <HomePortfolioSection />
    </>
  );
};
