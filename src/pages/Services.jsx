
import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  CheckCircleIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GradientButton } from "../components/shared/GradientButton";
import { SectionLabel } from "../components/shared/SectionLabel";
import { SERVICES } from "../lib/assets";

gsap.registerPlugin(ScrollTrigger);


const serviceDetails = [
  {
    title: "Offset Printing",
    description:
      "High-quality offset production for brand, business, and publishing needs. Precise registration and dependable color reproduction bring brochures, catalogues, books, labels, cartons, and stationery to life at scale.",
    applications:
      "Brochures / Catalogues / Books / Labels / Cartons / Stationery",
    features: [
      "Brochures & Catalogues",
      "Books & Company Profiles",
      "Labels & Cartons",
      "Business Stationery",
    ],
  },
  {
    title: "Flexo Printing",
    description:
      "Flexible, high-volume printing for labels, tags, packaging, and shrink sleeves. Multi-colour rotary production helps maintain crisp detail and consistent output across long runs and repeat orders.",
    applications:
      "Product Labels / Packaging / Tags / Shrink Sleeves",
    features: [
      "Multi-Colour Label Printing",
      "Rotary Die Cutting",
      "Tags & Shrink Sleeves",
      "Consistent Long Runs",
    ],
  },
  {
    title: "Copier Paper",
    description:
      "Reliable sourcing and distribution of copier, coated, and sheet-form paper for offices, print rooms, and production partners. Choose the right grade and format for everyday printing or specialist finishing.",
    applications:
      "Offices / Commercial Printers / Production Houses",
    features: [
      "Copier Paper",
      "Coated Paper Grades",
      "Sheet-Form Supply",
      "Bulk Distribution",
    ],
  },
  {
    title: "Corrugation",
    description:
      "Protective corrugated packaging developed around the product, journey, and presentation. From everyday transit cartons to custom-fit packaging, flute and board options balance strength with practical handling.",
    applications:
      "Transit Cartons / Custom Boxes / Product Protection",
    features: [
      "E, F & C Flute Options",
      "Custom Box Formats",
      "Transit Protection",
      "Retail-Ready Packaging",
    ],
  },
  {
    title: "Others",
    description:
      "Specialist print and finishing options for the details that make a project distinct. Combine tapes, labels, stickers, and screen printing to complete packaging and promotional requirements.",
    applications:
      "Packaging Details / Product Identification / Promotions",
    features: [
      "BOPP Tapes",
      "Labels & Stickers",
      "Screen Printing",
      "Specialist Finishing",
    ],
  },
];

/* =========================================================
   TECHNOLOGY IMAGE MATCHING
========================================================= */

const technologyImageEntries = Object.entries(
  import.meta.glob("../assets/images/Technology/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  }),
);

const technologyImageMap = technologyImageEntries.reduce(
  (acc, [path, imageUrl]) => {
    const fileName =
      path.split("/").pop()?.replace(/\.[^/.]+$/, "") ?? "";

    if (fileName) {
      acc[fileName.toLowerCase()] = imageUrl;
    }

    return acc;
  },
  {},
);

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
        fileTokens.some(
          (fileToken) =>
            fileToken.includes(token) || token.includes(fileToken),
        ),
    );

    const score =
      overlap.length * 3 +
      (titleKey.includes(normalizedFileKey) ? 18 : 0);

    if (score > bestScore) {
      bestScore = score;
      bestMatch = imageUrl;
    }
  });

  return bestMatch;
};

