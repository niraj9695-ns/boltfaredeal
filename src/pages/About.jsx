import { CheckCircleIcon, ChevronDownIcon } from "lucide-react";
import { useEffect, useState } from "react";

import interior1 from "../assets/images/Interior/1.png";
import interior2 from "../assets/images/Interior/2.png";
import interior3 from "../assets/images/Interior/3.png";
import interior4 from "../assets/images/Interior/4.png";
import interior5 from "../assets/images/Interior/5.png";
import interior6 from "../assets/images/Interior/6.png";
import interior7 from "../assets/images/Interior/7.png";
import interior8 from "../assets/images/Interior/8.png";
import interior9 from "../assets/images/Interior/9.png";
import interior10 from "../assets/images/Interior/10.png";
import interior11 from "../assets/images/Interior/11.png";
import interior12 from "../assets/images/Interior/12.png";
import { GradientButton } from "../components/shared/GradientButton";
import { SectionLabel } from "../components/shared/SectionLabel";
import { StatItem } from "../components/shared/StatItem";
import { ASSETS, STATS } from "../lib/assets";

const interiorImages = [
  interior1,
  interior2,
  interior3,
  interior4,
  interior5,
  interior6,
  interior7,
  interior8,
  interior9,
  interior10,
  interior11,
  interior12,
];

const desktopRowOne = [...interiorImages.slice(0, 6), ...interiorImages.slice(0, 6)];
const desktopRowTwo = [...interiorImages.slice(6), ...interiorImages.slice(6)];
const mobileRow = [...interiorImages, ...interiorImages];

const storyValues = [
  "Quality and honesty at every stage",
  "Experienced and dedicated team",
  "End-to-end printing and packaging solutions",
  "Modern printing technology and equipment",
  "Timely delivery with consistent quality",
  "Customer-focused and cost-effective solutions",
];

export const About = () => {
  const [isLightTheme, setIsLightTheme] = useState(() => document.documentElement.getAttribute("data-theme") === "light");

  useEffect(() => {
    const syncTheme = () => {
      setIsLightTheme(document.documentElement.getAttribute("data-theme") === "light");
    };

    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-[var(--theme-bg)] text-[var(--theme-text)]">

      {/* =========================================================
          HERO
      ========================================================= */}
   <section
     className="relative overflow-hidden px-4 pb-12 pt-[12px] sm:px-6 sm:pb-16 sm:pt-[12px] md:pt-[165px] lg:px-8 lg:pb-20 lg:pt-[165px]"
     style={
       isLightTheme
         ? {
             background: "linear-gradient(180deg, rgba(249,255,205,0.38) 0%, rgba(249,255,205,0.38) 5%, #FFFFFF 100%)",
           }
         : undefined
     }
   >
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
    opacity: 0.30,
    WebkitMaskImage:
      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0) 100%)",
    maskImage:
      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0) 100%)",
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
          Established in 1990, Fairdeal Print Pack India Pvt. Ltd. has grown
  from a humble printing venture into a comprehensive printing and
  packaging solution provider. With expertise across offset, flexo,
  screen printing, labels, cartons and packaging, we bring design,
  production, finishing and distribution together under one roof.
        </p>

        <div className="mt-7">
          <GradientButton
            to="/contact"
            className="px-7 py-2.5 text-xs font-semibold sm:px-8 sm:py-3 sm:text-sm"
          >
            Start Your Project
            <ChevronDownIcon className="h-3.5 w-3.5 -rotate-90" />
          </GradientButton>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* =========================================================
          IMAGE MARQUEE
      ========================================================= */}
      <section className="relative px-4 py-3 sm:px-6 sm:py-5 lg:px-8">
        <div className="mx-auto max-w-[1280px]">

          <div className="space-y-3 overflow-hidden md:hidden">
            {[
              { id: "mobile-left", items: [...desktopRowOne, ...desktopRowOne], direction: "left" },
              { id: "mobile-right", items: [...desktopRowTwo, ...desktopRowTwo], direction: "right" },
            ].map((row) => (
              <div key={row.id} className="overflow-hidden">
                <div
                  className={`client-marquee-track ${row.direction === "right" ? "client-marquee-track-reverse" : "client-marquee-track-left"} flex w-max items-center gap-2`}
                >
                  {row.items.map((image, index) => (
                    <div
                      key={`${row.id}-${index}`}
                      className="client-logo-card shrink-0 overflow-hidden rounded-[14px] border"
                      style={{
                        borderColor: "var(--theme-border)",
                        background: "var(--theme-surface-soft)",
                        width: "min(38vw, 180px)",
                      }}
                    >
                      <img
                        src={image}
                        alt={`Interior project ${index + 1}`}
                        className="h-[120px] w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="hidden space-y-4 md:block">
            {[
              { id: "left", items: [...desktopRowOne, ...desktopRowOne], direction: "left" },
              { id: "right", items: [...desktopRowTwo, ...desktopRowTwo], direction: "right" },
            ].map((row) => (
              <div key={row.id} className="overflow-hidden">
                <div
                  className={`client-marquee-track ${row.direction === "right" ? "client-marquee-track-reverse" : "client-marquee-track-left"} flex w-max items-center gap-3 md:gap-5`}
                >
                  {row.items.map((image, index) => (
                    <div
                      key={`${row.id}-${index}`}
                      className="client-logo-card shrink-0 overflow-hidden rounded-[18px] border"
                      style={{
                        borderColor: "var(--theme-border)",
                        background: "var(--theme-surface-soft)",
                        width: "clamp(180px, 22vw, 360px)",
                      }}
                    >
                      <img
                        src={image}
                        alt={`Interior project ${index + 1}`}
                        className="h-[220px] w-full object-cover lg:h-[280px]"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
    Fairdeal began its journey in 1990 when Rajesh Yewale started
    learning the art of printing while working with a photographer
    and later established Fairdeal Advertising with manual screen
    printing. The early years brought many challenges, but they
    built the foundation for a business driven by perseverance,
    discipline, quality and honest work.
  </p>

  <p
    className="[font-family:'Inter',Helvetica] text-[12px] font-light leading-[1.75] sm:text-sm"
    style={{
      color: "var(--theme-text-soft)",
    }}
  >
    Over the years, Fairdeal Print Pack India Pvt. Ltd. has grown
    into a full-fledged printing and packaging organisation in Pune.
    Today, the company provides solutions ranging from structural
    design and pre-press to printing, finishing, packaging and
    distribution, supported by modern printing technology and an
    experienced team.
  </p>

  <p
    className="[font-family:'Inter',Helvetica] text-[12px] font-light leading-[1.75] sm:text-sm"
    style={{
      color: "var(--theme-text-soft)",
    }}
  >
    With a clientele of 1000+ across the country, Fairdeal continues
    to build long-term relationships by focusing on quality,
    cost-effectiveness, commitment and customer satisfaction.
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