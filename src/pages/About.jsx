import { CheckCircleIcon, ChevronDownIcon } from "lucide-react";

import { GradientButton } from "../components/shared/GradientButton";
import { SectionLabel } from "../components/shared/SectionLabel";
import { StatItem } from "../components/shared/StatItem";
import { ASSETS, STATS } from "../lib/assets";

const storyValues = [
  "In-house quality control at every stage",
  "Faster turnaround with integrated operations",
  "State-of-the-art printing machines",
  "One-stop source for all print needs",
  "From structural design to distribution",
  "Serving clients since 1990",
];

export const About = () => {
  return (
    <div className="w-full overflow-x-hidden bg-[var(--theme-bg)] text-[var(--theme-text)]">

      {/* =========================================================
          HERO
      ========================================================= */}
   <section className="relative overflow-hidden px-4 pb-12 pt-[12px] sm:px-6 sm:pb-16 sm:pt-[12px] md:pt-[165px] lg:px-8 lg:pb-20 lg:pt-[165px]">
  <div className="mx-auto max-w-[1280px]">
    <div
      className="relative overflow-hidden px-5 py-14 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-[72px]"
      data-reveal="up"
    >

      {/* Large background FAIRDEAL */}
    <div
  className="pointer-events-none absolute left-1/2 top-[24px] z-0 w-full -translate-x-1/2 select-none text-center [font-family:'Merriweather',Helvetica] text-[clamp(3.5rem,13.5vw,15rem)] font-black uppercase leading-[0.72] tracking-[-0.09em]"
  style={{
    color: "var(--theme-accent-alt)",
    opacity: 0.14,
    WebkitMaskImage:
      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 58%, rgba(0,0,0,0) 100%)",
    maskImage:
      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 58%, rgba(0,0,0,0) 100%)",
  }}
>
  FAIRDEAL
