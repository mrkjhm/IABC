import React from 'react'
import Image from 'next/image';
import { news } from "@/assets/assets";
import Magnetic from '@/Common/Magnetic'
import Breakpoint from "@/Common/Breakpoint";

export default function Footer() {
    return (
        <div className="custom-padding pt-10 bg-red text-white py-10">

            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 py-10">
                <div>
                    <h2 className="text-3xl font-semibold uppercase border-b pb-5">About</h2>
                    <p className="pt-10 md:pb-0 pb-10">IABC Asia-Pacific is a regional board with 12 chapters in 8 countries throughout the Asia Pacific region, along with members-at-large in Singapore, Pakistan, China, Fiji and Thailand.
                        <br/> <br/>
                        We are part of the International Association of Business Communicators whose global headquarters is located at 330 North Wabash Avenue, Suite 2000 Chicago, Illinois 60611. (www.iabc.com)</p>
                </div>

                <div>
                    <h3 className="text-3xl font-semibold uppercase border-b pb-5">Latest News</h3>
                    <div className="flex flex-col gap-10 pt-10 md:mb-0 mb-10">
                        {news.map((item, index) => (
                            <div key={index} >
                                <h3 className="mb-2 font-bold text-[20px]">{item.title}</h3>
                                <div className="flex gap-5">
                                    <Image src={item.icon} alt="icon" width={20} className="text-white" />
                                    <p>{item.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl font-semibold uppercase border-b pb-5">Join Our Mailing List</h3>
                    <div className="flex flex-col gap-5 pt-10">
                        <div>
                            <p className="font-bold mb-2">Your Name</p>
                            <input type="text" placeholder="Your Name" className="border w-[80%] p-3"/>
                        </div>
                        <div>
                            <p className="font-bold mb-2">Your Name</p>
                            <input type="text" placeholder="Your email" className="border w-[80%] p-3"/>
                        </div>

    <Magnetic>

                            <button type="submit" className="border py-3 bg-[#444444]
                        w-1/4">Sign up</button>
    </Magnetic>

                    </div>

                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
