import Image from "next/image"

interface VBucksProps {
    imageUrl: string
    quantity: number
    price: number
    bonus?: number | undefined
    featured?: boolean | undefined
}

export default function CoinCard({ imageUrl, quantity, price, bonus, featured }: VBucksProps) {
    return (
        <span className={`flex flex-col relative h-[460px] bg-gradient-to-t from-[#46CAE9] to-[#0866B0] font-logo uppercase text-4xl ${featured ? 'border-4': 'border-0'} border-gray-100 group`}>
            {bonus && (
                <div className="absolute flex top-[-2px] right-0 bg-bonus-bg bg-cover text-3xl w-[6em] h-14 text-center text-gray-800 items-center justify-center">
                    {bonus}% de bônus
                </div>
            )}
            <div className="flex flex-col h-full items-center justify-end p-10 gap-5">
                <Image
                    src={imageUrl}
                    alt="coins"
                    width={257}
                    height={159}
                />
                <div className="flex flex-col">
                    <h4 className="text-grey-800 text-5xl">{quantity.toLocaleString()}</h4>
                    <h5>V-bucks</h5>
                </div>
            </div>
            <div className={`relative p-4 ${featured ? 'bg-gray-100' : 'bg-yellow-400'} text-gray-800 text-center transition-all`}>
                <Image
                    src="/Rectangle 1133.svg"
                    alt="vector"
                    className="absolute right-0 top-0"
                    width={159}
                    height={8}
                />
                {price.toLocaleString(undefined, { minimumFractionDigits: 2 })}BRL
            </div>
        </span>
    );
}