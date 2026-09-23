import { ArrowUpRightIcon } from "lucide-react";
import { useState } from "react";
import { ASSETS } from "../lib/assets";

const FILTERS = [
  "All",
  "Diaries",
  "Labels",
  "Packaging",
  "Print",
  "Manuals",
  "Bopp tapes",
];

const PROJECTS = [
  {
    title: "APPL",
    type: "Booklet",
    category: "Diaries",
    image: ASSETS.portfolio1,
  },
  {
    title: "Fairdeal",
    type: "Diary",
    category: "Diaries",
    image: ASSETS.portfolio2,
  },
  {
    title: "Office Index",
    type: "Manual",
    category: "Manuals",
    image: ASSETS.portfolio3,
  },
  {
    title: "Suraj Coats",
    type: "Booklet",
    category: "Print",
    image: ASSETS.portfolio4,
  },
  {
    title: "Agro Kawach",
    type: "Label",
    category: "Labels",
    image: ASSETS.portfolio5,
  },
  {
    title: "Agro Kawach",
    type: "Label",
    category: "Labels",
    image: ASSETS.portfolio6,
  },
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
          color: rgba(240, 240, 240, 0.9);
        }

        .portfolio-filter:hover {
          color: #e1de00;
        }

        .portfolio-filter-active-light {
          background: transparent;
          color: #fff;
        }

        .portfolio-filter-underline {
          width: 0;
          opacity: 0;
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
          color: #2d3748;
        }

        html[data-theme="light"] .portfolio-filter:hover {
          color: #1a7d6a;
        }

        html[data-theme="light"] .portfolio-filter-active-light {
          background: #1a7d6a;
          color: #fff;
        }

        html[data-theme="light"] .portfolio-filter-underline {
          display: none;
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
              className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-5 sm:mt-[78px] sm:gap-x-11 lg:gap-x-[46px]"
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
                      rounded-full
                      px-7
                      py-2
                      pb-2
                      text-[16px]
                      leading-none
                      whitespace-nowrap
                      transition-colors
                      duration-200
                      sm:text-[17px]
                    `}
                  >
                    {filter}

                    <span
                      className={`
                        portfolio-filter-underline
                        absolute
                        bottom-[-5px]
                        left-7
                        right-7
                        h-px
                        bg-white
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
            {visibleProjects.map((project, index) => {
              const projectKey = project.title + project.image;
              const isActive = activeProject === projectKey;

              return (
                <article
                  key={projectKey}
                  data-reveal={index % 2 === 0 ? "left" : "right"}
                  className="portfolio-project-card group relative aspect-[1.1] overflow-hidden"
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

  {/* <ArrowUpRightIcon className="portfolio-project-arrow mb-1 h-6 w-6 shrink-0" /> */}
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