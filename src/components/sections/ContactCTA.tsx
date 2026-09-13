import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function ContactCTA() {
  return (
    <Section id="contact-cta" className="pb-20 pt-16 md:pb-28 md:pt-24">
      <Reveal>
        <h2 className="text-5xl leading-[1.02] font-bold tracking-tight md:text-7xl lg:text-8xl">
          让我们
          <br />
          创造点什么<span className="text-ember">。</span>
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
          <span className="text-sm tracking-[0.35em] text-soft">ROXY</span>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-lg font-medium transition-colors duration-300 md:text-xl"
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
