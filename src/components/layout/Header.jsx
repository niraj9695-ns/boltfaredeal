
import {
  ChevronDownIcon,
  MoonIcon,
  SunMediumIcon,
} from "lucide-react";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { GradientButton } from "../shared/GradientButton";
import { cn } from "../../lib/utils";
import logoImage from "../../assets/images/logo.png";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact us", to: "/contact" },
];

export const Header = ({ theme = "dark", onToggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDark = theme === "dark";

  return (
    <>
      {/* =========================
          DESKTOP HEADER
      ========================== */}
      <header className="absolute left-1/2 top-[41px] z-30 hidden w-[min(90%,841px)] -translate-x-1/2 items-center rounded-[100px] bg-white py-2.5 pl-[26px] pr-2.5 text-[#1e1e1e] md:flex dark:border-transparent dark:shadow-none border border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
        <Link
          to="/"
          aria-label="Fairdeal Print Pack home"
          className="flex shrink-0 items-center gap-2 transition-transform duration-300 hover:scale-[1.02]"
        >
          <img
            src={logoImage}
            alt="Fairdeal Print Pack"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav className="mx-auto flex items-center gap-[25px]">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "nav-item inline-flex items-center justify-center py-2.5 font-normal text-base leading-normal transition-all duration-300 hover:text-[#92d1bc]",
                  isActive && "active text-[#92d1bc]",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop Theme Toggle */}
          {/* <button
            type="button"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={onToggleTheme}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#1e1e1e]/10 bg-[#f4f1eb] text-[#1e1e1e] transition-transform duration-300 hover:scale-105"
          >
            {isDark ? (
              <SunMediumIcon className="h-4 w-4" />
            ) : (
              <MoonIcon className="h-4 w-4" />
            )}
          </button> */}

          <GradientButton
            to="/contact"
            className="w-[136px] p-2.5 text-sm font-normal"
          >
            Contact us
          </GradientButton>
        </div>
      </header>

      {/* =========================
          MOBILE HEADER
      ========================== */}
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-[60] flex items-center justify-between gap-2 px-4 py-3 shadow-sm backdrop-blur-md md:hidden",
          isDark
            ? "border-b border-white/10 bg-[#0d1117]/70 text-white"
            : "border-b border-[#1e1e1e]/10 bg-white/75 text-[#1e1e1e]",
        )}
      >
        <Link
          to="/"
          className="flex min-w-0 shrink-0 items-center gap-2"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src={logoImage}
            alt="Fairdeal Print Pack"
            className="h-8 w-auto object-contain"
          />
        </Link>

        <div className="ml-auto flex shrink-0 items-center gap-2">

          {/* =========================
              
          ========================== */}
          {/* <button
            type="button"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={onToggleTheme}
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border shadow-sm transition-transform duration-300 hover:scale-105",
              isDark
                ? "border-white/10 bg-white/10 text-white"
                : "border-[#1e1e1e]/10 bg-[#f4f1eb] text-[#1e1e1e]",
            )}
          >
            {isDark ? (
              <SunMediumIcon className="h-4 w-4" />
            ) : (
              <MoonIcon className="h-4 w-4" />
            )}
          </button> */}

          {/* =========================
              
          ========================== */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className={cn(
              "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full shadow-sm transition-transform duration-300 hover:scale-105",
              isDark
                ? "border border-white/10 bg-white/10"
                : "border border-[#1e1e1e]/10 bg-[#f4f1eb]",
            )}
          >
            <span className="relative inline-flex h-4 w-5 items-center justify-center">
              {/* Top line */}
              <span
                className={cn(
                  "absolute block h-[2px] w-5 rounded-full transition-all duration-300 ease-out",
                  mobileOpen
                    ? "translate-y-0 rotate-45"
                    : "-translate-y-1.5",
                )}
                style={{
                  backgroundColor: isDark ? "#ffffff" : "#1e1e1e",
                }}
              />

              {/* Middle line */}
              <span
                className={cn(
                  "absolute block h-[2px] w-5 rounded-full transition-all duration-300 ease-out",
                  mobileOpen ? "opacity-0" : "opacity-100",
                )}
                style={{
                  backgroundColor: isDark ? "#ffffff" : "#1e1e1e",
                }}
              />

              {/* Bottom line */}
              <span
                className={cn(
                  "absolute block h-[2px] w-5 rounded-full transition-all duration-300 ease-out",
                  mobileOpen
                    ? "translate-y-0 -rotate-45"
                    : "translate-y-1.5",
                )}
                style={{
                  backgroundColor: isDark ? "#ffffff" : "#1e1e1e",
                }}
              />
            </span>
          </button>
        </div>
      </header>

      {/* =========================
          MOBILE MENU
      ========================== */}
      {mobileOpen && (
        <div
          className={cn(
            "fixed inset-0 top-[52px] z-[55] md:hidden",
            isDark
              ? "bg-[#0d1117]/80 backdrop-blur-md"
              : "bg-white/80 backdrop-blur-md",
          )}
        >
          <nav className="flex flex-col gap-2 px-6 py-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "nav-item border-b py-4 text-lg font-normal transition-all duration-300 hover:text-[#92d1bc]",
                    isDark
                      ? "border-white/10 text-white"
                      : "border-[#1e1e1e]/10 text-[#1e1e1e]",
                    isActive && "active text-[#92d1bc]",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Contact button only */}
            <div className="mt-6">
              <GradientButton
                to="/contact"
                className="w-full p-3 text-base font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Contact us
                <ChevronDownIcon className="h-4 w-4 -rotate-90" />
              </GradientButton>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

