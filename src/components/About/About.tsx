import React from 'react'
import Link from "next/link";

export default function About() {
    return (
        <div className="h-screen custom-padding flex justify-center items-center">
            <div className="">
                <div>
                    <div className="w-1/2">
                        <h1 className="text-6xl">We Are <br/> <span className="text-9xl font-bold text-red">IABC</span> <br/>Asia Pacific Region</h1>

                    </div>
                    <div className="w-1/2">

                    </div>

                </div>
                <div className="flex flex-row">

                    <div className="w-1/2">

                    </div>
                    <div className="w-1/2 flex flex-col gap-10">
                        <p className="text-3xl">The International Association of Business Communicators (IABC) enables a global network of communicators working in diverse industries and disciplines to identify, share, and apply the world’s best communication practices. IABC is recognized as the professional association of choice for communicators who aspire to excel in their chosen fields.</p>
                        <div>
                            <Link href="/about" className="inline-block">
                        <div className="flex gap-5 items-center">
                                <p className="uppercase font-semibold">About us </p>
                                <i className="ri-arrow-right-up-long-line font-light bg-red h-10 w-10 rounded-full flex items-center justify-center text-white"></i>

                        </div>

                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
