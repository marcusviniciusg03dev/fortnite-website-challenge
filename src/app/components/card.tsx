import Image from "next/image";

interface CardProps {
    title: string
    imagePath: string
    occurrenceLabel: string
}

export default function Card({ title, imagePath, occurrenceLabel }: CardProps) {
    return (
        <span className="flex relative items-end justify-center h-[586px]">
            <span className="z-20 absolute w-full h-[50%] bg-gradient-to-t from-[#090D15] to-[#090D1500]" />
            <Image src={imagePath} alt="" fill className="z-10 absolute bottom-0 mx-auto" />
            <div className="flex justify-center relative bg-gradient-to-t from-[#0866B0] to-[#46CAE9] h-[90%] w-full">
                <div className="absolute z-40 self-center m-auto text-center -tracking-[-.2em] w-2/3 grid gap-5">
                    <h3 className="text-5xl font-logo uppercase">{title}</h3>
                    <h4 className="text-4xl font-logo uppercase">{occurrenceLabel}</h4>
                </div>
            </div>
        </span>
    );
}