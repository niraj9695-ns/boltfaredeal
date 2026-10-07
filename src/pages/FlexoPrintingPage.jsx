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

const panelClass =
  "border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))]";

export const FlexoPrintingPage = ({ service }) => (
  <main className="relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]">
    <div className="mx-auto max-w-[1500px] space-y-16 sm:space-y-24">
      <section className={`${panelClass} relative isolate overflow-hidden rounded-[30px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:p-10 lg:p-12`}>
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--theme-accent)] opacity-[0.08] blur-[90px]" />
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative z-10 space-y-6">
            <SectionLabel className="text-left text-[var(--theme-accent-alt)]">
              FAIRDEAL PRINT PACK INDIA PVT. LTD.
            </SectionLabel>
            <h1 data-reveal="left" className="max-w-[700px] text-[clamp(52px,4vw,80px)] font-[650] leading-[0.98] tracking-[-0.055em] max-[600px]:text-[45px]">
              Flexographic <span className="text-[var(--theme-accent)]">Printing</span>
            </h1>
            <p data-reveal="left" className="max-w-[650px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base">
              {service.description} Flexography uses flexible raised-image plates to transfer ink onto a wide range of substrates with speed, consistency, and precision.
            </p>
            <div data-reveal="up" className="flex flex-wrap gap-2">
              {[[Layers3Icon, "FLEXIBLE PLATES"], [CircleGaugeIcon, "HIGH PRESS SPEEDS"], [PaletteIcon, "COLOR CONTROL"], [RecycleIcon, "MULTI-SUBSTRATE"]].map(([Icon, text]) => (
                <span key={text} className="inline-flex items-center gap-2 rounded-md border border-[var(--theme-border)] bg-white/[0.025] px-3 py-2 text-[10px] font-medium tracking-[0.12em] text-[var(--theme-text-soft)]">
                  <Icon className="h-3.5 w-3.5 text-[var(--theme-accent)]" />{text}
                </span>
              ))}
            </div>
            <div data-reveal="up" className="flex flex-wrap gap-3 pt-1">
              <GradientButton href="#applications" className="h-12 px-6 text-sm font-medium">
                Explore applications <ArrowRightIcon className="h-4 w-4" />
              </GradientButton>
              <GradientButton to="/contact" className="h-12 border border-[var(--theme-border)] bg-none bg-white/[0.025] px-5 text-xs font-semibold uppercase tracking-[0.07em] text-[var(--theme-text)] shadow-none hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]">
                Discuss requirements
              </GradientButton>
            </div>
          </div>
          <figure data-reveal="right" className="group relative min-h-[340px] overflow-hidden rounded-[24px] border border-[var(--theme-border)] bg-black/20 sm:min-h-[430px]">
            <img src={service.image} alt="Flexographic printing press transferring ink onto a substrate" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/55" />
            <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3 sm:inset-x-5 sm:top-5">
              <span className="text-[8px] font-semibold tracking-[0.13em] text-white/85 sm:text-[9px]">FLEXOGRAPHIC PRINTING PRESS</span>
              <span className="inline-flex items-center gap-2 text-[8px] font-semibold tracking-[0.1em] text-lime-300"><span className="h-1.5 w-1.5 rounded-full bg-lime-300" /> ACTIVE FEED</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
              <h2 className="text-xl font-medium leading-tight text-white sm:text-2xl">Flexible plates. <span className="text-[var(--theme-accent)]">Consistent print.</span></h2>
              <p className="mt-2 max-w-[420px] text-xs leading-5 text-white/75">High-speed ink transfer for labels, packaging, and a wide range of substrates.</p>
              <div className="mt-4 grid grid-cols-3 gap-1.5 sm:gap-2">
                {[["PRINT PROCESS", "FLEXOGRAPHIC"], ["PLATE TYPE", "FLEXIBLE"], ["APPLICATION", "LABELS & PACKAGING"]].map(([label, value]) => (
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

      <section className="space-y-7">
        <SectionLabel className="text-left text-[var(--theme-accent-alt)]">Advantages of flexographic printing</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map(([number, label, title, description, Icon]) => (
            <article key={number} data-reveal="up" className={`${panelClass} rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1`}>
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)]"><Icon className="h-5 w-5" /></div>
              <p className="mb-2 text-[10px] font-semibold tracking-[0.16em] text-[var(--theme-accent-alt)]">{number} / {label}</p>
              <h2 className="mb-2 text-xl font-medium">{title}</h2>
              <p className="text-sm leading-6 text-[var(--theme-text-soft)]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section data-reveal="up" className={`${panelClass} overflow-hidden rounded-[28px] p-6 sm:p-10`}>
        <div className="max-w-5xl space-y-8">
          <SectionLabel className="text-left text-[var(--theme-accent-alt)]">Flexographic process</SectionLabel>
          <h2 className="max-w-4xl border-l-2 border-[var(--theme-accent-alt)] pl-5 text-2xl font-medium leading-tight sm:pl-7 sm:text-3xl lg:text-4xl">Flexible plates. Multiple colors. Consistent reproduction. Built for high-speed production.</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[["01 / PLATE", "A flexible plate carries a raised image that receives ink and transfers the artwork to the substrate."], ["02 / COLOR", "Each station prints a single color; multiple stations work together to achieve accurate registration."], ["03 / FINISH", "Printed materials can be die cut, sheeted, embossed, or perforated to suit the finished application."]].map(([label, description]) => (
              <div key={label} className="rounded-xl border border-[var(--theme-border)] bg-black/[0.08] p-5">
                <p className="mb-3 text-[10px] font-semibold tracking-[0.15em] text-[var(--theme-accent)]">{label}</p>
                <p className="text-sm leading-6 text-[var(--theme-text-soft)]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="applications" className="scroll-mt-28 space-y-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel className="mb-3 text-left text-[var(--theme-accent-alt)]">Flexographic applications</SectionLabel>
            <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl">Labels for <span className="text-[var(--theme-accent)]">every application</span></h2>
          </div>
          <span className="w-fit border-b border-[var(--theme-accent-alt)] pb-2 text-xs font-medium tracking-[0.12em] text-[var(--theme-text-soft)]">16 CORE APPLICATIONS</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map(([title, description, Icon]) => (
            <article key={title} data-reveal="up" className={`${panelClass} flex min-h-[92px] items-center gap-4 rounded-xl p-4 transition-colors duration-300 hover:border-[var(--theme-accent)]/40 sm:p-5`}>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)]"><Icon className="h-5 w-5" /></span>
              <span className="min-w-0"><span className="block text-sm font-medium leading-snug text-[var(--theme-text)]">{title}</span><span className="mt-1 block text-xs leading-5 text-[var(--theme-text-soft)]">{description}</span></span>
            </article>
          ))}
        </div>
      </section>

      <section className={`${panelClass} overflow-hidden rounded-[28px] p-6 sm:p-10`}>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionLabel className="text-left text-[var(--theme-accent-alt)]">Shrink sleeve technology</SectionLabel>
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl">Full-body <span className="text-[var(--theme-accent)]">branding</span></h2>
            <p className="text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base">Shrink sleeves are full-color labels that cover a container, providing 360-degree graphics for branding and messaging. Printed on engineered film, the sleeve responds to heat or steam and conforms to the container shape.</p>
            <div className="flex flex-wrap gap-2">
              {[[RotateCwIcon, "360-DEGREE GRAPHICS"], [PackageIcon, "CONTAINER CONFORMING"], [CircleGaugeIcon, "HEAT SHRINK"]].map(([Icon, text]) => (
                <span key={text} className="inline-flex items-center gap-2 rounded-md border border-[var(--theme-border)] px-3 py-2 text-[10px] tracking-[0.08em] text-[var(--theme-text-soft)]"><Icon className="h-3.5 w-3.5 text-[var(--theme-accent)]" />{text}</span>
              ))}
            </div>
          </div>
          <div data-reveal="right" className="relative flex min-h-[290px] items-center justify-center overflow-hidden rounded-[22px] border border-[var(--theme-border)] bg-[radial-gradient(ellipse_at_center,rgba(146,209,188,0.12),transparent_65%)] sm:min-h-[340px]">
            <p className="absolute left-5 top-5 text-[9px] font-medium tracking-[0.14em] text-[var(--theme-text-soft)]">SHRINK FILM / HEAT APPLICATION</p>
            <div className="relative mt-8 h-[196px] w-[118px] rounded-[24px_24px_28px_28px] bg-[linear-gradient(90deg,#111a20_0%,#53646a_18%,#172126_44%,#71837d_62%,#111a20_100%)] shadow-[0_20px_45px_rgba(0,0,0,0.4)]">
              <div className="absolute -top-8 left-8 h-10 w-[54px] rounded-t-lg bg-[linear-gradient(90deg,#27363a,#70817c,#182226)]" />
              <div className="absolute -top-11 left-7 h-4 w-[62px] rounded-md bg-[linear-gradient(90deg,#34413f,#96a38c,#2a3434)]" />
              <div className="absolute inset-x-[-3px] top-[48px] flex h-[105px] items-center justify-center overflow-hidden bg-[linear-gradient(110deg,#86d9f0,#92d1bc_45%,#e1de00)] text-center text-[#17201d] shadow-[0_0_25px_rgba(146,209,188,0.2)]">
                <span className="text-[10px] font-bold leading-5 tracking-[0.1em]">FULL BODY<br />SHRINK SLEEVE<br />360 BRANDING</span>
              </div>
            </div>
            <div className="absolute inset-x-5 bottom-5 flex items-center justify-between text-[9px] font-medium tracking-[0.12em] text-[var(--theme-text-soft)]"><span>HEAT</span><ArrowRightIcon className="h-3 w-3" /><span>CONFORM</span><ArrowRightIcon className="h-3 w-3" /><span>FINISHED PACK</span></div>
          </div>
        </div>
      </section>

      <section className="space-y-7">
        <SectionLabel className="text-left text-[var(--theme-accent-alt)]">Advantages of shrink sleeves</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sleeveAdvantages.map(([title, description, Icon]) => (
            <article key={title} data-reveal="up" className={`${panelClass} rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1`}>
              <Icon className="mb-5 h-5 w-5 text-[var(--theme-accent)]" />
              <h2 className="mb-2 text-lg font-medium">{title}</h2>
              <p className="text-sm leading-6 text-[var(--theme-text-soft)]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${panelClass} rounded-[28px] p-6 sm:p-10`}>
        <div className="space-y-7">
          <SectionLabel className="text-left text-[var(--theme-accent-alt)]">End-use applications</SectionLabel>
          <h2 className="text-2xl font-medium leading-tight sm:text-3xl">Flexo shrink sleeve <span className="text-[var(--theme-accent)]">applications</span></h2>
          <div className="grid gap-4 md:grid-cols-3">
            {endUses.map(([label, title, description]) => (
              <article key={title} data-reveal="up" className="rounded-xl border border-[var(--theme-border)] bg-black/[0.08] p-5 sm:p-6">
                <p className="mb-3 text-[10px] font-semibold tracking-[0.14em] text-[var(--theme-accent-alt)]">{label}</p>
                <h3 className="mb-3 text-lg font-medium">{title}</h3>
                <p className="text-sm leading-6 text-[var(--theme-text-soft)]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal="up" className="overflow-hidden rounded-[28px] border border-[var(--theme-border)] bg-[linear-gradient(120deg,rgba(134,217,240,0.09),rgba(146,209,188,0.08),rgba(225,222,0,0.06))] p-6 sm:p-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <SectionLabel className="text-left text-[var(--theme-accent-alt)]">Why flexo</SectionLabel>
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl">Efficient. <span className="text-[var(--theme-accent)]">Flexible.</span> Scalable.</h2>
            <p className="max-w-2xl text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base">Flexographic printing combines efficient production, high-quality reproduction, and substrate flexibility for a broad range of labeling and promotional requirements.</p>
            <GradientButton to="/contact" className="h-12 px-6 text-sm font-medium">Discuss your project <ArrowRightIcon className="h-4 w-4" /></GradientButton>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[[CircleGaugeIcon, "HIGH SPEED", "Fast press production"], [GemIcon, "HIGH QUALITY", "Detailed reproduction"], [TagIcon, "LABEL READY", "Labels and promotions"], [Layers3Icon, "MULTI-VARIANT", "Flexible production"]].map(([Icon, title, description]) => (
              <div key={title} className="rounded-xl border border-[var(--theme-border)] bg-black/10 p-4 sm:p-5">
                <Icon className="mb-4 h-4 w-4 text-[var(--theme-accent)]" />
                <p className="text-xs font-semibold tracking-[0.08em]">{title}</p>
                <p className="mt-1 text-xs leading-5 text-[var(--theme-text-soft)]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  </main>
);