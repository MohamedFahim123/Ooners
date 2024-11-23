import MainSectionHead from "@/app/components/MainSectionHead/MainSectionHead";
import PopularPropertiesCard from "@/app/components/PopularPropertiesCard/PopularPropertiesCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ooners Propterties",
};

export default function PropertiesPage() {
    return (
        <section className="py-16 flex content-center">
            <div className={`container lg:max-w-6xl px-6 m-auto`}>
                <MainSectionHead heading="Available Properties" />
                <PopularPropertiesCard />
                <PopularPropertiesCard />
                <PopularPropertiesCard />
            </div>
        </section>
    );
};