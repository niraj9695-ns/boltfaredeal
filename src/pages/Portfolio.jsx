// // ============================================================
// // DIARIES
// // ============================================================
// import diaryImage1 from "../assets/images/PortFolioImages/diaries/diaries01.png";
// import diaryImage2 from "../assets/images/PortFolioImages/diaries/diaries02.png";
// import diaryImage3 from "../assets/images/PortFolioImages/diaries/diaries03.png";
// import diaryImage4 from "../assets/images/PortFolioImages/diaries/diaries04.png";

// // ============================================================
// // LABELS
// // ============================================================
// import labelImage1 from "../assets/images/PortFolioImages/labels/labels01.png";
// import labelImage2 from "../assets/images/PortFolioImages/labels/labels02.png";
// import labelImage3 from "../assets/images/PortFolioImages/labels/labels03.png";
// import labelImage4 from "../assets/images/PortFolioImages/labels/labels04.png";
// import labelImage5 from "../assets/images/PortFolioImages/labels/labels05.png";
// import labelImage6 from "../assets/images/PortFolioImages/labels/labels06.png";
// import labelImage7 from "../assets/images/PortFolioImages/labels/lables07.png";
// import labelImage8 from "../assets/images/PortFolioImages/labels/lables08.png";
// import labelImage9 from "../assets/images/PortFolioImages/labels/lables09.png";

// // ============================================================
// // PACKAGING
// // ============================================================
// import packagingImage1 from "../assets/images/PortFolioImages/packaging/packaging02.png";
// import packagingImage2 from "../assets/images/PortFolioImages/packaging/packaging03.png";
// import packagingImage3 from "../assets/images/PortFolioImages/packaging/packaging04.png";
// import packagingImage4 from "../assets/images/PortFolioImages/packaging/packaging05.png";
// import packagingImage5 from "../assets/images/PortFolioImages/packaging/packaging06.png";
// import packagingImage6 from "../assets/images/PortFolioImages/packaging/packaging07.png";
// import packagingImage7 from "../assets/images/PortFolioImages/packaging/packaging08.png";
// import packagingImage8 from "../assets/images/PortFolioImages/packaging/packaging09.png";
// import packagingImage9 from "../assets/images/PortFolioImages/packaging/saksham nation.png";

// // ============================================================
// // PRINT
// // ============================================================
// import printImage1 from "../assets/images/PortFolioImages/print/print01.png";
// import printImage2 from "../assets/images/PortFolioImages/print/print02.png";
// import printImage3 from "../assets/images/PortFolioImages/print/print03.png";
// import printImage4 from "../assets/images/PortFolioImages/print/print04.png";
// import printImage5 from "../assets/images/PortFolioImages/print/print05.png";
// import printImage6 from "../assets/images/PortFolioImages/print/print06.png";
// import printImage7 from "../assets/images/PortFolioImages/print/print07.png";
// import printImage8 from "../assets/images/PortFolioImages/print/print08.png";
// import printImage9 from "../assets/images/PortFolioImages/print/print09.png";
// import printImage10 from "../assets/images/PortFolioImages/print/print10.png";
// import printImage11 from "../assets/images/PortFolioImages/print/print11.png";
// import printImage12 from "../assets/images/PortFolioImages/print/print12.png";

// // ============================================================
// // MANUALS
// // ============================================================
// import manualImage1 from "../assets/images/PortFolioImages/manuals/manuals01.png";
// import manualImage2 from "../assets/images/PortFolioImages/manuals/manuals02.png";
// import manualImage3 from "../assets/images/PortFolioImages/manuals/manuals03.png";

// // ============================================================
// // BOPP TAPES
// // ============================================================
// import boppImage1 from "../assets/images/PortFolioImages/bopptapes/bopp-tapes01.png";
// import boppImage2 from "../assets/images/PortFolioImages/bopptapes/bopp-tapes02.png";
// import boppImage3 from "../assets/images/PortFolioImages/bopptapes/bopp-tapes03.png";

// // ============================================================
// // MAILER BAGS
// // ============================================================
// import mailerBagImage1 from "../assets/images/PortFolioImages/mailerbag/mailer-bag01.png";
// import mailerBagImage2 from "../assets/images/PortFolioImages/mailerbag/mailer-bag02.png";
// import mailerBagImage3 from "../assets/images/PortFolioImages/mailerbag/mailer-bag03.png";

