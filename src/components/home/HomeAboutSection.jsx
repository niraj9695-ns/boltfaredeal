import {
  ChevronDownIcon,
  EyeIcon,
  TargetIcon,
  GemIcon,
  FlagIcon,
} from "lucide-react";
import { useState } from "react";
import { ASSETS } from "../../lib/assets";

const YELLOW = "#f7d51d";

const ABOUT_TEXT =
  "Fairdeal Print Pack India Pvt. Ltd. has been established as full - fledge document solution in India & Pune city. Our traditional business model is based on the accomplishment of expertise into print media. We began our journey in 1990 & today we have emerged with a reputation for its quality product & prompt service.";

const ACCORDION_ITEMS = [
  {
    id: "vision",
    title: "Our Vision",
    icon: EyeIcon,
    content:
      "Customer satisfaction and employee empowerment in tandem with innovation and excellence, to work together with our customers to help them achieve their goals. Our success lies in your success. Honesty, integrity, dedication & commitment will always be our priority and trademark. Dignity & respect to all our guiding principles in every deal with customers & suppliers.",
  },
  {
    id: "mission",
    title: "Our Mission",
    icon: TargetIcon,
    content:
      "To provide exceptional printing service by pursuing business through innovation & creativity that exceeds the expectation of our esteemed customers.",
  },
  {
    id: "values",
    title: "Core Values",
    icon: GemIcon,
    content:
      "We believe in treating our customer with respect & faith, we integrate honesty, integrity & business ethics into all aspect of our business functioning.",
  },
  {
    id: "goal",
    title: "The Goal",
    icon: FlagIcon,
    content:
      "Delighted customers are key to our success & we strive to achieve this key every second. Printing is our passion & hence no matter what your print need is, Fairdeal Print Pack India Pvt. Ltd. has most effective print solutions.",
  },
];

