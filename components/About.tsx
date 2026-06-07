"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white">

            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-slate-900">
                        About Me
                    </h2>

                    <p className="mt-8 text-lg leading-9 text-slate-600">
                        Fullstack Developer dengan pengalaman lebih dari 10 tahun
                        dalam pengembangan perangkat lunak dan solusi bisnis.

                        Berpengalaman membangun Dashboard Monitoring, Inventory System, Point of Sale (POS), dan berbagai aplikasi operasional perusahaan.

                        Fokus pada pengembangan aplikasi modern menggunakan Laravel, Node.js, React.js, Next.js, JavaScript dan MySQL.
                    </p>

                </motion.div>

            </div>

        </section>
    );
}