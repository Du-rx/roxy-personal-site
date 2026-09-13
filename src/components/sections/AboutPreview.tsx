import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionLink } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { journeyStages } from "@/lib/site";

/**
 * About preview: personal story on the left, the journey as a vertical
 * route timeline on the right (stacked on mobile).
 */
export function AboutPreview() {
  const currentStage = journeyStages.length - 1;

  return (
    <Section id="about-preview">
      <SectionLabel label="关于" />
      <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-20">
        <Reveal>
          <div className="space-y-4 text-lg leading-relaxed text-charcoal/85 md:text-xl">
            <p>我从建筑起步。</p>
            <p>后来投身运营。</p>
            <p>如今，我正在学习用 AI 和代码构建事物。</p>
            <p>我不想只停留在想法。</p>
            <p className="font-medium text-charcoal">我想把它们变成现实。</p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <ol className="relative space-y-8 self-start">
            <span
              aria-hidden
              className="absolute top-1.5 bottom-1.5 left-[4.5px] w-px bg-charcoal/20"
            />
            {journeyStages.map((stage, index) => {
              const isCurrent = index === currentStage;
              return (
                <li key={stage} className="flex items-center gap-4">
                  <span
                    aria-hidden
                    className={`z-10 size-2.5 rounded-full border bg-cream ${
                      isCurrent ? "border-ember bg-ember" : "border-charcoal/40"
                    }`}
                  />
                  <span
                    className={`text-xs tracking-[0.25em] uppercase ${
                      isCurrent ? "text-ember" : "text-charcoal/70"
                    }`}
                  >
                    {stage}
                    {isCurrent && (
                      <span className="ml-2 font-serif text-sm tracking-normal normal-case italic">
                        —— 现在
                      </span>
                    )}
                  </span>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
      <Reveal className="mt-12">
        <SectionLink href="/about">了解更多</SectionLink>
      </Reveal>
    </Section>
  );
}
