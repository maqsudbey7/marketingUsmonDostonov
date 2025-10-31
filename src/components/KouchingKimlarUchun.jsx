import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Hamkorlar
// import mega from "../assets/IMG_3528.JPG";
import novza from "../assets/IMG_3529.JPG";
import laesmeralda from "../assets/IMG_3530.JPG";
import glasspro from "../assets/IMG_3531.JPG";
import thompson from "../assets/IMG_3535.JPG";
import revent from "../assets/IMG_3533.JPG";
import img1 from "../assets/IMG_3534.JPG";
import img2 from "../assets/IMG_3536.JPG";
import img3 from "../assets/IMG_3537.JPG";
import img4 from "../assets/IMG_3522.JPG";
import img5 from "../assets/IMG_3523.JPG";
import img6 from "../assets/IMG_3524.JPG";
import img7 from "../assets/IMG_3525.JPG";
import img8 from "../assets/IMG_3526.JPG";
import img9 from "../assets/IMG_3527.JPG";

// Mijozlar
import musaffo from "../assets/musaffo.jpg";
import pepsi from "../assets/pepsi.png";
import lays from "../assets/lays.jpg";
import gorila from "../assets/gorila.png";
import adernalin from "../assets/adernalin.jpg";
import mijoz1 from "../imgmijoz/img1.png";
// import mijoz3 from "../imgmijoz/img3.jpg";
import mijoz4 from "../imgmijoz/img4.jpg";
import mijoz5 from "../imgmijoz/img5.jpg";
import mijoz6 from "../imgmijoz/img6.jpg";
import mijoz7 from "../imgmijoz/img7.jpg";
import mijoz8 from "../imgmijoz/img8.jpg";
import mijoz9 from "../imgmijoz/img9.jpg";
import mijoz10 from "../imgmijoz/img10.jpg";
import mijoz11 from "../imgmijoz/img11.jpg";
import mijoz12 from "../imgmijoz/img12.jpg";
import mijoz13 from "../imgmijoz/img13.jpg";
import mijoz14 from "../imgmijoz/img14.jpg";
import mijoz15 from "../imgmijoz/img15.jpg";
import mijoz16 from "../imgmijoz/img16.jpg";
import mijoz17 from "../imgmijoz/img17.jpg";
import mijoz18 from "../imgmijoz/img18.jpg";
import mijoz19 from "../imgmijoz/img19.png";
import mijoz20 from "../imgmijoz/img20.jpg";
import mijoz21 from "../imgmijoz/img21.JPG";
import mijoz22 from "../imgmijoz/img22.JPG";
import mijoz23 from "../imgmijoz/img23.JPG";
import mijoz24 from "../imgmijoz/img24.JPG";
import mijoz25 from "../imgmijoz/img25.JPG";
import mijoz26 from "../imgmijoz/img26.JPG";
import mijoz27 from "../imgmijoz/img27.JPG";
import mijoz28 from "../imgmijoz/img28.JPG";
import mijoz30 from "../imgmijoz/img30.JPG";
import mijoz31 from "../imgmijoz/img31.JPG";
import mijoz32 from "../imgmijoz/img32.JPG";
import mijoz33 from "../imgmijoz/img33.JPG";
import mijoz34 from "../imgmijoz/img34.JPG";
import mijoz35 from "../imgmijoz/img35.JPG";

