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
  const buttonRef = useRef(null);
  const visualRef = useRef(null);
  const logoRef = useRef(null);
  const ringRef = useRef(null);

  /* ============================================
     EXISTING NAVBAR THEME DETECTION
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

      /*
       * INITIAL STATES
       */

      gsap.set(words, {
        opacity: 0,
        y: 65,
        rotateX: -65,
      });

      gsap.set(
        [
          labelRef.current,
          descriptionRef.current,
          buttonRef.current,
          visualRef.current,
        ],
        {
          opacity: 0,
        }
      );

      gsap.set(descriptionRef.current, {
        y: 28,
      });

      gsap.set(buttonRef.current, {
        y: 22,
      });

      gsap.set(visualRef.current, {
        x: 110,
        scale: 0.82,
        rotation: 12,
      });

      /*
       * MAIN SCROLL REVEAL
       */

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
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.3"
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
          "-=0.95"
        );

      /*
       * ROTATING CIRCLE TEXT
       */

      gsap.to(ringRef.current, {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      /*
       * LOGO BREATHING
       */

      gsap.to(logoRef.current, {
        scale: 1.06,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /*
       * SCROLL PARALLAX
       */

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

      /*
       * MOUSE PARALLAX
       */

      const handleMouseMove = (event) => {
        const rect = section.getBoundingClientRect();

        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;

        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

        gsap.to(visualRef.current, {
          x: x * 10,
          y: y * 10,
          duration: 1.1,
          ease: "power3.out",
        });
      };

      section.addEventListener("mousemove", handleMouseMove);

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

        /* =====================================================
           ROOT
           ===================================================== */

        .fairdeal-about {

          --fd-bg: #05090B;

          --fd-panel: #0C1419;

          --fd-panel-2: #111B21;

          --fd-yellow: #FFDF00;

          --fd-mint: #8FE7C8;

          --fd-white: #F5F7F8;

          --fd-gray: #98A1B1;

          --fd-muted: #66717E;

          --fd-border:
            rgba(255,255,255,0.08);

          position: relative;

          min-height: 100vh;

          width: 100%;

          overflow: hidden;

          background:
            var(--fd-bg);

          color:
            var(--fd-white);

          font-family:
            Inter,
            "Segoe UI",
            Arial,
            sans-serif;

          transition:
            background 0.5s ease,
            color 0.5s ease;

        }


        /* =====================================================
           LIGHT THEME
           ===================================================== */

        .fairdeal-about.light-mode {

          --fd-bg: #F5F7F8;

          --fd-panel: #FFFFFF;

          --fd-panel-2: #EEF2F1;

          --fd-yellow: #D5B900;

          --fd-mint: #15966F;

          --fd-white: #101518;

          --fd-gray: #56616D;

          --fd-muted: #7B858F;

          --fd-border:
            rgba(5,9,11,0.09);

        }


        /* =====================================================
           BACKGROUND GLOW
           ===================================================== */

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


        /* =====================================================
           GRID
           ===================================================== */

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

          background-size:
            80px 80px;

          opacity:
            0.45;

        }


        /* =====================================================
           CONTAINER
           ===================================================== */

        .about-inner {

          position: relative;

          z-index: 2;

          width:
            min(
              1240px,
              calc(100% - 100px)
            );

          min-height:
            100vh;

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


        /* =====================================================
           LEFT
           ===================================================== */

        .about-content {

          max-width:
            650px;

        }


        /* =====================================================
           LABEL
           ===================================================== */

        .about-label {

          display:
            flex;

          align-items:
            center;

          gap:
            12px;

          margin-bottom:
            28px;

          color:
            var(--fd-yellow);

          font-size:
            11px;

          font-weight:
            800;

          letter-spacing:
            0.25em;

          text-transform:
            uppercase;

        }


        .about-label::before {

          content: "";

          width:
            35px;

          height:
            1px;

          background:
            linear-gradient(
              90deg,
              var(--fd-yellow),
              var(--fd-mint)
            );

        }


        /* =====================================================
           TITLE
           ===================================================== */

        .about-title {

          margin:
            0;

          max-width:
            690px;

          font-size:
            clamp(2.25rem, 4.7vw, 4.4rem);

          line-height:
            0.98;

          font-weight:
            650;

          letter-spacing:
            -0.055em;

          perspective:
            1000px;

        }


        .about-word {

          display:
            inline-block;

          margin-right:
            0.18em;

          transform-origin:
            center bottom;

          will-change:
            transform,
            opacity;

        }


        /* YELLOW */

        .about-word:nth-child(5),

        .about-word:nth-child(6) {

          color:
            var(--fd-yellow);

        }


        /* MINT */

        .about-word:nth-child(8) {

          color:
            var(--fd-mint);

        }


        /* =====================================================
           DESCRIPTION
           ===================================================== */

        .about-description {

          max-width:
            570px;

          margin-top:
            34px;

          color:
            var(--fd-gray);

          font-size:
            16px;

          line-height:
            1.8;

          letter-spacing:
            -0.01em;

        }


        .about-description strong {

          color:
            var(--fd-white);

          font-weight:
            650;

        }


        /* =====================================================
           META
           ===================================================== */

        .about-meta {

          display:
            flex;

          align-items:
            center;

          gap:
            28px;

          margin-top:
            38px;

        }


        /* =====================================================
           BUTTON
           ===================================================== */

        .about-button {

          position:
            relative;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          height:
            48px;

          padding:
            0 30px;

          border:
            1px solid
            var(--fd-yellow);

          border-radius:
            50px;

          background:
            var(--fd-yellow);

          color:
            #05090B;

          font-size:
            10px;

          font-weight:
            900;

          letter-spacing:
            0.18em;

          text-transform:
            uppercase;

          cursor:
            pointer;

          overflow:
            hidden;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;

        }


        .about-button::before {

          content: "";

          position:
            absolute;

          inset:
            0;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,0.35),
              transparent
            );

          transform:
            translateX(-120%);

          transition:
            transform 0.7s ease;

        }


        .about-button:hover {

          transform:
            translateY(-3px);

          box-shadow:
            0 15px 45px
            rgba(255,223,0,0.18);

        }


        .about-button:hover::before {

          transform:
            translateX(120%);

        }


        /* =====================================================
           YEAR
           ===================================================== */

        .about-year {

          color:
            var(--fd-muted);

          font-size:
            10px;

          font-weight:
            700;

          letter-spacing:
            0.16em;

          text-transform:
            uppercase;

        }


        .about-year strong {

          display:
            block;

          margin-top:
            4px;

          color:
            var(--fd-white);

          font-size:
            15px;

          letter-spacing:
            0;

        }


        /* =====================================================
           RIGHT VISUAL
           ===================================================== */

        .about-visual-area {

          position:
            relative;

          min-height:
            520px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

        }


        /* =====================================================
           GLOW
           ===================================================== */

        .visual-glow {

          position:
            absolute;

          width:
            390px;

          height:
            390px;

          border-radius:
            50%;

          background:
            radial-gradient(
              circle,
              rgba(255,223,0,0.10),
              transparent 65%
            );

          filter:
            blur(30px);

        }


        /* =====================================================
           VISUAL
           ===================================================== */

        .visual {

          position:
            relative;

          width:
            450px;

          height:
            450px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          will-change:
            transform;

        }


        /* =====================================================
           OUTER RING
           ===================================================== */

        .outer-ring {

          position:
            absolute;

          inset:
            10px;

          border:
            1px solid
            var(--fd-border);

          border-radius:
            50%;

        }


        .outer-ring::before {

          content: "";

          position:
            absolute;

          inset:
            25px;

          border:
            1px dashed
            var(--fd-border);

          border-radius:
            50%;

        }


        .outer-ring::after {

          content: "";

          position:
            absolute;

          width:
            7px;

          height:
            7px;

          top:
            12%;

          right:
            16%;

          border-radius:
            50%;

          background:
            var(--fd-yellow);

          box-shadow:
            0 0 18px
            rgba(255,223,0,0.7);

        }


        /* =====================================================
           ROTATING TEXT
           ===================================================== */

        .rotating-text {

          position:
            absolute;

          inset:
            0;

          width:
            100%;

          height:
            100%;

          will-change:
            transform;

        }


        .rotating-text svg {

          width:
            100%;

          height:
            100%;

          overflow:
            visible;

        }


        .rotating-text text {

          fill:
            var(--fd-white);

          font-size:
            17px;

          font-weight:
            650;

          letter-spacing:
            7px;

          text-transform:
            uppercase;

        }


        /* =====================================================
           CENTER ORBIT
           ===================================================== */

        .center-orbit {

          position:
            absolute;

          width:
            275px;

          height:
            275px;

          border-radius:
            50%;

          border:
            1px solid
            var(--fd-border);

          background:
            radial-gradient(
              circle at 30% 25%,
              rgba(143,231,200,0.06),
              transparent 65%
            );

          box-shadow:
            inset 0 0 50px
            rgba(255,255,255,0.02);

        }


        .center-orbit::before {

          content: "";

          position:
            absolute;

          inset:
            25px;

          border-radius:
            50%;

          border:
            1px solid
            rgba(143,231,200,0.13);

        }


        .center-orbit::after {

          content: "";

          position:
            absolute;

          width:
            6px;

          height:
            6px;

          left:
            15%;

          bottom:
            20%;

          border-radius:
            50%;

          background:
            var(--fd-mint);

          box-shadow:
            0 0 16px
            rgba(143,231,200,0.8);

        }


        /* =====================================================
           LOGO CIRCLE
           ===================================================== */

        .center-logo {

          position:relative;

          z-index:3;

          width:
            150px;

          height:
            150px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          border-radius:
            50%;

          background: #fff;

          border:
            1px solid
            var(--fd-border);

          box-shadow:

            0 30px 80px
            rgba(0,0,0,0.35),

            inset 0 0 35px
            rgba(143,231,200,0.025);

          transition:
            background 0.5s ease,
            border 0.5s ease;

        }


        /* =====================================================
           FAIRDEAL LOGO
           ===================================================== */

        .fairdeal-logo {

          width:
            88px;

          height:
            88px;

          object-fit:
            contain;

          display:
            block;

          transition:
            transform 0.4s ease;

        }


        .center-logo:hover
        .fairdeal-logo {

          transform:
            scale(1.08);

        }


        /* =====================================================
           SMALL TEXT
           ===================================================== */

        .visual-small-text {

          position:
            absolute;

          right:
            20px;

          bottom:
            40px;

          color:
            var(--fd-muted);

          font-size:
            9px;

          font-weight:
            800;

          letter-spacing:
            0.2em;

          text-transform:
            uppercase;

        }


        .visual-small-text span {

          color:
            var(--fd-mint);

        }


        /* =====================================================
           CORNER LINE
           ===================================================== */

        .corner-line {

          position:
            absolute;

          left:
            0;

          bottom:
            30px;

          width:
            80px;

          height:
            1px;

          background:
            linear-gradient(
              90deg,
              var(--fd-yellow),
              transparent
            );

        }


        /* =====================================================
           TABLET
           ===================================================== */

        @media (max-width: 1050px) {

          .about-inner {

            width:
              min(
                calc(100% - 60px),
                850px
              );

            grid-template-columns:
              1fr;

            text-align:
              center;

            padding:
              90px 0;

          }


          .about-content {

            margin:
              auto;

          }


          .about-label {

            justify-content:
              center;

          }


          .about-description {

            margin-left:
              auto;

            margin-right:
              auto;

          }


          .about-meta {

            justify-content:
              center;

          }


          .about-visual-area {

            min-height:
              430px;

          }


          .visual {

            width:
              380px;

            height:
              380px;

          }

        }


        /* =====================================================
           MOBILE
           ===================================================== */

        @media (max-width: 600px) {

          .about-inner {

            width:
              calc(100% - 36px);

            padding:
              70px 0;

          }


          .about-label {

            font-size:
              9px;

            letter-spacing:
              0.18em;

          }


          .about-title {

            font-size:
              45px;

            line-height:
              1;

          }


          .about-description {

            font-size:
              14px;

            line-height:
              1.7;

          }


          .about-meta {

            flex-direction:
              column;

            gap:
              18px;

          }


          .about-visual-area {

            min-height:
              350px;

          }


          .visual {

            width:
              315px;

            height:
              315px;

          }


          .center-orbit {

            width:
              205px;

            height:
              205px;

          }


          .center-logo {

            width:
              115px;

            height:
              115px;

          }


          .fairdeal-logo {

            width:
              68px;

            height:
              68px;

          }


          .rotating-text text {

            font-size:
              14px;

            letter-spacing:
              5px;

          }


          .visual-small-text {

            right:
              0;

            bottom:
              10px;

          }

        }

      `}</style>

      {/* =====================================================
          ABOUT SECTION
          ===================================================== */}

      <section
        ref={sectionRef}
        className={`fairdeal-about ${isLightTheme ? "light-mode" : ""}`}
      >
        <div className="about-inner">
          {/* =================================================
              LEFT CONTENT
              ================================================= */}

          <div className="about-content">
            <div ref={labelRef} className="about-label">
              Premium Printing & Packaging
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

            <div className="about-meta">
              <button ref={buttonRef} className="about-button">
                Discover Fairdeal
              </button>

              <div className="about-year">
                Established
                <strong>1990</strong>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT CIRCLE
              ================================================= */}

          <div ref={visualRef} className="about-visual-area">
            <div className="visual-glow" />

            <div className="visual">
              {/* OUTER CIRCLE */}

              <div className="outer-ring" />

              {/* ROTATING TEXT */}

              <div ref={ringRef} className="rotating-text">
                <svg viewBox="0 0 500 500">
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
                    <textPath href="#fairdealTextCircle" startOffset="0%">
                      PRINTING • PACKAGING • QUALITY • SERVICE •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* CENTER ORBIT */}

              <div className="center-orbit" />

              {/* =================================================
                  YOUR LOGO IS HERE
                  ================================================= */}

              <div ref={logoRef} className="center-logo">
                <img
                  src={logo}
                  alt="Fairdeal Print Pack India Pvt. Ltd."
                  className="fairdeal-logo"
                />
              </div>

              {/* SMALL LABEL */}

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
// import React from "react";

// const AboutIntro = () => {
//   return (
//     <section className="about-intro">
//       <span className="section-label">ABOUT US</span>

//       <h1>
//         Printing Solutions Built on
//         <br />
//         Experience & Trust
//       </h1>

//       <p>
//         Fairdeal Print Pack India Pvt. Ltd. has been established as a
//         full-fledged document solution provider in India and Pune city. Our
//         traditional business model is based on our expertise in print media.
//       </p>

//       <p>
//         We began our journey in <strong>1990</strong> and today we have emerged
//         with a reputation for quality products and prompt service.
//       </p>
//     </section>
//   );
// };

// export default AboutIntro;
