"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  Copy,
  Check,
  Send,
  Loader2,
  AlertCircle,
} from "lucide-react";

const budgetOptions = [
  "< $1,000",
  "$1,000 – $3,000",
  "$3,000 – $5,000",
  "$5,000+",
];

const serviceOptions = [
  "Custom Web Application",
  "Full-Stack Development",
  "Frontend Engineering",
  "UI/UX Design & Prototyping",
  "API & Database Architecture",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Custom Web Application",
    budget: "$1,000 – $3,000",
    timeline: "1-2 months",
    message: "",
  });

  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const directEmail = "manishbisht2407@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(directEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to submit message");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        projectType: "Custom Web Application",
        budget: "$1,000 – $3,000",
        timeline: "1-2 months",
        message: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(
        err.message || "Something went wrong. Please try again or email directly."
      );
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#FBFBF9] border-t border-[#EAEAE6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF2ED] text-[#55634A] text-xs font-mono tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#55634A]" />
            Initiate Collaboration
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
            Have an ambitious project in mind?{" "}
            <span className="font-serif italic font-normal text-zinc-800">
              Let&apos;s build something exceptional.
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-zinc-600 leading-relaxed">
            I am currently accepting selected freelance projects, contracts, and
            product engineering partnerships for 2026. Reach out with your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct info & context */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Card */}
            <div className="p-8 rounded-2xl bg-white border border-[#EAEAE6] shadow-sm space-y-6">
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                  Direct Inquiries
                </span>
                <div className="flex items-center justify-between gap-3 mt-1">
                  <a
                    href={`mailto:${directEmail}`}
                    className="text-base md:text-lg font-medium text-zinc-900 hover:text-zinc-600 transition-colors break-all"
                  >
                    {directEmail}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg border border-zinc-200 hover:bg-zinc-50 transition-colors text-zinc-600 hover:text-zinc-900 flex-shrink-0"
                    title="Copy email to clipboard"
                    type="button"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copied && (
                  <span className="text-xs text-emerald-600 font-medium block mt-1.5">
                    Copied to clipboard!
                  </span>
                )}
              </div>

              <div className="pt-6 border-t border-zinc-100 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-zinc-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Location
                    </div>
                    <div className="text-sm font-medium text-zinc-800">
                      Uttarakhand, India (Remote worldwide)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-zinc-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Timezone & Hours
                    </div>
                    <div className="text-sm font-medium text-zinc-800">
                      IST (UTC +5:30) • Flexible for US, UK & APAC overlap
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-100">
                <div className="flex items-center gap-2 text-xs text-zinc-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>
                    Average turnaround: <strong>&lt; 24 hours response</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* What to expect card */}
            <div className="p-8 rounded-2xl bg-white border border-[#EAEAE6] shadow-sm">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 mb-4 font-mono">
                What happens next?
              </h4>
              <ol className="space-y-4 text-sm text-zinc-600">
                <li className="flex items-start gap-3">
                  <span className="font-mono text-xs font-bold text-zinc-400 mt-0.5">
                    01
                  </span>
                  <span>
                    <strong>Initial Review:</strong> I will personally evaluate your requirements, timeline, and technical viability.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-xs font-bold text-zinc-400 mt-0.5">
                    02
                  </span>
                  <span>
                    <strong>Discovery Call:</strong> A brief 20-minute chat or async spec alignment to lock in architectural scope.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-xs font-bold text-zinc-400 mt-0.5">
                    03
                  </span>
                  <span>
                    <strong>Fixed-Scope Proposal:</strong> Transparent pricing, guaranteed milestones, and delivery schedule.
                  </span>
                </li>
              </ol>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-2xl bg-white border border-[#EAEAE6] shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-[#FBFBF9] text-zinc-900 placeholder:text-zinc-400 text-sm focus:outline-none focus:border-zinc-500 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2"
                    >
                      Work Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-[#FBFBF9] text-zinc-900 placeholder:text-zinc-400 text-sm focus:outline-none focus:border-zinc-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2.5">
                    What service are you looking for?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, projectType: opt })
                        }
                        className={`text-xs px-3.5 py-2 rounded-full border transition-all ${
                          formData.projectType === opt
                            ? "bg-zinc-900 text-white border-zinc-900"
                            : "bg-[#FBFBF9] text-zinc-600 border-zinc-200 hover:border-zinc-400"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Estimated Budget */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2.5">
                    Estimated Budget Range (USD)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {budgetOptions.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, budget: b })
                        }
                        className={`text-xs py-2.5 px-3 rounded-xl border font-mono text-center transition-all ${
                          formData.budget === b
                            ? "bg-zinc-900 text-white border-zinc-900"
                            : "bg-[#FBFBF9] text-zinc-600 border-zinc-200 hover:border-zinc-400"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2"
                  >
                    Project Overview & Goals *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Briefly describe your product goals, timeline expectations, or any existing design specs/repos..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-[#FBFBF9] text-zinc-900 placeholder:text-zinc-400 text-sm focus:outline-none focus:border-zinc-500 focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit Feedback */}
                <AnimatePresence>
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                      <span>
                        Inquiry received successfully! I will review the details and get back to you within 24 hours.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 px-6 rounded-xl bg-zinc-900 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed group shadow-sm"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
