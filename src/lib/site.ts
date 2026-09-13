import type { NavItem } from "@/types";

export const siteConfig = {
  name: "ROXY",
  tagline: "我用 AI、代码与想象力构建万物。",
  journey: "建筑 → 运营 → AI → 编程 → 独立开发",
  description:
    "Roxy 的个人网站 —— 一位用 AI、代码与想象力进行创造的独立开发者。",
};

/** Hero headline, one entry per line. */
export const heroLines = [
  "我用",
  "AI、代码",
  "与想象力",
  "构建万物。",
];

/** Roxy's journey stages, in order — used by route visuals. */
export const journeyStages = [
  "建筑",
  "运营",
  "AI",
  "编程",
  "创造",
];

export const navItems: NavItem[] = [
  { label: "作品", href: "/projects" },
  { label: "关于", href: "/about" },
  { label: "联系", href: "/contact" },
];
