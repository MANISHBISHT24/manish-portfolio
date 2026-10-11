"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    name: "Website Development",
    description:
      "Modern, responsive websites for businesses, personal brands, and startups. Built with performance, accessibility, and SEO in mind from day one.",
    href: "#contact",
  },
  {
    number: "02",
    name: "Full-Stack Applications",
    description:
      "Functional web applications with frontend interfaces, backend logic, REST APIs, and databases. From concept to deployment.",
    href: "#contact",
  },
  {
    number: "03",
    name: "E-commerce Websites",
    description:
      "Online stores with product pages, shopping cart functionality, secure checkout, and appropriate payment integrations for your market.",
    href: "#contact",
  },
  {
    number: "04",
    name: "UI Implementation & Redesign",
    description:
      "Transform existing websites into cleaner, more intuitive digital experiences. Improve usability, visual consistency, and overall quality.",
    href: "#contact",
  },
  {
    number: "05",
    name: "Maintenance & Optimization",
    description:
      "Performance improvements, bug fixes, dependency updates, and ongoing technical support to keep your product running smoothly.",
    href: "#contact",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

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
              <button
                onClick={scrollToContact}
                className="group w-full text-left py-7 lg:py-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 hover:bg-[#F8F8F6] transition-colors duration-300 px-0 sm:px-4 -mx-0 sm:-mx-4"
              >
                {/* Number */}
                <span className="font-editorial text-sm text-[#A3A3A3] flex-shrink-0 w-10 group-hover:text-[#78866B] transition-colors">
                  {service.number}
                </span>

                {/* Name */}
                <h3 className="text-xl lg:text-2xl font-semibold text-[#171717] flex-shrink-0 min-w-[220px] group-hover:text-[#78866B] transition-colors duration-300">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#737373] leading-relaxed flex-1 max-w-xl">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-2 flex-shrink-0 text-sm font-medium text-[#A3A3A3] group-hover:text-[#78866B] transition-all duration-300">
                  <span className="hidden sm:block text-xs tracking-wider uppercase">
                    Inquire
                  </span>
                  <div className="w-8 h-8 border border-[#EAEAEA] group-hover:border-[#78866B] flex items-center justify-center transition-colors duration-300">
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
