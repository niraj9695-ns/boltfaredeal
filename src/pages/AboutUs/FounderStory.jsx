//import founderImage from "../../assets/images/Technology/Owner image.png";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Change this path to your actual founder image
import founderImage from "../../assets/images/Owner image.png";

gsap.registerPlugin(ScrollTrigger);

const FromMyDesk = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const yearRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;

    if (!section || !timeline) return;

    const ctx = gsap.context(() => {
      /* =========================================
         GENERAL REVEALS
      ========================================= */

      gsap.utils.toArray(".fd-reveal").forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray(".fd-reveal-left").forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: -45,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray(".fd-reveal-right").forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: 45,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      /* =========================================
         INTRO LINE
      ========================================= */

      gsap.fromTo(
        ".fd-intro-line",
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 1.1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".fd-intro-section",
            start: "top 75%",
          },
        }
      );

      /* =========================================
         HORIZONTAL JOURNEY
      ========================================= */

      const horizontalDistance =
        timeline.scrollWidth - window.innerWidth;

      const horizontalTween = gsap.to(timeline, {
        id: "fd-horizontal",
        x: -horizontalDistance,
        ease: "none",

        scrollTrigger: {
          trigger: ".fd-story-wrapper",
          start: "top top",
          end: () =>
            `+=${horizontalDistance + window.innerHeight * 1.8}`,
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,

          onUpdate: (self) => {
            const progressValue = self.progress;

            if (progressRef.current) {
              gsap.to(progressRef.current, {
                scaleX: progressValue,
                duration: 0.15,
                overwrite: true,
              });
            }

            const currentYear = Math.round(
              1990 + progressValue * (2026 - 1990)
            );

            if (yearRef.current) {
              yearRef.current.textContent = currentYear;
            }
          },
        },
      });

      /* =========================================
         JOURNEY CARD REVEALS
      ========================================= */

      gsap.utils.toArray(".fd-story-card").forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0.25,
            scale: 0.96,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: "left 85%",
              end: "left 45%",
              scrub: true,
            },
          }
        );
      });

      /* =========================================
         COUNTERS
      ========================================= */

      gsap.utils.toArray(".fd-counter").forEach((element) => {
        const target = Number(element.dataset.value);

        const obj = {
          value: 0,
        };

        gsap.to(obj, {
          value: target,
          duration: 1.8,
          ease: "power2.out",

          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },

          onUpdate: () => {
            element.textContent =
              Math.floor(obj.value).toLocaleString("en-IN") + "+";
          },
        });
      });

      /* =========================================
         QUOTE
      ========================================= */

      gsap.fromTo(
        ".fd-quote-card",
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".fd-quote-section",
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".fd-quote-accent",
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".fd-quote-section",
            start: "top 82%",
          },
        }
      );

      /* =========================================
         VISION
      ========================================= */

      gsap.fromTo(
        ".fd-vision-box",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".fd-vision-section",
            start: "top 82%",
          },
        }
      );

      /* =========================================
         FOUNDER IMAGE ANIMATION
      ========================================= */

      gsap.fromTo(
        ".fd-founder-image-frame",
        {
          clipPath: "inset(12% 12% 12% 12%)",
          opacity: 0,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".fd-founder-image-wrap",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".fd-founder-image",
        {
          scale: 1.18,
        },
        {
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".fd-founder-image-wrap",
            start: "top 80%",
            end: "bottom 30%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ".fd-founder-image-accent",
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".fd-founder-image-wrap",
            start: "top 75%",
            once: true,
          },
        }
      );

      /* =========================================
         FOUNDER TEXT
      ========================================= */

      gsap.fromTo(
        ".fd-founder-signature",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".fd-founder-signature",
            start: "top 90%",
            once: true,
          },
        }
      );

      /* =========================================
         FLOATING PARALLAX
      ========================================= */

      gsap.to(".fd-floating-circle", {
        y: -100,
        rotate: 20,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="fd-from-desk">

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="fd-floating-circle fd-circle-one" />
      <div className="fd-floating-circle fd-circle-two" />

      {/* =========================================
          INTRO
      ========================================= */}

      <section className="fd-intro-section">

        <div className="fd-intro-header">

          <div className="fd-intro-label fd-reveal-left">
            <span className="fd-dot" />
            FROM MY DESK
          </div>

          <div className="fd-intro-line" />

          <span className="fd-intro-year fd-reveal-right">
            EST. 1990
          </span>

        </div>

        <div className="fd-intro-grid">

          <div className="fd-intro-title fd-reveal-left">
            <h2>
              From a humble
              <span> beginning.</span>
            </h2>
          </div>

          <div className="fd-intro-copy fd-reveal-right">

            <p>
              I first learned the art of printing while working with a
              photographer and established Fairdeal Advertising with
              manual screen printing in 1990.
            </p>

            <p>
              What began as a small venture has grown into a trusted
              printing and packaging organisation in Pune, powered by
              perseverance, design thinking and teamwork.
            </p>

          </div>

        </div>

        <div className="fd-intro-bottom">

          <div className="fd-small-stat fd-reveal">
            <strong>
              <span className="fd-counter" data-value="30">
                0+
              </span>
            </strong>

            <span>YEARS OF EXPERIENCE</span>
          </div>

          <div className="fd-small-stat fd-reveal">

            <strong>
              <span className="fd-counter" data-value="1000">
                0+
              </span>
            </strong>

            <span>CLIENTS ACROSS INDIA</span>

          </div>

          <div className="fd-small-description fd-reveal">

            <span>THE FOUNDATION</span>

            <p>
              Quality. Honesty. Teamwork.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          JOURNEY
      ========================================= */}

      <div className="fd-story-wrapper">

        <div className="fd-story-topbar">
          <span>THE JOURNEY</span>

          <div className="fd-year-counter">
            <span ref={yearRef}>1990</span>
          </div>
        </div>

        <div className="fd-progress">
          <div
            ref={progressRef}
            className="fd-progress-fill"
          />
        </div>

        <div ref={timelineRef} className="fd-story-track">

          {/* CARD 01 */}

          <article className="fd-story-card fd-story-start">

            <div className="fd-card-number">01</div>

            <div className="fd-card-content">

              <span className="fd-card-year">
                1990
              </span>

              <h3>
                A small beginning.
                <br />
                A bigger dream.
              </h3>

              <p>
                I first learned the art of printing while working
                with a photographer. That experience became the
                foundation for Fairdeal Advertising and its manual
                screen printing journey.
              </p>

            </div>

            <div className="fd-card-marker">
              <span />
              <span />
              <span />
            </div>

          </article>


          {/* CARD 02 */}

          <article className="fd-story-card">

            <div className="fd-card-number">02</div>

            <div className="fd-card-content">

              <span className="fd-card-year">
                THE EARLY YEARS
              </span>

              <h3>
                Ten years
                <br />
                of learning.
              </h3>

              <p>
                The first decade was filled with difficulties,
                uncertainty and lessons. Every challenge taught us
                to become better, stronger and more disciplined.
              </p>

              <div className="fd-mini-highlight">
                <strong>10</strong>
                <span>years of persistence</span>
              </div>

            </div>

          </article>


          {/* CARD 03 */}

          <article className="fd-story-card fd-story-stat-card">

            <div className="fd-card-number">03</div>

            <div className="fd-big-stat">

              <span className="fd-stat-prefix">
                OVER
              </span>

              <strong className="fd-stat-number">
                30+
              </strong>

              <span className="fd-stat-label">
                YEARS OF
                <br />
                EXPERIENCE
              </span>

            </div>

            <p>
              Almost three decades of building, improving and
              moving forward with the same commitment to quality.
            </p>

          </article>


          {/* CARD 04 */}

          <article className="fd-story-card">

            <div className="fd-card-number">04</div>

            <div className="fd-card-content">

              <span className="fd-card-year">
                TODAY
              </span>

              <h3>
                1000+
                <br />
                happy clients.
              </h3>

              <p>
                What started as a humble printing operation has
                grown into a trusted organisation serving clients
                across the country.
              </p>

              <div className="fd-client-stat">

                <strong>1000+</strong>

                <span>
                  CLIENTS
                  <br />
                  ACROSS INDIA
                </span>

              </div>

            </div>

          </article>


          {/* CARD 05 */}

          <article className="fd-story-card fd-story-values">

            <div className="fd-card-number">05</div>

            <div className="fd-card-content">

              <span className="fd-card-year">
                OUR FOUNDATION
              </span>

              <h3>
                Quality.
                <br />
                Honesty.
                <br />
                Teamwork.
              </h3>

              <p>
                These are not just words at Fairdeal. They are
                the principles that helped us overcome difficult
                times and continue to shape every decision we make.
              </p>

            </div>

            <div className="fd-values-orbit">

              <span>QUALITY</span>
              <span>HONESTY</span>
              <span>TEAMWORK</span>

            </div>

          </article>


          {/* CARD 06 */}

          <article className="fd-story-card">

            <div className="fd-card-number">06</div>

            <div className="fd-card-content">

              <span className="fd-card-year">
                THE PEOPLE
              </span>

              <h3>
                Building
                <br />
                the right team.
              </h3>

              <p>
                Team-building has always been a critical factor
                of growth. Choosing people who believe in quality
                and share the organisation's values has been one
                of our greatest priorities.
              </p>

            </div>

          </article>


          {/* CARD 07 */}

          <article className="fd-story-card fd-story-team">

            <div className="fd-card-number">07</div>

            <div className="fd-team-visual">

              <div className="fd-team-ring ring-one" />
              <div className="fd-team-ring ring-two" />
              <div className="fd-team-ring ring-three" />

              <div className="fd-team-center">

                <span>FAIRDEAL</span>
                <strong>FAMILY</strong>

              </div>

            </div>

            <div className="fd-team-text">

              <span>THE REAL SUCCESS</span>

              <h3>
                Fairdeal
                <br />
                Family
              </h3>

              <p>
                Seeing team members who have been with us from
                the beginning settled and happy in their lives
                is one of my greatest achievements.
              </p>

            </div>

          </article>


          {/* CARD 08 */}

          <article className="fd-story-card fd-story-end">

            <div className="fd-card-number">08</div>

            <div className="fd-card-content">

              <span className="fd-card-year">
                THE NEXT CHAPTER
              </span>

              <h3>
                Still
                <br />
                moving forward.
              </h3>

              <p>
                With world-class printing technology and a strong
                team, our vision continues to grow — to become
                the leading and most preferred printing and
                packaging solution for our clients.
              </p>

            </div>

          </article>

        </div>

      </div>


      {/* =========================================
          FOUNDER MESSAGE
      ========================================= */}

      <section className="fd-message-section">

        <div className="fd-section-heading fd-reveal">

          <span>
            THE FOUNDER'S MESSAGE
          </span>

          <div />

        </div>


        <div className="fd-founder-layout">

          {/* =====================================
              FOUNDER IMAGE
          ===================================== */}

          <div className="fd-founder-image-wrap fd-reveal-left">

            <div className="fd-founder-image-frame">

              <div className="fd-founder-image-accent accent-top" />

              <div className="fd-founder-image-accent accent-bottom" />

              <div className="fd-founder-image-inner">

                <img
                  src={founderImage}
                  alt="Founder of Fairdeal Print Pack India Pvt. Ltd."
                  className="fd-founder-image"
                />

                <div className="fd-founder-image-overlay" />

              </div>

              <div className="fd-founder-image-label">

                <span>FOUNDER & MD</span>
                <span>FAIRDEAL</span>

              </div>

            </div>

          </div>


          {/* =====================================
              FOUNDER CONTENT
          ===================================== */}

          <div className="fd-founder-content fd-reveal-right">

            <div className="fd-message-intro">

              <span>01 / VALUES</span>

              <h3>
                The principles
                <br />
                that kept us
                <em> moving.</em>
              </h3>

            </div>


            <div className="fd-message-text">

              <p>
                My father was in the army and I came from a
                Maharashtrian family where there was minimal scope
                of becoming a businessman back in those days.
              </p>

              <p>
                The Army atmosphere gave me lessons about
                patriotism, discipline, cleanliness, taking care of
                the environment and the importance of health and
                fitness.
              </p>

              <p>
                But professionally, there was still a lot to learn.
                The first ten years brought all kinds of difficulties.
                The approach that helped me overcome them was simple:
                focus on quality and honesty, even in the most
                challenging times.
              </p>


              <div className="fd-founder-signature">

                <div className="fd-signature-line" />

                <div>
                  <strong>FOUNDER &amp; MD</strong>

                  <span>
                    FAIRDEAL PRINT PACK INDIA PVT. LTD.
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          QUOTE
      ========================================= */}

      <section className="fd-quote-section">

        <div className="fd-quote-card">

          <div className="fd-quote-top">

            <span>MY BELIEF</span>
            <span>02 / 04</span>

          </div>

          <div className="fd-quote-accent" />

          <blockquote>
            “You take care of the organisation,
            <br/>
            <span>
                   the organisation will take care of you.
            </span>”
          </blockquote>

          <div className="fd-quote-footer">

            <span>
              — Founder &amp; MD
            </span>

            <span>
              FAIRDEAL PRINT PACK INDIA PVT. LTD.
            </span>

          </div>

        </div>

      </section>


      {/* =========================================
          TEAM MESSAGE
      ========================================= */}

      <section className="fd-team-message">

        <div className="fd-section-heading fd-reveal">

          <span>
            PEOPLE FIRST
          </span>

          <div />

        </div>

        <div className="fd-team-message-grid">

          <div className="fd-team-message-title fd-reveal-left">

            <h3>
              A company
              <br />
              is only as
              <br />
              <span>strong as its people.</span>
            </h3>

          </div>

          <div className="fd-team-message-copy fd-reveal-right">

            <p>
              From the beginning, I believed team-building was a
              critical factor of growth. I was focused and selective
              in choosing people who believed in a quality mindset
              and shared the organisation's core values.
            </p>

            <p>
              Today, I am grateful for the team members who have
              been with me from the beginning. Seeing them settled
              and happy in their lives is a real success for me.
            </p>

            <div className="fd-team-values">

              <span>PEOPLE</span>
              <span>TRUST</span>
              <span>GROWTH</span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          VISION
      ========================================= */}

      <section className="fd-vision-section">

        <div className="fd-vision-box">

          <div className="fd-vision-side">

            <span>
              03 / VISION
            </span>

            <div className="fd-vision-number">
              2030
            </div>

          </div>

          <div className="fd-vision-main">

            <span className="fd-vision-kicker">
              LOOKING AHEAD
            </span>

            <h3>
  To become the{" "}
  <span>
    preferred printing{" "}
  </span>
  &amp; packaging partner.
