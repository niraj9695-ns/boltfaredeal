import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GradientButton } from "../shared/GradientButton";
import { cn } from "../../lib/utils";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact us", to: "/contact" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop header */}
      <header className="absolute left-1/2 top-[41px] z-30 hidden w-[min(90%,841px)] -translate-x-1/2 items-center rounded-[100px] bg-white py-2.5 pl-[26px] pr-2.5 text-[#1e1e1e] md:flex">
        <Link
          to="/"
          aria-label="Fairdeal Print Pack home"
          className="flex shrink-0 items-center gap-2"
        >
          <span className="text-xl font-bold tracking-tight [font-family:'Merriweather',Helvetica]">
            Fairdeal
          </span>
          <span className="rounded bg-[#1e1e1e] px-1.5 py-0.5 text-xs font-semibold text-white">
            PP
          </span>
        </Link>
        <nav className="mx-auto flex items-center gap-[25px]">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "inline-flex items-center justify-center py-2.5 font-normal text-base leading-normal transition-colors hover:text-[#92d1bc]",
                  isActive && "text-[#92d1bc]",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <GradientButton to="/contact" className="w-[136px] p-2.5 text-sm font-normal">
          Contact us
        </GradientButton>
      </header>

      {/* Mobile header */}
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-white px-4 py-3 text-[#1e1e1e] shadow-sm md:hidden">
        <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <span className="text-lg font-bold [font-family:'Merriweather',Helvetica]">
            Fairdeal
          </span>
          <span className="rounded bg-[#1e1e1e] px-1.5 py-0.5 text-[10px] font-semibold text-white">
            PP
          </span>
        </Link>
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="rounded-md p-1.5 transition-colors hover:bg-gray-100"
        >
          {mobileOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[52px] z-40 bg-black/95 md:hidden">
          <nav className="flex flex-col gap-2 px-6 py-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "border-b border-white/10 py-4 text-lg font-normal text-white transition-colors hover:text-[#92d1bc]",
                    isActive && "text-[#92d1bc]",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <GradientButton
              to="/contact"
              className="mt-6 w-full p-3 text-base font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Contact us
              <ChevronDownIcon className="h-4 w-4 -rotate-90" />
            </GradientButton>
          </nav>
        </div>
      )}
    </>
  );
};
