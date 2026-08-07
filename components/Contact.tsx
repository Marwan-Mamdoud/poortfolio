"use client";

import { contactInfo } from "@/data";
import { sendMail } from "@/lib/sendMail";
import { useEffect, useRef, useState } from "react";

function useInView(ref: React.RefObject<HTMLDivElement | null>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useInView(sectionRef);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "Full-time Job",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await sendMail(formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", inquiry: "Full-time Job", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      // silent fail
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-section-gap bg-surface-container-low border-t-2 border-primary px-5 md:px-16 relative"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,69,38,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:10px_10px]" />

      <div
        className={`max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 bg-surface border-2 border-outline-variant p-8 relative z-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Left Column - Contact Info */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <h2 className="font-headline text-3xl text-on-surface font-extrabold uppercase mb-6 border-b-2 border-primary-container pb-4 flex items-center gap-3">
            <span className="text-primary">&#9993;</span>
            Official Inquiry Submission
          </h2>

          {/* Open to Work Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-container/30 border border-primary rounded px-4 py-2 mb-6 w-fit">
            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-glow-pulse" />
            <span className="font-code text-sm font-bold text-primary uppercase tracking-wider">
              Open to Work
            </span>
          </div>

          <p className="text-on-surface-variant mb-8 text-lg font-code">
            &gt; Available for complex architectural consulting, freelance
            engineering, and full-time opportunities.
          </p>

          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-start gap-4 border-b border-outline-variant pb-4 group">
              <span className="text-primary text-3xl mt-1 group-hover:animate-pulse">
                &#9993;
              </span>
              <div>
                <p className="font-bold text-sm uppercase tracking-wider text-on-surface-variant mb-1 font-code">
                  Direct Correspondence
                </p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-bold text-lg text-on-surface font-code hover:text-primary transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 border-b border-outline-variant pb-4 group">
              <span className="text-primary text-3xl mt-1 group-hover:animate-pulse">
                &#128222;
              </span>
              <div>
                <p className="font-bold text-sm uppercase tracking-wider text-on-surface-variant mb-1 font-code">
                  Telephone Contact
                </p>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="font-bold text-lg text-on-surface font-code hover:text-primary transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 pb-4 group">
              <span className="text-primary text-3xl mt-1 group-hover:animate-pulse">
                &#128205;
              </span>
              <div>
                <p className="font-bold text-sm uppercase tracking-wider text-on-surface-variant mb-1 font-code">
                  Registered Location
                </p>
                <p className="font-bold text-lg text-on-surface font-code">
                  {contactInfo.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:col-span-7 bg-surface-container-high border-2 border-outline-variant p-8 relative rounded">
          <div className="absolute top-0 right-0 w-3 h-3 bg-primary -mt-1 -mr-1" />
          <div className="mb-8 border-b-2 border-outline-variant pb-4 flex justify-between items-end">
            <h3 className="font-headline text-headline-sm font-extrabold uppercase text-on-surface flex items-center gap-2">
              <span className="text-primary">&#62;</span> Form No. 001-A
            </h3>
            <span className="text-sm font-bold uppercase text-primary font-code">
              Required Fields *
            </span>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-bold text-sm uppercase tracking-wider text-on-surface mb-2 font-code">
                  Legal Name *
                </label>
                <input
                  className="input-glow"
                  placeholder="> Enter Full Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block font-bold text-sm uppercase tracking-wider text-on-surface mb-2 font-code">
                  Email Address *
                </label>
                <input
                  className="input-glow"
                  placeholder="> Enter Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-sm uppercase tracking-wider text-on-surface mb-2 font-code">
                Nature of Inquiry *
              </label>
              <select
                className="input-glow font-semibold appearance-none"
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                required
              >
                <option value="Full-time Job">&gt; Full-time Job</option>
                <option value="Part-time Job">&gt; Part-time Job</option>
                <option value="Freelance Project">&gt; Freelance Project</option>
                <option value="Other Inquiry">&gt; Other Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-sm uppercase tracking-wider text-on-surface mb-2 font-code">
                Detailed Statement *
              </label>
              <textarea
                className="input-glow"
                placeholder="> Provide full details of your requirement..."
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pt-4 border-t-2 border-outline-variant">
              <button
                type="submit"
                disabled={sending}
                className="group w-full md:w-auto px-10 py-4 bg-primary text-on-primary font-bold uppercase tracking-wider border-2 border-primary hover:bg-transparent hover:text-primary transition-colors flex items-center justify-center gap-3 shadow-[4px_4px_0px_0px_rgba(151,212,170,0.5)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] rounded font-code disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>
                    Sending... &#8987;
                  </>
                ) : submitted ? (
                  <>
                    Inquiry Submitted &#10003;
                  </>
                ) : (
                  <>
                    Submit Official Record{" "}
                    <span className="transition-transform group-hover:translate-x-1">
                      &#10148;
                    </span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
