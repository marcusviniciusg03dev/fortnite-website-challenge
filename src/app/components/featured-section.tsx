import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode
  bgTitle: string
  featuredTitle: string
}

export default function FeaturedSection({ children, bgTitle, featuredTitle }: SectionProps) {
    return (
      <section className="bg-white flex flex-col w-full px-20">
        <div className="relative flex items-center justify-start -tracking-[-1em] uppercase">
          <span className="text-border-gradient bg-gradient-to-r from-[#0866B0] to-[#46CAE9] text-[300px] font-logo">{bgTitle}</span>
          <h2 className="z-10 absolute text-gradient bg-gradient-to-r from-[#0866B0] to-[#46CAE9] text-[96px] font-logo -tracking-[-.05em]">{featuredTitle}</h2>
        </div>
        {children}
      </section>
    );
}