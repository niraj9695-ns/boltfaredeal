import { useEffect, useState } from "react";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FileTextIcon,
  Layers3Icon,
  PackageIcon,
} from "lucide-react";

import { GradientButton } from "../components/shared/GradientButton";
import { SectionLabel } from "../components/shared/SectionLabel";

const copierImages = Object.entries(
  import.meta.glob("../assets/images/Services/CopierImages/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  }),
)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([path, image]) => ({
    image,
    name:
      path
        .split("/")
        .pop()
        ?.replace(/\.[^/.]+$/, "") ?? "Copier paper",
  }));

const panelClass =
  "border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))]";

const paperCategories = [
  [
    FileTextIcon,
    "Copier paper",
    "Paper for everyday office and print-room use.",
  ],
  [
    Layers3Icon,
    "Coated paper",
    "Coated grades for a range of print requirements.",
  ],
  [
    PackageIcon,
    "Sheet-form paper",
    "Paper supplied in sheet form for production needs.",
  ],
];

/*
|--------------------------------------------------------------------------
| Orbit slots, keyed by distance from the active image
|--------------------------------------------------------------------------
| r = 0 is the active (front-left) product, r = 1, 2, 3... recede along the
| orbit. r = -1 is the product leaving toward the front-left.
| rotY / rotZ give the 3D tilt, b is brightness (dark = far away).
*/
const desktopSlots = {
  "-1": { x: 2,  y: 72, scale: 1.1,  rotY: -26, rotZ: -6, opacity: 0,    b: 1,    z: 11 },
  0:    { x: 17, y: 56, scale: 1.05, rotY: -22, rotZ: -5, opacity: 1,    b: 1,    z: 10 },
  1:    { x: 34, y: 60, scale: 0.95, rotY: -18, rotZ: -4, opacity: 1,    b: 0.95, z: 9 },
  2:    { x: 50, y: 36, scale: 0.68, rotY: -14, rotZ: -3, opacity: 0.95, b: 0.85, z: 6 },
  3:    { x: 65, y: 33, scale: 0.6,  rotY: -10, rotZ: -2, opacity: 0.7,  b: 0.6,  z: 5 },
  4:    { x: 78, y: 44, scale: 0.55, rotY: -8,  rotZ: -2, opacity: 0.32, b: 0.4,  z: 4 },
  5:    { x: 90, y: 54, scale: 0.5,  rotY: -6,  rotZ: -1, opacity: 0,    b: 0.3,  z: 3 },
};

const mobileSlots = {
  "-1": { x: 50, y: 80, scale: 1.1,  rotY: -20, rotZ: -5, opacity: 0,    b: 1,    z: 11 },
  0:    { x: 50, y: 62, scale: 1,    rotY: -18, rotZ: -5, opacity: 1,    b: 1,    z: 10 },
  1:    { x: 26, y: 30, scale: 0.62, rotY: -12, rotZ: -3, opacity: 0.95, b: 0.85, z: 6 },
  2:    { x: 54, y: 26, scale: 0.55, rotY: -10, rotZ: -2, opacity: 0.7,  b: 0.6,  z: 5 },
  3:    { x: 80, y: 32, scale: 0.5,  rotY: -8,  rotZ: -2, opacity: 0.32, b: 0.4,  z: 4 },
  4:    { x: 92, y: 40, scale: 0.45, rotY: -6,  rotZ: -1, opacity: 0,    b: 0.3,  z: 3 },
};

const hiddenSlot = {
  x: 50,
  y: 45,
  scale: 0.4,
  rotY: 0,
  rotZ: 0,
  opacity: 0,
  b: 0.2,
  z: 0,
};

const orbitRings = [
  { w: 96,  h: 56, rot: -6,  color: "rgba(214,178,94,0.45)", glow: true },
  { w: 84,  h: 44, rot: -10, color: "rgba(214,178,94,0.28)" },
  { w: 70,  h: 32, rot: 4,   color: "rgba(120,220,220,0.22)" },
  { w: 100, h: 66, rot: -3,  color: "rgba(255,255,255,0.07)" },
  { w: 58,  h: 22, rot: -12, color: "rgba(214,178,94,0.2)" },
];

