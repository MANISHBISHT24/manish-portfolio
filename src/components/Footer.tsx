"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Mail } from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // IST is UTC+5:30
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-[#EAEAE6] text-zinc-600">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#EAEAE6]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-serif text-xl tracking-tight text-zinc-900 font-medium">
                Manish Bisht
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#EFF2ED] text-[#55634A] font-mono">
                Freelance Full-Stack
              </span>
            </div>
            <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
              Thoughtfully designed. Carefully developed. Building modern, high-performance
              digital products for startups and businesses.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span>Uttarakhand, IN ({time ? `${time} IST` : "UTC+5:30"})</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-2">
              Navigation
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#hero"
                  className="hover:text-zinc-950 transition-colors inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-zinc-950 transition-colors inline-block"
                >
                  About Manish
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-zinc-950 transition-colors inline-block"
                >
                  Services & Capabilities
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="hover:text-zinc-950 transition-colors inline-block"
                >
                  Selected Work
                </a>
              </li>
              <li>
                <a
                  href="#tech"
                  className="hover:text-zinc-950 transition-colors inline-block"
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="hover:text-zinc-950 transition-colors inline-block"
                >
                  Process
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-2">
              Connect & Profiles
            </span>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href="https://github.com/MANISHBISHT24"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-zinc-950 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-zinc-800" />
                <span>github.com/MANISHBISHT24</span>
              </a>
              <a
                href="https://www.linkedin.com/in/manish-bisht-911b0b381"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-zinc-950 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                <span>linkedin.com/in/manish-bisht-911b0b381</span>
              </a>
              <a
                href="mailto:manishbisht12390@gmail.com"
                className="flex items-center gap-2 hover:text-zinc-950 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>manishbisht12390@gmail.com</span>
              </a>
            </div>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-500 hover:text-zinc-900 border border-zinc-200 px-3 py-2 rounded-lg hover:bg-zinc-50 transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-mono">
          <div>
            &copy; 2026 Manish Bisht. All rights reserved.
          </div>
          <div>
            Built with Next.js 15, TypeScript &amp; Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
