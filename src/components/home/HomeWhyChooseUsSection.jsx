import {
  BadgeCheck,
  Lightbulb,
  Settings2,
  Trophy,
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
  { src: ASSETS.servicePrint, alt: "Printed materials from our print services" },
  { src: ASSETS.servicePackaging, alt: "Corrugated packaging produced for clients" },
  { src: ASSETS.serviceLabels, alt: "Labels produced for customer products" },
];

export const HomeWhyChooseUsSection = () => (
  <section className="relative z-10 w-full overflow-hidden bg-[#05080a] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 xl:py-24">
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

    <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-x-8 gap-y-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] xl:grid-cols-[minmax(300px,0.95fr)_minmax(440px,1.45fr)_minmax(170px,0.48fr)] xl:gap-x-10">
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
        className="relative min-h-[350px] sm:min-h-[475px] xl:min-h-[540px]"
        data-reveal="right"
      >
        <div
          className="absolute inset-x-[7%] top-0 h-[79%] overflow-hidden"
          style={{ clipPath: "polygon(16% 0, 100% 0, 81% 100%, 0 100%)" }}
        >
          <img
            className="size-full object-cover object-center"
            alt="Printing press operating in our production facility"
            src={ASSETS.whyChooseUsImg}
            loading="lazy"
          />
        </div>

        <div className="absolute inset-x-[2%] bottom-0 grid grid-cols-3 items-end gap-1.5 sm:gap-2.5">
          {COLLAGE_IMAGES.map(({ src, alt }, index) => (
            <div
              key={src}
              className={`h-[105px] overflow-hidden border-2 border-white sm:h-[145px] xl:h-[175px] ${
                index === 1 ? "translate-y-0" : "translate-y-[-5px]"
              }`}
              style={{
                clipPath:
                  index === 0
                    ? "polygon(12% 0, 100% 0, 82% 100%, 0 100%)"
                    : index === 1
                      ? "polygon(16% 0, 100% 0, 84% 100%, 0 100%)"
                      : "polygon(18% 0, 100% 0, 82% 100%, 0 100%)",
              }}
            >
              <img className="size-full object-cover" src={src} alt={alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <aside className="relative lg:col-span-2 xl:col-span-1 xl:flex xl:justify-center">
        <dl className="relative m-0 grid grid-cols-2 gap-x-6 gap-y-7 sm:gap-x-10 lg:grid-cols-4 xl:w-full xl:max-w-[220px] xl:grid-cols-1 xl:gap-y-6">
          {STATS.map((stat) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </dl>
      </aside>

      <p className="m-0 text-right text-[10px] font-medium uppercase text-white/55 lg:col-span-2 xl:col-span-3">
        Quality <span className="px-2 text-[#e1de00]">/</span> Innovation
        <span className="px-2 text-[#49c4bc]">/</span> Partnership
      </p>
    </div>
  </section>
);
