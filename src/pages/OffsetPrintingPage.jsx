
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Award,
  BookOpen,
  Boxes,
  Building2,
  CalendarDays,
  CircleDollarSign,
  Droplet,
  GraduationCap,
  Layers3,
  Package,
  Printer,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Zap,
  MoveUpRight,
} from "lucide-react";

import { ServiceFeatures } from "../components/shared/ServiceFeatures";

gsap.registerPlugin(ScrollTrigger);

const advantages = [
  {
    number: "01",
    Icon: Zap,
    title: "Time, considered.",
    description:
      "A streamlined offset workflow supports reliable turnaround for high-volume press runs.",
    note: "PRODUCTION / SPEED",
  },
  {
    number: "02",
    Icon: CircleDollarSign,
    title: "Cost, optimised.",
    description:
      "Strong unit economics for larger production volumes without compromising print quality.",
    note: "PRODUCTION / VALUE",
  },
  {
    number: "03",
    Icon: SlidersHorizontal,
    title: "Every detail, controlled.",
    description:
      "Planned production schedules and dedicated press capacity help keep jobs on track.",
    note: "PRODUCTION / CONTROL",
  },
  {
    number: "04",
    Icon: Award,
    title: "Quality, maintained.",
    description:
      "Consistent colour reproduction and fine detail across the complete print run.",
    note: "PRODUCTION / QUALITY",
  },
];

const capabilities = [
  ["Brochures and manuals", "Commercial and technical manuals", BookOpen],
  ["Educational books", "High-volume publication printing", GraduationCap],
  ["Folders, inserts and flyers", "Marketing collateral and inserts", Layers3],
  ["Calendars and diaries", "Corporate desk and wall merchandise", CalendarDays],
  ["Paper bags", "Custom-branded paper packaging", ShoppingBag],
  ["Pharma and industrial labels", "Precision compliance labelling", ShieldCheck],
  ["Corporate stationery", "Letterheads, cards and identity supplies", Building2],
  ["Multicolor duplex mono cartons", "Retail duplex carton boxes", Package],
  ["MET PET cartons", "Metalised-film packaging", Layers3],
  ["Corrugation and PP boxes", "Heavy-duty outer shippers and poly boxes", Boxes],
  ["Computer stationery", "Continuous billing forms and computer paper", Printer],
  ["Security holograms", "Anti-counterfeiting holographic seals", ShieldCheck],
];

const finishes = [
  {
    number: "01",
    Icon: Droplet,
    title: "Drip-off UV effects",
    description:
      "Contrasting matte and high-gloss textures in a single press pass for tactile premium depth.",
    descriptor: "MATTE / HIGH GLOSS",
  },
  {
    number: "02",
    Icon: Sparkles,
    title: "Aqueous varnish",
    description:
      "A fast-drying, water-based protective coating for a smooth, anti-scuff finish.",
    descriptor: "PROTECTION / SHEEN",
  },
  {
    number: "03",
    Icon: Package,
    title: "Blister coating",
    description:
      "Specialised heat-seal adhesive varnish for pharmaceutical and retail blister packaging cards.",
    descriptor: "COATING / ADHESION",
  },
];

const qualityPillars = [
  {
    number: "01",
    title: "Global trust",
    text: "Fairdeal Print Pack India Pvt. Ltd. provides offset commercial print services to clients in India and across the globe.",
  },
  {
    number: "02",
    title: "A comprehensive range",
    text: "Our offset capability is designed to match everyday printing needs across a wide range of customers.",
  },
  {
    number: "03",
    title: "Continuous evolution",
    text: "Our offset technology continues to evolve alongside global industry standards.",
  },
];

const inks = [
  { label: "CYAN", value: "C", color: "#00AEEF" },
  { label: "MAGENTA", value: "M", color: "#EC008C" },
  { label: "YELLOW", value: "Y", color: "#FFDF00" },
  { label: "KEY", value: "K", color: "#98A1B1" },
];

