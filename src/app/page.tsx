"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { ThemeToggle } from "@/components/ThemeToggle";

type Tab = "experience" | "projects";

type TimelineItem = {
  title: string;
  subtitle: string;
  organization: string;
  dateRange: string;
  description: string;
};

const experiences: TimelineItem[] = [
  {
    title: "DBF Manufacturing Member",
    subtitle: "Student organization",
    organization: "Stanford Flight Club",
    dateRange: "Sept 2025 – Present",
    description:
      "Help design and construct composite molds for the club’s RC racing plane, applying and curing composites and developing 3D‑printed parts."
  },
  {
    title: "Mechatronics (ME210) Member",
    subtitle: "Course project",
    organization: "Stanford University",
    dateRange: "January 2025 – Present",
    description:
      "Build a moving robot from an Arduino board and custom chassis while learning circuit design, motor control, and software‑based PWM."
  },
  {
    title: "XC/TF and Stanford Run Club",
    subtitle: "Team Captain",
    organization: "High school & Stanford",
    dateRange: "Sept 2020 – June 2025",
    description:
      "Led high school team to states twice and qualified for CIF two years in a row; continue training and leadership while aiming to compete for Stanford."
  },
  {
    title: "Lifeguard",
    subtitle: "Employee",
    organization: "Seasonal position",
    dateRange: "May 2024 – Sept 2024",
    description:
      "Graduated top of a 20‑person class and earned rookie of the year while working full‑time, performing frequent saves and applying BLS skills."
  }
];

export default function HomePage() {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<Tab>("experience");

  useEffect(() => {
    const urlTab = searchParams.get("tab");
    if (urlTab === "projects") setTab("projects");
  }, [searchParams]);

  return (
    <main className="relative min-h-screen bg-background text-slate-900 dark:bg-slate-950 dark:text-slate-50 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 px-6 py-10">
      <p className="absolute top-4 left-5 text-[11px] text-slate-400 dark:text-slate-500">
        &copy; {new Date().getFullYear()} Nathaniel Denny
      </p>
      {/* Left profile column */}
      <section className="flex items-center justify-center shrink-0">
        <div className="w-full max-w-[340px] rounded-[32px] bg-white dark:bg-slate-900 shadow-soft-card border border-slate-100 dark:border-slate-800 px-9 py-11 space-y-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-36 w-36 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800 shadow-soft-card">
              <Image
                src="/photos/Headshot.jpg"
                alt="Nathaniel Denny headshot"
                fill
                sizes="144px"
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center space-y-1">
              <h1 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                Nathaniel Denny
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-200">
                Mechanical Engineering @ Stanford
              </p>
            </div>
          </div>

          <p className="text-xs text-center text-slate-500 dark:text-slate-200 leading-relaxed">
            ndenny [at] stanford [dot] edu
          </p>

          <div className="flex items-center justify-center">
            <a
              href="https://www.linkedin.com/in/nathaniel-denny/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-8 px-4 items-center justify-center rounded-full bg-slate-900 text-slate-50 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 transition-colors text-xs font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Right timeline column */}
      <section className="flex items-start justify-center">
        <div className="w-full max-w-lg">
          <header className="flex items-center justify-center mb-8 sticky top-0 z-10 bg-background dark:bg-slate-950 py-4">
            <div className="pill-toggle">
              <button
                type="button"
                onClick={() => setTab("experience")}
                className={`pill-toggle-button ${
                  tab === "experience" ? "pill-toggle-button-active" : ""
                }`}
              >
                Experience
              </button>
              <button
                type="button"
                onClick={() => setTab("projects")}
                className={`pill-toggle-button ${
                  tab === "projects" ? "pill-toggle-button-active" : ""
                }`}
              >
                Projects
              </button>
            </div>
          </header>

          <div>
            <div className="space-y-8">
              {tab === "experience"
                ? experiences.map((item, index) => (
                    <article
                      key={`${item.title}-${index}`}
                    >

                      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                        <div>
                          <h2 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                            {item.title}
                          </h2>
                          <p className="text-xs font-medium text-slate-500 dark:text-slate-300">
                            {item.subtitle} · {item.organization}
                          </p>
                        </div>
                        <p className="mt-1 text-xs text-slate-400 dark:text-slate-400 md:mt-0 md:text-right">
                          {item.dateRange}
                        </p>
                      </div>

                      <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-200 max-w-2xl">
                        {item.description}
                      </p>
                    </article>
                  ))
                : projects.map((project) => (
                    <article
                      key={project.slug}
                    >

                      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                        <div>
                          <h2 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                            <Link
                              href={`/projects/${project.slug}`}
                              className="underline underline-offset-4 decoration-slate-400 hover:decoration-slate-600 hover:text-slate-700 dark:decoration-slate-500 dark:hover:decoration-slate-300"
                            >
                              {project.title}
                            </Link>
                          </h2>
                          <p className="text-xs font-medium text-slate-500 dark:text-slate-300">
                            {project.subtitle} · {project.organization}
                          </p>
                        </div>
                        <p className="mt-1 text-xs text-slate-400 dark:text-slate-400 md:mt-0 md:text-right">
                          {project.dateRange}
                        </p>
                      </div>
                    </article>
                  ))}
            </div>
          </div>
        </div>
      </section>
      <ThemeToggle />
    </main>
  );
}

