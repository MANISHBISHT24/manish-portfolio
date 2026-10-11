"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techCategories = [
  {
    label: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    label: "Backend",
    items: ["Python", "Django", "FastAPI", "Node.js", "Express.js"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git", "GitHub", "REST APIs", "Vercel", "Linux"],
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="stack"
      ref={ref}
      className="py-24 lg:py-32 border-t border-[#EAEAEA]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-label mb-4"
            >
              Technical Skills
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl lg:text-4xl font-bold leading-[1.12] tracking-tight text-[#171717]"
            >
              Technologies I work with.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#737373] leading-relaxed self-end"
          >
            A focused set of tools I know well and use regularly. I believe in
            mastering fewer technologies deeply rather than spreading thin across
            everything.
          </motion.p>
        </div>

        {/* Tech groups */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-[#EAEAEA]">
          {techCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + catIdx * 0.1 }}
              className="border-r border-b border-[#EAEAEA] p-7 lg:p-8"
            >
              <p className="section-label mb-6">{cat.label}</p>
              <ul className="space-y-3">
                {cat.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + catIdx * 0.08 + i * 0.06,
                    }}
                    className="group flex items-center gap-3 text-sm text-[#525252] hover:text-[#171717] transition-colors cursor-default"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#78866B] flex-shrink-0 group-hover:scale-150 transition-transform" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-xs text-[#A3A3A3] text-center"
        >
          Always learning. Continuously improving.
        </motion.p>
      </div>
    </section>
  );
}
