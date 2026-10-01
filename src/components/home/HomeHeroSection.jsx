import { ChevronDownIcon } from "lucide-react";
import { GradientButton } from "../shared/GradientButton";
import { ScrollIndicator } from "../shared/ScrollIndicator";

export const HomeHeroSection = ({ heroImage }) => (
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
        <div className="relative z-10 flex min-h-[calc(100vh-52px)] flex-col justify-center px-6 pt-[140px] pb-20 md:min-h-[809px] md:px-[9.03%] md:pt-[300px]">
          <div className="flex max-w-[544px] flex-col gap-4">
            <h1
              data-reveal="left"
              className="max-w-full text-[clamp(1.75rem,6vw,3.125rem)] font-bold leading-[1.3] tracking-[1.5px] text-[#fbfbfb]"
            >
              Entire Gamut of Print Needs Covered
            </h1>
            <p
              data-reveal="right"
              className="max-w-full text-base font-normal leading-[1.6] text-[#fbfbfb] sm:text-xl sm:leading-[30px]"
            >
              From concept to completion, we craft innovative print and
              packaging solutions that inspire.
            </p>
            <div className="mt-2" data-reveal="left">
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
);
