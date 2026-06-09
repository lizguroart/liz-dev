export interface Project {
  id: string;

  title: string;

  category:
    | "Experiencia Profesional"
    | "Freelance"
    | "Proyecto Personal"
    | "Producto Digital";

  featured: boolean;

  shortDescription: string;

  description: string;

  image: string;

  gallery: string[];

  technologies: string[];

  contribution: string[];

  challenges?: string[];

  results?: string[];

  status: "Live" | "Privado" | "En desarrollo";

  url?: string;
}

export const projects: Project[] = [
  {
    id: "product-customizer",

    title: "Personalización de Productos Premium",

    category: "Experiencia Profesional",

    featured: true,

    shortDescription:
      "Configurador visual con vista previa en tiempo real para productos personalizables.",

    description:
      "Desarrollo de una experiencia de personalización para productos premium permitiendo visualizar grabados y configuraciones antes de finalizar la compra. La solución permitía seleccionar texto, tipografía, posición y otras opciones de personalización con renderizado dinámico sobre el producto.",

    image: "/project/product-customizer/cover.png",

    gallery: [
      "/projects/product-customizer/1.webp",
      "/projects/product-customizer/2.webp",
      "/projects/product-customizer/3.webp",
    ],

    technologies: [
      "React",
      "TypeScript",
      "VTEX IO",
      "Canvas API",
    ],

    contribution: [
      "Desarrollo del configurador visual",
      "Renderizado dinámico sobre imágenes",
      "Integración con attachments de VTEX",
      "Configuración basada en metadatos",
      "Implementación de múltiples opciones de grabado",
      "Optimización de experiencia de usuario",
    ],

    challenges: [
      "Posicionamiento dinámico del grabado",
      "Soporte para múltiples tipografías",
      "Vista previa en tiempo real",
      "Sincronización con configuraciones de producto",
    ],

    results: [
      "Experiencia de compra más interactiva",
      "Mayor confianza del usuario antes de finalizar la compra",
      "Reducción de errores en solicitudes de personalización",
    ],

    status: "Privado",

    url: "",
  },

  {
    id: "3f-landing",

    title: "Landing 3F Soluciones Digitales",

    category: "Proyecto Personal",

    featured: true,

    shortDescription:
      "Landing corporativa para una marca de servicios tecnológicos.",

    description:
      "Sitio web desarrollado para presentar servicios de desarrollo web, soporte tecnológico e infraestructura digital. Diseñado con enfoque en conversión, experiencia de usuario y posicionamiento profesional.",

    image: "/project/3f/cover.png",

    gallery: [
      "/projects/3f/1.webp",
      "/projects/3f/2.webp",
      "/projects/3f/3.webp",
    ],

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],

    contribution: [
      "Diseño y desarrollo completo del sitio",
      "Arquitectura Frontend",
      "Implementación responsive",
      "Optimización SEO",
      "Creación de componentes reutilizables",
      "Implementación de animaciones modernas",
    ],

    challenges: [
      "Diseño de identidad visual",
      "Optimización para dispositivos móviles",
      "Balance entre diseño y rendimiento",
    ],

    results: [
      "Presencia digital profesional para la marca",
      "Base para posicionamiento SEO",
      "Canal de captación de clientes potenciales",
    ],

    status: "Live",

    url: "https://3f-web.vercel.app/",
  },

  {
    id: "rifa-app",

    title: "Sistema de Rifas Digital",

    category: "Producto Digital",

    featured: true,

    shortDescription:
      "Aplicación para gestionar rifas digitales y selección de números.",

    description:
      "Plataforma desarrollada para facilitar la gestión de rifas, permitiendo controlar números disponibles, participantes y seguimiento del proceso de forma intuitiva.",

    image: "/project/rifa/cover.png",

    gallery: [
      "/projects/rifa/1.webp",
      "/projects/rifa/2.webp",
      "/projects/rifa/3.webp",
    ],

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase"
    ],

    contribution: [
      "Diseño y desarrollo completo",
      "Gestión de estados y participantes",
      "Implementación responsive",
      "Arquitectura Frontend",
    ],

    challenges: [
      "Gestión dinámica de números",
      "Experiencia intuitiva para usuarios",
      "Escalabilidad para futuras funcionalidades",
    ],

    results: [
      "Digitalización del proceso de rifas",
      "Mejor experiencia para organizadores y participantes",
    ],

    status: "Live",

    url: "https://rifa-app-nine.vercel.app/",
  },

  {
    id: "lizdev-portfolio",

    title: "Portafolio Profesional LizDev",

    category: "Proyecto Personal",

    featured: false,

    shortDescription:
      "Portafolio personal diseñado para presentar experiencia y proyectos.",

    description:
      "Sitio web creado para mostrar experiencia profesional, habilidades técnicas y proyectos destacados mediante una experiencia visual moderna e interactiva.",

    image: "/projects/portfolio/cover.webp",

    gallery: [
      "/projects/portfolio/1.webp",
      "/projects/portfolio/2.webp",
      "/projects/portfolio/3.webp",
    ],

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],

    contribution: [
      "Diseño visual completo",
      "Desarrollo Frontend",
      "Arquitectura de componentes",
      "Implementación de animaciones",
      "Optimización responsive",
    ],

    challenges: [
      "Transmitir experiencia profesional de forma visual",
      "Diseño coherente con marca personal",
      "Balance entre estética y rendimiento",
    ],

    results: [
      "Mejor presentación profesional",
      "Centralización de proyectos y experiencia",
    ],

    status: "En desarrollo",

    url: "https://liz-dev.vercel.app/",
  },

  {
    id: "novena-app",

    title: "Novena de Aguinaldos Digital",

    category: "Proyecto Personal",

    featured: false,

    shortDescription:
      "Experiencia digital interactiva para acompañar la Novena de Aguinaldos.",

    description:
      "Proyecto desarrollado para modernizar la experiencia tradicional de la Novena de Aguinaldos mediante una interfaz amigable y accesible desde cualquier dispositivo.",

    image: "/projects/novena/cover.webp",

    gallery: [
      "/projects/novena/1.webp",
      "/projects/novena/2.webp",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],

    contribution: [
      "Diseño y desarrollo completo",
      "Experiencia responsive",
      "Organización de contenido",
    ],

    challenges: [
      "Presentación clara de contenido",
      "Accesibilidad móvil",
    ],

    results: [
      "Digitalización de una tradición familiar",
    ],

    status: "Live",

    url: "https://novena-de-aguinaldos.vercel.app/",
  },
];