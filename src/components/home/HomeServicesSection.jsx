import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionLabel } from "../shared/SectionLabel";
import { SectionHeading } from "../shared/SectionHeading";
import { SERVICES } from "../../lib/assets";

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const pad = (n) => String(n).padStart(2, "0");

export const HomeServicesSection = ({ activeServiceIndex, setActiveServiceIndex }) => {
  const [slideDirection, setSlideDirection] = useState("next");
  const total = SERVICES.length;
  const current = clamp(activeServiceIndex ?? 0, 0, total - 1);
  const showService = (index) => {
    const nextIndex = clamp(index, 0, total - 1);
    if (nextIndex === current) return;

    setSlideDirection(nextIndex > current ? "next" : "previous");
    setActiveServiceIndex?.(nextIndex);
  };

  return (
    <section id="services-section" className="relative z-10 w-full overflow-x-hidden px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <style>{`
        @keyframes service-slide-in-next {
          from { opacity: 0; transform: translateX(5%); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes service-slide-in-previous {
          from { opacity: 0; transform: translateX(-5%); }
          to { opacity: 1; transform: translateX(0); }
        }
        .service-slide-in-next {
          animation: service-slide-in-next 420ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .service-slide-in-previous {
          animation: service-slide-in-previous 420ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .service-slide-in-next,
          .service-slide-in-previous {
            animation: none;
          }
        }
      `}</style>
      <div className="mx-auto flex w-full max-w-[1180px] flex-col">
        <header className="mb-4 flex flex-col gap-3 md:mb-5 md:gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#f7d51d]" />
              <SectionLabel className="text-sm font-bold uppercase leading-none tracking-[0.25em] text-[#f7d51d]">
                OUR SERVICES
              </SectionLabel>
            </div>
            <SectionHeading
              primary="We bring"
              secondary="ideas to life."
            />
          </div>
          <p className="max-w-full text-sm font-normal leading-relaxed tracking-[0] text-[#f0efeb] sm:text-base lg:max-w-[600px] lg:text-lg">
            <span className="font-light">
              From concept to final production, we handle every detail. From
              high-quality printing to packaging and finishing, we bring your
              ideas to life with{" "}
            </span>
            <span className="font-medium text-[#e1de00]">precision</span>
            <span className="font-light">
              , creativity, and consistency.
            </span>
          </p>
        </header>

        <div className="mb-4 h-px w-full bg-white/20 md:mb-5" />

        <div className="relative overflow-hidden">
              {SERVICES.map((service, index) => index === current && (
                <article
                  key={service.title}
                  className={`service-slide-in-${slideDirection} flex min-h-[500px] flex-col overflow-hidden shadow-[-24px_0_48px_-24px_rgba(0,0,0,0.45)] md:h-[440px] md:min-h-0 md:flex-row`}
                >
                  {/* Image */}
                  <div className="relative min-h-[220px] flex-1 md:min-h-0 md:flex-[1.9]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover"
                      draggable={false}
                    />
                  </div>

                  {/* Content panel */}
                  <div className="relative flex min-h-0 flex-1 flex-col justify-between bg-[linear-gradient(138deg,rgba(134,217,240,1)_0%,rgba(192,229,116,1)_100%)] p-4 text-black sm:p-5 md:p-6 lg:p-8">
                    <div className="flex flex-col gap-1 sm:gap-2 md:gap-3">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                         SERVICE {pad(index + 1)}
                      </span>
                      <h3 className="text-2xl font-medium leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                        {service.title}
                      </h3>
                      <p className="max-w-[340px] text-xs leading-relaxed sm:text-sm md:text-base">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-2 flex items-end justify-between gap-3 sm:mt-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-black px-3 py-2 text-xs font-medium text-white transition-opacity hover:opacity-85 sm:px-4 sm:py-2.5 sm:text-sm"
                      >
                        Start a project
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>

                      {/* Counter + progress */}
                      <div className="flex items-center gap-3 text-xs">
                        <span>{pad(current + 1)}</span>
                        <div className="relative h-px w-16 bg-black/30 md:w-24">
                          <div
                            className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-black"
                            style={{ width: `${((current + 1) / total) * 100}%` }}
                          />
                        </div>
                        <span>{pad(total)}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View all services
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <div
                className="flex items-center gap-2 rounded-full bg-[#0b0d12]/80 p-1.5 backdrop-blur-sm"
                aria-label="Service navigation"
              >
                <button
                  type="button"
                  onClick={() => showService(current - 1)}
                  disabled={current === 0}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-[#10141d] text-white transition hover:border-[#f7d51d] hover:bg-[#f7d51d] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7d51d] disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Previous service"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => showService(current + 1)}
                  disabled={current === total - 1}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-[#10141d] text-white transition hover:border-[#f7d51d] hover:bg-[#f7d51d] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7d51d] disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Next service"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
      </div>
    </section>
  );
};