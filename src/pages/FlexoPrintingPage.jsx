
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowRightIcon,
  BadgeCheckIcon,
  BarcodeIcon,
  BoxesIcon,
  CircleDollarSignIcon,
  CircleGaugeIcon,
  EyeIcon,
  GemIcon,
  Layers3Icon,
  PaletteIcon,
  PackageIcon,
  PrinterIcon,
  RecycleIcon,
  RotateCwIcon,
  ShieldCheckIcon,
  ShuffleIcon,
  TagIcon,
  TriangleAlertIcon,
} from "lucide-react";

import { GradientButton } from "../components/shared/GradientButton";
import { SectionLabel } from "../components/shared/SectionLabel";
import { ServiceFeatures } from "../components/shared/ServiceFeatures";

gsap.registerPlugin(ScrollTrigger);

const advantages = [
  ["01", "VERSATILITY", "Versatile printing", "A range of inks and coatings helps achieve the appearance and protection different products require.", ShuffleIcon],
  ["02", "MATERIALS", "Multiple substrates", "Print on paper, film, foil, Tyvek, and a broad selection of other substrates.", Layers3Icon],
  ["03", "COST EFFICIENCY", "Efficient production", "Efficient consumable use and high production speeds make flexography suitable for economical runs.", CircleDollarSignIcon],
  ["04", "PRESS SPEED", "High press speeds", "High-speed production is particularly suited to long runs of custom labels.", CircleGaugeIcon],
  ["05", "PLATE DURABILITY", "Long plate life", "Durable flexographic plates support extended production runs and consistent reproduction.", PrinterIcon],
  ["06", "COLOR STABILITY", "Consistent color", "Careful color control helps maintain stable results throughout a run and from run to run.", PaletteIcon],
];

const applications = [
  ["Prime product labels", "Premium product identification", TagIcon],
  ["Industrial labels", "Industrial identification", PrinterIcon],
  ["Tamper-evident labels", "Security-focused labeling", ShieldCheckIcon],
  ["UL labels", "Compliance-oriented labels", BadgeCheckIcon],
  ["RoHS labels", "Regulatory identification", BadgeCheckIcon],
  ["Asset labels and tags", "Asset identification systems", BarcodeIcon],
  ["Danger and caution labels", "Safety communication", TriangleAlertIcon],
  ["Window decals and static clings", "Window graphics and clings", EyeIcon],
  ["Warning labels", "High-visibility safety labels", TriangleAlertIcon],
  ["Barcode and serialized labels", "Trackable product identification", BarcodeIcon],
  ["Outdoor equipment labels", "Outdoor-use identification", BadgeCheckIcon],
  ["Medical labels", "Medical product identification", ShieldCheckIcon],
  ["Custom labels and tags", "Made for your requirements", TagIcon],
  ["Inventory labels", "Stock and inventory management", BoxesIcon],
  ["Cover-up labels", "Over-labeling applications", Layers3Icon],
  ["Security labels", "Product security and protection", ShieldCheckIcon],
];

const sleeveAdvantages = [
  ["360-degree display", "Artwork and messaging wrap around the container for greater shelf impact.", RotateCwIcon],
  ["Full-body coverage", "A large printable surface supports product information and brand storytelling.", Layers3Icon],
  ["Clear windows", "Transparent areas can let customers see the product inside.", EyeIcon],
  ["Tamper evidence", "Tamper-evident constructions can add an extra layer of product security.", ShieldCheckIcon],
  ["High print quality", "Detailed, high-quality artwork supports demanding product presentation.", GemIcon],
  ["Protected graphics", "Reverse printing can help protect ink from scratching and wear.", RecycleIcon],
];

const endUses = [
  ["01 / SECURITY", "Tamper-evident bands", "Used for consumer protection across pharmaceutical, vitamin, food, and beverage products."],
  ["02 / BRANDING", "Full-body shrink sleeves", "Used across beverage, personal care, food, household chemical, and automotive packaging."],
  ["03 / PROMOTIONS", "Multi-packs", "Promotional wraps can bundle products and support cross-branded campaigns."],
];

