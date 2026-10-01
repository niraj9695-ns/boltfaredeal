import { useEffect, useRef } from "react";
import { ArrowUpRight, ChevronDownIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionLabel } from "../shared/SectionLabel";
import { SectionHeading } from "../shared/SectionHeading";
import { SERVICES } from "../../lib/assets";

const BRAND = "NORTHLINE";
const SCROLL_PER_CARD_VH = 80; // extra scroll distance (in vh) for each new card

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const pad = (n) => String(n).padStart(2, "0");

export const HomeServicesSection = ({ activeServiceIndex, setActiveServiceIndex }) => {
  const wrapperRef = useRef(null);
  const cardRefs = useRef([]);
  const barRef = useRef(null);
  const lastIndexRef = useRef(0);

  const total = SERVICES.length;

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const scrollable = wrapper.offsetHeight - window.innerHeight;
      const progress = scrollable > 0 ? clamp(-rect.top / scrollable, 0, 1) : 0;
      const t = progress * (total - 1); // 0 -> total-1

      // Card 0 stays in place. Every next card slides in from the right and overlaps.
      cardRefs.current.forEach((el, i) => {
        if (!el || i === 0) return;
        const local = clamp(t - (i - 1), 0, 1);
        const eased = local * local * (3 - 2 * local);
        const offset = (1 - eased) * 100;
        const scale = 0.97 + eased * 0.03;
        el.style.transform = `translate3d(${offset}%, -50%, 0) scale(${scale})`;
      });

      if (barRef.current) {
        barRef.current.style.width = `${((t + 1) / total) * 100}%`;
      }

      const idx = clamp(Math.round(t), 0, total - 1);
      if (idx !== lastIndexRef.current) {
        lastIndexRef.current = idx;
        setActiveServiceIndex?.(idx);
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [total, setActiveServiceIndex]);

  const current = clamp(activeServiceIndex ?? 0, 0, total - 1);

  return (
    <section id="services-section" className="relative z-10 w-full">
      {/* Tall wrapper = the scroll distance. The inner block is sticky inside it,
          so it un-sticks by itself once the last card is fully in. */}
      <div
        ref={wrapperRef}
        style={{ height: `${100 + (total - 1) * SCROLL_PER_CARD_VH}vh` }}
        className="relative"
      >
        <div className="sticky top-[52px] flex h-[calc(100dvh-52px)] w-full flex-col px-4 py-4 sm:px-6 sm:py-5 md:top-0 md:h-[100dvh] md:py-6 lg:px-8">
          <div className="mx-auto flex min-h-0 w-full max-w-[1180px] flex-1 flex-col">
            {/* Section header (stays sticky with the cards) */}
            <header className="mb-4 flex flex-col gap-3 md:mb-5 md:gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
              <div className="flex flex-col gap-2">
                <SectionLabel>OUR SERVICES</SectionLabel>
                <SectionHeading
                  primary="We bring"
                  secondary="ideas to life."
                  primaryClassName="leading-[59px] not-italic"
                  secondaryClassName="not-italic"
                />
              </div>
              <div className="flex max-w-full items-start gap-4 lg:max-w-[530px]">
                <p className="flex-1 text-sm font-normal leading-relaxed tracking-[0] sm:text-base lg:text-lg">
                  <span className="font-light text-[#f0efeb]">
                    From concept to final production, we handle every detail. From
                    high-quality printing to packaging and finishing, we bring your
                    ideas to life with{" "}
                  </span>
                  <span className="font-medium text-[#e1de00]">precision</span>
                  <span className="font-light text-[#f0efeb]">
                    , creativity, and consistency.
                  </span>
                </p>
                <Link
                  to="/services"
                  className="mt-1 hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-[#92d1bc] hover:text-[#92d1bc] sm:flex"
                  aria-label="View more services"
                >
                  <ChevronDownIcon className="h-4 w-4 -rotate-90" />
                </Link>
              </div>
            </header>

            <div className="mb-4 h-px w-full bg-white/20 md:mb-5" />

            {/* Stacked cards */}
            <div className="relative min-h-0 flex-1 overflow-hidden">
              {SERVICES.map((service, index) => (
                <article
                  key={service.title}
                  ref={(el) => (cardRefs.current[index] = el)}
                  style={{
                    zIndex: index + 1,
                    transform: index === 0 ? "translate3d(0, -50%, 0)" : "translate3d(100%, -50%, 0) scale(0.97)",
                    willChange: "transform",
                  }}
                  className="absolute inset-x-0 top-1/2 flex h-[min(100%,58vh,440px)] flex-col overflow-hidden shadow-[-24px_0_48px_-24px_rgba(0,0,0,0.45)] md:flex-row"
                >
                  {/* Image */}
                  <div className="relative min-h-0 flex-[1.1] md:flex-[1.9]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover"
                      draggable={false}
                    />
                  </div>

                  {/* Content panel */}
                  <div className="relative flex min-h-0 flex-1 flex-col justify-between bg-[linear-gradient(138deg,rgba(134,217,240,1)_0%,rgba(192,229,116,1)_100%)] p-3 text-black sm:p-5 md:p-6 lg:p-8">
                    <div className="flex flex-col gap-1 sm:gap-2 md:gap-3">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                        {BRAND} / SERVICE {pad(index + 1)}
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
                          {index === current && (
                            <div
                              ref={barRef}
                              className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-black"
                              style={{ width: `${((current + 1) / total) * 100}%` }}
                            />
                          )}
                        </div>
                        <span>{pad(total)}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};