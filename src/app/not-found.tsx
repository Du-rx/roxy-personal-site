import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-soft uppercase">
        <span aria-hidden className="size-2 rounded-full bg-ember" />
        404
      </p>
      <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
        这里没有东西<span className="text-ember">。</span>
      </h1>
      <p className="mt-6 max-w-xl text-charcoal/80">
        你要找的页面不存在，或者已经被移动到了别的地方。
      </p>
      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-2 rounded-full border border-charcoal/30 px-6 py-3 text-sm font-medium transition-colors duration-300 hover:border-charcoal hover:bg-charcoal hover:text-cream"
      >
        返回首页
      </Link>
    </section>
  );
}
