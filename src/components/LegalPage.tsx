import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function LegalPage({
  title,
  intro,
  children,
}: Readonly<{
  title: string;
  intro: string;
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white text-[#171717]">
      <header className="border-b border-[#EAEAE6]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-editorial text-xl font-bold text-[#171717] hover:text-[#405b35]">
            Manish Bisht
          </Link>
          <Link href="/" className="text-sm font-medium text-[#666666] underline underline-offset-4 hover:text-[#171717]">
            Back to home
          </Link>
        </div>
      </header>

      <main id="main-content" className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="section-label mb-4">Policies and information</p>
        <h1 className="text-4xl font-semibold tracking-tight text-[#171717] md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#525252]">{intro}</p>
        <p className="mt-5 text-sm text-[#666666]">Last updated: 12 October 2026</p>
        <div className="mt-12 space-y-10 text-base leading-7 text-[#525252] [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:leading-7 [&_h2]:text-[#171717] [&_a]:font-medium [&_a]:text-[#405b35] [&_a]:underline [&_a]:underline-offset-4 [&_li]:ml-6 [&_li]:list-disc [&_ul]:space-y-2">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
