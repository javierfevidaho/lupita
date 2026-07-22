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

      <footer className="w-full py-8 text-center text-gray-500 text-sm border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} {dict.footer.rights}</p>
        <div className="mt-2 space-x-4">
          <a href="/privacidad" className="hover:text-gold-400">{dict.footer.privacy}</a>
          <a href="/terminos" className="hover:text-gold-400">{dict.footer.terms}</a>
        </div>
      </footer>
    </main>
  );
}
