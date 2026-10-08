import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import teamImage from "../../assets/images/about/fairdeal-team.png";

gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* ==========================================
         SECTION TITLE ANIMATION
      ========================================== */

      gsap.from(".team-section-title", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-section",
          start: "top 85%",
        },
      });


      /* ==========================================
         IMAGE REVEAL ANIMATION
      ========================================== */

      gsap.fromTo(
        ".team-image-reveal",
        {
          scaleX: 1,
        },
        {
          scaleX: 0,
          transformOrigin: "right center",
          duration: 1.3,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: ".team-image-box",
            start: "top 80%",
          },
        }
      );


      /* ==========================================
         RESPONSIVE IMAGE PARALLAX
      ========================================== */

      const isMobile = window.innerWidth <= 600;

      gsap.to(".team-main-image", {
        scale: isMobile ? 1.01 : 1.04,
        yPercent: isMobile ? -1 : -4,
        ease: "none",

        scrollTrigger: {
          trigger: ".team-image-box",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });


      /* ==========================================
         CONTENT ANIMATION
      ========================================== */

      gsap.from(".team-content-block", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".team-content",
          start: "top 82%",
        },
      });


      /* ==========================================
         HIGHLIGHT ANIMATION
      ========================================== */

      gsap.from(".team-highlight", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".team-highlight",
          start: "top 85%",
        },
      });


      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <section
      ref={sectionRef}
      className="team-section"
    >

      <style>{`

        /* =====================================================
           ROOT
        ===================================================== */

        .team-section {
          --fd-bg: #05090B;
          --fd-panel: #0C1419;
          --fd-panel-2: #111B21;
          --fd-yellow: #FFDF00;
          --fd-mint: #8FE7C8;
          --fd-white: #F5F7F8;
          --fd-gray: #98A1B1;

          width: 100%;

          background: var(--fd-bg);

          color: var(--fd-white);

          padding:
            70px
            6vw;

          overflow: hidden;

          font-family:
            Inter,
            Arial,
            Helvetica,
            sans-serif;
        }


        .team-container {
          width: 100%;

          max-width: 1400px;

          margin: 0 auto;
        }


        /* =====================================================
           SECTION TITLE
        ===================================================== */

        .team-section-title {
          display: flex;

          align-items: center;

          gap: 12px;

          margin-bottom: 28px;

          font-size: 14px;

          line-height: 1;

          font-weight: 700;

          letter-spacing: .08em;

          text-transform: uppercase;

          color: var(--fd-yellow);
        }


        .team-section-title::before {
          content: "";

          width: 35px;

          height: 2px;

          flex-shrink: 0;

          background: var(--fd-mint);
        }


        /* =====================================================
           IMAGE CONTAINER
        ===================================================== */

        .team-image-box {
          position: relative;

          width: 100%;

          height: 480px;

          overflow: hidden;

          background: var(--fd-panel);

          margin-bottom: 38px;
        }


        /* =====================================================
           IMAGE
        ===================================================== */

        .team-main-image {
          width: 100%;

          height: 100%;

          display: block;

          object-fit: cover;

          object-position: center center;

          will-change: transform;

          filter:
            saturate(.85)
            contrast(1.02);
        }


        /* =====================================================
           IMAGE OVERLAY
        ===================================================== */

        .team-image-overlay {
          position: absolute;

          inset: 0;

          z-index: 2;

          background:
            linear-gradient(
              90deg,
              rgba(5, 9, 11, .10),
              transparent 60%,
              rgba(5, 9, 11, .25)
            );

          pointer-events: none;
        }


        /* =====================================================
           IMAGE REVEAL
        ===================================================== */

        .team-image-reveal {
          position: absolute;

          inset: 0;

          z-index: 3;

          background: var(--fd-yellow);

          transform-origin: right center;

          pointer-events: none;
        }


        /* =====================================================
           CONTENT GRID
        ===================================================== */

        .team-content {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 35px;

          border-top:
            1px solid
            rgba(255,255,255,.10);

          padding-top: 30px;
        }


        /* =====================================================
           CONTENT BLOCK
        ===================================================== */

        .team-content-block {
          position: relative;

          min-width: 0;

          padding-right: 28px;

          border-right:
            1px solid
            rgba(255,255,255,.08);
        }


        .team-content-block:last-child {
          border-right: none;
        }


        /* =====================================================
           ACCENT LINE
        ===================================================== */

        .team-content-line {
          width: 30px;

          height: 2px;

          margin-bottom: 15px;

          background: var(--fd-yellow);
        }


        /* =====================================================
           CONTENT TITLE
           14PX
        ===================================================== */

        .team-content-title {
          margin: 0 0 13px;

          font-size: 14px;

          line-height: 1.35;

          font-weight: 700;

          letter-spacing: .04em;

          text-transform: uppercase;

          color: var(--fd-mint);
        }


        .team-content-block:nth-child(2)
        .team-content-title {
          color: var(--fd-yellow);
        }


        .team-content-block:nth-child(3)
        .team-content-title {
          color: var(--fd-mint);
        }


        /* =====================================================
           BODY TEXT
        ===================================================== */

        .team-content-text {
          margin: 0 0 11px;

          color: var(--fd-gray);

          font-size: 12px;

          line-height: 1.7;
        }


        /* =====================================================
           HIGHLIGHT
        ===================================================== */

        .team-highlight {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 25px;

          margin-top: 38px;

          padding:
            20px
            25px;

          background: var(--fd-panel);

          border-left:
            2px solid
            var(--fd-yellow);
        }


        .team-highlight-text {
          margin: 0;

          color: var(--fd-white);

          font-size: 14px;

          line-height: 1.5;
        }


        .team-highlight-text span {
          color: var(--fd-mint);
        }


        .team-highlight-small {
          margin: 0;

          color: var(--fd-gray);

          font-size: 11px;

          white-space: nowrap;

          letter-spacing: .08em;
        }


        /* =====================================================
           LARGE DESKTOP
        ===================================================== */

        @media (min-width: 1500px) {

          .team-section {
            padding-left: 7vw;
            padding-right: 7vw;
          }

          .team-image-box {
            height: 520px;
          }

          .team-content {
            gap: 50px;
          }

        }


        /* =====================================================
           DESKTOP / LAPTOP
        ===================================================== */

        @media (max-width: 1200px) {

          .team-section {
            padding:
              65px
              5vw;
          }

          .team-image-box {
            height: 430px;
          }

          .team-content {
            gap: 25px;
          }

          .team-content-block {
            padding-right: 20px;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 850px) {

          .team-section {
            padding:
              55px
              5vw;
          }

          .team-image-box {
            height: 380px;

            margin-bottom: 30px;
          }

          .team-content {
            grid-template-columns: 1fr;

            gap: 25px;

            padding-top: 28px;
          }

          .team-content-block {
            padding:
              0
              0
              25px;

            border-right: none;

            border-bottom:
              1px solid
              rgba(255,255,255,.08);
          }

          .team-content-block:last-child {
            border-bottom: none;

            padding-bottom: 0;
          }

          .team-highlight {
            margin-top: 30px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .team-section {
            padding:
              50px
              20px;
          }


          /* TITLE */

          .team-section-title {
            gap: 10px;

            margin-bottom: 22px;

            font-size: 14px;
          }


          .team-section-title::before {
            width: 28px;
          }


          /* IMAGE */

          .team-image-box {
            width: 100%;

            height: 280px;

            margin-bottom: 25px;

            overflow: hidden;
          }


          .team-main-image {
            width: 100%;

            height: 100%;

            object-fit: cover;

            /*
              Important:
              Keeps the image centered and
              prevents unnecessary horizontal
              movement.
            */

            object-position: center center;

            transform: none;
          }


          /* CONTENT */

          .team-content {
            gap: 22px;

            padding-top: 25px;
          }


          .team-content-block {
            padding-bottom: 22px;
          }


          .team-content-title {
            font-size: 14px;

            line-height: 1.4;
          }


          .team-content-text {
            font-size: 12px;

            line-height: 1.65;
          }


          /* HIGHLIGHT */

          .team-highlight {
            display: block;

            padding:
              18px
              20px;

            margin-top: 28px;
          }


          .team-highlight-text {
            font-size: 14px;
          }


          .team-highlight-small {
            margin-top: 9px;

            font-size: 10px;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {

          .team-section {
            padding:
              45px
              16px;
          }


          .team-section-title {
            font-size: 13px;
          }


          .team-image-box {
            height: 240px;
          }


          .team-content-title {
            font-size: 14px;
          }


          .team-content-text {
            font-size: 12px;

            line-height: 1.6;
          }


          .team-highlight {
            padding:
              17px
              18px;
          }

        }

      `}</style>


      <div className="team-container">


        {/* ==========================================
            SECTION TITLE
        ========================================== */}

        <div className="team-section-title">
          People Behind The Process
        </div>


        {/* ==========================================
            TEAM IMAGE
        ========================================== */}

        <div className="team-image-box">

          <img
            src={teamImage}
            alt="Fairdeal Print Pack Team"
            className="team-main-image"
          />

          <div className="team-image-overlay" />

          <div className="team-image-reveal" />

        </div>


        {/* ==========================================
            CONTENT
        ========================================== */}

        <div className="team-content">


          {/* ========================================
              RESEARCH
          ======================================== */}

          <div className="team-content-block">

            <div className="team-content-line" />

            <h3 className="team-content-title">
              Research & Development
            </h3>

            <p className="team-content-text">
              A detailed checklist of the processes
              to be followed is developed with strong
              adherence during all stages of the job.
            </p>

            <p className="team-content-text">
              Printing starts only after definite
              groundwork and research on similar jobs
              executed in the past.
            </p>

          </div>


          {/* ========================================
              CUSTOMER
          ======================================== */}

          <div className="team-content-block">

            <div className="team-content-line" />

            <h3 className="team-content-title">
              Customer Understanding & Support
            </h3>

            <p className="team-content-text">
              We always keep our customer's requirements
              in sight, including budget, logistics,
              execution requirements and timelines.
            </p>

            <p className="team-content-text">
              This allows us to provide practical and
              tailor-made executions.
            </p>

          </div>


          {/* ========================================
              NEVER SAY NO
          ======================================== */}

          <div className="team-content-block">

            <div className="team-content-line" />

            <h3 className="team-content-title">
              Never Say No
            </h3>

            <p className="team-content-text">
              Our eagerness to experiment and try new
              approaches helps us take on challenging
              requirements.
            </p>

            <p className="team-content-text">
              Rewriting benchmarks and finding solutions
              is part of our everyday routine.
            </p>

          </div>

        </div>


        {/* ==========================================
            HIGHLIGHT
        ========================================== */}

        <div className="team-highlight">

          <p className="team-highlight-text">
            We believe in{" "}
            <span>
              people, teamwork and continuous improvement.
            </span>
          </p>

          <p className="team-highlight-small">
            FAIRDEAL PRINT PACK
          </p>

        </div>


      </div>

    </section>
  );
};

export default TeamSection;