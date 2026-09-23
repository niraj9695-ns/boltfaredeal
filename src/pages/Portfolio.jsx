import { ArrowUpRightIcon } from "lucide-react";
import { useState } from "react";
import diaryImage1 from "../assets/images/PortFolioImages/diaries/diaries01.png";
import diaryImage2 from "../assets/images/PortFolioImages/diaries/diaries02.png";
import diaryImage3 from "../assets/images/PortFolioImages/diaries/diaries03.png";
import diaryImage4 from "../assets/images/PortFolioImages/diaries/diaries04.png";
import labelImage1 from "../assets/images/PortFolioImages/labels/lables01.png";
import labelImage2 from "../assets/images/PortFolioImages/labels/lables02.png";
import labelImage3 from "../assets/images/PortFolioImages/labels/lables03.png";
import labelImage4 from "../assets/images/PortFolioImages/labels/lables04.png";
import labelImage5 from "../assets/images/PortFolioImages/labels/lables05.png";
import labelImage6 from "../assets/images/PortFolioImages/labels/lables06.png";
import labelImage7 from "../assets/images/PortFolioImages/labels/lables07.png";
import labelImage8 from "../assets/images/PortFolioImages/labels/lables08.png";
import labelImage9 from "../assets/images/PortFolioImages/labels/lables09.png";
import packagingImage1 from "../assets/images/PortFolioImages/packaging/packaging02.png";
import packagingImage2 from "../assets/images/PortFolioImages/packaging/packaging03.png";
import packagingImage3 from "../assets/images/PortFolioImages/packaging/packaging04.png";
import packagingImage4 from "../assets/images/PortFolioImages/packaging/packaging05.png";
import packagingImage5 from "../assets/images/PortFolioImages/packaging/packaging06.png";
import packagingImage6 from "../assets/images/PortFolioImages/packaging/packaging07.png";
import packagingImage7 from "../assets/images/PortFolioImages/packaging/packaging08.png";
import packagingImage8 from "../assets/images/PortFolioImages/packaging/packaging09.png";
import packagingImage9 from "../assets/images/PortFolioImages/packaging/saksham nation.png";
import printImage1 from "../assets/images/PortFolioImages/print/print01.png";
import printImage2 from "../assets/images/PortFolioImages/print/print02.png";
import printImage3 from "../assets/images/PortFolioImages/print/print03.png";
import printImage4 from "../assets/images/PortFolioImages/print/print04.png";
import printImage5 from "../assets/images/PortFolioImages/print/print05.png";
import printImage6 from "../assets/images/PortFolioImages/print/print06.png";
import printImage7 from "../assets/images/PortFolioImages/print/print07.png";
import printImage8 from "../assets/images/PortFolioImages/print/print08.png";
import printImage9 from "../assets/images/PortFolioImages/print/print09.png";
import printImage10 from "../assets/images/PortFolioImages/print/print10.png";
import printImage11 from "../assets/images/PortFolioImages/print/print11.png";
import printImage12 from "../assets/images/PortFolioImages/print/print12.png";
import manualImage1 from "../assets/images/PortFolioImages/manuals/manuals01.png";
import manualImage2 from "../assets/images/PortFolioImages/manuals/manuals02.png";
import manualImage3 from "../assets/images/PortFolioImages/manuals/manuals03.png";
import boppImage1 from "../assets/images/PortFolioImages/bopptapes/bopp-tapes01.png";
import boppImage2 from "../assets/images/PortFolioImages/bopptapes/bopp-tapes02.png";
import boppImage3 from "../assets/images/PortFolioImages/bopptapes/bopp-tapes03.png";
import mailerBagImage1 from "../assets/images/PortFolioImages/mailerbag/mailer-bag01.png";
import mailerBagImage2 from "../assets/images/PortFolioImages/mailerbag/mailer-bag02.png";
import mailerBagImage3 from "../assets/images/PortFolioImages/mailerbag/mailer-bag03.png";
import strappingRollImage1 from "../assets/images/PortFolioImages/strappingroll/roll01.png";
import strappingRollImage2 from "../assets/images/PortFolioImages/strappingroll/roll02.png";
import strappingRollImage3 from "../assets/images/PortFolioImages/strappingroll/roll03.png";

