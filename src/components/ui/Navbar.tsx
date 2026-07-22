"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, dict } = useLanguage();

  return (
    <header className="w-full fixed top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-metallic uppercase tracking-wider">ProDoors</h1>
        
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-gold-400 transition-colors">{dict.nav.home}</a>
            <a href="#services" className="hover:text-gold-400 transition-colors">{dict.nav.services}</a>
            <a href="#gallery" className="hover:text-gold-400 transition-colors">{dict.nav.gallery}</a>
            <a href="#contact" className="hover:text-gold-400 transition-colors">{dict.nav.contact}</a>
          </nav>
          
          <div className="flex bg-dark-800 rounded-full p-1 border border-white/10">
            <button 
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${language === 'en' ? 'bg-gold-500 text-dark-900' : 'text-gray-400 hover:text-white'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLanguage('es')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${language === 'es' ? 'bg-gold-500 text-dark-900' : 'text-gray-400 hover:text-white'}`}
            >
              ES
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
