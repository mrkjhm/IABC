import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Magnetic from '@/Common/Magnetic';

const menuLinks = [
    { path: "/about", label: "About Us" },
    { path: "/chapter", label: "Chapter" },
    { path: "/certifications", label: "Certifications" },
    { path: "/contact", label: "Contact Us" },
    { path: "/insights", label: "Insights" },
];

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50">
            <div className="flex justify-between items-center custom-padding py-4">
                <Link href="/">
                    <Magnetic>
                        <Image
                            src="/IABC-icon.png"
                            alt="logo"
                            width={70}
                            height={70}
                            className="cursor-pointer"
                        />
                    </Magnetic>
                </Link>

                <div className="gap-10 items-center text-white md:flex hidden">
                    {menuLinks.map((link, index) => (
                        <Magnetic key={index}>
                            <Link href={link.path} passHref>
                                <div className="flex items-center justify-center flex-col group">
                                    <p className="text-lg cursor-pointer hover:text-red hover:font-bold transition-colors">
                                        {link.label}
                                    </p>
                                    {/* Red dot appears only on hover */}
                                    <div className="h-2 w-2 bg-red rounded-full mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </Link>
                        </Magnetic>
                    ))}
                </div>


                <div className="text-white md:hidden flex bg-red h-10 w-10 items-center justify-center rounded-full">
                    <i className="ri-menu-4-line"></i>
                </div>
            </div>
        </nav>
    );
}
