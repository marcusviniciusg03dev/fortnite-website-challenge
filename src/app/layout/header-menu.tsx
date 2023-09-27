export default function Menu({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;

  return (
    <aside className="absolute top-[95px] bottom-0 left-0 right-0 md:hidden z-50 shadow-2xl bg-black">
      <nav className="flex flex-col items-center justify-center text-2xl text-grey-400 gap-10 p-6">
        <a>Torneios</a>
        <a>Passe de batalha</a>
        <a>V-bucks</a>
        <a>Itens</a>
        <button className="font-logo text-4xl w-[80%] px-10 py-1 bg-button-hover-bg bg-no-repeat bg-center bg-95% bg-yellow-200 hover:bg-yellow-400 transition-all">
          <span className="text-gradient bg-gradient-to-b from-[#21294C] to-[#36426C]">Conheça</span>
        </button>
      </nav>
    </aside>
  )
}