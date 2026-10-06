import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  XIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
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

const ARTWORKS_PER_CHAPTER = 10;

const DESKTOP_LAYOUTS = [
  { x: 2, y: 8, rotation: -3, scale: 0.94, depth: 0.12, z: 2 },
  { x: 28, y: 5, rotation: 2, scale: 0.98, depth: 0.1, z: 1 },
  { x: 54, y: 9, rotation: -2, scale: 0.94, depth: 0.14, z: 2 },
  { x: 78, y: 5, rotation: 3, scale: 0.92, depth: 0.09, z: 1 },
  { x: 12, y: 39, rotation: 2, scale: 0.92, depth: 0.12, z: 1 },
  { x: 39, y: 37, rotation: -2, scale: 1, depth: 0.16, z: 3 },
  { x: 66, y: 41, rotation: 3, scale: 0.92, depth: 0.1, z: 2 },
  { x: 2, y: 72, rotation: -2, scale: 0.92, depth: 0.13, z: 1 },
  { x: 40, y: 70, rotation: 2, scale: 0.96, depth: 0.09, z: 2 },
  { x: 78, y: 73, rotation: -3, scale: 0.9, depth: 0.12, z: 3 },
];

const TABLET_LAYOUTS = [
  { x: 2, y: 8, rotation: -2, scale: 0.9, z: 2 },
  { x: 37, y: 5, rotation: 2, scale: 0.92, z: 1 },
  { x: 70, y: 10, rotation: -2, scale: 0.9, z: 2 },
  { x: 8, y: 35, rotation: 2, scale: 0.9, z: 1 },
  { x: 40, y: 32, rotation: -2, scale: 0.96, z: 3 },
  { x: 72, y: 38, rotation: 2, scale: 0.9, z: 1 },
  { x: 2, y: 63, rotation: -2, scale: 0.9, z: 2 },
  { x: 37, y: 60, rotation: 2, scale: 0.93, z: 1 },
  { x: 72, y: 66, rotation: -2, scale: 0.9, z: 2 },
  { x: 37, y: 82, rotation: 1, scale: 0.86, z: 3 },
];

const createProjectKey = (project) => `${project.title}:${project.image}`;
const twoDigits = (number) => String(number).padStart(2, "0");

