"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50">

            <div className="max-w-7xl mx-auto px-6 py-20">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
                        Available for Remote Work
                    </span>

                    <h1 className="mt-6 text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
                        Agus Nugraha
                    </h1>

                    <h2 className="mt-4 text-2xl md:text-4xl font-semibold text-blue-700">
                        Senior Fullstack Developer
                    </h2>

                    <p className="mt-8 max-w-3xl text-lg md:text-xl text-slate-600 leading-relaxed">
                        Building business solutions using Laravel,
                        Node.js, React.js, Next.js and modern web technologies.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">

                        <a
                            href="#projects"
                            className="px-8 py-4 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition"
                        >
                            View Projects
                        </a>

                        <a
                            href="/cv-agus.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-xl border border-slate-300 hover:border-blue-700 transition"
                        >
                            Download CV
                        </a>

                    </div>
                </motion.div>

            </div>

        </section>
    );
}