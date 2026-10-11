"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Thoughtful problem-solving",
  "Clean and maintainable code",
  "Responsive web experiences",
  "Performance and accessibility",
  "Transparent communication",
  "Attention to detail",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 lg:py-32 bg-[#F8F8F6] border-t border-[#EAEAEA]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-label mb-8"
        >
          A Little About Me
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Portrait + intro headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.12] tracking-tight text-[#171717] text-balance mb-8">
              Good design should feel simple.{" "}
              <em className="font-editorial font-normal text-[#78866B]">
                Great development
              </em>{" "}
              should make it work beautifully.
            </h2>

            {/* Manish's Portrait Photo */}
            <div className="relative w-full max-w-xs aspect-[3/4] border border-[#EAEAEA] bg-[#F8F8F6] overflow-hidden rounded-2xl group shadow-sm">
              <img
                src="/manish.jpg"
                alt="Manish Bisht — Freelance Full-Stack Developer"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div>
                  <p className="text-white text-sm font-semibold tracking-wide">
                    Manish Bisht
                  </p>
                  <p className="text-zinc-300 text-xs font-mono">
                    Uttarakhand, India • Full-Stack
                  </p>
                </div>
              </div>
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-mono text-[#78866B] font-medium border border-[#EAEAEA]">
                Open for work
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#78866B]" />
            </div>
          </motion.div>

          {/* Right — About content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-5 text-[#525252] leading-relaxed mb-10">
              <p>
                I&apos;m Manish Bisht, a freelance full-stack developer based in
                Uttarakhand, India. I enjoy building useful digital products that
                actually work — websites and applications that are fast,
                accessible, and genuinely pleasant to use.
              </p>
              <p>
                My process starts with understanding what problem needs to be
                solved. I believe the best digital products come from a clear
                understanding of goals, not just features. That&apos;s why I
                take time to listen before I write a single line of code.
              </p>
              <p>
                Whether it&apos;s a business website, a full-stack application,
                or a redesigned product — I bring the same level of care to
                every project: clean code, thoughtful design decisions, and open
                communication throughout.
              </p>
              <p>
                I work with a small number of clients at a time, which allows me
                to give each project the full attention it deserves.
              </p>
            </div>

            {/* Highlights */}
            <div className="border-t border-[#EAEAEA] pt-8">
              <p className="section-label mb-5">What I bring to each project</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                    className="flex items-center gap-2.5 text-sm text-[#525252]"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-[#78866B] flex-shrink-0"
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
