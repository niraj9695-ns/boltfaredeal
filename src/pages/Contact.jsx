import { useEffect, useRef, useState } from "react";

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

const WEB3FORMS_ACCESS_KEY = "06284836-95a7-48fa-aa0c-d85c26d822a8";

// Anti-spam settings
const COOLDOWN_SECONDS = 30; // wait time after a successful send
const MIN_FILL_TIME_MS = 3000; // bots submit instantly, humans do not
const LAST_SENT_KEY = "contactFormLastSent";

// Stricter than before: needs a domain with a 2+ letter ending, no spaces,
// no double dots, and no dot at the start or end of the domain parts.
const EMAIL_REGEX =
  /^[^\s@.]+(?:\.[^\s@.]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;

// Catches common typing mistakes that still look like a valid email.
// Only well-known typos are listed, so real domains are never blocked by mistake.
const TYPO_DOMAINS = {
  "gmail.comm": "gmail.com",
  "gmail.con": "gmail.com",
  "gmail.cmo": "gmail.com",
  "gmail.coom": "gmail.com",
  "gmail.vom": "gmail.com",
  "gmail.cm": "gmail.com",
  "gmail.om": "gmail.com",
  "gmail.co": "gmail.com",
  "gmial.com": "gmail.com",
  "gmal.com": "gmail.com",
  "gamil.com": "gmail.com",
  "gmaill.com": "gmail.com",
  "yahoo.con": "yahoo.com",
  "yahoo.comm": "yahoo.com",
  "yaho.com": "yahoo.com",
  "yahooo.com": "yahoo.com",
  "hotmail.con": "hotmail.com",
  "hotmail.comm": "hotmail.com",
  "hotmial.com": "hotmail.com",
  "outlook.con": "outlook.com",
  "outlook.comm": "outlook.com",
  "rediffmail.con": "rediffmail.com",
  "rediffmail.comm": "rediffmail.com",
  "icloud.con": "icloud.com",
  "icloud.comm": "icloud.com",
};

// Endings that are almost always a typo of ".com"
const TYPO_ENDINGS = new Set(["comm", "con", "cmo", "vom", "coom", "xom"]);

const getEmailTypoHint = (email) => {
  const [localPart, domain = ""] = email.toLowerCase().split("@");
  const ending = domain.split(".").pop();

  if (TYPO_DOMAINS[domain]) {
    return `Did you mean ${localPart}@${TYPO_DOMAINS[domain]}?`;
  }

  if (TYPO_ENDINGS.has(ending)) {
    return `Please check the email ending ".${ending}". Did you mean ".com"?`;
  }

  return "";
};

const validateField = (field, rawValue) => {
  const value = (rawValue || "").trim();

  switch (field) {
    case "name":
      if (!value) return "Please enter your name.";
      if (value.length > 100) return "Name must be 100 characters or fewer.";
      return "";

    case "email":
      if (!value) return "Please enter your email address.";
      if (value.length > 254 || !EMAIL_REGEX.test(value)) {
        return "Please enter a valid email address.";
      }
      return getEmailTypoHint(value);

    case "phone": {
      if (!value) return ""; // phone is optional
      const phoneDigits = value.replace(/\D/g, "");
      if (
        !/^\+?[0-9\s().-]+$/.test(value) ||
        phoneDigits.length < 7 ||
        phoneDigits.length > 15
      ) {
        return "Enter a valid phone number with 7 to 15 digits.";
      }
      return "";
    }

    case "message":
      if (!value) return "Please enter a message.";
      if (value.length > 2000) return "Message must be 2,000 characters or fewer.";
      return "";

    default:
      return "";
  }
};

const validateContactForm = ({ name, email, phone, message }) => {
  const errors = {};
  const values = { name, email, phone, message };

  Object.keys(values).forEach((field) => {
    const error = validateField(field, values[field]);
    if (error) errors[field] = error;
  });

  return errors;
};

// Safe helpers: localStorage can be blocked (private mode, strict settings)
const readLastSent = () => {
  try {
    return Number(window.localStorage.getItem(LAST_SENT_KEY)) || 0;
  } catch {
    return 0;
  }
};

const writeLastSent = (timestamp) => {
  try {
    window.localStorage.setItem(LAST_SENT_KEY, String(timestamp));
  } catch {
    // ignore, the in-memory cooldown still works
  }
};

const getCooldownLeft = () => {
  const elapsed = Math.floor((Date.now() - readLastSent()) / 1000);
  return Math.max(0, COOLDOWN_SECONDS - elapsed);
};

const contactInfo = [
  {
    icon: ClockIcon,
    title: "Working Hours",
    lines: ["Mon - Sat: 9.00 am - 5.30 pm", "Weekly Off: Sunday"],
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
      "128/2, Sanghvi Steel Compound,",
      "Mohan Nagar, Telco Road,",
      "Chinchwad, Pune 411019,",
      "Maharashtra (India)."
    ],
  },
];

