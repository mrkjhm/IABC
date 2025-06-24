import React from 'react'
import Image from "next/image";

import { image } from '../assets/assets'

const mentor = [
    {
        title: "Meet the author",
        author: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat eros ut velit aliquam tempor.",
    }
]


export default function Banner() {
    return (
        <div className="bg-deep-blue">
            <div className=" w-full">
                <div className="flex gap-10">
                    <div className="w-1/2">
                        <Image src={image.banner_img1} alt="banner image"/>
                    </div>
                    <div className="flex items-center">
                        <div className="text-white">
                            {mentor.map((item, index) => (
                                <div key={index}>
                                    <p className="text-xl uppercase font-semibold">{item.title}</p>
                                    <h2 className="font-bold text-7xl mb-5">{item.author}</h2>
                                    <p className="mb-10 w-1/2">{item.description}</p>

                                    <div>

                                        <button type="submit" className="border px-5 py-2
                            ">Learn more</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
