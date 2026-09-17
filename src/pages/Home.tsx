import { ChevronDownIcon, PlayCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { GradientButton } from "../components/shared/GradientButton";
import { SectionLabel } from "../components/shared/SectionLabel";
import { SectionHeading } from "../components/shared/SectionHeading";
import { ServiceCard } from "../components/shared/ServiceCard";
import { PortfolioCard } from "../components/shared/PortfolioCard";
import { StatItem } from "../components/shared/StatItem";
import { ScrollIndicator } from "../components/shared/ScrollIndicator";
import { ASSETS, SERVICES, PORTFOLIO_CASES, STATS } from "../lib/assets";

export const Home = () => {
  return (
    <>
      {/* Hero section */}
      <section className="relative min-h-[100vh] overflow-hidden md:min-h-[809px]">
        {/* Background image */}
        <img
          className="absolute left-1/2 top-0 h-full w-full max-w-none -translate-x-1/2 object-cover md:h-[809px] md:w-[1440px]"
          alt="Printing studio"
          src={ASSETS.heroBgLarge}
        />
        {/* Dark gradient overlay for readability */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.3)_40%,rgba(0,0,0,0.9)_100%)]"
        />

        {/* Mobile top spacer for fixed header */}
        <div className="h-[52px] md:hidden" />

        {/* Hero text content */}
        <div className="relative z-10 flex min-h-[calc(100vh-52px)] flex-col justify-center px-6 pt-[140px] pb-20 md:min-h-[809px] md:px-[9.03%] md:pt-[300px]">
          <div className="flex max-w-[544px] flex-col gap-4">
            <h1 className="max-w-full [font-family:'Merriweather',Helvetica] text-[clamp(1.75rem,6vw,3.125rem)] font-bold leading-[1.3] tracking-[1.5px] text-[#fbfbfb]">
              Entire Gamut of Print Needs Covered
            </h1>
            <p className="max-w-full [font-family:'Inter',Helvetica] text-base font-normal leading-[1.6] text-[#fbfbfb] sm:text-xl sm:leading-[30px]">
              From concept to completion, we craft innovative print and
              packaging solutions that inspire.
            </p>
            <div className="mt-2">
              <GradientButton
                href="#services-section"
                className="w-fit px-5 py-3 text-sm font-semibold"
              >
                Explore Services
                <ChevronDownIcon className="h-4 w-4" />
              </GradientButton>
            </div>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Services section */}
      <section id="services-section" className="relative z-10 w-full px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          {/* Section header */}
          <header className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-2">
              <SectionLabel>OUR SERVICES</SectionLabel>
              <SectionHeading
                primary="We do"
                secondary="Everything."
                primaryClassName="leading-[59px]"
              />
            </div>
            <div className="flex max-w-full items-start gap-4 lg:max-w-[530px]">
              <p className="flex-1 [font-family:'Inter',Helvetica] text-base font-normal leading-relaxed tracking-[0] sm:text-lg">
                <span className="font-light text-[#f0efeb]">
                  You may be interested in what we{" "}
                </span>
                <span className="font-medium text-[#e1de00]">offer</span>
                <span className="font-light text-[#f0efeb]">
                  {" "}— more services you can find below.
                </span>
              </p>
              <Link
                to="/services"
                className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-[#92d1bc] hover:text-[#92d1bc]"
                aria-label="View more services"
              >
                <ChevronDownIcon className="h-4 w-4 -rotate-90" />
              </Link>
            </div>
          </header>

          {/* Service cards - horizontal scroll on mobile, grid on desktop */}
          <div className="-mx-4 overflow-x-auto px-4 pb-2 md:mx-0 md:overflow-visible md:px-0">
            <div className="flex gap-5 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
              {SERVICES.map((service) => (
                <div key={service.title} className="w-[280px] shrink-0 md:w-full md:shrink">
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    image={service.image}
                    radius={service.radius}
                    overlay={service.overlay}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us section */}
      <section className="relative z-10 w-full rounded-[clamp(1rem,4vw,50px)] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(225,222,0,0.11)_100%)] px-4 py-12 sm:px-10 lg:px-[77px] lg:py-[63px]">
        <div className="mx-auto flex w-full max-w-[1027px] flex-col gap-8">
          <header className="grid gap-8 lg:grid-cols-[339px_minmax(0,502px)] lg:justify-between lg:gap-[100px]">
            <SectionHeading
              primary="Why"
              secondary="Choose Us"
              className="text-[36px] sm:text-[44px] sm:leading-[50px] lg:text-[55px] lg:leading-[60px]"
              primaryClassName="leading-[1.1]"
              secondaryClassName="text-[40px] sm:text-[50px] lg:text-[55px] leading-[1.1]"
            />
            <div className="flex max-w-full flex-col gap-4">
              <p className="m-0 [font-family:'Inter',Helvetica] text-base font-light leading-relaxed tracking-[0] text-white">
                We cover the entire gamut of print needs — from company
                profiles to brochures and catalogues, coffee-table books to
                calendars, folding cartons and labels to luxury rigid boxes as
                well as point-of-sale material.
              </p>
              <ul className="flex flex-wrap gap-x-8 gap-y-3 p-0">
                {["State of the Art Printing Machines", "One stop source"].map(
                  (benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 [font-family:'Inter',Helvetica] text-sm font-semibold leading-[21px] tracking-[0] text-white sm:text-base"
                    >
                      <span className="mt-0.5 h-[17px] w-[17px] shrink-0 rounded-full border-2 border-[#e1de00]" />
                      <span>{benefit}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </header>

          <div className="grid gap-8 lg:grid-cols-[400px_minmax(0,480px)] lg:items-end lg:gap-[80px]">
            <Card className="relative h-[260px] w-full max-w-full overflow-hidden rounded-[20px] border-0 bg-transparent p-0 shadow-none sm:h-[308px] lg:max-w-[400px]">
              <CardContent className="size-full p-0">
                <img
                  className="size-full object-cover"
                  alt="Our printing studio"
                  src={ASSETS.whyChooseUsImg}
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.2)_0%,rgba(0,0,0,0.8)_100%)]"
                  aria-hidden="true"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-label="Play video"
                  className="absolute bottom-[36px] left-[23px] h-auto w-12 rounded-full p-0 hover:bg-transparent"
                >
                  <PlayCircleIcon className="h-12 w-12 text-white" />
                </Button>
              </CardContent>
            </Card>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-6 sm:gap-x-12 sm:gap-y-[30px] lg:pb-0">
              {STATS.map((stat) => (
                <StatItem key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* About teaser section */}
      <section className="relative z-10 w-full px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-8 lg:gap-[46px]">
          <header className="flex max-w-full flex-col gap-1 lg:max-w-[547px]">
            <SectionLabel>ABOUT US</SectionLabel>
            <SectionHeading
              primary="Printing Expertise."
              secondary="Packaging Excellence"
              className="text-[32px] sm:text-[40px]"
              secondaryClassName="text-[40px] sm:text-[55px]"
            />
          </header>
          <div className="flex w-full max-w-full flex-col gap-6 lg:ml-auto lg:max-w-[682px] lg:gap-[22px]">
            <p className="[font-family:'Inter',Helvetica] text-base font-light leading-relaxed text-white sm:text-lg sm:leading-[33px]">
              Established in 1990, Fairdeal Print Pack is a one-stop shop that
              can handle all your quality print requirements from structural
              design to production to distribution. Having the entire operation
              in-house ensures tight control over quality and faster turnaround.
            </p>
            <Link
              to="/about"
              className="inline-flex w-fit items-center gap-4 rounded-[100px] bg-[#d7d5572b] px-5 py-2 text-base font-light leading-[33px] text-white transition-colors hover:bg-[#d7d55740] sm:text-lg"
            >
              <span>Read more</span>
              <ChevronDownIcon className="h-5 w-5 -rotate-90" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio teaser section */}
      <section className="relative z-10 w-full px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <header className="mb-8 flex flex-col gap-2 sm:mb-12">
            <SectionLabel>PORTFOLIO</SectionLabel>
            <SectionHeading
              primary="Our"
              secondary="Latest Cases"
              className="text-[32px] sm:text-[40px]"
              secondaryClassName="text-[40px] sm:text-[55px]"
            />
          </header>

          {/* Portfolio grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {PORTFOLIO_CASES.slice(0, 5).map((item, idx) => (
              <PortfolioCard
                key={item.title}
                title={idx === 0 ? item.title : undefined}
                image={item.image}
                showOverlay={idx === 0}
                className={
                  idx === 0
                    ? "h-[300px] sm:h-[400px] lg:h-[516px] lg:row-span-2"
                    : "h-[200px] sm:h-[240px] lg:h-[248px]"
                }
              />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <GradientButton to="/portfolio" className="px-6 py-3 text-sm font-semibold">
              View All Cases
              <ChevronDownIcon className="h-4 w-4 -rotate-90" />
            </GradientButton>
          </div>
        </div>
      </section>
    </>
  );
};
