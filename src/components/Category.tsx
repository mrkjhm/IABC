'use client';

import React from 'react';
import Image from 'next/image';
import { categories, topic } from '@/assets/assets';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export default function Category() {
    return (
        <div className="min-h-screen custom-padding bg-primary flex flex-col justify-center items-center gap-10">
            {/* Categories Section */}
            <div className="items-center justify-center w-full">
                {/* Desktop Categories */}
                <div className="flex-wrap gap-7 justify-center md:flex hidden">
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className="px-7 py-2 rounded-full bg-orange text-white uppercase"
                        >
                            <p className="flex justify-center items-center font-semibold">
                                {item.category}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mobile Category Button */}
                <div className="md:hidden flex">
                    <div className="flex items-center justify-between w-full">
                        <p className="font-bold text-2xl">Category:</p>
                        <div className="bg-orange h-10 w-10 flex items-center justify-center rounded-full text-white">
                            <i className="ri-layout-grid-fill"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* Topics Carousel */}
            <div className="w-full">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {topic.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white p-4 rounded-xl shadow-md">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="rounded-lg mb-5 w-full h-auto"
                                />
                                <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <p className="mb-3">{item.date}</p>
                                    <p>{item.place}</p>
                                </div>
                                <p className="text-gray-700">{item.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
