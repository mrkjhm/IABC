'use client';

import React from 'react';
import Image from 'next/image';
import { articles } from '../assets/assets';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export default function Article() {
    return (
        <div className="pl-[40px] h-screen flex items-center ">
            <Swiper
                modules={[Navigation, ]}
                spaceBetween={30}
                slidesPerView={1.2}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2.5 },
                }}
            >
                {articles.map((article, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative  min-w-[500px] h-[600px] flex-shrink-0 snap-center rounded-[24px] overflow-hidden bg-neutral-900 cursor-pointer">
                            <Image
                                src={article.image}
                                alt={article.heading}
                                fill
                                className="object-cover hover:scale-100"
                                priority
                            />

                            {/* Top-left label */}
                            <div className="text-white z-10">
                                <h2 className="absolute top-10 left-10  text-4xl font-bold">{article.heading}</h2>
                                <p className="absolute bottom-10 left-10 w-1/2">{article.description}</p>
                            </div>

                            {/* Add optional brand label or CTA here */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}