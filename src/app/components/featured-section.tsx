import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode
  bgTitle: string
  featuredTitle: string
}

export default function FeaturedSection({ children, bgTitle, featuredTitle }: SectionProps) {
    return (
      <section className="bg-white flex flex-col w-full px-20">
        <div className="relative flex flex-col xl:flex-row items-center justify-start -tracking-[-1em] uppercase py-20 xl:py-0">
          <span className="text-border-gradient bg-gradient-to-r from-[#0866B0] to-[#46CAE9] text-[100px] xl:text-[300px] font-logo stroke-black">{bgTitle}</span>
          <h2 className="z-10 xl:absolute text-gradient bg-gradient-to-r from-[#0866B0] to-[#46CAE9] text-[40px] xl:text-[96px] font-logo -tracking-[-.05em]">{featuredTitle}</h2>
        </div>
        {children}
      </section>
    );
}