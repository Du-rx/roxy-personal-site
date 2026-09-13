"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { heroLines } from "@/lib/site";
import { JourneyRoute } from "./JourneyRoute";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const line: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section className="pt-14 pb-4 md:pt-24">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-soft uppercase"
      >
        <span aria-hidden className="size-2 rounded-full bg-ember" />
        你好，我是 Roxy
      </motion.p>

      <motion.h1
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-8 text-[clamp(3rem,10vw,7.5rem)] leading-[0.98] font-bold tracking-tight"
      >
        {heroLines.map((text) => (
          <motion.span key={text} variants={line} className="block">
            {text === "与想象力" ? (
              <>
                <span className="text-ember">与</span>想象力
              </>
            ) : (
              text
            )}
          </motion.span>
        ))}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.6 }}
      >
        <p className="mt-8 max-w-xl text-base leading-relaxed text-soft md:text-lg">
          从建筑与运营走来，现在是一名独立开发者 ——
          正在用 AI 和代码，把旅行、游戏和创意做成真正能用的产品。
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-charcoal/30 px-6 py-3 text-sm font-medium transition-colors duration-300 hover:border-charcoal hover:bg-charcoal hover:text-cream"
          >
            探索我的作品
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/about"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-soft transition-colors duration-300 hover:text-ember"
          >
            <span className="border-b border-charcoal/30 pb-0.5 transition-colors duration-300 group-hover:border-ember">
              了解我
            </span>
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </motion.div>

      <JourneyRoute className="mt-14 md:mt-20" />
    </section>
  );
}
