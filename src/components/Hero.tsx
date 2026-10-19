"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ChevronDown, MapPin } from "lucide-react";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.55 },
  }),
};

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-35" style={{
        backgroundImage: "linear-gradient(#EAEAEA 1px, transparent 1px), linear-gradient(90deg, #EAEAEA 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-0">
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col justify-center">
            <motion.div custom={0} initial="hidden" animate="show" variants={fadeUp} className="mb-8 flex flex-wrap items-center gap-3.5">
              <span className="section-label">Manish Bisht · Uttarakhand, India</span>
              <span className="rounded-full bg-[#EFF2ED] px-3 py-1 text-xs font-medium text-[#405b35]">
                Freelance web developer
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mb-6 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-[#171717] sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Your business deserves more than just a website.{" "}
              <em className="font-editorial font-normal not-italic text-[#405b35]">It deserves an online presence.</em>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mb-10 max-w-lg text-base leading-relaxed text-[#666666] lg:text-lg"
            >
              I&apos; design, build, and maintain modern, professional websites for businesses and individuals. 
            </motion.p>

            <motion.div custom={3} initial="hidden" animate="show" variants={fadeUp} className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a href="#contact" className="group inline-flex items-center gap-2 bg-[#171717] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#405b35]">
                Contact Manish <ArrowUpRight aria-hidden="true" size={16} />
              </a>
              <a href="#work" className="group inline-flex items-center gap-2 border-b border-[#D4D4D4] pb-1 text-sm font-medium text-[#525252] transition-colors hover:text-[#171717]">
                View portfolio projects <ChevronDown aria-hidden="true" size={14} />
              </a>
            </motion.div>

            <motion.p custom={4} initial="hidden" animate="show" variants={fadeUp} className="mt-12 text-xs font-medium text-[#666666]">
              Web development · Uttarakhand, India
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative isolate hidden items-center justify-center lg:flex"
          >
            <div aria-hidden="true" className="absolute -right-5 top-3 h-44 w-44 rounded-full bg-[#EFF2ED]" />
            <div aria-hidden="true" className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full border border-[#D4D4D4]" />

            <figure className="relative w-full max-w-[420px]">
              <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rotate-3 rounded-[2rem] bg-[#EFF2ED]" />
              <div className="relative rounded-[2rem] border border-[#EAEAE6] bg-white p-3 shadow-[0_24px_64px_rgba(0,0,0,0.12)]">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#1D2024]">
                  <Image
                    src="/manish.PNG"
                    alt="Portrait of Manish Bisht"
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/15" />
                  <div className="absolute inset-x-4 top-4 flex justify-start sm:inset-x-5 sm:top-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-xs font-medium text-[#405b35] shadow-sm backdrop-blur">
                      <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
                      Uttarakhand, India
                    </span>
                  </div>
                  <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl">Manish Bisht</p>
                    <p className="mt-2 text-sm font-medium text-white">Freelance web developer</p>
                  </figcaption>
                </div>
              </div>
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