</h3>

            <p>
              We will continue to focus on quality,
              cost-effectiveness and commitment without
              compromise. A positive working atmosphere,
              timely deliverables and a quality mindset will
              remain at the heart of Fairdeal.
            </p>

            <div className="fd-vision-points">

              <div>
                <strong>01</strong>
                <span>QUALITY</span>
              </div>

              <div>
                <strong>02</strong>
                <span>COST-EFFECTIVENESS</span>
              </div>

              <div>
                <strong>03</strong>
                <span>COMMITMENT</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CLOSING
      ========================================= */}

      <section className="fd-closing">

        <div className="fd-closing-inner">

          <div className="fd-closing-top">

            <span>1990 — NOW</span>
            <span>AND BEYOND</span>

          </div>

          <h2>
            The journey
            <span>
              continues.
            </span>
          </h2>

          <div className="fd-closing-bottom">

            <p>
              We promise to keep upgrading every day and remain
              a catalyst for wealth creation through premium
              printing and packaging solutions.
            </p>

            <div>

              <strong>FAIRDEAL</strong>

              <span>
                PRINT PACK INDIA PVT. LTD.
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          STYLES
      ========================================= */}

      <style>{`

        /* =====================================================
           ROOT
        ===================================================== */

        .fd-from-desk {
          --fd-bg: #05090B;
          --fd-panel: #0C1419;
          --fd-panel-2: #111B21;
          --fd-yellow: #FFDF00;
          --fd-mint: #8FE7C8;
          --fd-white: #F5F7F8;
          --fd-gray: #98A1B1;

          position: relative;

          overflow: hidden;

          background:
            var(--fd-bg);

          color:
            var(--fd-white);

          font-family:
             "Lato", system-ui, sans-serif;
        }


        .fd-from-desk *,
        .fd-from-desk *::before,
        .fd-from-desk *::after {
          box-sizing: border-box;
        }


        /* =====================================================
           BACKGROUND
        ===================================================== */

        .fd-floating-circle {
          position: absolute;

          width: 400px;
          height: 400px;

          border-radius: 50%;

          pointer-events: none;

          opacity: 0.08;

          z-index: 0;
        }


        .fd-circle-one {
          top: 5%;
          right: -200px;

          border:
            1px solid
            var(--fd-yellow);
        }


        .fd-circle-two {
          top: 55%;
          left: -250px;

          border:
            1px solid
            var(--fd-mint);
        }


        /* =====================================================
           INTRO
        ===================================================== */

        .fd-intro-section {
          position: relative;

          z-index: 2;

          padding:
            10px
            7vw
            75px;
        }


        .fd-intro-header {
          display: flex;

          align-items: center;

          gap: 22px;

          margin-bottom: 45px;
        }


        .fd-intro-label {
          display: flex;

          align-items: center;

          gap: 9px;

          flex-shrink: 0;

          color:
            var(--fd-yellow);

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.22em;
        }


        .fd-dot {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background:
            var(--fd-yellow);
        }


        .fd-intro-line {
          height: 1px;

          flex: 1;

          background:
            rgba(245,247,248,0.15);

          transform-origin:
            left;
        }


        .fd-intro-year {
          color:
            var(--fd-gray);

          font-size: 10px;

          letter-spacing: 0.18em;
        }


        .fd-intro-grid {
          display: grid;

          grid-template-columns:
            minmax(300px, 1.1fr)
            minmax(300px, 0.9fr);

          gap: 8vw;

          align-items: end;
        }


        .fd-intro-title h2 {
          margin: 0;

          max-width: 750px;

          font-size:
            clamp(2.25rem, 4.7vw, 4.4rem);

          line-height: 0.95;

          font-weight: 500;

          letter-spacing: -0.055em;
        }


        .fd-intro-title h2 span {
          color:
            var(--fd-yellow);
        }


        .fd-intro-copy {
          max-width: 520px;
        }


        .fd-intro-copy p {
          margin:
            0 0 18px;

          color:
            var(--fd-gray);

          font-size: 15px;

          line-height: 1.8;
        }


        .fd-intro-bottom {
          display: grid;

          grid-template-columns:
            1fr
            1fr
            1.6fr;

          gap: 20px;

          margin-top: 65px;

          padding-top: 25px;

          border-top:
            1px solid
            rgba(245,247,248,0.1);
        }


        .fd-small-stat {
          display: flex;

          align-items: baseline;

          gap: 14px;
        }


        .fd-small-stat strong {
          color:
            var(--fd-yellow);

          font-size: 38px;

          font-weight: 400;

          letter-spacing: -0.05em;
        }


        .fd-small-stat > span {
          color:
            var(--fd-gray);

          font-size: 8px;

          font-weight: 700;

          letter-spacing: 0.16em;
        }


        .fd-small-description {
          display: flex;

          align-items: center;

          justify-content: flex-end;

          gap: 20px;
        }


        .fd-small-description > span {
          color:
            var(--fd-mint);

          font-size: 8px;

          letter-spacing: 0.18em;
        }


        .fd-small-description p {
          margin: 0;

          color:
            var(--fd-white);

          font-size: 13px;
        }


        /* =====================================================
           JOURNEY
        ===================================================== */

        .fd-story-wrapper {
          position: relative;

          height: 100vh;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 30% 50%,
              rgba(143,231,200,0.04),
              transparent 30%
            ),
            var(--fd-bg);
        }


        .fd-story-topbar {
          position: absolute;

          top: 35px;
          left: 7vw;
          right: 7vw;

          z-index: 10;

          display: flex;

          align-items: center;

          justify-content: space-between;

          font-size: 10px;

          letter-spacing: 0.25em;

          color:
            var(--fd-gray);
        }


        .fd-year-counter {
          color:
            var(--fd-yellow);

          font-size: 14px;

          font-weight: 700;

          letter-spacing: 0.15em;
        }


        .fd-progress {
          position: absolute;

          top: 60px;

          left: 7vw;
          right: 7vw;

          height: 1px;

          background:
            rgba(245,247,248,0.12);

          z-index: 10;
        }


        .fd-progress-fill {
          width: 100%;
          height: 100%;

          background:
            var(--fd-yellow);

          transform:
            scaleX(0);

          transform-origin:
            left center;
        }


        .fd-story-track {
          height: 100%;

          display: flex;

          align-items: center;

          width: max-content;

          padding:
            0 7vw;

          gap: 8vw;

          will-change:
            transform;
        }


        .fd-story-card {
          position: relative;

          flex: 0 0 auto;

          width:
            min(72vw,900px);

          min-height: 58vh;

          padding: 65px;

          display: flex;

          flex-direction: column;

          justify-content: center;

          background:
            linear-gradient(
              135deg,
              rgba(17,27,33,0.98),
              rgba(12,20,25,0.92)
            );

          border:
            1px solid
            rgba(245,247,248,0.09);

          border-radius: 5px;

          overflow: hidden;

          box-shadow:
            0 30px 100px
            rgba(0,0,0,0.35);
        }


        .fd-story-card::before {
          content: "";

          position: absolute;

          top: 0;
          left: 0;

          width: 3px;
          height: 100%;

          background:
            var(--fd-yellow);
        }


        .fd-card-number {
          position: absolute;

          top: 28px;
          right: 35px;

          color:
            rgba(245,247,248,0.18);

          font-size: 12px;

          font-weight: 700;

          letter-spacing: 0.15em;
        }


        .fd-card-content {
          max-width: 650px;
        }


        .fd-card-year {
          display: block;

          margin-bottom: 22px;

          color:
            var(--fd-mint);

          font-size: 11px;

          font-weight: 700;

          letter-spacing: 0.25em;
        }


        .fd-card-content h3 {
          margin:
            0 0 28px;

          font-size:
            clamp(44px,5vw,78px);

          line-height: 0.95;

          letter-spacing: -0.045em;

          font-weight: 500;
        }


        .fd-card-content p {
          max-width: 580px;

          margin: 0;

          color:
            var(--fd-gray);

          font-size: 16px;

          line-height: 1.8;
        }


        .fd-story-start {
          width:
            min(82vw,1050px);

          background:
            linear-gradient(
              135deg,
              rgba(255,223,0,0.08),
              rgba(17,27,33,0.98) 45%
            );
        }


        .fd-card-marker {
          position: absolute;

          bottom: 45px;
          right: 55px;

          display: flex;

          gap: 6px;
        }


        .fd-card-marker span {
          width: 4px;
          height: 4px;

          background:
            var(--fd-yellow);

          border-radius: 50%;
        }


        .fd-mini-highlight {
          display: flex;

          align-items: center;

          gap: 15px;

          margin-top: 40px;

          padding-top: 20px;

          border-top:
            1px solid
            rgba(245,247,248,0.1);
        }


        .fd-mini-highlight strong {
          color:
            var(--fd-yellow);

          font-size: 42px;

          font-weight: 400;
        }


        .fd-mini-highlight span {
          color:
            var(--fd-gray);

          font-size: 11px;

          text-transform: uppercase;

          letter-spacing: 0.18em;
        }


        .fd-story-stat-card {
          width:
            min(60vw,720px);

          background:
            var(--fd-yellow);

          color:
            var(--fd-bg);

          justify-content:
            center;
        }


        .fd-story-stat-card::before {
          background:
            var(--fd-bg);
        }


        .fd-big-stat {
          display: grid;

          grid-template-columns:
            auto 1fr;

          align-items: end;

          column-gap: 20px;
        }


        .fd-stat-prefix {
          grid-column:
            1 / -1;

          margin-bottom: -5px;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 0.25em;
        }


        .fd-big-stat .fd-stat-number {
          font-size:
            clamp(120px,16vw,230px);

          line-height: 0.75;

          font-weight: 500;

          letter-spacing: -0.09em;
        }


        .fd-stat-label {
          padding-bottom: 8px;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: 0.15em;
        }


        .fd-story-stat-card > p {
          max-width: 420px;

          margin:
            50px 0 0;

          font-size: 15px;

          line-height: 1.7;
        }


        .fd-client-stat {
          margin-top: 40px;

          display: flex;

          align-items: center;

          gap: 20px;
        }


        .fd-client-stat strong {
          color:
            var(--fd-yellow);

          font-size: 60px;

          font-weight: 400;

          letter-spacing: -0.05em;
        }


        .fd-client-stat span {
          max-width: 100px;

          color:
            var(--fd-gray);

          font-size: 9px;

          font-weight: 700;

          line-height: 1.5;

          letter-spacing: 0.15em;
        }


        .fd-story-values {
          width:
            min(75vw,950px);

          background:
            radial-gradient(
              circle at 75% 45%,
              rgba(143,231,200,0.12),
              transparent 30%
            ),
            var(--fd-panel);
        }


        .fd-values-orbit {
          position: absolute;

          right: 70px;
          bottom: 70px;

          width: 180px;
          height: 180px;

          border:
            1px solid
            rgba(143,231,200,0.3);

          border-radius: 50%;
        }


        .fd-values-orbit::before,
        .fd-values-orbit::after {
          content: "";

          position: absolute;

          inset: 20px;

          border:
            1px solid
            rgba(143,231,200,0.15);

          border-radius: 50%;
        }


        .fd-values-orbit::after {
          inset: 45px;

          border-color:
            rgba(255,223,0,0.25);
        }


        .fd-values-orbit span {
          position: absolute;

          color:
            var(--fd-mint);

          font-size: 7px;

          font-weight: 700;

          letter-spacing: 0.12em;
        }


        .fd-values-orbit span:nth-child(1) {
          top: 12px;
          left: 50%;

          transform:
            translateX(-50%);
        }


        .fd-values-orbit span:nth-child(2) {
          right: -12px;
          top: 50%;

          transform:
            translateY(-50%);
        }


        .fd-values-orbit span:nth-child(3) {
          left: -8px;
          top: 50%;

          transform:
            translateY(-50%);
        }


        .fd-story-team {
          width:
            min(78vw,980px);

          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 70px;

          align-items: center;
        }


        .fd-team-visual {
          position: relative;

          width: 350px;
          height: 350px;

          display: flex;

          align-items: center;

          justify-content: center;
        }


        .fd-team-ring {
          position: absolute;

          border:
            1px solid
            rgba(143,231,200,0.25);

          border-radius: 50%;
        }


        .ring-one {
          width: 330px;
          height: 330px;
        }


        .ring-two {
          width: 240px;
          height: 240px;

          border-color:
            rgba(255,223,0,0.3);
        }


        .ring-three {
          width: 150px;
          height: 150px;

          border-color:
            rgba(143,231,200,0.4);
        }


        .fd-team-center {
          position: relative;

          z-index: 2;

          width: 95px;
          height: 95px;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          background:
            var(--fd-yellow);

          color:
            var(--fd-bg);

          border-radius: 50%;

          text-align: center;
        }


        .fd-team-center span {
          font-size: 8px;

          font-weight: 800;

          letter-spacing: 0.1em;
        }


        .fd-team-center strong {
          margin-top: 3px;

          font-size: 12px;
        }


        .fd-team-text span {
          color:
            var(--fd-mint);

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.2em;
        }


        .fd-team-text p {
          margin:
            25px 0 0;

          color:
            var(--fd-gray);

          font-size: 16px;

          line-height: 1.8;
        }

        .fd-team-text h3 {

          font-size: clamp(44px, 5vw, 78px);;

        }


        /* =====================================================
           SECTION HEADING
        ===================================================== */

        .fd-section-heading {
          display: flex;

          align-items: center;

          gap: 20px;

          margin-bottom: 50px;
        }


        .fd-section-heading span {
          color:
            var(--fd-yellow);

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 0.2em;

          white-space: nowrap;
        }


        .fd-section-heading div {
          height: 1px;

          flex: 1;

          background:
            rgba(245,247,248,0.12);
        }


        /* =====================================================
           FOUNDER MESSAGE
        ===================================================== */

        .fd-message-section {
          position: relative;

          padding:
            100px
            7vw
            90px;

          background:
            var(--fd-bg);
        }


        .fd-founder-layout {
          display: grid;

          grid-template-columns:
            minmax(360px, 0.85fr)
            minmax(450px, 1.15fr);

          gap: 8vw;

          max-width: 1250px;

          align-items: center;
        }


        /* =====================================================
           FOUNDER IMAGE
        ===================================================== */

        .fd-founder-image-wrap {
          position: relative;

          width: 100%;

          max-width: 500px;

          transition:
            transform 0.5s ease;
        }


        .fd-founder-image-wrap:hover {
          transform:
            translateY(-6px);
        }


        .fd-founder-image-frame {
          position: relative;

          width: 100%;

          aspect-ratio: 4 / 5;

          padding: 14px;

          background:
            linear-gradient(
              135deg,
              rgba(255,223,0,0.16),
              rgba(143,231,200,0.06)
            );

          border:
            1px solid
            rgba(245,247,248,0.12);

          overflow: visible;
        }


        .fd-founder-image-inner {
          position: relative;

          width: 100%;
          height: 100%;

          overflow: hidden;

          background:
            var(--fd-panel);
        }


        .fd-founder-image {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          object-position: center;

          filter:
            grayscale(12%)
            contrast(1.05);

          will-change:
            transform;

          transition:
            filter 0.6s ease;
        }


        .fd-founder-image-wrap:hover
        .fd-founder-image {
          filter:
            grayscale(0%)
            contrast(1.05);
        }


        .fd-founder-image-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              180deg,
              transparent 45%,
              rgba(5,9,11,0.35) 100%
            );

          pointer-events: none;
        }


        /* =====================================================
           IMAGE ACCENTS
        ===================================================== */

        .fd-founder-image-accent {
          position: absolute;

          z-index: 5;

          height: 2px;

          background:
            var(--fd-yellow);

          transform-origin:
            left center;
        }


        .fd-founder-image-accent.accent-top {
          top: -10px;

          left: 35px;

          width: 120px;
        }


        .fd-founder-image-accent.accent-bottom {
          bottom: -10px;

          right: 35px;

          width: 90px;

          background:
            var(--fd-mint);

          transform-origin:
            right center;
        }


        /* =====================================================
           FOUNDER LABEL
        ===================================================== */

        .fd-founder-image-label {
          left: -28px;
          bottom: 30px;

          z-index: 10;

          display: flex;

          flex-direction: column;

          gap: 5px;

          padding:
            12px 15px;

          background:
            var(--fd-yellow);

          color:
            var(--fd-bg);

          box-shadow:
            0 15px 35px
            rgba(0,0,0,0.3);
        }


        .fd-founder-image-label span:first-child {
          font-size: 8px;

          font-weight: 800;

          letter-spacing: 0.2em;
        }


        .fd-founder-image-label span:last-child {
          font-size: 11px;

          font-weight: 900;

          letter-spacing: 0.08em;
        }


        /* =====================================================
           FOUNDER CONTENT
        ===================================================== */

        .fd-founder-content {
          max-width: 680px;
        }


        .fd-founder-content .fd-message-intro {
          margin-bottom: 45px;
        }


        .fd-message-intro > span {
          color:
            var(--fd-mint);

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 0.18em;
        }


        .fd-message-intro h3 {
          margin:
            22px 0 0;

          font-size:
            clamp(35px,4vw,58px);

          line-height: 0.98;

          letter-spacing: -0.05em;

          font-weight: 500;
        }


        .fd-message-intro h3 em {
          color:
            var(--fd-yellow);

          font-family:
            Georgia,
            serif;

          font-weight: 400;
        }


        .fd-message-text {
          max-width: 680px;
        }


        .fd-message-text p {
          margin:
            0 0 20px;

          color:
            var(--fd-gray);

          font-size: 15px;

          line-height: 1.85;
        }


        /* =====================================================
           FOUNDER SIGNATURE
        ===================================================== */

        .fd-founder-signature {
          display: flex;

          align-items: center;

          gap: 20px;

          margin-top: 45px;

          padding-top: 25px;

          border-top:
            1px solid
            rgba(245,247,248,0.1);
        }


        .fd-signature-line {
          width: 55px;

          height: 1px;

          background:
            var(--fd-yellow);
        }


        .fd-founder-signature strong {
          display: block;

          color:
            var(--fd-white);

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 0.18em;
        }


        .fd-founder-signature span {
          display: block;

          margin-top: 6px;

          color:
            var(--fd-gray);

          font-size: 7px;

          letter-spacing: 0.14em;
        }


        /* =====================================================
           QUOTE
        ===================================================== */

        .fd-quote-section {
          padding:
            30px
            7vw
            90px;
        }


        .fd-quote-card {
          position: relative;

          max-width: 1250px;

          margin: 0 auto;

          padding:
            42px
            50px;

          background:
            var(--fd-panel);

          border:
            1px solid
            rgba(245,247,248,0.08);

          border-radius: 6px;

          overflow: hidden;
        }


        .fd-quote-top {
          display: flex;

          justify-content: space-between;

          color:
            var(--fd-gray);

          font-size: 8px;

          font-weight: 700;

          letter-spacing: 0.2em;
        }


        .fd-quote-accent {
          width: 90px;
          height: 2px;

          margin:
            32px 0 35px;

          background:
            var(--fd-yellow);

          transform-origin:
            left;
        }


        .fd-quote-card blockquote {
          max-width: 1050px;

          margin: 0;

          font-size:
            clamp(32px,4.5vw,65px);

          line-height: 1;

          letter-spacing: -0.05em;

          font-weight: 400;
        }


        .fd-quote-card blockquote span {
          color:
            var(--fd-yellow);
        }


        .fd-quote-footer {
          display: flex;

          justify-content: space-between;

          align-items: center;

          margin-top: 45px;

          padding-top: 20px;

          border-top:
            1px solid
            rgba(245,247,248,0.08);

          color:
            var(--fd-gray);

          font-size: 9px;

          letter-spacing: 0.12em;
        }


        .fd-quote-footer span:first-child {
          color:
            var(--fd-white);
        }


        /* =====================================================
           TEAM MESSAGE
        ===================================================== */

        .fd-team-message {
          padding:
            30px
            7vw
            100px;
        }


        .fd-team-message-grid {
          display: grid;

          grid-template-columns:
            1fr
            1fr;

          gap: 9vw;

          max-width: 1250px;
        }


        .fd-team-message-title h3 {
          margin: 0;

          font-size:
            clamp(40px,5vw,70px);

          line-height: 0.92;

          letter-spacing: -0.055em;

          font-weight: 500;
        }


        .fd-team-message-title h3 span {
          color:
            var(--fd-mint);
        }


        .fd-team-message-copy {
          max-width: 600px;
        }


        .fd-team-message-copy p {
          margin:
            0 0 20px;

          color:
            var(--fd-gray);

          font-size: 15px;

          line-height: 1.8;
        }


        .fd-team-values {
          display: flex;

          gap: 8px;

          margin-top: 35px;
        }


        .fd-team-values span {
          padding:
            9px 13px;

          border:
            1px solid
            rgba(143,231,200,0.2);

          color:
            var(--fd-mint);

          border-radius: 50px;

          font-size: 8px;

          letter-spacing: 0.15em;
        }


        /* =====================================================
           VISION
        ===================================================== */

        .fd-vision-section {
          padding:
            30px
            7vw
            100px;
        }


        .fd-vision-box {
          max-width: 1250px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            0.3fr
            1.7fr;

          background:
            var(--fd-panel-2);

          border:
            1px solid
            rgba(245,247,248,0.08);

          border-radius: 6px;

          overflow: hidden;
        }


        .fd-vision-side {
          padding: 38px;

          border-right:
            1px solid
            rgba(245,247,248,0.08);

          color:
            var(--fd-mint);

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 0.18em;
        }


        .fd-vision-number {
          margin-top: 100px;

          color:
            rgba(255,223,0,0.2);

          font-size: 55px;

          letter-spacing: -0.06em;
        }


        .fd-vision-main {
          padding:
            55px 60px;
        }


        .fd-vision-kicker {
          color:
            var(--fd-yellow);

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 0.2em;
        }


        .fd-vision-main h3 {
          max-width: 850px;

          margin:
            20px 0 25px;

          font-size:
            clamp(38px,5vw,70px);

          line-height: 0.95;

          letter-spacing: -0.055em;

          font-weight: 500;
        }


        .fd-vision-main h3 span {
          color:
            var(--fd-yellow);
        }


        .fd-vision-main > p {
          max-width: 650px;

          margin: 0;

          color:
            var(--fd-gray);

          font-size: 15px;

          line-height: 1.8;
        }


        .fd-vision-points {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 12px;

          margin-top: 40px;
        }


        .fd-vision-points div {
          padding:
            18px;

          border-top:
            1px solid
            rgba(245,247,248,0.12);
        }


        .fd-vision-points strong {
          display: block;

          margin-bottom: 8px;

          color:
            var(--fd-mint);

          font-size: 9px;
        }


        .fd-vision-points span {
          font-size: 9px;

          letter-spacing: 0.12em;
        }


        /* =====================================================
           CLOSING
        ===================================================== */

        .fd-closing {
          padding:
            85px
            7vw;

          background:
            var(--fd-yellow);

          color:
            var(--fd-bg);
        }


        .fd-closing-inner {
          max-width: 1250px;

          margin: 0 auto;
        }


        .fd-closing-top {
          display: flex;

          justify-content: space-between;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 0.2em;
        }


        .fd-closing h2 {
          margin:
            40px 0 45px;

          font-size:
            clamp(55px,7vw,105px);

          line-height: 0.86;

          letter-spacing: -0.065em;

          font-weight: 500;
        }


        .fd-closing h2 span {
          display: block;

          font-family:
            Georgia,
            serif;

          font-weight: 400;
        }


        .fd-closing-bottom {
          display: flex;

          justify-content: space-between;

          align-items: flex-end;

          gap: 50px;

          padding-top: 25px;

          border-top:
            1px solid
            rgba(5,9,11,0.25);
        }


        .fd-closing-bottom p {
          max-width: 520px;

          margin: 0;

          font-size: 14px;

          line-height: 1.75;
        }


        .fd-closing-bottom div {
          text-align: right;
        }


        .fd-closing-bottom strong {
          display: block;

          font-size: 21px;

          letter-spacing: -0.04em;
        }


        .fd-closing-bottom span {
          display: block;

          margin-top: 5px;

          font-size: 7px;

          font-weight: 700;

          letter-spacing: 0.15em;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {

          .fd-intro-section {
            padding:
              90px
              7vw
              60px;
          }


          .fd-intro-grid {
            grid-template-columns: 1fr;

            gap: 35px;
          }


          .fd-intro-bottom {
            grid-template-columns:
              1fr 1fr;

            gap: 25px;
          }


          .fd-small-description {
            grid-column:
              1 / -1;

            justify-content:
              flex-start;
          }


          .fd-founder-layout {
            grid-template-columns: 1fr;

            gap: 60px;
          }


          .fd-founder-image-wrap {
            max-width: 500px;

            margin: 0 auto;
          }


          .fd-founder-content {
            max-width: 700px;
          }


          .fd-message-grid,
          .fd-team-message-grid {
            grid-template-columns: 1fr;

            gap: 45px;
          }


          .fd-vision-box {
            grid-template-columns: 1fr;
          }


          .fd-vision-side {
            border-right: none;

            border-bottom:
              1px solid
              rgba(245,247,248,0.08);
          }


          .fd-vision-number {
            margin-top: 30px;
          }


          .fd-story-card {
            width: 82vw;

            min-height: 62vh;

            padding: 45px;
          }


          .fd-story-start,
          .fd-story-stat-card,
          .fd-story-values,
          .fd-story-team,
          .fd-story-end {
            width: 82vw;
          }


          .fd-story-team {
            grid-template-columns: 1fr;

            gap: 30px;
          }


          .fd-team-visual {
            width: 230px;
            height: 230px;
          }


          .ring-one {
            width: 220px;
            height: 220px;
          }


          .ring-two {
            width: 160px;
            height: 160px;
          }


          .ring-three {
            width: 105px;
            height: 105px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .fd-intro-section {
            padding:
              75px
              6vw
              55px;
          }


          .fd-intro-header {
            margin-bottom: 35px;
          }


          .fd-intro-title h2 {
            font-size: 48px;
          }


          .fd-intro-copy p {
            font-size: 14px;
          }


          .fd-intro-bottom {
            grid-template-columns: 1fr;
          }


          .fd-small-description {
            display: block;
          }


          .fd-small-description > span {
            display: block;

            margin-bottom: 8px;
          }


          .fd-story-track {
            gap: 25px;

            padding:
              0 6vw;
          }


          .fd-story-card {
            width: 84vw;

            min-height: 64vh;

            padding:
              38px
              28px;
          }


          .fd-card-content h3 {
            font-size: 40px;
          }


          .fd-card-content p {
            font-size: 14px;
          }


          .fd-big-stat .fd-stat-number {
            font-size: 105px;
          }


          .fd-values-orbit {
            opacity: 0.35;

            right: 20px;
            bottom: 20px;

            width: 125px;
            height: 125px;
          }


          .fd-message-section {
            padding:
              75px
              6vw
              70px;
          }


          .fd-founder-layout {
            gap: 45px;
          }


          .fd-founder-image-frame {
            padding: 9px;
          }


          .fd-founder-image-label {
            left: -10px;

            bottom: 20px;

            padding:
              10px 12px;
          }


          .fd-founder-image-accent.accent-top {
            top: -7px;

            left: 20px;

            width: 90px;
          }


          .fd-founder-image-accent.accent-bottom {
            bottom: -7px;

            right: 20px;

            width: 70px;
          }


          .fd-founder-content .fd-message-intro {
            margin-bottom: 30px;
          }


          .fd-message-intro h3 {
            font-size: 40px;
          }


          .fd-message-text p {
            font-size: 14px;
          }


          .fd-founder-signature {
            margin-top: 30px;
          }


          .fd-quote-section,
          .fd-team-message,
          .fd-vision-section {
            padding-left: 6vw;
            padding-right: 6vw;
          }


          .fd-quote-card {
            padding:
              30px 25px;
          }


          .fd-quote-card blockquote {
            font-size: 35px;
          }


          .fd-quote-footer {
            display: block;
          }


          .fd-quote-footer span {
            display: block;

            margin-top: 8px;
          }


          .fd-vision-main {
            padding:
              35px 28px;
          }


          .fd-vision-points {
            grid-template-columns: 1fr;
          }


          .fd-closing {
            padding:
              70px 6vw;
          }


          .fd-closing h2 {
            font-size: 58px;
          }


          .fd-closing-bottom {
            display: block;
          }


          .fd-closing-bottom div {
            margin-top: 30px;

            text-align: left;
          }

        }

      `}</style>

    </section>
  );
};

export default FromMyDesk;