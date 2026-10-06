import { ArrowUpRightIcon } from "lucide-react";
import { useParams } from "react-router-dom";

import { GradientButton } from "../components/shared/GradientButton";
import { SectionLabel } from "../components/shared/SectionLabel";
import { SERVICES } from "../lib/assets";
import { FlexoPrintingPage } from "./FlexoPrintingPage";
import { OffsetPrintingPage } from "./OffsetPrintingPage";
import { CorrugatedPackagingPage } from "./CorrugatedPackagingPage";

const slugifyServiceTitle = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .trim();

export const ServiceDetail = () => {
  const { serviceName } = useParams();

  const service = SERVICES.find(
    (item) => slugifyServiceTitle(item.title) === serviceName,
  );

  if (!service) {
    return (
      <main className="relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]">
        <div className="mx-auto max-w-[1180px]">
          <div className="rounded-[28px] border border-[var(--theme-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(225,222,0,0.11)_100%)] p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:p-12">
            <SectionLabel className="mb-4 text-[var(--theme-accent-alt)]">
              Service not found
            </SectionLabel>

            <h1 className="mb-6 text-3xl font-medium tracking-[-0.04em] text-[var(--theme-text)] sm:text-4xl">
              We couldn’t find that service.
            </h1>

            <GradientButton
              to="/services"
              className="h-[48px] px-[26px] text-sm font-medium tracking-[-0.2px] sm:text-[15px]"
            >
              Back to services
            </GradientButton>
          </div>
        </div>
      </main>
    );
  }

  if (service.title === "Flexo Printing") {
    return <FlexoPrintingPage service={service} />;
  }

  if (service.title === "Offset Printing") {
    return <OffsetPrintingPage service={service} />;
  }

  if (service.title === "Corrugation") {
    return <CorrugatedPackagingPage service={service} />;
  }

  const detailPoints = [
    "Precision-led execution and consistent production output",
    "Material-based customization for your exact requirement",
    "Consultation, setup, and finishing support from our team",
  ];

  return (
    <main className="relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]">
      <div className="mx-auto max-w-[1180px]">
        {/* PAGE HEADER */}
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[620px]">
            <SectionLabel className="mb-3 text-left text-[var(--theme-accent-alt)]">
              OUR SERVICE
            </SectionLabel>

            <h1 className="text-[clamp(52px,4vw,80px)] font-[650] leading-[0.98] tracking-[-0.055em] text-[var(--theme-text)] max-[600px]:text-[45px]">
              {service.title}
            </h1>
          </div>

          <div className="lg:max-w-[520px] lg:items-end">
            <GradientButton
              to="/services"
              className="h-[48px] px-[26px] text-sm font-medium tracking-[-0.2px] sm:text-[15px]"
            >
              Back to services
            </GradientButton>
          </div>
        </div>

        {/* SERVICE CARD */}
        <div className="overflow-hidden rounded-[30px] border border-[var(--theme-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(225,222,0,0.11)_100%)] shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            {/* LEFT IMAGE */}
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="overflow-hidden rounded-[24px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-[350px] w-full object-contain sm:h-[420px]"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]">
                    Service overview
                  </p>

                  <h2 className="text-2xl font-medium tracking-[-0.04em] text-[var(--theme-text)] sm:text-3xl">
                    {service.title}
                  </h2>
                </div>

                {/* <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[var(--theme-text)]">
                  <ArrowUpRightIcon className="h-5 w-5" />
                </span> */}
              </div>

              <p className="mb-8 max-w-[520px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base">
                {service.description}
              </p>

              <ul className="space-y-3">
                {detailPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-6 text-[var(--theme-text)] sm:text-base"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--theme-accent)]" />

                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <GradientButton
                  to="/contact"
                  className="h-[48px] px-[26px] text-sm font-medium tracking-[-0.2px] sm:text-[15px]"
                >
                  Request a quote
                </GradientButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};