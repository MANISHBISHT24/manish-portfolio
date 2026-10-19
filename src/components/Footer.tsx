import { ArrowUp, Mail } from "lucide-react";
import Link from "next/link";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[#EAEAE6] bg-white text-[#525252]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
        <div className="grid grid-cols-1 gap-12 border-b border-[#EAEAE6] pb-12 md:grid-cols-12 md:pb-16">
          <div className="space-y-4 md:col-span-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-serif text-xl font-medium tracking-tight text-[#171717]">Manish Bisht</span>
              <span className="rounded-full bg-[#EFF2ED] px-2.5 py-0.5 text-xs font-mono text-[#405b35]">Freelance web developer</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#525252]">
              Web development services and portfolio projects. Based in Uttarakhand, India.
            </p>
            <a className="inline-flex items-center gap-2 text-sm font-medium text-[#171717] underline-offset-4 hover:underline" href="mailto:manishbisht12390@gmail.com">
              <Mail aria-hidden="true" className="h-4 w-4" />
              manishbisht12390@gmail.com
            </a>
          </div>

          <nav aria-label="Website sections" className="md:col-span-3">
            <h2 className="mb-3 text-xs font-mono font-semibold uppercase tracking-widest text-[#525252]">Website</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#hero" className="hover:text-[#171717]">Home</Link></li>
              <li><Link href="/#about" className="hover:text-[#171717]">About</Link></li>
              <li><Link href="/#services" className="hover:text-[#171717]">Services</Link></li>
              <li><Link href="/#work" className="hover:text-[#171717]">Portfolio projects</Link></li>
              <li><Link href="/#contact" className="hover:text-[#171717]">Contact</Link></li>
            </ul>
          </nav>

          <nav aria-label="Legal policies" className="md:col-span-2">
            <h2 className="mb-3 text-xs font-mono font-semibold uppercase tracking-widest text-[#525252]">Policies</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-[#171717]">Privacy policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#171717]">Terms and conditions</Link></li>
              <li><Link href="/cookies" className="hover:text-[#171717]">Cookie policy</Link></li>
              <li><Link href="/refunds" className="hover:text-[#171717]">Refund policy</Link></li>
            </ul>
          </nav>

          <div className="space-y-3 md:col-span-2">
            <h2 className="mb-3 text-xs font-mono font-semibold uppercase tracking-widest text-[#525252]">Profiles</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://github.com/MANISHBISHT24" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile for Manish Bisht, opens in a new tab" className="inline-flex items-center gap-2 hover:text-[#171717]">
                  <GithubIcon /> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/manish-bisht-911b0b381" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile for Manish Bisht, opens in a new tab" className="inline-flex items-center gap-2 hover:text-[#171717]">
                  <LinkedinIcon /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-[#666666] sm:flex-row">
          <p>© 2026 Manish Bisht</p>
          <a href="#main-content" className="inline-flex items-center gap-2 rounded-lg border border-zinc-500 px-3 py-2 font-medium hover:bg-zinc-50">
            <ArrowUp aria-hidden="true" className="h-3.5 w-3.5" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
