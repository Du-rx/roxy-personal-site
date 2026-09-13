import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

/**
 * Card summarizing a project, reused on the homepage and projects page:
 * what it is, why it exists, what I did, how problems were solved,
 * where it currently stands, and the tech used.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const isPlayable = project.status === "可玩";

  return (
    <article className="flex flex-col rounded-lg border border-charcoal/15 p-6 md:p-7">
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight">
          {project.title}
        </h3>
        <span className="inline-flex shrink-0 items-center gap-1.5 text-xs whitespace-nowrap text-soft">
          <span
            aria-hidden
            className={`size-1.5 rounded-full ${isPlayable ? "bg-travel" : "bg-ember"}`}
          />
          {project.status}
        </span>
      </div>
      <p className="font-serif text-sm text-soft italic">{project.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
        {project.description}
      </p>
      <div className="mt-5">
        <h4 className="text-xs font-medium tracking-[0.25em] text-soft uppercase">
          我做了什么
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
          {project.details}
        </p>
        <ul className="mt-3 space-y-1.5">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-2.5 text-sm text-charcoal/70"
            >
              <span
                aria-hidden
                className="mt-[9px] size-1 shrink-0 rounded-full bg-ember"
              />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
      {project.challenges?.length ? (
        <div className="mt-5">
          <h4 className="text-xs font-medium tracking-[0.25em] text-soft uppercase">
            难点与解决
          </h4>
          <ul className="mt-2 space-y-3">
            {project.challenges.map((challenge) => (
              <li key={challenge.problem} className="text-sm leading-relaxed">
                <p className="text-charcoal/80">{challenge.problem}</p>
                <p className="mt-1 flex items-start gap-2 text-charcoal/70">
                  <span aria-hidden className="mt-px text-ember">
                    →
                  </span>
                  {challenge.solution}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {project.progress ? (
        <p className="mt-4 text-sm leading-relaxed text-soft">
          <span className="font-medium text-charcoal/70">进度 · </span>
          {project.progress}
        </p>
      ) : null}
      <ul
        className="mt-auto flex flex-wrap gap-1.5 pt-6"
        aria-label="使用的技术"
      >
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-charcoal/5 px-2.5 py-0.5 text-xs text-charcoal/60"
          >
            {tech}
          </li>
        ))}
      </ul>
      {project.links?.length ? (
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-medium"
            >
              <span className="border-b border-charcoal/30 pb-0.5 transition-colors duration-300 group-hover:border-ember group-hover:text-ember">
                {link.label}
              </span>
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