// // ============================================================
// // STRAPPING ROLLS
// // ============================================================
// import strappingRollImage1 from "../assets/images/PortFolioImages/strappingroll/roll01.png";
// import strappingRollImage2 from "../assets/images/PortFolioImages/strappingroll/roll02.png";
// import strappingRollImage3 from "../assets/images/PortFolioImages/strappingroll/roll03.png";


import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "lucide-react";
import gsap from "gsap";

import diaries1 from "../assets/images/PortFolioImages/diaries/diaries01.png";
import diaries2 from "../assets/images/PortFolioImages/diaries/diaries01.png";
import diaries3 from "../assets/images/PortFolioImages/diaries/diaries01.png";

import labels1 from "../assets/images/PortFolioImages/diaries/diaries01.png";
import labels2 from "../assets/images/PortFolioImages/diaries/diaries01.png";
import labels3 from "../assets/images/PortFolioImages/diaries/diaries01.png";

import packaging1 from "../assets/images/PortFolioImages/diaries/diaries01.png";
import packaging2 from "../assets/images/PortFolioImages/diaries/diaries01.png";
import packaging3 from "../assets/images/PortFolioImages/diaries/diaries01.png";

import print1 from "../assets/images/PortFolioImages/diaries/diaries01.png";
import print2 from "../assets/images/PortFolioImages/diaries/diaries01.png";
import print3 from "../assets/images/PortFolioImages/diaries/diaries01.png";

import manuals1 from "../assets/images/PortFolioImages/diaries/diaries01.png";
import manuals2 from "../assets/images/PortFolioImages/diaries/diaries01.png";
import manuals3 from "../assets/images/PortFolioImages/diaries/diaries01.png";

import bopp1 from "../assets/images/PortFolioImages/diaries/diaries01.png";
import bopp2 from "../assets/images/PortFolioImages/diaries/diaries01.png";
import bopp3 from "../assets/images/PortFolioImages/diaries/diaries01.png";

import mailer1 from "../assets/images/PortFolioImages/diaries/diaries01.png";
import mailer2 from "../assets/images/PortFolioImages/diaries/diaries01.png";
import mailer3 from "../assets/images/PortFolioImages/diaries/diaries01.png";

import strapping1 from "../assets/images/PortFolioImages/diaries/diaries01.png";
import strapping2 from "../assets/images/PortFolioImages/diaries/diaries01.png";
import strapping3 from "../assets/images/PortFolioImages/diaries/diaries01.png";

const FILTERS = [
  "All",
  "Diaries",
  "Labels",
  "Packaging",
  "Print",
  "Manuals",
  "Bopp tapes",
  "Mailer bag",
  "Strapping roll",
];