</div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex max-w-[850px] flex-col items-center pt-[0px] sm:pt-[55px] md:pt-[70px] lg:pt-[80px]">

        <SectionLabel className="mb-3 text-center">
          ABOUT US
        </SectionLabel>

        <h1
          className="[font-family:'Merriweather',Helvetica] text-[clamp(2rem,4.2vw,4.8rem)] font-normal leading-[1.02] tracking-[-0.055em]"
          style={{
            color: "var(--theme-text)",
          }}
        >
          Delivering Print &amp; Packaging Excellence

          <span
            className="block"
            style={{
              color: "var(--theme-accent-alt)",
            }}
          >
            For Over 34 Years.
          </span>
        </h1>

        <p
          className="mt-5 max-w-[790px] [font-family:'Inter',Helvetica] text-[11px] font-light leading-[1.75] sm:text-xs md:text-sm"
          style={{
            color: "var(--theme-text-soft)",
          }}
        >
          From a small &amp; humble beginning when I first learned the art of
          printing while working with a photographer establishing Fairdeal
          Advertising with a manual screen printing in the year 1990. Today,
          FAIRDEAL has grown to be a leading organisation in Pune featuring
          world-class printing technology with a fleet of machines from
          Heidelberg, Germany. This journey is about perseverance, design
          thinking mindset and teamwork.
        </p>

        <div className="mt-7">
          <GradientButton
            to="/contact"
            className="px-7 py-2.5 text-xs font-semibold sm:px-8 sm:py-3 sm:text-sm"
          >
            Read more
            <ChevronDownIcon className="h-3.5 w-3.5 -rotate-90" />
          </GradientButton>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* =========================================================
          IMAGE GRID
      ========================================================= */}
      <section className="relative px-4 py-3 sm:px-6 sm:py-5 lg:px-8">
        <div className="mx-auto max-w-[1280px]">

          <div className="grid grid-cols-12 gap-3 sm:gap-4">

            {/* Large left image */}
            <div
              className="col-span-12 overflow-hidden rounded-[18px] border sm:col-span-5"
              style={{
                borderColor: "var(--theme-border)",
                background: "var(--theme-surface-soft)",
              }}
              data-reveal="left"
            >
              <img
                src={ASSETS.servicePackaging}
                alt="Packaging production"
                className="h-[190px] w-full object-cover sm:h-[300px] lg:h-[430px]"
                loading="lazy"
              />
            </div>

            {/* Right side */}
            <div className="col-span-12 grid grid-cols-2 gap-3 sm:col-span-7 sm:gap-4">

              {/* Top left */}
              <div
                className="overflow-hidden rounded-[18px] border"
                style={{
                  borderColor: "var(--theme-border)",
                  background: "var(--theme-surface-soft)",
                }}
                data-reveal="right"
              >
                <img
                  src={ASSETS.servicePrint}
                  alt="Print production"
                  className="h-[135px] w-full object-cover sm:h-[185px] lg:h-[210px]"
                  loading="lazy"
                />
              </div>

              {/* Top right */}
              <div
                className="overflow-hidden rounded-[18px] border"
                style={{
                  borderColor: "var(--theme-border)",
                  background: "var(--theme-surface-soft)",
                }}
                data-reveal="right"
              >
                <img
                  src={ASSETS.teamImg}
                  alt="Fairdeal team"
                  className="h-[135px] w-full object-cover sm:h-[185px] lg:h-[210px]"
                  loading="lazy"
                />
              </div>

              {/* Bottom wide image */}
              <div
                className="col-span-2 overflow-hidden rounded-[18px] border"
                style={{
                  borderColor: "var(--theme-border)",
                  background: "var(--theme-surface-soft)",
                }}
                data-reveal="up"
              >
                <img
                  src={ASSETS.studioImg}
                  alt="Design and packaging studio"
                  className="h-[145px] w-full object-cover sm:h-[185px] lg:h-[205px]"
                  loading="lazy"
                />
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          OUR STORY
      ========================================================= */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1280px]">

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

            {/* Heading */}
            <div
              className="max-w-[430px]"
              data-reveal="left"
            >
              <SectionLabel>OUR STORY</SectionLabel>

              <h2
                className="mt-4 [font-family:'Merriweather',Helvetica] text-[2.4rem] font-normal leading-[1.02] tracking-[-0.06em] sm:text-[3.2rem] lg:text-[4rem]"
                style={{
                  color: "var(--theme-text)",
                }}
              >
                We are creative &amp;
                <span
                  className="block italic"
                  style={{
                    color: "var(--theme-accent-alt)",
                  }}
                >
                  strong team
                </span>
              </h2>
            </div>

            {/* Story content */}
            <div data-reveal="right">

              <div className="space-y-5">

                <p
                  className="[font-family:'Inter',Helvetica] text-[12px] font-light leading-[1.75] sm:text-sm"
                  style={{
                    color: "var(--theme-text-soft)",
                  }}
                >
                  Established in 1990, Fairdeal Print Pack is a one-stop shop
                  that can handle all your quality print requirements from
                  structural design to production to distribution. Having the
                  entire operation in-house ensures tight control over quality
                  and faster turnaround.
                </p>

                <p
                  className="[font-family:'Inter',Helvetica] text-[12px] font-light leading-[1.75] sm:text-sm"
                  style={{
                    color: "var(--theme-text-soft)",
                  }}
                >
                  We cover the entire gamut of print needs — from company
                  profiles to brochures and catalogues, coffee-table books to
                  calendars, folding cartons and labels to luxury rigid boxes,
                  as well as point-of-sale material and packaging solutions
                  built for modern brands.
                </p>

              </div>

              {/* Stats */}
              <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-4 lg:mt-12">

                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-b pb-3"
                    style={{
                      borderColor: "var(--theme-border)",
                    }}
                    data-reveal="up"
                  >
                    <StatItem
                      value={stat.value}
                      label={stat.label}
                    />
                  </div>
                ))}

              </dl>

            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          OUR STRENGTH
      ========================================================= */}
      <section className="relative px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-[1280px]">

          <div
            className="overflow-hidden rounded-[24px] border p-4 sm:p-5 lg:p-7"
            style={{
              background: "var(--theme-surface)",
              borderColor: "var(--theme-border)",
            }}
          >

            <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-14">

              {/* Image */}
              <div
                className="relative overflow-hidden rounded-[18px]"
                data-reveal="left"
              >
                <img
                  src={ASSETS.serviceColor}
                  alt="Packaging and print production"
                  className="h-[300px] w-full object-cover sm:h-[390px] lg:h-[440px]"
                  loading="lazy"
                />

                {/* Slider arrow */}
                <div
                  className="absolute right-[-1px] top-1/2 flex h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border backdrop-blur-sm"
                  style={{
                    background: "var(--theme-surface)",
                    borderColor: "var(--theme-border)",
                    color: "var(--theme-text)",
                  }}
                >
                  <ChevronDownIcon className="h-4 w-4 -rotate-90" />
                </div>

                {/* Slider dots */}
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
                  <span
                    className="h-1 w-7 rounded-full"
                    style={{
                      background: "var(--theme-accent-alt)",
                    }}
                  />
                  <span
                    className="h-1 w-1 rounded-full"
                    style={{
                      background: "var(--theme-text-soft)",
                      opacity: 0.5,
                    }}
                  />
                  <span
                    className="h-1 w-1 rounded-full"
                    style={{
                      background: "var(--theme-text-soft)",
                      opacity: 0.5,
                    }}
                  />
                </div>
              </div>


              {/* Content */}
              <div
                className="flex flex-col justify-center px-2 py-4 sm:px-5 lg:px-2 lg:py-8"
                data-reveal="right"
              >

                <div
                  className="mb-3 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.3em]"
                  style={{
                    color: "var(--theme-accent-alt)",
                  }}
                >
                  <span
                    className="h-px w-6"
                    style={{
                      background: "var(--theme-accent-alt)",
                    }}
                  />
                  FAIRDEAL
                </div>

                <h3
                  className="[font-family:'Merriweather',Helvetica] text-[2rem] font-normal italic leading-[1.05] tracking-[-0.05em] sm:text-[2.8rem]"
                  style={{
                    color: "var(--theme-text)",
                  }}
                >
                  Our Strength
                </h3>

                <p
                  className="mt-4 max-w-[540px] [font-family:'Inter',Helvetica] text-[12px] font-light leading-[1.75] sm:text-sm"
                  style={{
                    color: "var(--theme-text-soft)",
                  }}
                >
                  Every day, our team delivers consistent quality and
                  dependable performance—from concept and print production to
                  finishing, packaging, and delivery.
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">

                  {storyValues.map((value) => (
                    <li
                      key={value}
                      className="flex items-start gap-2.5"
                    >
                      <CheckCircleIcon
                        className="mt-0.5 h-4 w-4 shrink-0"
                        style={{
                          color: "var(--theme-accent-alt)",
                        }}
                      />

                      <span
                        className="[font-family:'Inter',Helvetica] text-[11px] font-medium leading-[1.55] sm:text-xs"
                        style={{
                          color: "var(--theme-text)",
                        }}
                      >
                        {value}
                      </span>
                    </li>
                  ))}

                </ul>

              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};