const PortfolioArtwork = ({
  project,
  projectIndex,
  projectCount,
  chapterIndex,
  localIndex,
  chapterSize,
  onOpen,
}) => {
  const projectKey = createProjectKey(project);
  const desktopLayout = DESKTOP_LAYOUTS[localIndex % DESKTOP_LAYOUTS.length];
  const tabletLayout = TABLET_LAYOUTS[localIndex % TABLET_LAYOUTS.length];
  const floatDuration = 36 + (projectIndex % 9) * 2;
  const floatPhase = projectIndex * 2.399963229728653;
  const floatRadiusX = 18 + (projectIndex % 4) * 3;
  const floatRadiusY = 16 + (projectIndex % 3) * 3;
  const floatRotation = 0.75 + (projectIndex % 4) * 0.25;
  const smallLayout = {
    x: localIndex % 2 === 0 ? 2 : 24,
    rotation: localIndex % 2 === 0 ? -1 : 1,
    scale: 0.92,
  };

  const handlePointerMove = (event) => {
    if (event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;
    const deltaX = (relativeX / bounds.width - 0.5) * 12;
    const deltaY = (relativeY / bounds.height - 0.5) * 12;
    const target = event.currentTarget;

    target.style.setProperty("--pointer-x", `${deltaX.toFixed(1)}px`);
    target.style.setProperty("--pointer-y", `${deltaY.toFixed(1)}px`);
    target.style.setProperty("--cursor-x", `${relativeX}px`);
    target.style.setProperty("--cursor-y", `${relativeY}px`);
  };

  const handlePointerLeave = (event) => {
    event.currentTarget.style.setProperty("--pointer-x", "0px");
    event.currentTarget.style.setProperty("--pointer-y", "0px");
  };

  const style = {
    "--art-left": `${desktopLayout.x}%`,
    "--art-top": `${desktopLayout.y}%`,
    "--tablet-left": `${tabletLayout.x}%`,
    "--tablet-top": `${tabletLayout.y}%`,
    "--mobile-left": `${smallLayout.x}%`,
    "--mobile-top": `calc(12svh + ${localIndex * 360}px)`,
    "--art-rotation": `${desktopLayout.rotation}deg`,
    "--tablet-rotation": `${tabletLayout.rotation}deg`,
    "--mobile-rotation": `${smallLayout.rotation}deg`,
    "--art-scale": desktopLayout.scale,
    "--tablet-scale": tabletLayout.scale,
    "--mobile-scale": smallLayout.scale,
    "--art-z": desktopLayout.z,
    "--tablet-z": tabletLayout.z,
    "--mobile-z": localIndex % 2 === 0 ? 2 : 1,
    "--scroll-depth": desktopLayout.depth ?? 0.1,
    "--entry-delay": `${Math.min(localIndex * 58, 460)}ms`,
    "--exit-delay": `${Math.min(localIndex * 12, 96)}ms`,
    "--float-duration": `${floatDuration}s`,
    "--float-hover-duration": `${floatDuration * 1.8}s`,
    "--float-delay": `${-((projectIndex * 1.73) % floatDuration)}s`,
  };
  const motionPathStyle = Object.fromEntries(
    Array.from({ length: 8 }, (_, step) => {
      const angle = (step / 8) * Math.PI * 2;
      const x =
        Math.cos(angle + floatPhase) * floatRadiusX +
        Math.sin(angle * 2 + floatPhase) * floatRadiusX * 0.13;
      const y =
        Math.sin(angle + floatPhase) * floatRadiusY +
        Math.cos(angle * 2 + floatPhase * 0.7) * floatRadiusY * 0.14;
      const rotation =
        Math.sin(angle + floatPhase) * floatRotation +
        Math.cos(angle * 2 + floatPhase) * 0.15;

      return [
        [`--float-x-${step}`, `${x.toFixed(2)}px`],
        [`--float-y-${step}`, `${y.toFixed(2)}px`],
        [`--float-rotation-${step}`, `${rotation.toFixed(2)}deg`],
      ];
    }).flat(),
  );

  return (
    <article
      className="portfolio-artwork"
      data-scroll-depth={desktopLayout.depth ?? 0.1}
      key={`${chapterIndex}-${projectKey}`}
      style={style}
    >
      <div className="portfolio-artwork-motion" style={motionPathStyle}>
        <button
          type="button"
          className="portfolio-artwork-button"
          aria-label={`View ${project.title}, ${project.type}, ${twoDigits(projectIndex + 1)} of ${projectCount}`}
          onClick={() => onOpen(projectKey)}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          <img
            src={project.image}
            alt={`${project.title}, ${project.type}`}
            className="portfolio-artwork-image"
            loading={projectIndex < 8 ? "eager" : "lazy"}
            decoding="async"
          />
          <span className="portfolio-view-cursor" aria-hidden="true">VIEW</span>
        </button>
        <div className="portfolio-artwork-label" aria-hidden="true">
          <span className="portfolio-artwork-label-index">
            {twoDigits(projectIndex + 1)} / {twoDigits(projectCount)}
          </span>
          <span className="portfolio-artwork-label-title">{project.title}</span>
          <span className="portfolio-artwork-label-type">{project.type}</span>
          <ArrowUpRightIcon className="portfolio-artwork-label-arrow" />
        </div>
      </div>
    </article>
  );
};

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [renderedFilter, setRenderedFilter] = useState("All");
  const [isFilterExiting, setIsFilterExiting] = useState(false);
  const [selectedProjectKey, setSelectedProjectKey] = useState(null);
  const filterTimerRef = useRef(null);
  const exhibitionRef = useRef(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const lastFocusedElementRef = useRef(null);
  const selectedProjectKeyRef = useRef(selectedProjectKey);

  const visibleProjects =
    renderedFilter === "All"
      ? FILTERS.slice(1).flatMap((category) =>
          PROJECTS.filter((project) => project.category === category),
        )
      : PROJECTS.filter((project) => project.category === renderedFilter);
  const projectIndexByKey = new Map(
    visibleProjects.map((project, index) => [createProjectKey(project), index]),
  );
  const chapters = [];

  for (let start = 0; start < visibleProjects.length; start += ARTWORKS_PER_CHAPTER) {
    chapters.push(visibleProjects.slice(start, start + ARTWORKS_PER_CHAPTER));
  }

  const selectedProjectIndex = visibleProjects.findIndex(
    (project) => createProjectKey(project) === selectedProjectKey,
  );
  const selectedProject =
    selectedProjectIndex >= 0 ? visibleProjects[selectedProjectIndex] : null;
  const visibleProjectsRef = useRef(visibleProjects);
  visibleProjectsRef.current = visibleProjects;
  selectedProjectKeyRef.current = selectedProjectKey;

  const handleFilterChange = (filter) => {
    if (filter === activeFilter) {
      exhibitionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.clearTimeout(filterTimerRef.current);
    setActiveFilter(filter);
    setIsFilterExiting(true);
    setSelectedProjectKey(null);

    filterTimerRef.current = window.setTimeout(() => {
      setRenderedFilter(filter);
      setIsFilterExiting(false);
      filterTimerRef.current = null;
      window.requestAnimationFrame(() => {
        exhibitionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }, 340);
  };

  const handleOpenProject = (projectKey) => {
    lastFocusedElementRef.current = document.activeElement;
    setSelectedProjectKey(projectKey);
  };

  useEffect(() => () => window.clearTimeout(filterTimerRef.current), []);

  useEffect(() => {
    const exhibition = exhibitionRef.current;
    if (!exhibition) return undefined;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    if (motionPreference.matches) return undefined;

    let animationFrame = 0;
    const updateArtworkParallax = () => {
      animationFrame = 0;
      const viewportCenter = window.innerHeight / 2;
      const artworks = Array.from(
        exhibition.querySelectorAll(".portfolio-artwork"),
      );
      const shifts = artworks.map((artwork) => {
        const rect = artwork.getBoundingClientRect();
        const depth = Number(artwork.dataset.scrollDepth || 0.1);
        const distance = rect.top + rect.height / 2 - viewportCenter;
        return Math.max(-22, Math.min(22, -distance * depth * 0.12));
      });

      artworks.forEach((artwork, index) => {
        artwork.style.setProperty("--scroll-shift", `${shifts[index].toFixed(1)}px`);
      });
    };

    const requestParallaxUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateArtworkParallax);
      }
    };

    requestParallaxUpdate();
    window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
    window.addEventListener("resize", requestParallaxUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestParallaxUpdate);
      window.removeEventListener("resize", requestParallaxUpdate);
    };
  }, [renderedFilter]);

  const modalIsOpen = selectedProjectKey !== null;

  useEffect(() => {
    if (!modalIsOpen) return undefined;

    const previousOverflow = document.documentElement.style.overflow;
    const handleModalKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProjectKey(null);
        return;
      }

      const projects = visibleProjectsRef.current;
      const currentIndex = projects.findIndex(
        (project) => createProjectKey(project) === selectedProjectKeyRef.current,
      );

      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        const nextIndex = (currentIndex + direction + projects.length) % projects.length;
        setSelectedProjectKey(createProjectKey(projects[nextIndex]));
        return;
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll("button:not([disabled])"),
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", handleModalKeyDown);
    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleModalKeyDown);
      window.cancelAnimationFrame(focusFrame);
      if (lastFocusedElementRef.current?.isConnected) {
        lastFocusedElementRef.current.focus();
      }
    };
  }, [modalIsOpen]);

  const navigateProject = (direction) => {
    if (!visibleProjects.length || selectedProjectIndex < 0) return;
    const nextIndex =
      (selectedProjectIndex + direction + visibleProjects.length) %
      visibleProjects.length;
    setSelectedProjectKey(createProjectKey(visibleProjects[nextIndex]));
  };

  const projectCounts = Object.fromEntries(
    FILTERS.map((filter) => [
      filter,
      filter === "All"
        ? PROJECTS.length
        : PROJECTS.filter((project) => project.category === filter).length,
    ]),
  );

  return (
    <>
      <style>{`
        .portfolio-page {
          --portfolio-muted: var(--theme-text-muted);
          position: relative;
          min-height: 100vh;
          overflow: clip;
          background: var(--theme-bg);
          color: var(--theme-text);
        }

        html[data-theme="light"] .portfolio-page {
          background: #ffffe9 !important;
        }

        .portfolio-intro {
          position: relative;
          padding: 140px 6% 22px;
          overflow: hidden;
        }

        .portfolio-intro-inner {
          position: relative;
          width: min(100%, 1420px);
          min-height: 320px;
          margin: 0 auto;
        }

        .portfolio-wordmark {
          position: absolute;
          top: 19%;
          left: -0.045em;
          color: var(--theme-text);
          opacity: 0.035;
          font-size: 14rem;
          font-weight: 700;
          line-height: 0.82;
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          transform: translate3d(0, var(--wordmark-shift, 0px), 0);
          transition: transform 0.2s linear;
        }

        .portfolio-intro-copy {
          position: relative;
          z-index: 1;
          max-width: 650px;
          padding-top: 32px;
        }

        .portfolio-eyebrow,
        .portfolio-index-label,
        .portfolio-chapter-kicker,
        .portfolio-artwork-label-index,
        .portfolio-viewer-kicker {
          color: var(--theme-accent);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .portfolio-title {
          max-width: 600px;
          margin: 22px 0 0;
          color: var(--theme-text);
          font-family: inherit;
          font-size: clamp(52px, 4vw, 80px);
          font-weight: 650;
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .portfolio-title-accent {
          color: var(--theme-accent-alt);
        }

        .portfolio-description {
          max-width: 460px;
          margin: 20px 0 0;
          color: var(--portfolio-muted);
          font-size: 15px;
          line-height: 1.75;
        }

        .portfolio-index-meta {
          display: flex;
          gap: 18px;
          margin-top: 28px;
          color: var(--portfolio-muted);
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .portfolio-navigation {
          position: absolute;
          z-index: 2;
          top: 50%;
          right: 1%;
          width: 230px;
          transform: translateY(-35%);
        }

        .portfolio-navigation-list {
          margin: 14px 0 0;
          padding: 0;
          list-style: none;
        }

        .portfolio-filter {
          display: grid;
          width: 100%;
          grid-template-columns: 34px 1fr auto;
          align-items: baseline;
          gap: 8px;
          padding: 7px 0;
          border: 0;
          border-bottom: 1px solid transparent;
          background: transparent;
          color: var(--portfolio-muted);
          font-family: inherit;
          font-size: 13px;
          text-align: left;
          cursor: pointer;
          transition: color 0.2s ease, border-color 0.2s ease;
        }

        .portfolio-filter:hover,
        .portfolio-filter[aria-selected="true"] {
          border-bottom-color: var(--theme-border);
          color: var(--theme-text);
        }

        .portfolio-filter:focus-visible,
        .portfolio-artwork-button:focus-visible,
        .portfolio-viewer button:focus-visible {
          outline: 2px solid var(--theme-accent);
          outline-offset: 4px;
        }

        .portfolio-filter-number,
        .portfolio-filter-count {
          color: var(--portfolio-muted);
          font-size: 9px;
          font-variant-numeric: tabular-nums;
        }

        .portfolio-filter[aria-selected="true"] .portfolio-filter-number {
          color: var(--theme-accent-alt);
        }

        .portfolio-exhibition {
          position: relative;
          padding: 0 6%;
          scroll-margin-top: 90px;
        }

        .portfolio-chapter {
          position: relative;
          width: min(100%, 1420px);
          height: clamp(980px, 112svh, 1180px);
          margin: 0 auto;
          border-top: 1px solid var(--theme-border);
          isolation: isolate;
        }

        .portfolio-chapter-header {
          position: absolute;
          z-index: 0;
          top: 24px;
          left: 2%;
          max-width: 50%;
        }

        .portfolio-chapter-title {
          display: block;
          margin-top: 8px;
          color: var(--theme-text);
          font-size: 23px;
          font-weight: 400;
          line-height: 1.15;
        }

        .portfolio-chapter-watermark {
          position: absolute;
          z-index: 0;
          top: 38%;
          left: 0;
          max-width: 100%;
          overflow: hidden;
          color: var(--theme-text);
          opacity: 0.035;
          font-size: 10rem;
          font-weight: 700;
          line-height: 0.9;
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
        }

        .portfolio-artwork {
          position: absolute;
          z-index: var(--art-z);
          top: var(--art-top);
          left: var(--art-left);
          width: clamp(145px, 17vw, 245px);
          opacity: 0;
          transform: translate3d(0, var(--scroll-shift, 0px), 0)
            rotate(var(--art-rotation)) scale(var(--art-scale));
          transform-origin: center;
          animation: portfolio-artwork-entry 650ms cubic-bezier(0.2, 0.75, 0.3, 1)
            var(--entry-delay) both;
          transition: transform 500ms cubic-bezier(0.2, 0.75, 0.3, 1), opacity 220ms ease;
          will-change: transform, opacity;
        }

        .portfolio-artwork:hover,
        .portfolio-artwork:focus-within {
          z-index: 30;
        }

        .portfolio-artwork-button {
          position: relative;
          display: block;
          width: 100%;
          aspect-ratio: 1;
          overflow: hidden;
          padding: 0;
          border: 0;
          background: transparent;
          cursor: none;
        }

        .portfolio-artwork-motion {
          position: relative;
          scale: 1;
          animation: portfolio-artwork-flight var(--float-duration) linear
            var(--float-delay) infinite;
          transition: scale 500ms cubic-bezier(0.2, 0.75, 0.3, 1);
          will-change: transform;
        }

        .portfolio-artwork:hover .portfolio-artwork-motion,
        .portfolio-artwork:focus-within .portfolio-artwork-motion {
          scale: 1.035;
          animation-duration: var(--float-hover-duration);
        }

        .portfolio-artwork-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: translate3d(var(--pointer-x, 0px), var(--pointer-y, 0px), 0)
            scale(1);
          transition: transform 700ms cubic-bezier(0.2, 0.75, 0.3, 1);
          will-change: transform;
        }

        .portfolio-artwork:hover .portfolio-artwork-image,
        .portfolio-artwork:focus-within .portfolio-artwork-image {
          transform: translate3d(var(--pointer-x, 0px), var(--pointer-y, 0px), 0)
            scale(1.045);
        }

        .portfolio-view-cursor {
          position: absolute;
          top: var(--cursor-y, 50%);
          left: var(--cursor-x, 50%);
          display: grid;
          width: 48px;
          height: 48px;
          place-items: center;
          border-radius: 50%;
          background: var(--theme-accent);
          color: var(--theme-bg);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.06em;
          opacity: 0;
          pointer-events: none;
          transform: translate(-50%, -50%) scale(0.8);
          transition: opacity 180ms ease, transform 220ms ease;
        }

        .portfolio-artwork:hover .portfolio-view-cursor,
        .portfolio-artwork:focus-within .portfolio-view-cursor {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }

        .portfolio-artwork-label {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 3px 12px;
          width: max-content;
          min-width: 100%;
          max-width: 270px;
          color: var(--theme-text);
          opacity: 0;
          pointer-events: none;
          transform: translateY(5px);
          transition: opacity 180ms ease, transform 220ms ease;
        }

        .portfolio-artwork:hover .portfolio-artwork-label,
        .portfolio-artwork:focus-within .portfolio-artwork-label {
          opacity: 1;
          transform: translateY(0);
        }

        .portfolio-artwork-label-index {
          grid-column: 1 / -1;
          font-size: 8px;
        }

        .portfolio-artwork-label-title {
          font-size: 15px;
          line-height: 1.25;
        }

        .portfolio-artwork-label-type {
          grid-column: 1;
          color: var(--portfolio-muted);
          font-size: 11px;
        }

        .portfolio-artwork-label-arrow {
          grid-column: 2;
          grid-row: 2 / 4;
          width: 16px;
          height: 16px;
          align-self: center;
          color: var(--theme-accent);
        }

        .portfolio-exhibition.is-leaving .portfolio-artwork {
          opacity: 0;
          translate: 0 -10px;
          transition: opacity 200ms ease, translate 200ms ease;
          transition-delay: var(--exit-delay);
          animation: none;
        }

        .portfolio-empty {
          min-height: 60vh;
          padding: 100px 0;
          color: var(--portfolio-muted);
          text-align: center;
        }

        .portfolio-viewer-backdrop {
          position: fixed;
          z-index: 1000;
          inset: 0;
          display: grid;
          place-items: center;
          padding: 24px;
          background: rgba(0, 0, 0, 0.76);
          backdrop-filter: blur(8px);
        }

        .portfolio-viewer {
          position: relative;
          display: grid;
          width: min(1100px, 100%);
          max-height: min(88svh, 900px);
          grid-template-columns: minmax(0, 1.2fr) minmax(240px, 0.8fr);
          overflow: auto;
          border: 1px solid var(--theme-border);
          background: var(--theme-surface);
          color: var(--theme-text);
          box-shadow: 0 30px 100px rgba(0, 0, 0, 0.35);
        }

        .portfolio-viewer-image-wrap {
          display: grid;
          min-height: 420px;
          place-items: center;
          overflow: hidden;
          background: var(--theme-bg);
        }

        .portfolio-viewer-image {
          display: block;
          width: 100%;
          max-height: 78svh;
          object-fit: contain;
        }

        .portfolio-viewer-copy {
          align-self: center;
          padding: 48px 34px;
        }

        .portfolio-viewer-title {
          margin: 18px 0 0;
          font-size: 34px;
          font-weight: 400;
          line-height: 1.1;
        }

        .portfolio-viewer-type {
          margin: 10px 0 0;
          color: var(--portfolio-muted);
          font-size: 14px;
        }

        .portfolio-viewer-count {
          display: block;
          margin-top: 32px;
          color: var(--theme-accent);
          font-size: 10px;
          letter-spacing: 0.12em;
        }

        .portfolio-viewer-actions {
          display: flex;
          gap: 10px;
          margin-top: 24px;
        }

        .portfolio-viewer button {
          display: grid;
          width: 42px;
          height: 42px;
          place-items: center;
          border: 1px solid var(--theme-border);
          background: transparent;
          color: var(--theme-text);
          cursor: pointer;
          transition: border-color 180ms ease, color 180ms ease;
        }

        .portfolio-viewer button:hover {
          border-color: var(--theme-accent);
          color: var(--theme-accent);
        }

        .portfolio-viewer-close {
          position: absolute;
          z-index: 2;
          top: 12px;
          right: 12px;
          background: var(--theme-surface) !important;
        }

        @keyframes portfolio-artwork-entry {
          from {
            opacity: 0;
            translate: 0 20px;
            scale: 0.96;
          }
          to {
            opacity: 1;
            translate: 0 0;
            scale: 1;
          }
        }

        @keyframes portfolio-artwork-flight {
          0%, 100% {
            transform: translate3d(var(--float-x-0), var(--float-y-0), 0)
              rotate(var(--float-rotation-0));
          }
          12.5% {
            transform: translate3d(var(--float-x-1), var(--float-y-1), 0)
              rotate(var(--float-rotation-1));
          }
          25% {
            transform: translate3d(var(--float-x-2), var(--float-y-2), 0)
              rotate(var(--float-rotation-2));
          }
          37.5% {
            transform: translate3d(var(--float-x-3), var(--float-y-3), 0)
              rotate(var(--float-rotation-3));
          }
          50% {
            transform: translate3d(var(--float-x-4), var(--float-y-4), 0)
              rotate(var(--float-rotation-4));
          }
          62.5% {
            transform: translate3d(var(--float-x-5), var(--float-y-5), 0)
              rotate(var(--float-rotation-5));
          }
          75% {
            transform: translate3d(var(--float-x-6), var(--float-y-6), 0)
              rotate(var(--float-rotation-6));
          }
          87.5% {
            transform: translate3d(var(--float-x-7), var(--float-y-7), 0)
              rotate(var(--float-rotation-7));
          }
        }

        @media (max-width: 1023px) {
          .portfolio-intro {
            padding-right: 5%;
            padding-left: 5%;
          }

          .portfolio-intro-inner {
            min-height: 440px;
          }

          .portfolio-wordmark {
            top: 17%;
            font-size: 9rem;
          }

          .portfolio-intro-copy {
            max-width: 56%;
            padding-top: 38px;
          }

          .portfolio-title {
            font-size: 46px;
          }

          .portfolio-navigation {
            right: 0;
            width: 205px;
          }

          .portfolio-exhibition {
            padding-right: 5%;
            padding-left: 5%;
          }

          .portfolio-chapter {
            height: 1240px;
          }

          .portfolio-artwork {
            top: var(--tablet-top);
            left: var(--tablet-left);
            width: clamp(145px, 22vw, 220px);
            transform: translate3d(0, var(--scroll-shift, 0px), 0)
              rotate(var(--tablet-rotation)) scale(var(--tablet-scale));
          }

          .portfolio-chapter-watermark {
            font-size: 8rem;
          }
        }

        @media (max-width: 639px) {
          .portfolio-intro {
            padding: 96px 16px 18px;
          }

          .portfolio-intro-inner {
            min-height: 0;
          }

          .portfolio-wordmark {
            top: 5px;
            left: -0.04em;
            font-size: 4.6rem;
            opacity: 0.045;
          }

          .portfolio-intro-copy {
            max-width: 100%;
            padding-top: 10px;
          }

          .portfolio-title {
            margin-top: 16px;
            font-size: 38px;
          }

          .portfolio-description {
            margin-top: 14px;
            font-size: 14px;
          }

          .portfolio-index-meta {
            margin-top: 14px;
          }

          .portfolio-navigation {
            position: relative;
            top: auto;
            right: auto;
            width: 100%;
            margin-top: 18px;
            transform: none;
          }

          .portfolio-navigation-list {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 0 12px;
          }

          .portfolio-filter {
            min-height: 32px;
            grid-template-columns: 21px minmax(0, 1fr) auto;
            gap: 4px;
            padding: 5px 0;
            font-size: 10px;
          }

          .portfolio-exhibition {
            padding: 0 20px;
          }

          .portfolio-chapter {
            height: var(--mobile-stage-height);
            min-height: 680px;
          }

          .portfolio-chapter-header {
            top: 18px;
            left: 2%;
            max-width: 90%;
          }

          .portfolio-chapter-title {
            font-size: 19px;
          }

          .portfolio-chapter-watermark {
            top: 40%;
            left: -2%;
            font-size: 4.2rem;
          }

          .portfolio-artwork {
            top: var(--mobile-top);
            left: var(--mobile-left);
            width: clamp(175px, 64vw, 275px);
            transform: translate3d(0, var(--scroll-shift, 0px), 0)
              rotate(var(--mobile-rotation)) scale(var(--mobile-scale));
          }

          .portfolio-artwork-button {
            cursor: pointer;
          }

          .portfolio-view-cursor {
            display: none;
          }

          .portfolio-artwork-label {
            top: calc(100% + 7px);
            max-width: 230px;
            opacity: 1;
            transform: none;
          }

          .portfolio-artwork-label-title {
            font-size: 13px;
          }

          .portfolio-artwork-label-type {
            font-size: 10px;
          }

          .portfolio-viewer-backdrop {
            align-items: end;
            padding: 12px;
          }

          .portfolio-viewer {
            width: 100%;
            max-height: 92svh;
            grid-template-columns: 1fr;
          }

          .portfolio-viewer-image-wrap {
            min-height: 0;
            height: 48svh;
          }

          .portfolio-viewer-image {
            width: 100%;
            height: 100%;
            max-height: 48svh;
          }

          .portfolio-viewer-copy {
            padding: 20px 22px 24px;
          }

          .portfolio-viewer-title {
            margin-top: 10px;
            font-size: 26px;
          }

          .portfolio-viewer-count {
            margin-top: 18px;
          }

          .portfolio-viewer-actions {
            margin-top: 14px;
          }
        }

        @media (hover: none) {
          .portfolio-artwork-button {
            cursor: pointer;
          }

          .portfolio-view-cursor {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-wordmark,
          .portfolio-artwork,
          .portfolio-artwork-motion,
          .portfolio-artwork-image,
          .portfolio-view-cursor,
          .portfolio-artwork-label,
          .portfolio-filter {
            animation: none !important;
            transition-duration: 0.01ms !important;
          }

          .portfolio-artwork {
            opacity: 1;
          }
        }
      `}</style>

      <main className="portfolio-page">
        <section className="portfolio-intro" aria-labelledby="portfolio-title">
          <div className="portfolio-intro-inner">
            <span className="portfolio-wordmark" aria-hidden="true">PORTFOLIO</span>
            <div className="portfolio-intro-copy" data-reveal="left">
              <p className="portfolio-eyebrow">Fairdeal / Selected works</p>
              <h1 id="portfolio-title" className="portfolio-title">
                An archive of <span className="portfolio-title-accent">things made.</span>
              </h1>
              <p className="portfolio-description">
                Print, packaging, and objects from the Fairdeal archive. A collection of 46 works across material, form, and finish.
              </p>
              <div className="portfolio-index-meta" aria-label={`${PROJECTS.length} projects across ${FILTERS.length - 1} categories`}>
                <span>46 works</span>
                <span>08 categories</span>
              </div>
            </div>

            <nav className="portfolio-navigation" aria-label="Portfolio exhibition categories">
              <p className="portfolio-index-label">Index / Category</p>
              <div className="portfolio-navigation-list" role="tablist" aria-label="Portfolio categories">
                {FILTERS.map((filter, index) => {
                  const isActive = activeFilter === filter;
                  return (
                    <button
                      key={filter}
                      id={`portfolio-filter-${index}`}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="portfolio-exhibition"
                      className="portfolio-filter"
                      onClick={() => handleFilterChange(filter)}
                    >
                      <span className="portfolio-filter-number">{twoDigits(index + 1)}</span>
                      <span>{filter}</span>
                      <span className="portfolio-filter-count">{twoDigits(projectCounts[filter])}</span>
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>
        </section>

        <section
          id="portfolio-exhibition"
          ref={exhibitionRef}
          className={`portfolio-exhibition${isFilterExiting ? " is-leaving" : ""}`}
          role="tabpanel"
          aria-labelledby={`portfolio-filter-${FILTERS.indexOf(activeFilter)}`}
          aria-busy={isFilterExiting}
        >
          {chapters.map((chapterProjects, chapterIndex) => {
            const chapterCategories = [...new Set(chapterProjects.map((project) => project.category))];
            const chapterTitle = chapterCategories.join(" / ");
            const chapterWatermark = chapterCategories.length === 1
              ? chapterCategories[0].toUpperCase()
              : "SELECTED";
            const mobileStageHeight = `calc(${chapterProjects.length * 360}px + 12svh)`;

            return (
              <section
                key={`${renderedFilter}-${chapterIndex}`}
                className="portfolio-chapter"
                aria-label={`Chapter ${chapterIndex + 1}: ${chapterTitle}`}
                style={{ "--mobile-stage-height": mobileStageHeight }}
              >
                {activeFilter !== "All" && (
                  <>
                    <header className="portfolio-chapter-header">
                      <span className="portfolio-chapter-kicker">
                        Chapter {twoDigits(chapterIndex + 1)} / {twoDigits(chapters.length)}
                      </span>
                      <span className="portfolio-chapter-title">{chapterTitle}</span>
                    </header>
                    <span className="portfolio-chapter-watermark" aria-hidden="true">
                      {chapterWatermark}
                    </span>
                  </>
                )}
                {chapterProjects.map((project, localIndex) => {
                  const projectIndex = projectIndexByKey.get(createProjectKey(project));
                  return (
                    <PortfolioArtwork
                      key={`${renderedFilter}-${chapterIndex}-${createProjectKey(project)}`}
                      project={project}
                      projectIndex={projectIndex}
                      projectCount={visibleProjects.length}
                      chapterIndex={chapterIndex}
                      localIndex={localIndex}
                      chapterSize={chapterProjects.length}
                      onOpen={handleOpenProject}
                    />
                  );
                })}
              </section>
            );
          })}
        </section>

        {selectedProject && (
          <div
            className="portfolio-viewer-backdrop"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedProjectKey(null);
            }}
          >
            <section
              ref={dialogRef}
              className="portfolio-viewer"
              role="dialog"
              aria-modal="true"
              aria-labelledby="portfolio-viewer-title"
              aria-describedby="portfolio-viewer-type"
              tabIndex={-1}
            >
              <button
                ref={closeButtonRef}
                type="button"
                className="portfolio-viewer-close"
                aria-label="Close project details"
                onClick={() => setSelectedProjectKey(null)}
              >
                <XIcon aria-hidden="true" />
              </button>
              <div className="portfolio-viewer-image-wrap">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title}, ${selectedProject.type}`}
                  className="portfolio-viewer-image"
                />
              </div>
              <div className="portfolio-viewer-copy">
                <span className="portfolio-viewer-kicker">{selectedProject.category}</span>
                <h2 id="portfolio-viewer-title" className="portfolio-viewer-title">
                  {selectedProject.title}
                </h2>
                <p id="portfolio-viewer-type" className="portfolio-viewer-type">
                  {selectedProject.type}
                </p>
                <span className="portfolio-viewer-count">
                  {twoDigits(selectedProjectIndex + 1)} / {twoDigits(visibleProjects.length)}
                </span>
                <div className="portfolio-viewer-actions" aria-label="Browse projects">
                  <button
                    type="button"
                    aria-label="Previous project"
                    onClick={() => navigateProject(-1)}
                  >
                    <ArrowLeftIcon aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next project"
                    onClick={() => navigateProject(1)}
                  >
                    <ArrowRightIcon aria-hidden="true" />
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>
    </>
  );
};