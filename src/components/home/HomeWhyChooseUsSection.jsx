import {
  BadgeCheck,
  Lightbulb,
  Settings2,
  UsersRound,
} from "lucide-react";
import { StatItem } from "../shared/StatItem";
import { ASSETS, STATS } from "../../lib/assets";

const BENEFITS = [
  {
    title: "State of the Art Printing Machines",
    description: "Precision, speed and unmatched quality.",
    icon: Settings2,
    accent: "#92d1bc",
  },
  {
    title: "One Stop Source",
    description: "Everything you need, under one roof.",
    icon: Lightbulb,
    accent: "#e1de00",
  },
//  {
//   title: "End-to-End Printing",
//   description: "From concept and prepress to production and finishing.",
//   icon: Settings2,
//   accent: "#92d1bc",
// },
{
  title: "Dedicated Expertise",
  description: "Experienced professionals across print and packaging.",
  icon: UsersRound,
  accent: "#49c4bc",
},
{
  title: "Quality-Driven Production",
  description: "Consistent output with precision at every stage.",
  icon: BadgeCheck,
  accent: "#e1de00",
},

// {
//   title: "Advanced Technology",
//   description: "Modern equipment built for precision and efficiency.",
//   icon: Lightbulb,
//   accent: "#e1de00",
// },
];

const COLLAGE_IMAGES = [
  {
    src: ASSETS.whyChooseUsImg,
    alt: "Printing press operating in our production facility",
  },
  { src: ASSETS.servicePrint, alt: "Printed materials from our print services" },
  { src: ASSETS.servicePackaging, alt: "Corrugated packaging produced for clients" },
  { src: ASSETS.serviceLabels, alt: "Labels produced for customer products" },
];

export const HomeWhyChooseUsSection = () => (
  <section className="relative z-10 w-full overflow-hidden bg-[#05080a] py-14 sm:py-20 xl:py-24">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 48% 62% at 100% 0%, rgba(225, 222, 0, 0.19) 0%, rgba(225, 222, 0, 0.09) 42%, transparent 78%), radial-gradient(ellipse 58% 62% at 0% 100%, rgba(73, 196, 188, 0.21) 0%, rgba(73, 196, 188, 0.09) 48%, transparent 82%), radial-gradient(ellipse 34% 48% at 8% 100%, rgba(146, 209, 188, 0.11) 0%, transparent 76%)",
      }}
    />
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="absolute -top-24 left-[58%] h-56 w-12 rotate-[38deg] bg-[#e1de00]/20" />
      <span className="absolute -top-24 left-[62%] h-56 w-12 rotate-[38deg] bg-[#49c4bc]/25" />
      <span className="absolute -bottom-24 -left-5 h-48 w-12 rotate-[38deg] bg-[#49c4bc]/25" />
      <span className="absolute -bottom-24 left-8 h-48 w-12 rotate-[38deg] bg-[#e1de00]/20" />
    </div>

    <div className="relative mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
      <div className="grid items-center gap-x-10 gap-y-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div className="flex flex-col gap-7 sm:gap-8">
          <header data-reveal="left">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#f7d51d]" />
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#f7d51d]">
                Why
              </span>
            </div>
            <h2 className="m-0 font-[Lato] text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl xl:text-[68px]">
              Choose <span className="text-[#92d1bc]">Us</span>
            </h2>
            {/* <span className="mt-4 block h-[3px] w-16 bg-[#49c4bc]" aria-hidden="true" /> */}
            <p className="mt-4 max-w-[540px] text-sm leading-[1.65] text-white/80 sm:text-base">
              We cover the entire gamut of print needs, from company profiles,
              brochures and catalogues to folding cartons, labels and luxury
              rigid boxes.
            </p>
          </header>

          <ul className="m-0 grid list-none grid-cols-1 gap-x-5 gap-y-5 p-0 sm:grid-cols-2 sm:gap-y-7">
            {BENEFITS.map(({ title, description, icon: Icon, accent }) => (
              <li key={title} className="flex min-w-0 items-start gap-3" data-reveal="up">
                <span
                  className="grid size-11 shrink-0 place-items-center rounded-full border-2"
                  style={{ borderColor: accent, color: accent }}
                >
                  <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
                </span>
                <span className="min-w-0 pt-1">
                  <span className="block text-sm font-semibold leading-[1.3] text-white">
                    {title}
                  </span>
                  <span className="mt-1 block text-xs leading-[1.5] text-white/65">
                    {description}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="grid h-[350px] grid-cols-5 grid-rows-2 gap-3 sm:h-[460px] sm:gap-5"
          data-reveal="right"
        >
          {COLLAGE_IMAGES.map(({ src, alt }, index) => {
            const placement = [
              "col-start-2 col-span-2 row-start-1 self-end h-[88%]",
              "col-start-4 col-span-2 row-start-1",
              "col-start-1 col-span-3 row-start-2 self-start h-[88%]",
              "col-start-4 col-span-2 row-start-2 self-end",
            ][index];

            return (
              <div key={src} className={`min-h-0 overflow-hidden rounded-xl ${placement}`}>
                <img className="size-full object-cover" src={src} alt={alt} loading="lazy" />
              </div>
            );
          })}
        </div>
      </div>

      <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-8 sm:mt-14 sm:grid-cols-4 sm:gap-x-8">
        {STATS.map((stat) => (
          <StatItem key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </dl>

      {/* <p className="m-0 mt-8 text-right text-[10px] font-medium uppercase text-white/55">
        Quality <span className="px-2 text-[#e1de00]">/</span> Innovation
        <span className="px-2 text-[#49c4bc]">/</span> Partnership
      </p> */}
    </div>
  </section>
);
