'use client';
import { motion } from 'framer-motion';
import React from "react";

export default function AboutButton() {
    return (
        <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5, ease: 'easeOut' }}
            className="group inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white text-black hover:bg-black hover:text-white transition-colors duration-300"
        >
            ABOUT US
            <motion.span
                className="text-red-600 group-hover:translate-x-1 transition-transform duration-300"
                whileHover={{ x: 4 }}
            >
                <i className="ri-arrow-right-up-long-line bg-primary rounded-full m-7"></i>
            </motion.span>
        </motion.button>
    );
}
