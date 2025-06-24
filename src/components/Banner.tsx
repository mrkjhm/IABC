import React from 'react'
import Image from "next/image";
import Magnetic from '@/Common/Magnetic'
import { image } from '../assets/assets'
import Breakpoint from "@/Common/Breakpoint";

const mentor = [
    {
        title: "Lorem Ipsum",
        author: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat eros ut velit aliquam tempor.",
    }
]


export default function Banner() {
    return (
        <div className="bg-deep-blue">
            <div className="w-full flex lg:flex-row flex-col">

                <div className="lg:w-1/2 w-full">
                    <Image src={image.banner_img1} alt="banner image"/>
                </div>
                <div className="custom-padding lg:w-1/2 w-full flex items-center  py-10">
                    <div className="text-white">
                        {mentor.map((item, index) => (
                            <div key={index}>
                                <p className="text-xl uppercase font-semibold">{item.title}</p>
                                <h2 className="font-bold xl:text-7xl text-5xl mb-5">{item.author}</h2>
                                <p className="mb-10 lg:w-1/2 w-3/4 ">{item.description}</p>

                                <Magnetic>
                                    <button type="submit" className="border px-5 py-2">Learn more</button>
                                </Magnetic>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    )
}