const processSteps = [
  ["01", "PREPARE THE PLATE", "A flexible plate carries the raised image that receives ink and transfers the artwork to the substrate."],
  ["02", "CONTROL THE COLOR", "Each printing station applies a single color, with multiple stations working together for accurate registration."],
  ["03", "FINISH THE PRINT", "Printed materials can be die cut, sheeted, embossed, or perforated to suit the finished application."],
];

const panelClass =
  "border border-[var(--theme-border)] bg-[var(--theme-panel,rgba(12,20,25,0.72))]";

export const FlexoPrintingPage = ({ service }) => {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const reveals = gsap.utils.toArray("[data-flexo-reveal]", root);

      reveals.forEach((element) => {
        gsap.fromTo(
          element,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.fromTo(
        ".fx-hero-image",
        { clipPath: "inset(0 0 0 100%)", scale: 1.08 },
        {
          clipPath: "inset(0 0 0 0)",
          scale: 1,
          duration: 1.25,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: ".fx-hero",
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".fx-hero-number",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.15,
        }
      );

      gsap.to(".fx-orbit", {
        rotate: 360,
        duration: 35,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
      });

      gsap.to(".fx-float-dot", {
        y: -9,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        stagger: 0.35,
        ease: "sine.inOut",
      });

      ScrollTrigger.refresh();
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="fx-page relative z-10 w-full overflow-hidden bg-[var(--theme-bg)] pb-16 pt-20 text-[var(--theme-text)] sm:pt-28 lg:pt-[145px]"
    >
      <style>{`
        .fx-page {
          --fx-yellow: #FFDF00;
          --fx-mint: #8FE7C8;
          --fx-white: #F5F7F8;
          --fx-gray: #98A1B1;
          --fx-line: var(--theme-border, rgba(245,247,248,.12));
          font-family: inherit;
        }

        .fx-page .fx-label {
          color: var(--theme-accent-alt, var(--fx-mint));
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .19em;
          line-height: 1.7;
          text-transform: uppercase;
        }

        .fx-page .fx-heading {
          font-size: clamp(43px, 6.1vw, 88px);
          font-weight: 650;
          line-height: .98;
          letter-spacing: -.065em;
        }

        .fx-page .fx-accent {
          color: var(--theme-accent, var(--fx-yellow));
        }

        .fx-page .fx-copy {
          color: var(--theme-text-soft, var(--fx-gray));
          font-size: 14px;
          line-height: 1.9;
        }

        .fx-page .fx-rule {
          height: 2px;
          background: linear-gradient(90deg, var(--fx-yellow) 0 35%, var(--fx-mint) 35% 58%, var(--fx-line) 58%);
          transform-origin: left;
        }

        .fx-page .fx-outline-number {
          position: absolute;
          z-index: 0;
          top: -.16em;
          left: -.055em;
          color: var(--theme-text, #F5F7F8);
          opacity: .035;
          font-size: clamp(220px, 37vw, 520px);
          font-weight: 800;
          line-height: .8;
          letter-spacing: -.09em;
          pointer-events: none;
          user-select: none;
        }

        .fx-page .fx-image {
          position: relative;
          overflow: hidden;
          background: var(--theme-panel, #0C1419);
          border: 1px solid var(--fx-line);
        }

        .fx-page .fx-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .8s cubic-bezier(.2,.7,.2,1);
        }

        .fx-page .fx-image:hover img {
          transform: scale(1.035);
        }

        .fx-page .fx-image::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(180deg, transparent 42%, rgba(5,9,11,.68));
        }

        .fx-page .fx-meta {
          color: var(--theme-text-soft, var(--fx-gray));
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .15em;
          text-transform: uppercase;
        }

        .fx-page .fx-index {
          color: var(--theme-accent, var(--fx-yellow));
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .12em;
        }

        .fx-page .fx-advantage {
          position: relative;
          min-height: 235px;
          overflow: hidden;
          border-top: 1px solid var(--fx-line);
          padding: 24px 20px 28px 0;
          transition: border-color .3s ease, padding-left .3s ease;
        }

        .fx-page .fx-advantage:hover {
          border-color: var(--theme-accent, var(--fx-yellow));
          padding-left: 10px;
        }

        .fx-page .fx-advantage .fx-adv-number {
          position: absolute;
          top: 0;
          right: 0;
          color: var(--theme-text, #F5F7F8);
          opacity: .055;
          font-size: 86px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -.08em;
        }

        .fx-page .fx-app-row {
          display: grid;
          grid-template-columns: 42px minmax(0,1fr) auto;
          align-items: center;
          gap: 15px;
          min-height: 75px;
          border-bottom: 1px solid var(--fx-line);
          transition: padding .25s ease, background .25s ease;
        }

        .fx-page .fx-app-row:hover {
          padding-left: 8px;
          background: rgba(143,231,200,.025);
        }

        .fx-page .fx-app-icon {
          display: grid;
          width: 34px;
          height: 34px;
          place-items: center;
          border: 1px solid var(--fx-line);
          color: var(--theme-accent, var(--fx-yellow));
        }

        .fx-page .fx-process-item {
          position: relative;
          border-top: 1px solid var(--fx-line);
          padding: 22px 15px 12px 0;
        }

        .fx-page .fx-process-item::before {
          content: "";
          position: absolute;
          top: -2px;
          left: 0;
          width: 38px;
          height: 3px;
          background: var(--theme-accent, var(--fx-yellow));
        }

        .fx-page .fx-feature-panel {
          background:
            radial-gradient(ellipse at 85% 20%, rgba(143,231,200,.09), transparent 42%),
            linear-gradient(135deg, rgba(255,223,0,.055), transparent 58%),
            var(--theme-panel, #0C1419);
        }

        .fx-page .fx-sleeve-bottle {
          position: relative;
          width: 122px;
          height: 215px;
          border-radius: 25px 25px 30px 30px;
          background: linear-gradient(90deg,#111a20,#66766f 22%,#172126 48%,#89958b 63%,#111a20);
          box-shadow: 0 22px 50px rgba(0,0,0,.35);
        }

        .fx-page .fx-sleeve-bottle::before {
          content: "";
          position: absolute;
          top: -27px;
          left: 37px;
          width: 48px;
          height: 30px;
          border-radius: 6px 6px 2px 2px;
          background: linear-gradient(90deg,#27363a,#8c9a90,#182226);
        }

        .fx-page .fx-sleeve-print {
          position: absolute;
          top: 55px;
          left: -5px;
          right: -5px;
          display: grid;
          height: 105px;
          place-items: center;
          background: linear-gradient(135deg,#86d9f0,#8FE7C8 55%,#FFDF00);
          color: #101a1b;
          text-align: center;
          box-shadow: 0 0 28px rgba(143,231,200,.13);
        }

        @media (max-width: 767px) {
          .fx-page .fx-heading {
            font-size: clamp(42px, 11vw, 64px);
          }

          .fx-page .fx-outline-number {
            top: -.02em;
            left: -.035em;
            font-size: clamp(180px, 60vw, 300px);
          }

          .fx-page .fx-advantage {
            min-height: 205px;
            padding-top: 20px;
          }

          .fx-page .fx-advantage .fx-adv-number {
            font-size: 70px;
          }

          .fx-page .fx-app-row {
            grid-template-columns: 36px minmax(0,1fr) auto;
            gap: 10px;
            min-height: 72px;
          }

          .fx-page .fx-app-icon {
            width: 31px;
            height: 31px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fx-page *,
          .fx-page *::before,
          .fx-page *::after {
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <div className="relative mx-auto max-w-[1500px] space-y-24 px-5 sm:px-8 lg:space-y-32 lg:px-10">

        {/* HERO */}
        <section className="fx-hero relative grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr] lg:gap-14">
          <div className="pointer-events-none absolute -left-5 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[var(--theme-accent-alt)] opacity-[0.045] blur-[80px]" />

          <div className="relative z-10 py-4 lg:py-12">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[var(--theme-accent)]" />
              <SectionLabel className="text-left text-[var(--theme-accent-alt)]">
                FAIRDEAL PRINT PACK INDIA PVT. LTD.
              </SectionLabel>
            </div>

            <p className="fx-meta mb-5">PRINT TECHNOLOGY / 01</p>

            <h1 className="fx-heading max-w-[720px]">
              Flexographic
              <br />
              <span className="fx-accent">Printing.</span>
            </h1>

            <p className="fx-copy mt-7 max-w-[570px] sm:text-base">
              {service.description} Flexography uses flexible raised-image
              plates to transfer ink onto a wide range of substrates with
              speed, consistency, and precision.
            </p>

            <div className="mt-7 max-w-xl">
              <ServiceFeatures features={service.features} />
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
              {[
                [Layers3Icon, "FLEXIBLE PLATES"],
                [CircleGaugeIcon, "HIGH PRESS SPEEDS"],
                [PaletteIcon, "COLOR CONTROL"],
                [RecycleIcon, "MULTI-SUBSTRATE"],
              ].map(([Icon, text]) => (
                <span key={text} className="inline-flex items-center gap-2 text-[9px] font-semibold tracking-[.11em] text-[var(--theme-text-soft)]">
                  <Icon className="h-4 w-4 text-[var(--theme-accent)]" />
                  {text}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <GradientButton href="#applications" className="h-12 px-6 text-sm font-medium">
                Explore applications <ArrowRightIcon className="h-4 w-4" />
              </GradientButton>
              <GradientButton to="/contact" className="h-12 border border-[var(--theme-border)] bg-none bg-white/[0.025] px-5 text-xs font-semibold uppercase tracking-[.07em] text-[var(--theme-text)] shadow-none hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]">
                Discuss requirements
              </GradientButton>
            </div>
          </div>

          <figure className="fx-image group relative min-h-[400px] sm:min-h-[520px] lg:min-h-[650px]">
            <div className="absolute -right-3 -top-3 z-0 h-full w-full translate-x-3 translate-y-3 bg-[var(--theme-accent)]" />

            <div className="fx-hero-image absolute inset-0 z-[1]">
              <img
                src={service.image}
                alt="Flexographic printing press"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/30" />
            </div>

            <div className="absolute inset-x-5 top-5 z-[2] flex items-center justify-between gap-3">
              <span className="text-[8px] font-bold tracking-[.16em] text-white/90 sm:text-[9px]">
                FLEXOGRAPHIC PRINTING PRESS
              </span>
              <span className="flex items-center gap-2 text-[8px] font-bold tracking-[.12em] text-[var(--fx-mint)]">
                <span className="fx-float-dot h-1.5 w-1.5 rounded-full bg-[var(--fx-mint)]" />
                PRINT TECHNOLOGY
              </span>
            </div>

            <div className="fx-orbit pointer-events-none absolute -right-20 top-1/4 z-[2] h-56 w-56 rounded-full border border-white/15" />

            <div className="absolute bottom-6 left-5 right-5 z-[2] sm:bottom-8 sm:left-8 sm:right-8">
              <p className="fx-meta mb-3 text-white/70">BUILT FOR PRODUCTION</p>
              <h2 className="max-w-lg text-2xl font-medium leading-tight tracking-[-.035em] text-white sm:text-4xl">
                Flexible plates.
                <br />
                <span className="text-[var(--fx-mint)]">Consistent print.</span>
              </h2>
              <div className="mt-6 grid grid-cols-3 border-t border-white/25 pt-4">
                {[
                  ["PROCESS", "FLEXOGRAPHIC"],
                  ["PLATES", "FLEXIBLE"],
                  ["OUTPUT", "LABELS & PACKAGING"],
                ].map(([label, value]) => (
                  <div key={label} className="min-w-0 pr-2">
                    <p className="text-[7px] tracking-[.12em] text-white/55 sm:text-[8px]">{label}</p>
                    <p className="mt-1 break-words text-[8px] font-bold leading-snug tracking-[.05em] text-[var(--fx-yellow)] sm:text-[10px]">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <span className="pointer-events-none absolute bottom-4 right-4 z-[2] h-8 w-8 border-b border-r border-[var(--fx-yellow)]" />
          </figure>
        </section>

        {/* ADVANTAGES */}
        <section className="relative">
          <div className="relative mb-10 grid gap-5 md:grid-cols-[1fr_.8fr] md:items-end">
            <div>
              <SectionLabel className="mb-4 text-left text-[var(--theme-accent-alt)]">
                Why flexographic printing
              </SectionLabel>
              <h2 className="fx-heading max-w-3xl text-4xl sm:text-6xl">
                Built for
                <br />
                <span className="fx-accent">the long run.</span>
              </h2>
            </div>
            <p className="fx-copy max-w-lg md:justify-self-end">
              A versatile printing process combining speed, material flexibility,
              and consistent reproduction for demanding production requirements.
            </p>
          </div>

          <div className="fx-rule mb-8" />

          <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
            {advantages.map(([number, label, title, description, Icon]) => (
              <article key={number} data-flexo-reveal className="fx-advantage">
                <span className="fx-adv-number">{number}</span>
                <div className="relative z-[1] flex items-center justify-between">
                  <span className="fx-index">{number} / {label}</span>
                  <Icon className="h-5 w-5 text-[var(--theme-accent)]" />
                </div>
                <h3 className="relative z-[1] mt-9 text-xl font-medium tracking-[-.025em] sm:text-2xl">
                  {title}
                </h3>
                <p className="fx-copy relative z-[1] mt-3 max-w-sm text-sm">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="relative overflow-hidden">
          <span className="pointer-events-none absolute -right-3 -top-24 select-none text-[220px] font-black leading-none tracking-[-.1em] opacity-[.035] sm:text-[340px]">
            03
          </span>

          <div className="relative z-[1] grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <div data-flexo-reveal>
              <SectionLabel className="mb-5 text-left text-[var(--theme-accent-alt)]">
                How it works
              </SectionLabel>
              <h2 className="fx-heading text-4xl sm:text-6xl">
                The printing
                <br />
                <span className="fx-accent">process.</span>
              </h2>
              <p className="fx-copy mt-6 max-w-md">
                Flexible plates, controlled color, and finishing operations work
                together to create print suited to the final application.
              </p>
            </div>

            <div className="grid gap-x-7 sm:grid-cols-3">
              {processSteps.map(([number, title, description]) => (
                <article key={number} data-flexo-reveal className="fx-process-item">
                  <p className="text-5xl font-bold leading-none tracking-[-.07em] text-[var(--theme-accent)] sm:text-6xl">
                    {number}
                  </p>
                  <h3 className="mt-7 text-sm font-bold uppercase leading-snug tracking-[.05em]">
                    {title}
                  </h3>
                  <p className="fx-copy mt-3 text-xs">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* APPLICATIONS */}
        <section id="applications" className="scroll-mt-28">
          <div className="mb-10 grid gap-6 md:grid-cols-[1fr_.7fr] md:items-end">
            <div>
              <SectionLabel className="mb-4 text-left text-[var(--theme-accent-alt)]">
                Flexographic applications
              </SectionLabel>
              <h2 className="fx-heading text-4xl sm:text-6xl">
                Made for
                <br />
                <span className="fx-accent">identification.</span>
              </h2>
            </div>
            <div className="md:justify-self-end">
              <p className="fx-copy max-w-md">
                From product branding to industrial identification, discover
                applications that suit your labeling requirements.
              </p>
              <p className="mt-5 border-b border-[var(--theme-accent-alt)] pb-3 text-[9px] font-bold tracking-[.15em] text-[var(--theme-text-soft)]">
                16 APPLICATION TYPES
              </p>
            </div>
          </div>

          <div className="grid gap-x-12 lg:grid-cols-2">
            {applications.map(([title, description, Icon], index) => (
              <article key={title} data-flexo-reveal className="fx-app-row">
                <span className="fx-app-icon">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="min-w-0 py-3">
                  <span className="block text-sm font-medium leading-snug">
                    {title}
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-[var(--theme-text-soft)]">
                    {description}
                  </span>
                </span>
                <span className="fx-index pr-1 text-[9px] opacity-70">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </section>

        {/* SHRINK SLEEVE FEATURE */}
        <section className={`${panelClass} fx-feature-panel relative overflow-hidden`}>
          <div className="grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_.85fr] lg:gap-16 lg:p-14">
            <div data-flexo-reveal className="relative z-[1]">
              <SectionLabel className="mb-5 text-left text-[var(--theme-accent-alt)]">
                Shrink sleeve technology
              </SectionLabel>

              <p className="fx-meta mb-4">FULL-BODY LABELING / 360° GRAPHICS</p>

              <h2 className="fx-heading text-4xl sm:text-6xl">
                A larger
                <br />
                <span className="fx-accent">canvas.</span>
              </h2>

              <p className="fx-copy mt-6 max-w-xl sm:text-base">
                Shrink sleeves are full-color labels that cover a container,
                providing 360-degree graphics for branding and messaging.
                Printed on engineered film, the sleeve responds to heat or
                steam and conforms to the container shape.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
                {[
                  [RotateCwIcon, "360-DEGREE GRAPHICS"],
                  [PackageIcon, "CONTAINER CONFORMING"],
                  [CircleGaugeIcon, "HEAT SHRINK"],
                ].map(([Icon, text]) => (
                  <span key={text} className="inline-flex items-center gap-2 text-[9px] font-bold tracking-[.08em] text-[var(--theme-text-soft)]">
                    <Icon className="h-4 w-4 text-[var(--theme-accent)]" />
                    {text}
                  </span>
                ))}
              </div>
            </div>

            <div data-flexo-reveal className="relative flex min-h-[340px] items-center justify-center overflow-hidden border border-[var(--theme-border)] bg-black/10 sm:min-h-[440px]">
              <span className="absolute left-5 top-5 text-[8px] font-bold tracking-[.14em] text-[var(--theme-text-soft)]">
                SHRINK FILM / HEAT APPLICATION
              </span>

              <div className="absolute h-64 w-64 rounded-full border border-[var(--theme-border)]" />
              <div className="absolute h-48 w-48 rounded-full border border-dashed border-[var(--theme-accent-alt)]/30" />

              <div className="fx-sleeve-bottle z-[1] mt-8">
                <div className="fx-sleeve-print">
                  <span className="text-[10px] font-black leading-5 tracking-[.1em]">
                    FULL BODY
                    <br />
                    SHRINK SLEEVE
                    <br />
                    360 BRANDING
                  </span>
                </div>
              </div>

              <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-2 text-[8px] font-bold tracking-[.08em] text-[var(--theme-text-soft)]">
                <span>HEAT</span>
                <ArrowRightIcon className="h-3 w-3 shrink-0 text-[var(--theme-accent)]" />
                <span>CONFORM</span>
                <ArrowRightIcon className="h-3 w-3 shrink-0 text-[var(--theme-accent)]" />
                <span>FINISHED PACK</span>
              </div>
            </div>
          </div>
        </section>

        {/* SLEEVE ADVANTAGES */}
        <section>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel className="mb-3 text-left text-[var(--theme-accent-alt)]">
                Shrink sleeve benefits
              </SectionLabel>
              <h2 className="text-3xl font-medium leading-tight tracking-[-.045em] sm:text-5xl">
                Coverage with <span className="fx-accent">purpose.</span>
              </h2>
            </div>
            <p className="fx-copy max-w-sm text-sm">
              A flexible packaging presentation with space for graphics,
              messaging, and product information.
            </p>
          </div>

          <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {sleeveAdvantages.map(([title, description, Icon], index) => (
              <article key={title} data-flexo-reveal className="border-t border-[var(--theme-border)] py-6">
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 text-[var(--theme-accent)]" />
                  <span className="fx-index opacity-60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-medium">{title}</h3>
                <p className="fx-copy mt-2 text-sm">{description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* END USES */}
        <section>
          <div className="mb-8">
            <SectionLabel className="mb-4 text-left text-[var(--theme-accent-alt)]">
              End-use applications
            </SectionLabel>
            <h2 className="fx-heading text-4xl sm:text-6xl">
              One process.
              <br />
              <span className="fx-accent">Many possibilities.</span>
            </h2>
          </div>

          <div className="grid border-l border-t border-[var(--theme-border)] md:grid-cols-3">
            {endUses.map(([label, title, description]) => (
              <article key={title} data-flexo-reveal className="border-b border-r border-[var(--theme-border)] p-5 sm:p-7 lg:p-8">
                <p className="fx-index">{label}</p>
                <h3 className="mt-8 text-xl font-medium leading-snug">{title}</h3>
                <p className="fx-copy mt-3 text-sm">{description}</p>
                <div className="mt-8 h-[2px] w-12 bg-[var(--theme-accent)]" />
              </article>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section data-flexo-reveal className="relative overflow-hidden border-y border-[var(--theme-border)] py-12 sm:py-16 lg:py-20">
          <span className="pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 select-none text-[190px] font-black leading-none tracking-[-.1em] opacity-[.035] sm:text-[300px]">
            FX
          </span>

          <div className="relative z-[1] grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <SectionLabel className="mb-5 text-left text-[var(--theme-accent-alt)]">
                Printing solutions
              </SectionLabel>
              <h2 className="fx-heading text-4xl sm:text-6xl">
                Efficient.
                <br />
                <span className="fx-accent">Flexible. Scalable.</span>
              </h2>
              <p className="fx-copy mt-6 max-w-2xl sm:text-base">
                Flexographic printing combines efficient production,
                high-quality reproduction, and substrate flexibility for a
                broad range of labeling and promotional requirements.
              </p>
              <div className="mt-8">
                <GradientButton to="/contact" className="h-12 px-6 text-sm font-medium">
                  Discuss your project <ArrowRightIcon className="h-4 w-4" />
                </GradientButton>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-5">
              {[
                [CircleGaugeIcon, "HIGH SPEED", "Fast press production"],
                [GemIcon, "HIGH QUALITY", "Detailed reproduction"],
                [TagIcon, "LABEL READY", "Labels and promotions"],
                [Layers3Icon, "MULTI-VARIANT", "Flexible production"],
              ].map(([Icon, title, description]) => (
                <div key={title} className="border-t border-[var(--theme-border)] py-5">
                  <Icon className="mb-4 h-4 w-4 text-[var(--theme-accent)]" />
                  <p className="text-[10px] font-bold tracking-[.08em]">{title}</p>
                  <p className="mt-2 text-xs leading-5 text-[var(--theme-text-soft)]">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex items-center gap-4 border-t border-[var(--theme-border)] pt-5">
            <span className="h-[2px] w-12 bg-[var(--theme-accent)]" />
            <p className="text-[8px] font-bold tracking-[.2em] text-[var(--theme-text-soft)]">
              FAIRDEAL PRINT PACK INDIA PVT. LTD.
            </p>
            <span className="ml-auto text-[8px] font-bold tracking-[.15em] text-[var(--theme-accent-alt)]">
              FLEXOGRAPHIC PRINTING
            </span>
          </div>
        </section>
      </div>
    </main>
  );
};
