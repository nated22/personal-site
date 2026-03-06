import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";
import { ThemeToggle } from "@/components/ThemeToggle";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-slate-900 dark:bg-slate-950 dark:text-slate-50 flex flex-col md:flex-row">
      {/* Left profile-style sidebar */}
      <section className="w-full md:w-1/3 lg:w-[30%] flex items-center justify-center px-6 py-10 md:px-10 md:py-0">
        <div className="w-full max-w-xs rounded-[32px] bg-white dark:bg-slate-900 shadow-soft-card border border-slate-100 dark:border-slate-800 px-8 py-10 space-y-6">
          <div className="text-center space-y-1">
            <p className="text-xs font-medium text-slate-400 dark:text-slate-400 uppercase tracking-[0.14em]">
              Project
            </p>
            <h1 className="mt-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
              {project.title}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-300">
              {project.subtitle} · {project.organization}
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-400 pt-1">
              {project.dateRange}
            </p>
          </div>

          <p className="text-xs text-center text-slate-600 dark:text-slate-200 leading-relaxed">
            {project.longDescription ?? project.description}
          </p>

          <div className="flex items-center justify-center">
            <Link
              href="/?tab=projects"
              className="inline-flex h-8 px-4 items-center justify-center rounded-full bg-slate-900 text-slate-50 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 transition-colors text-xs font-medium"
            >
              ← Back to projects
            </Link>
          </div>
        </div>
      </section>

      {/* Right content column */}
      <section className="flex-1 w-full px-6 pb-10 md:px-16 md:py-14 flex items-center justify-center">
        <div className="w-full max-w-3xl">
          {project.videos && project.videos.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 place-items-center">
              {project.videos.map((vid) => (
                <figure key={vid.src} className="space-y-0">
                  <div className="relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 aspect-video">
                    <video
                      src={vid.src}
                      controls
                      muted
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="mx-auto mt-2 w-fit max-w-full rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-[11px] leading-snug text-slate-500 dark:text-slate-300 text-center">
                    {vid.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}

          {project.images && project.images.length > 0 && (
            <div className={`grid gap-6 sm:grid-cols-2 place-items-center${project.videos?.length ? " mt-6" : ""}`}>
              {project.images.map((img) => (
                <figure key={img.src} className="space-y-0">
                  <div className="relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 aspect-[4/3]">
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="mx-auto mt-2 w-fit max-w-full rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-[11px] leading-snug text-slate-500 dark:text-slate-300 text-center">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}

          {!project.images?.length && !project.videos?.length && (
            <p className="text-sm text-slate-400 dark:text-slate-500">
              No media yet. Drop photos into public/photos or videos into
              public/videos, then add the paths to this project in
              src/lib/projects.ts.
            </p>
          )}
        </div>
      </section>

      <ThemeToggle />
    </main>
  );
}
