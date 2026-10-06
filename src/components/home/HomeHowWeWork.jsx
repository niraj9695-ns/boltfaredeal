import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, CircleArrowOutUpRight } from "lucide-react";

// Adjust this path if your folder depth is different.
import globeAsset from "../../assets/images/Halftone Globe Handshake Emblem.png";

const steps = [
  {
    number: "01",
    title: "Understand & Plan",
    description:
      "We understand your requirements, budget and specifications to plan the right solution.",
    // Planning desk image for the discovery and planning step.
    image:
      "https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageAlt: "Creative planning workspace with color samples",
    position: "one",
    side: "left",
  },
  {
    number: "02",
    title: "Design & Prepare",
    description:
      "Our team works on artwork, material selection and a process checklist to ensure every detail is ready for production.",
    // Artwork-on-screen image for design and preparation.
    image:
      "https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageAlt: "Colorful artwork on a desktop monitor",
    position: "two",
    side: "right",
  },
  {
    number: "03",
    title: "Print & Produce",
    description:
      "Using advanced printing technology, we produce with precision, maintaining high quality at every stage.",
    // Printed material image for production.
    image:
      "https://images.pexels.com/photos/33952994/pexels-photo-33952994.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageAlt: "Close view of vivid printing material",
    position: "three",
    side: "right",
  },
  {
    number: "04",
    title: "Finish & Deliver",
    description:
      "Final finishing, quality checks and secure packaging ensure timely delivery to your location.",
    // Packed shipment image for finishing and delivery.
    image:
      "https://images.pexels.com/photos/11356987/pexels-photo-11356987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageAlt: "Packed boxes ready for delivery",
    position: "four",
    side: "left",
  },
];

const MOBILE_BREAKPOINT = 900;

