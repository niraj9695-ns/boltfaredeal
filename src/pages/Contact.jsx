import { useState } from "react";
import { ClockIcon, MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { SectionLabel } from "../components/shared/SectionLabel";
import { SectionHeading } from "../components/shared/SectionHeading";
import { ASSETS } from "../lib/assets";

const contactInfo = [
  {
    icon: ClockIcon,
    title: "Working Hours",
    lines: ["Mon - Sun: 9 am - 5 pm", "Weekly Off: Thursday"],
  },
  {
    icon: MapPinIcon,
    title: "Address",
    lines: ["Fairdeal Print Pack, Mohanagar,", "Chinchwad 411033"],
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
];

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[260px] overflow-hidden sm:h-[340px] lg:h-[400px]">
        <img
          className="parallax-media absolute inset-0 h-full w-full object-cover"
          alt="Contact us"
          src={ASSETS.contactBg}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-12 text-center">
          <SectionLabel className="mb-2">GET IN TOUCH</SectionLabel>
          <SectionHeading
            primary="Contact"
            secondary="Us"
            className="text-[28px] sm:text-[36px] lg:text-[44px]"
            secondaryClassName="text-[36px] sm:text-[48px] lg:text-[55px]"
          />
        </div>
      </section>

      {/* Contact info cards */}
      <section className="relative z-10 w-full px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.title}
                  className="flex flex-col items-start gap-3 rounded-[20px] border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(138deg,rgba(134,217,240,0.3)_0%,rgba(192,229,116,0.3)_100%)]">
                    <Icon className="h-5 w-5 text-[#92d1bc]" />
                  </div>
                  <h3 className="text-base font-medium text-[#92d1bc]">
                    {info.title}
                  </h3>
                  {info.lines.map((line) => (
                    <p
                      key={line}
                      className="text-sm font-normal leading-relaxed text-white"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact form section */}
      <section className="relative z-10 w-full px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-2 lg:gap-16">
          <div data-reveal="left" className="flex flex-col gap-4">
            <SectionLabel>SEND A MESSAGE</SectionLabel>
            <SectionHeading
              primary="Let's Start"
              secondary="a Conversation"
              className="text-[28px] sm:text-[36px]"
              secondaryClassName="text-[36px] sm:text-[48px]"
            />
            <p className="text-base font-light leading-relaxed text-white">
              Whether you have a question about our services, need a quote, or
              want to discuss a custom project, our team is ready to help. Fill
              out the form and we'll get back to you within 24 hours.
            </p>
          </div>

          <form
            data-reveal="right"
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-[24px] border border-white/10 bg-white/5 p-6 sm:p-8"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-[#92d1bc]">
                Name
              </label>
              <Input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
                className="border-white/20 bg-transparent text-white placeholder:text-white/40 focus-visible:border-[#92d1bc]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-[#92d1bc]">
                Email
              </label>
              <Input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="border-white/20 bg-transparent text-white placeholder:text-white/40 focus-visible:border-[#92d1bc]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-medium text-[#92d1bc]">
                Phone
              </label>
              <Input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Your phone number"
                className="border-white/20 bg-transparent text-white placeholder:text-white/40 focus-visible:border-[#92d1bc]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-[#92d1bc]">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your project..."
                className="rounded-md border border-white/20 bg-transparent px-3 py-2 text-base text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:border-[#92d1bc] md:text-sm"
              />
            </div>
            <Button
              type="submit"
              className="h-12 rounded-full bg-[linear-gradient(138deg,rgba(134,217,240,1)_0%,rgba(192,229,116,1)_100%)] text-base font-medium text-[#1e1e1e] hover:opacity-90"
            >
              {submitted ? "Message sent! We'll be in touch." : "Send Message"}
            </Button>
            {submitted && (
              <p className="text-center text-sm text-[#92d1bc]">
                Thank you for reaching out. We'll respond within 24 hours.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
};
