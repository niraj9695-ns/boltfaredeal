import {
  ArrowRightIcon,
  BoxIcon,
  BoxesIcon,
  CheckIcon,
  ClipboardListIcon,
  CogIcon,
  Layers3Icon,
  PackageCheckIcon,
  PaletteIcon,
  PrinterIcon,
  RulerIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "lucide-react";

import { GradientButton } from "../components/shared/GradientButton";
import { SectionLabel } from "../components/shared/SectionLabel";

const capabilities = [
  [Layers3Icon, "Multiple flute options", "E-Flute, F-Flute, and Narrow Flute"],
  [BoxIcon, "2 to 7 ply construction", "Corrugated box configurations"],
  [PrinterIcon, "Printed packaging", "Brand-ready packaging solutions"],
  [CogIcon, "Tailored solutions", "Standard and bespoke requirements"],
];

const fluteTypes = [
  ["01 / FLUTE PROFILE", Layers3Icon, "E-Flute", "A fine corrugated profile for applications where a compact structure and clean printed presentation are important."],
  ["02 / FLUTE PROFILE", BoxIcon, "F-Flute", "A fine-profile option for packaging designs that require a compact board structure. Final selection depends on the product and specification."],
  ["03 / FLUTE PROFILE", BoxesIcon, "Narrow Flute", "A narrow-flute construction selected around box design, handling requirements, and intended end use."],
];

const benefits = [
  [ShieldCheckIcon, "Product protection", "Select a suitable corrugated construction based on the product, handling conditions, and transport needs."],
  [RulerIcon, "Bespoke box design", "Develop packaging around product dimensions, packing processes, and presentation requirements."],
  [PaletteIcon, "Printed presentation", "Bring brand elements and relevant packaging information into the box design and artwork."],
  [Layers3Icon, "Paper-based materials", "Consider paper grades and material options when developing the required packaging structure."],
  [CogIcon, "Construction options", "Explore flute profiles and 2 to 7 ply constructions for the application and specification."],
  [PackageCheckIcon, "Integrated expertise", "Combine corrugated production experience with paper and coating material considerations."],
];

const applications = [
  [BoxIcon, "Transit and shipping boxes"],
  [BoxesIcon, "Product cartons"],
  [PrinterIcon, "Printed packaging boxes"],
  [RulerIcon, "Custom-size boxes"],
  [TruckIcon, "Distribution packaging"],
  [PackageCheckIcon, "Retail packaging"],
  [Layers3Icon, "Multi-item packaging"],
  [CogIcon, "Industrial packaging"],
];

const process = [
  ["Understand the requirement", "Establish product dimensions, intended use, packing conditions, and presentation requirements for the finished box."],
  ["Consider materials and structure", "Review suitable flute profiles, board construction, paper options, and coating requirements for the application."],
  ["Develop the packaging solution", "Align box design and print requirements with the agreed specification and intended application."],
];

const panelClass =
  "border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))]";

export const CorrugatedPackagingPage = ({ service }) => (
  <main className="relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]">
    <div className="mx-auto max-w-[1180px] space-y-16 sm:space-y-24">
      <section className={`${panelClass} relative isolate overflow-hidden rounded-[30px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-10 lg:p-12`}>
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--theme-accent)] opacity-[0.08] blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[var(--theme-accent-alt)] opacity-[0.06] blur-[90px]" />
        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="space-y-6">
            <SectionLabel className="text-left text-[var(--theme-accent-alt)]">FAIRDEAL PACKAGING SOLUTIONS</SectionLabel>
            <h1 data-reveal="left" className="text-[clamp(52px,4vw,80px)] font-[650] leading-[0.98] tracking-[-0.055em] max-[600px]:text-[45px]">
              Corrugated <span className="text-[var(--theme-accent)]">Packaging</span> engineered to deliver.
            </h1>
            <p data-reveal="left" className="max-w-[560px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base">
              From transit boxes to bespoke printed corrugated packaging, Fairdeal develops solutions around your product and packaging requirements. Our corrugated production combines paper and coating materials with a commitment to consistent quality. {service.description}
            </p>
            <div data-reveal="up" className="flex flex-wrap gap-2">
              {["E-FLUTE", "F-FLUTE", "NARROW FLUTE", "2-7 PLY BOXES"].map((tag) => (
                <span key={tag} className="rounded-md border border-[var(--theme-border)] bg-[var(--theme-accent)]/[0.06] px-3 py-2 text-[10px] font-semibold tracking-[0.1em] text-[var(--theme-text-soft)]">{tag}</span>
              ))}
            </div>
            <div data-reveal="up" className="flex flex-wrap gap-3 pt-1">
              <GradientButton href="#box-solutions" className="h-12 px-5 text-xs font-semibold uppercase tracking-[0.07em]">
                Explore box solutions <ArrowRightIcon className="h-4 w-4" />
              </GradientButton>
              <GradientButton to="/contact" className="h-12 border border-[var(--theme-border)] bg-none bg-white/[0.025] px-5 text-xs font-semibold uppercase tracking-[0.07em] text-[var(--theme-text)] shadow-none hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]">
                Discuss requirements
              </GradientButton>
            </div>
          </div>

          <figure data-reveal="right" className="group relative min-h-[340px] overflow-hidden rounded-[20px] border border-[var(--theme-border)] bg-black/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:min-h-[430px]">
            <img src={service.image} alt="Corrugated cardboard fluting and board materials" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/55" />
            <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3 sm:inset-x-5 sm:top-5">
              <span className="text-[8px] font-semibold tracking-[0.13em] text-white/85 sm:text-[9px]">CORRUGATED PACKAGING SYSTEMS</span>
              <span className="inline-flex items-center gap-2 text-[8px] font-semibold tracking-[0.1em] text-lime-300"><span className="h-1.5 w-1.5 rounded-full bg-lime-300" /> PACKAGING SOLUTIONS</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
              <h2 className="text-xl font-medium leading-tight text-white sm:text-2xl">Protection meets <span className="text-[var(--theme-accent)]">presentation.</span></h2>
              <p className="mt-2 max-w-[420px] text-xs leading-5 text-white/75">Corrugated structures and printed packaging designed for product protection, handling, and brand presentation.</p>
              <div className="mt-4 grid grid-cols-3 gap-1.5 sm:gap-2">
                {[["FLUTE OPTIONS", "E / F / NARROW"], ["BOX CONSTRUCTION", "2-7 PLY"], ["PACKAGING", "PRINTED BOXES"]].map(([label, value]) => (
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
      </section>

      <section className={`${panelClass} grid gap-5 rounded-2xl p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-4`}>
        {capabilities.map(([Icon, title, description]) => (
          <article key={title} data-reveal="up" className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)]"><Icon className="h-4 w-4" /></span>
            <span><span className="block text-xs font-semibold">{title}</span><span className="mt-1 block text-[10px] leading-4 text-[var(--theme-text-soft)]">{description}</span></span>
          </article>
        ))}
      </section>

      <section id="box-solutions" className="scroll-mt-28 space-y-8">
        <header data-reveal="up" className="mx-auto max-w-[760px] text-center">
          <SectionLabel className="text-center text-[var(--theme-accent-alt)]">Corrugated construction</SectionLabel>
          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">The right structure for your <span className="text-[var(--theme-accent)]">packaging needs.</span></h2>
          <p className="mx-auto mt-4 max-w-[700px] text-sm leading-7 text-[var(--theme-text-soft)]">
            Flute selection influences the construction and profile of corrugated packaging. Explore the available options to find a structure suited to your product and application.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-3">
          {fluteTypes.map(([label, Icon, title, description]) => (
            <article key={title} data-reveal="up" className={`${panelClass} group relative min-h-[260px] overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--theme-accent)]/40 sm:p-7`}>
              <div className="pointer-events-none absolute -bottom-12 -right-10 h-36 w-36 rounded-full border border-[var(--theme-accent)]/15 shadow-[0_0_0_18px_rgba(146,209,188,0.025),0_0_0_36px_rgba(146,209,188,0.018)]" />
              <p className="text-[9px] font-semibold tracking-[0.14em] text-[var(--theme-text-soft)]">{label}</p>
              <div className="mt-6 grid h-12 w-12 place-items-center rounded-lg border border-[var(--theme-accent)]/20 bg-[var(--theme-accent)]/[0.06] text-[var(--theme-accent)] transition-transform duration-300 group-hover:scale-105"><Icon className="h-5 w-5" /></div>
              <h3 className="mt-5 text-xl font-medium">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--theme-text-soft)]">{description}</p>
              <div className="mt-5 h-0.5 w-11 bg-gradient-to-r from-[var(--theme-accent)] to-[var(--theme-accent-alt)]" />
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[var(--theme-border)] bg-white/[0.018] py-8 sm:py-12">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_80%_50%,rgba(146,209,188,0.07),transparent_65%)]" />
        <div className="relative grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div data-reveal="left" className={`${panelClass} rounded-xl p-5 sm:p-8`}>
            <div className="mb-6 flex items-center justify-between gap-3">
              <span className="text-[10px] font-semibold tracking-[0.12em]">CORRUGATED BOARD CONCEPT</span>
              <span className="text-[9px] font-semibold tracking-[0.1em] text-[var(--theme-accent)]">2-7 PLY</span>
            </div>
            <div className="space-y-1.5" aria-label="Illustrative corrugated board layers">
              {Array.from({ length: 7 }, (_, index) => (
                <div key={index} className={`relative h-3 overflow-hidden rounded-sm border border-white/10 ${index % 2 === 0 ? "bg-[linear-gradient(90deg,#765033,#c69b64_35%,#e0bf89_54%,#986235)]" : "bg-[repeating-linear-gradient(90deg,#8d5e35_0px,#c99b63_7px,#e3c18d_13px,#9a693e_20px)]"}`}>
                  <span className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10" />
                </div>
              ))}
            </div>
            <div className="mt-3 flex justify-between gap-2 text-[9px] text-[var(--theme-text-soft)]"><span>Illustrative layered construction</span><span>01-07</span></div>
            <p className="mt-5 border-t border-[var(--theme-border)] pt-4 text-xs leading-6 text-[var(--theme-text-soft)]">Board construction should be specified to suit the box design, product, handling conditions, and transport requirements. This illustration is conceptual, not a technical cross-section.</p>
          </div>
          <div data-reveal="right">
            <SectionLabel className="text-left text-[var(--theme-accent-alt)]">Printed corrugated boxes</SectionLabel>
            <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">From <span className="text-[var(--theme-accent)]">2 to 7 ply</span>, built around your product.</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--theme-text-soft)]">Fairdeal provides printed corrugated boxes for standard transit packaging as well as bespoke requirements. Packaging can be developed around its intended use, construction, and paper or coating materials.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Standard transit cardboard boxes", "Bespoke corrugated packaging", "Printed box requirements", "Paper and coating integration"].map((point) => (
                <div key={point} className="flex items-start gap-2.5 text-xs leading-5 text-[var(--theme-text)]"><CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--theme-accent)]" />{point}</div>
              ))}
            </div>
            <p className="mt-5 text-[10px] leading-5 text-[var(--theme-text-soft)]">Final board grade, flute combination, print method, and construction should be confirmed against the product's actual packaging requirements.</p>
          </div>
        </div>
      </section>

      <section className="space-y-7">
        <header data-reveal="left" className="max-w-[720px]">
          <SectionLabel className="text-left text-[var(--theme-accent-alt)]">Why corrugated packaging</SectionLabel>
          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">Packaging designed around <span className="text-[var(--theme-accent)]">real requirements.</span></h2>
          <p className="mt-4 text-sm leading-7 text-[var(--theme-text-soft)]">Effective corrugated packaging brings together board construction, material selection, printing, and box design. Each element contributes to how the finished pack serves its intended purpose.</p>
        </header>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([Icon, title, description]) => (
            <article key={title} data-reveal="up" className={`${panelClass} rounded-lg p-5 transition-all duration-300 hover:border-[var(--theme-accent)]/40 hover:bg-[var(--theme-accent)]/[0.035]`}>
              <Icon className="h-5 w-5 text-[var(--theme-accent)]" />
              <h3 className="mt-4 text-sm font-semibold">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--theme-text-soft)]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--theme-border)] bg-white/[0.018] py-16 sm:py-20">
        <div className="mx-auto max-w-[800px] text-center" data-reveal="up">
          <SectionLabel className="text-center text-[var(--theme-accent-alt)]">Packaging applications</SectionLabel>
          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">Solutions for <span className="text-[var(--theme-accent)]">different packaging needs.</span></h2>
          <p className="mt-4 text-sm leading-7 text-[var(--theme-text-soft)]">Corrugated boxes serve a range of packaging purposes. Final construction should match the product, packing method, and distribution environment.</p>
        </div>
        <div className="mt-9 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {applications.map(([Icon, title]) => (
            <div key={title} data-reveal="up" className={`${panelClass} flex min-h-[72px] items-center gap-3 rounded-md p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--theme-accent)]/35`}>
              <Icon className="h-4 w-4 shrink-0 text-[var(--theme-accent)]" />
              <span className="text-xs font-semibold leading-5">{title}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-[10px] leading-5 text-[var(--theme-text-soft)]">Application examples are indicative. Confirm availability and specifications with Fairdeal for your particular requirement.</p>
      </section>

      <section className="space-y-8">
        <header data-reveal="up" className="mx-auto max-w-[760px] text-center">
          <SectionLabel className="text-center text-[var(--theme-accent-alt)]">From requirement to packaging</SectionLabel>
          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">A considered approach to <span className="text-[var(--theme-accent)]">corrugated solutions.</span></h2>
          <p className="mt-4 text-sm leading-7 text-[var(--theme-text-soft)]">Packaging development starts with understanding what the box needs to do and selecting materials and construction to match.</p>
        </header>
        <div className="grid gap-4 md:grid-cols-3">
          {process.map(([title, description], index) => (
            <article key={title} data-reveal="up" className="border-t border-[var(--theme-accent)]/50 bg-gradient-to-b from-[var(--theme-accent)]/[0.045] to-transparent p-5 sm:p-6">
              <span className="text-[10px] font-semibold tracking-[0.14em] text-[var(--theme-accent)]">0{index + 1}</span>
              <h3 className="mt-5 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--theme-text-soft)]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="scroll-mt-28">
        <div data-reveal="up" className={`${panelClass} relative overflow-hidden rounded-[24px] px-6 py-12 text-center sm:px-10 sm:py-16`}>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_100%,rgba(53,212,255,0.1),transparent_45%),radial-gradient(ellipse_at_85%_0%,rgba(164,236,98,0.07),transparent_45%)]" />
          <div className="relative mx-auto max-w-[700px]">
            <SectionLabel className="text-center text-[var(--theme-accent-alt)]">Let's discuss your packaging</SectionLabel>
            <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">Have a box in mind? <span className="text-[var(--theme-accent)]">Let's develop it.</span></h2>
            <p className="mx-auto mt-4 max-w-[650px] text-sm leading-7 text-[var(--theme-text-soft)]">Share your box dimensions, flute preference, ply requirement, artwork, and intended application. Fairdeal can discuss your corrugated packaging needs.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <GradientButton to="/contact" className="h-12 px-5 text-xs font-semibold uppercase tracking-[0.07em]">Enquire about packaging <ArrowRightIcon className="h-4 w-4" /></GradientButton>
              <GradientButton href="#box-solutions" className="h-12 border border-[var(--theme-border)] bg-none bg-white/[0.025] px-5 text-xs font-semibold uppercase tracking-[0.07em] text-[var(--theme-text)] shadow-none hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]">Review flute options</GradientButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
);