"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

function GithubIcon({ size = 13 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

const projects = [
  {
    id: "01",
    title: "PulseCare Hospital Management System",
    category: "Full-Stack Application",
    description:
      "A comprehensive, role-based hospital management portal for administrators, specialist physicians, and patients. Features ICU bed management, digital prescriptions, appointment booking, and billing.",
    stack: ["React 19", "Node.js", "Express.js", "JSON DB", "Vite"],
    github: "https://github.com/MANISHBISHT24/hospital-management-system",
    demo: "https://github.com/MANISHBISHT24/hospital-management-system",
    color: "#EFF2ED",
    accent: "#78866B",
    tag: "Live Project",
    size: "large",
  },
  {
    id: "02",
    title: "Himalayan Rider Co.",
    category: "Business Website",
    description:
      "A premium e-commerce and booking platform for a motorcycle touring company in the Himalayas. Custom ride booking flows, tour packages, and responsive design.",
    stack: ["React", "Vite", "CSS", "LocalStorage"],
    github: "https://github.com/MANISHBISHT24",
    demo: null,
    color: "#F8F8F6",
    accent: "#737373",
    tag: "Demo Project",
    size: "small",
  },
  {
    id: "03",
    title: "Django Blog Platform",
    category: "Full-Stack Application",
    description:
      "A production-deployed blog platform with full CRUD, user authentication, rich text editing, and SEO optimization. Deployed on Vercel.",
    stack: ["Django", "Python", "PostgreSQL", "HTML/CSS"],
    github: "https://github.com/MANISHBISHT24/Django-Blog-Websites",
    demo: "https://django-blog-websites.vercel.app",
    color: "#F8F8F6",
    accent: "#737373",
    tag: "Live Project",
    size: "small",
  },
  {
    id: "04",
    title: "Banking Application",
    category: "Full-Stack Application",
    description:
      "A command-line and GUI banking application with account management, transaction history, balance tracking, and data persistence built with Python.",
    stack: ["Python", "Tkinter", "File DB"],
    github: "https://github.com/MANISHBISHT24/Banking_Application",
    demo: null,
    color: "#EFF2ED",
    accent: "#78866B",
    tag: "Open Source",
    size: "small",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group border border-[#EAEAEA] hover:border-[#D4D4D4] transition-all duration-500 overflow-hidden ${
        project.size === "large" ? "lg:col-span-2" : ""
      }`}
    >
      {/* Visual area */}
      <div
        className="relative overflow-hidden"
        style={{ backgroundColor: project.color, minHeight: project.size === "large" ? "280px" : "200px" }}
      >
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(${project.accent}20 1px, transparent 1px), linear-gradient(90deg, ${project.accent}20 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Mini wireframe UI */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="w-full max-w-xs border border-white/60 bg-white shadow-lg p-4 space-y-3 transform group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex gap-1.5 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#EAEAEA]" />
              <div className="w-2 h-2 rounded-full bg-[#EAEAEA]" />
              <div className="w-2 h-2 rounded-full bg-[#EAEAEA]" />
            </div>
            <div className="h-3 w-3/4 bg-[#E5E5E5] rounded-full" />
            <div className="h-2 w-full bg-[#F4F4F4] rounded-full" />
            <div className="h-2 w-2/3 bg-[#F4F4F4] rounded-full" />
            <div className="flex gap-2 pt-1">
              <div className="h-7 w-20" style={{ backgroundColor: project.accent + "30" }} />
              <div className="h-7 w-16 bg-[#F4F4F4]" />
            </div>
          </div>
        </div>

        {/* Tag */}
        <div className="absolute top-4 right-4">
          <span
            className="text-xs font-semibold tracking-wider uppercase px-2.5 py-1"
            style={{ backgroundColor: project.accent + "20", color: project.accent }}
          >
            {project.tag}
          </span>
        </div>

        {/* Number */}
        <div className="absolute bottom-4 left-4">
          <span className="font-editorial text-5xl font-bold opacity-10 text-[#171717]">
            {project.id}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8 bg-white">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <p className="section-label mb-2">{project.category}</p>
            <h3 className="text-lg lg:text-xl font-bold text-[#171717] group-hover:text-[#78866B] transition-colors duration-300 leading-tight">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="text-sm text-[#737373] leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2.5 py-1 border border-[#EAEAEA] text-[#737373]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-[#EAEAEA]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-[#737373] hover:text-[#171717] transition-colors link-underline pb-0.5"
          >
            <GithubIcon size={13} />
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-[#737373] hover:text-[#78866B] transition-colors link-underline pb-0.5"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
          <div className="ml-auto">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-1 text-xs font-medium text-[#171717] hover:text-[#78866B] transition-colors"
            >
              View Project
              <ArrowUpRight
                size={13}
                className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="work"
      ref={ref}
      className="py-24 lg:py-32 bg-[#F8F8F6] border-t border-[#EAEAEA]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-label mb-4"
            >
              Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.12] tracking-tight text-[#171717]"
            >
              A few things I&apos;ve built.
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="https://github.com/MANISHBISHT24"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-[#737373] hover:text-[#171717] transition-colors link-underline pb-0.5 flex-shrink-0"
          >
            All projects on GitHub
            <ArrowUpRight size={14} />
          </motion.a>
        </div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
