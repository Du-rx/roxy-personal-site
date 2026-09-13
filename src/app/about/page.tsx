import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionLink } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "关于",
};

/** Annotated journey stages — same route as the homepage timeline. */
const journey = [
  { stage: "建筑", note: "学会了观察结构与空间" },
  { stage: "运营", note: "学会了把复杂的事真正跑通" },
  { stage: "AI", note: "发现想法可以直接变成产品" },
  { stage: "编程", note: "把工具握在自己手里" },
  { stage: "独立开发", note: "现在，正在把喜欢的东西一个个做出来" },
];

const capabilities = [
  {
    name: "产品思维",
    note: "建筑与运营的训练带来的习惯：先想清楚为谁、解决什么问题",
  },
  {
    name: "AI 应用开发",
    note: "接入 LLM API、设计提示词与输出约束，让模型的回答变成产品里能用的数据",
  },
  {
    name: "设计与开发",
    note: "Next.js / React / TypeScript，一个人从原型做到上线",
  },
];

export default function AboutPage() {
  return (
    <Section id="about">
      <SectionLabel label="关于我" />
      <Reveal>
        <p className="mt-10 max-w-2xl text-xl leading-relaxed font-medium tracking-tight text-charcoal md:text-2xl">
          你好，我是 Roxy —— 一位独立开发者。从建筑到运营，再到 AI
          与编程，我一路都在做同一件事：把想法变成真实存在的东西。
        </p>
      </Reveal>

      <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-20">
        <Reveal>
          <h3 className="text-xs font-medium tracking-[0.3em] text-soft uppercase">
            经历
          </h3>
          <ol className="relative mt-6 space-y-7">
            <span
              aria-hidden
              className="absolute top-1.5 bottom-1.5 left-[4.5px] w-px bg-charcoal/20"
            />
            {journey.map((item, index) => {
              const isCurrent = index === journey.length - 1;
              return (
                <li key={item.stage} className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className={`z-10 mt-1 size-2.5 shrink-0 rounded-full border bg-cream ${
                      isCurrent ? "border-ember bg-ember" : "border-charcoal/40"
                    }`}
                  />
                  <span>
                    <span
                      className={`block text-sm font-medium ${
                        isCurrent ? "text-ember" : "text-charcoal"
                      }`}
                    >
                      {item.stage}
                    </span>
                    <span className="mt-0.5 block text-sm text-soft">
                      {item.note}
                    </span>
                  </span>
                </li>
              );
            })}
          </ol>
        </Reveal>
        <Reveal delay={0.15}>
          <h3 className="text-xs font-medium tracking-[0.3em] text-soft uppercase">
            能力
          </h3>
          <ul className="mt-6 space-y-7">
            {capabilities.map((capability) => (
              <li key={capability.name}>
                <span className="block text-sm font-medium text-charcoal">
                  {capability.name}
                </span>
                <span className="mt-0.5 block text-sm leading-relaxed text-soft">
                  {capability.note}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <h3 className="text-xs font-medium tracking-[0.3em] text-soft uppercase">
          现在
        </h3>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-charcoal/85">
          正在做 AI 旅行规划师、两个浏览器小游戏，以及一些 AI
          故事与视频的小实验 —— 总有新的东西在路上。
        </p>
        <div className="mt-8">
          <SectionLink href="/projects">查看我的项目</SectionLink>
        </div>
      </Reveal>
    </Section>
  );
}
