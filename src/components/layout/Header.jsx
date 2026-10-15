import { ChevronDownIcon } from "lucide-react";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { GradientButton } from "../shared/GradientButton";
import { cn } from "../../lib/utils";
import logoImage from "../../assets/images/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
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
          One row, 3 columns: logo | glass menu pill | button.
          The middle column is always truly centered, and all three
          items share the same vertical center.
      ========================== */}
      <div className="absolute inset-x-0 top-5 z-30 hidden grid-cols-[1fr_auto_1fr] items-center pl-[6.7%] pr-8 md:grid">
        {/* Logo (left) - bigger */}
        <Link
          to="/"
          aria-label="Fairdeal Print Pack home"
          className="justify-self-start transition-transform duration-300 hover:scale-[1.03]"
        >
          <img
            src={logoImage}
            alt="Fairdeal Print Pack"
            className="h-[92px] w-auto object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,0.35)] lg:h-[104px]"
          />
        </Link>

        {/* Glass menu pill (center) */}
        <header
          className={cn(
            "flex h-[56px] items-center justify-center rounded-[100px] border px-3 backdrop-blur-xl backdrop-saturate-150 lg:px-4",
            isDark
              ? "border-white/25 bg-gradient-to-b from-white/[0.18] to-white/[0.06] text-white shadow-[0_8px_32px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.35)]"
              : "border-white/60 bg-gradient-to-b from-white/70 to-white/45 text-[#1e1e1e] shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)]",
          )}
        >
          <nav className="flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "nav-item inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-normal leading-normal transition-all duration-300 hover:text-[#92d1bc] lg:px-5 lg:text-base",
                    isDark ? "hover:bg-white/10" : "hover:bg-black/5",
                    isActive &&
                      cn(
                        "active text-[#92d1bc]",
                        isDark ? "bg-white/15" : "bg-black/5",
                      ),
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </header>

        {/* Quote button (right) - grows to fit its text */}
        <GradientButton
          to="/contact"
          className="inline-flex h-12 items-center justify-center justify-self-end whitespace-nowrap px-6 text-sm font-normal"
        >
          Request a Quote
        </GradientButton>
      </div>

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
            className="h-9 w-auto object-contain"
          />
        </Link>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          {/* Menu toggle */}
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
                  mobileOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5",
                )}
                style={{ backgroundColor: isDark ? "#ffffff" : "#1e1e1e" }}
              />

              {/* Middle line */}
              <span
                className={cn(
                  "absolute block h-[2px] w-5 rounded-full transition-all duration-300 ease-out",
                  mobileOpen ? "opacity-0" : "opacity-100",
                )}
                style={{ backgroundColor: isDark ? "#ffffff" : "#1e1e1e" }}
              />

              {/* Bottom line */}
              <span
                className={cn(
                  "absolute block h-[2px] w-5 rounded-full transition-all duration-300 ease-out",
                  mobileOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5",
                )}
                style={{ backgroundColor: isDark ? "#ffffff" : "#1e1e1e" }}
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

            {/* Quote button only */}
            <div className="mt-6">
              <GradientButton
                to="/contact"
                className="w-full p-3 text-base font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Request a Quote
                <ChevronDownIcon className="h-4 w-4 -rotate-90" />
              </GradientButton>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};