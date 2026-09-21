import { ArrowUpRightIcon, CheckCircleIcon } from "lucide-react";
import { useState } from "react";

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

export const Services = () => {
  const [activeService, setActiveService] = useState(0);

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
    lg:pt-32 lg:pb-16
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
      {SERVICES.slice(0, 6).map((service, index) => (
        <article
          key={service.title}
          onMouseEnter={() => setActiveService(index)}
          onFocus={() => setActiveService(index)}
          tabIndex={0}
          data-reveal={index % 2 === 0 ? "left" : "right"}
          data-delay={index * 120}
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
              ${
                activeService === index
                  ? "scale-105"
                  : "scale-100"
              }
            `}
          />

          <div
            className="service-paper-shell"
            style={{
              backgroundImage: `url(${service.image})`,
              animationDelay: `${index * 140}ms`,
            }}
            aria-hidden="true"
          >
            <span className="service-paper-fold service-paper-fold-1" />
            <span className="service-paper-fold service-paper-fold-2" />
            <span className="service-paper-fold service-paper-fold-3" />
            <span className="service-paper-fold service-paper-fold-4" />
          </div>

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
      ))}
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

      

      
    </>
  );
};