'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  SiNextdotjs, SiPostgresql, SiReact, SiTypescript, SiExpo, SiOpenai,
  SiSupabase, SiPrisma, SiStripe, SiTailwindcss, SiCloudflare, SiRedux, SiSanity,
  SiJavascript, SiHtml5,
} from 'react-icons/si';
import { FaRobot, FaMobileAlt, FaTerminal } from 'react-icons/fa';

export const runtime = 'edge';

// Función para calcular la edad automáticamente
function getAge(): number {
  const birthDate = new Date(2001, 7, 1); // 1 de agosto de 2001 (mes 7 porque enero es 0)
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}

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

export default function Page() {
  const age = getAge();
  const router = useRouter();
  const experienceCardClassName =
    'experience-card flex cursor-pointer items-start justify-between gap-4 rounded-md border border-gray-900 p-3 shadow-sm shadow-red-950 hover:shadow-md dark:border-gray-900';

  const handleExperienceClick = (company: string) => {
    router.push(`/portfolio/${company}`);
  };

  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="max-w-3xl mx-auto"
    >
      {/* Header con Avatar */}
      <motion.div
        variants={fadeInUp}
        className="flex flex-col items-center text-center mb-8 pt-4"
      >
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-red-500/30 dark:border-red-500/20">
          <Image
            src="/avatar.webp"
            alt="Avatar de Eslán"
            width={150}
            height={150}
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-2xl font-bold mb-2">
          Eslán Sánchez
        </h1>
        <p className="text-red-500 font-medium">
          Desarrollador Full Stack & Mobile
        </p>
      </motion.div>

      {/* Bio */}
      <motion.div
        variants={fadeInUp}
        transition={transition}
        className="mb-8 p-4 border border-gray-200 dark:border-gray-800 rounded-md dark:bg-gray-950/50"
      >
        <p className="text-center text-lg leading-relaxed">
          Desarrollador full stack & mobile con cerca de <strong>5 años de experiencia</strong> con clientes y empresas.
          Soy de Cuba, tengo {age} años. Actualmente trabajo en la Universidad de Ciencias Informáticas,
          donde he colaborado como profesor y en distintos proyectos, además de proyectos freelance.
          Me apasiona aprender nuevas tecnologías y compartir conocimiento.
          Actualmente explorando nuevas tecnologías de forma autodidacta, con especial interés
          en el desarrollo asistido por IA y herramientas que potencian la productividad del desarrollador.
        </p>
      </motion.div>

      {/* Experiencia Laboral - Actual */}
      <motion.div variants={fadeInUp} transition={transition} className="mb-8">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b dark:border-gray-800">
          Experiencia Actual
        </h2>
        <div className="space-y-4">
          <div
            className={experienceCardClassName}
            onClick={() => handleExperienceClick('uci')}
          >
            <div className="neon-top"></div>
            <div className="neon-right"></div>
            <div className="neon-bottom"></div>
            <div className="neon-left"></div>
            <div>
              <h3 className="font-medium">Desarrollador de Software</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Universidad de Ciencias Informáticas (UCI)</p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">Colaboraciones como profesor y en distintos proyectos.</p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">La Habana, Cuba</p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-500">oct. 2025 - Presente</span>
          </div>

          <div
            className={experienceCardClassName}
            onClick={() => handleExperienceClick('freelance')}
          >
            <div className="neon-top"></div>
            <div className="neon-right"></div>
            <div className="neon-bottom"></div>
            <div className="neon-left"></div>
            <div>
              <h3 className="font-medium">Software Developer · Freelance</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Desarrollo de aplicaciones Mobile & Web</p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">Remoto · La Habana, Cuba</p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-500">oct. 2025 - Presente</span>
          </div>

          <div
            className={experienceCardClassName}
            onClick={() => handleExperienceClick('personal')}
          >
            <div className="neon-top"></div>
            <div className="neon-right"></div>
            <div className="neon-bottom"></div>
            <div className="neon-left"></div>
            <div>
              <h3 className="font-medium">Proyectos Personales</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Productos propios y exploraciones técnicas</p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">AdsVisual · Airbnb Clone · Impostor · JP Restaurante · Quiz App</p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-500">2021 - Presente</span>
          </div>
        </div>
      </motion.div>

      {/* Experiencia Previa */}
      <motion.div variants={fadeInUp} transition={transition} className="mb-8">
        <h2 className="text-lg font-semibold mb-3 pb-2 border-b dark:border-gray-800 text-gray-600 dark:text-gray-400">
          Experiencia Previas
        </h2>
        <div className="space-y-3 text-sm">
          <div
            className={experienceCardClassName}
            onClick={() => handleExperienceClick('fyself')}
          >
            <div className="neon-top"></div>
            <div className="neon-right"></div>
            <div className="neon-bottom"></div>
            <div className="neon-left"></div>
            <div>
              <h3 className="font-medium">Frontend Developer</h3>
              <p className="text-gray-600 dark:text-gray-400">Fyself · Part-time</p>
            </div>
            <span className="text-gray-500 dark:text-gray-500">jun. 2024 - ene. 2026</span>
          </div>

          <div
            className={experienceCardClassName}
            onClick={() => handleExperienceClick('xetid')}
          >
            <div className="neon-top"></div>
            <div className="neon-right"></div>
            <div className="neon-bottom"></div>
            <div className="neon-left"></div>
            <div>
              <h3 className="font-medium">Frontend Web Developer</h3>
              <p className="text-gray-600 dark:text-gray-400">XETID · Prácticas</p>
            </div>
            <span className="text-gray-500 dark:text-gray-500">feb. 2023 - jun. 2024</span>
          </div>
        </div>
      </motion.div>

      {/* Educación */}
      <motion.div variants={fadeInUp} transition={transition} className="mb-8">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b dark:border-gray-800">
          Educación
        </h2>
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">Ingeniería en Ciencias Informáticas</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Universidad de Ciencias Informáticas, La Habana</p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-500">2021 - 2024</span>
          </div>
        </div>
      </motion.div>

      {/* Habilidades - Organizadas por categoría */}
      <motion.div variants={fadeInUp} transition={transition} className="mb-8">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b dark:border-gray-800">
          Habilidades
        </h2>

        {/* Mobile Development */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">
            Mobile Development
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              <SiReact className="mr-2 text-blue-500" size={16} />
              React Native
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              <SiExpo className="mr-2" size={16} />
              Expo / Expo Router
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              <FaMobileAlt className="mr-2" size={16} />
              NativeWind
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              <FaMobileAlt className="mr-2" size={16} />
              GluestackUI
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              <SiOpenai className="mr-2 text-orange-500" size={16} />
              Firebase
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              Stream.io (WebRTC)
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              expo-audio
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              react-native-video
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              expo-location (GPS)
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              react-native-html-to-pdf
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              Signature Canvas
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              QR Code
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              Zendesk in-app
            </span>
          </div>
        </div>

        {/* Web Development */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">
            Web Development
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              <SiReact className="mr-2 text-blue-400" size={16} />
              React
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              <SiNextdotjs className="mr-2" size={16} />
              Next.js
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              <SiTypescript className="mr-2 text-blue-600" size={16} />
              TypeScript
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              <SiJavascript className="mr-2 text-yellow-400" size={16} />
              JavaScript
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              <SiHtml5 className="mr-2 text-orange-500" size={16} />
              HTML / CSS
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              <SiTailwindcss className="mr-2 text-cyan-400" size={16} />
              Tailwind / Shadcn UI
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              <SiSupabase className="mr-2 text-green-500" size={16} />
              Supabase
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              <SiPostgresql className="mr-2 text-blue-700" size={16} />
              PostgreSQL / MariaDB
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              <SiPrisma className="mr-2" size={16} />
              Prisma ORM
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              NextAuth
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              <SiCloudflare className="mr-2 text-orange-500" size={16} />
              Cloudflare
            </span>
          </div>
        </div>

        {/* Estado & Datos */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">
            Estado & Datos
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              Zustand
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              <SiRedux className="mr-2 text-purple-500" size={16} />
              Redux
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              TanStack Query
            </span>
          </div>
        </div>

        {/* Pagos & Contenido */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">
            Pagos & Contenido
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              <SiStripe className="mr-2 text-indigo-500" size={16} />
              Stripe
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              <SiSanity className="mr-2 text-red-500" size={16} />
              Sanity CMS
            </span>
          </div>
        </div>

        {/* AI & Innovation */}
        <div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">
            AI & Engineering
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              <FaRobot className="mr-2 text-purple-500" size={16} />
              Agentic Workflows
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              <FaTerminal className="mr-2" size={16} />
              MCP & CLI Tools
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              <SiOpenai className="mr-2" size={16} />
              LLM Integration
            </span>
          </div>
        </div>
      </motion.div>

      {/* Estilos para el efecto de borde neón animado */}
      <style jsx global>{`
        .experience-card {
          position: relative;
          background: transparent;
          transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;
          overflow: visible;
        }

        .experience-card:hover {
          transform: translateY(-2px);
        }

        /* Líneas de neón para cada lado */
        .experience-card .neon-top,
        .experience-card .neon-right,
        .experience-card .neon-bottom,
        .experience-card .neon-left {
          position: absolute;
          background: linear-gradient(90deg, #ef4444, #f97316, #ef4444);
          opacity: 0;
          transition: opacity 0.3s ease;
          box-shadow: 0 0 10px #ef4444, 0 0 20px #ef4444, 0 0 30px #ef4444;
        }

        .experience-card:hover .neon-top,
        .experience-card:hover .neon-right,
        .experience-card:hover .neon-bottom,
        .experience-card:hover .neon-left {
          opacity: 1;
        }

        /* Top - se mueve de izquierda a derecha */
        .neon-top {
          top: -2px;
          left: 0;
          width: 0;
          height: 3px;
          animation: none;
        }

        .experience-card:hover .neon-top {
          animation: move-top 3s linear infinite;
        }

        /* Right - se mueve de arriba a abajo */
        .neon-right {
          top: 0;
          right: -2px;
          width: 3px;
          height: 0;
          animation: none;
        }

        .experience-card:hover .neon-right {
          animation: move-right 3s linear infinite;
          animation-delay: 0.75s;
        }

        /* Bottom - se mueve de derecha a izquierda */
        .neon-bottom {
          bottom: -2px;
          right: 0;
          width: 0;
          height: 3px;
          animation: none;
        }

        .experience-card:hover .neon-bottom {
          animation: move-bottom 3s linear infinite;
          animation-delay: 1.5s;
        }

        /* Left - se mueve de abajo a arriba */
        .neon-left {
          bottom: 0;
          left: -2px;
          width: 3px;
          height: 0;
          animation: none;
        }

        .experience-card:hover .neon-left {
          animation: move-left 3s linear infinite;
          animation-delay: 2.25s;
        }

        @keyframes move-top {
          0% { width: 0; left: 0; }
          25% { width: 100%; left: 0; }
          50% { width: 0; left: 100%; }
          100% { width: 0; left: 100%; }
        }

        @keyframes move-right {
          0% { height: 0; top: 0; }
          25% { height: 100%; top: 0; }
          50% { height: 0; top: 100%; }
          100% { height: 0; top: 100%; }
        }

        @keyframes move-bottom {
          0% { width: 0; right: 0; }
          25% { width: 100%; right: 0; }
          50% { width: 0; right: 100%; }
          100% { width: 0; right: 100%; }
        }

        @keyframes move-left {
          0% { height: 0; bottom: 0; }
          25% { height: 100%; bottom: 0; }
          50% { height: 0; bottom: 100%; }
          100% { height: 0; bottom: 100%; }
        }
      `}</style>
    </motion.section>
  );
}
