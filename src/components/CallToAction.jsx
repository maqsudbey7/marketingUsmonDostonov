import React from "react";
import { motion } from "framer-motion";
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot, FaPaperPlane } from "react-icons/fa6";
import { FaTelegramPlane, FaInstagram, FaYoutube } from "react-icons/fa";

export default function CallToAction() {
  return (
    <section className="relative bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-700 text-white py-20 overflow-hidden">
      {/* Dekorativ effekt */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/10 blur-[150px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Chap tomonda matn */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-snug">
            Бизнесингизни тизимлаштириш орқали{" "}
            <span className="text-yellow-300">соф фойдангизни оширинг</span>
          </h2>

          <p className="text-lg text-emerald-50 mb-10 max-w-md">
            Бизнесингизни 5-6 ой давомида индивидуал тизимлаштириб берамиз
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScCuf7_g_ejLj5XftyI4aPLwvO2UjDzmClxx2TMCC1rgzTUmw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white cursor-grab text-emerald-700 font-semibold text-lg px-10 py-4 rounded-full shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:scale-105 hover:shadow-[0_0_35px_rgba(255,255,255,0.6)] transition duration-300 flex items-center gap-2">
              <FaPaperPlane className="text-emerald-700 w-5 h-5" />
              АРИЗA ҚОЛДИРИШ
            </button>
          </a>

          {/* Aloqa ma'lumotlari */}
          <div className="mt-8 space-y-3 text-lg">
            <a
              href="tel:+998991540010"
              className="block text-white/90 flex items-center gap-4 hover:text-yellow-300 transition"
            >
              <IoCallSharp /> +998 99 154 00 10
            </a>

            <a
              href="https://yandex.com/navi/org/189064440701"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white/90 flex items-center gap-4 hover:text-yellow-300 transition"
            >
              <FaLocationDot /> Тошкент, Лабзак Стреет, 64A
            </a>
          </div>

          {/* 🔗 Ijtimoiy tarmoqlar */}
          <div className="flex items-center gap-6 mt-10">
            <a
              href="https://t.me/usmon_dostonov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-blue-400 transition-transform hover:scale-110"
            >
              <FaTelegramPlane />
            </a>

            <a
              href="https://www.instagram.com/usmon_dostonov?igsh=OXB3YjY3ZzAyeGl3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-pink-400 transition-transform hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="https://youtube.com/@usmon_dostonov?si=mTUR6fWFowjQj8af"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-red-500 transition-transform hover:scale-110"
            >
              <FaYoutube />
            </a>
          </div>
        </motion.div>

        {/* O‘ng tomonda Yandex xaritasi */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.2)] border border-white/20"
        >
          <iframe
            src="https://yandex.com/map-widget/v1/org/189064440701/?ll=69.2782%2C41.3026&z=15"
            width="100%"
            height="400"
            allowFullScreen={true}
            title="Yandex Map"
            frameBorder="0"
            className="w-full h-[400px] border-none"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