const OffsetPrintingPage = ({ service }) => {
  const pageRef = useRef(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const hero = root.querySelector(".op-hero");
      const heroItems = root.querySelectorAll("[data-reveal]");
      const headings = root.querySelectorAll("[data-heading]");
      const staggerGroups = root.querySelectorAll("[data-stagger]");
      const progress = root.querySelector(".op-progress");
      const poster = root.querySelector(".op-poster");
      const orbit = root.querySelector(".op-orbit");

      if (reducedMotion) {
        gsap.set(
          root.querySelectorAll(
            "[data-reveal], [data-heading], [data-stagger] > *"
          ),
          { autoAlpha: 1, clearProps: "transform" }
        );
        return;
      }

      // HERO: smooth entrance sequence
      if (heroItems.length) {
        gsap.fromTo(
          heroItems,
          {
            autoAlpha: 0,
            y: 32,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.13,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: hero,
              start: "top 75%",
              once: true,
            },
          }
        );
      }

      // HEADINGS: reveal as each section enters the viewport
      headings.forEach((element) => {
        gsap.fromTo(
          element,
          {
            autoAlpha: 0,
            y: 35,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      // CARDS AND LIST ITEMS: staggered entrance
      staggerGroups.forEach((group) => {
        const children = Array.from(group.children);

        if (!children.length) return;

        gsap.fromTo(
          children,
          {
            autoAlpha: 0,
            y: 28,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.09,
            ease: "power2.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: group,
              start: "top 84%",
              once: true,
            },
          }
        );
      });

      // SCROLL PROGRESS BAR
      if (progress) {
        gsap.to(progress, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.25,
          },
        });
      }

      // ORBIT: subtle rotation while scrolling through the hero
      if (orbit && hero) {
        gsap.to(orbit, {
          rotation: 35,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // POSTER: subtle vertical parallax
      if (poster && hero) {
        gsap.fromTo(
          poster,
          { y: 0 },
          {
            y: -32,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }

      // FINISHING ROWS: subtle movement on hover is handled by CSS.
      // Refresh trigger positions after the page layout is established.
      ScrollTrigger.refresh();
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main className="op-page" ref={pageRef}>
      <style>{`
        .op-page {
          --fd-bg: #05090B;
          --fd-panel: #0C1419;
          --fd-panel-2: #111B21;
          --fd-yellow: #FFDF00;
          --fd-mint: #8FE7C8;
          --fd-white: #F5F7F8;
          --fd-gray: #98A1B1;
          --fd-muted: #66717E;
          --fd-border: rgba(255,255,255,.08);

          width: 100%;
          max-width: 100%;
          min-width: 0;
          background: var(--fd-bg);
          color: var(--fd-white);
          font-family: Inter, "Segoe UI", Arial, sans-serif;
          overflow-x: clip;
          position: relative;
          isolation: isolate;
        }

        .op-page *,
        .op-page *::before,
        .op-page *::after {
          box-sizing: border-box;
        }

        .op-page a {
          color: inherit;
          text-decoration: none;
        }

        .op-page svg {
          max-width: 100%;
          flex-shrink: 0;
        }

        .op-page .op-wrap {
          width: min(1240px, calc(100% - 64px));
          margin-inline: auto;
        }

        .op-page .op-progress {
          position: absolute;
          z-index: 20;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: var(--fd-yellow);
          transform: scaleX(0);
          transform-origin: left;
          pointer-events: none;
        }

        .op-page .op-micro {
          font-size: 10px;
          letter-spacing: .15em;
          line-height: 1.65;
          font-weight: 700;
          text-transform: uppercase;
        }

        .op-page .op-kicker {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--fd-mint);
        }

        .op-page .op-kicker::before {
          content: "";
          width: 26px;
          min-width: 26px;
          height: 1px;
          background: var(--fd-yellow);
        }

        /* HERO AND TOP SPACING */
        .op-page .op-hero {
          padding: clamp(160px, 15vw, 205px) 0 32px;
          border-bottom: 1px solid var(--fd-border);
          min-height: 0;
        }

        .op-page .op-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, .95fr);
          align-items: center;
          gap: clamp(28px, 5vw, 76px);
        }

        .op-page .op-hero-copy {
          min-width: 0;
        }

        /* REDUCED TITLE SIZE */
        .op-page .op-title {
          font-size: clamp(35px, 6vw, 60px);
          line-height: .94;
          letter-spacing: -.075em;
          font-weight: 650;
          margin: 28px 0;
          overflow-wrap: anywhere;
        }

        .op-page .op-title span {
          display: block;
        }

        .op-page .op-title .op-accent {
          color: var(--fd-yellow);
          padding-left: clamp(12px, 3vw, 42px);
        }

        .op-page .op-intro {
          max-width: 460px;
          color: var(--fd-gray);
          font-size: 14px;
          line-height: 1.9;
          margin: 0;
        }

        .op-page .op-intro strong {
          color: var(--fd-white);
          font-weight: 500;
        }

        .op-page .op-service-features {
          margin-top: 20px;
        }

        .op-page .op-actions {
          display: flex;
          gap: 20px;
          align-items: center;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .op-page .op-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 48px;
          max-width: 100%;
          padding: 12px 18px;
          background: var(--fd-yellow);
          color: var(--fd-bg) !important;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .08em;
          text-align: center;
          text-transform: uppercase;
          transition: background .25s ease, transform .25s ease;
        }

        .op-page .op-button:hover {
          background: var(--fd-mint);
          transform: translateY(-3px);
        }

        .op-page .op-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
        }

        .op-page .op-link svg {
          color: var(--fd-mint);
        }

        /* ABSTRACT PRINT ART */
        .op-page .op-art {
          position: relative;
          min-width: 0;
          min-height: 430px;
          display: grid;
          place-items: center;
        }

        .op-page .op-orbit {
          position: absolute;
          width: min(100%, 420px);
          aspect-ratio: 1;
          border: 1px solid rgba(143,231,200,.22);
          border-radius: 50%;
          pointer-events: none;
        }

        .op-page .op-orbit::before,
        .op-page .op-orbit::after {
          content: "";
          position: absolute;
          inset: 10%;
          border: 1px solid rgba(255,223,0,.24);
          border-radius: 50%;
        }

        .op-page .op-orbit::after {
          inset: 23%;
          border-color: var(--fd-border);
        }

        .op-page .op-poster {
          position: relative;
          width: min(84%, 350px);
          height: clamp(300px, 31vw, 375px);
          padding: 22px;
          background: var(--fd-panel);
          border: 1px solid var(--fd-border);
          overflow: hidden;
          transform: rotate(3deg);
          box-shadow: 0 30px 90px #0008;
          will-change: transform;
        }

        .op-page .op-poster::before {
          content: "";
          position: absolute;
          width: 72%;
          aspect-ratio: 1;
          border-radius: 50%;
          background: var(--fd-yellow);
          right: -20%;
          top: 20%;
        }

        .op-page .op-poster::after {
          content: "";
          position: absolute;
          width: 48%;
          height: 78%;
          background: var(--fd-mint);
          left: -19%;
          bottom: -30%;
          transform: rotate(35deg);
        }

        .op-page .op-poster-top,
        .op-page .op-poster-foot {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          gap: 10px;
          color: var(--fd-gray);
        }

        .op-page .op-poster-top strong {
          color: var(--fd-white);
        }

        .op-page .op-poster-big {
          position: relative;
          z-index: 2;
          margin-top: 55px;
          font-size: clamp(85px, 9vw, 125px);
          line-height: .75;
          font-weight: 900;
          letter-spacing: -.12em;
          color: var(--fd-bg);
          mix-blend-mode: multiply;
        }

        .op-page .op-poster-sub {
          position: relative;
          z-index: 2;
          color: var(--fd-bg);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .16em;
          margin: 18px 0 0 5px;
        }

        .op-page .op-poster-foot {
          position: absolute;
          bottom: 22px;
          left: 22px;
          right: 22px;
          color: var(--fd-bg);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .1em;
        }

        .op-page .op-stamp {
          position: absolute;
          z-index: 3;
          right: 0;
          bottom: 28px;
          border: 1px solid var(--fd-mint);
          border-radius: 50%;
          width: 86px;
          aspect-ratio: 1;
          display: grid;
          place-items: center;
          text-align: center;
          color: var(--fd-mint);
          background: var(--fd-bg);
          font-size: 8px;
          line-height: 1.6;
          letter-spacing: .1em;
          transform: rotate(9deg);
        }

        .op-page .op-hero-foot {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 18px;
          border-top: 1px solid var(--fd-border);
          padding-top: 20px;
          margin-top: 22px;
        }

        .op-page .op-hero-foot p {
          margin: 0;
          color: var(--fd-muted);
          font-size: 10px;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .op-page .op-inks {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .op-page .op-ink {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 9px;
          color: var(--fd-gray);
          letter-spacing: .1em;
        }

        .op-page .op-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }

        /* SHARED SECTIONS */
        .op-page .op-section {
          padding: clamp(72px, 8vw, 104px) 0;
        }

        .op-page .op-head {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, .6fr);
          align-items: end;
          gap: clamp(24px, 5vw, 60px);
          margin-bottom: 48px;
        }

        .op-page .op-heading {
          font-size: clamp(36px, 4.8vw, 62px);
          line-height: 1;
          letter-spacing: -.065em;
          font-weight: 600;
          margin: 20px 0 0;
          overflow-wrap: anywhere;
        }

        .op-page .op-heading em {
          font-style: normal;
          color: var(--fd-mint);
        }

        .op-page .op-aside {
          max-width: 390px;
          margin: 0 0 3px;
          color: var(--fd-gray);
          font-size: 13px;
          line-height: 1.9;
        }

        /* ADVANTAGES */
        .op-page .op-adv-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid var(--fd-border);
          border-bottom: 1px solid var(--fd-border);
        }

        .op-page .op-adv {
          min-width: 0;
          padding: 26px 18px 28px 0;
          min-height: 230px;
        }

        .op-page .op-adv + .op-adv {
          border-left: 1px solid var(--fd-border);
          padding-left: 18px;
        }

        .op-page .op-num {
          color: var(--fd-yellow);
          font-size: 10px;
          letter-spacing: .13em;
        }

        .op-page .op-adv-icon {
          display: block;
          color: var(--fd-mint);
          margin: 26px 0 15px;
        }

        .op-page .op-adv h3 {
          font-size: 16px;
          line-height: 1.45;
          font-weight: 550;
          letter-spacing: -.025em;
          margin: 0 0 10px;
          overflow-wrap: anywhere;
        }

        .op-page .op-adv p {
          font-size: 11px;
          line-height: 1.8;
          color: var(--fd-gray);
          margin: 0;
        }

        .op-page .op-note {
          display: block;
          margin-top: 18px;
          color: var(--fd-muted);
          font-size: 8px;
          letter-spacing: .1em;
          overflow-wrap: anywhere;
        }

        /* QUALITY */
        .op-page .op-quality {
          padding: clamp(65px, 8vw, 90px) 0;
          background: var(--fd-panel);
          border-block: 1px solid var(--fd-border);
        }

        .op-page .op-quality-grid {
          display: grid;
          grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr);
          gap: clamp(28px, 6vw, 70px);
        }

        .op-page .op-quote {
          font-size: clamp(30px, 3.8vw, 49px);
          line-height: 1.12;
          letter-spacing: -.06em;
          font-weight: 550;
          margin: 0;
          max-width: 540px;
        }

        .op-page .op-quote span {
          color: var(--fd-yellow);
        }

        .op-page .op-quality-copy {
          max-width: 480px;
          color: var(--fd-gray);
          font-size: 13px;
          line-height: 1.9;
          margin: 22px 0 0;
        }

        .op-page .op-pillars {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 60px;
          border-top: 1px solid var(--fd-border);
        }

        .op-page .op-pillar {
          min-width: 0;
          padding: 24px 22px 0 0;
        }

        .op-page .op-pillar + .op-pillar {
          border-left: 1px solid var(--fd-border);
          padding-left: 22px;
        }

        .op-page .op-pillar small {
          font-size: 9px;
          letter-spacing: .14em;
          color: var(--fd-yellow);
        }

        .op-page .op-pillar h3 {
          font-size: 16px;
          line-height: 1.5;
          font-weight: 550;
          margin: 18px 0 9px;
        }

        .op-page .op-pillar p {
          color: var(--fd-gray);
          font-size: 11px;
          line-height: 1.8;
          margin: 0;
        }

        /* APPLICATIONS */
        .op-page .op-app-layout {
          display: grid;
          grid-template-columns: minmax(0, .7fr) minmax(0, 1.3fr);
          gap: clamp(30px, 6vw, 70px);
          align-items: start;
        }

        .op-page .op-app-intro {
          position: sticky;
          top: 40px;
          min-width: 0;
        }

        .op-page .op-app-intro p {
          color: var(--fd-gray);
          font-size: 13px;
          line-height: 1.9;
          max-width: 330px;
          margin: 24px 0 0;
        }

        .op-page .op-app-count {
          margin-top: 30px;
          color: var(--fd-muted);
        }

        .op-page .op-app-count::before {
          content: "";
          display: inline-block;
          width: 28px;
          height: 1px;
          background: var(--fd-yellow);
          vertical-align: middle;
          margin-right: 12px;
        }

        .op-page .op-app-list {
          min-width: 0;
          border-top: 1px solid var(--fd-border);
        }

        .op-page .op-app-row {
          display: grid;
          grid-template-columns: 32px minmax(0, 1fr) 24px;
          gap: 14px;
          align-items: center;
          padding: 18px 0;
          border-bottom: 1px solid var(--fd-border);
          transition: padding .25s ease, background .25s ease;
        }

        .op-page .op-app-row:hover {
          padding-left: 8px;
          background: linear-gradient(90deg, #8fe7c80d, transparent);
        }

        .op-page .op-app-row h3 {
          font-size: 14px;
          line-height: 1.5;
          font-weight: 550;
          margin: 0;
          overflow-wrap: anywhere;
        }

        .op-page .op-app-row p {
          font-size: 10px;
          line-height: 1.7;
          color: var(--fd-gray);
          margin: 5px 0 0;
        }

        .op-page .op-app-icon {
          color: var(--fd-mint);
          justify-self: end;
        }

        /* FINISHING */
        .op-page .op-finishing {
          background: var(--fd-panel);
          border-block: 1px solid var(--fd-border);
        }

        .op-page .op-finish-list {
          border-top: 1px solid var(--fd-border);
        }

        .op-page .op-finish {
          display: grid;
          grid-template-columns: 55px minmax(0, .8fr) minmax(0, 1fr) 170px;
          align-items: center;
          gap: 20px;
          padding: 25px 0;
          border-bottom: 1px solid var(--fd-border);
        }

        .op-page .op-finish h3 {
          font-size: 18px;
          line-height: 1.45;
          font-weight: 550;
          letter-spacing: -.035em;
          margin: 0;
          overflow-wrap: anywhere;
        }

        .op-page .op-finish p {
          font-size: 11px;
          line-height: 1.8;
          color: var(--fd-gray);
          margin: 0;
        }

        .op-page .op-finish-label {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 9px;
          text-align: right;
          color: var(--fd-mint);
          font-size: 8px;
          line-height: 1.7;
          letter-spacing: .1em;
          overflow-wrap: anywhere;
        }

        .op-page .op-finishing-foot {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          color: var(--fd-muted);
          margin-top: 24px;
        }

        /* CLOSING CTA */
        .op-page .op-closing {
          padding: clamp(65px, 8vw, 95px) 0 35px;
        }

        .op-page .op-closing-panel {
          position: relative;
          overflow: hidden;
          background: var(--fd-yellow);
          color: var(--fd-bg);
          padding: clamp(28px, 5vw, 65px);
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, .65fr);
          gap: 36px;
          align-items: end;
        }

        .op-page .op-closing-panel::after {
          content: "FP";
    position: absolute;
    right: 17px;
    top: -36px;
    font-size: clamp(180px, 24vw, 320px);
    line-height: 1;
    font-weight: 900;
    letter-spacing: -.13em;
    color: #05090b1c;
    pointer-events: none;
        }

        .op-page .op-closing .op-kicker {
          color: #05090bb3;
        }

        .op-page .op-closing .op-kicker::before {
          background: var(--fd-bg);
        }

        .op-page .op-closing h2 {
          position: relative;
          z-index: 1;
          font-size: clamp(40px, 5.5vw, 68px);
          line-height: .98;
          letter-spacing: -.07em;
          font-weight: 650;
          margin: 22px 0 0;
          overflow-wrap: anywhere;
        }

        .op-page .op-closing h2 span {
          color: var(--fd-panel);
        }

        .op-page .op-closing-copy {
          position: relative;
          z-index: 1;
          min-width: 0;
        }

        .op-page .op-closing-copy p {
          font-size: 13px;
          line-height: 1.85;
          max-width: 320px;
          margin: 0 0 25px;
        }

        .op-page .op-closing .op-button {
          background: var(--fd-bg);
          color: var(--fd-white) !important;
        }

        .op-page .op-closing .op-button:hover {
          background: var(--fd-panel-2);
        }

        .op-page .op-footer {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px 20px;
          padding-top: 20px;
          color: var(--fd-muted);
        }

        /* TABLETS */
        @media (max-width: 1024px) {
          .op-page .op-wrap {
            width: calc(100% - 48px);
          }

          .op-page .op-hero {
            padding-top: 150px;
          }

          .op-page .op-hero-grid {
            grid-template-columns: minmax(0, 1fr) minmax(0, .85fr);
            gap: 24px;
          }

          .op-page .op-title {
            font-size: clamp(46px, 6vw, 66px);
          }

          .op-page .op-art {
            min-height: 360px;
          }

          .op-page .op-adv-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .op-page .op-adv {
            padding: 24px !important;
            min-height: 210px;
          }

          .op-page .op-adv:nth-child(odd) {
            border-left: 0;
            padding-left: 0 !important;
          }

          .op-page .op-adv:nth-child(even) {
            border-left: 1px solid var(--fd-border);
          }

          .op-page .op-adv:nth-child(n + 3) {
            border-top: 1px solid var(--fd-border);
          }

          .op-page .op-finish {
            grid-template-columns: 42px minmax(0, .9fr) minmax(0, 1.1fr);
            gap: 16px;
          }

          .op-page .op-finish-label {
            grid-column: 2 / -1;
            justify-content: flex-start;
            text-align: left;
          }
        }

        /* SMALL LAPTOPS AND TABLETS */
        @media (max-width: 768px) {
          .op-page .op-wrap {
            width: calc(100% - 40px);
          }

          .op-page .op-hero {
            padding-top: 130px;
          }

          .op-page .op-hero-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 22px;
          }

          .op-page .op-hero-copy {
            max-width: 640px;
          }

          .op-page .op-title {
            font-size: clamp(50px, 8vw, 68px);
            margin: 22px 0;
          }

          .op-page .op-intro {
            max-width: 600px;
          }

          .op-page .op-art {
            min-height: 360px;
          }

          .op-page .op-poster {
            width: min(78%, 330px);
            height: 330px;
          }

          .op-page .op-poster-big {
            font-size: 110px;
          }

          .op-page .op-head {
            grid-template-columns: minmax(0, 1fr);
            gap: 20px;
            margin-bottom: 34px;
          }

          .op-page .op-aside {
            max-width: 600px;
          }

          .op-page .op-quality-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 28px;
          }

          .op-page .op-app-layout {
            grid-template-columns: minmax(0, 1fr);
            gap: 30px;
          }

          .op-page .op-app-intro {
            position: static;
          }

          .op-page .op-app-intro p {
            max-width: 600px;
          }

          .op-page .op-closing-panel {
            grid-template-columns: minmax(0, 1fr);
            gap: 26px;
          }
        }

        /* MOBILE */
        @media (max-width: 480px) {
          .op-page .op-wrap {
            width: calc(100% - 32px);
          }

          .op-page .op-hero {
            padding-top: 115px;
            padding-bottom: 24px;
          }

          .op-page .op-title {
            font-size: clamp(44px, 11.5vw, 56px);
            line-height: .98;
            letter-spacing: -.065em;
            margin: 22px 0;
          }

          .op-page .op-title .op-accent {
            padding-left: 10px;
          }

          .op-page .op-kicker {
            gap: 8px;
            font-size: 8px;
          }

          .op-page .op-kicker::before {
            width: 20px;
            min-width: 20px;
          }

          .op-page .op-intro {
            font-size: 12px;
            line-height: 1.85;
          }

          .op-page .op-actions {
            align-items: flex-start;
            flex-direction: column;
            gap: 15px;
          }

          .op-page .op-button {
            min-height: 45px;
            padding: 11px 14px;
            font-size: 9px;
          }

          .op-page .op-art {
            min-height: 300px;
          }

          .op-page .op-orbit {
            width: min(100%, 290px);
          }

          .op-page .op-poster {
            width: min(80%, 270px);
            height: 265px;
            padding: 15px;
          }

          .op-page .op-poster-top {
            font-size: 7px;
            letter-spacing: .08em;
          }

          .op-page .op-poster-big {
            font-size: 90px;
            margin-top: 40px;
          }

          .op-page .op-poster-sub {
            font-size: 9px;
            margin-top: 14px;
          }

          .op-page .op-poster-foot {
            left: 15px;
            right: 15px;
            bottom: 15px;
            font-size: 6px;
          }

          .op-page .op-stamp {
            width: 65px;
            right: -2px;
            bottom: 14px;
            font-size: 6px;
          }

          .op-page .op-hero-foot {
            align-items: flex-start;
            flex-direction: column;
            gap: 13px;
          }

          .op-page .op-hero-foot p {
            font-size: 9px;
          }

          .op-page .op-inks {
            gap: 9px;
          }

          .op-page .op-ink {
            font-size: 8px;
          }

          .op-page .op-section {
            padding: 58px 0;
          }

          .op-page .op-heading {
            font-size: clamp(34px, 9vw, 44px);
          }

          .op-page .op-aside {
            font-size: 12px;
          }

          .op-page .op-adv-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .op-page .op-adv {
            min-height: 0;
            padding: 18px 10px !important;
          }

          .op-page .op-adv h3 {
            font-size: 13px;
          }

          .op-page .op-adv p {
            font-size: 10px;
          }

          .op-page .op-adv-icon {
            margin: 19px 0 12px;
          }

          .op-page .op-note {
            font-size: 7px;
            line-height: 1.6;
          }

          .op-page .op-quality {
            padding: 58px 0;
          }

          .op-page .op-quote {
            font-size: clamp(29px, 8.5vw, 36px);
          }

          .op-page .op-quality-copy {
            font-size: 12px;
          }

          .op-page .op-pillars {
            grid-template-columns: minmax(0, 1fr);
            margin-top: 35px;
          }

          .op-page .op-pillar,
          .op-page .op-pillar + .op-pillar {
            padding: 19px 0;
            border-left: 0;
            border-bottom: 1px solid var(--fd-border);
          }

          .op-page .op-pillar h3 {
            font-size: 15px;
          }

          .op-page .op-app-row {
            grid-template-columns: 24px minmax(0, 1fr) 19px;
            gap: 8px;
            padding: 15px 0;
          }

          .op-page .op-app-row:hover {
            padding-left: 3px;
          }

          .op-page .op-app-row h3 {
            font-size: 12px;
          }

          .op-page .op-app-row p {
            font-size: 10px;
          }

          .op-page .op-app-icon {
            width: 16px;
            height: 16px;
          }

          .op-page .op-app-count {
            font-size: 8px;
          }

          .op-page .op-finish {
            grid-template-columns: 27px minmax(0, 1fr) 20px;
            gap: 8px;
            padding: 19px 0;
          }

          .op-page .op-finish h3 {
            font-size: 14px;
          }

          .op-page .op-finish p {
            grid-column: 2 / -1;
            font-size: 10px;
          }

          .op-page .op-finish-label {
            grid-column: 2 / -1;
            font-size: 7px;
          }

          .op-page .op-finishing-foot {
            flex-direction: column;
            gap: 8px;
            font-size: 8px;
          }

          .op-page .op-closing {
            padding-top: 52px;
          }

          .op-page .op-closing-panel {
            padding: 27px 18px;
            gap: 25px;
          }

          .op-page .op-closing h2 {
            font-size: clamp(36px, 10vw, 47px);
          }

          .op-page .op-closing-copy p {
            font-size: 12px;
          }

          .op-page .op-footer {
            flex-direction: column;
            gap: 8px;
            font-size: 8px;
            line-height: 1.7;
          }
        }

        /* EXTRA SMALL PHONES */
        @media (max-width: 350px) {
          .op-page .op-wrap {
            width: calc(100% - 24px);
          }

          .op-page .op-hero {
            padding-top: 100px;
          }

          .op-page .op-title {
            font-size: 40px;
          }

          .op-page .op-adv {
            padding: 15px 7px !important;
          }

          .op-page .op-adv h3 {
            font-size: 12px;
          }

          .op-page .op-adv p {
            font-size: 9px;
          }

          .op-page .op-poster {
            width: 83%;
          }

          .op-page .op-stamp {
            width: 58px;
          }

          .op-page .op-inks {
            gap: 7px;
          }

          .op-page .op-ink {
            font-size: 7px;
          }

          .op-page .op-finish {
            grid-template-columns: 23px minmax(0, 1fr) 17px;
            gap: 6px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .op-page *,
          .op-page *::before,
          .op-page *::after {
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <div className="op-progress" aria-hidden="true" />

      {/* HERO */}
      <section className="op-hero">
        <div className="op-wrap">
          <div className="op-hero-grid">
            <div className="op-hero-copy">
              <div className="op-kicker op-micro" data-reveal>
                Commercial print / Offset division
              </div>

              <h1 className="op-title" data-reveal>
                <span>Offset</span>
                <span className="op-accent">Printing,</span>
                <span>refined.</span>
              </h1>

              <p className="op-intro" data-reveal>
                Print with purpose. From commercial publications to packaging,
                our offset printing capabilities bring together{" "}
                <strong>
                  precision, consistency and considered production planning.
                </strong>
                {service?.description ? ` ${service.description}` : ""}
              </p>

              {service?.features?.length > 0 && (
                <div className="op-service-features" data-reveal>
                  <ServiceFeatures features={service.features} />
                </div>
              )}

              <div className="op-actions" data-reveal>
                <a className="op-button" href="#op-applications">
                  Explore applications <ArrowRight size={15} />
                </a>

                <a className="op-link" href="/contact">
                  Discuss a project <MoveUpRight size={16} />
                </a>
              </div>
            </div>

            <div
              className="op-art"
              data-reveal
              role="img"
              aria-label="Abstract offset print colour artwork"
            >
              <div className="op-orbit" aria-hidden="true" />

              <div className="op-poster">
                <div className="op-poster-top op-micro">
                  <strong>FAIRDEAL / PRINT LAB</strong>
                  <span>EST. 1990</span>
                </div>

                <div className="op-poster-big">04</div>
                <div className="op-poster-sub">COLOUR LOGIC</div>

                <div className="op-poster-foot">
                  <span>INK / PAPER / IMPACT</span>
                  <span>FP—001</span>
                </div>
              </div>

              <div className="op-stamp op-micro">
                MADE WITH
                <br />
                PRECISION
                <br />
                ✳ FAIRDEAL
              </div>
            </div>
          </div>

          <div className="op-hero-foot">
            <p>Every impression has a purpose.</p>

            <div className="op-inks" aria-label="CMYK printing colours">
              {inks.map((ink) => (
                <span className="op-ink" key={ink.value}>
                  <i
                    className="op-dot"
                    style={{ background: ink.color }}
                  />
                  {ink.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="op-section">
        <div className="op-wrap">
          <div className="op-head">
            <div data-heading>
              <div className="op-kicker op-micro">
                01 / The advantage
              </div>

              <h2 className="op-heading">
                Good printing.
                <br />
                <em>Thought through.</em>
              </h2>
            </div>

            <p className="op-aside" data-heading>
              The right process makes a difference at every stage — from
              preparing a job and managing quantities to delivering consistent
              results across the final run.
            </p>
          </div>

          <div className="op-adv-grid" data-stagger>
            {advantages.map(
              ({ number, Icon, title, description, note }) => (
                <article className="op-adv" key={number}>
                  <span className="op-num">{number} / 04</span>
                  <Icon
                    className="op-adv-icon"
                    size={23}
                    strokeWidth={1.4}
                  />
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="op-note">{note}</span>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="op-quality">
        <div className="op-wrap">
          <div className="op-quality-grid">
            <blockquote className="op-quote" data-heading>
              “Small details make a <span>lasting impression.</span>”
            </blockquote>

            <div data-heading>
              <div className="op-kicker op-micro">
                Our point of view
              </div>

              <p className="op-quality-copy">
                A print job is more than ink on paper. It is how a product
                communicates, how a brand is recognised and how information
                reaches the people it is made for.
              </p>

              <div className="op-kicker op-micro" style={{ marginTop: 28 }}>
                Quality / Consistency / Craft
              </div>
            </div>
          </div>

          <div className="op-pillars" data-stagger>
            {qualityPillars.map((pillar) => (
              <article className="op-pillar" key={pillar.number}>
                <small>{pillar.number} / PRINCIPLE</small>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section id="op-applications" className="op-section">
        <div className="op-wrap">
          <div className="op-app-layout">
            <div className="op-app-intro" data-heading>
              <div className="op-kicker op-micro">
                02 / Applications
              </div>

              <h2 className="op-heading">
                One process.
                <br />
                <em>Many formats.</em>
              </h2>

              <p>
                From everyday corporate print to specialised packaging,
                explore the formats covered by our offset printing
                capabilities.
              </p>

              <div className="op-app-count op-micro">
                Our capabilities / 12 formats
              </div>
            </div>

            <div className="op-app-list" data-stagger>
              {capabilities.map(([title, description, Icon], index) => (
                <article className="op-app-row" key={title}>
                  <span className="op-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>

                  <Icon
                    className="op-app-icon"
                    size={19}
                    strokeWidth={1.4}
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINISHING */}
      <section className="op-section op-finishing">
        <div className="op-wrap">
          <div className="op-head">
            <div data-heading>
              <div className="op-kicker op-micro">
                03 / Finishing
              </div>

              <h2 className="op-heading">
                The surface
                <br />
                <em>matters.</em>
              </h2>
            </div>

            <p className="op-aside" data-heading>
              Finishing adds protection, contrast and character to a printed
              piece. Choose the right treatment to support the look and
              function of the final product.
            </p>
          </div>

          <div className="op-finish-list" data-stagger>
            {finishes.map(
              ({ number, Icon, title, description, descriptor }) => (
                <article className="op-finish" key={number}>
                  <span className="op-num">{number} / 03</span>

                  <h3>{title}</h3>

                  <p>{description}</p>

                  <div className="op-finish-label">
                    <Icon size={19} strokeWidth={1.4} />
                    <span>{descriptor}</span>
                  </div>
                </article>
              )
            )}
          </div>

          <div className="op-finishing-foot op-micro">
            <span>Finish is more than appearance.</span>
            <span>Protection, tactility and purpose.</span>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="op-closing">
        <div className="op-wrap">
          <div className="op-closing-panel">
            <div data-heading>
              <div className="op-kicker op-micro">
                04 / Start a conversation
              </div>

              <h2>
                Let’s make
                <br />
                something <span>lasting.</span>
              </h2>
            </div>

            <div className="op-closing-copy" data-heading>
              <p>
                Have a print requirement in mind? Let’s discuss the format,
                quantity and finish that work for your project.
              </p>

              <a className="op-button" href="/contact">
                Contact our team <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <div className="op-footer op-micro">
            <span>FAIRDEAL PRINT PACK INDIA PVT. LTD.</span>
            <span>PRECISION IN EVERY IMPRESSION · FP / OFFSET</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export { OffsetPrintingPage };
export default OffsetPrintingPage;
