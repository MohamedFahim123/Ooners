import MainWhiteButton from '../MainWhiteButton/MainWhiteButton';
import styles from './homeHeroSection.module.css';

export default function HomeHeroSection() {
    return (
        <div
            className={`w-full h-screen relative ${styles.heroSection__container} text-white flex items-center`}
        >
            <div className="container lg:max-w-6xl mx-auto flex flex-col justify-around gap-16 py-4 px-6">
                <h1 className={`${styles.heroSection__heading}`}>
                    Find an Investment that suits you
                </h1>
                <MainWhiteButton text="Get Started" link="/dashboard/home" px="px-10 w-fit" py="py-4 font-light" />
            </div>
        </div>

    );
}
