"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
  const { dict } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus("success");
      
      const waNumber = "1234567890";
      const waMessage = `Hello, my name is ${formData.name}. I would like more info. My email is ${formData.email} and phone ${formData.phone}. Message: ${formData.message}`;
      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
      
      window.open(waUrl, "_blank");
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">{dict.contact.form.name}</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
          placeholder={dict.contact.form.namePh}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">{dict.contact.form.email}</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
            placeholder={dict.contact.form.emailPh}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">{dict.contact.form.phone}</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
            placeholder={dict.contact.form.phonePh}
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">{dict.contact.form.message}</label>
        <textarea 
          id="message" 
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors resize-none"
          placeholder={dict.contact.form.messagePh}
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === "loading"}
        className="w-full bg-gradient-to-r from-gold-600 to-gold-400 text-dark-900 font-bold px-6 py-4 rounded-lg flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all disabled:opacity-70"
      >
        {status === "loading" ? dict.contact.form.sending : (
          <>
            {dict.contact.form.submit} <Send className="w-5 h-5" />
          </>
        )}
      </button>
      
      {status === "success" && (
        <p className="text-green-400 text-sm text-center">{dict.contact.form.success}</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">{dict.contact.form.error}</p>
      )}
    </form>
  );
}
