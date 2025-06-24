import React from 'react';
import Image from 'next/image';
import { categories, topic} from "@/assets/assets";

export default function Category() {
    return (
        <div className="min-h-screen custom-padding bg-primary flex flex-col justify-center items-center gap-10">
            <div className="flex items-center justify-center w-full">
                <div className="flex gap-7">
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className=" px-7 py-2 rounded-full bg-orange text-white uppercase"
                        >
                            <p className=" flex justify-center items-center font-semibold">{item.category}</p>
                        </div>

                    ))}
                </div>
            </div>

            <div className="flex  gap-5">
                {topic.map((item, index) => (
                    <div key={index} >
                        <Image src={item.image} alt={item.title} className="rounded-lg mb-5"/>
                        <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                        <div className="flex justify-between text-sm">
                            <p className="mb-3">{item.date}</p>
                            <p>{item.place}</p>
                        </div>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
