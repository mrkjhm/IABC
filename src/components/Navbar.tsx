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

                <div className="flex gap-6 items-center text-white">
                    {menuLinks.map((link, index) => (
                        <Link key={index} href={link.path} passHref>
                            <p className="cursor-pointer hover:text-gray-300 transition-colors">
                                {link.label}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
