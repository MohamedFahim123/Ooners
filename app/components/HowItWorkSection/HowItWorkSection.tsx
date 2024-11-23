import MainSectionHead from "../MainSectionHead/MainSectionHead";
import styles from './howItWorkSection.module.css';
import { GoPlay } from "react-icons/go";

export default function HowItWorkSection() {
    return (
        <section className="bg-white">
            <div className="container pb-10 lg:max-w-6xl px-6 m-auto py-16">
                <MainSectionHead heading="How it works" body="Invest seamlessly in exclusive off plan units and start building your wealth" />
                <div className={`flex justify-center text-white items-center ${styles.howItWorks__video}`}>
                    <GoPlay size={100} />
                </div>
            </div>
        </section>
    );
};