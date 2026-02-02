'use client'
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { SiNextdotjs, SiReact, SiTypescript, SiExpo, SiFirebase } from 'react-icons/si';
import { FaMobileAlt, FaGamepad, FaDatabase, FaTools } from 'react-icons/fa';

export const runtime = 'edge';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const transition = { duration: 0.5 };

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Data de proyectos por empresa
const projectsData = {
  freelance: {
    title: 'Proyectos Freelance',
    subtitle: 'Desarrollo de aplicaciones Mobile & Web para clientes diversos',
    projects: [
      {
        name: 'TaxFinder',
        description: 'App mobile para gestión de impuestos en EEUU. Sistema completo con autenticación, cálculo de impuestos y generación de reportes.',
        image: '/projects/taxfinder.png',
        tech: ['React Native', 'Expo', 'Firebase', 'TypeScript'],
        features: ['Autenticación', 'Cálculo de impuestos', 'Reportes PDF', 'Dashboard analytics'],
        icon: <SiFirebase className="text-orange-500" size={20} />
      },
      {
        name: 'DHM Taxes',
        description: 'Ecosistema web/mobile para servicios legales y migratorios. Plataforma completa con gestión de casos y documentos.',
        image: '/projects/dhm.svg',
        tech: ['Next.js', 'React Native', 'PostgreSQL', 'Tailwind CSS'],
        features: ['Gestión de casos', 'Documentos legales', 'Sistema de pagos', 'Notificaciones push'],
        icon: <SiNextdotjs className="text-black dark:text-white" size={20} />
      },
      {
        name: 'Impostor',
        description: 'Juego mobile de entretenimiento desarrollado para Android. Juego multijugador con salas y chat en tiempo real.',
        image: '/projects/impostor.png',
        tech: ['React Native', 'Expo', 'WebSocket', 'Zustand'],
        features: ['Multijugador', 'Salas privadas', 'Chat en tiempo real', 'Ranking global'],
        icon: <FaGamepad className="text-purple-500" size={20} />
      },
      {
        name: 'Natural Frío',
        description: 'Gestión de servicios técnicos de refrigeración. Sistema de pedidos y seguimiento para técnicos.',
        image: '/projects/natural-frio.png',
        tech: ['Expo', 'React Native', 'SQLite', 'GPS'],
        features: ['Gestión de pedidos', 'Seguimiento GPS', 'Agenda técnica', 'Historial de servicios'],
        icon: <FaTools className="text-blue-500" size={20} />
      },
      {
        name: 'Sistema Inventario',
        description: 'Control de stock y ventas para negocios locales. Sistema completo con POS y reportes.',
        image: '/projects/inventario.png',
        tech: ['React', 'Next.js', 'SQL', 'Chart.js'],
        features: ['Gestión de inventario', 'Point of Sale', 'Reportes analíticos', 'Exportación de datos'],
        icon: <FaDatabase className="text-green-500" size={20} />
      },
      {
        name: 'Estucalia',
        description: 'Landing page institucional con sistema de citas y contacto.',
        image: '/projects/estucalia.svg',
        tech: ['Next.js', 'Tailwind CSS', 'Formspree'],
        features: ['Diseño responsive', 'Sistema de citas', 'Galería de trabajos', 'Contacto integrado'],
        icon: <SiReact className="text-blue-400" size={20} />
      },
      {
        name: 'Desguaces',
        description: 'Plataforma para gestión de autopartes y vehículos usados.',
        image: '/projects/desguaces.svg',
        tech: ['React Native', 'Expo', 'Firebase', 'Camera API'],
        features: ['Catálogo de piezas', 'Búsqueda avanzada', 'Subir fotos', 'Chat con vendedores'],
        icon: <FaMobileAlt className="text-green-600" size={20} />
      },
      {
        name: 'Kronos',
        description: 'App de control de tiempo y asistencia para empresas.',
        image: '/projects/kronos.png',
        tech: ['React Native', 'TypeScript', 'Biometrics', 'Reports'],
        features: ['Control de asistencia', 'Reportes horarios', 'Geolocalización', 'Integración payroll'],
        icon: <FaDatabase className="text-indigo-500" size={20} />
      }
    ]
  },
  fyself: {
    title: 'Fyself Ecosystem',
    subtitle: 'Desarrollo en la primera Red Social de Identidad Soberana',
    projects: [
      {
        name: 'Fyself Doctor',
        description: 'Vertical de salud digital con historial médico y telemedicina.',
        image: '/projects/fyself-doctor.png',
        tech: ['React Native', 'Expo', 'WebRTC', 'HL7 FHIR'],
        features: ['Historial médico', 'Telemedicina', 'Recetas digitales', 'Interoperabilidad médica'],
        icon: <FaMobileAlt className="text-red-500" size={20} />
      },
      {
        name: 'Fyself Sports',
        description: 'Plataforma deportiva con estadísticas y seguimiento de rendimiento.',
        image: '/projects/fyself-sports.png',
        tech: ['React Native', 'TypeScript', 'Charts', 'GPS Tracking'],
        features: ['Seguimiento deportivo', 'Estadísticas', 'Social features', 'Retos y logros'],
        icon: <FaGamepad className="text-green-500" size={20} />
      },
      {
        name: 'Fyself Translator',
        description: 'Servicio de traducción con IA y corrección contextual.',
        image: '/projects/fyself-translator.png',
        tech: ['Next.js', 'OpenAI API', 'Web Speech API', 'PWA'],
        features: ['Traducción AI', 'Corrección contextual', 'Soporte offline', 'PWA'],
        icon: <SiTypescript className="text-blue-600" size={20} />
      },
      {
        name: 'Fyself Twinh',
        description: 'Digital twins para gestión de identidad y perfiles verificados.',
        image: '/projects/fyself-twinh.png',
        tech: ['React Native', 'Blockchain', 'Biometrics', 'Zero Knowledge'],
        features: ['Identidad digital', 'Biometría avanzada', 'Zero-knowledge proofs', 'Integración blockchain'],
        icon: <SiFirebase className="text-orange-500" size={20} />
      }
    ]
  },
  uci: {
    title: 'Proyectos Académicos UCI',
    subtitle: 'Desarrollo de software educativo y herramientas para la enseñanza',
    projects: [
      {
        name: 'Curso de Desarrollo de Software',
        description: 'Impartición de clases presenciales sobre desarrollo de software. Enseñanza práctica de tecnologías y metodologías de desarrollo.',
        image: '/avatar.webp',
        tech: ['Docencia', 'Desarrollo de Software', 'Metodologías'],
        features: ['Clases presenciales', 'Enseñanza práctica', 'Tecnologías modernas', 'Metodologías de desarrollo'],
        icon: <FaDatabase className="text-blue-700" size={20} />
      },
      {
        name: 'Robótica industrial (aprendizaje)',
        description: 'Aprendizaje, investigación y práctica personal en robótica industrial y simulación 3D. No es un proyecto específico, sino una línea de estudio en la que estoy comenzando.',
        image: '/avatar.webp',
        tech: ['Robótica', 'Simulación 3D', 'Arduino', 'Control'],
        features: ['Estudio autodidacta', 'Prácticas básicas con hardware', 'Exploración de simulación 3D', 'Aprendizaje en progreso'],
        icon: <FaTools className="text-orange-600" size={20} />
      }
    ]
  },
  xetid: {
    title: 'Proyectos XETID',
    subtitle: 'Desarrollo durante prácticas profesionales',
    projects: [
      {
        name: 'Sistema de Gestión Interna',
        description: 'ERP custom para gestión de recursos humanos y proyectos.',
        image: '/avatar.webp',
        tech: ['React', 'TypeScript', 'PostgreSQL', 'Docker'],
        features: ['Gestión RH', 'Control de proyectos', 'Reportes personalizados', 'API REST'],
        icon: <FaDatabase className="text-purple-500" size={20} />
      }
    ]
  }
};

export default function PortfolioPage({ params }: { params: { company: string } }) {
  const router = useRouter();
  const company = params.company;
  const data = projectsData[company as keyof typeof projectsData];

  if (!data) {
    router.push('/');
    return null;
  }

  return (
    <motion.section 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="max-w-5xl mx-auto"
    >
      {/* Header */}
      <motion.div variants={fadeInUp} transition={transition} className="text-center mb-12">
        <button 
          onClick={() => router.push('/')}
          className="mb-6 text-sm text-gray-500 hover:text-red-500 transition-colors"
        >
          ← Volver a Home
        </button>
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">{data.subtitle}</p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.projects.map((project, index) => (
          <motion.div
            key={project.name}
            variants={fadeInUp}
            transition={{ ...transition, delay: index * 0.1 }}
            className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
          >
            {/* Image */}
            <div className="h-48 bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
              {project.image.endsWith('.svg') ? (
                <div className="h-full w-full flex items-center justify-center p-6">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                />
              )}
              <div className="absolute top-4 left-4 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md z-10">
                {project.icon}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Features */}
              <div className="space-y-1">
                {project.features.slice(0, 3).map(feature => (
                  <div key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}