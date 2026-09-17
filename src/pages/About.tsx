import { CheckCircleIcon, ChevronDownIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { GradientButton } from "../components/shared/GradientButton";
import { SectionLabel } from "../components/shared/SectionLabel";
import { SectionHeading } from "../components/shared/SectionHeading";
import { StatItem } from "../components/shared/StatItem";
import { ASSETS, STATS } from "../lib/assets";

const milestones = [
  { year: "1990", text: "Founded Fairdeal Print Pack in Chinchwad" },
  { year: "2000", text: "Expanded into packaging solutions" },
  { year: "2010", text: "Adopted state-of-the-art multi-color printing" },
  { year: "2024", text: "Serving 1600+ satisfied clients globally" },
];

const values = [
  "In-house quality control at every stage",
  "Faster turnaround with integrated operations",
  "State-of-the-art printing machines",
  "One-stop source for all print needs",
  "From structural design to distribution",
  "Serving clients since 1990",
];

export const About = () => {
  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[300px] overflow-hidden sm:h-[400px] lg:h-[480px]">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          alt="Our printing facility"
          src={ASSETS.aboutImg}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.85)_100%)]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-12 text-center">
          <SectionLabel className="mb-2">ABOUT US</SectionLabel>
          <SectionHeading
            primary="Printing Expertise."
            secondary="Packaging Excellence"
            className="text-[28px] sm:text-[36px] lg:text-[44px]"
            secondaryClassName="text-[36px] sm:text-[48px] lg:text-[55px]"
          />
        </div>
      </section>

      {/* Story section */}
      <section className="relative z-10 w-full px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <SectionLabel>OUR STORY</SectionLabel>
            <SectionHeading
              primary="Three Decades"
              secondary="of Excellence"
              className="text-[28px] sm:text-[36px]"
              secondaryClassName="text-[36px] sm:text-[48px]"
            />
            <p className="[font-family:'Inter',Helvetica] text-base font-light leading-relaxed text-white sm:text-lg">
              Established in 1990, Fairdeal Print Pack is a one-stop shop that
              can handle all your quality print requirements from structural
              design to production to distribution. Having the entire operation
              in-house ensures tight control over quality and faster turnaround.
            </p>
            <p className="[font-family:'Inter',Helvetica] text-base font-light leading-relaxed text-white sm:text-lg">
              We cover the entire gamut of print needs — from company profiles
              to brochures and catalogues, coffee-table books to calendars,
              folding cartons and labels to luxury rigid boxes as well as
              point-of-sale material.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <img
              className="h-[260px] w-full rounded-[20px] object-cover sm:h-[340px]"
              alt="Our team at work"
              src={ASSETS.teamImg}
              loading="lazy"
            />
            <img
              className="h-[200px] w-full rounded-[20px] object-cover sm:h-[260px]"
              alt="Design studio workspace"
              src={ASSETS.studioImg}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="relative z-10 w-full px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-8 flex flex-col gap-2">
            <SectionLabel>WHY CHOOSE US</SectionLabel>
            <SectionHeading
              primary="What Sets"
              secondary="Us Apart"
              className="text-[28px] sm:text-[36px]"
              secondaryClassName="text-[36px] sm:text-[48px]"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value}
                className="flex items-start gap-3 rounded-[20px] border border-white/10 bg-white/5 p-5"
              >
                <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#e1de00]" />
                <span className="[font-family:'Inter',Helvetica] text-sm font-normal leading-relaxed text-white sm:text-base">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline section */}
      <section className="relative z-10 w-full px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-8 flex flex-col gap-2">
            <SectionLabel>OUR JOURNEY</SectionLabel>
            <SectionHeading
              primary="Milestones"
              className="text-[28px] sm:text-[36px]"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="flex flex-col gap-2 rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(225,222,0,0.06)_100%)] p-6"
              >
                <span className="[font-family:'Merriweather',Helvetica] text-3xl font-normal text-[#e1de00]">
                  {m.year}
                </span>
                <span className="[font-family:'Inter',Helvetica] text-sm font-light leading-relaxed text-white">
                  {m.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="relative z-10 w-full rounded-[clamp(1rem,4vw,50px)] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(225,222,0,0.11)_100%)] px-4 py-12 sm:px-10 lg:px-[77px] lg:py-[63px]">
        <div className="mx-auto max-w-[1027px]">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-12 lg:grid-cols-4">
            {STATS.map((stat) => (
              <StatItem key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 w-full px-4 py-16 text-center sm:px-6">
        <h2 className="mb-4 [font-family:'Merriweather',Helvetica] text-[28px] font-normal italic text-white sm:text-[36px]">
          Ready to work with us?
        </h2>
        <GradientButton to="/contact" className="px-8 py-3 text-base font-semibold">
          Get in touch
          <ChevronDownIcon className="h-4 w-4 -rotate-90" />
        </GradientButton>
      </section>
    </>
  );
};
