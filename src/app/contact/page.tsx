import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "联系我",
};

export default function ContactPage() {
  return (
    <Section id="contact" title="联系我">
      <div className="max-w-2xl space-y-4 text-charcoal/80">
        <p>
          想打个招呼、分享一个想法，或者一起做点什么？欢迎随时联系我，期待你的来信。
        </p>
        <p>
          邮箱：<span className="font-medium">hello@example.com</span>
          （占位邮箱 —— 真实联系方式稍后补充）
        </p>
      </div>
    </Section>
  );
}
