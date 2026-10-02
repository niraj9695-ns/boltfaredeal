import { ArrowRight, Play } from "lucide-react";

/**
 * Fairdeal hero section
 * - Full screen height (100vh, with 100svh for mobile browsers)
 * - Font: Lato (loaded below via Google Fonts)
 * - Animations: image slow zoom, eyebrow tracking, masked line reveals,
 *   gradient sheen on the headline, soft pulse on the play button.
 * - All animations are disabled when the user prefers reduced motion.
 */

const heroStyles = `
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap");

.hero-section {
  font-family: "Lato", system-ui, sans-serif;
  height: 100vh;
  height: 100svh;
  min-height: 600px;
}

/* ---------- Background ---------- */
.hero-media {
  animation: hero-zoom 14s cubic-bezier(0.22, 1, 0.36, 1) both;
  transform-origin: 70% 50%;
}
.hero-overlay {
  background:
    linear-gradient(90deg, rgba(4, 9, 13, 0.88) 0%, rgba(4, 9, 13, 0.6) 38%, rgba(4, 9, 13, 0.1) 75%),
    linear-gradient(180deg, rgba(4, 9, 13, 0.55) 0%, rgba(4, 9, 13, 0) 30%, rgba(4, 9, 13, 0.45) 100%);
}

/* ---------- Eyebrow ---------- */
.hero-eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: rgba(251, 251, 251, 0.78);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6em;
  animation: eyebrow-in 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;
}
.hero-eyebrow .dot {
  width: 5px;
  height: 5px;
  border-radius: 9999px;
  background: #ffe11a;
}

/* ---------- Headline ---------- */
.hero-title {
  font-weight: 900;
  line-height: 1.08;
  letter-spacing: -0.01em;
  font-size: clamp(2.25rem, 4.7vw, 4.4rem);
}
/* each line sits in a clipping mask; the inner span slides up into view */
.hero-line {
  display: block;
  overflow: hidden;
  padding-bottom: 0.12em; /* keeps descenders (g, p) from being clipped */
  margin-bottom: -0.12em;
}
.hero-line > span {
  display: inline-block;
  animation: line-up 1s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.hero-line:nth-child(1) > span { animation-delay: 0.25s; }
.hero-line:nth-child(2) > span { animation-delay: 0.45s; }
.hero-line:nth-child(3) > span { animation-delay: 0.65s; }

.grad-a,
.grad-b {
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  /* layer 1: moving white sheen, layer 2: the base gradient */
  background-repeat: no-repeat;
  background-size: 40% 100%, 100% 100%;
  background-position: -120% 0, 0 0;
  animation: line-up 1s cubic-bezier(0.22, 1, 0.36, 1) both,
             sheen 3.2s ease-in-out 1.8s infinite;
}
.hero-line:nth-child(2) > .grad-a {
  background-image:
    linear-gradient(100deg, transparent 0%, rgba(255, 255, 255, 0.85) 50%, transparent 100%),
    linear-gradient(90deg, #35d4ff 0%, #5fe0d0 40%, #a4ec62 100%);
  animation-delay: 0.45s, 1.8s;
}
.hero-line:nth-child(3) > .grad-b {
  background-image:
    linear-gradient(100deg, transparent 0%, rgba(255, 255, 255, 0.85) 50%, transparent 100%),
    linear-gradient(90deg, #35d4ff 0%, #8fe86a 38%, #f7e83a 85%);
  animation-delay: 0.65s, 2.1s;
}

/* ---------- Paragraph & CTAs ---------- */
.hero-copy {
  font-weight: 400;
  color: rgba(251, 251, 251, 0.86);
  animation: fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1s both;
}
.hero-actions {
  animation: fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1.2s both;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.95rem 1.6rem;
  border-radius: 9999px;
  background: #ffe11a;
  color: #14181c;
  font-weight: 700;
  font-size: 0.95rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.btn-primary svg { transition: transform 0.25s ease; }
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 26px rgba(255, 225, 26, 0.3); }
.btn-primary:hover svg { transform: translateX(4px); }

.btn-story {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: #fbfbfb;
  font-weight: 700;
  font-size: 0.95rem;
}
.play-dot {
  position: relative;
  display: grid;
  place-items: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 9999px;
  background: #ffe11a;
  color: #14181c;
}
.play-dot::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 2px solid #ffe11a;
  animation: pulse-ring 2.2s ease-out 2s infinite;
}

.hero-section a:focus-visible,
.hero-section button:focus-visible {
  outline: 2px solid #ffe11a;
  outline-offset: 4px;
}

/* ---------- Keyframes ---------- */
@keyframes hero-zoom { from { transform: scale(1.12); } to { transform: scale(1); } }
@keyframes eyebrow-in {
  from { opacity: 0; letter-spacing: 0.6em; }
  to   { opacity: 1; letter-spacing: 0.3em; }
}
@keyframes line-up {
  from { transform: translateY(110%); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
}
@keyframes sheen {
  0%   { background-position: -120% 0, 0 0; }
  60%, 100% { background-position: 220% 0, 0 0; }
}
@keyframes fade-up {
  from { opacity: 0; transform: translateY(18px); filter: blur(4px); }
  to   { opacity: 1; transform: translateY(0); filter: blur(0); }
}
@keyframes pulse-ring {
  0%   { transform: scale(1); opacity: 0.7; }
  100% { transform: scale(1.9); opacity: 0; }
}

/* final eyebrow tracking (after animation ends) */
.hero-eyebrow { letter-spacing: 0.3em; }

@media (prefers-reduced-motion: reduce) {
  .hero-section *,
  .hero-section *::after {
    animation: none !important;
    transition: none !important;
  }
}
`;