const styles = `
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=IBM+Plex+Mono:wght@400;500&display=swap");

.hww {
  --bg: #050607;
  --gold: #e8d733;
  --gold-dim: #8a8226;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  height: 200vh;
  background: var(--bg);
  color: #fbfbfb;
  font-family: "Lato", system-ui, sans-serif;
}

/* ---------- Sticky stage ---------- */
.hww-stage {
  position: sticky;
  top: 0;
  height: 100vh;
  height: 100svh;
  overflow: hidden;
  background:
    radial-gradient(60% 55% at 50% 52%, rgba(24, 70, 78, 0.18), transparent 70%),
    var(--bg);
}
.hww-stage::before {
  /* faint centre line */
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(180deg, transparent, rgba(232, 215, 51, 0.14) 30%, rgba(232, 215, 51, 0.14) 70%, transparent);
  pointer-events: none;
}

/* ---------- Heading ---------- */
.hww-heading {
  position: absolute;
  top: 5vh;
  left: 0;
  right: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 24px;
}
.hww-title-row {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hww-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 4px;
  white-space: nowrap;
  font-family: "Lato", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #f7d51d;
  opacity: 0;
  transition: opacity 1s var(--ease) 0.2s;
}
.hww-eyebrow::before {
  content: "";
  width: 8px;
  height: 8px;
  flex: none;
  border-radius: 50%;
  background: #f7d51d;
}
.hww-title {
  margin: 0;
  font-size: clamp(2.25rem, 4.5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.025em;
  color: #fff;
}
.hww-word:nth-child(2) { color: #92e3c3; }
.hww-word {
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
  padding: 0 0.05em 0.16em;
  margin-bottom: -0.16em;
}
.hww-word > span {
  display: inline-block;
  transform: translateY(108%);
  transition: transform 1.1s var(--ease);
}
.hww-word:nth-child(2) > span { transition-delay: 0.12s; }
.hww-sub {
  margin: 10px 0 0;
  max-width: 300px;
  font-size: 0.9rem;
  line-height: 1.55;
  color: rgba(251, 251, 251, 0.62);
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.9s var(--ease) 0.5s, transform 0.9s var(--ease) 0.5s;
}

/* ---------- Globe ---------- */
.hww-globe {
  position: absolute;
  left: 50%;
  top: 52%;
  z-index: 1;
  width: clamp(240px, 50svh, 520px);
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
}
.hww-globe-inner {
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: scale(0.82);
  transition: opacity 1.2s var(--ease) 0.3s, transform 1.4s var(--ease) 0.3s;
}
.hww-tilt {
  position: absolute;
  inset: 0;
  transform: rotate(var(--tilt, 0deg));
  transition: transform 1.4s var(--ease);
}
.hww-glow {
  position: absolute;
  inset: -22%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(36, 200, 190, 0.24) 0%, rgba(20, 90, 140, 0.1) 40%, transparent 66%);
  animation: hww-breathe 6s ease-in-out infinite;
}
.hww-globe-art {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 36px rgba(30, 150, 255, 0.28));
  animation: hww-float 9s ease-in-out infinite;
}
.hww-orbit {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(232, 215, 51, 0.2);
  pointer-events: none;
}
.hww-orbit::after {
  content: "";
  position: absolute;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--gold);
  box-shadow: 0 0 12px 2px rgba(232, 215, 51, 0.55);
}
.hww-orbit.one   { inset: -14%; animation: hww-spin 70s linear infinite; }
.hww-orbit.one::after { top: 8%; left: 21%; }
.hww-orbit.two   { inset: -20% -26%; border-color: rgba(232, 215, 51, 0.12); animation: hww-spin 110s linear infinite reverse; }
.hww-orbit.two::after { top: 20%; left: 2%; width: 7px; height: 7px; }
.hww-orbit.three { inset: -8% -2%; border-color: rgba(232, 215, 51, 0.1); animation: hww-spin 90s linear infinite; }
.hww-orbit.three::after { bottom: 14%; right: 12%; }
.hww-fallback { width: 100%; height: 100%; }

/* ---------- Steps ---------- */
.hww-step {
  --num: #6a6a6a;
  --title: var(--gold-dim);
  --desc: #6f6f6f;
  --rule: rgba(138, 130, 38, 0.6);
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  gap: 26px;
  opacity: 0;
  transform: translateY(26px);
  transition: opacity 0.9s var(--ease), transform 0.9s var(--ease);
  transition-delay: calc(0.5s + var(--i) * 0.12s);
}
.hww-step.is-active {
  --title: var(--gold);
  --desc: #d6d6d6;
  --rule: var(--gold);
}
.hww-copy {
  transition: transform 0.6s var(--ease);
  transform-origin: left top;
}
.hww-step.is-active .hww-copy { transform: scale(1.04); }
.hww-step.pos-two .hww-copy,
.hww-step.pos-three .hww-copy { transform-origin: right top; }
.hww-step.pos-one   { top: 23%;    left: 7%;  }
.hww-step.pos-four  { bottom: 14%; left: 7%;  }
.hww-step.pos-two   { top: 23%;    right: 7%; flex-direction: row-reverse; text-align: right; }
.hww-step.pos-three { bottom: 14%; right: 7%; flex-direction: row-reverse; text-align: right; }
.hww-step.pos-one, .hww-step.pos-four { --num: #8fe0a4; }
.hww-step.pos-two, .hww-step.pos-three { --num: #42d8d2; }

.hww-copy { width: 272px; }
.hww-num {
  display: block;
  font-size: clamp(2.8rem, 4.2vw, 4.2rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.06em;
  color: var(--num);
  transition: color 0.6s ease;
}
.hww-step-title {
  margin: 6px 0 0;
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: -0.04em;
  color: rgba(255, 255, 255, 0.52);
  transition: color 0.6s ease, font-size 0.6s var(--ease), font-weight 0.6s ease;
}
.hww-step.is-active .hww-step-title {
  font-size: 1.55rem;
  font-weight: 700;
  color: #fff;
}
.hww-rule {
  width: 108px;
  height: 1px;
  margin: 12px 0 14px;
  background: var(--rule);
  transform-origin: left center;
  transition: background 0.6s ease, transform 0.8s var(--ease);
  transform: scaleX(0.45);
}
.hww-step.is-active .hww-rule { transform: scaleX(1); }
.pos-two .hww-rule, .pos-three .hww-rule { margin-left: auto; transform-origin: right center; }
.hww-desc {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--desc);
  transition: color 0.6s ease;
}

/* image circle */
.hww-thumb {
  position: relative;
  flex: none;
  width: 104px;
  height: 104px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: none;
  cursor: pointer;
}
/*
.hww-thumb::before {
  content: "";
  position: absolute;
  inset: -9px;
  border-radius: 50%;
  border: 1px solid rgba(232, 215, 51, 0.18);
  transition: border-color 0.6s ease, transform 0.8s var(--ease);
}
.hww-step.is-active .hww-thumb::before {
  border-color: rgba(232, 215, 51, 0.5);
  transform: scale(1.04);
}
*/
.hww-thumb img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  /* border: 2px solid var(--gold-dim); */
  filter: grayscale(1) brightness(0.55);
  transform: scale(0.94);
  transition: filter 0.7s ease, transform 0.8s var(--ease), border-color 0.6s ease;
}
.hww-step.is-active .hww-thumb img {
  filter: none;
  transform: scale(1);
  /* border-color: var(--gold); */
}
.hww-node {
  position: absolute;
  top: 50%;
  width: 12px;
  height: 12px;
  margin-top: -6px;
  border-radius: 50%;
  background: var(--gold-dim);
  box-shadow: 0 0 0 3px var(--bg);
  transition: background 0.5s ease, box-shadow 0.5s ease;
}
.pos-one .hww-node, .pos-four .hww-node { right: -6px; }
.pos-two .hww-node, .pos-three .hww-node { left: -6px; }
.hww-step.is-active .hww-node {
  background: var(--gold);
  box-shadow: 0 0 0 3px var(--bg), 0 0 14px 3px rgba(232, 215, 51, 0.6);
}
.hww-thumb:focus-visible { outline: 2px solid var(--gold); outline-offset: 10px; }

/* ---------- Footer bits ---------- */
.hww-status {
  position: absolute;
  left: 50%;
  bottom: 4.5vh;
  z-index: 3;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: "IBM Plex Mono", ui-monospace, monospace;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(251, 251, 251, 0.55);
  white-space: nowrap;
}
.hww-status svg { color: var(--gold); }
.hww-dots { display: inline-flex; align-items: center; gap: 6px; }
.hww-dot {
  width: 5px;
  height: 5px;
  padding: 0;
  border: 0;
  border-radius: 9999px;
  background: rgba(251, 251, 251, 0.3);
  cursor: pointer;
  transition: width 0.4s var(--ease), background 0.4s ease;
}
.hww-dot.is-current { width: 18px; background: var(--gold); }
.hww-dot:focus-visible { outline: 2px solid var(--gold); outline-offset: 4px; }

.hww-foot {
  position: absolute;
  right: 7%;
  bottom: 4.5vh;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "IBM Plex Mono", ui-monospace, monospace;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(251, 251, 251, 0.4);
}

/* ---------- Reveal state ---------- */
.hww.is-visible .hww-eyebrow { opacity: 1; }
.hww.is-visible .hww-word > span { transform: translateY(0); }
.hww.is-visible .hww-sub { opacity: 1; transform: none; }
.hww.is-visible .hww-globe-inner { opacity: 1; transform: scale(1); }
.hww.is-visible .hww-step { opacity: 1; transform: none; }
.hww.is-visible .hww-step:not(.is-active) { opacity: 0.52; }

/* ---------- Keyframes ---------- */
@keyframes hww-spin    { to { transform: rotate(360deg); } }
@keyframes hww-float   { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
@keyframes hww-breathe { 0%, 100% { opacity: 0.75; transform: scale(1); } 50% { opacity: 1; transform: scale(1.06); } }

/* ---------- Tablet & mobile: normal flow, no pinning ---------- */
@media (max-width: ${MOBILE_BREAKPOINT}px) {
  .hww { height: auto; }
  .hww-stage { position: relative; height: auto; overflow: visible; padding: 88px 24px 64px; }
  .hww-stage::before { display: none; }
  .hww-heading { position: static; padding: 0; }
  .hww-eyebrow { margin: 0 0 4px; }
  .hww-title-row { display: flex; flex-direction: column; align-items: center; }
  .hww-globe { position: relative; left: auto; top: auto; transform: none; width: min(78vw, 360px); margin: 48px auto; }
  .hww-step-list { display: grid; gap: 40px; max-width: 520px; margin: 0 auto; }
  .hww-step,
  .hww-step.pos-one, .hww-step.pos-two, .hww-step.pos-three, .hww-step.pos-four {
    position: static;
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
    --title: var(--gold); --desc: #d6d6d6; --rule: var(--gold);
  }
  .hww-copy {
    display: grid;
    width: auto;
    flex: 1;
    grid-template-columns: max-content minmax(0, 1fr);
    column-gap: 14px;
    align-items: start;
    transform: none;
  }
  .hww-step.is-active .hww-copy { transform: none; }
  .hww-num {
    grid-column: 1;
    grid-row: 1 / span 3;
    font-size: clamp(2.1rem, 9vw, 2.75rem);
  }
  .hww-step-title { grid-column: 2; margin-top: 0; }
  .hww-rule { grid-column: 2; width: 100%; max-width: 108px; margin: 12px 0 14px; }
  .hww-desc { grid-column: 2; }
  .pos-two .hww-rule, .pos-three .hww-rule { margin-left: 0; transform-origin: left center; }
  .hww-rule { transform: none; }
  .hww-thumb { display: none; }
  .hww-thumb img { filter: none; transform: none; border-color: var(--gold); }
  .pos-one .hww-node, .pos-four .hww-node { right: auto; left: -6px; }
  .hww-status { display: none; }
  .hww-foot { position: static; justify-content: center; margin-top: 48px; }
}

/* ---------- Reduced motion ---------- */
@media (prefers-reduced-motion: reduce) {
  .hww *, .hww *::before, .hww *::after {
    animation: none !important;
    transition: none !important;
  }
  .hww-eyebrow, .hww-sub, .hww-step, .hww-globe-inner { opacity: 1; transform: none; }
  .hww-word > span { transform: none; }
  .hww-globe-inner { transform: none; }
}
`;

