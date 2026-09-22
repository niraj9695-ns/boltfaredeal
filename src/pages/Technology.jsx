import { ArrowUpRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

import { GradientButton } from "../components/shared/GradientButton";
import { SectionLabel } from "../components/shared/SectionLabel";
import { TECHNOLOGY_ITEMS } from "./Services";

export const Technology = () => {
  return (
    <main className="relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]">
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
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
              Advanced printing, finishing, and packaging technology built to
              deliver precision, consistency, and high-quality results.
            </p>

            <GradientButton
              to="/services"
              className="h-[48px] px-[26px] text-sm font-medium tracking-[-0.2px] sm:text-[15px]"
            >
              Back to services
            </GradientButton>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {TECHNOLOGY_ITEMS.map((item) => (
            <Link
              key={item.title}
              to="/technology"
              className="group block"
            >
              {/* IMAGE CARD */}
              <article
                className="
                  service-card
                  relative
                  h-[420px]
                  overflow-hidden
                  rounded-[28px]
                  border-0
                  shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                  transition-transform
                  duration-500
                  group-hover:-translate-y-1

                  bg-[linear-gradient(138deg,rgba(134,217,240,0.23)_0%,rgba(192,229,116,0.30)_100%)]
                "
              >
                {/* Image stays completely clear */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    scale-105
                    object-contain
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-100
                  "
                />
              </article>

              {/* CONTENT OUTSIDE CARD */}
              <div className="px-1 pt-5">
                <div className="flex items-start justify-between gap-4">
                  {/* NAME + DETAILS */}
                  <div className="min-w-0">
                    <h2
                      className="
                        text-lg
                        font-medium
                        leading-tight
                        tracking-[-0.02em]
                        text-[var(--theme-text)]
                        sm:text-xl
                      "
                    >
                      {item.title}
                    </h2>

                    {/* DETAILS */}
                    {item.features?.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {item.features.slice(0, 3).map((feature) => (
                          <li
                            key={feature}
                            className="
                              flex
                              items-start
                              gap-2
                              text-xs
                              leading-5
                              text-[var(--theme-text-soft)]
                              sm:text-sm
                            "
                          >
                            <span
                              className="
                                mt-[7px]
                                h-1.5
                                w-1.5
                                shrink-0
                                rounded-full
                                bg-[var(--theme-accent)]
                              "
                            />

                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};