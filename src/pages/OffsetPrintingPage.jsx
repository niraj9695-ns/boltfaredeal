import { useEffect, useRef, useState } from "react";
import {
  ArrowRightIcon,
  AwardIcon,
  BookOpenIcon,
  BoxesIcon,
  Building2Icon,
  CalendarDaysIcon,
  CircleDollarSignIcon,
  DropletIcon,
  GraduationCapIcon,
  Layers3Icon,
  PackageIcon,
  PrinterIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  SlidersHorizontalIcon,
  SparklesIcon,
  ZapIcon,
} from "lucide-react";

import { GradientButton } from "../components/shared/GradientButton";
import { SectionLabel } from "../components/shared/SectionLabel";

const advantages = [
  [ZapIcon, "Save on time", "Streamlined offset workflow ensures rapid turnaround for high-volume press runs."],
  [CircleDollarSignIcon, "Save on costs", "Maximized unit economy for large production volumes without sacrificing quality."],
  [SlidersHorizontalIcon, "Plan jobs better", "Predictable schedule management with dedicated press capacity planning."],
  [AwardIcon, "Achieve best quality", "Consistently sharp, high-fidelity color reproduction on every printed sheet."],
];

const capabilities = [
  ["Brochures and manuals", "Commercial and technical manuals", BookOpenIcon],
  ["Educational books", "High-volume publication printing", GraduationCapIcon],
  ["Folders, inserts and flyers", "Marketing collateral and inserts", Layers3Icon],
  ["Calendars and diaries", "Corporate desk and wall merchandise", CalendarDaysIcon],
  ["Paper bags", "Custom-branded paper packaging", ShoppingBagIcon],
  ["Pharma and industrial labels", "Precision compliance labeling", ShieldCheckIcon],
  ["Corporate stationery", "Letterheads, cards and identity supplies", Building2Icon],
  ["Multicolor duplex mono cartons", "Retail duplex carton boxes", PackageIcon],
  ["MET PET cartons", "Metalized-film packaging", Layers3Icon],
  ["Corrugation and PP boxes", "Heavy-duty outer shippers and poly boxes", BoxesIcon],
  ["Computer stationery", "Continuous billing forms and computer paper", PrinterIcon],
  ["Security holograms", "Anti-counterfeiting holographic seals", ShieldCheckIcon],
];

const finishes = [
  [DropletIcon, "Drip-off UV effects", "Contrasting matte and high-gloss textures in a single press pass for tactile premium depth.", "MATTE + GLOSS CONTRAST", "FINISH / UV COATING"],
  [SparklesIcon, "Aqueous varnish", "A fast-drying, water-based protective coating for a smooth, anti-scuff finish.", "PROTECTIVE SEAL", "FINISH / AQUEOUS"],
  [PackageIcon, "Blister coating", "Specialized heat-seal adhesive varnish for pharmaceutical and retail blister packaging cards.", "HEAT-SEAL ADHESIVE", "FINISH / BLISTER"],
];

const qualityPillars = [
  ["01 / GLOBAL TRUST", "Fairdeal Print Pack India Pvt. Ltd. provides offset commercial print services to clients in India and across the globe."],
  ["02 / COMPREHENSIVE RANGE", "Our offset capability is designed to match everyday printing needs across a wide range of customers."],
  ["03 / CONTINUOUS EVOLUTION", "Our offset technology continues to evolve alongside global industry standards."],
];

const cmykStations = [
  { letter: "C", color: "#00AEEF" },
  { letter: "M", color: "#EC008C" },
  { letter: "Y", color: "#FFF200" },
  { letter: "K", color: "#231F20", stroke: "#64748B" },
];

