import styles from "./mainSectionHead.module.css";
interface MainSectionHeadProps {
    heading?: string;
    body?: string;
};

export default function MainSectionHead({ heading, body }: MainSectionHeadProps) {
    return (
        <>
            {
                heading && <h2 className={`text-center ${styles.heading}`}>{heading}</h2>
            }
            {
                body && <p className={`text-center ${styles.body}`}>{body}</p>
            }
        </>
    );
};