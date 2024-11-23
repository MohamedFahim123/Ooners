'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import logo from '@/public/image1.svg';
import MainWhiteButton from '../MainWhiteButton/MainWhiteButton';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path: string) => pathname.includes(path);

    return (
        <nav className={`border-gray-200 w-full overflow-x-hidden ${pathname === '/dashboard/home' ? 'bg-transparent absolute top-0 z-50 left-0' : 'bg-[#f7f7f7]'}`}>
            <div className="container lg:max-w-6xl flex flex-wrap items-center justify-between mx-auto py-6 lg:py-10 md:py-8 sm:py-6 lg:px-6 md:px-6">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image
                        src={logo}
                        alt={'Ooners Logo'}
                        width={60}
                        height={60}
                    />
                </Link>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="md:hidden">
                        <MainWhiteButton text="Invest" link="/" />
                    </div>
                    <button
                        type="button"
                        className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm ${pathname === '/dashboard/home' ? 'text-gray-500' : 'text-black'} rounded-lg md:hidden transition-all focus:outline-none focus:ring-2 focus:ring-gray-200`}
                        aria-controls="navbar-default"
                        aria-expanded={isOpen}
                        onClick={toggleNavbar}
                    >
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div
                    className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
                    id="navbar-default"
                >
                    <ul className={`${isOpen ? 'bg-white text-black' : ''} font-medium flex flex-col p-4 md:bg-transparent md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0`}>
                        <li>
                            <Link
                                href="/dashboard/home"
                                className={`block py-2 px-3 rounded md:p-0 ${isActive('/dashboard/home')
                                    ? `text-black ${pathname === '/dashboard/home' ? 'md:text-white' : 'text-black'} font-semibold`
                                    : `text-black ${pathname === '/dashboard/home' ? 'md:text-white' : 'text-black'}  transition-all font-light`
                                    }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/dashboard/about"
                                className={`block py-2 px-3 rounded md:p-0 ${isActive('/dashboard/about')
                                    ? `text-black ${pathname === '/dashboard/home' ? 'md:text-white' : 'text-black'} font-semibold`
                                    : `text-black ${pathname === '/dashboard/home' ? 'md:text-white' : 'text-black'}  transition-all font-light`
                                    }`}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/dashboard/properties"
                                className={`block py-2 px-3 rounded md:p-0 ${isActive('/dashboard/properties')
                                    ? `text-black ${pathname === '/dashboard/home' ? 'md:text-white' : 'text-black'} font-semibold`
                                    : `text-black ${pathname === '/dashboard/home' ? 'md:text-white' : 'text-black'}  transition-all font-light`
                                    }`}
                            >
                                Properties
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/dashboard/wallet"
                                className={`block py-2 px-3 rounded md:p-0 ${isActive('/dashboard/wallet')
                                    ? `text-black ${pathname === '/dashboard/home' ? 'md:text-white' : 'text-black'} font-semibold`
                                    : `text-black ${pathname === '/dashboard/home' ? 'md:text-white' : 'text-black'}  transition-all font-light`
                                    }`}
                            >
                                Wallet
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:block">
                    <MainWhiteButton text="Invest" link="/dashboard/home" px={`${pathname === '/dashboard/home' ? 'px-6 text-white border-white hover:bg-white focus:ring-white hover:text-blue-900' : 'px-6 text-black border-black hover:bg-black focus:ring-black hover:text-white'} `} />
                </div>
            </div>
        </nav>
    );
}
