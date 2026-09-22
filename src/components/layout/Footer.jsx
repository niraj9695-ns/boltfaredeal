import { ArrowRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { GradientButton } from "../shared/GradientButton";
import logoImage from "../../assets/images/logo.png";

const services = [
  "Flexo Printing",
  "Offset Printing",
  "Corrugated Packaging",
  "BOPP Tapes",
  "Screen Printing",
  "Labels & Stickers",
];

const serviceLinks = [
  { label: "Flexo Printing", to: "/services/flexo-printing" },
  { label: "Offset Printing", to: "/services/offset-printing" },
  { label: "Corrugated Packaging", to: "/services/corrugated-packaging" },
  { label: "BOPP Tapes", to: "/services/bopp-tapes" },
  { label: "Screen Printing", to: "/services/screen-printing" },
  { label: "Labels & Stickers", to: "/services/labels-and-stickers" },
];

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute("data-theme") || "dark");

  useEffect(() => {
    const syncTheme = () => {
      setTheme(document.documentElement.getAttribute("data-theme") || "dark");
    };

    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  const isLightTheme = theme === "light";

  return (
    <footer
      className={[
        "w-full px-4 py-8 sm:px-10 lg:px-[130px]",
        isLightTheme ? "bg-[#FFFFE9] text-[#1b1b1b]" : "bg-[#05080a] text-white",
      ].join(" ")}
    >
      <div className="mx-auto flex w-full max-w-[1180px] flex-col">
        <div className={[
          "flex min-h-[102px] flex-col justify-between gap-8 border-b-[3px] pb-[25px] sm:flex-row sm:items-start",
          isLightTheme ? "border-[#1b1b1b]/10" : "border-white/10",
        ].join(" ")}>
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImage} alt="Fairdeal Print Pack" className="h-10 w-auto object-contain" />
          </Link>
          <div className="flex flex-col items-start gap-4 sm:mt-[11px] sm:flex-row sm:items-center sm:gap-[34px]">
            <p className={[
              "text-lg font-normal leading-normal tracking-[-0.3px] sm:text-[22px]",
              isLightTheme ? "text-[#1b1b1b]" : "text-white",
            ].join(" ")}>
              Ready to get started?
            </p>
            <GradientButton to="/contact" className="h-[52px] px-[35px] text-base font-medium tracking-[-0.23px] sm:text-[17px]">
              Get started
            </GradientButton>
          </div>
        </div>

        <div className="flex flex-col pt-[39px]">
          <div className="grid gap-10 lg:grid-cols-[332px_minmax(0,1fr)] lg:gap-[121px]">
            <section aria-labelledby="newsletter-heading">
              <h2
                id="newsletter-heading"
                className="text-xl font-normal leading-normal tracking-[-0.3px] sm:text-[22px]"
              >
                Subscribe to our
                <br />
                newsletter
              </h2>
              <form
                className={[
                  "mt-[17px] flex h-[51px] items-start border-b-[3px]",
                  isLightTheme ? "border-[#1b1b1b]/20" : "border-white/[0.18]",
                ].join(" ")}
                onSubmit={(e) => {
                  e.preventDefault();
                  setEmail("");
                }}
              >
                <label className="sr-only" htmlFor="footer-email">
                  Email address
                </label>
                <Input
                  id="footer-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className={[
                    "h-[50px] flex-1 rounded-none border-0 bg-transparent px-0 text-sm tracking-[-0.2px] focus-visible:ring-0 sm:text-[15px]",
                    isLightTheme ? "text-[#1b1b1b] placeholder:text-[#1b1b1b]/50" : "text-white placeholder:text-white/50",
                  ].join(" ")}
                />
                <Button
                  type="submit"
                  size="icon"
                  aria-label="Submit email address"
                  className={[
                    "h-[50px] w-[50px] shrink-0 rounded-none bg-transparent hover:bg-transparent",
                    isLightTheme ? "text-[#1b1b1b]" : "text-white",
                  ].join(" ")}
                >
                  <ArrowRightIcon className="h-5 w-5" />
                </Button>
              </form>
            </section>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[154px_210px_194px] lg:gap-x-[90px]">
              <nav aria-labelledby="services-heading">
                <h2
                  id="services-heading"
                  className="text-base font-medium leading-normal tracking-[-0.23px] text-[#92d1bc] sm:text-[17px]"
                >
                  Services
                </h2>
                <ul className="mt-[14px] space-y-0">
                  {serviceLinks.map((service) => (
                    <li key={service.label}>
                      <Link
                        to={service.to}
                        className={[
                          "block text-sm font-normal leading-[43px] transition-colors hover:text-[#92d1bc]",
                          isLightTheme ? "text-[#1b1b1b]" : "text-white",
                        ].join(" ")}
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex flex-col gap-8">
                <section>
                  <h2 className="text-base font-medium leading-normal tracking-[-0.3px] text-[#92d1bc] sm:text-[17px]">
                    Working hours:
                  </h2>
                  <p className={[
                    "mt-[9px] text-sm font-normal leading-[25px] tracking-[-0.3px]",
                    isLightTheme ? "text-[#1b1b1b]" : "text-white",
                  ].join(" ")}>
                    Mon - Sun: 9 am - 5 pm
                    <br />
                    Weekly Off: Thursday
                  </p>
                </section>
                <section>
                  <h2 className="text-base font-medium leading-normal tracking-[-0.3px] text-[#92d1bc] sm:text-[17px]">
                    Address:
                  </h2>
                  <p className={[
                    "mt-[9px] text-sm font-normal leading-[25px] tracking-[-0.3px]",
                    isLightTheme ? "text-[#1b1b1b]" : "text-white",
                  ].join(" ")}>
                    Fairdeal Print Pack, Mohanagar, Chinchwad 411033
                  </p>
                </section>
              </div>

              <section>
                <h2 className="text-base font-medium leading-normal tracking-[-0.3px] text-[#92d1bc] sm:text-[17px]">
                  Contact us:
                </h2>
                <p className={[
                  "mt-[9px] text-sm font-normal leading-[25px] tracking-[-0.3px]",
                  isLightTheme ? "text-[#1b1b1b]" : "text-white",
                ].join(" ")}>
                  020 2747 4888
                  <br />
                  info@fairdealprintpack.com
                </p>
              </section>
            </div>
          </div>

          <div className={[
            "mt-[17px] h-[5px] w-full",
            isLightTheme ? "bg-[#1b1b1b]/10" : "bg-white/10",
          ].join(" ")} />
          <div className="mt-[25px] flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <nav className="flex flex-wrap items-center gap-6 sm:gap-10" aria-label="Legal information">
              <Link
                to="/contact"
                className={[
                  "text-sm font-normal tracking-[-0.2px] transition-colors hover:text-[#92d1bc] sm:text-[15px]",
                  isLightTheme ? "text-[#1b1b1b]" : "text-white",
                ].join(" ")}
              >
                Terms &amp; Conditions
              </Link>
              <Link
                to="/contact"
                className={[
                  "text-sm font-normal tracking-[-0.2px] transition-colors hover:text-[#92d1bc] sm:text-[15px]",
                  isLightTheme ? "text-[#1b1b1b]" : "text-white",
                ].join(" ")}
              >
                Privacy Policy
              </Link>
            </nav>
            <div className="flex gap-4">
              {services.map((s) => (
                <span key={s} className="sr-only">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
