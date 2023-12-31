'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Divider from './components/divider';
import FeaturedSection from './components/featured-section';
import CoinCard from './components/coin-card';
import SkinCard from './components/skin-card';

import { FaFacebookSquare, FaTwitter, FaYoutube } from 'react-icons/fa';
import TournamentCard from './components/tournament-card';

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
    <main className="flex flex-col items-center min-h-screen overflow-x-hidden">
      <section className={`relative overflow-hidden p-14 w-full h-[100vh] flex flex-col md:flex-row justify-end items-center md:items-end md:justify-normal gap-8`}>
        <img
          src={`/images/${heroThumbnailCombination[heroThumbnailPos - 1].hero}`}
          alt="Hero"
          className="absolute z-0 w-full min-w-[1440px] top-0 left-0 h-auto min-h-full"
        />
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
          <button className="font-logo text-4xl px-10 py-1 bg-button-hover-bg bg-no-repeat bg-center bg-95% bg-yellow-200 hover:bg-yellow-400 hover:scale-110 transition-all">
            <span className="text-gradient bg-gradient-to-b from-[#21294C] to-[#36426C]">Jogue agora</span>
          </button>
        </div>
        <span className="z-20 flex-col items-end justify-end gap-5 hidden md:flex">
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
          <div className="h-full bg-cyan-400 transition-all duration-500" style={{ background: 'rgb(70 202 233)', width: `${heroThumbnailPos / heroThumbnailCombination.length * 100}%` }} />
        </div>
      </section>
      <Divider />
      <FeaturedSection featuredTitle="Melhores torneios" bgTitle="Torneios">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 h-full">
          <TournamentCard
            imagePath="/images/Blob-3.png"
            title="campeonato da vitória"
            occurrenceLabel="domingos"
          />
          <TournamentCard
            imagePath="/images/Blob.png"
            title="construção zero"
            occurrenceLabel="segundas-feiras"
          />
          <TournamentCard
            imagePath="/images/Blob-1.png"
            title="campeonato por grana"
            occurrenceLabel="várias datas"
          />
        </div>
      </FeaturedSection>
      <Divider />
      <section className="relative bg-gradient-radial from-[#46CAE9] to-[#0866B0] bg-cover h-[578px] w-full flex xl:grid grid-cols-2">
        <div
          className="absolute rotate-45 bg-white w-[97px] h-[157px] left-[-31px] top-[-60px]"
        />
        <div
          className="absolute rotate-45 bg-white w-[97px] h-[157px] right-[-31px] bottom-[-60px]"
        />
        <span className="flex flex-col xl:flex-row justify-center items-center p-10">
          <Image src="/passe.svg" alt="Battle pass emblem" width={194} height={136} />
          <span className="flex flex-col items-start gap-5">
            <h3 className="uppercase text-4xl font-logo">Passe de batalha</h3>
            <p className="text-xl">Suba de nível e resgate recompensas! Procurando o Pacotão de Batalha? Adicione 25 níveis ao seu Passe de Batalha a qualquer momento!</p>
            <button className="font-logo text-4xl px-14 py-2 bg-button-hover-bg bg-no-repeat bg-center bg-95% bg-yellow-200 hover:bg-yellow-400 hover:scale-110 transition-all">
              <span className="text-gradient bg-gradient-to-b from-[#21294C] to-[#36426C]">Comprar passe</span>
            </button>
          </span>
        </span>
        <span className="hidden xl:flex relative items-end justify-end h-full">
          <div className="bottom-0 flex items-end justify-center justify-self-end">
            <Image src="/images/Blob-4.png" alt="blob" width={336} height={417} className=" mr-[400px]" />
            <Image src="/images/Blob-5.png" alt="blob" width={610} height={693} className="absolute" />
          </div>
        </span>
      </section>
      <Divider />
      <FeaturedSection bgTitle="Créditos" featuredTitle="V-bucks">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 h-full">
          <CoinCard imageUrl="/images/image 9.png" price={24.90} quantity={1000} />
          <CoinCard imageUrl="/images/image 10.png" price={62.50} quantity={2800} />
          <CoinCard imageUrl="/images/image 11.png" price={97.50} quantity={5000} />
          <CoinCard imageUrl="/images/image 12.png" price={246} quantity={13500} bonus={37} />
        </div>
      </FeaturedSection>
      <Divider />
      <FeaturedSection bgTitle="Itens" featuredTitle="Adquira skins">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 h-full">
          <SkinCard title="Duende verde" imageUrl="/images/Blob-2.png" />
          <SkinCard title="Kratos" imageUrl="/images/image 19.png" />
          <SkinCard title="Desbravador praiano" imageUrl="/images/Blob-6.png" />
          <SkinCard title="Homem-aranha" imageUrl="/images/image 13.png" />
        </div>
      </FeaturedSection>
      <Divider />
      <section className="flex w-full xl:h-[560px] flex-col xl:flex-row">
        <span className="flex flex-col items-start justify-center bg-gradient-radial from-[#46CAE9] to-[#0866B0] h-full w-full p-16 gap-5">
          <h2 className="text-6xl font-logo uppercase">Com amigos ou sozinho</h2>
          <p className="text-2xl">Em qualquer modalidade a aventura é garantida, você pode jogar para se divertir ou para ganhar recompensas em torneios.</p>
          <button className="font-logo text-4xl px-10 py-1 bg-button-hover-bg bg-no-repeat bg-center bg-95% bg-yellow-200 hover:bg-yellow-400 hover:scale-110 transition-all">
            <span className="text-gradient bg-gradient-to-b from-[#21294C] to-[#36426C]">Jogue agora</span>
          </button>
        </span>
        <img src="/images/image 20.png" alt="" className="w-full xl:max-w-[693px]" />
      </section>
      <footer className="flex flex-col bg-white w-full p-16 text-grey-700 gap-10">
        <div className="flex justify-between">
          <img src="/epic.svg" alt="Epic Games" />
          <div className="flex items-center gap-5">
            <span className="text-grey-700">Acompanhe nas redes</span>
            <FaFacebookSquare className="text-grey-400" size={24} />
            <FaTwitter className="text-grey-400" size={24} />
            <FaYoutube className="text-grey-400" size={24} />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <p className="md:w-[60%] text-grey-700">Partes dos materiais utilizados são marcas registradas e/ou obras protegidas por direitos autorais da Epic Games, Inc. Todos os direitos reservados pela <b>Epic</b>. Este material <b>não é oficial</b> e não é endossado pela Epic.</p>
          <hr className="my-5" />
          <div className="flex flex-col md:flex-row justify-center items-center gap-2">
            <span className="text-md">Desafio Fortnite por <a href="https://www.explow.studio" className="underline underline-offset-4 font-bold">Explow Studio</a></span>
            <span className="text-md">Desenvolvido por <a href="https://github.com/marcusviniciusg03dev" className="underline underline-offset-4 font-bold">Marcus Vinicius Gomes</a></span>
          </div>
        </div>
      </footer>
    </main>
  )
}
