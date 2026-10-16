import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GradientButton } from "../shared/GradientButton";
import logoImage from "../../assets/images/logo.png";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
];

/* ---------- small inline icons (no extra dependency) ---------- */
const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const ClockIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const PinIcon = () => (
  <svg {...iconProps}>
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

const PhoneIcon = () => (
  <svg {...iconProps}>
    <path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5L15 13l4 1.5V18a2 2 0 0 1-2 2A13 13 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

const MailIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg {...iconProps} width={16} height={16} strokeWidth={1.8}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
);

/* ---------- reusable pieces ---------- */
const FooterHeading = ({ id, children, accent }) => (
  <div className="flex items-center gap-4">
    <span className="h-[2px] w-6 rounded-full" style={{ backgroundColor: accent }} />
    <h2
      id={id}
      className="text-[11px] font-semibold uppercase tracking-[0.2em] sm:text-xs"
      style={{ color: accent }}
    >
      {children}
    </h2>
  </div>
);

const InfoRow = ({ icon, accent, children }) => (
  <div className="flex items-start gap-4">
    <span className="mt-[2px] shrink-0" style={{ color: accent }}>
      {icon}
    </span>
    <div className="text-sm leading-[1.7]">{children}</div>
  </div>
);

export const Footer = () => {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "dark"
  );

  useEffect(() => {
    const syncTheme = () => {
      setTheme(document.documentElement.getAttribute("data-theme") || "dark");
    };

    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const isLight = theme === "light";

  const accent = isLight ? "#0F9D78" : "#8FE7C8";
  const textMain = isLight ? "text-[#1b1b1b]" : "text-white";
  const textMuted = isLight ? "text-[#1b1b1b]/70" : "text-white/70";
  const rule = isLight ? "border-[#1b1b1b]/10" : "border-white/10";
  const hoverAccent = isLight ? "hover:text-[#0F9D78]" : "hover:text-[#8FE7C8]";

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className={[
        "relative w-full overflow-hidden px-6 pt-12 pb-8 sm:px-10 lg:px-[80px]",
        isLight ? "bg-[#FFFFE9] text-[#1b1b1b]" : "bg-[#05080a] text-white",
      ].join(" ")}
    >
      <div className="relative mx-auto flex w-full max-w-[1500px] flex-col">
        {/* ---------- top: logo + CTA ---------- */}
        <div
          className={[
            "flex flex-col gap-8 border-b pb-8 sm:flex-row sm:items-center sm:justify-between",
            rule,
          ].join(" ")}
        >
          <Link to="/" aria-label="Fairdeal Print Pack home" className="inline-flex w-fit">
            <img
              src={logoImage}
              alt="Fairdeal Print Pack"
              className="h-16 w-auto object-contain sm:h-[72px]"
            />
          </Link>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
            <p className="text-base font-normal tracking-[-0.3px] sm:text-lg">
              Ready to get started?
            </p>
            <GradientButton
              to="/contact"
              className="h-[52px] px-[35px] text-sm font-medium tracking-[-0.23px] sm:text-base"
            >
              Get started
            </GradientButton>
          </div>
        </div>

        {/* ---------- middle: 3 columns ---------- */}
        <div className="grid gap-12 pt-12 pb-14 sm:grid-cols-2 lg:grid-cols-[1fr_1.1fr_1fr] lg:gap-x-16">
          {/* Quick links */}
          <nav aria-labelledby="quick-links-heading">
            <FooterHeading id="quick-links-heading" accent={accent}>
              Quick Links
            </FooterHeading>
            <ul className="mt-6 space-y-4 pl-6 sm:pl-7">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className={[
                      "group inline-flex items-center gap-2 text-sm transition-all duration-300 sm:text-base",
                      textMain,
                      hoverAccent,
                    ].join(" ")}
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {item.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="-translate-x-2 text-base opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Working hours + Address */}
          <div className="flex flex-col gap-7">
            <section aria-labelledby="hours-heading">
              <FooterHeading id="hours-heading" accent={accent}>
                Working Hours
              </FooterHeading>
              <div className={["mt-6", textMain].join(" ")}>
                <InfoRow icon={<ClockIcon />} accent={accent}>
                  Mon - Sun: 9 am - 5.30 pm
                  <br />
                  Weekly Off: Sunday
                </InfoRow>
              </div>
            </section>

            <div className={["h-px w-full max-w-[440px] border-t", rule].join(" ")} />

            <section aria-labelledby="address-heading">
              <FooterHeading id="address-heading" accent={accent}>
                Address
              </FooterHeading>
              <div className={["mt-6", textMain].join(" ")}>
                <InfoRow icon={<PinIcon />} accent={accent}>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Fairdeal+Print+Pack+Mohanagar+Chinchwad+411033"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={["transition-colors", hoverAccent].join(" ")}
                  >
                    Fairdeal Print Pack, Mohanagar,
                    <br />
                    Chinchwad 411033
                  </a>
                </InfoRow>
              </div>
            </section>
          </div>

          {/* Contact */}
          <section aria-labelledby="contact-heading">
            <FooterHeading id="contact-heading" accent={accent}>
              Contact Us
            </FooterHeading>
            <div className={["mt-6 space-y-5", textMain].join(" ")}>
              <InfoRow icon={<PhoneIcon />} accent={accent}>
                <a
                  href="tel:+912027474888"
                  className={["transition-colors", hoverAccent].join(" ")}
                >
                  020 2747 4888
                </a>
              </InfoRow>
              <InfoRow icon={<MailIcon />} accent={accent}>
                <a
                  href="mailto:info@fairdealprintpack.com"
                  className={["break-all transition-colors", hoverAccent].join(" ")}
                >
                  info@fairdealprintpack.com
                </a>
              </InfoRow>
            </div>
          </section>
        </div>

        {/* ---------- bottom bar ---------- */}
        <div
          className={[
            "flex flex-col gap-5 border-t pt-6 sm:flex-row sm:items-center sm:justify-between",
            rule,
          ].join(" ")}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <nav
              className="flex flex-wrap items-center gap-x-5 gap-y-2"
              aria-label="Legal information"
            >
              <Link
                to="/terms-and-conditions"
                className={["text-sm transition-colors sm:text-[15px]", textMuted, hoverAccent].join(" ")}
              >
                Terms &amp; Conditions
              </Link>
              <span aria-hidden="true" className={textMuted}>
                |
              </span>
              <Link
                to="/privacy-policy"
                className={["text-sm transition-colors sm:text-[15px]", textMuted, hoverAccent].join(" ")}
              >
                Privacy Policy
              </Link>
            </nav>

            <p className={["text-xs sm:text-[13px]", textMuted].join(" ")}>
              © {new Date().getFullYear()} Fairdeal Print Pack. All rights reserved.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className={[
              "group inline-flex h-10 w-10 items-center justify-center self-start rounded-full border transition-all duration-300 hover:-translate-y-1 sm:self-auto",
              rule,
              textMain,
              hoverAccent,
              isLight ? "hover:border-[#0F9D78]" : "hover:border-[#8FE7C8]",
            ].join(" ")}
          >
            <ArrowUpIcon />
          </button>
        </div>
      </div>
    </footer>
  );
};