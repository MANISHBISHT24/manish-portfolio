"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    name: "Website Development",
    description:
      "Websites for businesses, personal brands, and startups. Scope and requirements are discussed for each project.",
    href: "#contact",
  },
  {
    number: "02",
    name: "Full-Stack Applications",
    description:
      "Web applications with frontend interfaces, backend logic, APIs, and databases. Project scope is agreed in writing.",
    href: "#contact",
  },
  {
    number: "03",
    name: "E-commerce Websites",
    description:
      "Online store interfaces and checkout integrations can be discussed and scoped for your market.",
    href: "#contact",
  },
  {
    number: "04",
    name: "UI Implementation & Redesign",
    description:
      "UI implementation and redesign for existing websites, scoped around agreed usability and visual requirements.",
    href: "#contact",
  },
  {
    number: "05",
    name: "Maintenance & Optimization",
    description:
      "Bug fixes, dependency updates, and technical support can be scoped in a written project agreement.",
    href: "#contact",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 lg:py-32 border-t border-[#EAEAEA]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label self-start"
          >
            Services
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-start-1"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.12] tracking-tight text-[#171717] text-balance max-w-xl">
              What I can help you build.
            </h2>
          </motion.div>
        </div>

        {/* Service rows */}
        <div className="divide-y divide-[#EAEAEA] border-t border-[#EAEAEA]">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            >
              <a
                href={service.href}
                aria-label={`Ask about ${service.name}`}
                className="group flex w-full items-start gap-5 px-0 py-7 text-left transition-colors duration-300 hover:bg-[#F8F8F6] sm:-mx-4 sm:px-4 lg:py-8"
              >
                <span className="mt-1 w-10 flex-shrink-0 font-editorial text-sm text-[#666666] transition-colors group-hover:text-[#405b35]">
                  {service.number}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-semibold text-[#171717] transition-colors duration-300 group-hover:text-[#405b35] lg:text-2xl">
                    {service.name}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#666666]">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 rounded-md border border-[#D4D4D4] px-3.5 py-2 text-sm font-medium text-[#405b35] transition-colors group-hover:border-[#556B49] group-hover:bg-[#EFF2ED]">
                    Ask about {service.name}
                    <ArrowUpRight aria-hidden="true" size={16} />
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
