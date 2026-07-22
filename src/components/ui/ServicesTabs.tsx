"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DoorOpen, Box, Lock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesTabs() {
  const { dict } = useLanguage();
  const [activeTab, setActiveTab] = useState("doors");

  const services = [
    {
      id: "doors",
      title: dict.services.doors.title,
      icon: <DoorOpen className="w-6 h-6" />,
      description: dict.services.doors.desc,
      image: "/images/door_residential.jpg"
    },
    {
      id: "frames",
      title: dict.services.frames.title,
      icon: <Box className="w-6 h-6" />,
      description: dict.services.frames.desc,
      image: "/images/door_hero.jpg"
    },
    {
      id: "hardware",
      title: dict.services.hardware.title,
      icon: <Lock className="w-6 h-6" />,
      description: dict.services.hardware.desc,
      image: "/images/door_hardware.jpg"
    }
  ];

  return (
    <section id="services" className="w-full py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {dict.services.title} <span className="text-metallic">{dict.services.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg">{dict.services.subtitle}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-4 w-full md:w-1/3">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-4 p-5 rounded-xl transition-all duration-300 text-left ${
                  activeTab === service.id 
                    ? "bg-gradient-to-r from-gold-600/20 to-transparent border-l-4 border-gold-400 text-white" 
                    : "glass text-gray-400 hover:text-white hover:bg-white/5 border-l-4 border-transparent"
                }`}
              >
                <div className={`${activeTab === service.id ? "text-gold-400" : "text-gray-500"}`}>
                  {service.icon}
                </div>
                <span className="font-semibold text-lg">{service.title}</span>
              </button>
            ))}
          </div>

          <div className="w-full md:w-2/3 min-h-[400px] relative perspective-1000">
            <AnimatePresence mode="wait">
              {services.map((service) => (
                service.id === activeTab && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, rotateY: 15, scale: 0.95, x: 20 }}
                    animate={{ opacity: 1, rotateY: 0, scale: 1, x: 0 }}
                    exit={{ opacity: 0, rotateY: -15, scale: 0.95, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full glass rounded-2xl overflow-hidden flex flex-col"
                  >
                    <div className="h-2/3 w-full relative">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent" />
                    </div>
                    <div className="p-8 h-1/3 flex flex-col justify-end">
                      <h3 className="text-2xl font-bold mb-2 text-gold-400">{service.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
