import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GoalImage from "../../assets/images/about/goal.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutGoal = () => {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const imageWrapRef = useRef(null);
  const badgeRef = useRef(null);
  const featuresRef = useRef(null);
  const orbitRef = useRef(null);

  const [isLightTheme, setIsLightTheme] = useState(() => {
    if (typeof document === "undefined") return false;

    return (
      document.documentElement.getAttribute("data-theme") === "light" ||
      document.documentElement.classList.contains("light")
    );
  });

  /* =========================================================
     DETECT EXISTING NAVBAR THEME
  ========================================================= */

  useEffect(() => {
    const html = document.documentElement;

    const updateTheme = () => {
      const light =
        html.getAttribute("data-theme") === "light" ||
        html.classList.contains("light");

      setIsLightTheme(light);
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(html, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  /* =========================================================
     GSAP ANIMATIONS
  ========================================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const titleWords = titleRef.current.querySelectorAll(".goal-word");

      const featureItems =
        featuresRef.current.querySelectorAll(".goal-feature");

      gsap.set(titleWords, {
        y: 80,
        opacity: 0,
        rotateX: -70,
      });

      gsap.set(
        [
          labelRef.current,
          textRef.current,
          imageWrapRef.current,
          badgeRef.current,
          featuresRef.current,
        ],
        {
          opacity: 0,
        }
      );

      gsap.set(labelRef.current, {
        x: -30,
      });

      gsap.set(textRef.current, {
        y: 30,
      });

      gsap.set(imageWrapRef.current, {
        x: 100,
        scale: 0.82,
        rotate: 5,
      });

      gsap.set(badgeRef.current, {
        scale: 0.6,
        rotate: -10,
      });

      gsap.set(featureItems, {
        y: 25,
        opacity: 0,
      });

      /* =====================================================
         MAIN REVEAL
      ===================================================== */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(labelRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power3.out",
      })

        .to(
          titleWords,
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.85,
            stagger: 0.07,
            ease: "power4.out",
          },
          "-=0.2"
        )

        .to(
          textRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.35"
        )

        .to(
          imageWrapRef.current,
          {
            x: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 1.3,
            ease: "expo.out",
          },
          "-=0.9"
        )

        .to(
          badgeRef.current,
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.65"
        )

        .to(
          featuresRef.current,
          {
            opacity: 1,
            duration: 0.2,
          },
          "-=0.3"
        )

        .to(
          featureItems,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.1"
        );

      /* =====================================================
         IMAGE FLOAT
      ===================================================== */

      gsap.to(imageWrapRef.current, {
        y: -12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         ORBIT ROTATION
      ===================================================== */

      gsap.to(orbitRef.current, {
        rotation: 360,
        duration: 24,
        repeat: -1,
        ease: "none",
      });

      /* =====================================================
         BADGE FLOAT
      ===================================================== */

      gsap.to(badgeRef.current, {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         SCROLL PARALLAX
      ===================================================== */

      gsap.to(imageWrapRef.current, {
        y: -90,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      /* =====================================================
         MOUSE PARALLAX
      ===================================================== */

      const handleMouseMove = (event) => {
        const rect = section.getBoundingClientRect();

        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;

        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

        gsap.to(imageWrapRef.current, {
          x: x * 12,
          y: y * 8,
          duration: 1,
          ease: "power3.out",
        });

        gsap.to(badgeRef.current, {
          x: x * -8,
          y: y * -5,
          duration: 1.2,
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

  const titleWords = ["Our", "Goal"];

  return (
    <>
      <style>{`

        /* =====================================================
           MAIN
        ===================================================== */

        .fairdeal-goal {

          --goal-bg: #05090B;
          --goal-panel: #0C1419;
          --goal-panel-2: #111B21;

          --goal-yellow: #FFDF00;
          --goal-mint: #8FE7C8;

          --goal-white: #F5F7F8;
          --goal-gray: #98A1B1;
          --goal-muted: #66717E;

          --goal-border:
            rgba(255,255,255,0.08);

          position: relative;

          width: 100%;

          min-height: 100vh;

          overflow: hidden;

          background:
            var(--goal-bg);

          color:
            var(--goal-white);

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

        .fairdeal-goal.light-mode {

          --goal-bg: #F5F7F8;
          --goal-panel: #FFFFFF;
          --goal-panel-2: #EEF2F1;

          --goal-yellow: #C9AE00;
          --goal-mint: #128C68;

          --goal-white: #101518;
          --goal-gray: #56616D;
          --goal-muted: #7B858F;

          --goal-border:
            rgba(5,9,11,0.09);

        }


        /* =====================================================
           BACKGROUND GLOW
        ===================================================== */

        .goal-bg-glow {

          position: absolute;

          width: 500px;

          height: 500px;

          right: 8%;

          top: 50%;

          transform:
            translateY(-50%);

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(255,223,0,0.07),
              rgba(143,231,200,0.025),
              transparent 70%
            );

          filter:
            blur(30px);

          pointer-events:
            none;

        }


        .goal-grid {

          position: absolute;

          inset: 0;

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
            90px 90px;

          opacity:
            0.35;

          pointer-events:
            none;

        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .goal-container {

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
            auto;

          display:
            grid;

          grid-template-columns:
            48% 52%;

          align-items:
            center;

          gap:
            30px;

          padding:
            90px 0;

        }


        /* =====================================================
           LEFT
        ===================================================== */

        .goal-content {

          max-width:
            650px;

        }


        /* =====================================================
           LABEL
        ===================================================== */

        .goal-label {

          display:
            flex;

          align-items:
            center;

          gap:
            12px;

          margin-bottom:
            28px;

          color:
            var(--goal-mint);

          font-size:
            11px;

          font-weight:
            800;

          letter-spacing:
            0.24em;

          text-transform:
            uppercase;

        }


        .goal-label-line {

          width:
            42px;

          height:
            2px;

          background:
            var(--goal-yellow);

        }


        .goal-number {

          color:
            var(--goal-yellow);

        }


        /* =====================================================
           TITLE
        ===================================================== */

        .goal-title {

          margin:
            0;

          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            0.18em;

          font-size:
            clamp(2.25rem, 4.7vw, 4.4rem);

          line-height:
            0.86;

          letter-spacing:
            -0.065em;

          font-weight:
            650;

          perspective:
            1000px;

        }


        .goal-word {

          display:
            inline-block;

          transform-origin:
            center bottom;

          will-change:
            transform,
            opacity;

        }


        .goal-word:nth-child(1) {

          color:
            var(--goal-white);

        }


        .goal-word:nth-child(2) {

          color:
            var(--goal-mint);

        }


        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .goal-description {

          max-width:
            620px;

          margin-top:
            40px;

          color:
            var(--goal-gray);

          font-size:
            18px;

          line-height:
            1.75;

          letter-spacing:
            -0.015em;

        }


        .goal-description strong {

          color:
            var(--goal-white);

        }


        /* =====================================================
           UNDERLINE
        ===================================================== */

        .goal-line {

          display:
            flex;

          align-items:
            center;

          width:
            290px;

          height:
            3px;

          margin-top:
            42px;

          background:
            rgba(
              255,
              255,
              255,
              0.08
            );

        }


        .goal-line-yellow {

          width:
            55px;

          height:
            100%;

          background:
            var(--goal-yellow);

        }


        .goal-line-mint {

          width:
            70px;

          height:
            100%;

          background:
            var(--goal-mint);

        }


        /* =====================================================
           FEATURES
        ===================================================== */

        .goal-features {

          display:
            flex;

          align-items:
            center;

          margin-top:
            45px;

        }


        .goal-feature {

          min-width:
            125px;

          padding:
            0 25px;

          text-align:
            center;

        }


        .goal-feature:first-child {

          padding-left:
            0;

        }


        .goal-feature:not(:last-child) {

          border-right:
            1px solid
            var(--goal-border);

        }


        .goal-feature-icon {

          width:
            50px;

          height:
            50px;

          margin:
            0 auto 14px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          border:
            1px solid
            var(--goal-border);

          border-radius:
            50%;

          color:
            var(--goal-yellow);

          font-size:
            19px;

          transition:
            transform 0.35s ease,
            border-color 0.35s ease;

        }


        .goal-feature:nth-child(2)
        .goal-feature-icon {

          color:
            var(--goal-mint);

        }


        .goal-feature:hover
        .goal-feature-icon {

          transform:
            translateY(-5px)
            rotate(8deg);

          border-color:
            var(--goal-yellow);

        }


        .goal-feature-title {

          color:
            var(--goal-white);

          font-size:
            10px;

          font-weight:
            800;

          letter-spacing:
            0.18em;

          text-transform:
            uppercase;

        }


        /* =====================================================
           RIGHT VISUAL
        ===================================================== */

        .goal-visual {

          position:
            relative;

          min-height:
            620px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

        }


        /* =====================================================
           IMAGE COMPOSITION
        ===================================================== */

        .goal-image-wrap {

          position:
            relative;

          width:
            min(
              560px,
              100%
            );

          height:
            440px;

          transform:
            rotate(-3deg);

          will-change:
            transform;

        }


        .goal-image-back {

          position:
            absolute;

          width:
            82%;

          height:
            100%;

          right:
            0;

          top:
            25px;

          border-radius:
            28px;

          background:
            var(--goal-yellow);

          transform:
            rotate(2deg);

          box-shadow:
            0 30px 80px
            rgba(255,223,0,0.12);

        }


        .goal-image {

          position:
            relative;

          z-index:
            2;

          width:
            86%;

          height:
            100%;

          margin-left:
            4%;

          overflow:
            hidden;

          border-radius:
            28px;

          border:
            1px solid
            rgba(
              255,
              223,
              0,
              0.55
            );

          background:
            var(--goal-panel);

          box-shadow:
            0 35px 90px
            rgba(0,0,0,0.4);

        }


        .goal-image img {

          width:
            100%;

          height:
            100%;

          object-fit:
            cover;

          display:
            block;

          transform:
            scale(1.06);

          filter:
            saturate(0.9)
            contrast(1.05);

          transition:
            transform 0.8s ease;

        }


        .goal-image-wrap:hover
        .goal-image img {

          transform:
            scale(1.12);

        }


        .goal-image-overlay {

          position:
            absolute;

          inset:
            0;

          z-index:
            3;

          background:
            linear-gradient(
              135deg,
              rgba(5,9,11,0.05),
              rgba(5,9,11,0.25)
            );

          pointer-events:
            none;

        }


        /* =====================================================
           BADGE
        ===================================================== */

        .goal-badge {

          position:
            absolute;

          z-index:
            5;

          right:
            -10px;

          bottom:
            -35px;

          width:
            220px;

          min-height:
            175px;

          padding:
            25px;

          display:
            flex;

          flex-direction:
            column;

          justify-content:
            center;

          border:
            1px solid
            var(--goal-border);

          border-radius:
            22px;

          background:
            rgba(
              12,
              20,
              25,
              0.92
            );

          backdrop-filter:
            blur(18px);

          box-shadow:
            0 30px 70px
            rgba(0,0,0,0.4);

        }


        .light-mode
        .goal-badge {

          background:
            rgba(
              255,
              255,
              255,
              0.94
            );

        }


        .goal-target {

          width:
            48px;

          height:
            48px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          border-radius:
            50%;

          color:
            var(--goal-yellow);

          border:
            1px solid
            var(--goal-yellow);

          font-size:
            23px;

          margin-bottom:
            15px;

        }


        .goal-badge-small {

          color:
            var(--goal-muted);

          font-size:
            9px;

          font-weight:
            800;

          letter-spacing:
            0.25em;

          text-transform:
            uppercase;

        }


        .goal-badge-title {

          margin-top:
            5px;

          color:
            var(--goal-white);

          font-size:
            14px;

          font-weight:
            800;

          letter-spacing:
            0.14em;

          line-height:
            1.5;

          text-transform:
            uppercase;

        }


        .goal-badge-title span {

          color:
            var(--goal-mint);

        }


        /* =====================================================
           ORBIT
        ===================================================== */

        .goal-orbit {

          position:
            absolute;

          width:
            580px;

          height:
            580px;

          border:
            1px solid
            rgba(
              143,
              231,
              200,
              0.12
            );

          border-radius:
            50%;

          pointer-events:
            none;

        }


        .goal-orbit::before {

          content:
            "";

          position:
            absolute;

          inset:
            35px;

          border:
            1px dashed
            rgba(
              255,
              223,
              0,
              0.10
            );

          border-radius:
            50%;

        }


        .goal-orbit::after {

          content:
            "";

          position:
            absolute;

          width:
            8px;

          height:
            8px;

          top:
            13%;

          right:
            19%;

          border-radius:
            50%;

          background:
            var(--goal-yellow);

          box-shadow:
            0 0 20px
            var(--goal-yellow);

        }


        /* =====================================================
           BRAND LABEL
        ===================================================== */

        .goal-brand {

          position:
            absolute;

          right:
            30px;

          bottom:
            20px;

          display:
            flex;

          align-items:
            center;

          gap:
            14px;

          color:
            var(--goal-mint);

          font-size:
            9px;

          font-weight:
            800;

          letter-spacing:
            0.28em;

          text-transform:
            uppercase;

        }


        .goal-brand::before {

          content:
            "";

          width:
            60px;

          height:
            2px;

          background:
            var(--goal-yellow);

        }


        /* =====================================================
           LIGHT MODE IMAGE
        ===================================================== */

        .fairdeal-goal.light-mode
        .goal-image-back {

          opacity:
            0.8;

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1050px) {

          .goal-container {

            width:
              min(
                calc(100% - 60px),
                850px
              );

            grid-template-columns:
              1fr;

            text-align:
              center;

          }


          .goal-content {

            margin:
              auto;

          }


          .goal-label {

            justify-content:
              center;

          }


          .goal-description {

            margin-left:
              auto;

            margin-right:
              auto;

          }


          .goal-line {

            margin-left:
              auto;

            margin-right:
              auto;

          }


          .goal-features {

            justify-content:
              center;

          }


          .goal-visual {

            min-height:
              550px;

          }


          .goal-orbit {

            width:
              500px;

            height:
              500px;

          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .goal-container {

            width:
              calc(100% - 36px);

            padding:
              75px 0;

          }


          .goal-label {

            font-size:
              9px;

          }


          .goal-title {

            font-size:
              60px;

            justify-content:
              center;

          }


          .goal-description {

            font-size:
              14px;

            line-height:
              1.75;

            margin-top:
              28px;

          }


          .goal-features {

            flex-wrap:
              wrap;

            gap:
              10px;

          }


          .goal-feature {

            min-width:
              95px;

            padding:
              0 14px;

          }


          .goal-feature-title {

            font-size:
              8px;

          }


          .goal-visual {

            min-height:
              430px;

          }


          .goal-image-wrap {

            width:
              100%;

            height:
              300px;

          }


          .goal-image-back {

            border-radius:
              20px;

          }


          .goal-image {

            border-radius:
              20px;

          }


          .goal-badge {

            right:
              -5px;

            bottom:
              -40px;

            width:
              170px;

            min-height:
              140px;

            padding:
              18px;

          }


          .goal-target {

            width:
              38px;

            height:
              38px;

            font-size:
              18px;

          }


          .goal-badge-title {

            font-size:
              10px;

          }


          .goal-orbit {

            width:
              350px;

            height:
              350px;

          }


          .goal-brand {

            right:
              0;

            bottom:
              0;

            font-size:
              7px;

          }


          .goal-brand::before {

            width:
              35px;

          }

        }

      `}</style>

      <section
        ref={sectionRef}
        className={`fairdeal-goal ${isLightTheme ? "light-mode" : ""}`}
      >
        <div className="goal-bg-glow" />

        <div className="goal-grid" />

        <div className="goal-container">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="goal-content">
            <div ref={labelRef} className="goal-label">
              <span className="goal-label-line" />

              <span className="goal-number">04</span>

              <span>—</span>

              <span>THE GOAL</span>
            </div>

            <h2 ref={titleRef} className="goal-title">
              {titleWords.map((word, index) => (
                <span key={index} className="goal-word">
                  {word}
                </span>
              ))}
            </h2>

            <p ref={textRef} className="goal-description">
              Delighted customers are key to our success, and we strive to
              achieve this key every second.
              <br />
              <br />
              Printing is our passion. No matter what your print need is,{" "}
              <strong>Fairdeal Print Pack India Pvt. Ltd.</strong> has the most
              effective print solutions.
            </p>

            <div className="goal-line">
              <span className="goal-line-yellow" />

              <span className="goal-line-mint" />
            </div>

            {/* FEATURES */}

            <div ref={featuresRef} className="goal-features">
              <div className="goal-feature">
                <div className="goal-feature-icon">✦</div>

                <div className="goal-feature-title">Customer</div>
              </div>

              <div className="goal-feature">
                <div className="goal-feature-icon">◇</div>

                <div className="goal-feature-title">Quality</div>
              </div>

              <div className="goal-feature">
                <div className="goal-feature-icon">◎</div>

                <div className="goal-feature-title">Solutions</div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <div className="goal-visual">
            <div ref={orbitRef} className="goal-orbit" />

            <div ref={imageWrapRef} className="goal-image-wrap">
              <div className="goal-image-back" />

              <div className="goal-image">
                <img
                  ref={imageRef}
                  src={GoalImage}
                  alt="Printing production"
                />

                <div className="goal-image-overlay" />
              </div>

              {/* BADGE */}

              <div ref={badgeRef} className="goal-badge">
                <div className="goal-target">◎</div>

                <div className="goal-badge-small">Our Goal</div>

                <div className="goal-badge-title">
                  Experience <br/>
                  <span>Quality</span><br/>
                  Commitment
                </div>
              </div>
            </div>

            <div className="goal-brand">FAIRDEAL PRINT PACK</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutGoal;
