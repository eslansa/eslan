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
    subtitle: 'Desarrollo de aplicaciones Mobile & Web para clientes en España, EEUU y LATAM',
    projects: [
      // TK Analytics
      {
        client: 'TK Analytics',
        name: 'LIONEC',
        description: 'App de trading y wallet crypto con gráficas en tiempo real, KYC y autenticación 2FA.',
        image: '/projects/Lionec_Oficial_Logo.png',
        tech: ['React Native', 'Expo', 'TypeScript', 'WebSocket'],
        features: ['Trading en tiempo real', 'Wallet crypto', 'KYC verificación', '2FA seguridad'],
        icon: <FaDatabase className="text-yellow-500" size={20} />
      },
      {
        client: 'TK Analytics',
        name: 'Kronos',
        description: 'Sistema RRHH con fichaje GPS, nóminas, gestión de ausencias y generación de documentos.',
        image: '/projects/kronos.png',
        tech: ['React Native', 'TypeScript', 'GPS', 'Reports'],
        features: ['Fichaje GPS', 'Nóminas', 'Gestión de ausencias', 'Generación de documentos'],
        icon: <FaDatabase className="text-indigo-500" size={20} />
      },
      {
        client: 'TK Analytics',
        name: 'CAR',
        description: 'Control de acceso, gestión de habitaciones y servicios para alojamientos.',
        image: '/projects/LogoCAR.png',
        tech: ['React Native', 'Expo', 'Firebase'],
        features: ['Control de acceso', 'Gestión de habitaciones', 'Servicios para huéspedes', 'Panel admin'],
        icon: <FaMobileAlt className="text-blue-500" size={20} />
      },
      {
        client: 'TK Analytics',
        name: 'Plataforma de Desguaces',
        description: 'Plataforma web para gestión integral de desguaces de vehículos.',
        image: '/projects/desguaces.svg',
        tech: ['Next.js', 'PostgreSQL', 'Tailwind CSS'],
        features: ['Catálogo de piezas', 'Búsqueda avanzada', 'Gestión de stock', 'Panel admin'],
        icon: <SiNextdotjs className="text-black dark:text-white" size={20} />
      },
      // Natural Frío — España
      {
        client: 'Natural Frío — España',
        name: 'Natural Frío',
        description: 'Migración del CRM Next.js a aplicación móvil nativa con cobros, firma digital y exportación PDF.',
        image: '/projects/natural-frio.png',
        tech: ['React Native', 'Expo', 'Signature Canvas', 'react-native-html-to-pdf'],
        features: ['Gestión de pedidos', 'Cobros en sitio', 'Firma digital', 'Exportación PDF'],
        icon: <FaTools className="text-blue-500" size={20} />
      },
      // DHM Taxes and More
      {
        client: 'DHM Taxes and More',
        name: 'App de Contenido',
        description: 'App móvil con cursos en video, podcasts y gestión de citas para clientes.',
        image: '/projects/dhm.svg',
        tech: ['React Native', 'Expo', 'expo-audio', 'react-native-video'],
        features: ['Cursos en video', 'Podcasts', 'Gestión de citas', 'Reproductor integrado'],
        icon: <SiNextdotjs className="text-black dark:text-white" size={20} />
      },
      // TaxFinder — EEUU
      {
        client: 'TaxFinder — EEUU',
        name: 'Videollamadas Nativas',
        description: 'App con videollamadas nativas (WebRTC), agenda y mensajería integrada.',
        image: '/projects/taxfinder.png',
        tech: ['React Native', 'Stream.io', 'WebRTC', 'Firebase'],
        features: ['Videollamadas WebRTC', 'Agenda', 'Mensajería', 'Llamadas nativas (Callkeep)'],
        icon: <SiFirebase className="text-orange-500" size={20} />
      },
      // Falcon — EEUU
      {
        client: 'Falcon — EEUU',
        name: 'Falcon',
        description: 'App empresarial modular: soporte in-app, gestión PDF y firma digital.',
        image: '/projects/LogoFalcon.png',
        tech: ['React Native', 'Zendesk', 'react-native-html-to-pdf', 'Signature Canvas'],
        features: ['Soporte in-app (Zendesk)', 'Gestión de PDF', 'Firma digital', 'Arquitectura modular'],
        icon: <FaMobileAlt className="text-red-500" size={20} />
      }
    ]
  },
  personal: {
    title: 'Proyectos Personales',
    subtitle: 'Productos propios y exploraciones técnicas',
    projects: [
      {
        name: 'AdsVisual',
        description: 'Plataforma de acortamiento de URLs con monetización, membresías, campañas CPM y estadísticas geolocalizadas. CTO · 15% acciones.',
        image: '/projects/AdsVisual.jpeg',
        tech: ['Next.js', 'Prisma', 'MariaDB', 'NextAuth', 'Shadcn/UI', 'Zustand'],
        features: ['Acortamiento de URLs', 'Membresías', 'Campañas CPM', 'Estadísticas geolocalizadas'],
        icon: <SiNextdotjs className="text-black dark:text-white" size={20} />
      },
      {
        name: 'Airbnb Clone',
        description: 'Reservas de alojamiento, gestión de disponibilidad y pagos integrados.',
        image: '/projects/airbnb.jpeg',
        tech: ['Next.js', 'Supabase', 'Stripe', 'Radix UI'],
        features: ['Reservas', 'Disponibilidad', 'Pagos integrados', 'Búsqueda avanzada'],
        icon: <SiReact className="text-blue-400" size={20} />
      },
      {
        name: 'Impostor',
        description: 'Juego de mesa digital multijugador tipo Werewolf con rondas de debate y roles secretos.',
        image: '/projects/impostor.png',
        tech: ['Next.js', 'TailwindCSS'],
        features: ['Multijugador', 'Roles secretos', 'Rondas de debate', 'Salas privadas'],
        icon: <FaGamepad className="text-purple-500" size={20} />
      },
      {
        name: 'JP Restaurante',
        description: 'Web de menú y reservas para restaurante.',
        image: '/projects/logo-jp.svg',
        tech: ['Next.js', 'Cloudflare'],
        features: ['Menú digital', 'Reservas online', 'Diseño responsive'],
        icon: <SiNextdotjs className="text-black dark:text-white" size={20} />
      },
      {
        name: 'Quiz App',
        description: 'App móvil de quizzes y cuestionarios interactivos.',
        image: '/projects/quiz.png',
        tech: ['Expo', 'GluestackUI'],
        features: ['Quizzes interactivos', 'Cuestionarios', 'UI nativa'],
        icon: <SiExpo className="text-black dark:text-white" size={20} />
      },
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

type Project = {
  name: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  icon: React.ReactNode;
  client?: string;
};

function groupByClient(projects: Project[]): { client: string | null; items: Project[] }[] {
  const hasAnyClient = projects.some(p => p.client);
  if (!hasAnyClient) return [{ client: null, items: projects }];
  const groups: { client: string | null; items: Project[] }[] = [];
  for (const p of projects) {
    const key = p.client ?? '';
    const last = groups[groups.length - 1];
    if (last && last.client === key) {
      last.items.push(p);
    } else {
      groups.push({ client: key, items: [p] });
    }
  }
  return groups;
}

export default function PortfolioPage({ params }: { params: { company: string } }) {
  const router = useRouter();
  const company = params.company;
  const data = projectsData[company as keyof typeof projectsData];

  if (!data) {
    router.push('/');
    return null;
  }

  const groups = groupByClient(data.projects as Project[]);

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

      {/* Projects */}
      <div className="space-y-10">
        {groups.map((group, gIdx) => (
          <div key={group.client ?? `g-${gIdx}`}>
            {group.client && (
              <h2 className="text-xl font-semibold mb-4 pl-3 border-l-2 border-red-500/70">
                {group.client}
              </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {group.items.map((project, index) => (
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
          </div>
        ))}
      </div>
    </motion.section>
  );
}