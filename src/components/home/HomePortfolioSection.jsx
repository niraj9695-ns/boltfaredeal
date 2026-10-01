import { ChevronDownIcon } from "lucide-react";
import { GradientButton } from "../shared/GradientButton";
import { SectionLabel } from "../shared/SectionLabel";
import { SectionHeading } from "../shared/SectionHeading";
import { PortfolioCard } from "../shared/PortfolioCard";
import { PORTFOLIO_CASES } from "../../lib/assets";

export const HomePortfolioSection = () => (
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
  showOverlay
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
  showOverlay
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
);
