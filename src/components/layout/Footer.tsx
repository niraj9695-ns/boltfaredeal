import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { GradientButton } from "../shared/GradientButton";

const services = [
  "Print Solutions",
  "Paper Distribution",
  "Packaging Solutions",
  "Color Printing",
];

const serviceLinks = [
  { label: "Print Solutions", to: "/services" },
  { label: "Paper Distribution", to: "/services" },
  { label: "Packaging Solutions", to: "/services" },
  { label: "Color Printing", to: "/services" },
];

export const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full bg-[linear-gradient(0deg,rgba(5,4,5,1)_0%,rgba(216,213,87,0)_100%)] px-4 py-8 text-white sm:px-10 lg:px-[130px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col">
        <div className="flex min-h-[102px] flex-col justify-between gap-8 border-b-[3px] border-white/10 pb-[25px] sm:flex-row sm:items-start">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold [font-family:'Merriweather',Helvetica]">
              Fairdeal
            </span>
            <span className="rounded bg-white px-2 py-0.5 text-sm font-semibold text-[#1e1e1e]">
              PP
            </span>
          </Link>
          <div className="flex flex-col items-start gap-4 sm:mt-[11px] sm:flex-row sm:items-center sm:gap-[34px]">
            <p className="[font-family:'Inter',Helvetica] text-lg font-normal leading-normal tracking-[-0.3px] sm:text-[22px]">
              Ready to get started?
            </p>
            <GradientButton to="/contact" className="h-[52px] px-[35px] [font-family:'Inter',Helvetica] text-base font-medium tracking-[-0.23px] sm:text-[17px]">
              Get started
            </GradientButton>
          </div>
        </div>

        <div className="flex flex-col pt-[39px]">
          <div className="grid gap-10 lg:grid-cols-[332px_minmax(0,1fr)] lg:gap-[121px]">
            <section aria-labelledby="newsletter-heading">
              <h2
                id="newsletter-heading"
                className="[font-family:'Inter',Helvetica] text-xl font-normal leading-normal tracking-[-0.3px] sm:text-[22px]"
              >
                Subscribe to our
                <br />
                newsletter
              </h2>
              <form
                className="mt-[17px] flex h-[51px] items-start border-b-[3px] border-white/[0.18]"
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
                  className="h-[50px] flex-1 rounded-none border-0 bg-transparent px-0 [font-family:'Inter',Helvetica] text-sm tracking-[-0.2px] text-white placeholder:text-white/50 focus-visible:ring-0 sm:text-[15px]"
                />
                <Button
                  type="submit"
                  size="icon"
                  aria-label="Submit email address"
                  className="h-[50px] w-[50px] shrink-0 rounded-none bg-transparent text-white hover:bg-transparent"
                >
                  <ArrowRightIcon className="h-5 w-5" />
                </Button>
              </form>
            </section>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[154px_210px_194px] lg:gap-x-[90px]">
              <nav aria-labelledby="services-heading">
                <h2
                  id="services-heading"
                  className="[font-family:'Inter',Helvetica] text-base font-medium leading-normal tracking-[-0.23px] text-[#92d1bc] sm:text-[17px]"
                >
                  Services
                </h2>
                <ul className="mt-[14px] space-y-0">
                  {serviceLinks.map((service) => (
                    <li key={service.label}>
                      <Link
                        to={service.to}
                        className="block [font-family:'Inter',Helvetica] text-sm font-normal leading-[43px] text-white transition-colors hover:text-[#92d1bc]"
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex flex-col gap-8">
                <section>
                  <h2 className="[font-family:'Inter',Helvetica] text-base font-medium leading-normal tracking-[-0.3px] text-[#92d1bc] sm:text-[17px]">
                    Working hours:
                  </h2>
                  <p className="mt-[9px] [font-family:'Inter',Helvetica] text-sm font-normal leading-[25px] tracking-[-0.3px] text-white">
                    Mon - Sun: 9 am - 5 pm
                    <br />
                    Weekly Off: Thursday
                  </p>
                </section>
                <section>
                  <h2 className="[font-family:'Inter',Helvetica] text-base font-medium leading-normal tracking-[-0.3px] text-[#92d1bc] sm:text-[17px]">
                    Address:
                  </h2>
                  <p className="mt-[9px] [font-family:'Inter',Helvetica] text-sm font-normal leading-[25px] tracking-[-0.3px] text-white">
                    Fairdeal Print Pack, Mohanagar, Chinchwad 411033
                  </p>
                </section>
              </div>

              <section>
                <h2 className="[font-family:'Inter',Helvetica] text-base font-medium leading-normal tracking-[-0.3px] text-[#92d1bc] sm:text-[17px]">
                  Contact us:
                </h2>
                <p className="mt-[9px] [font-family:'Inter',Helvetica] text-sm font-normal leading-[25px] tracking-[-0.3px] text-white">
                  020 2747 4888
                  <br />
                  info@fairdealprintpack.com
                </p>
              </section>
            </div>
          </div>

          <div className="mt-[17px] h-[5px] w-full bg-white/10" />
          <div className="mt-[25px] flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <nav className="flex flex-wrap items-center gap-6 sm:gap-10" aria-label="Legal information">
              <Link
                to="/contact"
                className="[font-family:'Inter',Helvetica] text-sm font-normal tracking-[-0.2px] text-white transition-colors hover:text-[#92d1bc] sm:text-[15px]"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                to="/contact"
                className="[font-family:'Inter',Helvetica] text-sm font-normal tracking-[-0.2px] text-white transition-colors hover:text-[#92d1bc] sm:text-[15px]"
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
