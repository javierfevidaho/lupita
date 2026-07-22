import { ArrowLeft } from "lucide-react";

export default function Terminos() {
  return (
    <main className="min-h-screen bg-dark-900 text-gray-300 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-500 mb-12 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Volver al inicio
        </a>
        
        <h1 className="text-4xl font-bold text-white mb-8">Términos de <span className="text-metallic">Servicio</span></h1>
        
        <div className="space-y-6 glass p-8 rounded-2xl">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Aceptación de los Términos</h2>
            <p>Al acceder y utilizar nuestro sitio web, aceptas estar sujeto a estos Términos de Servicio. Si no estás de acuerdo con alguna parte, te pedimos que no utilices nuestros servicios de contacto e instalación.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Cotizaciones y Servicios</h2>
            <p>Toda cotización enviada a través de WhatsApp o correo es aproximada y está sujeta a verificación técnica presencial. La instalación de marcos, puertas y herrajes requiere una evaluación del sitio para garantizar la máxima calidad y seguridad.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Garantía de Instalación</h2>
            <p>Nos enorgullece ofrecer servicios premium. Todas nuestras instalaciones comerciales y residenciales cuentan con garantía de mano de obra. Los materiales (puertas, cerraduras, metales) mantienen la garantía directa del fabricante.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
