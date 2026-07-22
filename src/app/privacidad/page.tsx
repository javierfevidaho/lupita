import { ArrowLeft } from "lucide-react";

export default function Privacidad() {
  return (
    <main className="min-h-screen bg-dark-900 text-gray-300 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-500 mb-12 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Volver al inicio
        </a>
        
        <h1 className="text-4xl font-bold text-white mb-8">Políticas de <span className="text-metallic">Privacidad</span></h1>
        
        <div className="space-y-6 glass p-8 rounded-2xl">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Recopilación de Información</h2>
            <p>Recopilamos la información que nos proporcionas directamente, como nombre, correo electrónico y número de teléfono, al utilizar nuestro formulario de contacto para solicitar información o presupuestos sobre nuestros servicios de instalación de puertas y herrajes.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Uso de la Información</h2>
            <p>La información recopilada se utiliza exclusivamente para:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Contactarte en respuesta a tu solicitud.</li>
              <li>Proveer servicios de instalación residencial o comercial.</li>
              <li>Mejorar la experiencia de usuario en nuestro sitio web.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Compartir Datos con Terceros</h2>
            <p>No vendemos ni compartimos tu información personal con terceros no afiliados para fines de marketing. Tu información se mantiene segura utilizando bases de datos modernas (como Supabase) con estrictas políticas de acceso.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
