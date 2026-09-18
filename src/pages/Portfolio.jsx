import { ChevronDownIcon } from "lucide-react";
import { GradientButton } from "../components/shared/GradientButton";
import { SectionLabel } from "../components/shared/SectionLabel";
import { SectionHeading } from "../components/shared/SectionHeading";
import { PortfolioCard } from "../components/shared/PortfolioCard";
import { PORTFOLIO_CASES } from "../lib/assets";

export const Portfolio = () => {
  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[260px] overflow-hidden sm:h-[340px] lg:h-[400px]">
        <img
          className="parallax-media absolute inset-0 h-full w-full object-cover"
          alt="Our portfolio"
          src={PORTFOLIO_CASES[0].image}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-12 text-center">
          <SectionLabel className="mb-2">PORTFOLIO</SectionLabel>
          <SectionHeading
            primary="Our"
            secondary="Latest Cases"
            className="text-[28px] sm:text-[36px] lg:text-[44px]"
            secondaryClassName="text-[36px] sm:text-[48px] lg:text-[55px]"
          />
        </div>
      </section>

      {/* Portfolio gallery */}
      <section className="relative z-10 w-full px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-8 flex flex-col gap-2 sm:mb-12">
            <SectionLabel>SHOWCASE</SectionLabel>
            <SectionHeading
              primary="Selected"
              secondary="Works"
              className="text-[28px] sm:text-[36px]"
              secondaryClassName="text-[36px] sm:text-[48px]"
            />
          </div>

          {/* Masonry-style grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {/* Large feature card */}
            <PortfolioCard
              title={PORTFOLIO_CASES[0].title}
              image={PORTFOLIO_CASES[0].image}
              showOverlay
              className="h-[300px] sm:h-[400px] lg:col-span-2 lg:row-span-2 lg:h-[520px]"
            />

            {PORTFOLIO_CASES.slice(1).map((item) => (
              <PortfolioCard
                key={item.title}
                title={item.title}
                image={item.image}
                showOverlay
                className="h-[220px] sm:h-[260px] lg:h-[248px]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 w-full px-4 py-16 text-center sm:px-6">
        <h2 className="mb-4 [font-family:'Merriweather',Helvetica] text-[24px] font-normal italic text-white sm:text-[32px]">
          Have a project in mind?
        </h2>
        <GradientButton to="/contact" className="px-8 py-3 text-base font-semibold">
          Let's talk
          <ChevronDownIcon className="h-4 w-4 -rotate-90" />
        </GradientButton>
      </section>
    </>
  );
};
