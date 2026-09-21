import { ArrowUpRightIcon } from "lucide-react";
import { useState } from "react";
import { ASSETS } from "../lib/assets";

const FILTERS = ["All", "Diaries", "Labels", "Packaging", "Print", "Manuals", "Bopp tapes"];

const PROJECTS = [
  { title: "APPL", type: "Booklet", category: "Diaries", image: ASSETS.portfolio1 },
  { title: "Fairdeal", type: "Diary", category: "Diaries", image: ASSETS.portfolio2 },
  { title: "Office Index", type: "Manual", category: "Manuals", image: ASSETS.portfolio3 },
  { title: "Suraj Coats", type: "Booklet", category: "Print", image: ASSETS.portfolio4 },
  { title: "Agro Kawach", type: "Label", category: "Labels", image: ASSETS.portfolio5 },
  { title: "Agro Kawach", type: "Label", category: "Labels", image: ASSETS.portfolio6 },
];

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const visibleProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <div className="bg-[#171923] text-white">
      <section className="bg-black px-6 pb-14 pt-20 sm:px-10 sm:pb-16 sm:pt-24 lg:px-[7%] lg:pb-[74px] lg:pt-[140px]">
        <div className="mx-auto max-w-[1240px]">
          <p className="mb-3 text-[13px] font-normal uppercase tracking-[0.02em] text-[#92d1bc] sm:text-[15px]">
            Portfolio
          </p>
          <h1 className="font-serif text-[30px] font-normal leading-tight tracking-[-0.04em] text-[#f4f4f2] sm:text-[38px]">
            Our <span className="text-[#e1de00]">amazing cases</span>
          </h1>
          <p className="mt-5 max-w-[720px] text-[16px] leading-[1.4] text-[#f1f1f1] sm:text-[18px] sm:leading-[1.35]">
            You may be interested in what we can offer you. More services you can find below. We do everything at a high level.
          </p>

          <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-5 sm:mt-[78px] sm:gap-x-11 lg:gap-x-[46px]" role="tablist" aria-label="Portfolio categories">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative pb-1 text-[16px] leading-none transition-colors duration-200 sm:text-[17px] ${
                    isActive ? "text-white" : "text-[#f0f0f0]/90 hover:text-[#e1de00]"
                  }`}
                >
                  {filter}
                  <span className={`absolute bottom-[-5px] left-0 h-px bg-white transition-all duration-300 ${isActive ? "w-full" : "w-0"}`} />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-10 sm:py-12 lg:px-[8.8%] lg:py-[34px]" aria-label="Selected portfolio work">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-5">
          {visibleProjects.map((project) => {
            const isActive = activeProject === project.title + project.image;
            return (
              <article
                key={project.title + project.image}
                className="group relative aspect-[1.28] overflow-hidden bg-[#d5d5d5]"
                onMouseEnter={() => setActiveProject(project.title + project.image)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <img
                  src={project.image}
                  alt={`${project.title} ${project.type}`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-[#031426] via-[#031426]/35 to-transparent transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                <div className={`absolute inset-x-0 bottom-0 p-7 transition-all duration-500 sm:p-8 ${isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"}`}>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h2 className="text-[24px] font-semibold leading-none text-white sm:text-[27px]">{project.title}</h2>
                      <p className="mt-3 text-[18px] leading-none text-[#b7c5dc]">{project.type}</p>
                    </div>
                    <ArrowUpRightIcon className="mb-1 h-6 w-6 shrink-0 text-white" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {visibleProjects.length === 0 && (
          <p className="py-20 text-center text-white/70">More work is coming soon.</p>
        )}
      </section>
    </div>
  );
};
