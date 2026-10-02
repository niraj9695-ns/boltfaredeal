import { useId, useRef } from "react";
import { ArrowLeft, ArrowRight, ChevronDownIcon } from "lucide-react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

import { GradientButton } from "../shared/GradientButton";
import { SectionLabel } from "../shared/SectionLabel";
import { SectionHeading } from "../shared/SectionHeading";
import { PortfolioCard } from "../shared/PortfolioCard";
import { PORTFOLIO_CASES } from "../../lib/assets";

const sliderCss = `
  .portfolio-carousel {
    position: relative;
    width: 100%;
    padding: 30px 0;
    perspective: 1200px;
    perspective-origin: 50% 50%;
  }

  .portfolio-section__clip-defs {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
  }

  .portfolio-carousel .splide {
    overflow: visible;
  }

  .portfolio-carousel .splide__track {
    overflow: visible;
    clip-path: var(--portfolio-clip-path);
  }

  .portfolio-carousel .splide__list {
    align-items: center;
    transform-style: preserve-3d;
  }

  .portfolio-carousel .splide__slide {
    height: auto;
    opacity: 1;
    transform: translateY(-55px) scale(0.88);
    transform-origin: center center;
  }

  .portfolio-carousel .portfolio-card-overlay {
    background: none !important;
  }

  .portfolio-carousel .portfolio-card,
  .portfolio-carousel .portfolio-card:hover {
    box-shadow: none !important;
  }

  .portfolio-carousel .portfolio-card,
  .portfolio-carousel .portfolio-media,
  .portfolio-carousel .portfolio-card-overlay {
    border-radius: 0 !important;
  }

  @media (max-width: 1100px) {
    .portfolio-carousel .splide__track {
      clip-path: var(--portfolio-clip-path-tablet);
    }
    .portfolio-carousel .splide__slide {
      transform: translateY(-45px) scale(0.88);
    }
  }

  @media (max-width: 700px) {
    .portfolio-carousel .splide__track {
      clip-path: var(--portfolio-clip-path-mobile);
    }
    .portfolio-carousel .splide__slide {
      transform: translateY(-20px) scale(0.9);
    }
  }
`;

export const HomePortfolioSection = () => {
  const clipPathId = useId().replaceAll(":", "");
  const splideRef = useRef(null);

  const goTo = (direction) => {
    splideRef.current?.splide?.go(direction);
  };

  return (
    <section className="portfolio-section relative z-10 w-full overflow-hidden py-16 md:py-20">
      <style>{sliderCss}</style>

      {/* Clip paths: desktop, tablet, mobile */}
      <svg
        className="portfolio-section__clip-defs"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <clipPath id={`${clipPathId}-desktop`} clipPathUnits="objectBoundingBox">
            <path d="M0 0 Q.5 .22 1 0 L1 .86 Q.5 .70 0 .86Z" />
          </clipPath>

          <clipPath id={`${clipPathId}-tablet`} clipPathUnits="objectBoundingBox">
            <path d="M0 0 Q.5 .12 1 0 L1 .92 Q.5 .84 0 .92Z" />
          </clipPath>

          <clipPath id={`${clipPathId}-mobile`} clipPathUnits="objectBoundingBox">
            <path d="M0 0 Q.5 .06 1 0 L1 .96 Q.5 .92 0 .96Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Heading */}
      <header className="mx-auto mb-12 flex max-w-[760px] flex-col items-center px-4 text-center sm:px-6 md:mb-16">
        <SectionLabel>PORTFOLIO</SectionLabel>
        <SectionHeading primary="Our" secondary="Latest Cases" />
      </header>

      {/* Slider */}
      <div
        className="portfolio-carousel"
        aria-label="Latest cases"
        style={{
          "--portfolio-clip-path": `url(#${clipPathId}-desktop)`,
          "--portfolio-clip-path-tablet": `url(#${clipPathId}-tablet)`,
          "--portfolio-clip-path-mobile": `url(#${clipPathId}-mobile)`,
        }}
      >
        <Splide
          ref={splideRef}
          extensions={{ AutoScroll }}
          options={{
            type: "loop",
            autoScroll: {
              speed: 0.7,
              pauseOnHover: false,
              pauseOnFocus: false,
            },
            perPage: 3,
            perMove: 1,
            focus: "center",
            fixedWidth: "430px",
            gap: "-3.5rem",
            padding: {
              left: "calc((100% - 430px) / 2)",
              right: "calc((100% - 430px) / 2)",
            },
            drag: true,
            snap: false,
            keyboard: "focused",
            pagination: false,
            arrows: false,
            breakpoints: {
              1100: {
                perPage: 2,
                fixedWidth: "380px",
                gap: "-2.75rem",
                padding: {
                  left: "calc((100% - 380px) / 2)",
                  right: "calc((100% - 380px) / 2)",
                },
              },
              700: {
                perPage: 1,
                fixedWidth: "78vw",
                gap: "-1.5rem",
                padding: { left: "11vw", right: "11vw" },
              },
            },
          }}
        >
          {PORTFOLIO_CASES.map((item, index) => (
            <SplideSlide key={item.title ?? index}>
              <PortfolioCard
                title={item.title}
                image={item.image}
                showOverlay
                className="h-[380px] w-full min-[701px]:h-[440px] min-[1101px]:h-[480px]"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Controls */}
      <div className="mx-auto mt-8 flex w-[min(100%-40px,1180px)] items-center justify-between">
        <p className="text-[11px] uppercase tracking-[0.08em] opacity-60">
          <span className="opacity-100">
            {String(PORTFOLIO_CASES.length).padStart(2, "0")}
          </span>{" "}
          cases
        </p>

        <div className="flex gap-2.5">
          <button
            type="button"
            aria-label="Previous case"
            onClick={() => goTo("<")}
            className="grid h-11 w-11 place-items-center rounded-sm border border-current/25 transition hover:border-current"
          >
            <ArrowLeft aria-hidden="true" size={18} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            aria-label="Next case"
            onClick={() => goTo(">")}
            className="grid h-11 w-11 place-items-center rounded-sm border border-current/25 transition hover:border-current"
          >
            <ArrowRight aria-hidden="true" size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* View all */}
      <div className="mt-8 flex justify-center sm:mt-10">
        <GradientButton to="/portfolio" className="px-6 py-3 text-sm font-semibold">
          View All Cases
          <ChevronDownIcon className="h-4 w-4 -rotate-90" />
        </GradientButton>
      </div>
    </section>
  );
};