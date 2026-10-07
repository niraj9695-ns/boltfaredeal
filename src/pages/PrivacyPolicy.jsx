import { useEffect, useState } from "react";

import { SectionLabel } from "../components/shared/SectionLabel";

const content = [
  {
    title: "1. Information We Collect",
    body:
      "We may collect information you provide directly, such as your name, email address, phone number, company name, project requirements, and message. We may also collect technical information about your device, browser, IP address, referring website, pages visited, and interaction with our website.",
  },
  {
    title: "2. How We Use Information",
    body:
      "We use personal information to respond to enquiries, provide quotations, discuss projects, manage service requests, improve our website, communicate with customers, and comply with applicable legal obligations. We may also use contact information to send service updates or relevant business communications when you have consented or where such communication is permitted by law.",
  },
  {
    title: "3. Information Sharing",
    body:
      "We do not sell personal information. We may share information with trusted service providers who assist us with website hosting, email delivery, analytics, customer support, logistics, or business operations, provided they use the information only for the agreed purpose and protect it appropriately. We may disclose information when required by law, court order, regulatory request, or to protect the rights or safety of our customers, staff, or business.",
  },
  {
    title: "4. Cookies and Analytics",
    body:
      "Our website may use cookies or similar technologies to remember preferences, understand website usage, improve performance, and provide a better user experience. You can configure your browser to reject or delete cookies, although some website features may not function correctly if cookies are disabled.",
  },
  {
    title: "5. Data Security",
    body:
      "We use reasonable administrative, technical, and organizational measures to protect personal information against unauthorized access, use, disclosure, alteration, or destruction. No method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "6. Your Rights",
    body:
      "Depending on applicable law, you may have the right to access, correct, update, delete, or restrict the use of your personal information. You may also object to certain processing or request a copy of the information we hold about you. To exercise these rights, please contact us using the details at the end of this policy.",
  },
  {
    title: "7. Retention",
    body:
      "We retain personal information only for as long as necessary to fulfill the purpose for which it was collected, satisfy legal or regulatory obligations, resolve disputes, or enforce agreements. Information no longer required for those purposes may be securely deleted or anonymized.",
  },
  {
    title: "8. Third-Party Websites",
    body:
      "Our website may contain links to third-party websites or services. We are not responsible for the privacy practices, content, or security of those external websites. Please review their privacy policies before providing them with your information.",
  },
  {
    title: "9. Children's Privacy",
    body:
      "Our website is not directed to children under the age of 18, and we do not knowingly collect personal information from children without appropriate parental or guardian consent. If we become aware that we have received personal information from a child without valid consent, we will take steps to delete it.",
  },
  {
    title: "10. Changes to This Policy",
    body:
      "Fairdeal Print Pack may update this Privacy Policy from time to time. We will publish the updated version on this page with a revised effective date. Continued use of the website after changes are made indicates your acceptance of the revised policy.",
  },
  {
    title: "11. Contact Us",
    body:
      "If you have questions, concerns, or requests regarding this Privacy Policy or the handling of your information, please contact Fairdeal Print Pack at info@fairdealprintpack.com or 020 2747 4888. You may also contact us at Fairdeal Print Pack, Mohanagar, Chinchwad 411033.",
  },
];

export const PrivacyPolicy = () => {
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
            PRIVACY NOTICE
          </SectionLabel>
          <h1 className="mt-5 text-[clamp(40px,6vw,72px)] font-[650] leading-[0.98] tracking-[-0.055em]">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-5 max-w-[760px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base">
            This policy explains how Fairdeal Print Pack collects, uses, and protects information provided through our website and business communications.
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
                We respect your privacy and are committed to handling your personal information responsibly. This policy applies to information collected through our website and direct communications with Fairdeal Print Pack.
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
