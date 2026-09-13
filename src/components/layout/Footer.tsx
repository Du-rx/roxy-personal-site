import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-charcoal/15">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-6 text-sm text-soft sm:px-6">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
          <span aria-hidden className="text-ember">
            .
          </span>
        </p>
        <p>用 AI、代码与想象力构建。</p>
      </div>
    </footer>
  );
}
