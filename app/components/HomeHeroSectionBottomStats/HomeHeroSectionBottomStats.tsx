interface STATE {
    value: string;
    label: string;
};

export default function HomeHeroSectionBottomStats() {
    const stats: STATE[] = [
        { value: "54", label: "Units" },
        { value: "1", label: "Exited Units" },
        { value: "132%", label: "Gross ROI" },
        { value: "81%", label: "Net ROI" },
        { value: "842%", label: "Net IRR" },
    ];

    return (
        <section>
            <div className="container lg:max-w-6xl m-auto lg:-translate-y-20 md:-translate-y-40 xs:-translate-y-40 px-6">
                <div className="relative bg-white shadow-md rounded-lg mx-auto px-8 py-12 w-full lg:max-w-6xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
                        {
                            stats?.map((stat, index) => (
                                <div key={index} className={`flex flex-col items-center content-center
                            ${index + 1 !== stats.length && `${index % 2 === 0 ? 'lg:border-e-2 md:border-e-2 sm:border-e-0' : 'lg:border-e-2 md:border-e-0 sm:border-e-0'}`}
                            `}>
                                    <h3 className="text-4xl font-bold text-black">{stat.value}</h3>
                                    <p className="mt-2 text-sm font-medium text-gray-500">{stat.label}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

