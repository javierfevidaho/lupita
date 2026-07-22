"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { dict } = useLanguage();

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-dark-900/40 to-dark-900 z-10" />
        <img
          src="/images/door_hero.jpg"
          alt="Instalación de puertas comerciales"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-[0_5px_15px_rgba(0,0,0,1)]"
        >
          {dict.hero.title} <span className="text-metallic">{dict.hero.titleHighlight}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-gray-300 mb-10"
        >
          {dict.hero.subtitle}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold-400 text-dark-900 font-bold px-8 py-4 rounded-full text-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all transform hover:scale-105"
          >
            {dict.hero.cta} <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