export const HomeHeroSection = ({ heroImage, onWatchStory }) => (
  <section className="hero-section relative w-full overflow-hidden">
    <style>{heroStyles}</style>

    {/* Background image */}
    <img
      className="hero-media absolute inset-0 h-full w-full object-cover"
      alt="Printing press producing packaging"
      src={heroImage}
    />

    {/* Dark gradient overlay for readability */}
    <div
      aria-hidden="true"
      className="hero-overlay pointer-events-none absolute inset-0"
    />

    {/* Hero content (top padding leaves room for the fixed header) */}
    <div className="relative z-10 flex h-full flex-col justify-center px-6 pb-12 pt-[110px] md:px-[6.7%] md:pt-[90px]">
      <div className="flex max-w-[680px] flex-col gap-5">
        {/* Eyebrow */}
        <p className="hero-eyebrow">
          <span>Printing</span>
          <span className="dot" aria-hidden="true" />
          <span>Packaging</span>
          <span className="dot" aria-hidden="true" />
          <span>Excellence</span>
        </p>

        {/* Headline */}
        <h1 className="hero-title text-[#fbfbfb]">
          <span className="hero-line">
            <span>Your Vision.</span>
          </span>
          <span className="hero-line">
            <span className="grad-a">Our Print &amp;</span>
          </span>
          <span className="hero-line">
            <span className="grad-b">Packaging Expertise.</span>
          </span>
        </h1>

        {/* Description */}
        <p className="hero-copy max-w-[520px] text-base leading-[1.6] sm:text-lg sm:leading-[1.65]">
          Since 1990, we have been delivering high-quality printing and
          packaging solutions with a commitment to quality, innovation and
          customer satisfaction.
        </p>

        {/* Actions */}
        <div className="hero-actions mt-2 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a href="#services-section" className="btn-primary">
            Explore Our Services
            <ArrowRight className="h-4 w-4" />
          </a>

          <button type="button" className="btn-story" onClick={onWatchStory}>
            <span className="play-dot">
              <Play className="h-4 w-4" fill="currentColor" />
            </span>
            Watch Our Story
          </button>
        </div>
      </div>
    </div>
  </section>
);