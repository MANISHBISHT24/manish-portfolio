"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";

import Image from "next/image";

const projects = [
  {
    id: "01",
    title: "LuxuryStay",
    category: "Full-Stack Application",
    domain: "luxurystay-hotels.vercel.app",
    image: "/projects/luxurystay-preview.jpg",
    description: "LuxuryStay is a modern, full-stack hotel booking platform built with React 19 and Node.js. It combines a seamless user experience with intelligent inventory management and secure payment integrations. The platform allows users to effortlessly browse rooms, book stays, and manage their reservations, while providing hotel owners with comprehensive tools to manage their property efficiently.",
    stack: ["React 19", "Node.js", "Express.js", "JSON DB", "Vite"],
    github: "https://github.com/MANISHBISHT24/luxurystay-nextjs",
    color: "#F2EFE9",
    accent: "#8B7355",
    size: "large",
  },
  {
    id: "02",
    title: "brew-and-bloom",
    category: "Full-Stack Application",
    domain: "brew-and-bloom.vercel.app",
    image: "/projects/brew-and-bloom-preview.jpg",
    description: "Brew & Bloom is a modern coffee and plant shop website that combines an engaging user experience with a robust admin dashboard. Built with React 19 and Node.js, the platform allows customers to easily browse menus, place orders, and make reservations, while providing shop owners with tools to manage products, orders, and bookings efficiently.",
    stack: ["React 19", "Node.js", "Express.js", "JSON DB", "Vite"],
    github: "https://github.com/MANISHBISHT24/brew-and-bloom",
    color: "#F6F2EB",
    accent: "#5C4033",
    size: "small",
  },
  {
    id: "03",
    title: "Luxecart",
    category: "Full-Stack Application",
    domain: "luxecart-fashion.com",
    image: "/projects/luxecart-preview.jpg",
    description: "Luxecart is a high-end Indian fashion store built for simplicity, elegance, and performance. It combines a modern, full-stack interface with intelligent inventory management, detailed product analytics, and secure payment integrations. The platform is designed to make online shopping effortless for users while providing comprehensive tools for store owners to manage their business with ease and precision.",
    stack: ["Python", "Flask", "PostgreSQL", "HTML/CSS", "Bootstrap", "Tailwind CSS", "Google Gemini API", "Stripe Payment Gateway", "JWT Authentication"],
    github: "https://github.com/MANISHBISHT24/Luxecart",
    color: "#F4F0EB",
    accent: "#262626",
    size: "small",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "80px 0px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group flex flex-col overflow-hidden border border-[#EAEAEA] bg-white transition-all duration-300 hover:border-[#D4D4D4] hover:shadow-xl ${project.size === "large" ? "lg:col-span-2" : ""
        }`}
    >
      {/* Visual Website Layout Preview with realistic browser mockup */}
      <div
        className="relative isolate overflow-hidden p-4 sm:p-6 lg:p-7 transition-colors"
        style={{ backgroundColor: project.color }}
      >
        {/* Ambient subtle glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: project.accent }}
        />

        {/* Top card bar with Project ID and live address */}
        <div className="relative mb-3.5 flex items-center justify-between text-xs font-semibold text-[#525252]">
          <div className="flex items-center gap-2">
            <span className="font-editorial text-2xl font-bold tracking-tight text-[#171717] sm:text-3xl">
              {project.id}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#405b35]" />
            <span className="font-mono tracking-tight text-[#666666]">{project.domain}</span>
          </div>
          <span className="rounded-full border border-black/10 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-[#405b35] backdrop-blur-xs">
            {project.category}
          </span>
        </div>

        {/* Realistic Browser Mockup Frame */}
        <div className="relative overflow-hidden rounded-xl border border-black/[0.08] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
          {/* Browser Chrome Header */}
          <div className="flex items-center gap-2 border-b border-black/5 bg-[#FAFAF9] px-3.5 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]/80" />
            </div>
            <div className="mx-auto flex w-full max-w-[260px] items-center justify-center gap-1.5 rounded-md bg-white px-3 py-0.5 text-[11px] font-medium text-[#737373] shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#27C93F]" />
              <span className="truncate">https://{project.domain}</span>
            </div>
          </div>

          {/* Website Layout Screenshot */}
          <div
            className={`relative w-full overflow-hidden bg-[#F5F5F5] ${project.size === "large" ? "aspect-[16/9] sm:aspect-[21/10]" : "aspect-[16/10]"
              }`}
          >
            <Image
              src={project.image}
              alt={`${project.title} website layout design preview`}
              fill
              sizes={
                project.size === "large"
                  ? "(min-width: 1024px) 1200px, 100vw"
                  : "(min-width: 1024px) 600px, 100vw"
              }
              priority={index === 0}
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between bg-white p-6 lg:p-8">
        <div>
          <p className="section-label mb-2">{project.category}</p>
          <h3 className="mb-3 text-lg font-bold leading-tight text-[#171717] transition-colors group-hover:text-[#405b35] lg:text-xl">
            {project.title}
          </h3>
          <p className="mb-5 text-sm leading-relaxed text-[#666666]">{project.description}</p>
          <ul aria-label={`Technologies listed for ${project.title}`} className="mb-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech} className="border border-[#EAEAEA] px-2.5 py-1 text-xs font-medium text-[#666666]">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-[#EAEAEA] pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source repository for ${project.title} on GitHub in a new tab`}
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-[#405b35] bg-[#EFF2ED] px-4 py-2.5 text-sm font-semibold text-[#405b35] transition-colors hover:bg-[#E3E9DF]"
          >
            View source on GitHub <ExternalLink aria-hidden="true" size={15} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "60px 0px" });

  return (
    <section id="work" ref={ref} className="border-t border-[#EAEAEA] bg-[#F8F8F6] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label mb-4"
            >
              Selected work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold leading-tight tracking-tight text-[#171717] lg:text-5xl"
            >
              Portfolio projects.
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="https://github.com/MANISHBISHT24"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Manish Bisht’s GitHub profile in a new tab"
            className="inline-flex flex-shrink-0 items-center gap-2 text-sm font-medium text-[#666666] underline-offset-4 hover:text-[#171717] hover:underline"
          >
            All repositories on GitHub <ArrowUpRight aria-hidden="true" size={14} />
          </motion.a>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
