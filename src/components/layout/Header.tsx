"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { navItems, siteConfig } from "@/lib/site";

/**
 * Sticky site header. Transparent at the top of the page, then gains a
 * slightly translucent blurred background and a hairline border on scroll.
 */
export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10);
  });

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-charcoal/10 bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-[0.3em]"
          aria-label="Roxy — 首页"
        >
          {siteConfig.name}
          <span aria-hidden className="text-ember">
            .
          </span>
        </Link>
        <nav aria-label="主导航">
          <ul className="flex flex-wrap gap-x-7 gap-y-1 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-charcoal/65 transition-colors duration-200 hover:text-ember"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
