import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import visionImage from "../../assets/images/about/vision.jpg";
import missionImage from "../../assets/images/about/mission.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutVision = () => {
  const sectionRef = useRef(null);

  const visionRef = useRef(null);
  const missionRef = useRef(null);

  const visionImageRef = useRef(null);
  const missionImageRef = useRef(null);

  const visionContentRef = useRef(null);
  const missionContentRef = useRef(null);

  const visionRailRef = useRef(null);
  const missionRailRef = useRef(null);

  const [isLightTheme, setIsLightTheme] = useState(false);

  /* =========================================================
     EXISTING DARK / LIGHT THEME DETECTION
  ========================================================= */

  useEffect(() => {
    const html = document.documentElement;

    const checkTheme = () => {
      const light =
        html.getAttribute("data-theme") === "light" ||
        html.classList.contains("light");

      setIsLightTheme(light);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);

    observer.observe(html, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  /* =========================================================
     GSAP + SCROLLTRIGGER
  ========================================================= */

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      /* -------------------------------------------------------
         INITIAL STATES
      ------------------------------------------------------- */

      const visionReveals =
        visionContentRef.current?.querySelectorAll(".fd-reveal");

      const missionReveals =
        missionContentRef.current?.querySelectorAll(".fd-reveal");

      gsap.set(
        [visionImageRef.current, missionImageRef.current],
        {
          scale: 1.12,
          clipPath: "inset(0 100% 0 0)",
        }
      );

      gsap.set(
        [...(visionReveals || []), ...(missionReveals || [])],
        {
          opacity: 0,
          y: 28,
        }
      );

      gsap.set(
        [visionRailRef.current, missionRailRef.current],
        {
          scaleX: 0,
          transformOrigin: "left center",
        }
      );

      /* -------------------------------------------------------
         VISION
      ------------------------------------------------------- */

      const visionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      visionTimeline
        .to(visionRailRef.current, {
          scaleX: 1,
          duration: 0.7,
          ease: "power3.out",
        })
        .to(
          visionImageRef.current,
          {
            clipPath: "inset(0 0% 0 0)",
            scale: 1,
            duration: 1.2,
            ease: "power4.inOut",
          },
          "-=0.35"
        )
        .to(
          visionReveals,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.75"
        );

      /* -------------------------------------------------------
         MISSION
      ------------------------------------------------------- */

      const missionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      missionTimeline
        .to(missionRailRef.current, {
          scaleX: 1,
          duration: 0.7,
          ease: "power3.out",
        })
        .to(
          missionImageRef.current,
          {
            clipPath: "inset(0 0% 0 0)",
            scale: 1,
            duration: 1.2,
            ease: "power4.inOut",
          },
          "-=0.35"
        )
        .to(
          missionReveals,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.75"
        );

      /* -------------------------------------------------------
         IMAGE PARALLAX
      ------------------------------------------------------- */

      gsap.to(visionImageRef.current, {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(missionImageRef.current, {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      /* -------------------------------------------------------
         SMALL DECORATIVE MOVEMENT
      ------------------------------------------------------- */

      gsap.to(".fd-floating-dot", {
        y: 12,
        repeat: -1,
        yoyo: true,
        duration: 2.2,
        ease: "sine.inOut",
      });

      gsap.to(".fd-grid-mark", {
        rotate: 90,
        repeat: -1,
        duration: 12,
        ease: "none",
      });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className={`fd-direction ${
          isLightTheme ? "fd-light" : "fd-dark"
        }`}
      >
        {/* =====================================================
            BACKGROUND DETAILS
        ===================================================== */}

        <div className="fd-bg-grid" />

        <div className="fd-bg-glow fd-glow-one" />
        <div className="fd-bg-glow fd-glow-two" />

        {/* =====================================================
            MAIN CONTAINER
        ===================================================== */}

        <div className="fd-direction-shell">

          {/* ===================================================
              HEADER
          =================================================== */}

          <header className="fd-direction-header">
            <div className="fd-header-left">
              <span className="fd-header-index">01 — 02</span>

              <span className="fd-header-line" />

              <span className="fd-header-label">
                OUR DIRECTION
              </span>
            </div>

            <div className="fd-header-right">
              <span>
                FAIRDEAL PRINT PACK
              </span>

              <span className="fd-floating-dot" />
            </div>
          </header>

          {/* ===================================================
              INTRO
          =================================================== */}

          <div className="fd-intro">
            <div className="fd-intro-number">
              01
            </div>

            <div className="fd-intro-copy">
              <p className="fd-kicker">
                VISION / MISSION
              </p>

              <h2>
                Built around people.
                <br />
                Driven by progress.
              </h2>
            </div>

            <div className="fd-intro-note">
              <span />
              <p>
                A clear direction shaped by
                customer satisfaction,
                innovation and integrity.
              </p>
            </div>
          </div>

          {/* ===================================================
              VISION
          =================================================== */}

          <article
            ref={visionRef}
            className="fd-story fd-vision"
          >
            {/* TOP META */}

            <div
              ref={visionRailRef}
              className="fd-story-rail"
            />

            <div className="fd-story-meta">
              <span>01</span>

              <span className="fd-meta-line" />

              <span>VISION</span>
            </div>

            {/* IMAGE */}

            <div className="fd-story-image">
              <div className="fd-image-number">
                01
              </div>

              <div className="fd-image-frame">
                <img
                  ref={visionImageRef}
                  src={visionImage}
                  alt="Fairdeal printing vision"
                />

                <div className="fd-image-overlay" />

                <div className="fd-image-caption">
                  FAIRDEAL / VISION
                </div>

                <div className="fd-image-corner fd-corner-tl" />
                <div className="fd-image-corner fd-corner-br" />
              </div>
            </div>

            {/* CONTENT */}

            <div
              ref={visionContentRef}
              className="fd-story-content"
            >
              <p className="fd-reveal fd-section-label">
                OUR VISION
              </p>

              <h3 className="fd-reveal">
                Our <span>Vision</span>
              </h3>

              <p className="fd-reveal fd-main-copy">
                Customer satisfaction and employee
                empowerment in tandem with innovation
                and excellence, to work together with our
                customers to help them achieve their goals.
              </p>

              <div className="fd-reveal fd-highlight">
                <span className="fd-highlight-mark" />

                <p>
                  Our success lies in your success.
                </p>
              </div>

              <p className="fd-reveal fd-secondary-copy">
                Honesty, integrity, dedication and
                commitment will always be our priority
                and trademark. Dignity and respect are
                our guiding principles in every deal with
                customers and suppliers.
              </p>

              <div className="fd-reveal fd-values">
                <span>Customer Satisfaction</span>
                <span>Innovation</span>
                <span>Integrity</span>
                <span>Commitment</span>
              </div>
            </div>
          </article>

          {/* ===================================================
              DIVIDER
          =================================================== */}

          <div className="fd-mid-divider">
            <span />
            <span>FAIRDEAL / 02</span>
            <span />
          </div>

          {/* ===================================================
              MISSION
          =================================================== */}

          <article
            ref={missionRef}
            className="fd-story fd-mission"
          >
            {/* TOP META */}

            <div
              ref={missionRailRef}
              className="fd-story-rail"
            />

            <div className="fd-story-meta">
              <span>02</span>

              <span className="fd-meta-line" />

              <span>MISSION</span>
            </div>

            {/* CONTENT */}

            <div
              ref={missionContentRef}
              className="fd-story-content"
            >
              <p className="fd-reveal fd-section-label">
                OUR MISSION
              </p>

              <h3 className="fd-reveal">
                Our <span>Mission</span>
              </h3>

              <p className="fd-reveal fd-main-copy">
                To provide exceptional printing service
                by pursuing business through innovation
                and creativity that exceeds the
                expectations of our esteemed customers.
              </p>

              <div className="fd-reveal fd-statement">
                <span className="fd-statement-line" />

                <p>
                  QUALITY • INNOVATION • SERVICE
                </p>
              </div>

              <div className="fd-reveal fd-values fd-mission-values">
                <span>Exceptional Service</span>
                <span>Innovation</span>
                <span>Creativity</span>
                <span>Customer Focus</span>
              </div>

              <div className="fd-reveal fd-highlight fd-mission-highlight">
                <span className="fd-highlight-mark" />

                <p>
                  Exceeding expectations through
                  innovation and creativity.
                </p>
              </div>
            </div>

            {/* IMAGE */}

            <div className="fd-story-image">
              <div className="fd-image-number">
                02
              </div>

              <div className="fd-image-frame">
                <img
                  ref={missionImageRef}
                  src={missionImage}
                  alt="Fairdeal printing mission"
                />

                <div className="fd-image-overlay" />

                <div className="fd-image-caption">
                  FAIRDEAL / MISSION
                </div>

                <div className="fd-image-corner fd-corner-tl" />
                <div className="fd-image-corner fd-corner-br" />
              </div>
            </div>
          </article>

          {/* ===================================================
              FOOTER MARK
          =================================================== */}

          <div className="fd-bottom-mark">
            <div className="fd-grid-mark">
              <span />
              <span />
              <span />
              <span />
            </div>

            <p>
              PRINTING WITH PURPOSE
            </p>

            <div className="fd-bottom-line" />
          </div>
        </div>
      </section>

      <style>{`
        /* =====================================================
           FAIRDEAL DESIGN TOKENS
        ===================================================== */

        .fd-direction {
          --fd-bg: #05090B;
          --fd-panel: #0C1419;
          --fd-panel-2: #111B21;

          --fd-yellow: #FFDF00;
          --fd-mint: #8FE7C8;

          --fd-white: #F5F7F8;
          --fd-gray: #98A1B1;

          --fd-border: rgba(245, 247, 248, 0.11);
          --fd-border-soft: rgba(245, 247, 248, 0.06);

          position: relative;
          width: 100%;
          overflow: hidden;

          background: var(--fd-bg);
          color: var(--fd-white);
        }

        /* =====================================================
           LIGHT THEME
        ===================================================== */

        .fd-direction.fd-light {
          --fd-bg: #F4F7F6;
          --fd-panel: #FFFFFF;
          --fd-panel-2: #EEF2F1;

          --fd-yellow: #A78E00;
          --fd-mint: #168B68;

          --fd-white: #101518;
          --fd-gray: #56616D;

          --fd-border: rgba(5, 9, 11, 0.12);
          --fd-border-soft: rgba(5, 9, 11, 0.07);
        }

        /* =====================================================
           BACKGROUND
        ===================================================== */

        .fd-bg-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.32;

          background-image:
            linear-gradient(
              rgba(143, 231, 200, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(143, 231, 200, 0.035) 1px,
              transparent 1px
            );

          background-size: 80px 80px;

          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 15%,
            black 80%,
            transparent
          );
        }

        .fd-bg-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(90px);
          opacity: 0.07;
        }

        .fd-glow-one {
          top: 8%;
          right: -180px;
          background: var(--fd-mint);
        }

        .fd-glow-two {
          top: 54%;
          left: -220px;
          background: var(--fd-yellow);
          opacity: 0.045;
        }

        /* =====================================================
           SHELL
        ===================================================== */

        .fd-direction-shell {
          position: relative;
          z-index: 2;

          width: min(
            1180px,
            calc(100% - 48px)
          );

          margin: 0 auto;
          padding: 90px 0 70px;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .fd-direction-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          min-height: 42px;

          border-top: 1px solid var(--fd-border);
          border-bottom: 1px solid var(--fd-border);

          color: var(--fd-gray);

          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .fd-header-left,
        .fd-header-right {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .fd-header-index {
          color: var(--fd-yellow);
        }

        .fd-header-line {
          width: 28px;
          height: 1px;
          background: var(--fd-border);
        }

        .fd-floating-dot {
          display: block;

          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: var(--fd-mint);

          box-shadow:
            0 0 14px rgba(143, 231, 200, 0.65);
        }

        /* =====================================================
           INTRO
        ===================================================== */

        .fd-intro {
          display: grid;
          grid-template-columns: 90px 1fr 250px;
          gap: 35px;
          align-items: end;

          padding: 90px 0 95px;
        }

        .fd-intro-number {
          align-self: start;

          font-size: clamp(60px, 9vw, 112px);
          font-weight: 800;
          line-height: 0.8;

          letter-spacing: -0.08em;

          color: transparent;

          -webkit-text-stroke: 1px
            rgba(143, 231, 200, 0.25);
        }

        .fd-intro-copy {
          max-width: 620px;
        }

        .fd-kicker {
          margin: 0 0 18px;

          color: var(--fd-mint);

          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.2em;
        }

        .fd-intro-copy h2 {
          margin: 0;

          font-size: clamp(28px, 4.2vw, 54px);
          font-weight: 500;
          line-height: 1.05;

          letter-spacing: -0.045em;
        }

        .fd-intro-note {
          display: flex;
          gap: 13px;
          align-items: flex-start;

          padding-bottom: 4px;
        }

        .fd-intro-note span {
          flex: 0 0 auto;

          width: 24px;
          height: 1px;

          margin-top: 7px;

          background: var(--fd-yellow);
        }

        .fd-intro-note p {
          margin: 0;

          color: var(--fd-gray);

          font-size: 11px;
          line-height: 1.7;
        }

        /* =====================================================
           STORY
        ===================================================== */

        .fd-story {
          position: relative;

          display: grid;

          grid-template-columns:
            minmax(90px, 0.55fr)
            minmax(330px, 1.2fr)
            minmax(360px, 1fr);

          column-gap: 42px;

          padding: 28px 0 70px;

          border-top: 1px solid var(--fd-border);

          isolation: isolate;
        }

        .fd-story-rail {
          position: absolute;

          top: -1px;
          left: 0;

          width: 125px;
          height: 2px;

          background: linear-gradient(
            90deg,
            var(--fd-yellow),
            var(--fd-mint)
          );
        }

        .fd-story-meta {
          display: flex;
          align-items: center;
          gap: 12px;

          color: var(--fd-gray);

          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .fd-story-meta > span:first-child {
          color: var(--fd-yellow);
        }

        .fd-meta-line {
          width: 25px;
          height: 1px;

          background: var(--fd-border);
        }

        /* =====================================================
           IMAGE
        ===================================================== */

        .fd-story-image {
          position: relative;

          padding-top: 22px;
        }

        .fd-image-frame {
          position: relative;

          overflow: hidden;

          background: var(--fd-panel);

          border: 1px solid var(--fd-border);
        }

        .fd-image-frame img {
          display: block;

          width: 100%;
          height: auto;

          min-height: 330px;

          object-fit: cover;

          transform-origin: center center;
          will-change: transform;
        }

        .fd-image-overlay {
          position: absolute;
          inset: 0;

          pointer-events: none;

          background:
            linear-gradient(
              180deg,
              transparent 50%,
              rgba(5, 9, 11, 0.66)
            ),
            linear-gradient(
              90deg,
              rgba(5, 9, 11, 0.12),
              transparent
            );
        }

        .fd-image-caption {
          position: absolute;

          bottom: 17px;
          left: 18px;

          color: var(--fd-white);

          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.18em;
        }

        .fd-image-number {
          position: absolute;

          z-index: 3;

          top: 4px;
          right: 14px;

          color: var(--fd-yellow);

          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.15em;
        }

        .fd-image-corner {
          position: absolute;
          z-index: 3;

          width: 17px;
          height: 17px;

          pointer-events: none;
        }

        .fd-corner-tl {
          top: 10px;
          left: 10px;

          border-top: 1px solid var(--fd-mint);
          border-left: 1px solid var(--fd-mint);
        }

        .fd-corner-br {
          right: 10px;
          bottom: 10px;

          border-right: 1px solid var(--fd-yellow);
          border-bottom: 1px solid var(--fd-yellow);
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .fd-story-content {
          align-self: center;

          max-width: 500px;

          padding-top: 22px;
        }

        .fd-section-label {
          margin: 0 0 15px;

          color: var(--fd-mint);

          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .fd-story-content h3 {
          margin: 0 0 24px;

          font-size: 14px;
          font-weight: 700;
          line-height: 1.3;

          letter-spacing: 0.02em;

          color: var(--fd-white);
        }

        .fd-story-content h3 span {
          color: var(--fd-yellow);
        }

        .fd-main-copy {
          margin: 0;

          color: var(--fd-white);

          font-size: 15px;
          font-weight: 400;
          line-height: 1.85;
        }

        .fd-secondary-copy {
          margin: 20px 0 0;

          color: var(--fd-gray);

          font-size: 12px;
          line-height: 1.8;
        }

        /* =====================================================
           HIGHLIGHT
        ===================================================== */

        .fd-highlight {
          display: flex;
          align-items: stretch;
          gap: 13px;

          margin: 25px 0;
        }

        .fd-highlight-mark {
          flex: 0 0 2px;

          background: var(--fd-yellow);
        }

        .fd-highlight p {
          margin: 0;

          color: var(--fd-white);

          font-size: 13px;
          font-weight: 600;
          line-height: 1.55;
        }

        /* =====================================================
           VALUES
        ===================================================== */

        .fd-values {
          display: flex;
          flex-wrap: wrap;
          gap: 0;

          margin-top: 27px;

          border-top: 1px solid var(--fd-border);
          border-bottom: 1px solid var(--fd-border);
        }

        .fd-values span {
          position: relative;

          padding: 12px 16px 12px 0;
          margin-right: 16px;

          color: var(--fd-gray);

          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .fd-values span:not(:last-child)::after {
          content: "";

          position: absolute;

          top: 50%;
          right: 6px;

          width: 3px;
          height: 3px;

          border-radius: 50%;

          background: var(--fd-yellow);

          transform: translateY(-50%);
        }

        /* =====================================================
           MISSION LAYOUT
        ===================================================== */

        .fd-mission {
          grid-template-columns:
            minmax(90px, 0.55fr)
            minmax(360px, 1fr)
            minmax(330px, 1.2fr);
        }

        .fd-mission .fd-story-content {
          order: 2;
        }

        .fd-mission .fd-story-image {
          order: 3;
        }

        .fd-mission .fd-story-meta {
          order: 1;
        }

        .fd-mission-values {
          margin-top: 25px;
        }

        .fd-statement {
          display: flex;
          align-items: center;
          gap: 12px;

          margin-top: 25px;
          padding: 14px 0;

          border-top: 1px solid var(--fd-border);
          border-bottom: 1px solid var(--fd-border);
        }

        .fd-statement-line {
          width: 28px;
          height: 2px;

          flex: 0 0 auto;

          background: var(--fd-yellow);
        }

        .fd-statement p {
          margin: 0;

          color: var(--fd-white);

          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.16em;
        }

        .fd-mission-highlight {
          margin-top: 26px;
        }

        /* =====================================================
           DIVIDER
        ===================================================== */

        .fd-mid-divider {
          display: grid;

          grid-template-columns: 1fr auto 1fr;
          gap: 20px;

          align-items: center;

          margin: 0 0 25px;

          color: var(--fd-gray);

          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.2em;
        }

        .fd-mid-divider span:first-child,
        .fd-mid-divider span:last-child {
          height: 1px;

          background: var(--fd-border-soft);
        }

        /* =====================================================
           BOTTOM MARK
        ===================================================== */

        .fd-bottom-mark {
          display: grid;

          grid-template-columns: 30px auto 1fr;
          gap: 15px;

          align-items: center;

          padding-top: 25px;

          border-top: 1px solid var(--fd-border);
        }

        .fd-bottom-mark p {
          margin: 0;

          color: var(--fd-gray);

          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.18em;
        }

        .fd-bottom-line {
          height: 1px;

          background: linear-gradient(
            90deg,
            var(--fd-border),
            transparent
          );
        }

        .fd-grid-mark {
          display: grid;

          grid-template-columns: repeat(2, 5px);
          grid-template-rows: repeat(2, 5px);

          gap: 3px;

          transform-origin: center;
        }

        .fd-grid-mark span {
          display: block;

          width: 5px;
          height: 5px;

          background: var(--fd-mint);
        }

        .fd-grid-mark span:nth-child(2),
        .fd-grid-mark span:nth-child(3) {
          background: var(--fd-yellow);
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 980px) {
          .fd-direction-shell {
            width: min(
              100% - 36px,
              760px
            );

            padding-top: 65px;
          }

          .fd-intro {
            grid-template-columns: 60px 1fr;
            gap: 25px;

            padding: 70px 0;
          }

          .fd-intro-note {
            grid-column: 2;
            max-width: 300px;
          }

          .fd-story,
          .fd-mission {
            grid-template-columns: 55px 1fr;

            gap: 25px;
          }

          .fd-story-meta {
            grid-column: 1;
          }

          .fd-story-image,
          .fd-story-content,
          .fd-mission .fd-story-image,
          .fd-mission .fd-story-content {
            grid-column: 2;
          }

          .fd-story-image,
          .fd-mission .fd-story-image {
            order: initial;
          }

          .fd-story-content,
          .fd-mission .fd-story-content {
            order: initial;
          }

          .fd-image-frame img {
            min-height: 380px;
          }

          .fd-story-content {
            max-width: 620px;
          }

          .fd-story-rail {
            width: 90px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 640px) {
          .fd-direction-shell {
            width: calc(100% - 28px);

            padding: 42px 0 45px;
          }

          .fd-direction-header {
            min-height: 38px;

            font-size: 7px;
            letter-spacing: 0.12em;
          }

          .fd-header-line {
            width: 18px;
          }

          .fd-header-right {
            display: none;
          }

          .fd-intro {
            display: block;

            padding: 55px 0 58px;
          }

          .fd-intro-number {
            margin-bottom: 20px;

            font-size: 58px;
          }

          .fd-kicker {
            margin-bottom: 13px;
          }

          .fd-intro-copy h2 {
            font-size: 29px;
            line-height: 1.08;
          }

          .fd-intro-note {
            margin-top: 24px;
          }

          .fd-story,
          .fd-mission {
            display: flex;
            flex-direction: column;

            gap: 0;

            padding: 22px 0 48px;
          }

          .fd-story-rail {
            width: 72px;
          }

          .fd-story-meta {
            order: 1;

            margin-bottom: 22px;
          }

          .fd-story-image,
          .fd-mission .fd-story-image {
            order: 2;

            width: 100%;

            padding-top: 0;
            margin-bottom: 30px;
          }

          .fd-story-content,
          .fd-mission .fd-story-content {
            order: 3;

            width: 100%;

            padding-top: 0;
          }

          .fd-image-number {
            top: -2px;
            right: 8px;
          }

          /*
             IMPORTANT:
             No forced mobile cropping.
             The image keeps its natural aspect ratio.
          */

          .fd-image-frame img {
            width: 100%;
            height: auto;
            min-height: 0;

            object-fit: contain;
          }

          .fd-image-caption {
            bottom: 12px;
            left: 13px;

            font-size: 7px;
          }

          .fd-story-content h3 {
            margin-bottom: 18px;

            font-size: 14px;
          }

          .fd-main-copy {
            font-size: 13px;
            line-height: 1.75;
          }

          .fd-secondary-copy {
            font-size: 11px;
            line-height: 1.75;
          }

          .fd-highlight {
            margin: 20px 0;
          }

          .fd-highlight p {
            font-size: 12px;
          }

          .fd-values {
            display: block;
          }

          .fd-values span {
            display: inline-block;

            padding: 10px 15px 10px 0;

            font-size: 8px;
          }

          .fd-values span:not(:last-child)::after {
            right: 5px;
          }

          .fd-statement p {
            font-size: 8px;
            letter-spacing: 0.11em;
          }

          .fd-mid-divider {
            gap: 10px;

            font-size: 7px;
          }

          .fd-bottom-mark {
            grid-template-columns: 24px auto;

            padding-top: 20px;
          }

          .fd-bottom-line {
            display: none;
          }

          .fd-bg-grid {
            background-size: 55px 55px;
          }
        }

        /* =====================================================
           VERY SMALL DEVICES
        ===================================================== */

        @media (max-width: 390px) {
          .fd-direction-shell {
            width: calc(100% - 22px);
          }

          .fd-intro-copy h2 {
            font-size: 26px;
          }

          .fd-story-content h3 {
            font-size: 14px;
          }

          .fd-main-copy {
            font-size: 12.5px;
          }

          .fd-image-corner {
            width: 12px;
            height: 12px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .fd-direction *,
          .fd-direction *::before,
          .fd-direction *::after {
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </>
  );
};

export default AboutVision;