export const CopierPaperPage = ({ service }) => {
  const heroImage = service.image;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Automatic rotation
  |--------------------------------------------------------------------------
  */
  useEffect(() => {
    if (copierImages.length < 2) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % copierImages.length,
      );
    }, 3600);

    return () => window.clearInterval(intervalId);
  }, []);

  const moveOrbit = (direction) => {
    setActiveIndex(
      (current) =>
        (current + direction + copierImages.length) %
        copierImages.length,
    );
  };

  /*
  |--------------------------------------------------------------------------
  | Orbit slot lookup
  |--------------------------------------------------------------------------
  */
  const total = copierImages.length;
  const slots = isMobile ? mobileSlots : desktopSlots;

  const getSlot = (imageIndex) => {
    const r = (imageIndex - activeIndex + total) % total;
    const key = r === total - 1 ? "-1" : r;
    return slots[key] ?? hiddenSlot;
  };

  const handleTouchEnd = (event) => {
    if (touchStart === null) return;

    const diff = event.changedTouches[0].clientX - touchStart;

    if (Math.abs(diff) > 40) moveOrbit(diff < 0 ? 1 : -1);

    setTouchStart(null);
  };

  return (
    <main className="relative z-10 w-full bg-[var(--theme-bg)] px-4 pb-16 pt-20 text-[var(--theme-text)] sm:px-8 sm:pb-20 md:pt-32 lg:px-10 lg:pt-[165px]">
      <div className="mx-auto max-w-[1500px] space-y-16 sm:space-y-24">
        {/* ---------------------------------------------------------------- */}
        {/* HERO                                                            */}
        {/* ---------------------------------------------------------------- */}

        <section
          className={`${panelClass} relative isolate overflow-hidden rounded-[30px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-10 lg:p-12`}
        >
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--theme-accent)] opacity-[0.08] blur-[90px]" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="space-y-6">
              <SectionLabel className="text-left text-[var(--theme-accent-alt)]">
                FAIRDEAL PRINT PACK INDIA PVT. LTD.
              </SectionLabel>

              <h1
                data-reveal="left"
                className="text-[clamp(52px,4vw,80px)] font-[650] leading-[0.98] tracking-[-0.055em] max-[600px]:text-[45px]"
              >
                Copier{" "}
                <span className="text-[var(--theme-accent)]">
                  Paper
                </span>
              </h1>

              <p
                data-reveal="left"
                className="max-w-[560px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base"
              >
                {service.description}
              </p>

              <div
                data-reveal="up"
                className="flex flex-wrap gap-2"
              >
                {[
                  "COPIER PAPER",
                  "COATED PAPER",
                  "SHEET-FORM PAPER",
                ].map((label) => (
                  <span
                    key={label}
                    className="rounded-md border border-[var(--theme-border)] bg-[var(--theme-accent)]/[0.06] px-3 py-2 text-[10px] font-semibold tracking-[0.1em] text-[var(--theme-text-soft)]"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div
                data-reveal="up"
                className="flex flex-wrap gap-3 pt-1"
              >
                <GradientButton
                  href="#paper-range"
                  className="h-12 px-5 text-xs font-semibold uppercase tracking-[0.07em]"
                >
                  View paper range
                  <ArrowRightIcon className="h-4 w-4" />
                </GradientButton>

                <GradientButton
                  to="/contact"
                  className="h-12 border border-[var(--theme-border)] bg-none bg-white/[0.025] px-5 text-xs font-semibold uppercase tracking-[0.07em] text-[var(--theme-text)] shadow-none hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]"
                >
                  Discuss requirements
                </GradientButton>
              </div>
            </div>

            <figure
              data-reveal="right"
              className="group relative min-h-[340px] overflow-hidden rounded-[20px] border border-[var(--theme-border)] bg-black/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:min-h-[430px]"
            >
              <img
                src={heroImage}
                alt="Copier paper product image"
                className="absolute inset-0 h-full w-full object-contain p-5 transition-transform duration-700 ease-out group-hover:scale-[1.03] sm:p-8"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/55" />

              <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3 sm:inset-x-5 sm:top-5">
                <span className="text-[8px] font-semibold tracking-[0.13em] text-white/85 sm:text-[9px]">
                  PAPER RANGE
                </span>

                <span className="inline-flex items-center gap-2 text-[8px] font-semibold tracking-[0.1em] text-lime-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                  PAPER SUPPLY
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                <h2 className="text-xl font-medium leading-tight text-white sm:text-2xl">
                  Paper for{" "}
                  <span className="text-[var(--theme-accent)]">
                    everyday print.
                  </span>
                </h2>

                <p className="mt-2 max-w-[420px] text-xs leading-5 text-white/75">
                  Copier, coated, and sheet-form paper options.
                </p>
              </div>
            </figure>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* CATEGORIES                                                      */}
        {/* ---------------------------------------------------------------- */}

        <section
          className={`${panelClass} grid gap-5 rounded-2xl p-5 sm:grid-cols-3 sm:p-6`}
        >
          {paperCategories.map(
            ([Icon, title, description]) => (
              <article
                key={title}
                data-reveal="up"
                className="flex items-center gap-3"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)]">
                  <Icon className="h-4 w-4" />
                </span>

                <span>
                  <span className="block text-xs font-semibold">
                    {title}
                  </span>

                  <span className="mt-1 block text-[10px] leading-4 text-[var(--theme-text-soft)]">
                    {description}
                  </span>
                </span>
              </article>
            ),
          )}
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* PAPER RANGE                                                     */}
        {/* ---------------------------------------------------------------- */}

        <section
          id="paper-range"
          className="scroll-mt-28"
        >
          {/* -------------------------------------------------------------- */}
          {/* HEADER                                                         */}
          {/* -------------------------------------------------------------- */}

          <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel className="mb-3 text-left text-[var(--theme-accent-alt)]">
                Copier paper range
              </SectionLabel>

              <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.025em] sm:text-4xl lg:text-[48px]">
                Explore our paper selection
              </h2>
            </div>

            {/* ------------------------------------------------------------ */}
            {/* IMAGE COUNT + CONTROLS                                       */}
            {/* ------------------------------------------------------------ */}

            <div className="flex items-center justify-between gap-5 sm:justify-end">
              <span
                aria-live="polite"
                className="border-b border-[var(--theme-accent-alt)] pb-2 text-xs font-medium tracking-[0.12em] text-[var(--theme-text-soft)] sm:text-sm"
              >
                {String(copierImages.length).padStart(2, "0")}{" "}
                PRODUCT IMAGES
              </span>

              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous copier paper image"
                  aria-controls="copier-orbit-stage"
                  title="Previous image"
                  onClick={() => moveOrbit(-1)}
                  className="grid h-12 w-12 place-items-center border border-[var(--theme-border)] text-[var(--theme-text)] transition-all duration-300 hover:border-[var(--theme-accent)] hover:bg-[var(--theme-accent)]/5 hover:text-[var(--theme-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--theme-accent)]"
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  aria-label="Next copier paper image"
                  aria-controls="copier-orbit-stage"
                  title="Next image"
                  onClick={() => moveOrbit(1)}
                  className="grid h-12 w-12 place-items-center border border-[var(--theme-border)] text-[var(--theme-text)] transition-all duration-300 hover:border-[var(--theme-accent)] hover:bg-[var(--theme-accent)]/5 hover:text-[var(--theme-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--theme-accent)]"
                >
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </header>

          {/* ================================================================ */}
          {/* ORBIT STAGE (desktop + mobile)                                   */}
          {/* ================================================================ */}

          <div
            id="copier-orbit-stage"
            aria-label="Copier paper product images"
            className="relative isolate mx-auto mt-8 w-full"
            style={{
              height: isMobile ? "430px" : "clamp(450px, 39vw, 560px)",
              perspective: "1400px",
              overflow: isMobile ? "hidden" : "visible",
            }}
            onTouchStart={(event) =>
              setTouchStart(event.touches[0].clientX)
            }
            onTouchEnd={handleTouchEnd}
          >
            {/* ---------------- ORBIT RINGS ---------------- */}

            {orbitRings.map((ring, index) => (
              <div
                key={index}
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[52%] rounded-[50%]"
                style={{
                  width: `${isMobile ? ring.w * 1.4 : ring.w}%`,
                  height: `${ring.h}%`,
                  border: `1px solid ${ring.color}`,
                  boxShadow: ring.glow
                    ? `0 0 18px ${ring.color}`
                    : "none",
                  transform: `translate(-50%, -50%) rotate(${ring.rot}deg)`,
                }}
              />
            ))}

            {/* ---------------- PRODUCTS ---------------- */}

            {copierImages.map(({ image, name }, imageIndex) => {
              const s = getSlot(imageIndex);
              const isActive = s.z === 10;
              const isFront = s.z >= 9;

              return (
                <figure
                  key={imageIndex}
                  className="absolute"
                  style={{
                    left: `${s.x}%`,
                    top: `${s.y}%`,
                    width: isMobile ? "52%" : "min(250px, 16vw)",
                    aspectRatio: "0.78 / 1",
                    zIndex: s.z,
                    opacity: s.opacity,
                    pointerEvents: s.opacity < 0.5 ? "none" : "auto",
                    transform: `translate(-50%, -50%) scale(${s.scale}) rotateY(${s.rotY}deg) rotateZ(${s.rotZ}deg)`,
                    filter: `brightness(${s.b})`,
                    transition:
                      "left 1000ms cubic-bezier(0.2,0.8,0.2,1), top 1000ms cubic-bezier(0.2,0.8,0.2,1), transform 1000ms cubic-bezier(0.2,0.8,0.2,1), opacity 800ms ease, filter 1000ms ease",
                  }}
                >
                  <img
                    src={image}
                    alt={name}
                    loading="eager"
                    draggable={false}
                    className="h-full w-full object-contain"
                    style={{
                      filter: "drop-shadow(0 28px 30px rgba(0,0,0,0.55))",
                    }}
                  />

                  {/* Floating label */}

                  <figcaption
                    className={`absolute whitespace-nowrap rounded-[13px] border border-white/15 bg-[#222725]/90 px-4 py-2 text-[11px] font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-md sm:text-[13px] ${
                      isFront
                        ? "bottom-[-14px] left-1/2"
                        : "bottom-[-10px] right-[-20px]"
                    }`}
                    style={{
                      transform: isFront
                        ? "translateX(-50%) rotate(-8deg)"
                        : "rotate(-4deg)",
                      opacity: isActive || !isMobile ? 1 : 0,
                    }}
                  >
                    {name}
                  </figcaption>
                </figure>
              );
            })}
          </div>

          {/* -------------------------------------------------------------- */}
          {/* MOBILE CURRENT ITEM                                            */}
          {/* -------------------------------------------------------------- */}

          {isMobile && (
            <div className="mt-8 text-center">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--theme-text-soft)]">
                Product{" "}
                {String(activeIndex + 1).padStart(2, "0")}{" "}
                /{" "}
                {String(copierImages.length).padStart(2, "0")}
              </span>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};