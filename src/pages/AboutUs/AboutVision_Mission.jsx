import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import visionImage from "../../assets/images/about/vision.jpg";
import missionImage from "../../assets/images/about/mission.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutVision = () => {
  const sectionRef = useRef(null);
  const visionCardRef = useRef(null);
  const missionCardRef = useRef(null);

  const visionImageRef = useRef(null);
  const missionImageRef = useRef(null);

  const visionContentRef = useRef(null);
  const missionContentRef = useRef(null);

  const visionOrbitRef = useRef(null);
  const missionOrbitRef = useRef(null);

  const [isLightTheme, setIsLightTheme] = useState(false);

  /* =========================================================
     DETECT EXISTING DARK / LIGHT TOGGLE
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
     GSAP
  ========================================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      /* =====================================================
         VISION
      ===================================================== */

      const visionElements =
        visionContentRef.current.querySelectorAll(".vision-reveal");

      gsap.set(visionElements, {
        opacity: 0,
        y: 40,
      });

      gsap.set(visionCardRef.current, {
        opacity: 0,
        y: 100,
        rotate: 3,
      });

      gsap.set(visionImageRef.current, {
        scale: 1.15,
      });

      const visionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: visionCardRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      visionTimeline
        .to(visionCardRef.current, {
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 1.2,
          ease: "power4.out",
        })
        .to(
          visionElements,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.7"
        );

      /* Vision image zoom */

      gsap.to(visionImageRef.current, {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: visionCardRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      /* Vision floating movement */

      gsap.to(visionCardRef.current, {
        y: -55,
        rotate: -1,
        ease: "none",
        scrollTrigger: {
          trigger: visionCardRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      /* =====================================================
         MISSION
      ===================================================== */

      const missionElements =
        missionContentRef.current.querySelectorAll(".mission-reveal");

      gsap.set(missionElements, {
        opacity: 0,
        y: 40,
      });

      gsap.set(missionCardRef.current, {
        opacity: 0,
        y: 120,
        rotate: -3,
      });

      gsap.set(missionImageRef.current, {
        scale: 1.15,
      });

      const missionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: missionCardRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      missionTimeline
        .to(missionCardRef.current, {
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 1.25,
          ease: "power4.out",
        })
        .to(
          missionElements,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.7"
        );

      /* Mission image zoom */

      gsap.to(missionImageRef.current, {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: missionCardRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      /* Mission floating movement */

      gsap.to(missionCardRef.current, {
        y: -70,
        rotate: 1,
        ease: "none",
        scrollTrigger: {
          trigger: missionCardRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      /* =====================================================
         ORBITS
      ===================================================== */

      gsap.to(visionOrbitRef.current, {
        rotation: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });

      gsap.to(missionOrbitRef.current, {
        rotation: -360,
        duration: 22,
        repeat: -1,
        ease: "none",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`

        /* =====================================================
           ROOT
        ===================================================== */

        .fairdeal-company-sections {

          --bg: #05090B;
          --panel: #0C1419;
          --panel-two: #111B21;

          --yellow: #FFDF00;
          --mint: #8FE7C8;

          --white: #F5F7F8;
          --gray: #98A1B1;
          --muted: #66717E;

          --border:
            rgba(255,255,255,0.09);

          position: relative;

          width: 100%;

          overflow: hidden;

          background:
            var(--bg);

          color:
            var(--white);

          font-family:
            Inter,
            "Segoe UI",
            Arial,
            sans-serif;

        }


        /* =====================================================
           LIGHT MODE
        ===================================================== */

        .fairdeal-company-sections.light-mode {

          --bg: #F4F7F6;
          --panel: #FFFFFF;
          --panel-two: #EEF2F1;

          --yellow: #B49A00;
          --mint: #168B68;

          --white: #101518;
          --gray: #56616D;
          --muted: #7B858F;

          --border:
            rgba(5,9,11,0.10);

        }


        /* =====================================================
           BACKGROUND
        ===================================================== */

        .company-bg-glow {

          position: absolute;

          width: 700px;
          height: 700px;

          left: 50%;
          top: 40%;

          transform:
            translate(-50%, -50%);

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(255,223,0,0.045),
              rgba(143,231,200,0.025),
              transparent 70%
            );

          filter:
            blur(30px);

          pointer-events:
            none;

        }


        .company-grid {

          position: absolute;

          inset: 0;

          opacity:
            0.22;

          background-image:

            linear-gradient(
              rgba(255,255,255,0.025) 1px,
              transparent 1px
            ),

            linear-gradient(
              90deg,
              rgba(255,255,255,0.025) 1px,
              transparent 1px
            );

          background-size:
            100px 100px;

          pointer-events:
            none;

        }


        /* =====================================================
           SECTION WRAPPER
        ===================================================== */

        .company-inner {

          position: relative;

          z-index: 2;

          width:
            min(
              1180px,
              calc(100% - 80px)
            );

          margin:
            auto;

        }


        /* =====================================================
           COMMON CARD
        ===================================================== */

        .company-card {

          position: relative;

          min-height:
            560px;

          display:
            grid;

          grid-template-columns:
            48% 52%;

          border:
            1px solid
            var(--border);

          border-radius:
            30px;

          background:
            linear-gradient(
              135deg,
              var(--panel),
              var(--panel-two)
            );

          box-shadow:
            0 45px 110px
            rgba(0,0,0,0.45);

          overflow:
            visible;

          will-change:
            transform;

        }


        /* =====================================================
           CARD TOP LINE
        ===================================================== */

        .company-card::before {

          content:
            "";

          position:
            absolute;

          left:
            45px;

          right:
            45px;

          top:
            -1px;

          height:
            2px;

          background:
            linear-gradient(
              90deg,
              var(--yellow),
              var(--mint),
              transparent
            );

          z-index:
            10;

        }


        /* =====================================================
           CONTENT
        ===================================================== */

        .company-content {

          position:
            relative;

          z-index:
            4;

          padding:
            65px;

          display:
            flex;

          flex-direction:
            column;

          justify-content:
            center;

        }


        .company-label {

          display:
            flex;

          align-items:
            center;

          gap:
            12px;

          margin-bottom:
            27px;

          color:
            var(--mint);

          font-size:
            10px;

          font-weight:
            800;

          letter-spacing:
            0.24em;

          text-transform:
            uppercase;

        }


        .company-label-number {

          color:
            var(--yellow);

        }


        .company-label-line {

          width:
            38px;

          height:
            1px;

          background:
            var(--yellow);

        }


        /* =====================================================
           TITLE
        ===================================================== */

        .company-title {

          margin:
            0;

          font-size:
            clamp(
              55px,
              6vw,
              88px
            );

          line-height:
            0.88;

          letter-spacing:
            -0.065em;

          font-weight:
            650;

        }


        .company-title-white {

          color:
            var(--white);

        }


        .company-title-mint {

          color:
            var(--mint);

        }


        .company-title-yellow {

          color:
            var(--yellow);

        }


        /* =====================================================
           TEXT
        ===================================================== */

        .company-description {

          max-width:
            520px;

          margin-top:
            30px;

          color:
            var(--gray);

          font-size:
            15px;

          line-height:
            1.8;

        }


        /* =====================================================
           HIGHLIGHT
        ===================================================== */

        .company-highlight {

          position:
            relative;

          margin-top:
            25px;

          padding-left:
            20px;

          color:
            var(--yellow);

          font-size:
            17px;

          font-weight:
            700;

          line-height:
            1.5;

        }


        .company-highlight::before {

          content:
            "";

          position:
            absolute;

          left:
            0;

          top:
            2px;

          bottom:
            2px;

          width:
            3px;

          background:
            var(--yellow);

          border-radius:
            4px;

        }


        /* =====================================================
           VALUES
        ===================================================== */

        .company-values {

          display:
            grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap:
            15px 25px;

          margin-top:
            35px;

        }


        .company-value {

          display:
            flex;

          align-items:
            center;

          gap:
            10px;

          color:
            var(--gray);

          font-size:
            10px;

          font-weight:
            800;

          letter-spacing:
            0.11em;

          text-transform:
            uppercase;

        }


        .company-dot {

          width:
            8px;

          height:
            8px;

          flex-shrink:
            0;

          border-radius:
            50%;

          background:
            var(--yellow);

          box-shadow:
            0 0 14px
            rgba(255,223,0,0.35);

        }


        .company-value:nth-child(even)
        .company-dot {

          background:
            var(--mint);

          box-shadow:
            0 0 14px
            rgba(143,231,200,0.35);

        }


        /* =====================================================
           IMAGE
        ===================================================== */

        .company-image-area {

          position:
            relative;

          min-height:
            560px;

          padding:
            22px;

        }


        .company-image-frame {

          position:
            relative;

          width:
            100%;

          height:
            100%;

          overflow:
            hidden;

          background:
            #080D10;

          border-radius:
            0 27px 27px 0;

        }


        .company-image {

          width:
            100%;

          height:
            100%;

          display:
            block;

          object-fit:
            cover;

          transform:
            scale(1.15);

          filter:
            saturate(0.8)
            contrast(1.08);

          will-change:
            transform;

        }


        .company-image-overlay {

          position:
            absolute;

          inset:
            0;

          background:
            linear-gradient(
              90deg,
              rgba(5,9,11,0.68),
              transparent 50%
            ),
            linear-gradient(
              0deg,
              rgba(5,9,11,0.35),
              transparent
            );

        }


        /* =====================================================
           CORNER
        ===================================================== */

        .company-corner {

          position:
            absolute;

          right:
            28px;

          top:
            28px;

          width:
            55px;

          height:
            55px;

          border-top:
            2px solid
            var(--yellow);

          border-right:
            2px solid
            var(--yellow);

        }


        /* =====================================================
           ORBIT
        ===================================================== */

        .company-orbit {

          position:
            absolute;

          z-index:
            10;

          right:
            -35px;

          bottom:
            55px;

          width:
            125px;

          height:
            125px;

          border:
            1px dashed
            var(--mint);

          border-radius:
            50%;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          background:
            rgba(5,9,11,0.65);

          backdrop-filter:
            blur(12px);

        }


        .company-orbit::before {

          content:
            "";

          width:
            58px;

          height:
            58px;

          border:
            1px solid
            var(--yellow);

          border-radius:
            50%;

        }


        .company-orbit-dot {

          position:
            absolute;

          right:
            17px;

          top:
            12px;

          width:
            7px;

          height:
            7px;

          border-radius:
            50%;

          background:
            var(--yellow);

          box-shadow:
            0 0 15px
            var(--yellow);

        }


        /* =====================================================
           LARGE NUMBER
        ===================================================== */

        .company-number {

          position:
            absolute;

          left:
            -20px;

          bottom:
            25px;

          z-index:
            8;

          color:
            rgba(255,255,255,0.055);

          font-size:
            115px;

          font-weight:
            800;

          line-height:
            0.8;

          letter-spacing:
            -0.08em;

        }


        /* =====================================================
           SMALL IMAGE LABEL
        ===================================================== */

        .company-image-label {

          position:
            absolute;

          top:
            30px;

          right:
            30px;

          z-index:
            8;

          padding:
            9px 14px;

          border:
            1px solid
            rgba(143,231,200,0.25);

          border-radius:
            50px;

          background:
            rgba(5,9,11,0.62);

          backdrop-filter:
            blur(12px);

          color:
            var(--mint);

          font-size:
            8px;

          font-weight:
            800;

          letter-spacing:
            0.18em;

          text-transform:
            uppercase;

        }


        /* =====================================================
           MISSION CARD
           ===================================================== */

        .mission-card {

          margin-top: 10px; 
          margin-bottom: 50px;

          grid-template-columns:
            52% 48%;

        }


        .mission-card .company-image-frame {

          border-radius:
            27px 0 0 27px;

        }


        .mission-card .company-image-area {

          order:
            1;

        }


        .mission-card .company-content {

          order:
            2;

          padding-left:
            55px;

        }


        .mission-card::before {

          background:
            linear-gradient(
              90deg,
              var(--mint),
              var(--yellow),
              transparent
            );

        }


        .mission-card .company-orbit {

          left:
            -35px;

          right:
            auto;

        }


        .mission-card .company-number {

          left:
            auto;

          right:
            -20px;

        }


        /* =====================================================
           MISSION SPECIAL ELEMENT
        ===================================================== */

        .mission-statement {

          display:
            inline-flex;

          align-items:
            center;

          gap:
            12px;

          margin-top:
            30px;

          color:
            var(--mint);

          font-size:
            11px;

          font-weight:
            800;

          letter-spacing:
            0.17em;

          text-transform:
            uppercase;

        }


        .mission-statement-line {

          width:
            40px;

          height:
            2px;

          background:
            var(--yellow);

        }


        /* =====================================================
           MISSION FEATURE BOXES
        ===================================================== */

        .mission-points {

          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            10px;

          margin-top:
            35px;

        }


        .mission-point {

          padding:
            11px 15px;

          border:
            1px solid
            var(--border);

          border-radius:
            50px;

          color:
            var(--gray);

          font-size:
            9px;

          font-weight:
            800;

          letter-spacing:
            0.12em;

          text-transform:
            uppercase;

          transition:
            0.3s ease;

        }


        .mission-point:hover {

          border-color:
            var(--yellow);

          color:
            var(--yellow);

          transform:
            translateY(-3px);

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 1000px) {

          .company-inner {

            width:
              min(
                calc(100% - 40px),
                720px
              );

          }


          .company-card {

            grid-template-columns:
              1fr;

          }


          .company-content {

            padding:
              55px 45px;

          }


          .company-image-area {

            min-height:
              430px;

          }


          .company-image-frame {

            border-radius:
              0 0 27px 27px !important;

          }


          .mission-card {

            margin-top:
              120px;

          }


          .mission-card .company-image-area {

            order:
              1;

          }


          .mission-card .company-content {

            order:
              2;

            padding:
              55px 45px;

          }


          .company-number {

            display:
              none;

          }


          .company-orbit {

            right:
              20px;

          }


          .mission-card .company-orbit {

            left:
              auto;

            right:
              20px;

          }

        }


        @media (max-width: 600px) {

          .company-inner {

            width:
              calc(100% - 24px);

            padding:
              80px 0;

          }


          .company-card {

            min-height:
              auto;

            border-radius:
              22px;

          }


          .company-content {

            padding:
              40px 25px;

          }


          .company-title {

            font-size:
              57px;

          }


          .company-description {

            font-size:
              14px;

          }


          .company-highlight {

            font-size:
              15px;

          }


          .company-values {

            grid-template-columns:
              1fr;

          }


          .company-image-area {

            min-height:
              320px;

            padding:
              12px;

          }


          .company-image-frame {

            border-radius:
              18px !important;

          }


          .company-image-label {

            top:
              20px;

            right:
              20px;

          }


          .company-orbit {

            width:
              90px;

            height:
              90px;

            bottom:
              25px;

            right:
              5px;

          }


          .mission-card {

            margin-top:
              90px;

          }


          .mission-card .company-content {

            padding:
              40px 25px;

          }


          .mission-points {

            gap:
              7px;

          }


          .mission-point {

            font-size:
              8px;

            padding:
              9px 12px;

          }

        }

      `}</style>

      <section
        ref={sectionRef}
        className={`fairdeal-company-sections ${
          isLightTheme ? "light-mode" : ""
        }`}
      >
        <div className="company-bg-glow" />

        <div className="company-grid" />

        <div className="company-inner">
          {/* =================================================
              VISION
          ================================================= */}

          <div ref={visionCardRef} className="company-card vision-card">
            {/* CONTENT */}

            <div ref={visionContentRef} className="company-content">
              <div className="vision-reveal company-label">
                <span className="company-label-number">01</span>

                <div className="company-label-line" />

                <span>VISION</span>
              </div>

              <h2 className="vision-reveal company-title">
                <span className="company-title-white">Our</span>

                <br />

                <span className="company-title-mint">Vision</span>
              </h2>

              <p className="vision-reveal company-description">
                Customer satisfaction and employee empowerment in tandem with
                innovation and excellence, to work together with our customers
                to help them achieve their goals.
              </p>

              <div className="vision-reveal company-highlight">
                Our success lies in your success.
              </div>

              <p className="vision-reveal company-description">
                Honesty, integrity, dedication and commitment will always be our
                priority and trademark. Dignity and respect are our guiding
                principles in every deal with customers and suppliers.
              </p>

              <div className="vision-reveal company-values">
                <div className="company-value">
                  <span className="company-dot" />
                  Customer Satisfaction
                </div>

                <div className="company-value">
                  <span className="company-dot" />
                  Innovation
                </div>

                <div className="company-value">
                  <span className="company-dot" />
                  Integrity
                </div>

                <div className="company-value">
                  <span className="company-dot" />
                  Commitment
                </div>
              </div>
            </div>

            {/* IMAGE */}

            <div className="company-image-area">
              <div className="company-image-frame">
                <img
                  ref={visionImageRef}
                  className="company-image"
                  src={visionImage}
                  alt="Fairdeal printing vision"
                />

                <div className="company-image-overlay" />

                <div className="company-corner" />

                <div className="company-image-label">FAIRDEAL / VISION</div>
              </div>

              <div ref={visionOrbitRef} className="company-orbit">
                <div className="company-orbit-dot" />
              </div>

              <div className="company-number">01</div>
            </div>
          </div>

          {/* =================================================
              MISSION
          ================================================= */}

          <div ref={missionCardRef} className="company-card mission-card">
            {/* IMAGE FIRST */}

            <div className="company-image-area">
              <div className="company-image-frame">
                <img
                  ref={missionImageRef}
                  className="company-image"
                  src={missionImage}
                  alt="Fairdeal printing mission"
                />

                <div className="company-image-overlay" />

                <div className="company-corner" />

                <div className="company-image-label">FAIRDEAL / MISSION</div>
              </div>

              <div ref={missionOrbitRef} className="company-orbit">
                <div className="company-orbit-dot" />
              </div>

              <div className="company-number">02</div>
            </div>

            {/* MISSION CONTENT */}

            <div ref={missionContentRef} className="company-content">
              <div className="mission-reveal company-label">
                <span className="company-label-number">02</span>

                <div className="company-label-line" />

                <span>MISSION</span>
              </div>

              <h2 className="mission-reveal company-title">
                <span className="company-title-white">Our</span>

                <br />

                <span className="company-title-yellow">Mission</span>
              </h2>

              <p className="mission-reveal company-description">
                To provide exceptional printing service by pursuing business
                through innovation and creativity that exceeds the expectations
                of our esteemed customers.
              </p>

              <div className="mission-reveal mission-statement">
                <span className="mission-statement-line" />
                QUALITY • INNOVATION • SERVICE
              </div>

              <div className="mission-reveal mission-points">
                <span className="mission-point">Exceptional Service</span>

                <span className="mission-point">Innovation</span>

                <span className="mission-point">Creativity</span>

                <span className="mission-point">Customer Focus</span>
              </div>

              <div className="mission-reveal company-highlight">
                Exceeding expectations through innovation and creativity.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutVision;
// import React from "react";

// const AboutVision = () => {
//   return (
//     <section className="about-vision">
//       <span className="section-label">01 — VISION</span>

//       <h2>Our Vision</h2>

//       <p>
//         Customer satisfaction and employee empowerment in tandem with innovation
//         and excellence, to work together with our customers to help them achieve
//         their goals.
//       </p>

//       <p>
//         <strong>Our success lies in your success.</strong>
//       </p>

//       <p>
//         Honesty, integrity, dedication and commitment will always be our
//         priority and trademark. Dignity and respect are our guiding principles
//         in every deal with customers and suppliers.
//       </p>
//     </section>
//   );
// };

// export default AboutVision;
