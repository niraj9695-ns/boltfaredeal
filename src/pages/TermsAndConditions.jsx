import { useEffect, useState } from "react";

import { SectionLabel } from "../components/shared/SectionLabel";

const content = [
  {
    title: "1. Acceptance of Terms",
    body:
      "By accessing or using the Fairdeal Print Pack website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.",
  },
  {
    title: "2. Our Services",
    body:
      "Fairdeal Print Pack provides printing, packaging, paper supply, labeling, corrugated products, BOPP tapes, and related production services. Service availability, specifications, pricing, timelines, and delivery terms may vary by project and will be confirmed through our direct quotation or written agreement.",
  },
  {
    title: "3. Quotations and Orders",
    body:
      "All quotations are subject to confirmation and may be updated based on material availability, artwork requirements, quantity, specifications, or production constraints. An order is considered accepted only after written confirmation from Fairdeal Print Pack. Any change to scope, quantity, delivery date, or specifications must be approved in writing.",
  },
  {
    title: "4. Client Responsibilities",
    body:
      "Clients are responsible for providing accurate requirements, final artwork, approved content, dimensions, material specifications, and any copyright or trademark permissions required for the project. Fairdeal Print Pack may request clarification before production begins. We are not responsible for delays caused by incomplete, inaccurate, or late client information.",
  },
  {
    title: "5. Artwork, Copyright, and Intellectual Property",
    body:
      "Clients must ensure that all supplied artwork, text, images, logos, and other materials are authorized for use. Fairdeal Print Pack does not claim ownership of client-provided content. However, Fairdeal Print Pack remains the owner of its website content, branding, templates, photographs, and proprietary production materials unless otherwise agreed.",
  },
  {
    title: "6. Production and Delivery",
    body:
      "Production timelines are estimates and may be affected by material sourcing, machine availability, order volume, quality checks, transportation, or circumstances beyond our reasonable control. Fairdeal Print Pack will make reasonable efforts to meet agreed deadlines but cannot guarantee exact delivery dates.",
  },
  {
    title: "7. Payment Terms",
    body:
      "Payment terms will be stated in the relevant quotation or agreement. Pending or overdue payments may result in suspension of production or delivery. Clients are responsible for any applicable taxes, duties, or charges not expressly included in the quotation.",
  },
  {
    title: "8. Limitation of Liability",
    body:
      "Fairdeal Print Pack will use reasonable care and professional standards in performing its services. Our liability for any claim is limited to the fees paid for the specific service giving rise to the claim, except where liability cannot be excluded under applicable law. We shall not be liable for indirect, incidental, consequential, or punitive damages, including loss of business, reputation, or anticipated profits.",
  },
  {
    title: "9. Customer Communications",
    body:
      "By contacting Fairdeal Print Pack through the website, telephone, email, or other channels, you agree that we may use the information provided to respond to your inquiry, provide services, and communicate about your project. We will handle personal information in accordance with our Privacy Policy.",
  },
  {
    title: "10. Website Use",
    body:
      "The website may be used for lawful purposes only. You must not attempt to interfere with its operation, access restricted areas, introduce harmful software, or use the site in a manner that could damage, disable, or impair our services or infrastructure.",
  },
  {
    title: "11. Changes to These Terms",
    body:
      "Fairdeal Print Pack may update these Terms and Conditions from time to time. Continued use of the website after changes are published indicates acceptance of the revised terms.",
  },
  {
    title: "12. Governing Law",
    body:
      "These Terms and Conditions are governed by the laws of India, and any dispute relating to them will be subject to the jurisdiction of the courts located in Pune, Maharashtra, unless otherwise required by applicable law.",
  },
];

export const TermsAndConditions = () => {
  const [isLightTheme, setIsLightTheme] = useState(() =>
    document.documentElement.getAttribute("data-theme") === "light",
  );

  useEffect(() => {
    const syncTheme = () => {
      setIsLightTheme(document.documentElement.getAttribute("data-theme") === "light");
    };

    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const surface = isLightTheme
    ? "linear-gradient(135deg, rgba(26,125,106,0.12), rgba(255,255,255,0.94))"
    : "linear-gradient(135deg, rgba(146,209,188,0.10), rgba(11,16,20,0.96))";

  return (
    <main className="min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)]">
      <section className="relative px-5 pb-10 pt-5 sm:px-6 sm:pb-12 sm:pt-6 md:px-8 md:pb-14 md:pt-[150px]">
        <div className="mx-auto max-w-[1180px] text-center">
          <SectionLabel className="mt-0 text-center md:mt-4">
            LEGAL INFORMATION
          </SectionLabel>
          <h1 className="mt-5 text-[clamp(40px,6vw,72px)] font-[650] leading-[0.98] tracking-[-0.055em]">
            Terms &amp; Conditions
          </h1>
          <p className="mx-auto mt-5 max-w-[760px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base">
            These terms govern your use of the Fairdeal Print Pack website and the services we provide.
          </p>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[24px] border border-[var(--theme-border)] shadow-[0_20px_60px_rgba(0,0,0,0.08)]" style={{ background: surface }}>
          <div className="grid gap-1 bg-[var(--theme-accent)]/10 p-6 sm:p-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:p-12">
            <div className="pb-5 lg:pb-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--theme-accent-alt)]">
                Effective date
              </p>
              <p className="mt-2 text-sm text-[var(--theme-text-soft)]">October 7, 2026</p>
            </div>
            <div className="lg:border-l lg:border-[var(--theme-border)] lg:pl-10">
              <p className="text-sm leading-7 text-[var(--theme-text-soft)]">
                Please review these terms carefully before using our website or engaging with our business. By using our website or placing an enquiry, you agree to these terms unless you have a separate written agreement with Fairdeal Print Pack that supersedes them.
              </p>
            </div>
          </div>

          <div className="space-y-7 p-6 sm:p-10 lg:p-12">
            {content.map((section, index) => (
              <article key={section.title} className="border-b border-[var(--theme-border)] pb-7 last:border-0 last:pb-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--theme-accent-alt)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-xl font-medium tracking-[-0.03em] sm:text-2xl">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
