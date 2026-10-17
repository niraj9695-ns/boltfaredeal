
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../../assets/images/about/logo.png";

gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const visualRef = useRef(null);
  const logoRef = useRef(null);
  const ringRef = useRef(null);

  /* ============================================
     NAVBAR THEME DETECTION
     ============================================ */

  const [isLightTheme, setIsLightTheme] = useState(() => {
    if (typeof document === "undefined") return false;

    return (
      document.documentElement.getAttribute("data-theme") === "light" ||
      document.documentElement.classList.contains("light")
    );
  });

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

  /* ============================================
     GSAP ANIMATIONS
     ============================================ */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const words = titleRef.current.querySelectorAll(".about-word");

      // Initial states
      gsap.set(words, {
        opacity: 0,
        y: 65,
        rotateX: -65,
      });

      gsap.set(
        [
          labelRef.current,
          descriptionRef.current,
          visualRef.current,
        ],
        {
          opacity: 0,
        }
      );

      gsap.set(descriptionRef.current, {
        y: 28,
      });

      gsap.set(visualRef.current, {
        x: 110,
        scale: 0.82,
        rotation: 12,
      });

      // Main scroll reveal
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      timeline
        .to(labelRef.current, {
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        })
        .to(
          words,
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.85,
            stagger: 0.055,
            ease: "power4.out",
          },
          "-=0.25"
        )
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          visualRef.current,
          {
            opacity: 1,
            x: 0,
            scale: 1,
            rotation: 0,
            duration: 1.35,
            ease: "expo.out",
          },
          "-=0.65"
        );

      // Rotating circular text
      gsap.to(ringRef.current, {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      // Logo breathing animation
      gsap.to(logoRef.current, {
        scale: 1.06,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Scroll parallax
      gsap.to(visualRef.current, {
        y: -75,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Mouse parallax
      const handleMouseMove = (event) => {
        const rect = section.getBoundingClientRect();

        if (!rect.width || !rect.height) return;

        const x =
          ((event.clientX - rect.left) / rect.width - 0.5) * 2;

        const y =
          ((event.clientY - rect.top) / rect.height - 0.5) * 2;

        gsap.to(visualRef.current, {
          x: x * 10,
          duration: 1.1,
          ease: "power3.out",
          overwrite: "auto",
        });

        // Keep mouse movement subtle without overriding scroll parallax.
        gsap.to(visualRef.current, {
          rotation: y * 1.5,
          duration: 1.1,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      section.addEventListener("mousemove", handleMouseMove);

      // Remove listener when the GSAP context is reverted.
      return () => {
        section.removeEventListener("mousemove", handleMouseMove);
      };
    }, section);

    return () => ctx.revert();
  }, []);

  /* ============================================
     TITLE
     ============================================ */

  const titleWords = [
    "Printing",
    "Solutions",
    "That",
    "Build",
    "Brands",
    "That",
    "Stand",
    "Out",
  ];

  return (
    <>
      <style>{`
        /* =========================================
           ROOT
           ========================================= */

        .fairdeal-about {
          --fd-bg: #05090B;
          --fd-panel: #0C1419;
          --fd-panel-2: #111B21;
          --fd-yellow: #FFDF00;
          --fd-mint: #8FE7C8;
          --fd-white: #F5F7F8;
          --fd-gray: #98A1B1;
          --fd-muted: #66717E;
          --fd-border: rgba(255,255,255,0.08);

          position: relative;
          min-height: 100vh;

          min-height: 100svh;

          width: 100%;
          overflow: hidden;
          background: var(--fd-bg);
          color: var(--fd-white);
          font-family: Inter, "Segoe UI", Arial, sans-serif;
          transition: background 0.5s ease, color 0.5s ease;
        }

        /* =========================================
           LIGHT THEME
           ========================================= */

        .fairdeal-about.light-mode {
          --fd-bg: #F5F7F8;
          --fd-panel: #FFFFFF;
          --fd-panel-2: #EEF2F1;
          --fd-yellow: #C9AE00;
          --fd-mint: #128C68;
          --fd-white: #101518;
          --fd-gray: #56616D;
          --fd-muted: #7B858F;
          --fd-border: rgba(5,9,11,0.09);
        }

        /* =========================================
           BACKGROUND GLOW
           ========================================= */

        .fairdeal-about::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(
              circle at 75% 45%,
              rgba(255,223,0,0.055),
              transparent 28%
            ),
            radial-gradient(
              circle at 18% 20%,
              rgba(143,231,200,0.035),
              transparent 25%
            );
        }

        .fairdeal-about.light-mode::before {
          background:
            radial-gradient(
              circle at 75% 45%,
              rgba(201,174,0,0.09),
              transparent 30%
            ),
            radial-gradient(
              circle at 18% 20%,
              rgba(18,140,104,0.055),
              transparent 28%
            );
        }

        /* =========================================
           GRID BACKGROUND
           ========================================= */

        .fairdeal-about::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(
              rgba(255,255,255,0.018) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.018) 1px,
              transparent 1px
            );
          background-size: 80px 80px;
          opacity: 0.45;
        }

        .fairdeal-about.light-mode::after {
          background-image:
            linear-gradient(
              rgba(5,9,11,0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(5,9,11,0.035) 1px,
              transparent 1px
            );
        }

        /* =========================================
           MAIN CONTAINER
           ========================================= */

        .fairdeal-about .about-inner {
          position: relative;
          z-index: 2;

          width:
            min(
              1240px,
              calc(100% - 100px)
            );

          min-height:
            100vh;

          min-height:
            100svh;

          margin:
            0 auto;

          display:
            grid;

          grid-template-columns:
            52% 48%;

          align-items:
            center;

          gap:
            20px;
        
          margin-top: 60px;

        }

        /* =========================================
           LEFT CONTENT
           ========================================= */

        .fairdeal-about .about-content {
          max-width: 650px;
          min-width: 0;
          padding: 35px 0;
        }

        /* =========================================
           LABEL
           ========================================= */

        .fairdeal-about .about-label {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
          color: var(--fd-yellow);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.25em;
          text-transform: uppercase;
        }

        .fairdeal-about .about-label::before {
          content: "";
          width: 35px;
          height: 1px;
          flex-shrink: 0;
          background: linear-gradient(
            90deg,
            var(--fd-yellow),
            var(--fd-mint)
          );
        }

        /* =========================================
           TITLE
           ========================================= */

        .fairdeal-about .about-title {
          margin: 0;
          max-width: 690px;
          font-size: clamp(2.25rem, 4.7vw, 4.4rem);
          line-height: 0.98;
          font-weight: 650;
          letter-spacing: -0.055em;
          perspective: 1000px;
          overflow-wrap: normal;
        }

        .fairdeal-about .about-word {
          display: inline-block;
          margin-right: 0.18em;
          transform-origin: center bottom;
          will-change: transform, opacity;
        }

        .fairdeal-about .about-word:nth-child(5),
        .fairdeal-about .about-word:nth-child(6) {
          color: var(--fd-yellow);
        }

        .fairdeal-about .about-word:nth-child(8) {
          color: var(--fd-mint);
          margin-right: 0;
        }

        /* =========================================
           DESCRIPTION
           ========================================= */

        .fairdeal-about .about-description {
          max-width: 570px;
          margin-top: 34px;
          margin-bottom: 0;
          color: var(--fd-gray);
          font-size: 16px;
          line-height: 1.8;
          letter-spacing: -0.01em;
        }

        .fairdeal-about .about-description strong {
          color: var(--fd-white);
          font-weight: 650;
        }

        /* =========================================
           EXPERIENCE BADGE
           ========================================= */

        .fairdeal-about .about-meta {
          display: flex;
          align-items: center;
          gap: 28px;
          margin-top: 38px;
        }

        .fairdeal-about .about-experience {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          border: 1px solid var(--fd-border);
          border-radius: 50px;
          background: var(--fd-panel);
          color: var(--fd-gray);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.13em;
          transition:
            border-color 0.3s ease,
            background 0.3s ease,
            transform 0.3s ease;
        }

        .fairdeal-about .about-experience:hover {
          transform: translateY(-2px);
          border-color: var(--fd-mint);
        }

        .fairdeal-about .experience-dot {
          width: 7px;
          height: 7px;
          flex-shrink: 0;
          border-radius: 50%;
          background: var(--fd-mint);
          box-shadow: 0 0 12px var(--fd-mint);
        }

        .fairdeal-about .about-experience strong {
          color: var(--fd-yellow);
          font-size: 15px;
          letter-spacing: 0;
        }

        /* =========================================
           RIGHT VISUAL AREA
           ========================================= */

        .fairdeal-about .about-visual-area {
          position: relative;
          min-width: 0;
          min-height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: transform;
        }

        /* =========================================
           GLOW
           ========================================= */

        .fairdeal-about .visual-glow {
          position: absolute;
          width: 390px;
          height: 390px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255,223,0,0.10),
            transparent 65%
          );
          filter: blur(30px);
          pointer-events: none;
        }

        .fairdeal-about.light-mode .visual-glow {
          background: radial-gradient(
            circle,
            rgba(201,174,0,0.13),
            transparent 65%
          );
        }

        /* =========================================
           VISUAL CIRCLE
           ========================================= */

        .fairdeal-about .visual {
          position: relative;
          width: min(450px, 100%);
          aspect-ratio: 1 / 1;
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: transform;
        }

        /* =========================================
           OUTER RING
           ========================================= */

        .fairdeal-about .outer-ring {
          position: absolute;
          inset: 10px;
          border: 1px solid var(--fd-border);
          border-radius: 50%;
        }

        .fairdeal-about .outer-ring::before {
          content: "";
          position: absolute;
          inset: 25px;
          border: 1px dashed var(--fd-border);
          border-radius: 50%;
        }

        .fairdeal-about .outer-ring::after {
          content: "";
          position: absolute;
          width: 7px;
          height: 7px;
          top: 12%;
          right: 16%;
          border-radius: 50%;
          background: var(--fd-yellow);
          box-shadow: 0 0 18px rgba(255,223,0,0.7);
        }

        /* =========================================
           ROTATING CIRCULAR TEXT
           ========================================= */

        .fairdeal-about .rotating-text {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          will-change: transform;
          pointer-events: none;
        }

        .fairdeal-about .rotating-text svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .fairdeal-about .rotating-text text {
          fill: var(--fd-white);
          font-size: 17px;
          font-weight: 650;
          letter-spacing: 7px;
          text-transform: uppercase;
        }

        /* =========================================
           CENTER ORBIT
           ========================================= */

        .fairdeal-about .center-orbit {
          position: absolute;
          width: 61%;
          height: 61%;
          border-radius: 50%;
          border: 1px solid var(--fd-border);
          background: radial-gradient(
            circle at 30% 25%,
            rgba(143,231,200,0.06),
            transparent 65%
          );
          box-shadow: inset 0 0 50px rgba(255,255,255,0.02);
        }

        .fairdeal-about .center-orbit::before {
          content: "";
          position: absolute;
          inset: 25px;
          border-radius: 50%;
          border: 1px solid rgba(143,231,200,0.13);
        }

        .fairdeal-about .center-orbit::after {
          content: "";
          position: absolute;
          width: 6px;
          height: 6px;
          left: 15%;
          bottom: 20%;
          border-radius: 50%;
          background: var(--fd-mint);
          box-shadow: 0 0 16px rgba(143,231,200,0.8);
        }

        /* =========================================
           CENTER LOGO CIRCLE
           ========================================= */

        .fairdeal-about .center-logo {
          position: relative;
          z-index: 3;
          width: 150px;
          height: 150px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #fff;
          border: 1px solid var(--fd-border);
          box-shadow:
            0 30px 80px rgba(0,0,0,0.35),
            inset 0 0 35px rgba(143,231,200,0.025);
          transition:
            background 0.5s ease,
            border-color 0.5s ease;
        }

        .fairdeal-about .fairdeal-logo {
          display: block;
          width: 88px;
          height: 88px;
          object-fit: contain;
          transition: transform 0.4s ease;
        }

        .fairdeal-about .center-logo:hover .fairdeal-logo {
          transform: scale(1.08);
        }

        /* =========================================
           SMALL VISUAL LABEL
           ========================================= */

        .fairdeal-about .visual-small-text {
          position: absolute;
          right: 20px;
          bottom: 40px;
          color: var(--fd-muted);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .fairdeal-about .visual-small-text span {
          color: var(--fd-mint);
        }

        /* =========================================
           CORNER LINE
           ========================================= */

        .fairdeal-about .corner-line {
          position: absolute;
          left: 0;
          bottom: 30px;
          width: 80px;
          height: 1px;
          background: linear-gradient(
            90deg,
            var(--fd-yellow),
            transparent
          );
        }

        /* =========================================
           TABLET
           ========================================= */

        @media (max-width: 1050px) {
          .fairdeal-about .about-inner {
            width: min(calc(100% - 60px), 850px);
            grid-template-columns: minmax(0, 1fr);
            text-align: center;
            padding: 90px 0;
            margin-top: 0;
          }

          .fairdeal-about .about-content {
            margin: auto;
            width: 100%;
          }

          .fairdeal-about .about-label {
            justify-content: center;
          }

          .fairdeal-about .about-title {
            margin-left: auto;
            margin-right: auto;
          }

          .fairdeal-about .about-description {
            margin-left: auto;
            margin-right: auto;
          }

          .fairdeal-about .about-meta {
            justify-content: center;
          }

          .fairdeal-about .about-visual-area {
            min-height: 430px;
          }

          .fairdeal-about .visual {
            width: min(380px, 100%);
          }
        }

        /* =========================================
           MOBILE
           ========================================= */

        @media (max-width: 600px) {
          .fairdeal-about .about-inner {
            width: calc(100% - 36px);
            padding: 70px 0 45px;
            gap: 0;
          }

          .fairdeal-about .about-content {
            padding: 15px 0;
          }

          .fairdeal-about .about-label {
            gap: 9px;
            margin-bottom: 23px;
            font-size: 9px;
            letter-spacing: 0.15em;
          }

          .fairdeal-about .about-label::before {
            width: 24px;
          }

          .fairdeal-about .about-title {
            font-size: clamp(2.3rem, 9.2vw, 3rem);
            line-height: 1.02;
            letter-spacing: -0.055em;
          }

          .fairdeal-about .about-description {
            margin-top: 25px;
            font-size: 14px;
            line-height: 1.75;
          }

          .fairdeal-about .about-meta {
            margin-top: 28px;
            justify-content: center;
          }

          .fairdeal-about .about-experience {
            gap: 9px;
            padding: 12px 16px;
            font-size: 9px;
            letter-spacing: 0.09em;
          }

          .fairdeal-about .about-visual-area {
            min-height: 350px;
            margin-top: 12px;
          }

          .fairdeal-about .visual {
            width: min(315px, 100%);
          }

          .fairdeal-about .center-orbit {
            width: 65%;
            height: 65%;
          }

          .fairdeal-about .center-orbit::before {
            inset: 17px;
          }

          .fairdeal-about .center-logo {
            width: 115px;
            height: 115px;
          }

          .fairdeal-about .fairdeal-logo {
            width: 68px;
            height: 68px;
          }

          .fairdeal-about .rotating-text text {
            font-size: 14px;
            letter-spacing: 5px;
          }

          .fairdeal-about .visual-small-text {
            right: 0;
            bottom: 5px;
            font-size: 8px;
            letter-spacing: 0.12em;
          }

          .fairdeal-about .corner-line {
            bottom: 12px;
            width: 45px;
          }

          .fairdeal-about .visual-glow {
            width: 280px;
            height: 280px;
          }
        }


        @media (min-width: 768px) and (max-height: 800px) {

          .about-inner {

            align-items:
              start;

            padding-top:
              9rem;

            padding-bottom:
              2rem;

          }

        }

      `}</style>

      {/* =========================================
          ABOUT HERO SECTION
          ========================================= */}

      <section
        ref={sectionRef}
        className={`fairdeal-about ${isLightTheme ? "light-mode" : ""}`}
      >
        <div className="about-inner">
          {/* LEFT CONTENT */}

          <div className="about-content">
            <div ref={labelRef} className="about-label">
              Premium Printing &amp; Packaging
            </div>

            <h1 ref={titleRef} className="about-title">
              {titleWords.map((word, index) => (
                <span key={index} className="about-word">
                  {word}
                </span>
              ))}
            </h1>

            <p ref={descriptionRef} className="about-description">
              <strong>Fairdeal Print Pack India Pvt. Ltd.</strong> has been a
              trusted name in printing and document solutions since{" "}
              <strong>1990</strong>. With decades of experience in print media,
              we combine quality products, reliable service and professional
              execution to create solutions that help businesses communicate
              better.
            </p>

            {/* NON-CLICKABLE EXPERIENCE BADGE */}

            <div className="about-meta">
              <div className="about-experience">
                <span className="experience-dot" />
                <span>EXPERIENCE SINCE</span>
                <strong>1990</strong>
              </div>
            </div>
          </div>

          {/* RIGHT CIRCULAR VISUAL */}

          <div ref={visualRef} className="about-visual-area">
            <div className="visual-glow" />

            <div className="visual">
              {/* OUTER CIRCLE */}

              <div className="outer-ring" />

              {/* ROTATING TEXT */}

              <div ref={ringRef} className="rotating-text">
                <svg viewBox="0 0 500 500" aria-hidden="true">
                  <defs>
                    <path
                      id="fairdealTextCircle"
                      d="
                        M 250,250
                        m -190,0
                        a 190,190 0 1,1 380,0
                        a 190,190 0 1,1 -380,0
                      "
                    />
                  </defs>

                  <text>
                    <textPath
                      href="#fairdealTextCircle"
                      startOffset="0%"
                    >
                      PRINTING • PACKAGING • QUALITY • SERVICE •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* CENTER ORBIT */}

              <div className="center-orbit" />

              {/* FAIRDEAL LOGO */}

              <div ref={logoRef} className="center-logo">
                <img
                  src={logo}
                  alt="Fairdeal Print Pack India Pvt. Ltd."
                  className="fairdeal-logo"
                />
              </div>

              {/* EXPERIENCE LABEL */}

              <div className="visual-small-text">
                <span>36+</span> YEARS OF TRUST
              </div>
            </div>

            <div className="corner-line" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
