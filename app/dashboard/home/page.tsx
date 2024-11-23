import HomeHeroSection from "@/app/components/HomeHeroSection/HomeHeroSection";
import HomeHeroSectionBottomStats from "@/app/components/HomeHeroSectionBottomStats/HomeHeroSectionBottomStats";
import HowItWorkSection from "@/app/components/HowItWorkSection/HowItWorkSection";
import PopularPropertiesSection from "@/app/components/PopularPropertiesSection/PopularPropertiesSection";
import WhyInvestWithUsSection from "@/app/components/WhyInvestWithUsSection/WhyInvestWithUsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ooners Home",
};

export default function HomePage() {
    return (
        <>
            <HomeHeroSection />
            <HomeHeroSectionBottomStats />
            <PopularPropertiesSection />
            <HowItWorkSection />
            <WhyInvestWithUsSection />
        </>
    );
};
