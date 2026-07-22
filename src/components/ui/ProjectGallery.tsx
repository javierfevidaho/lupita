"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectGallery() {
  const { dict } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    { id: 1, title: dict.gallery.projects.p1, category: "commercial", label: dict.gallery.filters.commercial, img: "/images/door_hero.jpg" },
    { id: 2, title: dict.gallery.projects.p2, category: "residential", label: dict.gallery.filters.residential, img: "/images/door_residential.jpg" },
    { id: 3, title: dict.gallery.projects.p3, category: "hardware", label: dict.gallery.filters.hardware, img: "/images/biometric_lock.jpg" },
    { id: 4, title: dict.gallery.projects.p4, category: "commercial", label: dict.gallery.filters.commercial, img: "/images/office_door.jpg" },
    { id: 5, title: dict.gallery.projects.p5, category: "residential", label: dict.gallery.filters.residential, img: "/images/oak_door.jpg" },
    { id: 6, title: dict.gallery.projects.p6, category: "hardware", label: dict.gallery.filters.hardware, img: "/images/door_hardware.jpg" },
  ];

  const categories = [
    { id: "all", label: dict.gallery.filters.all },
    { id: "commercial", label: dict.gallery.filters.commercial },
    { id: "residential", label: dict.gallery.filters.residential },
    { id: "hardware", label: dict.gallery.filters.hardware }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="gallery" className="w-full py-24 px-6 bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {dict.gallery.title} <span className="text-metallic">{dict.gallery.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg">{dict.gallery.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === cat.id 
                  ? "bg-gold-500 text-dark-900 shadow-[0_0_15px_rgba(212,175,55,0.4)]" 
                  : "glass text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer h-64 glass"
                onClick={() => setSelectedImage(project.img)}
              >
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-gold-400 text-sm font-semibold uppercase tracking-wider">{project.label}</span>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage} 
              alt="Lightbox" 
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" 
            />
            <button 
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
