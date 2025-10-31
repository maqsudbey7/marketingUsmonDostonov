import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/4P5A6187.jpg";

const SpeakerSection = () => {
    return (
        <section className="relative bg-gradient-to-br from-white via-[#f3fff8] to-[#e0f8ec] py-20 max-2xl:px-6  overflow-hidden">
            <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-6 md:gap-10">

                {/* ✅ Chap tarafdagi rasm (balandlik sinxronlashgan) */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                    className="flex-1 flex justify-center md:justify-start"
                >
                    <div className="w-[80%] max-w-[420px] h-full flex items-center justify-center">
                        <img
                            src={img1}
                            alt="Speaker"
                            className="w-full h-full object-cover rounded-3xl shadow-2xl border-[5px] border-[#baf3d0] hover:scale-[1.03] transition-transform duration-700 ease-out"
                        />
                    </div>

                </motion.div>

                {/* ✅ O‘ng tarafdagi card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="flex-1 flex"
                >
                    <div className="bg-white/80 backdrop-blur-md border border-[#c7f1d9] rounded-3xl shadow-lg p-8 md:p-10 space-y-6 flex flex-col justify-center w-full">
                        <div>
                            <p className="text-[#1fa463] uppercase tracking-wider font-semibold text-center md:text-left">
                                Dastur muallifi va spikeri
                            </p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#033a24] leading-tight text-center md:text-left mt-2">
                                USMON DOSTONOV
                            </h2>
                        </div>

                        <div className="space-y-6 text-[16.5px] text-[#0f2e1f] leading-relaxed">
                            <div className="flex gap-4 items-start">
                                <div className="bg-[#1fa463] text-white font-bold rounded-full w-9 h-9 flex items-center justify-center shadow-md shrink-0">
                                    1
                                </div>
                                <p>
                                    Biznesni individual tizimlashtirish boʼyicha 8 yillik tajribaga
                                    ega mutaxassis.
                                </p>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="bg-[#1fa463] text-white font-bold rounded-full w-9 h-9 flex items-center justify-center shadow-md shrink-0">
                                    2
                                </div>
                                <p>9000 dan ortiq tadbirkorlarga ta’lim bergan.</p>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="bg-[#1fa463] text-white font-bold rounded-full w-9 h-9 flex items-center justify-center shadow-md shrink-0">
                                    3
                                </div>
                                <div className="space-y-1">
                                    <p>“Biznes transformatsiyasi” 3 kunlik intensiv</p>
                                    <p>5 haftalik Biznes Kouching</p>
                                    <p>
                                        3 yillik “Million dollarlikka qadam-ba-qadam” murabbiylik
                                        dasturi
                                    </p>
                                    <p>“Individual tizimlashtirish” dasturlari muallifi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SpeakerSection;