export const Contact = () => {
  const [submissionStatus, setSubmissionStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [cooldownLeft, setCooldownLeft] = useState(() => getCooldownLeft());
  const [isLightTheme, setIsLightTheme] = useState(() => document.documentElement.getAttribute("data-theme") === "light");

  // Time when the form was shown. Used to catch bots that submit instantly.
  const formShownAt = useRef(Date.now());

  useEffect(() => {
    const syncTheme = () => {
      setIsLightTheme(document.documentElement.getAttribute("data-theme") === "light");
    };

    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  // Count the cooldown down once per second
  useEffect(() => {
    if (cooldownLeft <= 0) return undefined;

    const timer = setInterval(() => {
      setCooldownLeft(getCooldownLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [cooldownLeft]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [name]: "" }));

    if (submissionStatus !== "sending") {
      setSubmissionStatus("idle");
    }
  };

  // Validate one field when the user leaves it
  const handleFieldBlur = (event) => {
    const { name, value } = event.target;
    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: validateField(name, value),
    }));
  };

  const panelBackground = isLightTheme
    ? "linear-gradient(135deg, rgba(26,125,106,0.13), rgba(255,255,255,0.88))"
    : "linear-gradient(135deg, rgba(146,209,188,0.12), rgba(11,16,20,0.97))";

  const glowBackground = isLightTheme
    ? "rgba(26,125,106,0.12)"
    : "rgba(146,209,188,0.12)";

  const spotBackground = isLightTheme
    ? "rgba(199,183,25,0.12)"
    : "rgba(225,222,0,0.08)";

  const resetFormAfterSuccess = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setErrors({});
    setSubmissionStatus("success");
    formShownAt.current = Date.now();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submissionStatus === "sending") return;

    // Rate limit: block repeat submissions for a short time
    const secondsLeft = getCooldownLeft();
    if (secondsLeft > 0) {
      setCooldownLeft(secondsLeft);
      setSubmissionStatus("cooldown");
      return;
    }

    const validationErrors = validateContactForm(form);
    setErrors(validationErrors);
    const firstInvalidField = Object.keys(validationErrors)[0];
    if (firstInvalidField) {
      document.getElementById(firstInvalidField)?.focus();
      setSubmissionStatus("idle");
      return;
    }

    // Submitted too fast to be a human
    if (Date.now() - formShownAt.current < MIN_FILL_TIME_MS) {
      setSubmissionStatus("tooFast");
      return;
    }

    const formData = new FormData(event.currentTarget);

    // Honeypot: real users never tick this hidden box. Pretend it worked
    // so the bot does not learn anything, but do not send the message.
    if (formData.get("botcheck")) {
      resetFormAfterSuccess();
      return;
    }

    setSubmissionStatus("sending");

    try {
      formData.set("access_key", WEB3FORMS_ACCESS_KEY);
      formData.set("name", form.name.trim());
      formData.set("email", form.email.trim());
      formData.set("phone", form.phone.trim());
      formData.set("message", form.message.trim());

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        console.error("Contact form submission failed:", result.message || response.statusText);
        setSubmissionStatus("error");
        return;
      }

      writeLastSent(Date.now());
      setCooldownLeft(COOLDOWN_SECONDS);
      resetFormAfterSuccess();
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setSubmissionStatus("error");
    }
  };

  const isCoolingDown = cooldownLeft > 0;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--theme-bg)] text-[var(--theme-text)]">
  <section className="relative px-5 pb-10 pt-5 sm:px-6 sm:pb-12 sm:pt-6 md:px-8 md:pb-14 md:pt-[150px]">
    <div className="mx-auto max-w-[1180px] text-center">
      <SectionLabel className="mt-0 text-center md:mt-4">
        CONTACT US
      </SectionLabel>
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

              <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input
                  type="hidden"
                  name="subject"
                  value="New contact form message - Fairdeal Print Pack"
                />

                {/* Honeypot spam trap: hidden from people, bots tend to tick it.
                    Web3Forms also reads the field named "botcheck". */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ display: "none" }}
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-medium" style={{ color: "var(--theme-text)" }}>
                      Name
                    </label>

                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={handleFieldChange}
                      onBlur={handleFieldBlur}
                      placeholder="Your full name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className="h-11 rounded-md border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)] focus-visible:ring-[var(--theme-accent)]"
                    />
                    {errors.name && <p id="name-error" className="text-xs text-red-500">{errors.name}</p>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-medium" style={{ color: "var(--theme-text)" }}>
                      Email
                    </label>

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={254}
                      value={form.email}
                      onChange={handleFieldChange}
                      onBlur={handleFieldBlur}
                      placeholder="your@email.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className="h-11 rounded-md border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)] focus-visible:ring-[var(--theme-accent)]"
                    />
                    {errors.email && <p id="email-error" className="text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs font-medium" style={{ color: "var(--theme-text)" }}>
                    Phone
                  </label>

                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    maxLength={25}
                    value={form.phone}
                    onChange={handleFieldChange}
                    onBlur={handleFieldBlur}
                    placeholder="Your phone number"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className="h-11 rounded-md border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)] focus-visible:ring-[var(--theme-accent)]"
                  />
                  {errors.phone && <p id="phone-error" className="text-xs text-red-500">{errors.phone}</p>}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-medium" style={{ color: "var(--theme-text)" }}>
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={2000}
                    rows={5}
                    value={form.message}
                    onChange={handleFieldChange}
                    onBlur={handleFieldBlur}
                    placeholder="Tell us about your project..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className="w-full resize-none rounded-md border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 py-3 text-sm text-[var(--theme-text)] outline-none placeholder:text-[var(--theme-text-muted)] transition-colors duration-300 focus:border-[var(--theme-accent)] focus:ring-1 focus:ring-[var(--theme-accent)]"
                  />
                  {errors.message && <p id="message-error" className="text-xs text-red-500">{errors.message}</p>}
                </div>

                <div className="flex flex-col items-start gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  {submissionStatus !== "idle" && (
                    <p
                      aria-live="polite"
                      role={
                        submissionStatus === "error" ||
                        submissionStatus === "cooldown" ||
                        submissionStatus === "tooFast"
                          ? "alert"
                          : "status"
                      }
                      className="text-xs"
                      style={{
                        color:
                          submissionStatus === "error" ||
                          submissionStatus === "cooldown" ||
                          submissionStatus === "tooFast"
                            ? "#ef4444"
                            : "var(--theme-text-soft)",
                      }}
                    >
                      {submissionStatus === "sending" && "Sending your message..."}
                      {submissionStatus === "success" && "Thank you. We'll get back to you soon."}
                      {submissionStatus === "error" && "We couldn't send your message. Please try again."}
                      {submissionStatus === "cooldown" &&
                        `Please wait ${cooldownLeft} second${cooldownLeft === 1 ? "" : "s"} before sending another message.`}
                      {submissionStatus === "tooFast" && "That was very quick. Please check your details and try again."}
                    </p>
                  )}

                  <GradientButton
                    type="submit"
                    disabled={submissionStatus === "sending" || isCoolingDown}
                    className="h-11 px-6 text-sm font-semibold"
                  >
                    {submissionStatus === "sending"
                      ? "Sending..."
                      : isCoolingDown
                        ? `Message Sent (${cooldownLeft}s)`
                        : submissionStatus === "success"
                          ? "Message Sent"
                          : "Send Message"}

                    {submissionStatus !== "sending" && !isCoolingDown && submissionStatus !== "success" && (
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

      {/* <section className="relative z-10 px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
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
      </section> */}
    </main>
  );
};