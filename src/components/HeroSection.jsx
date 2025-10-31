import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/IMG_2145.PNG";
import logo from "../assets/Osman logo.png";
import { MdCall } from "react-icons/md";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-emerald-50 to-white flex flex-col justify-between overflow-hidden">
      {/* 🔹 Фон расм */}
      <div className="absolute inset-0 h-[500px] sm:h-[600px]">
        <img
          src={heroBg}
          alt="Бизнес Коучинг"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-emerald-100/70 to-white/95"></div>
      </div>

      {/* 🔹 Ёруғлик эффекти */}
      {/* <div className="absolute -left-32 top-1/3 w-[400px] h-[400px] bg-emerald-300/30 blur-[200px] rounded-full"></div> */}

      {/* 🔹 Контент */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-12 pt-8 pb-12">
        {/* Чап қисм (Textlar) */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-2xl sm:text-4xl font-bold leading-tight mb-5 text-emerald-950"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Бизнесингизда <br />
            <span className="text-emerald-600">мустаҳкам тизим</span> қуринг
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-gray-700 mb-8 max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
          Бизнесингизни тизимлаштириш орқали соф фойдангизни тизимли оширинг
          </motion.p>

          {/* 🔹 Тугма ва телефон рақами */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScCuf7_g_ejLj5XftyI4aPLwvO2UjDzmClxx2TMCC1rgzTUmw/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-emerald-500 text-white font-semibold px-10 py-4 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:scale-105 transition-transform duration-300">
                РЎЙХАТДАН ЎТИНГ
              </button>
            </a>

            <a
              href="tel:+998991540010"
              className="text-green-600 font-medium text-lg flex items-center gap-1 hover:text-green-500 transition"
            >
              <MdCall /> +998 99 154 00 10
            </a>
          </motion.div>
        </motion.div>

        {/* 🔹 Ўнг қисм (Logo + Rasm) */}
        <motion.div
          className="flex-1 relative flex flex-col items-center lg:items-end"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Logo kattaroq qilindi */}
          <img
            src={logo}
            alt="Логотип"
            className="mb-6 w-32 h-32 sm:w-40 sm:h-40 object-contain drop-shadow-md"
          />

          {/* Тренер расми */}
          <div className="relative">
            <img
              src={heroBg}
              alt="Тренер"
              className="w-[260px] sm:w-[340px] lg:w-[800px] rounded-[2rem] shadow-[0_0_30px_rgba(0,0,0,0.2)] border border-emerald-100 hover:scale-105 transition duration-500"
            />

            {/* Исм ва лавозим */}
            <motion.div
              className="hidden sm:block absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-emerald-100 text-left max-w-[260px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <p className="text-base sm:text-lg font-semibold text-emerald-800">
                Усмон Достонов
              </p>
              <p className="text-xs sm:text-sm text-gray-700 mt-1">
                Бизнесни индивидуал тизимлаштириш бўйича 8 йиллик тажрибага эга
                мутахассис. Диплом сертификат: MBA / PMP / CMC
              </p>
            </motion.div>
          </div>

          {/* Мобилда карточка пастда чиқади */}
          <motion.div
            className="block sm:hidden mt-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-emerald-100 text-center w-[90%] max-w-[300px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <p className="text-base font-semibold text-emerald-800">
              Усмон Достонов
            </p>
            <p className="text-sm text-gray-700 mt-1">
              Бизнесни индивидуал тизимлаштириш бўйича 8 йиллик тажрибага эга
              мутахассис. Диплом сертификат: MBA / PMP / CMC
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
