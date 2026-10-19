"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      for (const link of [...navLinks].reverse()) {
        const sectionId = link.href.slice(1);
        const section = document.getElementById(sectionId);
        if (section && window.scrollY >= section.offsetTop - 120) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className={`fixed left-0 right-0 top-0 z-50 border-b border-[#EAEAEA] transition-colors ${scrolled ? "bg-white/95 shadow-sm backdrop-blur-sm" : "bg-white"}`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a
              href="#hero"
              aria-label="Manish Bisht home"
              onClick={closeMenu}
              className="font-editorial text-2xl font-bold tracking-tight text-[#171717] hover:text-[#405b35]"
            >
              MB<span className="text-[#405b35]">.</span>
            </a>

            <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => {
                const sectionId = link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={activeSection === sectionId ? "location" : undefined}
                    className={`text-sm font-medium transition-colors ${activeSection === sectionId ? "text-[#171717]" : "text-[#666666] hover:text-[#171717]"}`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="hidden items-center gap-2 bg-[#171717] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#405b35] md:flex"
              >
                Contact Manish <span aria-hidden="true">↗</span>
              </a>
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className="rounded-md p-2 text-[#171717] hover:bg-zinc-100 md:hidden"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
              >
                {menuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="fixed left-0 right-0 top-16 z-40 flex flex-col gap-4 border-b border-[#EAEAEA] bg-white px-6 py-6 shadow-sm md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded py-2 text-base font-medium text-[#171717] hover:text-[#405b35]"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