const PROJECTS = [
  {
    title: "Premium Diaries",
    type: "Corporate Printing",
    category: "Diaries",
    image: diaries1,
  },
  {
    title: "Executive Diary Collection",
    type: "Premium Print",
    category: "Diaries",
    image: diaries2,
  },
  {
    title: "Custom Diary Printing",
    type: "Commercial Printing",
    category: "Diaries",
    image: diaries3,
  },

  {
    title: "Product Labels",
    type: "Label Printing",
    category: "Labels",
    image: labels1,
  },
  {
    title: "Premium Brand Labels",
    type: "Packaging Print",
    category: "Labels",
    image: labels2,
  },
  {
    title: "Custom Product Labels",
    type: "Industrial Printing",
    category: "Labels",
    image: labels3,
  },

  {
    title: "Luxury Packaging",
    type: "Packaging Solutions",
    category: "Packaging",
    image: packaging1,
  },
  {
    title: "Custom Packaging",
    type: "Commercial Packaging",
    category: "Packaging",
    image: packaging2,
  },
  {
    title: "Retail Packaging",
    type: "Premium Packaging",
    category: "Packaging",
    image: packaging3,
  },

  {
    title: "Commercial Print",
    type: "Offset Printing",
    category: "Print",
    image: print1,
  },
  {
    title: "Premium Print Materials",
    type: "Commercial Printing",
    category: "Print",
    image: print2,
  },
  {
    title: "Custom Print Solutions",
    type: "Print Production",
    category: "Print",
    image: print3,
  },

  {
    title: "Product Manuals",
    type: "Instruction Printing",
    category: "Manuals",
    image: manuals1,
  },
  {
    title: "Technical Manuals",
    type: "Commercial Print",
    category: "Manuals",
    image: manuals2,
  },
  {
    title: "Instruction Manuals",
    type: "Print Production",
    category: "Manuals",
    image: manuals3,
  },

  {
    title: "BOPP Tape",
    type: "Industrial Packaging",
    category: "Bopp tapes",
    image: bopp1,
  },
  {
    title: "Printed BOPP Tape",
    type: "Custom Packaging",
    category: "Bopp tapes",
    image: bopp2,
  },
  {
    title: "Packaging Tape",
    type: "Industrial Solutions",
    category: "Bopp tapes",
    image: bopp3,
  },

  {
    title: "Mailer Bags",
    type: "E-Commerce Packaging",
    category: "Mailer bag",
    image: mailer1,
  },
  {
    title: "Custom Mailer Bags",
    type: "Packaging Solutions",
    category: "Mailer bag",
    image: mailer2,
  },
  {
    title: "Premium Courier Bags",
    type: "E-Commerce Packaging",
    category: "Mailer bag",
    image: mailer3,
  },

  {
    title: "Strapping Rolls",
    type: "Industrial Packaging",
    category: "Strapping roll",
    image: strapping1,
  },
  {
    title: "PP Strapping Rolls",
    type: "Packaging Materials",
    category: "Strapping roll",
    image: strapping2,
  },
  {
    title: "Industrial Strapping",
    type: "Packaging Solutions",
    category: "Strapping roll",
    image: strapping3,
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const rootRef = useRef(null);
  const stageRef = useRef(null);

  const cardRefs = useRef([]);
  const imageRefs = useRef([]);

  const animationRef = useRef(null);
  const activeIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") {
      return PROJECTS;
    }

    return PROJECTS.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter]);

  const getDiff = useCallback(
    (index) => {
      const total = visibleProjects.length;

      if (!total) return 0;

      let diff = index - activeIndexRef.current;

      if (diff > total / 2) {
        diff -= total;
      }

      if (diff < -total / 2) {
        diff += total;
      }

      return diff;
    },
    [visibleProjects.length]
  );

  const getCardState = useCallback((diff) => {
    if (diff === 0) {
      return {
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        opacity: 1,
        blur: 0,
        zIndex: 30,
      };
    }

    if (diff === -1) {
      return {
        x: -285,
        y: 38,
        scale: 0.82,
        rotate: -6,
        opacity: 0.68,
        blur: 0,
        zIndex: 20,
      };
    }

    if (diff === 1) {
      return {
        x: 285,
        y: 38,
        scale: 0.82,
        rotate: 6,
        opacity: 0.68,
        blur: 0,
        zIndex: 20,
      };
    }

    if (diff === -2) {
      return {
        x: -460,
        y: 90,
        scale: 0.66,
        rotate: -11,
        opacity: 0.28,
        blur: 1,
        zIndex: 10,
      };
    }

    if (diff === 2) {
      return {
        x: 460,
        y: 90,
        scale: 0.66,
        rotate: 11,
        opacity: 0.28,
        blur: 1,
        zIndex: 10,
      };
    }

    return {
      x: diff > 0 ? 640 : -640,
      y: 120,
      scale: 0.55,
      rotate: diff > 0 ? 14 : -14,
      opacity: 0,
      blur: 3,
      zIndex: 1,
    };
  }, []);

  const setCardsImmediately = useCallback(() => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const diff = getDiff(index);
      const state = getCardState(diff);

      gsap.set(card, {
        xPercent: -50,
        x: state.x,
        y: state.y,
        scale: state.scale,
        rotation: state.rotate,
        opacity: state.opacity,
        zIndex: state.zIndex,
        filter: `blur(${state.blur}px)`,
      });

      if (imageRefs.current[index]) {
        gsap.set(imageRefs.current[index], {
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
        });
      }
    });
  }, [getDiff, getCardState]);

  const animateCards = useCallback(() => {
    if (!visibleProjects.length) return;

    if (animationRef.current) {
      animationRef.current.kill();
    }

    setIsAnimating(true);
    isAnimatingRef.current = true;

    const timeline = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        isAnimatingRef.current = false;
      },
    });

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const diff = getDiff(index);
      const state = getCardState(diff);

      timeline.to(
        card,
        {
          xPercent: -50,
          x: state.x,
          y: state.y,
          scale: state.scale,
          rotation: state.rotate,
          opacity: state.opacity,
          zIndex: state.zIndex,
          filter: `blur(${state.blur}px)`,
          duration: 0.7,
          ease: "power3.out",
        },
        0
      );
    });

    animationRef.current = timeline;
  }, [getDiff, getCardState, visibleProjects.length]);

  const navigate = useCallback(
    (direction) => {
      if (
        isAnimatingRef.current ||
        !visibleProjects.length ||
        visibleProjects.length <= 1
      ) {
        return;
      }

      const total = visibleProjects.length;

      activeIndexRef.current =
        (activeIndexRef.current + direction + total) % total;

      setActiveIndex(activeIndexRef.current);

      animateCards();
    },
    [animateCards, visibleProjects.length]
  );

  useEffect(() => {
    activeIndexRef.current = 0;
    setActiveIndex(0);

    requestAnimationFrame(() => {
      setCardsImmediately();
    });
  }, [activeFilter, setCardsImmediately]);

  useEffect(() => {
    setCardsImmediately();
  }, [setCardsImmediately, visibleProjects.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        navigate(-1);
      }

      if (event.key === "ArrowRight") {
        navigate(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  useEffect(() => {
    const stage = stageRef.current;

    if (!stage) return;

    const handleMouseMove = (event) => {
      if (isAnimatingRef.current) return;

      const activeImage = imageRefs.current[activeIndexRef.current];

      if (!activeImage) return;

      const rect = stage.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const normalizedX = x / rect.width - 0.5;
      const normalizedY = y / rect.height - 0.5;

      gsap.to(activeImage, {
        x: normalizedX * 12,
        y: normalizedY * 12,
        duration: 0.6,
        ease: "power2.out",
        overwrite: true,
      });
    };

    const handleMouseLeave = () => {
      const activeImage = imageRefs.current[activeIndexRef.current];

      if (!activeImage) return;

      gsap.to(activeImage, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    stage.addEventListener("mousemove", handleMouseMove);
    stage.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      stage.removeEventListener("mousemove", handleMouseMove);
      stage.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="fd-museum-portfolio"
      aria-label="Fairdeal Print Pack portfolio"
    >
      <div className="fd-museum-glow fd-glow-one" />
      <div className="fd-museum-glow fd-glow-two" />

      <div className="fd-portfolio-container">
        {/* HEADER */}
        <div className="fd-portfolio-header">
          <div className="fd-portfolio-kicker">
            <span />
            OUR WORK
            <span />
          </div>

          <h2>
            Print That
            <br />
            <em>Speaks.</em>
          </h2>

          <p>
            A curated selection of print and packaging solutions
            crafted for brands that care about every detail.
          </p>
        </div>

        {/* FILTERS */}
        <div className="fd-filter-wrapper">
          <div className="fd-filter-list">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`fd-filter-button ${
                  activeFilter === filter ? "is-active" : ""
                }`}
                onClick={() => {
                  if (isAnimatingRef.current) return;

                  setActiveFilter(filter);
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* PORTFOLIO STAGE */}
        <div ref={stageRef} className="fd-portfolio-stage">
          <div className="fd-stage-number">
            <span>
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <i />

            <span>
              {String(visibleProjects.length).padStart(2, "0")}
            </span>
          </div>

          <div className="fd-stage-hint">
            <span className="fd-hint-line" />
            <span>DRAG / USE ARROWS</span>
            <ArrowUpRightIcon size={14} />
          </div>

          {visibleProjects.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className={`fd-portfolio-card ${
                index === activeIndex ? "is-active" : ""
              }`}
            >
              {/* =================================================
                  ANIMATED BORDER — CENTER IMAGE ONLY
              ================================================== */}
              {index === activeIndex && (
                <div
                  className="fd-active-border"
                  aria-hidden="true"
                >
                  <span className="fd-border-line fd-border-top" />
                  <span className="fd-border-line fd-border-right" />
                  <span className="fd-border-line fd-border-bottom" />
                  <span className="fd-border-line fd-border-left" />
                </div>
              )}

              <div className="fd-card-inner">
                <div className="fd-card-image-wrap">
                  <img
                    ref={(element) => {
                      imageRefs.current[index] = element;
                    }}
                    src={project.image}
                    alt={project.title}
                    className="fd-card-image"
                    draggable="false"
                  />

                  <div className="fd-card-overlay">
                    <div className="fd-card-category">
                      {project.category}
                    </div>

                    <h3>{project.title}</h3>

                    <span className="fd-card-type">
                      {project.type}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}

          {/* CENTER IMAGE NAVIGATION */}
          <div
            className="fd-stage-navigation"
            aria-label="Portfolio navigation"
          >
            <button
              type="button"
              className="fd-stage-nav fd-stage-nav-prev"
              onClick={() => navigate(-1)}
              disabled={
                isAnimating || visibleProjects.length <= 1
              }
              aria-label="Previous project"
            >
              <ArrowLeftIcon size={18} />
            </button>

            <button
              type="button"
              className="fd-stage-nav fd-stage-nav-next"
              onClick={() => navigate(1)}
              disabled={
                isAnimating || visibleProjects.length <= 1
              }
              aria-label="Next project"
            >
              <ArrowRightIcon size={18} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        /* =====================================================
           ROOT
        ===================================================== */

        .fd-museum-portfolio {
          --fd-bg: #05090B;
          --fd-panel: #0C1419;
          --fd-panel-2: #111B21;
          --fd-yellow: #FFDF00;
          --fd-mint: #8FE7C8;
          --fd-white: #F5F7F8;
          --fd-gray: #98A1B1;

          position: relative;
          width: 100%;
          overflow: hidden;
          background: var(--fd-bg);
          color: var(--fd-white);
          padding: 110px 0 100px;
        }


        /* =====================================================
           BACKGROUND GLOWS
        ===================================================== */

        .fd-museum-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(120px);
          opacity: 0.08;
        }

        .fd-glow-one {
          top: 5%;
          left: -250px;
          background: var(--fd-yellow);
        }

        .fd-glow-two {
          right: -250px;
          bottom: 5%;
          background: var(--fd-mint);
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .fd-portfolio-container {
          position: relative;
          width: min(1400px, calc(100% - 60px));
          margin: 0 auto;
        }


        /* =====================================================
           HEADER
        ===================================================== */

        .fd-portfolio-header {
          position: relative;
          max-width: 760px;
          margin: 0 auto 42px;
          text-align: center;
        }

        .fd-portfolio-kicker {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;

          color: var(--fd-yellow);
          font-family: Inter, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
        }

        .fd-portfolio-kicker span {
          width: 30px;
          height: 1px;
          background: var(--fd-yellow);
        }

        .fd-portfolio-header h2 {
          margin: 0;
          font-family: Merriweather, serif;
          font-size: clamp(48px, 6vw, 88px);
          font-weight: 400;
          line-height: 0.98;
          letter-spacing: -0.045em;
        }

        .fd-portfolio-header h2 em {
          color: var(--fd-yellow);
          font-style: italic;
        }

        .fd-portfolio-header p {
          max-width: 570px;
          margin: 25px auto 0;

          color: var(--fd-gray);
          font-family: Inter, sans-serif;
          font-size: 15px;
          line-height: 1.7;
        }


        /* =====================================================
           FILTERS
        ===================================================== */

        .fd-filter-wrapper {
          position: relative;
          z-index: 50;

          display: flex;
          justify-content: center;

          margin-bottom: 38px;
        }

        .fd-filter-list {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 7px;

          padding: 7px;

          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px;

          background: rgba(12,20,25,0.72);
          backdrop-filter: blur(20px);
        }

        .fd-filter-button {
          border: 0;
          outline: none;

          padding: 9px 15px;

          border-radius: 999px;

          background: transparent;
          color: var(--fd-gray);

          font-family: Inter, sans-serif;
          font-size: 11px;
          font-weight: 600;

          cursor: pointer;

          transition:
            background 0.3s ease,
            color 0.3s ease,
            transform 0.3s ease;
        }

        .fd-filter-button:hover {
          color: var(--fd-white);
          transform: translateY(-1px);
        }

        .fd-filter-button.is-active {
          background: var(--fd-yellow);
          color: #05090B;
        }


        /* =====================================================
           STAGE
        ===================================================== */

        .fd-portfolio-stage {
          position: relative;
          width: 100%;
          height: 520px;
          isolation: isolate;
        }

        .fd-stage-number {
          position: absolute;
          top: 8px;
          left: 0;
          z-index: 40;

          display: flex;
          align-items: center;
          gap: 9px;

          color: var(--fd-gray);

          font-family: Inter, sans-serif;
          font-size: 11px;
          letter-spacing: 0.12em;
        }

        .fd-stage-number span:first-child {
          color: var(--fd-yellow);
        }

        .fd-stage-number i {
          width: 25px;
          height: 1px;
          background: rgba(255,255,255,0.18);
        }

        .fd-stage-hint {
          position: absolute;
          top: 8px;
          right: 0;
          z-index: 40;

          display: flex;
          align-items: center;
          gap: 8px;

          color: var(--fd-gray);

          font-family: Inter, sans-serif;
          font-size: 9px;
          letter-spacing: 0.16em;
        }

        .fd-hint-line {
          width: 22px;
          height: 1px;
          background: var(--fd-mint);
        }


        /* =====================================================
           CARD
        ===================================================== */

        .fd-portfolio-card {
          position: absolute;

          top: 0;
          left: 50%;

          width: min(570px, 45vw);
          height: 550px;

          transform-origin: center center;

          will-change:
            transform,
            opacity,
            filter;

          pointer-events: none;
        }

        .fd-portfolio-card.is-active {
          z-index: 30;
          pointer-events: auto;
        }

        .fd-card-inner {
          position: relative;

          width: 100%;
          height: 100%;

          overflow: hidden;

          border-radius: 18px;

          background: var(--fd-panel);

          isolation: isolate;
        }

        .fd-card-image-wrap {
          position: relative;

          width: 100%;
          height: 100%;

          overflow: hidden;

          border-radius: inherit;
        }

        .fd-card-image {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          user-select: none;

          will-change: transform;

          transition:
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .fd-portfolio-card.is-active:hover .fd-card-image {
          transform: scale(1.025);
        }


        /* =====================================================
           CENTER CARD GLOW
        ===================================================== */

        .fd-portfolio-card.is-active::before {
          content: "";

          position: absolute;

          inset: -18px;

          z-index: -1;

          border-radius: 30px;

          background:
            radial-gradient(
              circle at center,
              rgba(255, 223, 0, 0.12),
              transparent 62%
            );

          filter: blur(22px);

          opacity: 0.85;

          pointer-events: none;
        }


        /* =====================================================
           ANIMATED BORDER
        ===================================================== */

        .fd-active-border {
          position: absolute;

          inset: -1px;

          z-index: 50;

          overflow: hidden;

          border-radius: 19px;

          pointer-events: none;
        }

        .fd-border-line {
          position: absolute;

          display: block;

          border-radius: 999px;

          box-shadow:
            0 0 7px rgba(255, 223, 0, 0.9),
            0 0 18px rgba(255, 223, 0, 0.45),
            0 0 30px rgba(143, 231, 200, 0.2);
        }


        /* TOP */

        .fd-border-top {
          top: 0;
          left: -100%;

          width: 100%;
          height: 2px;

          background:
            linear-gradient(
              90deg,
              transparent 0%,
              var(--fd-yellow) 40%,
              var(--fd-mint) 70%,
              transparent 100%
            );

          animation:
            fdBorderTop 3.2s linear infinite;
        }


        /* RIGHT */

        .fd-border-right {
          top: -100%;
          right: 0;

          width: 2px;
          height: 100%;

          background:
            linear-gradient(
              180deg,
              transparent 0%,
              var(--fd-yellow) 40%,
              var(--fd-mint) 70%,
              transparent 100%
            );

          animation:
            fdBorderRight 3.2s linear infinite;

          animation-delay: 0.8s;
        }


        /* BOTTOM */

        .fd-border-bottom {
          right: -100%;
          bottom: 0;

          width: 100%;
          height: 2px;

          background:
            linear-gradient(
              90deg,
              transparent 0%,
              var(--fd-mint) 40%,
              var(--fd-yellow) 70%,
              transparent 100%
            );

          animation:
            fdBorderBottom 3.2s linear infinite;

          animation-delay: 1.6s;
        }


        /* LEFT */

        .fd-border-left {
          bottom: -100%;
          left: 0;

          width: 2px;
          height: 100%;

          background:
            linear-gradient(
              180deg,
              transparent 0%,
              var(--fd-mint) 40%,
              var(--fd-yellow) 70%,
              transparent 100%
            );

          animation:
            fdBorderLeft 3.2s linear infinite;

          animation-delay: 2.4s;
        }


        /* =====================================================
           BORDER KEYFRAMES
        ===================================================== */

        @keyframes fdBorderTop {
          0% {
            left: -100%;
          }

          25% {
            left: 100%;
          }

          100% {
            left: 100%;
          }
        }

        @keyframes fdBorderRight {
          0% {
            top: -100%;
          }

          25% {
            top: -100%;
          }

          50% {
            top: 100%;
          }

          100% {
            top: 100%;
          }
        }

        @keyframes fdBorderBottom {
          0% {
            right: -100%;
          }

          50% {
            right: -100%;
          }

          75% {
            right: 100%;
          }

          100% {
            right: 100%;
          }
        }

        @keyframes fdBorderLeft {
          0% {
            bottom: -100%;
          }

          75% {
            bottom: -100%;
          }

          100% {
            bottom: 100%;
          }
        }


        /* =====================================================
           CARD OVERLAY
        ===================================================== */

        .fd-card-overlay {
          position: absolute;

          inset: 0;

          display: flex;
          flex-direction: column;
          justify-content: flex-end;

          padding: 32px;

          background:
            linear-gradient(
              to top,
              rgba(5, 9, 11, 0.94),
              rgba(5, 9, 11, 0.35) 48%,
              transparent 80%
            );

          opacity: 0;

          transition: opacity 0.45s ease;

          pointer-events: none;
        }

        .fd-portfolio-card.is-active .fd-card-overlay {
          opacity: 1;
        }

        .fd-card-category {
          margin-bottom: 8px;

          color: var(--fd-yellow);

          font-family: Inter, sans-serif;
          font-size: 10px;
          font-weight: 700;

          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .fd-card-overlay h3 {
          margin: 0;

          color: var(--fd-white);

          font-family: Merriweather, serif;
          font-size: clamp(25px, 3vw, 38px);
          font-weight: 400;

          line-height: 1.1;
          letter-spacing: -0.03em;
        }

        .fd-card-type {
          margin-top: 9px;

          color: var(--fd-gray);

          font-family: Inter, sans-serif;
          font-size: 12px;
        }


        /* =====================================================
           CENTER NAVIGATION
           BUTTONS ARE INSIDE THE IMAGE
        ===================================================== */

        .fd-stage-navigation {
          position: absolute;

          inset: 0;

          z-index: 60;

          pointer-events: none;
        }

        .fd-stage-nav {
          position: absolute;

          top: 50%;

          width: 46px;
          height: 46px;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 0;

          border: 1px solid rgba(255,255,255,0.22);

          border-radius: 50%;

          background:
            rgba(5, 9, 11, 0.68);

          color: var(--fd-white);

          backdrop-filter: blur(12px);

          transform: translateY(-50%);

          cursor: pointer;

          pointer-events: auto;

          transition:
            background 0.3s ease,
            color 0.3s ease,
            border-color 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .fd-stage-nav:hover {
          background: var(--fd-yellow);
          color: #05090B;

          border-color: var(--fd-yellow);

          box-shadow:
            0 0 20px rgba(255,223,0,0.28);

          transform:
            translateY(-50%)
            scale(1.08);
        }

        .fd-stage-nav:disabled {
          opacity: 0.4;
          cursor: default;
        }

        .fd-stage-nav-prev {
          left:
            calc(
              50% - min(285px, 22.5vw) + 14px
            );
        }

        .fd-stage-nav-next {
          right:
            calc(
              50% - min(285px, 22.5vw) + 14px
            );
        }


        /* =====================================================
           LARGE DESKTOP
        ===================================================== */

        @media (min-width: 1401px) {
          .fd-portfolio-stage {
            height: 690px;
          }

          .fd-portfolio-card {
            width: 600px;
            height: 620px;
          }

          .fd-stage-nav-prev {
            left: calc(50% - 300px + 16px);
          }

          .fd-stage-nav-next {
            right: calc(50% - 300px + 16px);
          }
        }


        /* =====================================================
           DESKTOP
        ===================================================== */

        @media (min-width: 1101px) and (max-width: 1400px) {
          .fd-portfolio-stage {
            height: 640px;
          }

          .fd-portfolio-card {
            width: min(570px, 48vw);
            height: 570px;
          }

          .fd-stage-nav-prev {
            left:
              calc(
                50% - min(285px, 24vw) + 14px
              );
          }

          .fd-stage-nav-next {
            right:
              calc(
                50% - min(285px, 24vw) + 14px
              );
          }
        }


        /* =====================================================
           TABLET / SMALL DESKTOP
        ===================================================== */

        @media (min-width: 851px) and (max-width: 1100px) {
          .fd-portfolio-stage {
            height: 590px;
          }

          .fd-portfolio-card {
            width: min(510px, 54vw);
            height: 520px;
          }

          .fd-stage-nav-prev {
            left:
              calc(
                50% - min(255px, 27vw) + 13px
              );
          }

          .fd-stage-nav-next {
            right:
              calc(
                50% - min(255px, 27vw) + 13px
              );
          }
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (min-width: 701px) and (max-width: 850px) {
          .fd-museum-portfolio {
            padding-top: 85px;
          }

          .fd-portfolio-container {
            width: min(100% - 40px, 760px);
          }

          .fd-portfolio-stage {
            height: 520px;
          }

          .fd-portfolio-card {
            width: min(510px, 64vw);
            height: 455px;
          }

          .fd-stage-nav-prev {
            left:
              calc(
                50% - min(255px, 32vw) + 12px
              );
          }

          .fd-stage-nav-next {
            right:
              calc(
                50% - min(255px, 32vw) + 12px
              );
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {
          .fd-museum-portfolio {
            padding: 75px 0 70px;
          }

          .fd-portfolio-container {
            width: calc(100% - 28px);
          }

          .fd-portfolio-header {
            margin-bottom: 30px;
          }

          .fd-portfolio-header h2 {
            font-size: clamp(42px, 13vw, 62px);
          }

          .fd-portfolio-header p {
            font-size: 13px;
            line-height: 1.6;
          }

          .fd-filter-wrapper {
            margin-bottom: 25px;
          }

          .fd-filter-list {
            max-width: 100%;
            border-radius: 18px;
          }

          .fd-filter-button {
            padding: 8px 11px;
            font-size: 10px;
          }

          .fd-portfolio-stage {
            height: 430px;
          }

          .fd-portfolio-card {
            width: min(390px, 72vw);
            height: 390px;
          }

          .fd-card-inner {
            border-radius: 15px;
          }

          .fd-active-border {
            border-radius: 16px;
          }

          .fd-card-overlay {
            padding: 20px;
          }

          .fd-card-overlay h3 {
            font-size: 25px;
          }

          .fd-stage-number,
          .fd-stage-hint {
            top: -2px;
          }

          .fd-stage-hint {
            font-size: 8px;
          }

          .fd-stage-nav {
            width: 40px;
            height: 40px;
          }

          .fd-stage-nav-prev {
            left:
              calc(
                50% - min(195px, 36vw) + 10px
              );
          }

          .fd-stage-nav-next {
            right:
              calc(
                50% - min(195px, 36vw) + 10px
              );
          }
        }


        /* =====================================================
           MOBILE 480
        ===================================================== */

        @media (min-width: 376px) and (max-width: 480px) {
          .fd-portfolio-stage {
            height: 385px;
          }

          .fd-portfolio-card {
            width: min(330px, 72vw);
            height: 345px;
          }

          .fd-stage-nav-prev {
            left:
              calc(
                50% - min(165px, 36vw) + 9px
              );
          }

          .fd-stage-nav-next {
            right:
              calc(
                50% - min(165px, 36vw) + 9px
              );
          }

          .fd-stage-nav {
            width: 38px;
            height: 38px;
          }

          .fd-card-overlay {
            padding: 17px;
          }

          .fd-card-overlay h3 {
            font-size: 21px;
          }

          .fd-card-category {
            font-size: 9px;
          }

          .fd-card-type {
            font-size: 10px;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (min-width: 376px) and (max-width: 420px) {
          .fd-portfolio-stage {
            height: 350px;
          }

          .fd-portfolio-card {
            width: min(305px, 74vw);
            height: 315px;
          }

          .fd-stage-nav-prev {
            left:
              calc(
                50% - min(152.5px, 37vw) + 8px
              );
          }

          .fd-stage-nav-next {
            right:
              calc(
                50% - min(152.5px, 37vw) + 8px
              );
          }
        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 375px) {
          .fd-museum-portfolio {
            padding-top: 65px;
          }

          .fd-portfolio-container {
            width: calc(100% - 20px);
          }

          .fd-portfolio-header h2 {
            font-size: 42px;
          }

          .fd-portfolio-header p {
            font-size: 12px;
          }

          .fd-filter-list {
            gap: 3px;
            padding: 5px;
          }

          .fd-filter-button {
            padding: 7px 8px;
            font-size: 9px;
          }

          .fd-portfolio-stage {
            height: 330px;
          }

          .fd-portfolio-card {
            width: calc(100vw - 28px);
            height: 295px;
          }

          .fd-card-overlay {
            padding: 15px;
          }

          .fd-card-overlay h3 {
            font-size: 20px;
          }

          .fd-stage-nav {
            width: 36px;
            height: 36px;
          }

          .fd-stage-nav-prev {
            left:
              calc(
                50% - ((100vw - 28px) / 2) + 8px
              );
          }

          .fd-stage-nav-next {
            right:
              calc(
                50% - ((100vw - 28px) / 2) + 8px
              );
          }
        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .fd-border-line {
            animation: none;
          }

          .fd-card-image,
          .fd-filter-button,
          .fd-stage-nav,
          .fd-card-overlay {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;