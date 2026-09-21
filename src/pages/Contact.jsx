import { useEffect, useState } from "react";

import {
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  SendIcon,
  ArrowRightIcon,
} from "lucide-react";

import { GradientButton } from "../components/shared/GradientButton";
import { SectionLabel } from "../components/shared/SectionLabel";
import { Input } from "../components/ui/input";

const contactInfo = [
  {
    icon: ClockIcon,
    title: "Working Hours",
    lines: ["Mon - Sun: 9 am - 5 pm", "Weekly Off: Thursday"],
  },
  {
    icon: PhoneIcon,
    title: "Phone",
    lines: ["020 2747 4888"],
  },
  {
    icon: MailIcon,
    title: "Email",
    lines: ["info@fairdealprintpack.com"],
  },
  {
    icon: MapPinIcon,
    title: "Address",
    lines: [
      "Fairdeal Print Pack, Mohanagar,",
      "Chinchwad 411033",
    ],
  },
];

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(() => document.documentElement.getAttribute("data-theme") === "light");

  useEffect(() => {
    const syncTheme = () => {
      setIsLightTheme(document.documentElement.getAttribute("data-theme") === "light");
    };

    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const panelBackground = isLightTheme
    ? "linear-gradient(135deg, rgba(26,125,106,0.13), rgba(255,255,255,0.88))"
    : "linear-gradient(135deg, rgba(146,209,188,0.12), rgba(11,16,20,0.97))";

  const glowBackground = isLightTheme
    ? "rgba(26,125,106,0.12)"
    : "rgba(146,209,188,0.12)";

  const spotBackground = isLightTheme
    ? "rgba(199,183,25,0.12)"
    : "rgba(225,222,0,0.08)";

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--theme-bg)] text-[var(--theme-text)]">
      <section className="relative px-5 pb-10 pt-[76px] sm:px-6 sm:pb-12 sm:pt-[92px] lg:px-8 lg:pb-14 lg:pt-[105px]">
        <div className="mx-auto max-w-[1180px] text-center">
          <h1
            data-reveal="up"
            className="[font-family:'Merriweather',Helvetica] text-[32px] font-normal tracking-[-0.05em] text-[var(--theme-text)] sm:text-[40px] lg:text-[46px]"
          >
            Contact Us
          </h1>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-[1180px]">
          <div
            className="grid overflow-hidden rounded-[18px] border border-[var(--theme-border)] shadow-[0_16px_40px_rgba(0,0,0,0.06)] lg:grid-cols-[0.88fr_1.12fr]"
            style={{ background: "var(--theme-surface)" }}
          >
            <div
              data-reveal="left"
              className="relative flex flex-col justify-between overflow-hidden p-6 sm:p-8 lg:p-10"
              style={{ background: panelBackground, borderRight: "1px solid var(--theme-border)" }}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full blur-3xl" style={{ background: glowBackground }} />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full blur-3xl" style={{ background: spotBackground }} />

              <div className="relative z-10">
                <SectionLabel className="mb-2 text-left text-[var(--theme-accent-alt)]">
                  Get In Touch
                </SectionLabel>

                <h2
                  className="max-w-[360px] [font-family:'Merriweather',Helvetica] text-[24px] font-normal leading-tight tracking-[-0.04em] sm:text-[28px]"
                  style={{ color: "var(--theme-text)" }}
                >
                  Let's talk about your next project.
                </h2>

                <p className="mt-3 max-w-[380px] [font-family:'Inter',Helvetica] text-sm font-light leading-6" style={{ color: "var(--theme-text-soft)" }}>
                  Whether you need a quotation, have a question about our services, or want to discuss a custom requirement, our team is ready to help.
                </p>
              </div>

              <div className="relative z-10 mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                {contactInfo.map((info) => {
                  const Icon = info.icon;

                  return (
                    <div key={info.title} className="group flex items-start gap-3">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 group-hover:scale-105"
                        style={{
                          borderColor: "var(--theme-border)",
                          background: isLightTheme ? "rgba(26,125,106,0.08)" : "rgba(146,209,188,0.08)",
                          color: "var(--theme-accent)",
                        }}
                      >
                        <Icon className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.12em]" style={{ color: "var(--theme-accent-alt)" }}>
                          {info.title}
                        </p>

                        <div className="mt-1">
                          {info.lines.map((line) => (
                            <p key={line} className="[font-family:'Inter',Helvetica] text-sm font-light leading-5" style={{ color: "var(--theme-text-soft)" }}>
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div data-reveal="right" className="p-6 sm:p-8 lg:p-10" style={{ background: "var(--theme-bg)" }}>
              <div className="mb-7">
                <SectionLabel className="mb-2 text-left text-[var(--theme-accent-alt)]">
                  Send us a Message
                </SectionLabel>

                <h2 className="[font-family:'Merriweather',Helvetica] text-[24px] font-normal tracking-[-0.04em] sm:text-[28px]" style={{ color: "var(--theme-text)" }}>
                  We'd love to hear from you.
                </h2>

                <p className="mt-2 max-w-[520px] [font-family:'Inter',Helvetica] text-sm font-light leading-6" style={{ color: "var(--theme-text-soft)" }}>
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-medium" style={{ color: "var(--theme-text)" }}>
                      Name
                    </label>

                    <Input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="h-11 rounded-md border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)] focus-visible:ring-[var(--theme-accent)]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-medium" style={{ color: "var(--theme-text)" }}>
                      Email
                    </label>

                    <Input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="h-11 rounded-md border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)] focus-visible:ring-[var(--theme-accent)]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs font-medium" style={{ color: "var(--theme-text)" }}>
                    Phone
                  </label>

                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Your phone number"
                    className="h-11 rounded-md border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)] focus-visible:ring-[var(--theme-accent)]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-medium" style={{ color: "var(--theme-text)" }}>
                    Message
                  </label>

                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-md border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 py-3 text-sm text-[var(--theme-text)] outline-none placeholder:text-[var(--theme-text-muted)] transition-colors duration-300 focus:border-[var(--theme-accent)] focus:ring-1 focus:ring-[var(--theme-accent)]"
                  />
                </div>

                <div className="flex flex-col items-start gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  <p
                    className={`text-xs transition-opacity duration-300 ${submitted ? "opacity-100" : "opacity-0"}`}
                    style={{ color: "var(--theme-text-soft)" }}
                  >
                    Thank you. We'll get back to you soon.
                  </p>

                  <GradientButton
                    type="submit"
                    className="h-11 px-6 text-sm font-semibold"
                  >
                    {submitted ? "Message Sent" : "Send Message"}

                    {!submitted && (
                      <SendIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    )}
                  </GradientButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <div
            data-reveal="up"
            className="group relative h-[260px] overflow-hidden rounded-[16px] border sm:h-[320px] lg:h-[360px]"
            style={{ borderColor: "var(--theme-border)", background: "var(--theme-surface)" }}
          >
            <iframe
              title="Fairdeal Print Pack Location"
              src="https://www.google.com/maps?q=Fairdeal%20Print%20Pack%2C%20Mohanagar%2C%20Chinchwad%2C%20Pune%20411033&output=embed"
              className="h-full w-full border-0 grayscale transition-all duration-700 group-hover:grayscale-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div data-reveal="up" className="mx-auto max-w-[620px] text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em]" style={{ color: "var(--theme-accent-alt)" }}>
            Newsletter
          </p>

          <h2 className="mt-2 [font-family:'Merriweather',Helvetica] text-[25px] font-normal tracking-[-0.04em] sm:text-[30px]" style={{ color: "var(--theme-text)" }}>
            Be always in <span style={{ color: "var(--theme-accent-alt)" }}>Touch</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[480px] [font-family:'Inter',Helvetica] text-sm font-light leading-6" style={{ color: "var(--theme-text-soft)" }}>
            Stay connected with Fairdeal Print Pack and receive updates, insights, and news directly in your inbox.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-6 flex max-w-[460px] items-center border-b" style={{ borderColor: "var(--theme-border)" }}>
            <Input
              type="email"
              required
              placeholder="Enter your email"
              className="h-11 flex-1 rounded-none border-0 bg-transparent px-0 text-sm text-[var(--theme-text)] shadow-none placeholder:text-[var(--theme-text-muted)] focus-visible:ring-0"
            />

            <GradientButton
              type="submit"
              className="h-7 w-7 shrink-0 rounded-sm p-0"
              aria-label="Subscribe to newsletter"
            >
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </GradientButton>
          </form>
        </div>
      </section>
    </main>
  );
};