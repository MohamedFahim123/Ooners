import Image from "next/image";
import cardImage from '../../imgs/home/popularProperties/4a8650af84740fda285d887d978ec878.jpg';

export default function PopularPropertiesCard() {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full mt-16">
            <Image
                src={cardImage}
                alt="Property card Image"
                width={1450}
                height={600}
                className="w-full h-[500px] object-fill"
            />
            <div className="p-6 space-y-4">
                <div className="flex space-x-2">
                    <span className="bg-[#20027D] text-white text-sm px-3 py-1 rounded-full">
                        Residential
                    </span>
                    <span className="bg-[#20027D] text-white text-sm px-3 py-1 rounded-full">
                        Co-ownership
                    </span>
                </div>
                <h2 className="text-lg text-[#000000] font-semibold">
                    Marina 2BR Chalet in SouthMED
                </h2>
                <p className="text-[#0000008F]">
                    Talaat Moustafa Group (TMG) Holding | North Coast – Al Dabaa
                </p>
                <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                    <div className="grid grid-cols-1 gap-y-5">
                        <div className="flex justify-between text-sm text-[#000000] font-semibold">
                            <span>Down Payment</span>
                            <span className="font-semibold text-black">46,235 EGP</span>
                        </div>
                        <div className="flex justify-between text-sm text-[#000000] font-semibold">
                            <span>Installment</span>
                            <span className="font-semibold text-black">3,624 EGP</span>
                        </div>
                        <div className="flex justify-between text-sm text-[#000000] font-semibold">
                            <span>Annual Installment</span>
                            <span className="font-semibold text-black">30,831 EGP</span>
                        </div>
                        <div className="flex justify-between text-sm text-[#000000] font-semibold">
                            <span>Expected Exit</span>
                            <span className="font-semibold text-black">July 2029</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};