export const dictionaries = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      contact: "Contact"
    },
    hero: {
      title: "Precision in ",
      titleHighlight: "Doors & Hardware",
      subtitle: "Experts in commercial and residential installations. Top-tier security, design, and functionality.",
      cta: "Get a Quote"
    },
    services: {
      title: "Our ",
      titleHighlight: "Services",
      subtitle: "Comprehensive solutions for any type of access.",
      doors: {
        title: "Door Installation",
        desc: "Professional installation of wood, metal, and glass doors for homes and businesses. Perfect fit guaranteed."
      },
      frames: {
        title: "Wood & Metal Frames",
        desc: "Assembly and installation of durable frames. Repair and replacement of damaged frames for maximum security."
      },
      hardware: {
        title: "High Security Hardware",
        desc: "Installation of smart locks, panic bars, heavy-duty hinges, and hydraulic door closers."
      }
    },
    gallery: {
      title: "Featured ",
      titleHighlight: "Projects",
      subtitle: "Quality in every installation, proven.",
      filters: {
        all: "All",
        commercial: "Commercial",
        residential: "Residential",
        hardware: "Hardware"
      },
      projects: {
        p1: "Corporate Building",
        p2: "Luxury Residence",
        p3: "Biometric Lock",
        p4: "Modern Offices",
        p5: "Oak Front Door",
        p6: "Panic Bar"
      }
    },
    contact: {
      title: "Contact ",
      titleHighlight: "Us",
      subtitle: "Ready to secure your property with the best quality in doors and hardware? Fill out the form or text us on WhatsApp.",
      form: {
        name: "Full Name",
        namePh: "e.g. John Doe",
        email: "Email Address",
        emailPh: "john@example.com",
        phone: "Phone Number",
        phonePh: "+1 234 567 890",
        message: "Message or Project Details",
        messagePh: "Briefly describe what you need...",
        submit: "Send & Contact via WhatsApp",
        sending: "Sending...",
        success: "Message ready! Opening WhatsApp...",
        error: "There was an error sending the form. Try again."
      },
      map: "Location Map"
    },
    footer: {
      rights: "ProDoors. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      gallery: "Galería",
      contact: "Contacto"
    },
    hero: {
      title: "Precisión en ",
      titleHighlight: "Puertas y Herrajes",
      subtitle: "Expertos en instalaciones comerciales y residenciales. Seguridad, diseño y funcionalidad de primer nivel.",
      cta: "Solicitar Cotización"
    },
    services: {
      title: "Nuestros ",
      titleHighlight: "Servicios",
      subtitle: "Soluciones integrales para cualquier tipo de acceso.",
      doors: {
        title: "Instalación de Puertas",
        desc: "Instalación profesional de puertas de madera, metal y cristal para residencias y comercios. Ajuste perfecto garantizado."
      },
      frames: {
        title: "Marcos de Madera y Metal",
        desc: "Ensamblaje e instalación de marcos resistentes. Reparación y reemplazo de marcos dañados para máxima seguridad."
      },
      hardware: {
        title: "Herrajes de Alta Seguridad",
        desc: "Colocación de cerraduras inteligentes, barras antipánico, bisagras de uso rudo y cierrapuertas hidráulicos."
      }
    },
    gallery: {
      title: "Proyectos ",
      titleHighlight: "Destacados",
      subtitle: "Calidad en cada instalación, comprobada.",
      filters: {
        all: "Todos",
        commercial: "Comercial",
        residential: "Residencial",
        hardware: "Herrajes"
      },
      projects: {
        p1: "Edificio Corporativo",
        p2: "Residencia Lujo",
        p3: "Cerradura Biométrica",
        p4: "Oficinas Modernas",
        p5: "Puerta Principal de Roble",
        p6: "Barra Antipánico"
      }
    },
    contact: {
      title: "",
      titleHighlight: "Contáctanos",
      subtitle: "¿Listo para asegurar tu propiedad con la mejor calidad en puertas y herrajes? Llena el formulario o escríbenos por WhatsApp.",
      form: {
        name: "Nombre Completo",
        namePh: "Ej. Juan Pérez",
        email: "Correo Electrónico",
        emailPh: "juan@ejemplo.com",
        phone: "Teléfono",
        phonePh: "+1 234 567 890",
        message: "Mensaje o Detalles del Proyecto",
        messagePh: "Describe brevemente lo que necesitas...",
        submit: "Enviar y Contactar por WhatsApp",
        sending: "Enviando...",
        success: "¡Mensaje listo! Se está abriendo WhatsApp...",
        error: "Hubo un error al enviar el formulario. Intenta nuevamente."
      },
      map: "Mapa de Ubicación"
    },
    footer: {
      rights: "ProDoors. Todos los derechos reservados.",
      privacy: "Privacidad",
      terms: "Términos de Servicio"
    }
  }
};

export type Language = 'en' | 'es';
export type Dictionary = typeof dictionaries.en;
