export const ASSETS = {
  heroBg: "https://images.pexels.com/photos/1440504/pexels-photo-1440504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  heroBgLarge: "https://images.pexels.com/photos/1440504/pexels-photo-1440504.jpeg?auto=compress&cs=tinysrgb&w=1600",
  servicePrint: "https://images.pexels.com/photos/19837529/pexels-photo-19837529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  servicePaper: "https://images.pexels.com/photos/27967289/pexels-photo-27967289.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  servicePackaging: "https://images.pexels.com/photos/39351270/pexels-photo-39351270.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  serviceColor: "https://images.pexels.com/photos/9550363/pexels-photo-9550363.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  portfolio1: "https://images.pexels.com/photos/6648417/pexels-photo-6648417.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  portfolio2: "https://images.pexels.com/photos/4271688/pexels-photo-4271688.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  portfolio3: "https://images.pexels.com/photos/8066785/pexels-photo-8066785.png?auto=compress&cs=tinysrgb&h=650&w=940",
  portfolio4: "https://images.pexels.com/photos/4464881/pexels-photo-4464881.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  portfolio5: "https://images.pexels.com/photos/35488301/pexels-photo-35488301.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  portfolio6: "https://images.pexels.com/photos/8467583/pexels-photo-8467583.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  aboutImg: "https://images.pexels.com/photos/7598009/pexels-photo-7598009.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  whyChooseUsImg: "https://images.pexels.com/photos/8546590/pexels-photo-8546590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  contactBg: "https://images.pexels.com/photos/19843566/pexels-photo-19843566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  teamImg: "https://images.pexels.com/photos/7495291/pexels-photo-7495291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  studioImg: "https://images.pexels.com/photos/6621009/pexels-photo-6621009.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
};

export const SERVICES = [
  {
    title: "Print Solutions",
    description: "Commercial printing for brands, marketing, and business communication.",
    image: ASSETS.servicePrint,
    radius: "rounded-[20px]",
    overlay: "bg-blend-screen bg-[linear-gradient(138deg,rgba(134,217,240,0.23)_0%,rgba(192,229,116,0.3)_100%)]",
  },
  {
    title: "Paper Distribution",
    description: "Premium paper supply for commercial, industrial, and retail needs.",
    image: ASSETS.servicePaper,
    radius: "rounded-[30px]",
    overlay: "bg-blend-multiply bg-[linear-gradient(0deg,rgba(0,0,0,0.64)_0%,rgba(165,165,165,0.64)_100%)]",
  },
  {
    title: "Packaging Solutions",
    description: "BOPP tapes, labels, adhesive products, and packaging materials.",
    image: ASSETS.servicePackaging,
    radius: "rounded-[30px]",
    overlay: "bg-blend-screen bg-[linear-gradient(139deg,rgba(134,217,240,0.3)_0%,rgba(192,229,116,0.3)_100%)]",
  },
  {
    title: "Color Printing",
    description: "High-quality multi-color printing with precision and consistency.",
    image: ASSETS.serviceColor,
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
  { value: "1600", label: "Satisfied Clients" },
  { value: "15", label: "Awards Winning" },
  { value: "70", label: "Team Members" },
  { value: "900", label: "Successful Projects" },
];