const CMYKPressVisualizer = () => {
  const canvasRef = useRef(null);
  const speedRef = useRef(1);
  const [speedStep, setSpeedStep] = useState(0);
  const speeds = [1, 2, 3.5];

  useEffect(() => {
    speedRef.current = speeds[speedStep];
  }, [speedStep]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return undefined;

    let frameId = 0;
    let rotation = 0;
    let paperOffset = 0;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      if (!width || !height) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const pixelWidth = Math.round(width * dpr);
      const pixelHeight = Math.round(height * dpr);
      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;
      }
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.clearRect(0, 0, width, height);

      const radius = Math.min(32, width * 0.09);
      const paperY = height * 0.59;
      const stations = cmykStations.map((station, index) => ({
        ...station,
        x: width * (0.17 + index * 0.22),
        y: Math.max(radius + 42, paperY - radius - 9),
      }));

      context.fillStyle = "#F8FAFC";
      context.fillRect(10, paperY, width - 20, 24);
      context.strokeStyle = "#CBD5E1";
      context.lineWidth = 1;
      paperOffset = (paperOffset + 1.5 * speedRef.current) % 20;
      for (let x = 10 - paperOffset; x < width - 10; x += 20) {
        if (x < 10) continue;
        context.beginPath();
        context.moveTo(x, paperY);
        context.lineTo(x + 5, paperY + 24);
        context.stroke();
      }

      stations.forEach((station) => {
        context.fillStyle = `${station.color}A6`;
        context.fillRect(station.x, paperY, width - 10 - station.x, 24);
      });

      stations.forEach((station) => {
        context.beginPath();
        context.arc(station.x, paperY + 36, 12, 0, Math.PI * 2);
        context.fillStyle = "#334155";
        context.fill();
        context.strokeStyle = "#64748B";
        context.lineWidth = 2;
        context.stroke();
      });

      stations.forEach((station) => {
        const gradient = context.createLinearGradient(
          station.x - radius,
          station.y,
          station.x + radius,
          station.y,
        );
        gradient.addColorStop(0, station.color);
        gradient.addColorStop(0.52, station.color);
        gradient.addColorStop(1, "#17212B");

        context.beginPath();
        context.arc(station.x, station.y, radius, 0, Math.PI * 2);
        context.fillStyle = gradient;
        context.fill();
        context.strokeStyle = station.stroke || "rgba(255,255,255,0.45)";
        context.lineWidth = 3;
        context.stroke();

        context.save();
        context.translate(station.x, station.y);
        context.rotate(rotation);
        context.strokeStyle = "rgba(255,255,255,0.65)";
        context.lineWidth = 2;
        for (let spoke = 0; spoke < 4; spoke += 1) {
          context.beginPath();
          context.moveTo(0, 0);
          context.lineTo(0, -radius + 5);
          context.stroke();
          context.rotate(Math.PI / 2);
        }
        context.beginPath();
        context.arc(0, 0, 8, 0, Math.PI * 2);
        context.fillStyle = "#0F172A";
        context.fill();
        context.restore();

        context.beginPath();
        context.arc(station.x, station.y - radius - 20, 5, 0, Math.PI * 2);
        context.fillStyle = station.color;
        context.fill();

        context.fillStyle = station.letter === "Y" ? "#FFE11A" : "#FFFFFF";
        context.font = "900 12px Lato, sans-serif";
        context.textAlign = "center";
        context.fillText(station.letter, station.x, station.y - radius - 30);
      });

      rotation += 0.03 * speedRef.current;
      if (!prefersReducedMotion) frameId = window.requestAnimationFrame(draw);
    };

    const resizeObserver = new ResizeObserver(draw);
    resizeObserver.observe(canvas);
    draw();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
    };
  }, []);

  const speed = speeds[speedStep];

  return (
    <div className="relative flex aspect-square w-full max-w-[420px] flex-col items-center rounded-2xl border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.24)]">
      <div className="absolute left-4 right-4 top-3 z-10 flex items-center justify-between gap-3 text-[8px] font-semibold tracking-[0.12em] text-white/45 sm:text-[10px]">
        <span>CYLINDER PRESS SIMULATION</span>
        <span className="text-[var(--theme-accent)]">● ACTIVE FEED</span>
      </div>
      <div className="relative min-h-0 w-full flex-1 pt-5">
        <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full rounded-lg" />
        <button
          type="button"
          aria-label={`Change press speed. Current speed ${speed.toFixed(1)} times RPM`}
          onClick={() => setSpeedStep((current) => (current + 1) % speeds.length)}
          className="absolute inset-0 w-full cursor-pointer rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-accent-alt)]"
        />
      </div>
      <div className="mt-2 flex w-full items-center justify-between gap-3 px-1 text-[9px] text-white/50 sm:px-2 sm:text-xs">
        <span>Click the press to cycle speed</span>
        <span aria-live="polite" className="shrink-0 font-mono font-bold text-[var(--theme-accent)]">
          {speed.toFixed(1)}x RPM
        </span>
      </div>
    </div>
  );
};

