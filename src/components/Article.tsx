'use client';
import React from 'react';
import Image from 'next/image';
import { articles } from '../assets/assets';

export default function Article() {
    return (
        <div className="custom-padding h-screen flex items-center">
            <div className="flex gap-6">
                {articles.map((article, index) => (
                    <div
                        key={index}
                        className="relative min-w-[500px] h-[600px] flex-shrink-0 snap-center rounded-[24px] overflow-hidden bg-neutral-900"
                    >
                        <Image
                            src={article.image}
                            alt={article.heading}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Top-left label */}
                        <div className="absolute top-4 left-4 text-white">
                            <h2 className="text-3xl ">{article.heading}</h2>
                            <p>{article.description}</p>
                        </div>

                        {/* Bottom-right brand label */}
                    </div>
                ))}
            </div>
        </div>
    );
}