const FILTERS = ["All", "Diaries", "Labels", "Packaging", "Print", "Manuals", "Bopp tapes", "Mailer bag", "Strapping roll"];

const PROJECTS = [
  { title: "APPL", type: "Booklet", category: "Diaries", image: diaryImage1 },
  { title: "Fairdeal", type: "Diary", category: "Diaries", image: diaryImage2 },
  { title: "Corporate Diary", type: "Diary", category: "Diaries", image: diaryImage3 },
  { title: "Premium Diary", type: "Diary", category: "Diaries", image: diaryImage4 },
  { title: "Packaging Collection 01", type: "Packaging", category: "Packaging", image: packagingImage1 },
  { title: "Packaging Collection 02", type: "Packaging", category: "Packaging", image: packagingImage2 },
  { title: "Packaging Collection 03", type: "Packaging", category: "Packaging", image: packagingImage3 },
  { title: "Packaging Collection 04", type: "Packaging", category: "Packaging", image: packagingImage4 },
  { title: "Packaging Collection 05", type: "Packaging", category: "Packaging", image: packagingImage5 },
  { title: "Packaging Collection 06", type: "Packaging", category: "Packaging", image: packagingImage6 },
  { title: "Packaging Collection 07", type: "Packaging", category: "Packaging", image: packagingImage7 },
  { title: "Packaging Collection 08", type: "Packaging", category: "Packaging", image: packagingImage8 },
  { title: "Packaging Collection 09", type: "Packaging", category: "Packaging", image: packagingImage9 },
  { title: "Print Collection 01", type: "Print", category: "Print", image: printImage1 },
  { title: "Print Collection 02", type: "Print", category: "Print", image: printImage2 },
  { title: "Print Collection 03", type: "Print", category: "Print", image: printImage3 },
  { title: "Print Collection 04", type: "Print", category: "Print", image: printImage4 },
  { title: "Print Collection 05", type: "Print", category: "Print", image: printImage5 },
  { title: "Print Collection 06", type: "Print", category: "Print", image: printImage6 },
  { title: "Print Collection 07", type: "Print", category: "Print", image: printImage7 },
  { title: "Print Collection 08", type: "Print", category: "Print", image: printImage8 },
  { title: "Print Collection 09", type: "Print", category: "Print", image: printImage9 },
  { title: "Print Collection 10", type: "Print", category: "Print", image: printImage10 },
  { title: "Print Collection 11", type: "Print", category: "Print", image: printImage11 },
  { title: "Print Collection 12", type: "Print", category: "Print", image: printImage12 },
  { title: "Manual Collection 01", type: "Manual", category: "Manuals", image: manualImage1 },
  { title: "Manual Collection 02", type: "Manual", category: "Manuals", image: manualImage2 },
  { title: "Manual Collection 03", type: "Manual", category: "Manuals", image: manualImage3 },
  { title: "BOPP Tape Collection 01", type: "BOPP Tape", category: "Bopp tapes", image: boppImage1 },
  { title: "BOPP Tape Collection 02", type: "BOPP Tape", category: "Bopp tapes", image: boppImage2 },
  { title: "BOPP Tape Collection 03", type: "BOPP Tape", category: "Bopp tapes", image: boppImage3 },
  { title: "Mailer Bag Collection 01", type: "Mailer Bag", category: "Mailer bag", image: mailerBagImage1 },
  { title: "Mailer Bag Collection 02", type: "Mailer Bag", category: "Mailer bag", image: mailerBagImage2 },
  { title: "Mailer Bag Collection 03", type: "Mailer Bag", category: "Mailer bag", image: mailerBagImage3 },
  { title: "Strapping Roll Collection 01", type: "Strapping Roll", category: "Strapping roll", image: strappingRollImage1 },
  { title: "Strapping Roll Collection 02", type: "Strapping Roll", category: "Strapping roll", image: strappingRollImage2 },
  { title: "Strapping Roll Collection 03", type: "Strapping Roll", category: "Strapping roll", image: strappingRollImage3 },
  { title: "Label Collection 01", type: "Label", category: "Labels", image: labelImage1 },
  { title: "Label Collection 02", type: "Label", category: "Labels", image: labelImage2 },
  { title: "Label Collection 03", type: "Label", category: "Labels", image: labelImage3 },
  { title: "Label Collection 04", type: "Label", category: "Labels", image: labelImage4 },
  { title: "Label Collection 05", type: "Label", category: "Labels", image: labelImage5 },
  { title: "Label Collection 06", type: "Label", category: "Labels", image: labelImage6 },
  { title: "Label Collection 07", type: "Label", category: "Labels", image: labelImage7 },
  { title: "Label Collection 08", type: "Label", category: "Labels", image: labelImage8 },
  { title: "Label Collection 09", type: "Label", category: "Labels", image: labelImage9 },
];

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const visibleProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <>
      <style>{`
        .portfolio-page {
          background: #000;
          color: #fff;
        }

        .portfolio-section {
          background: #000;
        }

        .portfolio-eyebrow {
          color: #92d1bc;
        }

        .portfolio-title {
          color: #f4f4f2;
        }

        .portfolio-title-accent {
          color: #e1de00;
        }

        .portfolio-description {
          color: #f1f1f1;
        }

        .portfolio-filter {
          color: #fff;
          text-align: left;
        }

        .portfolio-filter:hover {
          color: #fff;
        }

        .portfolio-filter-active-light {
          color: #fff;
        }

        .portfolio-filter-underline {
          background: #fff;
          opacity: 0;
        }

        @media (min-width: 1024px) {
          .portfolio-filter {
            color: #fff;
          }

          .portfolio-filter:hover,
          .portfolio-filter-active-light {
            color: #fff;
          }

          .portfolio-filter-underline {
            display: none;
          }
        }

        .portfolio-project-section {
          background: #000;
        }

        .portfolio-project-card {
          background: #000;
        }

        .portfolio-empty {
          color: rgba(255, 255, 255, 0.7);
        }

        html[data-theme="light"] .portfolio-page {
          background: #ffffe9;
          color: #171b1f;
        }

        html[data-theme="light"] .portfolio-section {
          background: #ffffe9;
        }

        html[data-theme="light"] .portfolio-eyebrow {
          color: #1a7d6a;
        }

        html[data-theme="light"] .portfolio-title {
          color: #171b1f;
        }

        html[data-theme="light"] .portfolio-title-accent {
          color: #1a7d6a;
        }

        html[data-theme="light"] .portfolio-description {
          color: #2d3748;
        }

        html[data-theme="light"] .portfolio-filter {
          color: #fff;
        }

        html[data-theme="light"] .portfolio-filter:hover {
          color: #fff;
        }

        html[data-theme="light"] .portfolio-filter-active-light {
          color: #fff;
        }

        html[data-theme="light"] .portfolio-filter-underline {
          display: block;
        }

        @media (min-width: 1024px) {
          html[data-theme="light"] .portfolio-filter,
          html[data-theme="light"] .portfolio-filter:hover,
          html[data-theme="light"] .portfolio-filter-active-light {
            color: #171b1f;
          }

          html[data-theme="light"] .portfolio-filter-underline {
            display: none;
          }
        }

        html[data-theme="light"] .portfolio-project-section {
          background: #ffffe9;
        }

        html[data-theme="light"] .portfolio-project-card {
          background: #d5d5d5;
        }

        html[data-theme="light"] .portfolio-empty {
          color: rgba(23, 27, 31, 0.7);
        }
          .portfolio-project-card .portfolio-project-title {
  color: #fff !important;
}

.portfolio-project-card .portfolio-project-type {
  color: #b7c5dc !important;
}

.portfolio-project-card .portfolio-project-arrow {
  color: #fff !important;
}
      `}</style>

      <div className="portfolio-page">
        {/* PORTFOLIO INTRO */}
        <section className="portfolio-section px-6 pb-14 pt-16 sm:px-10 sm:pb-16 sm:pt-40 lg:px-[7%] lg:pb-[74px] lg:pt-[220px]">
          <div className="mx-auto max-w-[1240px]">
            <div data-reveal="left">
              <p className="portfolio-eyebrow mb-3 text-[13px] font-normal uppercase tracking-[0.02em] sm:text-[15px]">
                Portfolio
              </p>

              <h1 className="portfolio-title font-serif text-[30px] font-normal leading-tight tracking-[-0.04em] sm:text-[38px]">
                Our{" "}
                <span className="portfolio-title-accent">
                  amazing cases
                </span>
              </h1>

              <p className="portfolio-description mt-5 max-w-[720px] text-[16px] leading-[1.4] sm:text-[18px] sm:leading-[1.35]">
                You may be interested in what we can offer you. More services
                you can find below. We do everything at a high level.
              </p>
            </div>

            {/* FILTERS */}
            <div
              data-reveal="right"
              className="mt-16 grid grid-cols-3 items-center gap-x-4 gap-y-5 sm:mt-[78px] sm:gap-x-8 lg:flex lg:flex-nowrap lg:justify-between lg:gap-0"
              role="tablist"
              aria-label="Portfolio categories"
            >
              {FILTERS.map((filter) => {
                const isActive = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFilter(filter)}
                    className={`
                      portfolio-filter
                      portfolio-filter-active-light
                      relative
                      w-full
                      justify-self-start
                      text-[16px]
                      leading-none
                      whitespace-nowrap
                      transition-colors
                      duration-200
                      ${isActive ? "rounded-md border border-white/40 bg-white/10 px-3 py-2" : "border border-transparent px-0 py-2"}
                      sm:w-auto
                      sm:text-[17px]
                      lg:w-auto
                      lg:border-0
                      lg:bg-transparent
                      lg:px-0
                      lg:py-0
                    `}
                  >
                    {filter}

                    <span
                      className={`
                        portfolio-filter-underline
                        absolute
                        bottom-[-7px]
                        left-0
                        right-0
                        h-px
                        transition-all
                        duration-300
                        ${isActive ? "opacity-100 !w-auto" : "opacity-0"}
                      `}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          className="portfolio-project-section px-6 py-10 sm:px-10 sm:py-12 lg:px-[8.8%] lg:py-[34px]"
          aria-label="Selected portfolio work"
        >
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-5">
            {visibleProjects.map((project) => {
              const projectKey = project.title + project.image;
              const isActive = activeProject === projectKey;

              return (
                <article
                  key={projectKey}
                  className="portfolio-project-card group relative aspect-[0.8] overflow-hidden"
                  onMouseEnter={() => setActiveProject(projectKey)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} ${project.type}`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />

                  {/* IMAGE OVERLAY */}
                  <div
                    className={`
                      absolute inset-0
                      bg-gradient-to-t
                      from-[#031426]
                      via-[#031426]/35
                      to-transparent
                      transition-opacity
                      duration-500
                      ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }
                    `}
                  />

                  {/* PROJECT CONTENT */}
                  <div
                    className={`
                      absolute inset-x-0 bottom-0
                      p-7
                      transition-all
                      duration-500
                      sm:p-8
                      ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                      }
                    `}
                  >
                    <div className="flex items-end justify-between gap-4">
  <div>
    <h2 className="portfolio-project-title text-[24px] font-semibold leading-none sm:text-[27px]">
  {project.title}
</h2>

    <p className="!text-[#b7c5dc] mt-3 text-[18px] leading-none">
      {project.type}
    </p>
  </div>

  <ArrowUpRightIcon className="portfolio-project-arrow mb-1 h-6 w-6 shrink-0" />
</div>
                  </div>
                </article>
              );
            })}
          </div>

          {visibleProjects.length === 0 && (
            <p className="portfolio-empty py-20 text-center">
              More work is coming soon.
            </p>
          )}
        </section>
      </div>
    </>
  );
};