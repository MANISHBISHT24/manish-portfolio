"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Check, CheckCircle2, Copy, Loader2, Mail, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

type ContactFormData = {
  email: string;
  message: string;
  consent: boolean;
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    email: "",
    message: "",
    consent: false,
  });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const directEmail = "manishbisht12390@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(directEmail);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.errors?.[0]?.message || data.message || "The inquiry could not be sent.");
      }

      setStatus("success");
      setFormData({ email: "", message: "", consent: false });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error && error.message
          ? error.message
          : "The inquiry could not be sent. Please email Manish directly."
      );
    }
  };

  return (
    <section id="contact" className="border-t border-[#EAEAE6] bg-[#FBFBF9] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-14 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#EFF2ED] px-3 py-1 text-xs font-mono uppercase tracking-wider text-[#405b35]">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#405b35]" />
            Contact
          </div>
          <h2 className="text-3xl font-light leading-tight tracking-tight text-[#171717] md:text-5xl">
            Have a project question?{" "}
            <span className="font-serif italic font-normal text-[#171717]">Send a message.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#525252] md:text-lg">
            Share only what is needed for an initial conversation. Project scope, fees, timing,
            cancellation, and refund terms are agreed in writing before any work or payment begins.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <aside className="space-y-6 lg:col-span-5" aria-label="Contact information">
            <div className="space-y-6 rounded-2xl border border-[#EAEAE6] bg-white p-8 shadow-sm">
              <div>
                <p className="mb-2 text-xs font-mono uppercase tracking-widest text-[#666666]">
                  Email
                </p>
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${directEmail}`}
                    className="break-all text-base font-medium text-[#171717] underline-offset-4 hover:underline md:text-lg"
                  >
                    {directEmail}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label={copied ? "Email address copied" : "Copy email address"}
                    className="flex-shrink-0 rounded-lg border border-zinc-500 p-3 text-[#525252] hover:bg-zinc-50"
                  >
                    {copied ? <Check aria-hidden="true" size={18} /> : <Copy aria-hidden="true" size={18} />}
                  </button>
                </div>
                <p className="mt-2 min-h-5 text-sm text-[#525252]" aria-live="polite">
                  {copied ? "Email address copied." : ""}
                </p>
              </div>

              <div className="flex items-start gap-3 border-t border-zinc-200 pt-6">
                <MapPin aria-hidden="true" className="mt-1 flex-shrink-0 text-[#666666]" size={18} />
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#666666]">Location</p>
                  <p className="mt-1 text-sm font-medium text-[#171717]">Uttarakhand, India</p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-zinc-200 pt-6">
                    <Mail aria-hidden="true" className="mt-1 flex-shrink-0 text-[#666666]" size={18} />
                <p className="text-sm leading-relaxed text-[#525252]">
                  Do not include passwords, payment details, health information, or other sensitive
                  data in an inquiry.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#EAEAE6] bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-sm font-semibold text-[#171717]">
                What happens next?
              </h3>
              <ol className="space-y-3 text-sm leading-relaxed text-[#525252]">
                    <li>1. Your inquiry is sent to the email delivery service for forwarding to the contact mailbox.</li>
                <li>2. If the project is a fit, scope and pricing can be discussed.</li>
                <li>3. Work begins only after written project terms are agreed.</li>
              </ol>
            </div>
          </aside>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#EAEAE6] bg-white p-8 shadow-sm md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#171717]">
                    Email address <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={formData.email}
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-zinc-500 bg-[#FBFBF9] px-4 py-3 text-sm text-[#171717] placeholder:text-[#666666] focus:border-zinc-700 focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#171717]">
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <p id="message-help" className="mb-2 text-sm text-[#525252]">
                    10 to 2,000 characters. Please share only what is needed to describe your request.
                  </p>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    minLength={10}
                    maxLength={2000}
                    required
                    aria-describedby="message-help"
                    value={formData.message}
                    onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                    placeholder="How can I help?"
                    className="w-full resize-y rounded-xl border border-zinc-500 bg-[#FBFBF9] px-4 py-3 text-sm text-[#171717] placeholder:text-[#666666] focus:border-zinc-700 focus:bg-white"
                  />
                </div>

                <div className="rounded-xl border border-zinc-500 bg-[#FBFBF9] p-4">
                  <label htmlFor="consent" className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-[#171717]">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(event) => setFormData({ ...formData, consent: event.target.checked })}
                      className="mt-1 h-4 w-4 flex-shrink-0 accent-[#405b35]"
                    />
                    <span>
                      I agree that Manish Bisht may use my email address and message, including
                      sharing them with email service providers, to respond to this inquiry. I can
                      withdraw consent by email. Read the{" "}
                      <a href="/privacy" className="font-semibold text-[#405b35] underline underline-offset-4">
                        Privacy Policy
                      </a>
                      . <span aria-hidden="true">*</span>
                    </span>
                  </label>
                </div>

                {status === "error" && (
                  <p role="alert" className="rounded-xl border border-rose-300 bg-rose-50 p-4 text-sm text-rose-900">
                    {errorMessage}
                  </p>
                )}

                {status === "success" && (
                  <p role="status" aria-live="polite" className="flex items-start gap-2 rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-sm text-emerald-900">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 flex-shrink-0" size={18} />
                    <span>Your inquiry was submitted for email delivery.</span>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-6 py-4 text-sm font-semibold text-white hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 aria-hidden="true" className="animate-spin" size={18} />
                      Sending inquiry…
                    </>
                  ) : (
                    "Send inquiry"
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
