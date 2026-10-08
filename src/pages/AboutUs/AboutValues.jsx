import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutValues = () => {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef(null);
  const quoteRef = useRef(null);
  const plusRefs = useRef([]);

  const [isLightTheme, setIsLightTheme] = useState(() => {
    if (typeof document === "undefined") return false;

    return (
      document.documentElement.getAttribute("data-theme") === "light" ||
      document.documentElement.classList.contains("light")
    );
  });

  /* =========================================================
     THEME DETECTION
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
     GSAP
  ========================================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.querySelectorAll(".values-card");

      const titleWords = titleRef.current.querySelectorAll(".values-word");

      /* INITIAL STATES */

      gsap.set(numberRef.current, {
        opacity: 0,
        scale: 0.75,
        x: -80,
      });

      gsap.set(labelRef.current, {
        opacity: 0,
        x: -30,
      });

      gsap.set(titleWords, {
        opacity: 0,
        y: 80,
        rotateX: -75,
      });

      gsap.set(textRef.current, {
        opacity: 0,
        y: 35,
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(cards, {
        opacity: 0,
        y: 70,
        rotateY: 12,
      });

      gsap.set(quoteRef.current, {
        opacity: 0,
        y: 40,
      });

      gsap.set(plusRefs.current, {
        opacity: 0,
        scale: 0,
        rotation: -90,
      });

      /* =====================================================
         MAIN TIMELINE
      ===================================================== */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(numberRef.current, {
        opacity: 0.08,
        scale: 1,
        x: 0,
        duration: 1,
        ease: "expo.out",
      })

        .to(
          labelRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.65"
        )

        .to(
          titleWords,
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power4.out",
          },
          "-=0.25"
        )

        .to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.35"
        )

        .to(
          lineRef.current,
          {
            scaleX: 1,
            duration: 1,
            ease: "expo.out",
          },
          "-=0.25"
        )

        .to(
          cards,
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.8,
            stagger: 0.13,
            ease: "power4.out",
          },
          "-=0.5"
        )

        .to(
          plusRefs.current,
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "back.out(2)",
          },
          "-=0.5"
        )

        .to(
          quoteRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.35"
        );

      /* =====================================================
         LARGE NUMBER FLOAT
      ===================================================== */

      gsap.to(numberRef.current, {
        y: -25,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         PLUS ROTATION
      ===================================================== */

      plusRefs.current.forEach((item, index) => {
        gsap.to(item, {
          rotation: index % 2 === 0 ? 180 : -180,
          duration: 8 + index,
          repeat: -1,
          ease: "none",
        });
      });

      /* =====================================================
         SCROLL PARALLAX
      ===================================================== */

      gsap.to(numberRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(cardsRef.current, {
        y: -45,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      /* =====================================================
         MOUSE MOVEMENT
      ===================================================== */

      const handleMouseMove = (event) => {
        const rect = section.getBoundingClientRect();

        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;

        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

        gsap.to(".values-content", {
          x: x * 5,
          y: y * 3,
          duration: 1,
          ease: "power3.out",
        });

        gsap.to(".values-number", {
          x: x * -10,
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

  const values = [
    {
      number: "01",
      title: "Respect",
      text: "We treat our customers, employees and business partners with respect, dignity and professionalism.",
      icon: "↗",
    },
    {
      number: "02",
      title: "Honesty",
      text: "Honesty and transparency guide the way we communicate, work and build lasting relationships.",
      icon: "◇",
    },
    {
      number: "03",
      title: "Integrity",
      text: "We maintain strong ethical standards and remain committed to doing the right thing in every situation.",
      icon: "◎",
    },
    {
      number: "04",
      title: "Business Ethics",
      text: "We integrate responsible business ethics into every aspect of our operations and customer relationships.",
      icon: "✦",
    },
  ];

  return (
    <>
      <style>{`

        /* =====================================================
           ROOT
        ===================================================== */

        .fairdeal-values {

          --values-bg: #05090B;
          --values-panel: #0C1419;
          --values-panel-2: #111B21;

          --values-yellow: #FFDF00;
          --values-mint: #8FE7C8;

          --values-white: #F5F7F8;
          --values-gray: #98A1B1;
          --values-muted: #66717E;

          --values-border:
            rgba(255,255,255,0.09);

          position: relative;

          width: 100%;

          min-height: 100vh;

          overflow: hidden;

          background:
            var(--values-bg);

          color:
            var(--values-white);

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
           LIGHT MODE
        ===================================================== */

        .fairdeal-values.light-mode {

          --values-bg: #F5F7F8;
          --values-panel: #FFFFFF;
          --values-panel-2: #EEF2F1;

          --values-yellow: #C9AE00;
          --values-mint: #128C68;

          --values-white: #101518;
          --values-gray: #56616D;
          --values-muted: #7B858F;

          --values-border:
            rgba(5,9,11,0.10);

        }


        /* =====================================================
           BACKGROUND
        ===================================================== */

        .values-grid {

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
            100px 100px;

          opacity:
            0.35;

          pointer-events:
            none;

        }


        .values-glow {

          position: absolute;

          width: 650px;

          height: 650px;

          left: -220px;

          top: 50%;

          transform:
            translateY(-50%);

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(143,231,200,0.08),
              rgba(255,223,0,0.035),
              transparent 70%
            );

          filter:
            blur(45px);

          pointer-events:
            none;

        }


        /* =====================================================
           HUGE 03
        ===================================================== */

        .values-number {

          position: absolute;

          left: -20px;

          top: 50%;

          transform:
            translateY(-50%);

          font-size:
            clamp(
              300px,
              42vw,
              650px
            );

          line-height:
            0.7;

          font-weight:
            800;

          letter-spacing:
            -0.09em;

          color:
            var(--values-mint);

          opacity:
            0;

          pointer-events:
            none;

          user-select:
            none;

        }


        /* =====================================================
           MAIN CONTAINER
        ===================================================== */

        .values-container {

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

          padding:
            50px 0 10px;

        }


        /* =====================================================
           TOP CONTENT
        ===================================================== */

        .values-content {

          position: relative;

          max-width:
            850px;

        }


        /* =====================================================
           LABEL
        ===================================================== */

        .values-label {

          display:
            flex;

          align-items:
            center;

          gap:
            12px;

          margin-bottom:
            25px;

          color:
            var(--values-mint);

          font-size:
            11px;

          font-weight:
            800;

          letter-spacing:
            0.25em;

          text-transform:
            uppercase;

        }


        .values-label-line {

          width:
            45px;

          height:
            2px;

          background:
            var(--values-yellow);

        }


        .values-number-small {

          color:
            var(--values-yellow);

        }


        /* =====================================================
           TITLE
        ===================================================== */

        .values-title {

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
            0.88;

          letter-spacing:
            -0.065em;

          font-weight:
            650;

          perspective:
            1000px;

        }


        .values-word {

          display:
            inline-block;

          transform-origin:
            center bottom;

        }


        .values-word:nth-child(1) {

          color:
            var(--values-white);

        }


        .values-word:nth-child(2) {

          color:
            var(--values-mint);

        }


        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .values-description {

          max-width:
            720px;

          margin-top:
            38px;

          color:
            var(--values-gray);

          font-size:
            18px;

          line-height:
            1.75;

        }


        .values-description strong {

          color:
            var(--values-white);

        }


        /* =====================================================
           LINE
        ===================================================== */

        .values-line {

          width:
            100%;

          height:
            1px;

          margin-top:
            48px;

          background:
            var(--values-border);

          transform:
            scaleX(0);

        }


        .values-line::after {

          content:
            "";

          display:
            block;

          width:
            140px;

          height:
            2px;

          background:
            linear-gradient(
              90deg,
              var(--values-yellow),
              var(--values-mint)
            );

        }


        /* =====================================================
           VALUE CARDS
        ===================================================== */

        .values-cards {

          position:
            relative;

          display:
            grid;

          grid-template-columns:
            repeat(4, 1fr);

          margin-top:
            65px;

          perspective:
            1200px;

        }


        .values-card {

          position:
            relative;

          min-height:
            285px;

          padding:
            30px 26px;

          border-top:
            1px solid
            var(--values-border);

          border-bottom:
            1px solid
            var(--values-border);

          border-left:
            1px solid
            var(--values-border);

          background:
            rgba(
              12,
              20,
              25,
              0.55
            );

          backdrop-filter:
            blur(12px);

          transition:
            transform 0.5s cubic-bezier(.2,.8,.2,1),
            background 0.5s ease,
            border-color 0.5s ease;

          transform-style:
            preserve-3d;

        }


        .light-mode .values-card {

          background:
            rgba(
              255,
              255,
              255,
              0.65
            );

        }


        .values-card:last-child {

          border-right:
            1px solid
            var(--values-border);

        }


        .values-card:hover {

          transform:
            translateY(-14px);

          background:
            var(--values-panel-2);

          border-color:
            rgba(
              255,
              223,
              0,
              0.45
            );

          z-index:
            5;

        }


        /* =====================================================
           CARD NUMBER
        ===================================================== */

        .values-card-number {

          color:
            var(--values-yellow);

          font-size:
            11px;

          font-weight:
            800;

          letter-spacing:
            0.2em;

        }


        /* =====================================================
           CARD ICON
        ===================================================== */

        .values-card-icon {

          position:
            absolute;

          top:
            25px;

          right:
            25px;

          width:
            42px;

          height:
            42px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          border:
            1px solid
            var(--values-border);

          border-radius:
            50%;

          color:
            var(--values-mint);

          font-size:
            18px;

          transition:
            border-color 0.4s ease,
            color 0.4s ease;

        }


        .values-card:hover
        .values-card-icon {

          border-color:
            var(--values-yellow);

          color:
            var(--values-yellow);

        }


        /* =====================================================
           CARD TITLE
        ===================================================== */

        .values-card-title {

          margin-top:
            70px;

          color:
            #80e8ff;

          font-size:
            24px;

          font-weight:
            700;

          letter-spacing:
            -0.035em;

        }


        .values-card-text {

          margin-top:
            18px;

          color:
            var(--values-gray);

          font-size:
            13px;

          line-height:
            1.75;

        }


        /* =====================================================
           BOTTOM STATEMENT
        ===================================================== */

        .values-bottom {

          display:
            grid;

          grid-template-columns:
            1fr 1.5fr;

          gap:
            60px;

          align-items:
            end;

          margin-top:
            70px;

          padding-top:
            35px;

          border-top:
            1px solid
            var(--values-border);

        }


        .values-quote-label {

          color:
            var(--values-yellow);

          font-size:
            9px;

          font-weight:
            800;

          letter-spacing:
            0.25em;

          text-transform:
            uppercase;

        }


        .values-quote {

          margin:
            10px 0 0;

          color:
            var(--values-white);

          font-size:
            clamp(
              22px,
              2.3vw,
              32px
            );

          line-height:
            1.25;

          letter-spacing:
            -0.035em;

        }


        .values-quote span {

          color:
            var(--values-mint);

        }


        .values-footer-text {

          max-width:
            500px;

          justify-self:
            end;

          color:
            var(--values-gray);

          font-size:
            13px;

          line-height:
            1.7;

        }


        /* =====================================================
           DECORATIVE PLUS
        ===================================================== */

        .values-plus {

          position:
            absolute;

          width:
            18px;

          height:
            18px;

          pointer-events:
            none;

        }


        .values-plus::before,
        .values-plus::after {

          content:
            "";

          position:
            absolute;

          background:
            var(--values-yellow);

        }


        .values-plus::before {

          width:
            100%;

          height:
            1px;

          top:
            50%;

          left:
            0;

        }


        .values-plus::after {

          width:
            1px;

          height:
            100%;

          top:
            0;

          left:
            50%;

        }


        .values-plus-1 {

          top:
            15%;

          right:
            8%;

        }


        .values-plus-2 {

          top:
            48%;

          right:
            3%;

        }


        .values-plus-3 {

          bottom:
            13%;

          left:
            8%;

        }


        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1050px) {

          .values-container {

            width:
              min(
                calc(100% - 60px),
                850px
              );

          }


          .values-cards {

            grid-template-columns:
              repeat(2, 1fr);

          }


          .values-card:nth-child(2) {

            border-right:
              1px solid
              var(--values-border);

          }


          .values-card:nth-child(3) {

            border-top:
              none;

          }


          .values-card:nth-child(4) {

            border-top:
              none;

          }


          .values-bottom {

            grid-template-columns:
              1fr;

            gap:
              25px;

          }


          .values-footer-text {

            justify-self:
              start;

          }

        }


        @media (max-width: 600px) {

          .values-container {

            width:
              calc(100% - 36px);

            padding:
              80px 0;

          }


          .values-number {

            left:
              -15px;

            font-size:
              260px;

          }


          .values-label {

            font-size:
              9px;

          }


          .values-title {

            font-size:
              58px;

          }


          .values-description {

            font-size:
              14px;

            line-height:
              1.75;

            margin-top:
              28px;

          }


          .values-cards {

            grid-template-columns:
              1fr;

            margin-top:
              45px;

          }


          .values-card {

            min-height:
              240px;

            border:
              1px solid
              var(--values-border) !important;

          }


          .values-card:not(:first-child) {

            border-top:
              none !important;

          }


          .values-card-title {

            margin-top:
              55px;

            font-size:
              22px;

          }


          .values-card-text {

            font-size:
              12px;

          }


          .values-bottom {

            margin-top:
              50px;

          }


          .values-footer-text {

            font-size:
              12px;

          }


          .values-plus-1 {

            right:
              5%;

          }


          .values-plus-2 {

            right:
              3%;

          }


          .values-plus-3 {

            left:
              5%;

          }

        }

      `}</style>

      <section
        ref={sectionRef}
        className={`fairdeal-values ${isLightTheme ? "light-mode" : ""}`}
      >
        {/* BACKGROUND */}

        <div className="values-grid" />

        <div className="values-glow" />

        {/* HUGE SECTION NUMBER */}

        <div ref={numberRef} className="values-number">
          03
        </div>

        {/* DECORATIVE ELEMENTS */}

        <div className="values-plus values-plus-1" />
        <div className="values-plus values-plus-2" />
        <div className="values-plus values-plus-3" />

        <div className="values-container">
          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="values-content">
            {/* LABEL */}

            <div ref={labelRef} className="values-label">
              <span className="values-label-line" />

              <span className="values-number-small">03</span>

              <span>—</span>

              <span>CORE VALUES</span>
            </div>

            {/* TITLE */}

            <h2 ref={titleRef} className="values-title">
              <span className="values-word">What</span>

              <span className="values-word">We Believe</span>
            </h2>

            {/* DESCRIPTION */}

            <p ref={textRef} className="values-description">
              We believe in treating our customers with{" "}
              <strong>respect and faith.</strong> We integrate honesty,
              integrity and business ethics into every aspect of our business
              functioning.
            </p>

            {/* LINE */}

            <div ref={lineRef} className="values-line" />
          </div>

          {/* =================================================
              VALUE CARDS
          ================================================= */}

          <div ref={cardsRef} className="values-cards">
            {values.map((value, index) => (
              <div key={value.number} className="values-card">
                <div className="values-card-number">{value.number}</div>

                <div
                  ref={(el) => {
                    plusRefs.current[index] = el;
                  }}
                  className="values-card-icon"
                >
                  {value.icon}
                </div>

                <h3 className="values-card-title">{value.title}</h3>

                <p className="values-card-text">{value.text}</p>
              </div>
            ))}
          </div>

          {/* =================================================
              BOTTOM STATEMENT
          ================================================= */}

          <div ref={quoteRef} className="values-bottom">
            <div>
              <div className="values-quote-label">OUR PRINCIPLE</div>

              <p className="values-quote">
                <span>Integrity</span> in every interaction.
              </p>
            </div>

            <p className="values-footer-text">
              These principles shape how we work, communicate and build
              long-term relationships with our customers, employees and business
              partners.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutValues;
// import React from "react";

// const AboutValues = () => {
//   return (
//     <section className="about-values">
//       <span className="section-label">03 — CORE VALUES</span>

//       <h2>What We Believe</h2>

//       <p>
//         We believe in treating our customers with respect and faith. We
//         integrate honesty, integrity and business ethics into every aspect of
//         our business functioning.
//       </p>
//     </section>
//   );
// };

// export default AboutValues;
