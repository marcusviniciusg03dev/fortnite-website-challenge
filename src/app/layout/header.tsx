'use client'
import Image from "next/image";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import Menu from "./header-menu";

export default function Header () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
        <header className="absolute top-0 left-0 right-0 h-[95px] z-[1000] flex justify-between px-10 xl:px-0 xl:grid xl:grid-cols-[1fr_70%_1fr] items-center text-center xl:justify-center border-b-2 border-[#FFFFFF10]">
          <span>
            <Image
              alt="Fortnite"
              src="/logo.svg"
              width={142}
              height={39}
              className="m-auto"
            />
          </span>
          <nav className="hidden md:grid grid-flow-col justify-center gap-7 text-lg">
            <a>Torneios</a>
            <a>Passe de batalha</a>
            <a>V-bucks</a>
            <a>Itens</a>
          </nav>
          <span className="flex">
            <button onClick={() => setIsMenuOpen(prev => !prev)} className="md:hidden p-3 rounded-md bg-grey-900">
              {!isMenuOpen ? (
                <BiMenu size={32} />
              ) : (
                <BiX size={32} />
              )}
            </button>
            <button className="hidden md:block font-logo text-4xl px-10 py-1 bg-button-hover-bg bg-no-repeat bg-center bg-95% bg-yellow-200 hover:bg-yellow-400 transition-all">
              <span className="text-gradient bg-gradient-to-b from-[#21294C] to-[#36426C]">Conheça</span>
            </button>
          </span>
        </header>
        <Menu isOpen={isMenuOpen} />
        </>
    )
}