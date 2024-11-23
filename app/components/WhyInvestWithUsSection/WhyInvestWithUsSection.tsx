import styles from './whyInvestWithUsSection.module.css';
import MainSectionHead from "../MainSectionHead/MainSectionHead";
import { VscKey } from "react-icons/vsc";
import { IoCardOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { FiSmartphone } from "react-icons/fi";

export default function WhyInvestWithUsSection() {
    const cards = [
        {
            icon: <VscKey color="#1D74DB" />, 
            title: 'Access to Exclusive Investment Opportunities',
        },
        {
            icon: <IoCardOutline color='#1D74DB' />,
            title: 'Affordable Payment Plans',
        },
        {
            icon: <FiSmartphone color='#1D74DB' />,
            title: 'Seamless Digital Experience',
        },
        {
            icon: <FaUsers color='#1D74DB' />,
            title: 'Hassle Free Exit Through Our Team of 600+ Sales Gurus',
        },
    ];

    return (
        <section>
            <div className="container lg:max-w-6xl px-6 m-auto py-16">
                <MainSectionHead
                    heading="Why invest with Ooners"
                    body="Investment decisions made easy, one share at a time"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`bg-white p-6 flex flex-col items-center justify-center border hover:shadow-md transition-all duration-300 ${styles.invest__card}`}
                        >
                            <div className="text-4xl mb-4">{card.icon}</div>
                            <h3 className="text-md font-medium text-gray-800 text-center">
                                {card.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
