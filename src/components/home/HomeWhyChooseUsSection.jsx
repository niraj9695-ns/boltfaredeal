import { PlayCircleIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { SectionHeading } from "../shared/SectionHeading";
import { StatItem } from "../shared/StatItem";
import { ASSETS, STATS } from "../../lib/assets";

export const HomeWhyChooseUsSection = () => (
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
              <p className="m-0 text-base font-light leading-relaxed tracking-[0] text-white">
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
                      className="flex items-start gap-2 text-sm font-semibold leading-[21px] tracking-[0] text-white sm:text-base"
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
);
