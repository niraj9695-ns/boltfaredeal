import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import visionImage from "../../assets/images/about/vision.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutVision = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray(".fd-vm-block");

      blocks.forEach((block) => {
        const content = block.querySelector(".fd-vm-content");
        const visual = block.querySelector(".fd-vm-visual");
        const eyebrow = block.querySelector(".fd-vm-eyebrow");
        const title = block.querySelector(".fd-vm-title");
        const paragraphs = block.querySelectorAll(".fd-vm-copy");
        const stats = block.querySelectorAll(".fd-vm-stat");
        const badge = block.querySelector(".fd-vm-floating-card");
        const image = block.querySelector(".fd-vm-image");
        const orbit = block.querySelector(".fd-vm-orbit");

        gsap.set([eyebrow, title, ...paragraphs, ...stats], {
          opacity: 1,
          clearProps: "transform",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: block,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        });

        tl.from(eyebrow, {
          y: 20,
          opacity: 0,
          duration: 0.55,
          ease: "power3.out",
        })
          .from(
            title,
            {
              y: 45,
              opacity: 0,
              duration: 0.8,
              ease: "power4.out",
            },
            "-=0.25"
          )
          .from(
            paragraphs,
            {
              y: 25,
              opacity: 0,
              duration: 0.65,
              stagger: 0.15,
              ease: "power3.out",
            },
            "-=0.4"
          )
          .from(
            visual,
            {
              x: block.classList.contains("fd-vm-mission")
                ? -65
                : 65,
              opacity: 0,
              scale: 0.94,
              duration: 1,
              ease: "power3.out",
            },
            "-=0.8"
          )
          .from(
            stats,
            {
              y: 20,
              opacity: 0,
              stagger: 0.12,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.35"
          )
          .from(
            badge,
            {
              scale: 0.8,
              opacity: 0,
              duration: 0.55,
              ease: "back.out(1.5)",
            },
            "-=0.45"
          );

        // Subtle image parallax while scrolling.
        gsap.to(image, {
          yPercent: -7,
          ease: "none",
          scrollTrigger: {
            trigger: block,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        // Continuous decorative motion.
        gsap.to(badge, {
          y: -9,
          duration: 2.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(orbit, {
          rotation: 360,
          duration: 35,
          repeat: -1,
          ease: "none",
        });
      });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .fd-vm-section {
          --fd-bg: #05090B;
          --fd-panel: #0C1419;
          --fd-panel-2: #111B21;
          --fd-yellow: #FFDF00;
          --fd-mint: #8FE7C8;
          --fd-white: #F5F7F8;
          --fd-gray: #98A1B1;
          --fd-border: rgba(255,255,255,.09);

          position: relative;
          width: 100%;
          overflow: hidden;
          background: var(--fd-bg);
          color: var(--fd-white);
          font-family: Inter, "Segoe UI", Arial, sans-serif;
        }

        .fd-vm-block {
          position: relative;
          isolation: isolate;
          min-height: 720px;
          display: flex;
          align-items: center;
          padding: 90px 0;
          overflow: hidden;
        }

        .fd-vm-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px);
          background-size: 75px 75px;
          mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
        }

        .fd-vm-number {
          position: absolute;
          z-index: 0;
          left: -20px;
          top: 50%;
          transform: translateY(-50%);
          font-size: clamp(300px, 42vw, 650px);
          line-height: .7;
          font-weight: 800;
          letter-spacing: -.09em;
          color: var(--fd-mint);
          opacity: .075;
          pointer-events: none;
          user-select: none;
        }

        .fd-vm-glow {
          position: absolute;
          z-index: -1;
          width: 520px;
          height: 520px;
          right: 5%;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,223,0,.07), rgba(143,231,200,.035), transparent 70%);
          filter: blur(25px);
          pointer-events: none;
        }

        .fd-vm-shell {
          position: relative;
          z-index: 2;
          width: min(1240px, calc(100% - 80px));
          margin: auto;
        }

        .fd-vm-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding-bottom: 22px;
          margin-bottom: 48px;
          border-bottom: 1px solid var(--fd-border);
        }

        .fd-vm-top-left {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--fd-gray);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .2em;
        }

        .fd-vm-top-left strong {
          color: var(--fd-white);
        }

        .fd-vm-yellow-line {
          display: inline-block;
          width: 35px;
          height: 2px;
          background: var(--fd-yellow);
        }

        .fd-vm-top-right {
          color: var(--fd-gray);
          font-size: 9px;
          letter-spacing: .22em;
          font-weight: 700;
        }

        .fd-vm-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, .95fr);
          align-items: center;
          gap: clamp(45px, 7vw, 100px);
        }

        .fd-vm-layout-reverse {
          grid-template-columns: minmax(0, .95fr) minmax(0, 1fr);
        }

        .fd-vm-mission .fd-vm-visual {
          order: 1;
        }

        .fd-vm-mission .fd-vm-content {
          order: 2;
        }

        .fd-vm-content {
          min-width: 0;
        }

        .fd-vm-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 0 0 22px;
          color: var(--fd-mint);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .24em;
        }

        .fd-vm-eyebrow::before {
          content: "";
          width: 25px;
          height: 2px;
          background: var(--fd-yellow);
        }

        .fd-vm-title {
          margin: 0 0 28px;
          font-size: clamp(48px, 5.3vw, 76px);
          line-height: .98;
          font-weight: 700;
          letter-spacing: -.065em;
        }

        .fd-vm-title span {
          display: inline-block;
          color: var(--fd-mint);
        }

        .fd-vm-copy {
          max-width: 580px;
          margin: 0 0 19px;
          color: var(--fd-gray);
          font-size: 15px;
          line-height: 1.9;
        }

        .fd-vm-copy strong {
          color: var(--fd-white);
        }

        .fd-vm-line {
          width: 190px;
          height: 3px;
          display: flex;
          margin-top: 32px;
          background: rgba(255,255,255,.1);
        }

        .fd-vm-line span {
          display: block;
          width: 85px;
          height: 100%;
          background: var(--fd-yellow);
          box-shadow: 85px 0 var(--fd-mint);
        }

        .fd-vm-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 38px;
          max-width: 500px;
        }

        .fd-vm-stat {
          min-width: 0;
          padding: 0 15px;
          border-right: 1px solid var(--fd-border);
        }

        .fd-vm-stat:first-child {
          padding-left: 0;
        }

        .fd-vm-stat:last-child {
          border-right: 0;
        }

        .fd-vm-stat-icon {
          width: 39px;
          height: 39px;
          display: grid;
          place-items: center;
          margin-bottom: 12px;
          border: 1px solid rgba(255,223,0,.3);
          border-radius: 50%;
          color: var(--fd-yellow);
          font-size: 18px;
          transition: transform .3s, background .3s;
        }

        .fd-vm-stat:hover .fd-vm-stat-icon {
          transform: translateY(-5px) rotate(10deg);
          background: rgba(255,223,0,.08);
        }

        .fd-vm-stat .fd-mint-icon {
          color: var(--fd-mint);
          border-color: rgba(143,231,200,.3);
        }

        .fd-vm-stat strong {
          display: block;
          margin-bottom: 6px;
          color: var(--fd-white);
          font-size: 9px;
          letter-spacing: .09em;
        }

        .fd-vm-stat > span {
          color: var(--fd-gray);
          font-size: 11px;
        }

        .fd-vm-visual {
          position: relative;
          min-width: 0;
          min-height: 520px;
          display: grid;
          place-items: center;
        }

        .fd-vm-orbit {
          position: absolute;
          width: min(100%, 530px);
          aspect-ratio: 1;
          border: 1px solid rgba(143,231,200,.15);
          border-radius: 50%;
          pointer-events: none;
        }

        .fd-vm-orbit::before {
          content: "";
          position: absolute;
          inset: 32px;
          border: 1px dashed rgba(255,223,0,.16);
          border-radius: 50%;
        }

        .fd-vm-orbit::after {
          content: "";
          position: absolute;
          top: 12%;
          right: 20%;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--fd-yellow);
          box-shadow: 0 0 18px var(--fd-yellow);
        }

        .fd-vm-yellow-back {
          position: absolute;
          width: 83%;
          height: 83%;
          top: 7%;
          right: 0;
          border-radius: 24px;
          background: var(--fd-yellow);
          transform: rotate(5deg);
          opacity: .9;
        }

        .fd-vm-image-wrap {
          position: relative;
          width: 88%;
          height: 410px;
          overflow: hidden;
          border: 1px solid rgba(255,223,0,.45);
          border-radius: 22px;
          background: var(--fd-bg);
          box-shadow: 0 30px 80px rgba(0,0,0,.4);
        }

        .fd-vm-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          will-change: transform;
          filter: saturate(.9) contrast(1.05);
          transition: transform .7s ease;
        }

        .fd-vm-image-wrap:hover .fd-vm-image {
          transform: scale(1.07);
        }

        .fd-vm-image-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(5,9,11,.65), transparent 45%);
          pointer-events: none;
        }

        .fd-vm-image-label {
          position: absolute;
          bottom: 18px;
          left: 20px;
          color: white;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .2em;
        }

        .fd-vm-floating-card {
          position: absolute;
          z-index: 3;
          right: -5px;
          bottom: 0;
          width: 185px;
          padding: 22px;
          border: 1px solid var(--fd-border);
          border-radius: 17px;
          background: rgba(12,20,25,.96);
          box-shadow: 0 20px 60px rgba(0,0,0,.35);
          backdrop-filter: blur(15px);
        }

        .fd-vm-card-icon {
          width: 37px;
          height: 37px;
          display: grid;
          place-items: center;
          margin-bottom: 14px;
          border: 1px solid var(--fd-yellow);
          border-radius: 50%;
          color: var(--fd-yellow);
          font-size: 20px;
        }

        .fd-vm-floating-card p {
          margin: 0 0 10px;
          color: var(--fd-gray);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .2em;
        }

        .fd-vm-floating-card h3 {
          margin: 0;
          font-size: 15px;
          line-height: 1.7;
          letter-spacing: .09em;
        }

        .fd-vm-floating-card h3 span {
          color: var(--fd-mint);
        }

        .fd-vm-floating-card h3 b {
          color: var(--fd-yellow);
        }

        .fd-vm-divider {
          position: relative;
          z-index: 2;
          width: min(1240px, calc(100% - 80px));
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          color: var(--fd-gray);
          font-size: 9px;
          letter-spacing: .2em;
        }

        .fd-vm-divider span {
          height: 1px;
          flex: 1;
          background: var(--fd-border);
        }

        .fd-vm-footer {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 28px 20px 40px;
          color: var(--fd-mint);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .2em;
          text-align: center;
        }

        .fd-vm-footer span {
          width: 35px;
          height: 2px;
          background: var(--fd-yellow);
        }

        .fd-vm-footer p {
          margin: 0;
        }

        .fd-vm-footer b {
          color: var(--fd-gray);
          font-size: 8px;
        }

        @media (max-width: 1050px) {
          .fd-vm-block {
            min-height: auto;
            padding: 80px 0;
          }

          .fd-vm-shell {
            width: min(800px, calc(100% - 48px));
          }

          .fd-vm-layout,
          .fd-vm-layout-reverse {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .fd-vm-content {
            text-align: center;
          }

          .fd-vm-eyebrow {
            justify-content: center;
          }

          .fd-vm-copy {
            margin-left: auto;
            margin-right: auto;
          }

          .fd-vm-line,
          .fd-vm-stats {
            margin-left: auto;
            margin-right: auto;
          }

          .fd-vm-stats {
            text-align: left;
          }

          .fd-vm-visual {
            width: min(100%, 600px);
            margin: auto;
          }

          .fd-vm-mission .fd-vm-visual,
          .fd-vm-mission .fd-vm-content {
            order: initial;
          }

          .fd-vm-number {
            font-size: clamp(280px, 55vw, 450px);
          }
        }

        @media (max-width: 600px) {
          .fd-vm-block {
            padding: 58px 0;
          }

          .fd-vm-shell,
          .fd-vm-divider {
            width: calc(100% - 34px);
          }

          .fd-vm-topbar {
            margin-bottom: 35px;
            padding-bottom: 16px;
          }

          .fd-vm-top-left {
            gap: 7px;
            font-size: 8px;
            letter-spacing: .1em;
          }

          .fd-vm-yellow-line {
            width: 18px;
          }

          .fd-vm-top-right {
            max-width: 100px;
            font-size: 7px;
            line-height: 1.7;
            text-align: right;
          }

          .fd-vm-title {
            font-size: clamp(44px, 12vw, 60px);
          }

          .fd-vm-copy {
            font-size: 13px;
            line-height: 1.8;
          }

          .fd-vm-visual {
            min-height: 390px;
          }

          .fd-vm-orbit {
            width: 100%;
          }

          .fd-vm-orbit::before {
            inset: 20px;
          }

          .fd-vm-image-wrap {
            width: 90%;
            height: 320px;
            border-radius: 16px;
          }

          .fd-vm-yellow-back {
            border-radius: 16px;
          }

          .fd-vm-floating-card {
            right: 0;
            bottom: -2px;
            width: 145px;
            padding: 15px;
            border-radius: 13px;
          }

          .fd-vm-card-icon {
            width: 30px;
            height: 30px;
            margin-bottom: 10px;
          }

          .fd-vm-floating-card h3 {
            font-size: 12px;
          }

          .fd-vm-stats {
            gap: 0;
            margin-top: 30px;
          }

          .fd-vm-stat {
            padding: 0 9px;
          }

          .fd-vm-stat-icon {
            width: 32px;
            height: 32px;
          }

          .fd-vm-stat strong {
            font-size: 8px;
            letter-spacing: .03em;
          }

          .fd-vm-stat > span {
            font-size: 9px;
          }

          .fd-vm-number {
            left: -10px;
            top: 30%;
            font-size: 260px;
          }

          /* Keep the oversized 02 behind the Mission content on mobile. */
          .fd-vm-mission .fd-vm-number {
            top: 145px;
            right: -12px;
            left: auto;
            transform: none;
            font-size: clamp(190px, 48vw, 260px);
            opacity: .065;
          }

          .fd-vm-mission .fd-vm-content {
            position: relative;
            z-index: 2;
            order: 1;
          }

          .fd-vm-mission .fd-vm-visual {
            position: relative;
            z-index: 1;
            order: 2;
          }

          .fd-vm-footer {
            flex-wrap: wrap;
            font-size: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fd-vm-image,
          .fd-vm-stat-icon {
            transition: none;
          }
        }
      `}</style>

      <section ref={sectionRef} className="fd-vm-section">
        <div className="fd-vm-grid" />
        <article className="fd-vm-block fd-vm-vision">
          <div className="fd-vm-number" aria-hidden="true">01</div>
          <div className="fd-vm-glow" />
          <div className="fd-vm-shell">
            <div className="fd-vm-topbar">
              <div className="fd-vm-top-left">
                <span className="fd-vm-yellow-line" />
                <span>01</span>
                <b>—</b>
                <strong>THE VISION</strong>
              </div>
              <div className="fd-vm-top-right">
                FAIRDEAL PRINT PACK
              </div>
            </div>

            <div className="fd-vm-layout">
              <div className="fd-vm-content">
                <p className="fd-vm-eyebrow">OUR DIRECTION</p>
                <h2 className="fd-vm-title">
                  Our <span>Vision</span>
                </h2>

                <p className="fd-vm-copy">
                  To become a trusted leader in the printing and
                  packaging industry by delivering innovative,
                  reliable, and high-quality print solutions that
                  help our customers grow.
                </p>

                <p className="fd-vm-copy">
                  We aim to combine modern technology, creative
                  thinking, and consistent quality to build lasting
                  relationships and create meaningful value for every
                  client.
                </p>

                <div className="fd-vm-line"><span /></div>

                <div className="fd-vm-stats">
                  <div className="fd-vm-stat">
                    <div className="fd-vm-stat-icon">✦</div>
                    <strong>CUSTOMER</strong>
                    <span>Satisfaction</span>
                  </div>
                  <div className="fd-vm-stat">
                    <div className="fd-vm-stat-icon fd-mint-icon">◇</div>
                    <strong>INNOVATION</strong>
                    <span>Progress</span>
                  </div>
                  <div className="fd-vm-stat">
                    <div className="fd-vm-stat-icon">◎</div>
                    <strong>INTEGRITY</strong>
                    <span>Trust</span>
                  </div>
                </div>
              </div>

              <div className="fd-vm-visual">
                <div className="fd-vm-orbit" />
                <div className="fd-vm-yellow-back" />
                <div className="fd-vm-image-wrap">
                  <img
                    className="fd-vm-image"
                    src={visionImage}
                    alt="Fairdeal Print Pack vision"
                  />
                  <div className="fd-vm-image-shade" />
                </div>

                <div className="fd-vm-floating-card">
                  <div className="fd-vm-card-icon">◎</div>
                  <p>OUR VISION</p>
                  <h3>
                    CUSTOMER<br />
                    <span>SUCCESS</span><br />
                    <b>FIRST</b>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default AboutVision;
