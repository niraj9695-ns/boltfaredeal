import { ArrowUpRightIcon, CheckCircleIcon,ChevronDownIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { GradientButton } from "../components/shared/GradientButton";
import { SectionLabel } from "../components/shared/SectionLabel";
import { ASSETS, SERVICES } from "../lib/assets";

const serviceDetails = [
  {
    title: "Print Solutions",
    description:
      "Commercial printing for brands, marketing, and business communication. We deliver brochures, catalogues, company profiles, and coffee-table books with precision.",
    features: [
      "Brochures & Catalogues",
      "Company Profiles",
      "Coffee-table Books",
      "Calendars",
    ],
  },
  {
    title: "Paper Distribution",
    description:
      "Premium paper supply for commercial, industrial, and retail needs. We distribute a wide range of paper grades to suit every printing requirement.",
    features: [
      "Wide Range of Grades",
      "Bulk Supply",
      "Fast Delivery",
      "Competitive Pricing",
    ],
  },
  {
    title: "Packaging Solutions",
    description:
      "BOPP tapes, labels, adhesive products, and packaging materials. From folding cartons to luxury rigid boxes, we cover all packaging needs.",
    features: [
      "Folding Cartons",
      "Luxury Rigid Boxes",
      "Labels & BOPP Tapes",
      "Point-of-Sale Material",
    ],
  },
  {
    title: "Color Printing",
    description:
      "High-quality multi-color printing with precision and consistency. Our state-of-the-art machines deliver vibrant, accurate colors every time.",
    features: [
      "Multi-Color Precision",
      "Consistent Quality",
      "State-of-the-Art Machines",
      "Fast Turnaround",
    ],
  },
];

const technologyImageEntries = Object.entries(
  import.meta.glob("../assets/images/Technology/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  }),
);

const technologyImageMap = technologyImageEntries.reduce((acc, [path, imageUrl]) => {
  const fileName = path.split("/").pop()?.replace(/\.[^/.]+$/, "") ?? "";
  if (fileName) acc[fileName.toLowerCase()] = imageUrl;
  return acc;
}, {});

const normalizeTechnologyText = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const findTechnologyImage = (title) => {
  const titleKey = normalizeTechnologyText(title);
  let bestMatch = Object.values(technologyImageMap)[0] ?? "";
  let bestScore = -1;

  Object.entries(technologyImageMap).forEach(([fileKey, imageUrl]) => {
    const normalizedFileKey = normalizeTechnologyText(fileKey);
    const titleTokens = titleKey.split(" ").filter(Boolean);
    const fileTokens = normalizedFileKey.split(" ").filter(Boolean);
    const overlap = titleTokens.filter(
      (token) =>
        fileTokens.includes(token) ||
        fileTokens.some((fileToken) => fileToken.includes(token) || token.includes(fileToken)),
    );

    const score = overlap.length * 3 + (titleKey.includes(normalizedFileKey) ? 18 : 0);

    if (score > bestScore) {
      bestScore = score;
      bestMatch = imageUrl;
    }
  });

  return bestMatch;
};

export const TECHNOLOGY_ITEMS = [
  {
    title: "Flexo Rotary Label Printing Machine – RK-FMS-NICE-P-320",
    features: [
      "8 Colour Printing Machine",
      "One UV Dryer Unit",
      "Two Rotary Die Cutting Units",
    ],
  },
  {
    title: "Flexo Flatbed Punching Machine",
    features: ["Flatbed Punching"],
  },
  {
    title: "Flexo Cut To Length – CT-300 New",
    features: ["Cut-to-Length"],
  },
  {
    title: "Flexo Core Cutting Machine",
    features: ["Core Cutting"],
  },
  {
    title: "Flexo Gluing Machine – GT-300 HS",
    features: ["Gluing"],
  },
  {
    title: "Flexo Slitting Machine",
    features: ["Flexo Slitting"],
  },
  {
    title: "HEIDELBERG SM 74 P II",
    features: [
      "German Make",
      "5 Colour Offset Printing",
      "Size: 20\" × 30\"",
    ],
  },
  {
    title: "ALPNA-Retrofit Machine",
    features: [
      "MET PET Printing",
      "Drip Off",
      "UV",
      "Blister Coating",
      "Aqueous Varnish Setup",
      "Size: 28\" × 40\"",
    ],
  },
  {
    title: "Automatic Sheet Folding Machine – Heidelberg Stahl",
    features: ["Size: 25\" × 36\""],
  },
  {
    title: "Corrugation Machine",
    features: [
      "E-Flute: 36\"",
      "F-Flute: 52\"",
      "C-Flute: 68\"",
    ],
  },
  {
    title: "Shinohara 66 II P Offset Printer",
    features: [
      "Perfecter",
      "2 Colour",
      "Size: 26\" × 19\"",
      "2 Nos.",
    ],
  },
  {
    title: "Autoprint Offset Printing Machine",
    features: [
      "Single Colour",
      "Size: 10\" × 15\"",
      "2 Nos.",
    ],
  },
  {
    title: "Automatic Cutting Machine",
    features: [
      "Polar Mohr – German Make – 36\" – 3 Nos.",
      "Horizon – Japan Make – 45\" – 1 No.",
    ],
  },
  {
    title: "Automatic Punching Machine",
    features: [
      "Size: 22\" × 32\" – 2 Nos.",
      "Size: 36\" × 46\" – 1 No.",
    ],
  },
  {
    title: "Automatic Continuous Lamination Machine",
    features: ["Capacity up to 850 mm"],
  },
  {
    title: "Continuous Stationery Setup",
    features: ["Continuous Stationery Production"],
  },
  {
    title: "Sticker Half Cutting cum Creasing & Perforating Machine",
    features: [
      "Half Cutting",
      "Creasing",
      "Perforating",
    ],
  },
  {
    title: "Graphica Screen Printing Setup",
    features: [
      "Full-fledged Screen Printing Setup",
      "2 Nos.",
    ],
  },
  {
    title: "2-in-1 Shrink Heat Packing Machine",
    features: ["Shrink Heat Packing"],
  },
  {
    title: "Laser Serial Numbering Machine",
    features: ["Laser Serial Numbering"],
  },
  {
    title: "Blister Coat Testing Machine",
    features: ["Blister Coat Testing"],
  },
].map((item) => ({ ...item, image: findTechnologyImage(item.title) }));

export const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeTechnology, setActiveTechnology] = useState(0);
  const [isCompactView, setIsCompactView] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsCompactView(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* SERVICES INTRO */}
      <section
  className="
    relative z-10 w-full
    px-6
    pt-20 pb-12
    sm:px-8
    md:pt-32
    lg:px-10
    lg:pt-[165px] lg:pb-28
  "
>
  <div className="mx-auto max-w-[1180px]">
    <div className="grid items-end gap-8 md:grid-cols-[1fr_0.9fr]">
      <div data-reveal="left">
        <SectionLabel className="mb-3">
          OUR SERVICES
        </SectionLabel>

        <h1 className="max-w-[620px] text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
          We Offer{" "}
          <span className="italic font-normal text-[var(--theme-accent)]">
            The Best Services
          </span>
        </h1>
      </div>

      <div data-reveal="right">
        <p className="max-w-[520px] text-sm leading-7 opacity-70 sm:text-base">
          From high-quality commercial printing to packaging and
          distribution, we provide complete print solutions designed
          around your business needs.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* SERVICE GRID */}
     