function FallbackGlobe() {
  return (
    <svg
      className="hww-fallback"
      viewBox="0 0 100 100"
      role="img"
      aria-label="Colorful dotted globe"
    >
      <defs>
        <radialGradient id="hwwShade" cx="34%" cy="28%" r="76%">
          <stop offset="0" stopColor="#273f43" />
          <stop offset="0.65" stopColor="#071419" />
          <stop offset="1" stopColor="#020607" />
        </radialGradient>
        <linearGradient id="hwwWaveOne" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e9ff31" />
          <stop offset="1" stopColor="#2ddcc8" />
        </linearGradient>
        <linearGradient id="hwwWaveTwo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#54edff" />
          <stop offset="1" stopColor="#1165ff" />
        </linearGradient>
        <pattern id="hwwDots" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="1.2" cy="1.2" r=".65" fill="#96f6e8" opacity=".7" />
        </pattern>
        <clipPath id="hwwClip">
          <circle cx="50" cy="50" r="40" />
        </clipPath>
      </defs>
      <circle cx="50" cy="50" r="40" fill="url(#hwwShade)" stroke="#5ee6e1" strokeOpacity=".3" />
      <g clipPath="url(#hwwClip)">
        <path d="M-4 22 Q24 3 56 20 T106 17 L106 39 Q76 29 50 39 T-4 39Z" fill="url(#hwwWaveOne)" opacity=".95" />
        <path d="M-4 39 Q22 26 49 42 T106 38 L106 57 Q78 51 51 58 T-4 58Z" fill="url(#hwwWaveTwo)" opacity=".9" />
        <path d="M-4 58 Q23 45 49 62 T106 56 L106 79 Q75 68 48 79 T-4 79Z" fill="#1db9ef" opacity=".82" />
        <circle cx="50" cy="50" r="40" fill="url(#hwwDots)" opacity=".55" />
      </g>
      <circle cx="50" cy="50" r="40" fill="none" stroke="#d7fff2" strokeOpacity=".35" />
    </svg>
  );
}

