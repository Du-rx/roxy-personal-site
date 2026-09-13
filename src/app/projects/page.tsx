import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectList } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "项目作品",
};

export default function ProjectsPage() {
  return (
    <Section id="projects">
      <SectionLabel label="项目作品" />
      <div className="mt-8 mb-12 max-w-2xl">
        <p className="text-xl leading-relaxed font-medium tracking-tight text-charcoal md:text-2xl">
          从想法到能用的产品 —— 每一个都由我独立完成设计与开发。
        </p>
      </div>
      <ProjectList projects={projects} />
      <Reveal className="mt-16">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <p className="font-serif text-base text-charcoal/70 italic">
            觉得有意思？
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-lg font-medium"
          >
            <span className="border-b border-charcoal/30 pb-0.5 transition-colors duration-300 group-hover:border-ember group-hover:text-ember">
              联系我
            </span>
            <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
