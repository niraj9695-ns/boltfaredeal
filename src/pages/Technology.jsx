import { ArrowUpRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

import { GradientButton } from "../components/shared/GradientButton";
import { SectionLabel } from "../components/shared/SectionLabel";
import { TECHNOLOGY_ITEMS } from "./Services";

export const Technology = () => {
  return (
    <main className="relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[620px]">
            <SectionLabel className="mb-3 text-left text-[var(--theme-accent-alt)]">
              OUR TECHNOLOGY
            </SectionLabel>

            <h1 className="text-3xl font-medium tracking-[-0.04em] text-[var(--theme-text)] sm:text-4xl lg:text-[3.1rem]">
              Technology &amp; Infrastructure
            </h1>
          </div>

          <div className="flex flex-col gap-4 lg:max-w-[520px] lg:items-end">
            <p className="max-w-[520px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base">
              Advanced printing, finishing, and packaging technology built to deliver precision, consistency, and high-quality results.
            </p>

            <GradientButton to="/services" className="h-[48px] px-[26px] text-sm font-medium tracking-[-0.2px] sm:text-[15px]">
              Back to services
            </GradientButton>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {TECHNOLOGY_ITEMS.map((item, index) => (
            <article
              key={item.title}
              className="service-card group relative h-[420px] overflow-hidden rounded-[28px] border-0 bg-[#233a35] shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1"
            >
              <img
                className="absolute inset-0 h-full w-full scale-105 object-contain transition-all duration-700 ease-out group-hover:scale-100"
                alt={item.title}
                src={item.image}
                loading="lazy"
              />

              <div className="service-card-overlay absolute inset-0 rounded-[28px] bg-blend-screen bg-[linear-gradient(138deg,rgba(134,217,240,0.23)_0%,rgba(192,229,116,0.3)_100%)] bg-[#0f1715]/40 transition-all duration-700 ease-out group-hover:bg-[#0f1715]/15" />

              <div className="relative z-10 flex h-full flex-col p-0">
                <div className="service-card-label ml-4 mt-4 flex h-10 w-auto max-w-[180px] items-center justify-center rounded-[10px] bg-white px-2.5 py-2 text-center [font-family:'Merriweather',Helvetica] text-sm font-normal leading-tight tracking-[0] text-[#393939] shadow-sm">
                  {item.title}
                </div>

                <div className="mt-auto px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                  <div className="translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ul className="space-y-2">
                      {item.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-[11px] leading-5 text-white/80 sm:text-xs"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--theme-accent)]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="service-card-action flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-100 shadow-lg backdrop-blur-sm transition-all duration-300 pointer-events-auto group-hover:translate-x-1 group-hover:border-[#e1de00]/60 group-hover:bg-[#e1de00] group-hover:text-[#0f1715] group-hover:shadow-[0_0_18px_rgba(225,222,0,0.35)]">
                      <ArrowUpRightIcon className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};