<section className="relative z-10 w-full px-6 pb-20 sm:px-8 lg:px-10 lg:pb-28">
  <div className="mx-auto max-w-[1180px]">
    <div
      className="
        grid overflow-hidden
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {SERVICES.slice(0, 6).map((service, index) => {
        const serviceId = service.title
          .toLowerCase()
          .replace(/&/g, "and")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "")
          .trim();

        const serviceSlug = serviceId;

        return (
          <Link
            key={service.title}
            to={`/services/${serviceSlug}`}
            className="block"
            onMouseEnter={() => setActiveService(index)}
            onFocus={() => setActiveService(index)}
            onBlur={() => setActiveService(0)}
          >
            <article
              id={serviceId}
              tabIndex={0}
              data-reveal={index % 2 === 0 ? "left" : "right"}
              className="
                service-grid-card
                group relative aspect-square
                overflow-hidden
                border border-current/10
                bg-[#edf3f7]
                outline-none
                transition-all duration-500
              "
            >
              {/* IMAGE */}
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className={`
                  service-grid-image
                  absolute inset-0
                  h-full w-full
                  object-cover
                  transition-transform duration-700
                  ${activeService === index ? "scale-105" : "scale-100"}
                `}
              />

              {/* OVERLAY */}
              <div
                className="
                  service-grid-overlay
                  absolute inset-0
                  transition-all duration-500
                "
              />

              <div className="absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

              {/* CONTENT */}
              <div
                className="
                  relative z-10
                  flex h-full
                  flex-col justify-end
                  p-5 sm:p-6
                "
              >
                <div
                  className="
                    translate-y-2
                    transition-all duration-500
                    group-hover:translate-y-0
                  "
                >
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <h3 className="service-card-title text-base font-medium text-white sm:text-lg">
                      {service.title}
                    </h3>

                    <span
                      className="
                        flex h-8 w-8 shrink-0
                        items-center justify-center
                        rounded-full
                        border border-white/30
                        text-white
                        opacity-100
                        transition-all duration-500
                        sm:opacity-0
                        sm:group-hover:opacity-100
                      "
                    >
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </span>
                  </div>

                  <p
                    className="
                      service-card-copy
                      max-w-[300px]
                      text-xs leading-5
                      text-white
                      opacity-100
                      transition-all duration-500
                      sm:opacity-0
                      sm:group-hover:opacity-80
                    "
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  </div>
</section>



      <section className="relative z-10 w-full px-6 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-[1180px]">
          <div
            className="grid overflow-hidden rounded-[26px] border border-[var(--theme-border)] bg-[var(--theme-surface)] shadow-[0_20px_50px_rgba(0,0,0,0.18)] lg:grid-cols-[0.88fr_1.12fr]"
          >
            <div className="service-cta-image-panel relative min-h-[360px] overflow-hidden bg-[var(--theme-bg)] lg:min-h-[420px]">
              <img
                src={ASSETS.whyChooseUsImg}
                alt="Fairdeal print packaging services"
                className="h-full w-full object-cover p-9 opacity-90"
              />
              {/* <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,14,16,0.58),rgba(10,14,16,0.18))]" /> */}
            </div>

            <div className="bg-[var(--theme-bg)] p-8 sm:p-10 lg:p-12">
              <div className="mb-6">
                <SectionLabel className="mb-3 text-left text-[var(--theme-accent-alt)]">
                  Let&apos;s Get Started
                </SectionLabel>

                <h2 className="text-3xl font-medium tracking-[-0.04em] text-[var(--theme-text)] sm:text-4xl lg:text-[3.1rem]">
                  Get A <span className="italic font-normal text-[var(--theme-accent)]">Free Consultation</span>
                 
                </h2>
              </div>

              <p className="mb-8 max-w-[560px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base">
                We always try to implement our creative ideas at the highest level. Tell us about your project and we will make it work.
              </p>

              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm text-[var(--theme-text)]">
                    <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-[var(--theme-text-soft)]">
                      Name
                    </span>
                    <input
                      type="text"
                      className="w-full border-0 border-b border-[var(--theme-border)] bg-transparent pb-2 text-[var(--theme-text)] outline-none placeholder:text-[var(--theme-text-muted)]"
                      placeholder=""
                    />
                  </label>

                  <label className="block text-sm text-[var(--theme-text)]">
                    <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-[var(--theme-text-soft)]">
                      Email
                    </span>
                    <input
                      type="email"
                      className="w-full border-0 border-b border-[var(--theme-border)] bg-transparent pb-2 text-[var(--theme-text)] outline-none placeholder:text-[var(--theme-text-muted)]"
                      placeholder=""
                    />
                  </label>
                </div>

                <label className="block text-sm text-[var(--theme-text)]">
                  <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-[var(--theme-text-soft)]">
                    Message
                  </span>
                  <textarea
                    rows={4}
                    className="w-full resize-none border-0 border-b border-[var(--theme-border)] bg-transparent pb-2 text-[var(--theme-text)] outline-none placeholder:text-[var(--theme-text-muted)]"
                    placeholder=""
                  />
                </label>

                <div className="pt-2 text-right">
                  <GradientButton
                    type="submit"
                    className="h-[52px] px-[34px] text-base font-medium tracking-[-0.23px] sm:text-[17px]"
                  >
                    Send message
                  </GradientButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full px-6 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div data-reveal="left">
              <SectionLabel className="mb-3">
                OUR TECHNOLOGY
              </SectionLabel>

              <h1 className="max-w-[620px] text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
                Technology{" "}
                <span className="italic font-normal text-[var(--theme-accent)]">
                  &amp; Infrastructure
                </span>
              </h1>
            </div>

            <div className="flex w-full justify-center md:ml-auto md:w-auto md:justify-end">
              <GradientButton
                to="/technology"
                className="h-[48px] px-[26px] text-sm font-medium tracking-[-0.2px] sm:text-[15px]"
              >

                Explore all equipments
                <ChevronDownIcon className="h-3.5 w-3.5 -rotate-90" />
              </GradientButton>
            </div>
          </div>

          <div id="technology-slider" className="-mx-6 overflow-x-auto px-6 pb-3 md:mx-0 md:px-0 md:[&::-webkit-scrollbar]:hidden md:[scrollbar-width:none] md:[-ms-overflow-style:none]">
            <div className="flex min-w-max gap-5 md:gap-6">
              {TECHNOLOGY_ITEMS.map((item, index) => (
                <Link
                  key={item.title}
                  to="/technology"
                  className="block"
                  onMouseEnter={() => setActiveTechnology(index)}
                  onFocus={() => setActiveTechnology(index)}
                  onMouseLeave={() => setActiveTechnology(0)}
                  onBlur={() => setActiveTechnology(0)}
                >
                  <article
                    tabIndex={0}
                    className="
                      service-card group relative
                      h-[430px] w-[290px] shrink-0
                      overflow-hidden rounded-[28px]
                      border-0 bg-[#233a35]
                      shadow-[0_18px_50px_rgba(0,0,0,0.12)]
                      transition-all duration-500
                      hover:-translate-y-1
                      sm:h-[470px] sm:w-[320px]
                    "
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className={`
                        absolute inset-0 h-full w-full object-contain
                        scale-105 transition-all duration-700 ease-out
                        ${
                          activeTechnology === index || isCompactView
                            ? "scale-100 opacity-100"
                            : "scale-110 opacity-0"
                        }
                      `}
                    />

                    <div
  className={`
    service-card-overlay absolute inset-0 rounded-[28px]
    bg-blend-screen
    bg-[linear-gradient(138deg,rgba(134,217,240,0.23)_0%,rgba(192,229,116,0.3)_100%)]
    transition-opacity duration-700 ease-out
    ${
      activeTechnology === index || isCompactView
        ? "opacity-0"
        : "opacity-100"
    }
  `}
/>

                    <div className="relative z-10 flex h-full flex-col justify-end p-0">
                      <div className="px-4 pb-4 pt-20 sm:px-5 sm:pb-5">
                        <div
                          className={`
                            flex items-end justify-between gap-3
                            transition-all duration-500
                            ${
                              activeTechnology === index || isCompactView
                                ? "translate-y-0 "
                                : "translate-y-3 opacity-95"
                            }
                          `}
                        >
                          <h3 className="max-w-[190px] text-left text-base font-medium leading-5 tracking-[-0.02em] text-white sm:text-lg">
                            {item.title}
                          </h3>

                          <span className="service-card-action flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-100 shadow-lg backdrop-blur-sm transition-all duration-300 pointer-events-auto group-hover:translate-x-1 group-hover:border-[#e1de00]/60 group-hover:bg-[#e1de00] group-hover:text-[#0f1715] group-hover:shadow-[0_0_18px_rgba(225,222,0,0.35)]">
                            <ArrowUpRightIcon className="h-5 w-5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
};