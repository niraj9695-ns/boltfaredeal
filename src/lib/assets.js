import heroJewelry from "../assets/images/herohome.png";
import heroLight from "../assets/images/herolight.png";
import ownerImage from "../assets/images/Owner image.png";
import whyChooseUsImage from "../assets/images/WhyChooseUs.png";
import portfolioImage1 from "../assets/images/PortFolioImages/1.png";
import portfolioImage4 from "../assets/images/PortFolioImages/2.png";
import portfolioImage3 from "../assets/images/PortFolioImages/3.png";
import portfolioImage2 from "../assets/images/PortFolioImages/4.png";
import serviceBopp from "../assets/images/Services/Bopp.png";
import serviceCorrugated from "../assets/images/Services/Corrugated.png";
import serviceFlexo from "../assets/images/Services/Flexo.png";
import serviceLabels from "../assets/images/Services/Labels.jpg";
import serviceOffset from "../assets/images/Services/OffSet.png";
import serviceScreen from "../assets/images/Services/copier.png";

export const ASSETS = {
  heroBg: heroJewelry,
  heroBgLarge: heroJewelry,
  heroBgLight: heroLight,
  servicePrint: serviceOffset,
  servicePaper: serviceScreen,
  servicePackaging: serviceCorrugated,
  serviceColor: serviceFlexo,
  serviceBopp: serviceBopp,
  serviceLabels: serviceLabels,
  portfolio1: portfolioImage1,
  portfolio2: portfolioImage2,
  portfolio3: portfolioImage3,
  portfolio4: portfolioImage4,
  portfolio5: portfolioImage3,
  portfolio6: portfolioImage4,
  aboutImg: ownerImage,
  whyChooseUsImg: whyChooseUsImage,
  contactBg: "https://images.pexels.com/photos/19843566/pexels-photo-19843566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  teamImg: "https://images.pexels.com/photos/7495291/pexels-photo-7495291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  studioImg: "https://images.pexels.com/photos/6621009/pexels-photo-6621009.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
};
export const SERVICES = [
  {
    title: "Offset Printing",
    description: "High-quality offset printing solutions for brochures, books, labels, cartons, and business stationery.",
    image: ASSETS.servicePrint,
    radius: "rounded-[20px]",
    overlay: "bg-blend-screen bg-[linear-gradient(138deg,rgba(134,217,240,0.23)_0%,rgba(192,229,116,0.3)_100%)]",
  },
  {
    title: "Flexo Printing",
    description: "Flexible printing solutions for labels, tags, packaging, and shrink sleeves with consistent quality.",
    image: ASSETS.serviceColor,
    radius: "rounded-[30px]",
    overlay: "bg-blend-screen bg-[linear-gradient(138deg,rgba(134,217,240,0.23)_0%,rgba(192,229,116,0.3)_100%)]",
  },
  {
    title: "Copier Paper",
    description: "Importer, distributor and dealer of copier, coated and sheet form papers.",
    image: ASSETS.servicePaper,
    radius: "rounded-[30px]",
    overlay: "bg-blend-screen bg-[linear-gradient(138deg,rgba(134,217,240,0.23)_0%,rgba(192,229,116,0.3)_100%)]",
  },
  {
    title: "Corrugation",
    description: "High-quality corrugated packaging solutions from standard transit boxes to bespoke packaging.",
    image: ASSETS.servicePackaging,
    radius: "rounded-[30px]",
    overlay: "bg-blend-screen bg-[linear-gradient(139deg,rgba(134,217,240,0.3)_0%,rgba(192,229,116,0.3)_100%)]",
  },
  {
    title: "Others",
    description: "BOPP tapes, screen printing, labels, stickers, and specialized printing solutions.",
    image: ASSETS.serviceBopp,
    radius: "rounded-[30px]",
    overlay: "bg-blend-screen bg-[linear-gradient(138deg,rgba(134,217,240,0.23)_0%,rgba(192,229,116,0.3)_100%)]",
  },
];

export const PORTFOLIO_CASES = [
  { title: "AVY DIARY Ghee Corrugated Carton", image: ASSETS.portfolio1 },
  { title: "Premium Gift Box Collection", image: ASSETS.portfolio2 },
  { title: "Minimalist Packaging Design", image: ASSETS.portfolio3 },
  { title: "Luxury Brand Packaging", image: ASSETS.portfolio6 },
  { title: "Holiday Gift Wrapping Series", image: ASSETS.portfolio5 },
  { title: "Floral Gift Box Set", image: ASSETS.portfolio4 },
];

export const STATS = [
  { value: "1600+", label: "Satisfied Clients" },
  { value: "15+", label: "Awards Winning" },
  { value: "70+", label: "Team Members" },
  { value: "900+", label: "Successful Projects" },
];
