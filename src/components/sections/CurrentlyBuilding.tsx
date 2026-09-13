import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experiments, projects } from "@/data/projects";

/**
 * Projects still being made — finished / playable ones live on the
 * projects page only. Editorial list: big index numbers, names,
 * taglines and status separated by hairlines, with subtle hover movement.
 */
const buildingProjects = projects.filter((p) => p.status !== "可玩");

export function CurrentlyBuilding() {
  return (
    <Section id="currently-building">
      <SectionLabel label="正在制作" />
      <ul className="mt-10">
        {buildingProjects.map((project, index) => (
          <li
            key={project.slug}
            className="group border-t border-charcoal/15 py-7 last:border-b md:py-9"
          >
            <Reveal delay={index * 0.08}>
              <Link
                href="/projects"
                className="flex items-center gap-5 md:gap-8"
                aria-label={`${project.title} — 查看详情`}
              >
                <span className="pt-1 font-mono text-sm text-ember">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                    {project.title}
                  </span>
                  <span className="mt-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm text-soft md:text-base">
                    <span>{project.tagline}</span>
                    <span className="inline-flex items-center gap-1.5 text-xs whitespace-nowrap">
                      <span
                        aria-hidden
                        className="size-1.5 rounded-full bg-ember"
                      />
                      {project.status}
                    </span>
                  </span>
                </span>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-sm text-soft transition-colors duration-300 group-hover:text-ember">
                  查看详情
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal className="mt-12">
        <p className="font-serif text-sm text-soft italic">
          同时在进行的小实验 ——
        </p>
        <ul className="mt-4 space-y-2.5">
          {experiments.map((experiment) => (
            <li
              key={experiment.title}
              className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm"
            >
              <span className="font-medium">{experiment.title}</span>
              <span className="text-soft">{experiment.tagline}</span>
              <span className="inline-flex items-center gap-1.5 text-xs whitespace-nowrap text-soft">
                <span
                  aria-hidden
                  className="size-1.5 rounded-full bg-travel"
                />
                {experiment.status}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-12">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm font-medium"
        >
          <span className="border-b border-charcoal/30 pb-0.5 transition-colors duration-300 group-hover:border-ember group-hover:text-ember">
            查看全部项目
          </span>
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </Reveal>
    </Section>
  );
}
