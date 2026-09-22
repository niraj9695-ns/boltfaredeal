import { ChevronDownIcon, PlayCircleIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
import client1 from "../assets/images/Clients/client1.png";
import client2 from "../assets/images/Clients/client2.png";
import client3 from "../assets/images/Clients/client3.png";
import client4 from "../assets/images/Clients/client4.png";
import client5 from "../assets/images/Clients/client5.png";
import client6 from "../assets/images/Clients/client6.png";
import client7 from "../assets/images/Clients/client7.png";
import client8 from "../assets/images/Clients/client8.png";
import client9 from "../assets/images/Clients/client9.png";
import client10 from "../assets/images/Clients/client10.png";
import client11 from "../assets/images/Clients/client11.png";
import client12 from "../assets/images/Clients/client12.png";
import client13 from "../assets/images/Clients/client13.png";
import client14 from "../assets/images/Clients/client14.png";
import client15 from "../assets/images/Clients/client15.png";
import client16 from "../assets/images/Clients/client16.png";

const HERO_HEADING_LINES = ["Entire Gamut of", "Print Needs", "Covered"];

const HeroIntro = () => {
  const copyRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const targetParallax = useRef({ x: 0, y: 0 });
  const currentParallax = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);

  useEffect(() => {
    const heading = headingRef.current;
    const description = descriptionRef.current;
    const section = copyRef.current?.closest("section");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!heading || !description || !section) {
      return undefined;
    }

    if (reducedMotion.matches || !finePointer.matches) {
      heading.style.transform = "translate3d(0, 0, 0)";
      description.style.transform = "translate3d(0, 0, 0)";
      return undefined;
    }

    const applyParallax = () => {
      const current = currentParallax.current;
      heading.style.transform = `translate3d(${current.x * 4.5}px, ${current.y * 4.5}px, 0)`;
      description.style.transform = `translate3d(${current.x * 2}px, ${current.y * 2}px, 0)`;
    };

    const tick = () => {
      const current = currentParallax.current;
      const target = targetParallax.current;

      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;

      applyParallax();

      const settled =
        Math.abs(target.x - current.x) < 0.001 &&
        Math.abs(target.y - current.y) < 0.001;

      if (settled) {
        current.x = target.x;
        current.y = target.y;
        applyParallax();
        rafRef.current = 0;
        return;
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    const startTick = () => {
      if (!rafRef.current) {
        rafRef.current = window.requestAnimationFrame(tick);
      }
    };

    const handlePointerMove = (event) => {
      const rect = section.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

      targetParallax.current = {
        x: Math.max(-1, Math.min(1, x)),
        y: Math.max(-1, Math.min(1, y)),
      };
      startTick();
    };

    const handlePointerLeave = () => {
      targetParallax.current = { x: 0, y: 0 };
      startTick();
    };

    section.addEventListener("pointermove", handlePointerMove);
    section.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(rafRef.current);
      section.removeEventListener("pointermove", handlePointerMove);
      section.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div ref={copyRef} className="hero-copy flex max-w-[544px] flex-col gap-4">
      <div ref={headingRef} className="hero-heading-parallax will-change-transform">
        <h1 className="hero-heading max-w-full [font-family:'Merriweather',Helvetica] text-[clamp(2.1rem,7vw,3.8rem)] font-bold leading-[1.3] tracking-[1.5px] text-[#fbfbfb]">
          {HERO_HEADING_LINES.map((line, index) => (
            <span key={line} className="hero-line">
              <span
                className="hero-line-inner"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>
      </div>
      <div ref={descriptionRef} className="hero-description-parallax will-change-transform">
        <p className="hero-description max-w-full [font-family:'Inter',Helvetica] text-base font-normal leading-[1.6] text-[#fbfbfb] sm:text-xl sm:leading-[30px]">
          From concept to completion, we craft innovative print and
          packaging solutions that inspire.
        </p>
      </div>
      <div className="hero-cta mt-2">
        <GradientButton
          href="#services-section"
          magnetic={false}
          className="hero-explore-btn w-fit px-5 py-3 text-sm font-semibold"
        >
          Explore Services
          <ChevronDownIcon className="hero-explore-icon h-4 w-4" />
        </GradientButton>
      </div>
    </div>
  );
};

const CLIENT_LOGOS = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
  client15,
  client16,
];

export const Home = () => {
  const [isLightTheme, setIsLightTheme] = useState(() => document.documentElement.getAttribute("data-theme") === "light");
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const aboutSectionRef = useRef(null);
  const [aboutDrawing, setAboutDrawing] = useState(false);
  const [aboutDrawComplete, setAboutDrawComplete] = useState(false);
  const [aboutDrawReverse, setAboutDrawReverse] = useState(false);

  useEffect(() => {
    const syncTheme = () => {
      setIsLightTheme(document.documentElement.getAttribute("data-theme") === "light");
    };

    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const section = aboutSectionRef.current;

    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setAboutDrawing(false);
      setAboutDrawComplete(true);
      setAboutDrawReverse(false);
      return;
    }

    let completeTimer;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutDrawReverse(false);
          setAboutDrawing(true);
          setAboutDrawComplete(false);

          if (completeTimer) {
            clearTimeout(completeTimer);
          }

          completeTimer = setTimeout(() => {
            setAboutDrawComplete(true);
          }, 1000);
          return;
        }

        if (completeTimer) {
          clearTimeout(completeTimer);
        }

        setAboutDrawComplete(false);
        setAboutDrawing(false);
        setAboutDrawReverse(true);
      },
      {
        threshold: 0.30,
      }
    );

    observer.observe(section);

    return () => {
      if (completeTimer) {
        clearTimeout(completeTimer);
      }
      observer.disconnect();
    };
  }, []);
  const heroImage = isLightTheme ? ASSETS.heroBgLight : ASSETS.heroBgLarge;

  return (
    <>
      {/* Hero section */}
      <section className="relative min-h-[100vh] overflow-hidden md:min-h-[809px]">
        {/* Background image */}
<img
  className="hero-media absolute inset-0 h-full w-full object-cover"
  alt="Printing studio"
  src={heroImage}
/>
        {/* Dark gradient overlay for readability */}
        <div
          aria-hidden="true"
          className="hero-overlay pointer-events-none absolute inset-0"
        />

        {/* Mobile top spacer for fixed header */}
        <div className="h-[52px] md:hidden" />

        {/* Hero text content */}
        <div className="relative z-10 flex min-h-[calc(100vh-52px)] flex-col justify-center px-6 pt-20 pb-20 md:min-h-[809px] md:px-[9.03%] md:pt-24">
          <HeroIntro />
        </div>

        <ScrollIndicator />
      </section>

      {/* About teaser section */}


<section
  ref={aboutSectionRef}
  className="relative z-10 w-full px-4 py-16 sm:px-6 md:py-20 lg:px-8"
>
  <div className="mx-auto max-w-[1180px]">
    <div
      className="
        grid
        items-center
        gap-10
        lg:grid-cols-[1fr_1fr]
        lg:gap-16
      "
    >
      {/* LEFT — OWNER PHOTO */}
      <div
        className="
          relative
          flex
          min-h-[380px]
          items-center
          justify-center
          overflow-visible
          sm:min-h-[460px]
          lg:min-h-[560px]
        "
      >
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className={`
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            z-0
            h-[280px]
            w-[280px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            blur-[80px]
            sm:h-[350px]
            sm:w-[350px]
            lg:h-[430px]
            lg:w-[430px]
            ${
              isLightTheme
                ? "bg-[#9bcfc0]/25 opacity-70"
                : "bg-[#8fcbb7]/20 opacity-90"
            }
          `}
        />

        {/* Gold glow */}
        <div
          aria-hidden="true"
          className={`
            pointer-events-none
            absolute
            left-[42%]
            top-[52%]
            z-0
            h-[180px]
            w-[180px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            blur-[70px]
            ${
              isLightTheme
                ? "bg-[#d7c96a]/20"
                : "bg-[#d7c96a]/15"
            }
          `}
        />

        {/* OWNER IMAGE CONTAINER */}
        <div
          className="
            relative
            z-10
            flex
            h-full
            w-full
            items-center
            justify-center
          "
        >
          {/* Soft light behind person */}
          <div
            aria-hidden="true"
            className={`
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[75%]
              w-[85%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              blur-[35px]
              ${
                isLightTheme
                  ? "bg-[radial-gradient(ellipse_at_center,rgba(215,213,87,0.14)_0%,rgba(146,209,188,0.10)_35%,transparent_72%)]"
                  : "bg-[radial-gradient(ellipse_at_center,rgba(215,213,87,0.10)_0%,rgba(146,209,188,0.12)_35%,transparent_72%)]"
              }
            `}
          />

          {/* OWNER PHOTO — static, no draw/reveal animation */}
          <div
            className="
              relative
              z-10
              flex
              h-[400px]
              w-full
              max-w-[520px]
              items-center
              justify-center
              overflow-hidden
              rounded-[28px]
              sm:h-[480px]
              lg:h-[540px]
            "
          >
            <img
              src={ASSETS.aboutImg}
              alt="Rajesh Yewale - Founder of Fairdeal Print Pack"
              className={`
                h-full
                w-full
                max-w-none
                object-contain
                ${
                  isLightTheme
                    ? "drop-shadow-[0_18px_45px_rgba(50,70,65,0.18)]"
                    : "drop-shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
                }
              `}
              loading="lazy"
            />

            {/* Bottom scrim behind the caption */}
            <div
              aria-hidden="true"
              className={`
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                z-10
                h-[32%]
                ${
                  isLightTheme
                    ? "bg-gradient-to-t from-[#f3f1eb]/95 via-[#f3f1eb]/45 to-transparent"
                    : "bg-gradient-to-t from-[#02070a]/95 via-[#02070a]/55 to-transparent"
                }
              `}
            />

            {/* Founder caption, overlaid on the photo */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                z-20
                px-5
                pb-5
                sm:px-6
                sm:pb-6
              "
            >
              <p
                className="
                  [font-family:'Inter',Helvetica]
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#d7d557]
                "
              >
                Rajesh Yewale
              </p>
              <p
                className={`
                  mt-1
                  [font-family:'Inter',Helvetica]
                  text-xs
                  font-light
                  ${isLightTheme ? "text-[#3a4b46]/80" : "text-white/70"}
                `}
              >
                Founder & Managing Director
              </p>
            </div>
          </div>

          {/* Final atmospheric overlay */}
          <div
            aria-hidden="true"
            className={`
              pointer-events-none
              absolute
              inset-0
              z-30
              ${
                isLightTheme
                  ? "bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(255,255,255,0.08)_65%,transparent_82%)]"
                  : "bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.08)_65%,transparent_82%)]"
              }
            `}
          />
        </div>
      </div>

      {/* RIGHT — ABOUT INFORMATION */}
      <div
        className="
          relative
          z-20
          flex
          w-full
          max-w-[540px]
          flex-col
          justify-center
          gap-6
          lg:gap-7
        "
      >
        {/* Section heading */}
        <header className="flex max-w-full flex-col gap-3">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#d7d557]"
            />
            <span
              className="
                [font-family:'Inter',Helvetica]
                text-xs
                font-semibold
                tracking-[0.14em]
                text-[#d7d557]
              "
            >
              {"{01}"}
            </span>
            <SectionLabel>ABOUT US</SectionLabel>
          </div>

          <SectionHeading
            primary="Printing Expertise."
            secondary="Packaging Excellence"
            className="text-[32px] sm:text-[40px]"
            secondaryClassName="text-[40px] sm:text-[55px]"
          />
        </header>

        {/* Stat + company information */}
        <div
          className={`
            grid
            grid-cols-[auto_1fr]
            gap-8
            border-t
            pt-6
            sm:gap-12
            ${isLightTheme ? "border-black/10" : "border-white/10"}
          `}
        >
          <div
            className={`
              border-r
              pr-8
              sm:pr-12
              ${isLightTheme ? "border-black/10" : "border-white/10"}
            `}
          >
            <p
              className="
                [font-family:'Inter',Helvetica]
                text-4xl
                font-extrabold
                leading-none
                text-[#d7d557]
                sm:text-5xl
              "
            >
              35+
            </p>
            <p
              className={`
                mt-2
                [font-family:'Inter',Helvetica]
                text-xs
                uppercase
                tracking-[0.1em]
                ${isLightTheme ? "text-black/55" : "text-white/60"}
              `}
            >
              Years of
              <br />
              experience
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <p
              className="
                [font-family:'Inter',Helvetica]
                text-base
                font-light
                leading-relaxed
                text-white
                sm:text-lg
                sm:leading-[33px]
              "
            >
              Since 1990, Fairdeal Print Pack has been driven by a simple
              philosophy — quality, honesty and commitment. What began as a
              humble printing venture has grown into a trusted printing and
              packaging partner serving clients across India.
            </p>

            <p
              className="
                [font-family:'Inter',Helvetica]
                text-base
                font-light
                leading-relaxed
                text-white
                sm:text-lg
                sm:leading-[33px]
              "
            >
              With a strong focus on technology, innovation and teamwork, we
              continue to deliver reliable printing and packaging solutions
              while building long-term relationships with our customers.
            </p>
          </div>
        </div>

        {/* Read More */}
        <div>
          <GradientButton to="/about" className="px-6 py-3 text-sm font-semibold">
            Read more
            <ChevronDownIcon className="h-5 w-5 -rotate-90" />
          </GradientButton>
        </div>
      </div>
    </div>
  </div>
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

          {/* Service cards - slider across all screen sizes */}
          <div className="-mx-4 overflow-x-auto px-4 pb-2 md:mx-0 md:overflow-x-auto md:px-0 md:[&::-webkit-scrollbar]:hidden md:[scrollbar-width:none] md:[-ms-overflow-style:none]">
            <div className="flex snap-x snap-mandatory gap-5 md:gap-6">
              {SERVICES.map((service, index) => (
                <div
                  key={service.title}
                  className="w-[280px] shrink-0 snap-start md:w-[320px] md:min-w-[320px]"
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    image={service.image}
                    radius={service.radius}
                    overlay={service.overlay}
                    active={activeServiceIndex === index}
                    onMouseEnter={() => setActiveServiceIndex(index)}
                    onMouseLeave={() => setActiveServiceIndex(0)}
                    onFocus={() => setActiveServiceIndex(index)}
                    onBlur={() => setActiveServiceIndex(0)}
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
          <header
            data-reveal="left"
            className="grid gap-8 lg:grid-cols-[339px_minmax(0,502px)] lg:justify-between lg:gap-[100px]"
          >
            <div data-reveal="left">
              <SectionHeading
                primary="Why"
                secondary="Choose Us"
              className="text-[36px] sm:text-[44px] sm:leading-[50px] lg:text-[55px] lg:leading-[60px]"
              primaryClassName="leading-[1.1]"
                secondaryClassName="text-[40px] sm:text-[50px] lg:text-[55px] leading-[1.1]"
              />
            </div>
            <div data-reveal="right" className="flex max-w-full flex-col gap-4">
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
            <div data-reveal="left">
              <Card className="relative h-[260px] w-full max-w-full overflow-hidden rounded-[20px] border-0 bg-transparent p-0 shadow-none sm:h-[308px] lg:max-w-[400px]">
              <CardContent className="size-full p-0">
                <img
                  className="size-full object-cover"
                  alt="Our printing studio"
                  src={ASSETS.whyChooseUsImg}
                  loading="lazy"
                />
                <div
                  className="video-card-overlay absolute inset-0"
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
            </div>

            <dl data-reveal="right" className="grid grid-cols-2 gap-x-6 gap-y-6 sm:gap-x-12 sm:gap-y-[30px] lg:pb-0">
              {STATS.map((stat) => (
                <StatItem key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </dl>
          </div>
        </div>
      </section>

{/* Our Clients Section */}
<section className="relative z-10 w-full overflow-hidden py-14 md:py-16">
  <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
    <div className="mb-8 text-center">
      <SectionHeading
        primary="Our"
        secondary="Clients"
        className="whitespace-nowrap text-[clamp(2.2rem,4vw,3.5rem)] text-center"
        primaryClassName="mr-3 inline-block whitespace-nowrap leading-[1.1] text-white"
        secondaryClassName="inline-block whitespace-nowrap text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.1] text-[#92d1bc]"
      />
      {/* <div className="mx-auto mt-3 h-[2px] w-12 bg-[#92d1bc]" /> */}
    </div>

    <div className="space-y-4 overflow-hidden">
      {[{ id: "left", items: [...CLIENT_LOGOS, ...CLIENT_LOGOS], direction: "left" }, { id: "right", items: [...CLIENT_LOGOS, ...CLIENT_LOGOS], direction: "right" }].map((row) => (
        <div key={row.id} className="overflow-hidden">
          <div
            className={`client-marquee-track ${row.direction === "right" ? "client-marquee-track-reverse" : "client-marquee-track-left"} flex w-max items-center gap-3 md:gap-5`}
          >
            {row.items.map((logo, index) => (
              <div
                key={`${row.id}-${index}`}
                className="client-logo-card flex h-16 w-28 shrink-0 items-center justify-center rounded-xl border border-[#DCE8E1] bg-white/80 px-3 py-2 shadow-[0_10px_24px_rgba(23,57,42,0.08)] backdrop-blur-sm sm:h-20 sm:w-32 md:h-24 md:w-36 lg:h-28 lg:w-40"
              >
                <img
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="h-full w-full object-contain p-1"
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
  

     {/* Portfolio teaser section */}
<section className="relative z-10 w-full px-4 py-16 sm:px-6 md:py-20 lg:px-8">
  <div className="mx-auto max-w-[1180px]">

    {/* Portfolio grid */}
    <div
      className="
        grid
        grid-cols-1
        gap-4
        sm:grid-cols-2
        lg:grid-cols-3
        lg:grid-rows-[1fr_1fr]
        lg:gap-5
      "
    >

      {/* LEFT TOP — Heading */}
     {/* LEFT TOP — Heading */}
<header
  className="
    flex flex-col justify-start
    lg:col-start-1
    lg:row-start-1
    lg:min-h-[248px]
    lg:pr-4
  "
>
  <SectionLabel>PORTFOLIO</SectionLabel>

  <SectionHeading
    primary="Our"
    secondary="Latest Cases"
    className="text-[32px] sm:text-[40px]"
    secondaryClassName="text-[40px] sm:text-[55px]"
  />
</header>

{/* LEFT BOTTOM — Case 1 */}
<PortfolioCard
  title={PORTFOLIO_CASES[0]?.title}
  image={PORTFOLIO_CASES[0]?.image}
  showOverlay
  className="
    h-[260px]
    sm:h-[300px]
    lg:col-start-1
    lg:row-start-2
    lg:h-[248px]
  "
/>

{/* CENTER — Large Case */}
<PortfolioCard
  title={PORTFOLIO_CASES[1]?.title}
  image={PORTFOLIO_CASES[1]?.image}
  showOverlay
  className="
    h-[300px]
    sm:h-[400px]
    lg:col-start-2
    lg:row-start-1
    lg:row-span-2
    lg:h-[516px]
  "
/>

{/* RIGHT TOP — Case 3 */}
<PortfolioCard
  title={PORTFOLIO_CASES[2]?.title}
  image={PORTFOLIO_CASES[2]?.image}
  className="
    h-[220px]
    sm:h-[240px]
    lg:col-start-3
    lg:row-start-1
    lg:h-[248px]
  "
/>

{/* RIGHT BOTTOM — Case 4 */}
<PortfolioCard
  title={PORTFOLIO_CASES[3]?.title}
  image={PORTFOLIO_CASES[3]?.image}
  className="
    h-[220px]
    sm:h-[240px]
    lg:col-start-3
    lg:row-start-2
    lg:h-[248px]
  "
/>    </div>

    {/* View all */}
    <div className="mt-8 flex justify-center sm:mt-10">
      <GradientButton
        to="/portfolio"
        className="px-6 py-3 text-sm font-semibold"
      >
        View All Cases
        <ChevronDownIcon className="h-4 w-4 -rotate-90" />
      </GradientButton>
    </div>

  </div>
</section>
    </>
  );
};
