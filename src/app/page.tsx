"use client";

import { useLanguage } from "@/context/LanguageContext";
import Hero from "@/components/ui/Hero";
import ServicesTabs from "@/components/ui/ServicesTabs";
import ProjectGallery from "@/components/ui/ProjectGallery";
import ContactForm from "@/components/ui/ContactForm";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  const { dict } = useLanguage();

  return (
    <main className="flex flex-col items-center w-full">
      <Navbar />

      <Hero />
      <ServicesTabs />
      <ProjectGallery />
      
      <section id="contact" className="w-full py-20 px-6 bg-dark-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">
              {dict.contact.title}
              <span className="text-metallic">{dict.contact.titleHighlight}</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              {dict.contact.subtitle}
            </p>
            <div className="space-y-4 text-gray-300">
              <p>📍 123 Builder St, NY 10001, USA</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ info@prodoors.com</p>
            </div>
            
            <div className="mt-8 w-full h-64 rounded-xl overflow-hidden border border-white/10 relative">
              <img src="/images/door_residential.jpg" alt="Map Placeholder" className="object-cover w-full h-full opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="glass px-4 py-2 rounded font-semibold text-gold-400">{dict.contact.map}</span>
              </div>
            </div>
          </div>
          
          <div className="glass p-8 rounded-2xl">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="w-full py-8 border-t border-white/5 flex flex-col items-center">
        <p className="text-gray-500 text-sm mb-4">&copy; {new Date().getFullYear()} {dict.footer.rights}</p>
        <div className="space-x-4 mb-6 text-gray-500 text-sm">
          <a href="/privacidad" className="hover:text-gold-400 transition-colors">{dict.footer.privacy}</a>
          <a href="/terminos" className="hover:text-gold-400 transition-colors">{dict.footer.terms}</a>
        </div>
        
        {/* Built by JavierCode Badge */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
          <span>Built by</span>
          <a
            href="https://javiercode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 border border-indigo-500/20 rounded-full hover:border-indigo-500/40 transition-all duration-300 group"
          >
            <span className="font-semibold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:via-purple-300 group-hover:to-cyan-300">
              JavierCode
            </span>
            <svg className="w-3 h-3 text-indigo-400 group-hover:text-indigo-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </footer>
    </main>
  );
}