export const HomeHowWeWork = ({ globeImage = globeAsset }) => {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [globeFailed, setGlobeFailed] = useState(false);

  // Active step follows scroll progress through the pinned section
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section || window.innerWidth <= MOBILE_BREAKPOINT) return;

      const scrollable = Math.max(1, section.offsetHeight - window.innerHeight);
      const distance = -section.getBoundingClientRect().top;
      const progress = Math.min(0.999, Math.max(0, distance / scrollable));
      setActiveStep(Math.min(steps.length - 1, Math.floor(progress * steps.length + 0.6)));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Play the entrance once, when the section first comes into view
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Click a circle or dot to scroll to that step
  const goToStep = useCallback((index) => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.innerWidth <= MOBILE_BREAKPOINT) return;

    const top = section.getBoundingClientRect().top + window.scrollY;
    const scrollable = section.offsetHeight - window.innerHeight;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: top + (index / steps.length) * scrollable,
      behavior: reduce ? "auto" : "smooth",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-we-work"
      className={`hww ${isVisible ? "is-visible" : ""}`}
      aria-labelledby="hww-title"
    >
      <style>{styles}</style>

      <div className="hww-stage">
        {/* Heading */}
        <div className="hww-heading">
          <div className="hww-title-row">
            <span className="hww-eyebrow">How we work</span>
            <h2 className="hww-title" id="hww-title">
              <span className="hww-word"><span>Our</span></span>{" "}
              <span className="hww-word"><span>process</span></span>
            </h2>
          </div>
          <p className="hww-sub">
            From first thought to final delivery, every detail has a purpose.
          </p>
        </div>

        {/* Globe */}
        <div className="hww-globe">
          <div className="hww-globe-inner">
            <div className="hww-glow" aria-hidden="true" />
            <div className="hww-orbit one" aria-hidden="true" />
            <div className="hww-orbit two" aria-hidden="true" />
            <div className="hww-orbit three" aria-hidden="true" />
            <div className="hww-tilt" style={{ "--tilt": `${activeStep * -7}deg` }}>
              {globeFailed ? (
                <FallbackGlobe />
              ) : (
                <img
                  className="hww-globe-art"
                  src={globeImage}
                  alt="Colorful halftone globe emblem"
                  onError={() => setGlobeFailed(true)}
                />
              )}
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="hww-step-list">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className={`hww-step pos-${step.position} ${index === activeStep ? "is-active" : ""}`}
              style={{ "--i": index }}
              aria-current={index === activeStep ? "step" : undefined}
            >
              <div className="hww-copy">
                <span className="hww-num">{step.number}</span>
                <h3 className="hww-step-title">{step.title}</h3>
                <div className="hww-rule" />
                <p className="hww-desc">{step.description}</p>
              </div>
              <button
                type="button"
                className="hww-thumb"
                onClick={() => goToStep(index)}
                aria-label={`Go to step ${step.number}: ${step.title}`}
              >
                {/* <img src={step.image} alt={step.imageAlt} loading="lazy" /> */}
                {/* <span className="hww-node" aria-hidden="true" /> */}
              </button>
            </article>
          ))}
        </div>

        {/* Progress + footer */}
        <div className="hww-status">
          <CircleArrowOutUpRight size={17} aria-hidden="true" />
          <span>Scroll to explore</span>
          <span className="hww-dots">
            {steps.map((step, index) => (
              <button
                type="button"
                key={step.number}
                className={`hww-dot ${index === activeStep ? "is-current" : ""}`}
                onClick={() => goToStep(index)}
                aria-label={`Show step ${step.number}`}
              />
            ))}
          </span>
        </div>
        {/* <div className="hww-foot">
          <span>Built with intention</span>
          <ArrowUpRight size={15} aria-hidden="true" />
        </div> */}
      </div>
    </section>
  );
};

export default HomeHowWeWork;