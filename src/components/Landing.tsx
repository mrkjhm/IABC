import React, { useRef, useState, useEffect } from 'react'
import Image from "next/image";

const videoCarousel = [
    '/videos/landing_video1.mp4',
    '/videos/landing_video.mp4',
    '/videos/landing_video1.mp4',
]

export default function Landing() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % videoCarousel.length);
        }, 10000); // Change video every 10 seconds

        return () => clearInterval(interval);
    }, []);

    // Update video when index changes
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(() => {});
        }
    }, [currentIndex]);


    return (
        <div className="relative w-full h-screen overflow-hidden">

            <div className="custom-padding flex justify-center items-center h-screen ">

                <Image src="/IABC-Asia-Pacific-Region-lg.png" alt="IABC-Asia-Pacific-Region-lg" width={1000} height={100} />
            </div>
            {/* Video background */}
            <video
                ref={videoRef}
                key={videoCarousel[currentIndex]}
                className="absolute inset-0 w-full h-full object-cover -z-20 md:rounded-[50px] rounded-[0px]"
                src={videoCarousel[currentIndex]}
                autoPlay
                muted
                playsInline
                loop={false}
            />


            {/* 🔧 Black overlay on top of video */}
            <div className="absolute inset-0 bg-black opacity-70 -z-10 md:rounded-[50px] rounded-[0px]" />

            {/* Navigation Controls or Content */}
            <div className="absolute bottom-5 w-full flex justify-center gap-3 z-10">
                {videoCarousel.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index ? 'bg-white' : 'bg-gray-500'
                        }`}
                    ></button>
                ))}
            </div>
        </div>



    )
}
