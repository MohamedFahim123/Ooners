import Link from "next/link";

interface MainWhiteButtonProps {
    text: string;
    link: string;
    py?: string;
    px?: string;
};

export default function MainWhiteButton({ text, link, py, px }: MainWhiteButtonProps) {
    return (
        <Link
            href={link ? link : '/'}
            className={`
                bg-transparent border   font-semibold rounded-lg 
                transition duration-300 shadow-md 
                focus:outline-none focus:ring-2 focus:ring-offset-2  
                
                ${px ? px : 'px-6'} ${py ? py : 'py-2'} 
                `}
        >
            {text ? text : ''}
        </Link>
    )
}
