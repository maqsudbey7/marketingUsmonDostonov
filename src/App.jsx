import React from "react";
import HeroSection from "./components/HeroSection";
import KouchingKimlarUchun from "./components/KouchingKimlarUchun";
import CallToAction from "./components/CallToAction";
import { motion } from "framer-motion";
import KouchingVideo from "./components/KouchingVideo";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-green-200 via-green-300 to-green-600 text-white font-sans min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
        <KouchingVideo/>
        <KouchingKimlarUchun />
        <CallToAction />
      </motion.div>
    </div>
  );
};

export default App;
