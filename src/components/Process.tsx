"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your goals, audience, and constraints. Ask the right questions before touching any code.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define features, scope, and a clear timeline. Agree on what success looks like for your project.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Establish visual direction and user experience. Create wireframes or mockups to align before building.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "Build the frontend, backend, and integrations with clean, maintainable, well-structured code.",
  },
  {
    number: "05",
    title: "Test",
    description:
      "Verify responsiveness, accessibility, browser compatibility, and overall functionality.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "Deploy the product and provide a thorough handover with documentation and support.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="process"
      ref={ref}
      className="py-24 lg:py-32 bg-[#F8F8F6] border-t border-[#EAEAEA]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-label mb-4"
        >
          Development Process
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl lg:text-4xl font-bold leading-[1.12] tracking-tight text-[#171717] mb-16 max-w-xl"
        >
          How a project comes to life.
        </motion.h2>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-4 left-0 right-0 h-px bg-[#EAEAEA]" />

            <div className="grid grid-cols-6 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                  className="relative pt-10"
                >
                  {/* Step dot */}
                  <div className="absolute top-0 left-0 w-8 h-8 border border-[#EAEAEA] bg-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#78866B]" />
                  </div>

                  {/* Content */}
                  <p className="font-editorial text-xs text-[#A3A3A3] mb-2">
                    {step.number}
                  </p>
                  <h3 className="text-base font-semibold text-[#171717] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#737373] leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-[#EAEAEA]" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                className="relative pl-10"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1 w-6 h-6 border border-[#EAEAEA] bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#78866B]" />
                </div>

                <p className="font-editorial text-xs text-[#A3A3A3] mb-1">
                  {step.number}
                </p>
                <h3 className="text-base font-semibold text-[#171717] mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm text-[#737373] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
