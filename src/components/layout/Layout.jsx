import { useEffect, useRef, useState } from "react";

import { Outlet, useLocation } from "react-router-dom";
import Lenis from "lenis";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { CursorSpotlight } from "./CursorSpotlight";

export const Layout = () => {
  const { pathname } = useLocation();
  const lenisRef = useRef(null);

  const [theme, setTheme] = useState(() => {
    const saved = window.localStorage.getItem("faredeal-theme");
    return saved || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("faredeal-theme", theme);
  }, [theme]);

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { duration: 0.8 });
  }, [pathname]);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const defaultTextTargets = document.querySelectorAll(
      "p, li, h1, h2, h3, h4, label, dt, dd, .stat-item, .service-card-copy, .contact-card",
    );

    defaultTextTargets.forEach((element, index) => {
      if (!element.dataset.reveal) {
        element.dataset.reveal = index % 2 === 0 ? "left" : "right";
      }
    });

    const revealElements = document.querySelectorAll(
      "[data-reveal], .portfolio-card, .stat-item, .magnetic-button, form, .contact-card",
    );

    if (!revealElements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          const direction = target.dataset.reveal || "up";

          target.style.transitionDelay = `${Math.min(
            Number(target.dataset.delay || 0),
            220,
          )}ms`;

          if (entry.isIntersecting) {
            target.classList.add("is-visible");
            target.dataset.reveal = direction;
          } else {
            target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -5% 0px",
      },
    );

    revealElements.forEach((element, index) => {
      const direction = element.dataset.reveal || "up";

      element.dataset.reveal = direction;
      element.dataset.delay = String(Math.min(index * 45, 220));
      element.classList.remove("is-visible");

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.18;

      document.documentElement.style.setProperty(
        "--scroll-shift",
        `${offset}px`,
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHome = pathname === "/";

  return (
    <main
      data-theme={theme}
      className="relative isolate mx-auto w-full max-w-[1440px] overflow-x-clip bg-[var(--theme-bg)] text-[var(--theme-text)]"
    >
      <CursorSpotlight />

      <Header
        theme={theme}
        onToggleTheme={() =>
          setTheme((current) =>
            current === "dark" ? "light" : "dark",
          )
        }
      />

      {isHome ? (
        <Outlet />
      ) : (
        <div id="main-content" className="pt-[52px] md:pt-0">
          <Outlet />
        </div>
      )}

      <Footer />
    </main>
  );
};