import Image from "next/image";

interface SkinCardProps {
    imageUrl: string
    title: string
}

export default function SkinCard({ imageUrl, title }: SkinCardProps) {
    return (
        <span className="relative p-5">
            <div className="group flex bg-gradient-to-t from-[#0866B0] to-[#46CAE9] h-[500px]">
                <img
                    src={imageUrl}
                    alt="skin"
                    className="absolute block z-10 bottom-5 left-0 right-0 h-[105%] w-auto m-auto"
                />
                <div
                    className="invisible group-hover:visible duration-200 transition-all flex flex-col justify-center p-10 gap-2 h-1/2 bg-gradient-to-t from-[#090D15] to-[#090D1500] w-full bottom-0 z-20 mt-auto"
                >
                    <h4 className="text-4xl font-logo uppercase opacity-0 group-hover:opacity-100 transition-all duration-800">{title}</h4>
                    <p className="text-xl opacity-0 group-hover:opacity-100 transition-all duration-800">Capítulo 2, Temporada 5</p>
                </div>
            </div>
        </span>
    );
}