/* =========================================================
   TECHNOLOGY DATA
========================================================= */

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
      'Size: 20" × 30"',
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
      'Size: 28" × 40"',
    ],
  },

  {
    title: "Automatic Sheet Folding Machine – Heidelberg Stahl",
    features: ['Size: 25" × 36"'],
  },

  {
    title: "Corrugation Machine",
    features: [
      'E-Flute: 36"',
      'F-Flute: 52"',
      'C-Flute: 68"',
    ],
  },

  {
    title: "Shinohara 66 II P Offset Printer",
    features: [
      "Perfecter",
      "2 Colour",
      'Size: 26" × 19"',
      "2 Nos.",
    ],
  },

  {
    title: "Autoprint Offset Printing Machine",
    features: [
      "Single Colour",
      'Size: 10" × 15"',
      "2 Nos.",
    ],
  },

  {
    title: "Automatic Cutting Machine",
    features: [
      'Polar Mohr – German Make – 36" – 3 Nos.',
      'Horizon – Japan Make – 45" – 1 No.',
    ],
  },

  {
    title: "Automatic Punching Machine",
    features: [
      'Size: 22" × 32" – 2 Nos.',
      'Size: 36" × 46" – 1 No.',
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
    title:
      "Sticker Half Cutting cum Creasing & Perforating Machine",
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
].map((item) => ({
  ...item,
  image: findTechnologyImage(item.title),
}));

/* =========================================================
   SERVICES PAGE
========================================================= */

export const Services = () => {
  const heroRef = useRef(null);
  const heroLabelRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroLeadRef = useRef(null);
  const heroFieldRef = useRef(null);
  const heroCopyRef = useRef(null);
  const heroVisualRef = useRef(null);
  const heroMetaRef = useRef(null);
  const heroExploreRef = useRef(null);

  const [isLightTheme, setIsLightTheme] = useState(false);

  /* =======================================================
     THEME DETECTION
  ======================================================= */

  useEffect(() => {
    const html = document.documentElement;

    const updateTheme = () => {
      setIsLightTheme(
        html.getAttribute("data-theme") === "light" ||
          html.classList.contains("light"),
      );
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(html, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  /* =======================================================
     HERO ANIMATION
  ======================================================= */

  useEffect(() => {
    const section = heroRef.current;

    if (!section) return undefined;

    const ctx = gsap.context(() => {
      const words =
        heroTitleRef.current?.querySelectorAll(
          ".services-hero-word",
        );

      const supportingElements = [
        heroLeadRef.current,
        heroFieldRef.current,
        heroCopyRef.current,
        heroMetaRef.current,
        heroExploreRef.current,
      ];

      gsap.set(words, {
        opacity: 0,
        y: 65,
        rotateX: -65,
      });

      gsap.set(
        [heroLabelRef.current, ...supportingElements],
        {
          opacity: 0,
        },
      );

      gsap.set(supportingElements, {
        y: 28,
      });

      gsap.set(heroVisualRef.current, {
        opacity: 0,
        x: 90,
        scale: 0.84,
        rotation: 4,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      timeline
        .to(heroLabelRef.current, {
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        })

        .to(
          words,
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.85,
            stagger: 0.055,
            ease: "power4.out",
          },
          "-=0.25",
        )

        .to(
          heroLeadRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.35",
        )

        .to(
          heroFieldRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.3",
        )

        .to(
          heroCopyRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.4",
        )

        .to(
          heroVisualRef.current,
          {
            opacity: 1,
            x: 0,
            scale: 1,
            rotation: 0,
            duration: 1.15,
            ease: "expo.out",
          },
          "-=0.35",
        )

        .to(
          [heroMetaRef.current, heroExploreRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.3",
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <main
      className={`services-page relative w-full overflow-hidden ${
        isLightTheme ? "light-mode" : ""
      }`}
    >
      <style>{`
        /* =====================================================
           DESIGN SYSTEM
        ===================================================== */

        .services-page {
          --services-bg: #05090B;
          --services-panel: #0C1419;
          --services-panel-2: #111B21;

          --services-yellow: #FFDF00;
          --services-mint: #8FE7C8;

          --services-white: #F5F7F8;
          --services-gray: #98A1B1;

          --services-border: rgba(255,255,255,0.08);

          /*
           * MASTER DISPLAY SIZE
           *
           * This is intentionally the same scale used
           * by the hero and every major editorial heading.
           */
          --services-display-size: clamp(52px, 4vw, 80px);

          /*
           * Shared display typography
           */
          --services-display-weight: 500;
          --services-display-leading: 0.9;
          --services-display-tracking: -0.055em;
        }

        .services-page.light-mode {
          --services-bg: #F5F7F8;
          --services-panel: #FFFFFF;
          --services-panel-2: #EEF2F1;

          --services-yellow: #D5B900;
          --services-mint: #15966F;

          --services-white: #101518;
          --services-gray: #56616D;

          --services-border: rgba(5,9,11,0.09);
        }

        /* =====================================================
           SHARED DISPLAY HEADING
        ===================================================== */

        .services-page .services-display-heading {
          font-family: Inter, "Segoe UI", Arial, sans-serif;
          font-size: var(--services-display-size);
          font-weight: var(--services-display-weight);
          line-height: var(--services-display-leading);
          letter-spacing: var(--services-display-tracking);
        }

        /* =====================================================
           HERO
        ===================================================== */

        .services-page .services-hero {
          background: var(--services-bg);
          color: var(--services-white);
          font-family: Inter, "Segoe UI", Arial, sans-serif;
        }

        .services-page .services-hero-label {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;

          color: var(--services-yellow);

          font-size: 11px;
          font-weight: 800;
          line-height: normal;
          letter-spacing: 0.25em;
          text-transform: uppercase;
        }

        .services-page .services-hero-label::before {
          content: "";

          width: 35px;
          height: 1px;

          background: linear-gradient(
            90deg,
            var(--services-yellow),
            var(--services-mint)
          );
        }

        /*
         * HERO HEADING
         *
         * Uses the exact same master size as all
         * major headings below.
         */
        .services-page .services-hero h1 {
          font-family: Inter, "Segoe UI", Arial, sans-serif;

          font-size: var(--services-display-size);
          font-weight: 650;
          line-height: 0.98;
          letter-spacing: -0.055em;

          perspective: 1000px;
        }

        .services-page .services-hero-word {
          display: inline-block;

          margin-right: 0.18em;

          transform-origin: center bottom;

          will-change: transform, opacity;
        }

        .services-page .services-hero-accent {
          color: var(--services-yellow);
        }

        .services-page .services-hero-mint {
          color: var(--services-mint);
        }

        .services-page .services-hero-copy,
        .services-page .services-hero-meta,
        .services-page .services-hero-explore {
          color: var(--services-gray);
        }

        .services-page .services-hero-rule {
          background: var(--services-border);
        }

        .services-page .services-hero-explore svg {
          color: var(--services-mint);
        }

        .services-page .services-hero-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .services-page .services-hero-image-caption {
          color: #F5F7F8;
        }

        /* =====================================================
           ACCESSIBILITY
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .services-page .services-hero-word {
            will-change: auto;
          }
        }
      `}</style>

      {/* =====================================================
          01 — EDITORIAL INTRO
      ===================================================== */}

      <section
        ref={heroRef}
        className="services-hero relative px-6 pb-20 pt-24 sm:px-8 md:pt-32 lg:px-10 lg:pb-28 lg:pt-[150px]"
      >
        <div className="mx-auto max-w-[1500px]">

          <div className="mb-8 flex items-center justify-between">
            <div
              ref={heroLabelRef}
              className="services-hero-label"
            >
              OUR SERVICES
            </div>

            <span className="services-hero-copy hidden text-xs tracking-[0.2em] md:block">
              01 / SERVICES
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">

            {/* LEFT */}
            <div>
              <h1
                ref={heroTitleRef}
                className="max-w-[1100px] text-[var(--services-white)]"
              >
                <span className="services-hero-word">
                  Print.
                </span>

                <br />

                <span className="services-hero-word services-hero-accent">
                  Pack.
                </span>{" "}

                <span className="services-hero-word services-hero-mint">
                  Deliver.
                </span>
              </h1>

              <p
                ref={heroLeadRef}
                className="services-hero-copy mt-7 max-w-[560px] text-base leading-7 sm:text-lg"
              >
                From first proof to final delivery, we make print work
                hard for your brand.
              </p>

              <div
                ref={heroFieldRef}
                className="mt-10 grid max-w-[650px] grid-cols-3 gap-3"
              >
                {SERVICES.slice(1, 4).map((service, index) => (
                  <div
                    key={service.title}
                    className="relative aspect-[1.55/1] overflow-hidden bg-[var(--services-panel-2)]"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />

                    <div
                      className={`absolute inset-x-0 bottom-0 h-[2px] ${
                        index === 1
                          ? "bg-[var(--services-mint)]"
                          : "bg-[var(--services-yellow)]"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="max-w-[400px] lg:pb-3">
              <p
                ref={heroCopyRef}
                className="services-hero-copy text-sm leading-7 sm:text-base"
              >
                Offset and flexographic printing, paper supply, and
                corrugated production come together for dependable
                end-to-end output.
              </p>

              <div
                ref={heroVisualRef}
                className="relative mt-8 aspect-[1.45/1] overflow-hidden bg-[var(--services-panel-2)]"
              >
                <img
                  src={SERVICES[0].image}
                  alt="Offset printing production"
                  className="services-hero-image"
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/5 to-transparent" />

                <span className="services-hero-image-caption absolute bottom-4 left-4 text-[9px] font-semibold uppercase tracking-[0.2em]">
                  Offset production / 01
                </span>

                <ArrowUpRightIcon
                  className="absolute bottom-4 right-4 h-4 w-4 text-[#8FE7C8]"
                  aria-hidden="true"
                />
              </div>

              <div className="services-hero-rule mt-5 h-px w-full" />

              <div
                ref={heroMetaRef}
                className="services-hero-meta mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.18em]"
              >
                <span>Fairdeal</span>
                <span>Print & Packaging</span>
              </div>
            </div>
          </div>

          <div
            ref={heroExploreRef}
            className="services-hero-explore mt-16 flex items-center gap-4 text-xs uppercase tracking-[0.2em]"
          >
            <ArrowDownRightIcon className="h-4 w-4" />
            <span>Explore our capabilities</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          02 — SERVICE BLUEPRINT

          NO SLIDER
          NO CAROUSEL
          NO PREVIOUS / NEXT
      ===================================================== */}

      <section className="relative px-6 pb-24 sm:px-8 lg:px-10 lg:pb-36">
        <div className="mx-auto max-w-[1500px]">

          <div className="mb-10 flex items-end justify-between border-b border-[var(--theme-border)] pb-5">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]">
                The Fairdeal System
              </span>

              <h2 className="mt-3 text-2xl font-medium tracking-[-0.04em] text-[var(--theme-text)] sm:text-3xl">
                {SERVICES.length} capabilities.

                <span className="ml-2 font-normal text-[var(--theme-accent)]">
                  One workflow.
                </span>
              </h2>
            </div>

            <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)] md:block">
              {String(SERVICES.length).padStart(2, "0")} Capabilities
            </span>
          </div>

          {/* =================================================
              SERVICE STACK
          ================================================= */}

          <div className="relative">
            {SERVICES.map((service, index) => {
              const detail =
                serviceDetails.find(
                  (item) => item.title === service.title,
                ) ?? {
                  title: service.title,
                  description: service.description,
                  applications:
                    "Print / Packaging / Distribution",
                  features: [],
                };

              const serviceId = service.title
                ?.toLowerCase()
                .replace(/&/g, "and")
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "");

              const isEven = index % 2 === 0;

              return (
                <article
                  key={service.title}
                  className="group relative border-b border-[var(--theme-border)] py-8 sm:py-10 lg:py-14"
                >
                  {/* LARGE BACKGROUND NUMBER */}

                  <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 select-none text-[11rem] font-medium leading-none tracking-[-0.1em] text-[var(--theme-text)] opacity-[0.035] xl:block">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative grid gap-8 lg:grid-cols-[0.12fr_0.88fr] lg:items-center">

                    {/* NUMBER */}

                    <div className="flex items-start gap-4 lg:block">
                      <span className="text-[11px] tracking-[0.18em] text-[var(--theme-accent)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="mt-1 hidden h-16 w-px bg-[var(--theme-border)] lg:block" />

                      <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--theme-text-muted)] lg:mt-3 lg:block">
                        Capability
                      </span>
                    </div>

                    {/* CONTENT */}

                    <div
                      className={`grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center ${
                        !isEven
                          ? "lg:[&>*:first-child]:order-2"
                          : ""
                      }`}
                    >

                      {/* TEXT */}

                      <div>
                        <div className="mb-5 flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-[var(--theme-accent)] transition-transform duration-500 group-hover:scale-150" />

                          <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]">
                            Fairdeal /{" "}
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        {/* SAME SIZE AS HERO */}

                        <h3 className="services-display-heading max-w-[720px] text-[var(--theme-text)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
                          {service.title}
                        </h3>

                        <p className="mt-7 max-w-[620px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base">
                          {detail?.description}
                        </p>

                        <p className="mt-4 max-w-[620px] text-[10px] font-medium uppercase leading-5 tracking-[0.12em] text-[var(--theme-accent-alt)]">
                          Applications: {detail?.applications}
                        </p>

                        <Link
                          to={`/services/${serviceId}`}
                          className="group/link mt-7 inline-flex items-center gap-3 text-sm text-[var(--theme-text)]"
                        >
                          <span className="border-b border-[var(--theme-text)] pb-1">
                            Explore service
                          </span>

                          <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                        </Link>
                      </div>

                      {/* IMAGE + FEATURES */}

                      <div className="relative">
                        <div className="relative aspect-[1.35/1] overflow-hidden bg-[var(--theme-bg)]">
                          <img
                            src={service.image}
                            alt={service.title}
                            loading="lazy"
                            className="h-full w-full object-cover grayscale-[15%] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:grayscale-0"
                          />

                          <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent opacity-70" />

                          <div className="absolute left-5 top-5 text-[9px] uppercase tracking-[0.2em] text-white">
                            Print / Production
                          </div>

                          <div className="absolute bottom-5 right-5 flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-white/70">
                            <span>View capability</span>
                            <ArrowUpRightIcon className="h-3 w-3" />
                          </div>
                        </div>

                        {/* FEATURE STRIP */}

                        <div className="mt-5 grid gap-2 sm:grid-cols-2">
                          {detail?.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-2 border-b border-[var(--theme-border)] pb-2"
                            >
                              <CheckCircleIcon className="h-3.5 w-3.5 shrink-0 text-[var(--theme-accent)]" />

                              <span className="text-[11px] leading-5 text-[var(--theme-text-soft)]">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* HOVER LINE */}

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--theme-accent)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — PROCESS STATEMENT
      ===================================================== */}

      <section className="relative border-y border-[var(--theme-border)]">
        <div className="mx-auto max-w-[1500px] px-6 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">

          <div className="grid gap-14 lg:grid-cols-[0.3fr_1.7fr]">

            <div>
              <SectionLabel className="text-left text-[var(--theme-accent-alt)]">
                HOW WE WORK
              </SectionLabel>

              <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]">
                <span className="h-2 w-2 rounded-full bg-[var(--theme-accent)]" />
                <span>From idea to output</span>
              </div>
            </div>

            <div>

              {/* SAME SIZE AS HERO */}

              <h2 className="services-display-heading max-w-[1050px] text-[var(--theme-text)]">
                We don't just
                <br />

                <span className="font-normal text-[var(--theme-accent)]">
                  print products.
                </span>

                <br />

                We build outcomes.
              </h2>

              <p className="mt-10 max-w-[680px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base">
                Every project moves through a connected system of material
                selection, production, finishing, packaging and delivery.
                Our capabilities work together so the final product performs
                exactly as intended.
              </p>
            </div>
          </div>

          {/* PROCESS NUMBERS */}

          <div className="mt-20 grid border-y border-[var(--theme-border)] sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Understand", "Project requirements"],
              ["02", "Produce", "Precision manufacturing"],
              ["03", "Finish", "Detail & quality control"],
              ["04", "Deliver", "Ready for the market"],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="group border-b border-[var(--theme-border)] p-6 last:border-b-0 sm:nth-[2]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:p-8"
              >
                <span className="text-[10px] tracking-[0.2em] text-[var(--theme-accent)]">
                  {number}
                </span>

                <h3 className="mt-12 text-xl font-medium tracking-[-0.03em] text-[var(--theme-text)] transition-transform duration-500 group-hover:translate-x-1">
                  {title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-[var(--theme-text-soft)]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          04 — CONSULTATION / MANIFESTO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-[var(--theme-border)]">
        <div className="mx-auto max-w-[1500px] px-6 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">

            <div>
              <SectionLabel className="mb-5 text-left text-[var(--theme-accent-alt)]">
                LET&apos;S GET STARTED
              </SectionLabel>

              <div className="relative">
                <span className="absolute -left-1 -top-7 text-xs text-[var(--theme-accent)]">
                  +
                </span>

                <p className="max-w-[330px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base">
                  We always try to implement our creative ideas at the
                  highest level. Tell us about your project and we will
                  make it work.
                </p>
              </div>
            </div>

            <div>

              {/* SAME SIZE AS HERO */}

              <h2 className="services-display-heading max-w-[1000px] text-[var(--theme-text)]">
                Have a project
                <br />

                <span className="font-normal text-[var(--theme-accent)]">
                  in mind?
                </span>
              </h2>
            </div>
          </div>

          {/* CONTACT FORM */}

          <form className="mt-20 border-t border-[var(--theme-border)] pt-8 lg:mt-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_0.7fr_1.6fr_auto] lg:items-end">

              {/* NAME */}

              <label className="block">
                <span className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]">
                  Name
                </span>

                <input
                  type="text"
                  className="w-full border-0 border-b border-[var(--theme-border)] bg-transparent pb-3 text-sm text-[var(--theme-text)] outline-none transition-colors focus:border-[var(--theme-accent)]"
                />
              </label>

              {/* EMAIL */}

              <label className="block">
                <span className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]">
                  Email
                </span>

                <input
                  type="email"
                  className="w-full border-0 border-b border-[var(--theme-border)] bg-transparent pb-3 text-sm text-[var(--theme-text)] outline-none transition-colors focus:border-[var(--theme-accent)]"
                />
              </label>

              {/* PROJECT */}

              <label className="block">
                <span className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]">
                  Tell us about the project
                </span>

                <textarea
                  rows={1}
                  className="w-full resize-none border-0 border-b border-[var(--theme-border)] bg-transparent pb-3 text-sm text-[var(--theme-text)] outline-none transition-colors focus:border-[var(--theme-accent)]"
                />
              </label>

              {/* CTA */}

              <GradientButton
                type="submit"
                className="h-[52px] whitespace-nowrap px-7 text-sm"
              >
                Start a conversation

                <ArrowUpRightIcon className="h-4 w-4" />
              </GradientButton>
            </div>
          </form>
        </div>

        {/* BACKGROUND NUMBER */}

        <div className="pointer-events-none absolute bottom-[-80px] right-[-20px] hidden text-[18rem] font-medium leading-none tracking-[-0.1em] text-[var(--theme-accent)] opacity-[0.04] lg:block">
          03
        </div>
      </section>
    </main>
  );
};

