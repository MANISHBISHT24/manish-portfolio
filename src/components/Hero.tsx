"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#EAEAEA 1px, transparent 1px), linear-gradient(90deg, #EAEAEA 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.35,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-4rem)]">

          {/* Left — Text */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow + Availability */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="flex items-center gap-4 flex-wrap mb-8"
            >
              <span className="section-label">
                Independent Developer · Uttarakhand, India
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-[#78866B] bg-[#EFF2ED] px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#78866B] animate-pulse" />
                Available for select projects
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="text-[2.6rem] sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-[#171717] text-balance mb-6"
            >
              Building digital{" "}
              <br className="hidden sm:block" />
              experiences{" "}
              <em className="font-editorial font-normal not-italic text-[#78866B]">
                with clarity
              </em>
              <br className="hidden sm:block" />
              {" "}and purpose.
            </motion.h1>

            {/* Description */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="text-base lg:text-lg text-[#737373] leading-relaxed max-w-lg mb-10"
            >
              I&apos;m a freelance full-stack developer helping businesses turn
              ideas into thoughtfully designed, reliable, and high-performance
              websites and web applications.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <button
                onClick={scrollToContact}
                className="group flex items-center gap-2 bg-[#171717] text-white text-sm font-medium px-7 py-3.5 hover:bg-[#78866B] transition-colors duration-300"
              >
                Start a Project
                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </button>
              <button
                onClick={scrollToWork}
                className="group flex items-center gap-2 text-sm font-medium text-[#737373] hover:text-[#171717] transition-colors duration-200 pb-0.5 border-b border-[#EAEAEA] hover:border-[#171717]"
              >
                Explore Selected Work
                <ChevronDown
                  size={14}
                  className="group-hover:translate-y-0.5 transition-transform"
                />
              </button>
            </motion.div>

            {/* Tagline */}
            <motion.p
              custom={4}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-12 text-xs text-[#A3A3A3] font-medium tracking-widest uppercase"
            >
              Thoughtfully designed. Carefully developed.
            </motion.p>
          </div>

          {/* Right — Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-[480px]">
              {/* Browser window frame */}
              <div className="border border-[#EAEAEA] shadow-[0_24px_64px_rgba(0,0,0,0.07)] bg-white overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3.5 border-b border-[#EAEAEA] bg-[#F8F8F6]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#EAEAEA]" />
                    <div className="w-3 h-3 rounded-full bg-[#EAEAEA]" />
                    <div className="w-3 h-3 rounded-full bg-[#EAEAEA]" />
                  </div>
                  <div className="flex-1 ml-3">
                    <div className="bg-white border border-[#EAEAEA] rounded-sm px-3 py-1.5 text-xs text-[#A3A3A3] font-mono">
                      manishbisht.dev
                    </div>
                  </div>
                </div>

                {/* Browser content — mini portfolio */}
                <div className="p-8 bg-white space-y-6">
                  {/* Mini header */}
                  <div className="flex items-center justify-between border-b border-[#EAEAEA] pb-4">
                    <div className="font-editorial text-lg font-bold text-[#171717]">
                      MB<span className="text-[#78866B]">.</span>
                    </div>
                    <div className="flex gap-3">
                      {["Home", "Work", "Contact"].map((item) => (
                        <div key={item} className="h-1.5 rounded-full bg-[#EAEAEA]" style={{ width: `${item.length * 6}px` }} />
                      ))}
                    </div>
                  </div>

                  {/* Mini hero text */}
                  <div className="space-y-3 py-4">
                    <div className="h-2 w-20 bg-[#EFF2ED] rounded-full" />
                    <div className="h-7 w-4/5 bg-[#171717] rounded-sm" />
                    <div className="h-5 w-3/4 bg-[#EAEAEA] rounded-sm" />
                    <div className="h-3 w-2/3 bg-[#F4F4F4] rounded-full" />
                    <div className="h-3 w-1/2 bg-[#F4F4F4] rounded-full" />
                    <div className="flex gap-3 pt-2">
                      <div className="h-9 w-28 bg-[#171717] rounded-sm" />
                      <div className="h-9 w-28 border border-[#EAEAEA] rounded-sm" />
                    </div>
                  </div>

                  {/* Mini project cards */}
                  <div className="border-t border-[#EAEAEA] pt-5 grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="border border-[#EAEAEA] p-3 space-y-2">
                        <div className={`h-16 rounded-sm ${i % 2 === 0 ? "bg-[#F8F8F6]" : "bg-[#EFF2ED]"}`} />
                        <div className="h-2 w-3/4 bg-[#EAEAEA] rounded-full" />
                        <div className="h-2 w-1/2 bg-[#F4F4F4] rounded-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating accent dot */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#78866B]/20 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#EFF2ED]" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#A3A3A3]"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#EAEAEA]" />
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