/* ------------------------------------------------------------------ */
/* Accordion (right column of the right side)                         */
/* ------------------------------------------------------------------ */
const AboutAccordion = () => {
  const [openId, setOpenId] = useState("vision");

  return (
    <div className="flex flex-col gap-3">
      {ACCORDION_ITEMS.map(({ id, title, icon: Icon, content }) => {
        const isOpen = openId === id;

        return (
          <div key={id} className="relative ml-9">
            {/* Round icon badge overlapping the card's left edge */}
            <div
              aria-hidden="true"
              className={`
                absolute
                -left-[26px]
                top-1/2
                z-10
                flex
                h-[52px]
                w-[52px]
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                text-[#f7d51d]
                transition-all
                duration-300
                ${
                  isOpen
                    ? "border-[#f7d51d] bg-[#0a1015] shadow-[0_0_22px_rgba(247,213,29,0.45)]"
                    : "border-[#f7d51d]/30 bg-[#0d151b]"
                }
              `}
            >
              <Icon className="h-5 w-5" />
            </div>

            {/* Card */}
            <div
              className={`
                relative
                overflow-hidden
                rounded-[26px]
                border
                transition-all
                duration-300
                ${
                  isOpen
                    ? "border-[#f7d51d] bg-[#f7d51d] shadow-[0_12px_40px_rgba(247,213,29,0.22)]"
                    : "border-white/10 bg-[#0d151b] hover:border-[#f7d51d]/40"
                }
              `}
            >
              {/* Thin divider between icon and text (open only) */}
              <span
                aria-hidden="true"
                className={`
                  absolute
                  bottom-6
                  left-[40px]
                  top-6
                  w-px
                  bg-[#0a1015]/25
                  transition-opacity
                  duration-300
                  ${isOpen ? "opacity-100" : "opacity-0"}
                `}
              />

              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : id)}
                aria-expanded={isOpen}
                aria-controls={`about-panel-${id}`}
                className={`
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-3
                  pl-[60px]
                  pr-5
                  text-left
                  ${isOpen ? "pb-1 pt-4" : "py-[15px]"}
                `}
              >
                <span
                  className={`
                    text-[19px]
                    font-bold
                    leading-tight
                    transition-colors
                    duration-300
                    ${isOpen ? "text-[#0a1015]" : "text-white"}
                  `}
                >
                  {title}
                </span>

                <ChevronDownIcon
                  className={`
                    h-5
                    w-5
                    shrink-0
                    transition-transform
                    duration-300
                    ${isOpen ? "rotate-180 text-[#0a1015]" : "text-white"}
                  `}
                />
              </button>

              {/* Smooth expand / collapse */}
              <div
                id={`about-panel-${id}`}
                className={`
                  grid
                  transition-[grid-template-rows]
                  duration-300
                  ease-out
                  ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                `}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 pl-[60px] pr-5 text-[13.5px] leading-[1.6] text-[#0a1015]/90">
                    {content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Main section                                                       */
/* ------------------------------------------------------------------ */
export const HomeAboutSection = ({ isLightTheme }) => {
  return (
    <section
      className="relative z-10 w-full overflow-hidden px-4 py-16 sm:px-6 md:py-20 lg:px-8"
    >
      {/* Section background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-[380px] w-[380px] rounded-full bg-[#f7d51d]/10 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full bg-[#f7d51d]/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-[1240px]">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)] lg:gap-14">
          {/* ============================================================ */}
          {/* LEFT — OWNER PHOTO                                           */}
          {/* ============================================================ */}
          <div
            data-reveal="left"
            className="relative mx-auto w-full max-w-[430px] pb-10 lg:mx-0"
          >
            <div className="relative h-[460px] w-full sm:h-[540px] lg:h-[560px]">
              {/* Teal ambient glow */}
              <div
                aria-hidden="true"
                className={`
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[340px]
                  w-[340px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  blur-[90px]
                  ${isLightTheme ? "bg-[#9bcfc0]/25" : "bg-[#8fcbb7]/15"}
                `}
              />

              {/* Yellow dot + vertical line on the far left */}
              <span
                aria-hidden="true"
                className="absolute -left-[22px] top-[40px] z-20 h-3 w-3 rounded-full bg-[#f7d51d]"
              />
              <span
                aria-hidden="true"
                className="absolute -left-[17px] top-[52px] z-20 h-[360px] w-px bg-gradient-to-b from-[#f7d51d] to-transparent"
              />

              {/* Offset gold outline arc (fades out toward top-right) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 rounded-bl-[110px] rounded-br-[40px] rounded-tl-[44px] rounded-tr-[120px] border border-[#f7d51d]/50"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(210deg, transparent 25%, black 80%)",
                  maskImage:
                    "linear-gradient(210deg, transparent 25%, black 80%)",
                }}
              />

              {/* Photo (rounded asymmetric card) */}
              <div
                className={`
                  relative
                  z-10
                  h-full
                  w-full
                  overflow-hidden
                  rounded-bl-[90px]
                  rounded-br-[28px]
                  rounded-tl-[28px]
                  rounded-tr-[110px]
                  ${
                    isLightTheme
                      ? "shadow-[0_18px_45px_rgba(50,70,65,0.18)]"
                      : "shadow-[0_18px_45px_rgba(0,0,0,0.45)]"
                  }
                `}
              >
                <img
                  src={ASSETS.aboutImg}
                  alt="Rajesh Yewale - Founder of Fairdeal Print Pack"
                  className="h-full w-full max-w-none object-cover object-top"
                  loading="lazy"
                />

                {/* Bottom vignette */}
                <div
                  aria-hidden="true"
                  className={`
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    z-[15]
                    h-[20%]
                    ${
                      isLightTheme
                        ? "bg-gradient-to-t from-[#f3f1eb]/80 via-[#f3f1eb]/30 to-transparent"
                        : "bg-gradient-to-t from-[#02070a]/80 via-[#02070a]/30 to-transparent"
                    }
                  `}
                />
              </div>

              {/* Founder card overlapping the bottom of the photo */}
              <div
                className="
                  absolute
                  -bottom-8
                  left-[6%]
                  right-[6%]
                  z-30
                  rounded-[28px]
                  border
                  border-white/10
                  bg-[#0d151b]/95
                  px-7
                  py-4
                  backdrop-blur-sm
                "
              >
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f7d51d]">
                  Rajesh Yewale
                </p>
                <p className="mt-1 text-sm font-light text-white/70">
                  Founder & Managing Director
                </p>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT — HEADING + (DESCRIPTION | VISION/MISSION ACCORDION)   */}
          {/* ============================================================ */}
          <div
            data-reveal="right"
            className="relative z-20 flex w-full flex-col gap-8"
          >
            {/* Heading block */}
            <header className="flex flex-col gap-4">
              {/* Label */}
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#f7d51d]" />
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#f7d51d]">
                   About Us
                </span>
              </div>

              <h2
                className="font-[Lato] text-[40px] font-extrabold leading-[1.05] tracking-tight sm:text-[52px] lg:text-[58px]"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                <span className="block text-white">Printing Expertise.</span>
                <span className="block text-[#92e3c3]">
                  Packaging Excellence
                </span>
                <span className="block text-[#9aa3b2]">Since 1990</span>
              </h2>
            </header>

            {/* Divider */}
            <div className="h-px w-full bg-white/10" />

            {/* Two columns: description on the left, accordion on the right */}
            <div className="grid gap-10 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] md:gap-10">
              {/* Description + stat */}
              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex items-start leading-none">
                    <span className="text-[72px] font-extrabold text-white sm:text-[80px]">
                      36
                    </span>
                    <span className="ml-1 mt-3 text-[40px] font-extrabold text-[#f7d51d]">
                      +
                    </span>
                  </div>

                  <p className="mt-3 max-w-[110px] text-xs font-semibold uppercase leading-snug tracking-[0.22em] text-white/60">
                    Years of Trust
                  </p>
                </div>

                <p className="text-[15px] font-light leading-[1.75] text-white/85">
                  {ABOUT_TEXT}
                </p>
              </div>

              {/* Vision / Mission / Core Values / The Goal */}
              <AboutAccordion />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};