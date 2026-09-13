import type { Experiment, Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ai-travel-planner",
    title: "AI 旅行规划师",
    tagline: "让旅行灵感直接落地成行程。",
    description:
      "一次说走就走的旅行，往往死在几十个标签页之间 —— 查攻略、拼地图、看天气。我想让这件事一步到位。",
    details:
      "从需求梳理、交互设计到开发全部独立完成：接入 AI 生成逐日行程，串联地图路线与站点，结合天气动态调整，把「想去哪儿」变成一份路上真能照着走的计划。",
    highlights: [
      "AI 生成逐日可执行行程",
      "地图串联路线与站点",
      "结合天气动态调整规划",
    ],
    challenges: [
      {
        problem: "模型直接吐出的是自由文本，没法变成页面上能渲染、能编辑的行程。",
        solution:
          "给输出加结构化约束，并做校验与重试 —— 让 AI 的回答变成产品里真正可用的数据。",
      },
      {
        problem: "生成的一天行程常常景点太多，路上根本走不完。",
        solution:
          "把路程时间和景点开放时间作为约束喂给模型，让它在生成阶段就考虑「走得完」。",
      },
    ],
    progress: "核心的行程生成流程已跑通，正在完善地图串联与天气联动。",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "AI API",
      "地图",
      "天气 API",
    ],
    status: "开发中",
  },
  {
    slug: "personal-site",
    title: "个人作品集网站",
    tagline: "就是你正在看的这个网站。",
    description:
      "用 Next.js 从零搭建的个人作品集 —— 极简编辑风格、黑白配色，以及一条贯穿全站的「旅程路线」。",
    details:
      "信息架构、视觉设计与全部开发均独立完成：响应式布局、滚动动效、SVG 路线动画，中文文案也是自己一句句写的。",
    highlights: [
      "从设计到开发独立完成",
      "编辑式排版与路线视觉",
      "Framer Motion 滚动动效",
      "移动端专门优化",
    ],
    challenges: [
      {
        problem: "既要有设计感，又不想做成千篇一律的模板站。",
        solution:
          "定下极简编辑风格 + 一条贯穿全站的「旅程路线」视觉母题，从 Hero 的路线图一直延伸到关于页的时间轴。",
      },
    ],
    progress: "已上线运行，内容和体验持续打磨中。",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "持续迭代",
  },
  {
    slug: "road-trip-game",
    title: "公路旅行游戏",
    tagline: "把「在路上」的感觉装进浏览器。",
    description:
      "一款程序化生成的公路旅行探索游戏 —— 因为我喜欢公路旅行，却很少有时间真的出发。",
    details:
      "独立设计并实现程序化地图生成：随机路线、可复用地图区块、地点发现系统，让每次出发都是一条新的路。",
    highlights: [
      "程序化生成随机路线",
      "可复用地图区块设计",
      "地点探索与发现系统",
    ],
    challenges: [
      {
        problem: "地图内容全靠手工铺设，做不了多远就没内容了。",
        solution:
          "改成程序化生成：把地图拆成可复用的区块，按规则随机拼接，一条永远开不完的路就自己长出来了。",
      },
    ],
    progress: "地图生成与驾驶循环已可玩，正在补充地点与事件系统。",
    technologies: ["TypeScript", "Canvas", "程序化生成"],
    status: "开发中",
  },
  {
    slug: "2048-cats",
    title: "猫咪 2048",
    tagline: "一次「把喜欢的东西做成游戏」的练习。",
    description:
      "猫咪主题的 2048 —— 经典数字合成玩法之上，每次合成都会解锁一只新猫咪。",
    details:
      "从玩法拆解、数值设计到实现全部独立完成：不同稀有度的猫咪收集系统，配一套可爱而克制的视觉风格。",
    highlights: [
      "经典玩法 + 收集系统",
      "不同稀有度的猫咪角色",
      "可爱而克制的视觉设计",
    ],
    challenges: [
      {
        problem: "纯数字合成玩久了缺乏继续下去的动力。",
        solution:
          "加入稀有度收集系统 —— 每次合成都会解锁一只新猫咪，让「再来一局」有了具体理由。",
      },
    ],
    progress: "已完成，可直接游玩。",
    technologies: ["TypeScript", "React", "CSS"],
    status: "可玩",
  },
];

/** Ongoing small experiments — not full projects yet. */
export const experiments: Experiment[] = [
  {
    title: "AI 故事实验",
    tagline: "用 AI 生成互动故事，看看叙事能不能变成可玩的东西。",
    status: "实验中",
  },
  {
    title: "AI 短视频",
    tagline: "尝试用 AI 工具链做一支完整的短视频。",
    status: "实验中",
  },
];
