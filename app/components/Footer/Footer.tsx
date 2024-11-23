import Link from "next/link";

export default function Footer() {
    return (
        <div className='bg-blue-900 py-20'>
            <div className="container lg:max-w-6xl px-6 mx-auto">
                <div className="grid grid-cols-6 text-white">
                    <h5>
                        <Link href={'/'}>
                            Terms of use
                        </Link>
                    </h5>
                    <h5>
                        <Link href={'/'}>
                            Privacy Policy
                        </Link>
                    </h5>
                    <h5>
                        <Link href={'/'}>
                            Primary Risks
                        </Link>
                    </h5>
                    <h5>
                        <Link href={'/'}>
                            Help
                        </Link>
                    </h5>
                    <h5>
                        <Link href={'/'}>
                            Careers
                        </Link>
                    </h5>
                </div>
            </div>
        </div>
    );
};
