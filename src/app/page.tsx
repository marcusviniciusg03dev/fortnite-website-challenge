'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Card from './components/card';
import Divider from './components/divider';

export default function Home() {
  const [heroThumbnailPos, setHeroThumbnailPos] = useState(1);

  const heroThumbnailCombination = [
    {
      hero: "image 23.png",
      thumbnail: "Rectangle 14.png",
    },
    {
      hero: "image 4.png",
      thumbnail: "Rectangle 15.png",
    },
    {
      hero: "image 5.png",
      thumbnail: "Rectangle 16.png",
    },
    {
      hero: "image 24.png",
      thumbnail: "Rectangle 17.png",
    },
    {
      hero: "image 2.png",
      thumbnail: "Rectangle 13.png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroThumbnailPos(prev => prev === heroThumbnailCombination.length ? 1 : prev + 1)
    }, 3000);
    return () => clearInterval(timer)
  }, []);

  return (
    <main className="flex flex-col items-center min-h-screen">
      <section className={`relative overflow-hidden p-14 w-full h-[100vh] flex gap-8 bg-no-repeat bg-cover`} style={{ backgroundImage: `url("/images/${heroThumbnailCombination[heroThumbnailPos - 1].hero}")` }}>
        <div className="z-20 bg-transparent flex flex-col items-start justify-end gap-5">
          <Image alt="platforms" src="/platforms.svg" width={163} height={30} />
          <p className="text-xl">Boas vindas ao mundo de</p>
          <Image
              alt="Fortnite"
              src="/logo.svg"
              width={526}
              height={145}
            />
          <p className="w-[80%] text-lg">Chame seus amigos e mergulhe em um jogo massivo de combate que combina saque, criação, tiroteio e caos. O resultado é uma experiência online competitiva e totalmente imprevisível que só fica maior e mais radical a cada temporada.</p>
          <button className="font-logo text-4xl px-10 py-1 bg-[#F5E401] bg-button-vector bg-contain bg-no-repeat ]">
            <span className="text-gradient bg-gradient-to-b from-[#21294C] to-[#36426C]">Jogue agora</span>
          </button>
        </div>
        <span className="z-20 flex flex-col items-end justify-end gap-5">
          <b className="font-logo text-2xl">Prepare-se para a batalha</b>
          <div className="flex relative w-[306px] h-[160px] bg-white justify-center items-center">
            <button className="absolute z-50 p-5 rounded-full bg-gradient-to-b from-[#2F2D2E] to-[#2F2D2E21]">
              <Image src="/icons/Play.svg" alt="play" width={16} height={16} />
            </button>
            <div className="absolute h-full w-full z-40 bg-gradient-to-t from-[#090D1556] to-[#090D1500]" />
            <Image alt="video thumbnail" src={`/images/${heroThumbnailCombination[heroThumbnailPos - 1].thumbnail}`} fill />
          </div>
        </span>
        <div
          className="z-10 absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-[#090D15] to-[#090D1528]"
        />
        <div className="absolute z-30 bottom-0 left-0 right-0 w-full h-0.5 bg-transparent">
          <div className="h-full bg-cyan-400" style={{ background: 'rgb(70 202 233)', width: `${heroThumbnailPos / heroThumbnailCombination.length * 100}%` }} />
        </div>
      </section>
      <Divider />
      <section className="bg-white flex flex-col w-full px-20">
        <div className="relative flex items-center justify-start -tracking-[-1em]">
          <span className="text-border-gradient bg-gradient-to-r from-[#0866B0] to-[#46CAE9] text-[300px] font-logo">TORNEIOS</span>
          <h2 className="z-10 absolute text-gradient bg-gradient-to-r from-[#0866B0] to-[#46CAE9] text-[96px] font-logo -tracking-[-.05em]">MELHORES TORNEIOS</h2>
        </div>
        <div className="grid grid-cols-3 gap-5 h-full">
          <Card
            imagePath="/images/Blob-3.png"
            title="campeonato da vitória"
            occurrenceLabel="domingos"
          />
          <Card
            imagePath="/images/Blob.png"
            title="construção zero"
            occurrenceLabel="segundas-feiras"
          />
          <Card
            imagePath="/images/Blob-1.png"
            title="campeonato por grana"
            occurrenceLabel="várias datas"
          />
        </div>
      </section>
      <Divider />
    </main>
  )
}