export default function KouchingKimlarUchun() {
  const xizmatlar = [
    { title: "1. Бизнесни таҳлил қилиш", items: ["Бизнесни Аудит қилиш", "Управленческий менеджмент", "Бизнес модел", "Структура бизнеса"] },
    { title: "2. Молиявий тизим", items: ["Управленческий учёт", "Фин модел", "Структура финансь", "Балансь"] },
    { title: "3. Молиявий таҳлил", items: ["Cash Flow", "P&L", "Точка безубыточности", "Бюджет"] },
    { title: "4. Бизнес жараёнлар", items: ["Бизнес процесс", "HR процесс", "КДП", "Корпоративная культура"] },
    { title: "5. Кадрлар бошқаруви", items: ["KPI / OKR / C&B", "ПВТР", "Рекрутинг", "Адаптация"] },
    { title: "6. Ходимлар ривожи", items: ["Обучение сотрудников", "Продажа процесс", "SWOT анализ", "Диагностика"] },
    { title: "7. Бизнесни тизимлаштириш", items: ["Бошқарув тизими", "Молиявий бошқарув тизими", "HR процессни тизимлаштириш"] },
    { title: "8. Сотув ва омбор тизимлари", items: ["Сотув тизими", "Омбор тизими", "Складских учёт", "Складских процессов"] },
  ];

  const clients = [novza, laesmeralda, glasspro, thompson, revent, img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const partners = [pepsi, musaffo, lays, gorila, adernalin, mijoz1, mijoz4, mijoz5, mijoz6, mijoz7, mijoz8, mijoz9, mijoz10, mijoz11, mijoz12, mijoz13, mijoz14, mijoz15, mijoz16, mijoz17, mijoz18, mijoz19, mijoz20, mijoz21, mijoz22, mijoz23, mijoz24, mijoz25, mijoz26, mijoz27, mijoz28, mijoz30, mijoz31, mijoz32, mijoz33, mijoz34, mijoz35];

  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { delay, duration: 0.8, ease: "easeOut" } },
  });

  // Infinity, uzluksiz, minimal gap, tez
  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1200, // 🔹 har 1.2 soniyada yangi slayd
    speed: 500,          // 🔹 o‘tish tezligi (0.5s)
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    swipe: true,
    draggable: true,
    touchMove: true,
    cssEase: "linear",   // 🔹 silliq harakat
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
      { breakpoint: 360, settings: { slidesToShow: 1 } },
    ],
  };



  return (
    <section className="bg-gradient-to-b from-white via-green-50 to-white text-gray-900 py-12 sm:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden">

      {/* Хизматлар */}
      <motion.h1
        variants={fadeIn(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-3xl sm:text-4xl font-extrabold tracking-wide mb-16 text-green-600"
      >
        БИЗНИНГ ХИЗМАТЛАР
      </motion.h1>

      <motion.div
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 max-lg:mx-0"
      >
        {xizmatlar.map((card, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white border border-green-100 rounded-3xl shadow-md hover:shadow-2xl p-6 transition-all duration-500">
            {/* <h3 className="text-xl font-semibold text-green-700 mb-3 text-center">{card.title}</h3> */}
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
              {card.items.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </motion.div>
        ))}
      </motion.div>
      <div className="mb-12 bg-gradient-to-r mx-[100px] max-xl:mx-[70px] max-lg:mx-0 from-green-100 to-green-50 rounded-3xl py-8 px-2 sm:px-4 shadow-2xl">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-12 text-green-700">
          ҲАМКОРЛАРИМИЗ
        </h2>
        <Slider
          {...sliderSettings}
          speed={500}
          cssEase="ease-in-out"
        >
          {clients.map((img, i) => (
            <div key={i} className="px-2 flex-shrink-0">
              <div
                className="
            w-full
            h-40 sm:h-36 md:h-40
            max-[600px]:h-24  /* 🔹 600px dan kichik bo‘lsa balandligi 24 bo‘ladi */
            flex items-center justify-center
            bg-white rounded-xl overflow-hidden shadow-md
            transition-all duration-300
          "
              >
                <img
                  src={img}
                  alt={`client-${i}`}
                  className="object-contain w-[80%] h-[80%]"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Mijozlar slider */}
      <div className="bg-gradient-to-r from-green-100 mx-[100px] max-xl:mx-[70px] max-lg:mx-0 to-green-50 rounded-3xl py-8 px-2 sm:px-4 shadow-2xl">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-12 text-green-700">
          МИЖОЗЛАРИМИЗ
        </h2>
        <Slider
          {...sliderSettings}
          speed={500}
          cssEase="ease-in-out"
        >
          {partners.map((img, i) => (
            <div key={i} className="px-2 flex-shrink-0">
              <div
                className="
            w-full
            h-40 sm:h-36 md:h-40
            max-[600px]:h-24
            flex items-center justify-center
            bg-white rounded-xl overflow-hidden shadow-md
            transition-all duration-300
          "
              >
                <img
                  src={img}
                  alt={`partner-${i}`}
                  className="object-contain w-[80%] h-[80%]"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>




    </section>
  );
}
