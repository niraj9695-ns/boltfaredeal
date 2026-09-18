import { CheckCircleIcon } from "lucide-react";
import { useState } from "react";
import { GradientButton } from "../components/shared/GradientButton";
import { SectionLabel } from "../components/shared/SectionLabel";
import { SectionHeading } from "../components/shared/SectionHeading";
import { ServiceCard } from "../components/shared/ServiceCard";
import { ASSETS, SERVICES } from "../lib/assets";

const serviceDetails = [
  {
    title: "Print Solutions",
    description: "Commercial printing for brands, marketing, and business communication. We deliver brochures, catalogues, company profiles, and coffee-table books with precision.",
    features: ["Brochures & Catalogues", "Company Profiles", "Coffee-table Books", "Calendars"],
  },
  {
    title: "Paper Distribution",
    description: "Premium paper supply for commercial, industrial, and retail needs. We distribute a wide range of paper grades to suit every printing requirement.",
    features: ["Wide Range of Grades", "Bulk Supply", "Fast Delivery", "Competitive Pricing"],
  },
  {
    title: "Packaging Solutions",
    description: "BOPP tapes, labels, adhesive products, and packaging materials. From folding cartons to luxury rigid boxes, we cover all packaging needs.",
    features: ["Folding Cartons", "Luxury Rigid Boxes", "Labels & BOPP Tapes", "Point-of-Sale Material"],
  },
  {
    title: "Color Printing",
    description: "High-quality multi-color printing with precision and consistency. Our state-of-the-art machines deliver vibrant, accurate colors every time.",
    features: ["Multi-Color Precision", "Consistent Quality", "State-of-the-Art Machines", "Fast Turnaround"],
  },
];

export const Services = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[260px] overflow-hidden sm:h-[340px] lg:h-[400px]">
        <img
          className="parallax-media absolute inset-0 h-full w-full object-cover"
          alt="Our printing services"
          src={ASSETS.servicePrint}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-12 text-center">
          <SectionLabel className="mb-2">OUR SERVICES</SectionLabel>
          <SectionHeading
            primary="We do"
            secondary="Everything."
            className="text-[28px] sm:text-[36px] lg:text-[44px]"
            secondaryClassName="text-[36px] sm:text-[48px] lg:text-[55px]"
          />
        </div>
      </section>

      {/* Services overview cards */}
      <section className="relative z-10 w-full px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-10 flex flex-col gap-2">
            <SectionLabel>WHAT WE OFFER</SectionLabel>
            <SectionHeading
              primary="Comprehensive"
              secondary="Print Services"
              className="text-[28px] sm:text-[36px]"
              secondaryClassName="text-[36px] sm:text-[48px]"
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.title}
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
            ))}
          </div>
        </div>
      </section>

      {/* Detailed service sections */}
      <section className="relative z-10 w-full px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-16">
          {serviceDetails.map((detail, idx) => (
            <div
              key={detail.title}
              className="grid gap-8 lg:grid-cols-2 lg:gap-16"
            >
              {/* Alternate image side for visual variety */}
              <div
                data-reveal={idx % 2 === 1 ? "right" : "left"}
                className={`order-1 ${idx % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <img
                  className="h-[260px] w-full rounded-[20px] object-cover sm:h-[360px]"
                  alt={detail.title}
                  src={SERVICES[idx].image}
                  loading="lazy"
                />
              </div>
              <div
                data-reveal={idx % 2 === 1 ? "left" : "right"}
                className={`flex flex-col gap-4 ${idx % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <SectionLabel>{`0${idx + 1}`}</SectionLabel>
                <h3 className="[font-family:'Merriweather',Helvetica] text-2xl font-normal italic text-white sm:text-[32px]">
                  {detail.title}
                </h3>
                <p className="[font-family:'Inter',Helvetica] text-base font-light leading-relaxed text-white">
                  {detail.description}
                </p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {detail.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 [font-family:'Inter',Helvetica] text-sm font-normal leading-relaxed text-white"
                    >
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#e1de00]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 w-full px-4 py-16 text-center sm:px-6">
        <h2 className="mb-4 [font-family:'Merriweather',Helvetica] text-[24px] font-normal italic text-white sm:text-[32px]">
          Need a custom solution?
        </h2>
        <GradientButton to="/contact" className="px-8 py-3 text-base font-semibold">
          Contact us today
        </GradientButton>
      </section>
    </>
  );
};