export const OffsetPrintingPage = ({ service }) => (
  <main className="relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]">
    <div className="mx-auto max-w-[1180px] space-y-16 sm:space-y-24">
      <section className="relative isolate overflow-hidden rounded-[30px] border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-10 lg:p-12">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--theme-accent)] opacity-[0.08] blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[var(--theme-accent-alt)] opacity-[0.06] blur-[90px]" />
        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionLabel className="text-left text-[var(--theme-accent-alt)]">FAIRDEAL PRINT PACK INDIA PVT. LTD.</SectionLabel>
            <h1 data-reveal="left" className="max-w-[700px] text-[clamp(52px,4vw,80px)] font-[650] leading-[0.98] tracking-[-0.055em] max-[600px]:text-[45px]">
              Offset <span className="text-[var(--theme-accent)]">Printing</span>
            </h1>
            <p data-reveal="left" className="max-w-2xl text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base">
              Our printing setup brings together the processes vital to completing an offset printing job, giving clients distinct advantages in quality, consistency, and production planning. {service.description}
            </p>
            <div data-reveal="up" className="flex flex-wrap gap-2 pt-1">
              {[["HIGH PRECISION", "var(--theme-accent)"], ["GLOBAL STANDARDS", "#A4EC62"], ["FULL SPECTRUM", "var(--theme-accent-alt)"]].map(([label, color]) => (
                <span key={label} className="inline-flex items-center gap-2 rounded-md border border-[var(--theme-border)] bg-black/10 px-3 py-2 text-[10px] font-semibold tracking-[0.08em] text-[var(--theme-text)]">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />{label}
                </span>
              ))}
            </div>
            <div data-reveal="up" className="flex flex-wrap gap-3 pt-1">
              <GradientButton href="#applications" className="h-12 px-5 text-xs font-semibold uppercase tracking-[0.07em]">
                Explore applications <ArrowRightIcon className="h-4 w-4" />
              </GradientButton>
              <GradientButton to="/contact" className="h-12 border border-[var(--theme-border)] bg-none bg-white/[0.025] px-5 text-xs font-semibold uppercase tracking-[0.07em] text-[var(--theme-text)] shadow-none hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]">
                Discuss requirements
              </GradientButton>
            </div>
          </div>
          <div data-reveal="right" className="flex justify-center">
            <figure
              className="group relative min-h-[340px] w-full max-w-[440px] overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-black/20 shadow-[0_20px_50px_rgba(0,0,0,0.24)] sm:min-h-[430px]"
              style={{ aspectRatio: "1 / 0.86" }}
            >
              <img
                src={service.image}
                alt="Offset printing press"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/55" />
              <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3 sm:inset-x-5 sm:top-5">
                <span className="text-[8px] font-semibold tracking-[0.13em] text-white/85 sm:text-[9px]">OFFSET PRINTING SYSTEMS</span>
                <span className="inline-flex items-center gap-2 text-[8px] font-semibold tracking-[0.1em] text-lime-300"><span className="h-1.5 w-1.5 rounded-full bg-lime-300" /> PRESS CAPABILITY</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                <h2 className="text-xl font-medium leading-tight text-white sm:text-2xl">Precision on every <span className="text-[var(--theme-accent)]">printed sheet.</span></h2>
                <p className="mt-2 max-w-[420px] text-xs leading-5 text-white/75">Consistent color and fine detail for commercial print and packaging applications.</p>
                <div className="mt-4 grid grid-cols-3 gap-1.5 sm:gap-2">
                  {[["PRINT PROCESS", "OFFSET"], ["COLOR SYSTEM", "CMYK"], ["PRESS CAPABILITY", "5 COLOUR"]].map(([label, value]) => (
                    <div key={label} className="min-w-0 rounded-md border border-white/15 bg-black/55 p-2 backdrop-blur-sm sm:p-2.5">
                      <span className="block text-[7px] leading-tight tracking-[0.08em] text-white/55 sm:text-[8px]">{label}</span>
                      <span className="mt-1 block break-words text-[8px] font-semibold leading-tight tracking-[0.04em] text-[var(--theme-accent)] sm:text-[10px]">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute right-4 top-16 h-8 w-8 border-r border-t border-[var(--theme-accent)]/70 sm:right-5 sm:top-20" />
            </figure>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <SectionLabel className="text-left text-[var(--theme-accent-alt)]">Key advantages</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map(([Icon, title, description]) => (
            <article key={title} data-reveal="up" className="group relative overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--theme-accent)]/40">
              <div className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-bl-full bg-[var(--theme-accent)] opacity-[0.06] transition-transform duration-300 group-hover:scale-125" />
              <div className="relative mb-4 grid h-12 w-12 place-items-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)] transition-colors group-hover:bg-[var(--theme-accent)] group-hover:text-[var(--theme-bg)]"><Icon className="h-5 w-5" /></div>
              <h2 className="relative mb-2 text-lg font-medium">{title}</h2>
              <p className="relative text-sm leading-6 text-[var(--theme-text-soft)]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[28px] border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))] p-6 sm:p-10">
        <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[var(--theme-accent)] opacity-[0.045] blur-[90px]" />
        <div className="relative z-10 max-w-5xl space-y-7">
          <SectionLabel className="text-left text-[var(--theme-accent-alt)]">Quality commitment</SectionLabel>
          <blockquote data-reveal="left" className="border-l-2 border-[var(--theme-accent-alt)] py-1 pl-5 text-2xl font-medium leading-snug sm:pl-7 sm:text-3xl">
            “Offset printing is all about paying attention to the details. Even a minor difference in colour can make a huge impact on the end product.”
          </blockquote>
          <div className="grid gap-4 pt-2 md:grid-cols-3">
            {qualityPillars.map(([label, copy]) => (
              <article key={label} data-reveal="up" className="rounded-xl border border-[var(--theme-border)] bg-black/[0.12] p-5">
                <h3 className="mb-3 text-[10px] font-semibold tracking-[0.12em] text-[var(--theme-accent)]">{label}</h3>
                <p className="text-sm leading-6 text-[var(--theme-text-soft)]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="applications" className="scroll-mt-28 space-y-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel className="mb-3 text-left text-[var(--theme-accent-alt)]">Capabilities spectrum</SectionLabel>
            <h2 className="max-w-3xl text-2xl font-medium leading-tight sm:text-4xl">All types of offset printing solutions</h2>
          </div>
          <span className="w-fit border-b border-[var(--theme-accent-alt)] pb-2 text-xs font-medium tracking-[0.12em] text-[var(--theme-text-soft)]">12 CORE CATEGORIES</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(([title, description, Icon]) => (
            <article key={title} data-reveal="up" className="group flex min-h-[92px] items-center gap-4 rounded-xl border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))] p-4 transition-colors duration-300 hover:border-[var(--theme-accent)]/40 sm:p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)] transition-transform duration-300 group-hover:scale-105"><Icon className="h-5 w-5" /></span>
              <span className="min-w-0"><span className="block text-sm font-semibold leading-snug text-[var(--theme-text)]">{title}</span><span className="mt-1 block text-xs leading-5 text-[var(--theme-text-soft)]">{description}</span></span>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-7">
        <div>
          <SectionLabel className="mb-3 text-left text-[var(--theme-accent-alt)]">Surface finish technology</SectionLabel>
          <h2 className="text-3xl font-medium leading-tight sm:text-4xl">Special effects</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {finishes.map(([Icon, title, description, tag, caption]) => (
            <article key={title} data-reveal="up" className="group relative flex min-h-[340px] flex-col justify-between gap-7 overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))] p-6 transition-colors duration-300 hover:border-[var(--theme-accent)]/40">
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_38%,rgba(255,255,255,0.08)_50%,transparent_62%)] transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <div className="relative space-y-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)] transition-transform duration-300 group-hover:scale-105"><Icon className="h-5 w-5" /></div>
                <h3 className="text-xl font-medium leading-tight">{title}</h3>
                <p className="text-sm leading-6 text-[var(--theme-text-soft)]">{description}</p>
              </div>
              <div className="relative flex h-28 flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-[var(--theme-border)] bg-black/20 text-center transition-colors group-hover:border-[var(--theme-accent)]/40">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(53,212,255,0.06),transparent_48%,rgba(164,236,98,0.06))]" />
                <span className="relative rounded-md border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 px-3 py-1 text-[10px] font-semibold tracking-[0.08em] text-[var(--theme-accent)]">{tag}</span>
                <span className="relative text-[9px] tracking-[0.12em] text-[var(--theme-text-soft)]">{caption}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  </main>
);