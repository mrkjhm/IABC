'use client';

import { useEffect } from "react";
import Lenis from 'lenis';

import Landing from "@/components/Landing";
import Breakpoint from "@/Common/Breakpoint";
import About from "@/components/About/About";
import Article from "@/components/Article";
import Banner from "@/components/Banner";
import Category from "@/components/Category";
import Footer from "@/components/Footer";

export default function Home() {

    useEffect(() => {

        const lenis = new Lenis();

        // @ts-ignore
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

    }, []);



    return (
        <div>
            <Landing />
            {/*<Breakpoint />*/}
            <About />
            <Article />
            <Banner />
            <Category />
            <Footer />
        </div>
    );
}
