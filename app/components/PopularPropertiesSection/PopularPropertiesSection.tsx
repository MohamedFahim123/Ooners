import Link from "next/link";
import MainSectionHead from "../MainSectionHead/MainSectionHead";
import PopularPropertiesCard from "../PopularPropertiesCard/PopularPropertiesCard";

export default function PopularPropertiesSection() {
    return (
        <section>
            <div className="container py-16 lg:max-w-6xl px-6 m-auto">
                <MainSectionHead heading="Popular Properties" />
                <PopularPropertiesCard />
                <div className="mt-10 text-center">
                    <Link
                        href='/dashboard/properties'
                        className={`
                        bg-transparent border border-black text-black font-semibold rounded-lg 
                        bg-white shadow-md
                        hover:bg-black hover:text-white hover:border-black transition-all duration-300
                        px-6 py-2
                    `}
                    >
                        View all properties
                    </Link>
                </div>
            </div>
        </section>
    );
};