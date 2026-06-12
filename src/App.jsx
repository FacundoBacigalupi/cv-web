import React, { useMemo, useState } from "react";
import { Mail, MapPin, Phone, ExternalLink, Menu, X, Code2, Link } from "lucide-react";
import profilePhoto from "./assets/facundo.jpg";

const content = {
  es: {
    langLabel: "EN",
    cvDownloadLabel: "Descargar CV",
    cvFile: "cv-facundo-bacigalupi-es.pdf",
    nav: [
      { id: "skills", label: "Habilidades" },
      { id: "experience", label: "Experiencia laboral" },
      { id: "university", label: "Proyectos de universidad" },
      { id: "personal", label: "Proyectos personales" },
      { id: "contact", label: "Contacto" },
    ],
    heroSubtitle: "Analista en Computación · Estudiante avanzado de Ingeniería en Computación",
    heroText:
      "Soy Analista en Computación y estudiante avanzado de Ingeniería en Computación en la Universidad de la República. Trabajé año y medio como desarrollador en GEOCOM, principalmente en mantenimiento de sistemas backend, testing automatizado y algo de frontend con Angular. En mi tiempo libre me gusta construir cosas: juegos, herramientas de escritorio, apps web y mobile. También uso IA generativa como apoyo para debugging y aprendizaje, pero siempre revisando y validando los resultados yo mismo.",
    sections: {
      intro: "Introducción",
      skills: "Habilidades",
      experience: "Experiencia laboral",
      university: "Proyectos de universidad",
      personal: "Proyectos personales",
      contact: "Información de contacto",
    },
    contact: {
      name: "Facundo Bacigalupi",
      phone: "+598 096 366 633",
      location: "Montevideo, Uruguay",
      email: "bacigalupifacundo@gmail.com",
      linkedin: "LinkedIn",
      linkedinUrl: "https://www.linkedin.com/in/facundobacigalupi/",
      github: "GitHub",
      githubUrl: "https://github.com/FacundoBacigalupi",
    },
    introCards: [
      "Experiencia en backend, testing automatizado y desarrollo web.",
      "Proyectos personales en game dev, ML, mobile, desktop y herramientas CLI.",
      "Uso aplicado de IA generativa para debugging, documentación y aprendizaje.",
    ],
    skills: [
      { title: "Lenguajes", values: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C/C++"] },
      { title: "Backend", values: ["Spring Boot", "Spring Framework", "APIs REST", "SOAP", "Java EE", "Servlets", "JSP"] },
      { title: "Frontend", values: ["Angular", "React", "HTML", "CSS", "Tailwind CSS"] },
      { title: "Bases de datos", values: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"] },
      { title: "Testing y QA", values: ["Selenium", "Cucumber", "JUnit", "Postman", "TDD"] },
      { title: "Herramientas", values: ["Git", "Maven", "Docker", "Kafka", "Tomcat"] },
      { title: "Otros intereses", values: ["Flutter", "Unity", "OpenGL", "TensorFlow Lite"] },
      { title: "Comunicación", values: ["Español nativo", "Inglés avanzado"] },
    ],
    experience: [
      {
        role: "Desarrollador de Software",
        place: "GEOCOM Uruguay",
        period: "07/2022 — 01/2024",
        points: [
          "Participé en tareas de desarrollo, mantenimiento y testing de sistemas backend y web. Trabajé sobre subsistemas de promociones para aplicaciones de ventas y finanzas, corrigiendo errores e incorporando funcionalidades con Java 6 y servicios SOAP.",
          "También implementé pruebas automatizadas para sistemas de punto de venta con Java 8 y Cucumber, ayudando a validar flujos críticos del negocio.",
          "Además, participé en proyectos de contabilidad y reportes usando Spring Framework, MongoDB, Kafka y servicios REST. También realicé mantenimiento frontend con Angular y TypeScript, e implementé pruebas automatizadas con Selenium y Cucumber.",
        ],
      },
    ],
    universityProjects: [
      {
        title: "Bases de Datos",
        period: "03/2025 — 07/2025",
        description:
          "Diseño e implementación de bases de datos relacionales. Trabajo con modelado entidad-relación, álgebra relacional, SQL, dependencias funcionales, normalización, transacciones, concurrencia y recuperación.",
        tags: ["SQL", "Modelado ER", "Normalización", "Transacciones"],
      },
      {
        title: "Redes de Computadoras",
        period: "08/2024 — 12/2024",
        description:
          "Laboratorio con Mininet implementando una aplicación cliente-servidor para generación de tráfico y funcionalidades de routing/forwarding en un router IP dentro de una red emulada.",
        tags: ["TCP/IP", "Mininet", "Routing", "Forwarding"],
      },
      {
        title: "Proyecto de Ingeniería de Software",
        period: "08/2023 — 12/2023",
        description:
          "Extensión de un sistema previamente desarrollado por otro equipo, incorporando nuevas funcionalidades y desarrollando desde cero una aplicación móvil asociada.",
        tags: ["Mobile", "Código existente", "Diseño", "Usuario final"],
      },
      {
        title: "Taller de Programación",
        period: "07/2021 — 11/2021",
        description:
          "Desarrollo de una aplicación Java con Java SE 8 y Java EE, funcionalidades web con Servlets, JSP y Tomcat, e interfaz de administración en Swing.",
        tags: ["Java", "Java EE", "Servlets", "JSP", "Tomcat", "Swing"],
      },
    ],
    personalProjects: [
      {
        title: "Página web CV",
        description:
          "Página web personal hecha con React y Vite. Tiene cambio de idioma español/inglés, navegación con scroll suave y diseño responsive. Deployada en GitHub Pages con GitHub Actions.",
        tags: ["React", "Vite", "Tailwind CSS", "i18n"],
        link: "https://github.com/FacundoBacigalupi/cv-web",
      },
      {
        title: "Juego Scoundrel en consola",
        description:
          "Implementación en Python del juego de cartas solitario Scoundrel. Explorás habitaciones, peleás contra monstruos y usás pociones y armas. Todo desde la consola, con arquitectura modular.",
        tags: ["Python", "POO", "Arquitectura", "Consola"],
        link: "https://github.com/FacundoBacigalupi/scoundrel",
      },
      {
        title: "Clear the Dungeon",
        description:
          "Juego de cartas single-player en Godot 4 basado en el Scoundrel original. Le agregué cartas de poder, Jokers, layouts alternativos y variantes de reglas. Tiene interfaz gráfica y exportación para Windows.",
        tags: ["Godot", "GDScript", "Game Dev", "Cartas"],
        link: "https://github.com/FacundoBacigalupi/clear-the-dungeon",
      },
      {
        title: "uconvert",
        description:
          "Herramienta CLI en Python para convertir archivos de todo tipo: imágenes, documentos, PDFs, audio/video, ebooks y datos GIS. Integra herramientas como FFmpeg, Pandoc, Pillow y GDAL. Se puede usar directo o con Docker.",
        tags: ["Python", "CLI", "Docker", "Conversión"],
        link: "https://github.com/FacundoBacigalupi/converter",
      },
      {
        title: "Smart Photo Editor",
        description:
          "Editor de fotos web basado en canvas para desktop y mobile. Tiene capas, historial de cambios, pinceles, formas, texto, filtros, recorte y exportación. Frontend en React con Fabric.js y backend en Express. Soporta edición con IA.",
        tags: ["React", "Express", "Canvas", "Fabric.js"],
        link: "https://github.com/FacundoBacigalupi/smart-photo-editor",
      },
      {
        title: "Sketch",
        description:
          "Aplicación web que reconoce dibujos hechos a mano usando una red neuronal CNN entrenada con el dataset Quick, Draw! de Google. Dibujás en un canvas y el modelo te dice qué dibujaste, con las 3 predicciones más probables. Stack: React + FastAPI + PyTorch.",
        tags: ["Python", "PyTorch", "React", "FastAPI"],
        link: "https://github.com/FacundoBacigalupi/sketch",
      },
      {
        title: "Mi Stock",
        description:
          "App de inventario y stock para Android hecha con Flutter. Permite manejar productos con fotos, escanear códigos de barras, registrar movimientos y ventas, y generar reportes en PDF/XLS. Tiene búsqueda visual offline con TensorFlow Lite.",
        tags: ["Flutter", "Android", "SQLite", "TensorFlow Lite"],
        link: "https://github.com/FacundoBacigalupi/my-stock",
      },
      {
        title: "Download Manager",
        description:
          "Aplicación desktop en Python con PySide6 para descargar archivos desde listas de URLs. Soporta descargas concurrentes, pausa y reanudación, reintentos y verificación de integridad con SHA256. Historial en SQLite.",
        tags: ["Python", "PySide6", "Desktop", "SQLite"],
        link: "https://github.com/FacundoBacigalupi/download-manager",
      },
      {
        title: "CipherChat",
        description:
          "Prototipo educativo de mensajería con cifrado de extremo a extremo. Las claves se generan en el navegador y las privadas nunca salen del dispositivo. Backend en Spring Boot, frontend en React, WebSocket para mensajería en tiempo real y Docker Compose para levantar todo.",
        tags: ["React", "Spring Boot", "WebSocket", "Criptografía"],
        link: "https://github.com/FacundoBacigalupi/cipher-chat",
      },
      {
        title: "HomeCinema",
        description:
          "Servidor multimedia personal para red local con interfaz tipo streaming. Escanea tu biblioteca, integra metadatos de TMDb y reproduce video con HLS usando FFmpeg. Funciona en cualquier browser y también en Android TV.",
        tags: ["Spring Boot", "React", "FFmpeg", "HLS"],
        link: "https://github.com/FacundoBacigalupi/home-cinema",
      },
      {
        title: "DashForge 3D",
        description:
          "Juego 3D obstacle-runner hecho en C11 con OpenGL 3.3. Tiene cinco niveles, un editor de niveles con guardado/carga, HUD y tres modos de cámara. Sin motor de juego: solo GLFW, GLAD y cglm.",
        tags: ["C11", "OpenGL", "Game Dev", "3D"],
        link: "https://github.com/FacundoBacigalupi/dashforge-3d",
      },
      {
        title: "Rubik's Cube 3D con IA",
        description:
          "Cubo de Rubik 3D en Unity 6 con un solver de IA. El solver usa beam-search guiado por una red neuronal residual (~9.5M parámetros) entrenada en Python. Resuelve cubos con hasta 25 movimientos de mezcla con tasa de éxito cercana al 100%.",
        tags: ["Unity", "C#", "PyTorch", "Game Dev"],
        link: "https://github.com/FacundoBacigalupi/rubkis-cube",
      },
    ],
    footerText: "Disponible para oportunidades de desarrollo de software, backend, web y proyectos técnicos.",
  },
  en: {
    langLabel: "ES",
    cvDownloadLabel: "Download CV",
    cvFile: "cv-facundo-bacigalupi-en.pdf",
    nav: [
      { id: "skills", label: "Skills" },
      { id: "experience", label: "Work experience" },
      { id: "university", label: "University projects" },
      { id: "personal", label: "Personal projects" },
      { id: "contact", label: "Contact" },
    ],
    heroSubtitle: "Computer Analyst · Advanced Computer Engineering Student",
    heroText:
      "I'm a Computer Analyst and advanced Computer Engineering student at Universidad de la República. I worked for about a year and a half as a developer at GEOCOM, mainly on backend system maintenance, test automation, and some Angular frontend work. In my free time I like building things: games, desktop tools, web and mobile apps. I also use generative AI to help with debugging and learning, but I always review and validate the results myself.",
    sections: {
      intro: "Introduction",
      skills: "Skills",
      experience: "Work experience",
      university: "University projects",
      personal: "Personal projects",
      contact: "Contact information",
    },
    contact: {
      name: "Facundo Bacigalupi",
      phone: "+598 096 366 633",
      location: "Montevideo, Uruguay",
      email: "bacigalupifacundo@gmail.com",
      linkedin: "LinkedIn",
      linkedinUrl: "https://www.linkedin.com/in/facundobacigalupi/",
      github: "GitHub",
      githubUrl: "https://github.com/FacundoBacigalupi",
    },
    introCards: [
      "Experience in backend, test automation, and web development.",
      "Personal projects in game dev, ML, mobile, desktop, and CLI tools.",
      "Applied use of generative AI for debugging, documentation, and learning.",
    ],
    skills: [
      { title: "Languages", values: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C/C++"] },
      { title: "Backend", values: ["Spring Boot", "Spring Framework", "REST APIs", "SOAP", "Java EE", "Servlets", "JSP"] },
      { title: "Frontend", values: ["Angular", "React", "HTML", "CSS", "Tailwind CSS"] },
      { title: "Databases", values: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"] },
      { title: "Testing and QA", values: ["Selenium", "Cucumber", "JUnit", "Postman", "TDD"] },
      { title: "Tools", values: ["Git", "Maven", "Docker", "Kafka", "Tomcat"] },
      { title: "Other interests", values: ["Flutter", "Unity", "OpenGL", "TensorFlow Lite"] },
      { title: "Communication", values: ["Native Spanish", "Advanced English"] },
    ],
    experience: [
      {
        role: "Software Developer",
        place: "GEOCOM Uruguay",
        period: "07/2022 — 01/2024",
        points: [
          "Participated in backend and web software development, maintenance, and testing tasks. Worked on promotion subsystems for sales and finance applications, fixing bugs and adding features using Java 6 and SOAP services.",
          "Also implemented automated tests for point-of-sale systems using Java 8 and Cucumber, helping validate critical business flows.",
          "Additionally, participated in accounting and reporting projects using Spring Framework, MongoDB, Kafka, and REST services. Also performed frontend maintenance with Angular and TypeScript, and implemented automated tests with Selenium and Cucumber.",
        ],
      },
    ],
    universityProjects: [
      {
        title: "Databases",
        period: "03/2025 — 07/2025",
        description:
          "Designed and implemented relational database solutions. Worked with entity-relationship modeling, relational algebra, SQL, functional dependencies, normalization, transactions, concurrency, and recovery.",
        tags: ["SQL", "ER modeling", "Normalization", "Transactions"],
      },
      {
        title: "Computer Networks",
        period: "08/2024 — 12/2024",
        description:
          "Lab project using Mininet, implementing a client-server application for traffic generation and routing/forwarding functionalities for an IP router within an emulated network.",
        tags: ["TCP/IP", "Mininet", "Routing", "Forwarding"],
      },
      {
        title: "Software Engineering Project",
        period: "08/2023 — 12/2023",
        description:
          "Extended a system previously developed by another team, adding new features and developing an associated mobile application from scratch.",
        tags: ["Mobile", "Existing codebase", "Design", "End user"],
      },
      {
        title: "Programming Workshop",
        period: "07/2021 — 11/2021",
        description:
          "Developed a Java application using Java SE 8 and Java EE, with web functionality using Servlets, JSP and Tomcat, plus an administrator interface in Swing.",
        tags: ["Java", "Java EE", "Servlets", "JSP", "Tomcat", "Swing"],
      },
    ],
    personalProjects: [
      {
        title: "CV Website",
        description:
          "Personal website built with React and Vite. Has Spanish/English switching, smooth scroll navigation, and responsive design. Deployed on GitHub Pages with GitHub Actions.",
        tags: ["React", "Vite", "Tailwind CSS", "i18n"],
        link: "https://github.com/FacundoBacigalupi/cv-web",
      },
      {
        title: "Scoundrel Console Game",
        description:
          "Python implementation of the Scoundrel solitaire card game. You explore rooms, fight monsters, and use potions and weapons — all from the console. Modular architecture separating cards, deck, player, and game logic.",
        tags: ["Python", "OOP", "Architecture", "Console"],
        link: "https://github.com/FacundoBacigalupi/scoundrel",
      },
      {
        title: "Clear the Dungeon",
        description:
          "Single-player card game in Godot 4 based on the original Scoundrel. Added power cards, Jokers, alternative layouts, and rule variants. Has a graphical interface and is exported for Windows.",
        tags: ["Godot", "GDScript", "Game Dev", "Cards"],
        link: "https://github.com/FacundoBacigalupi/clear-the-dungeon",
      },
      {
        title: "uconvert",
        description:
          "Python CLI tool for converting files of all kinds: images, documents, PDFs, audio/video, ebooks, and GIS data. Integrates tools like FFmpeg, Pandoc, Pillow, and GDAL. Can be used directly or via Docker.",
        tags: ["Python", "CLI", "Docker", "Conversion"],
        link: "https://github.com/FacundoBacigalupi/converter",
      },
      {
        title: "Smart Photo Editor",
        description:
          "Web-based canvas photo editor for desktop and mobile. Has layers, edit history, brushes, shapes, text, filters, crop, and export. React frontend with Fabric.js and Express backend. Supports AI-powered editing.",
        tags: ["React", "Express", "Canvas", "Fabric.js"],
        link: "https://github.com/FacundoBacigalupi/smart-photo-editor",
      },
      {
        title: "Sketch",
        description:
          "Web app that recognizes hand-drawn sketches using a CNN trained on Google's Quick, Draw! dataset. You draw on a canvas and the model tells you what you drew, showing the top 3 predictions. Stack: React + FastAPI + PyTorch.",
        tags: ["Python", "PyTorch", "React", "FastAPI"],
        link: "https://github.com/FacundoBacigalupi/sketch",
      },
      {
        title: "Mi Stock",
        description:
          "Android inventory app built with Flutter. Manage products with photos, scan barcodes, track stock movements and sales, and generate PDF/XLS reports. Has offline visual search powered by TensorFlow Lite.",
        tags: ["Flutter", "Android", "SQLite", "TensorFlow Lite"],
        link: "https://github.com/FacundoBacigalupi/my-stock",
      },
      {
        title: "Download Manager",
        description:
          "Python desktop app with PySide6 for downloading files from URL lists. Supports concurrent downloads, pause and resume, retries, and SHA256 integrity checks. Download history stored in SQLite.",
        tags: ["Python", "PySide6", "Desktop", "SQLite"],
        link: "https://github.com/FacundoBacigalupi/download-manager",
      },
      {
        title: "CipherChat",
        description:
          "Educational prototype of an end-to-end encrypted messaging app. Keys are generated in the browser and private keys never leave the device. Spring Boot backend, React frontend, WebSocket for real-time messaging, and Docker Compose to run everything.",
        tags: ["React", "Spring Boot", "WebSocket", "Cryptography"],
        link: "https://github.com/FacundoBacigalupi/cipher-chat",
      },
      {
        title: "HomeCinema",
        description:
          "Personal LAN media server with a streaming-style interface. Scans your local library, pulls metadata from TMDb, and streams video using HLS with FFmpeg. Works on any browser and on Android TV.",
        tags: ["Spring Boot", "React", "FFmpeg", "HLS"],
        link: "https://github.com/FacundoBacigalupi/home-cinema",
      },
      {
        title: "DashForge 3D",
        description:
          "3D obstacle-runner game written in C11 with OpenGL 3.3. Five official levels, a level editor with save/load, a HUD, and three camera modes. No game engine — just GLFW, GLAD, and cglm.",
        tags: ["C11", "OpenGL", "Game Dev", "3D"],
        link: "https://github.com/FacundoBacigalupi/dashforge-3d",
      },
      {
        title: "Rubik's Cube 3D with AI",
        description:
          "3D Rubik's Cube in Unity 6 with an AI solver. The solver uses beam-search guided by a residual neural network (~9.5M parameters) trained in Python. Solves cubes scrambled up to 25 moves with near-100% success rate.",
        tags: ["Unity", "C#", "PyTorch", "Game Dev"],
        link: "https://github.com/FacundoBacigalupi/rubkis-cube",
      },
    ],
    footerText: "Available for software development, backend, web, and technical project opportunities.",
  },
};

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/20" />
          <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
          <div className="h-px flex-1 bg-white/20" />
        </div>
        {children}
      </div>
    </section>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-blue-50 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

export default function CVWebsite() {
  const [language, setLanguage] = useState("es");
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = content[language];

  const navItems = useMemo(() => t.nav, [t.nav]);

  const handleNavClick = (id) => {
    setMobileOpen(false);
    scrollToSection(id);
  };

  return (
    <main className="min-h-screen bg-[#080b1f] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(147,51,234,0.38),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(37,99,235,0.42),transparent_34%),linear-gradient(135deg,#24115c_0%,#0f2c83_48%,#09112f_100%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090d24]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="rounded-full px-3 py-2 text-sm text-blue-50/85 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`${import.meta.env.BASE_URL}${t.cvFile}`}
              download
              className="hidden rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20 md:inline-flex"
            >
              {t.cvDownloadLabel}
            </a>
            <button
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="relative flex h-11 w-24 items-center rounded-full border border-white/15 bg-white/10 p-1 text-sm font-bold text-white"
              aria-label="Change language"
            >
              <span
                className={`absolute top-1 h-9 w-[44px] rounded-full bg-white transition-all duration-300 ${
                  language === "es" ? "left-1" : "left-[calc(100%-45px)]"
                }`}
              />
              <span className={`relative z-10 flex-1 text-center transition ${language === "es" ? "text-blue-950" : "text-white"}`}>
                ES
              </span>
              <span className={`relative z-10 flex-1 text-center transition ${language === "en" ? "text-blue-950" : "text-white"}`}>
                EN
              </span>
            </button>

            <button
              onClick={() => setMobileOpen((value) => !value)}
              className="rounded-full border border-white/15 bg-white/10 p-2 text-white lg:hidden"
              aria-label="Open menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-[#090d24]/95 px-5 py-4 lg:hidden">
            <nav className="mx-auto grid max-w-6xl gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="rounded-xl px-4 py-3 text-left text-sm text-blue-50 transition hover:bg-white/10"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      <section id="intro" className="scroll-mt-28 pb-12 pt-16 md:pb-20 md:pt-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
              {t.contact.name}
            </h1>
            <p className="mt-4 text-lg font-semibold text-blue-100 md:text-xl">
              {t.heroSubtitle}
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50/85 md:text-xl">
              {t.heroText}
            </p>
          </div>

          <aside className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl shadow-blue-950/30 backdrop-blur-xl">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-cyan-300 p-1 shadow-xl shadow-blue-950/30">
                <img
                  src={profilePhoto}
                  alt="Facundo Bacigalupi"
                  className="h-36 w-36 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 text-blue-50/90">
              <p className="flex items-center gap-3"><Mail size={18} /> {t.contact.email}</p>
              <p className="flex items-center gap-3"><Phone size={18} /> {t.contact.phone}</p>
              <p className="flex items-center gap-3"><MapPin size={18} /> {t.contact.location}</p>
              <a href={t.contact.linkedinUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-white">
                <Link size={18} /> {t.contact.linkedin}
              </a>
              <a href={t.contact.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-white">
                <Code2 size={18} /> {t.contact.github}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <Section id="skills" title={t.sections.skills}>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.skills.map((group) => (
            <article key={group.title} className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl shadow-blue-950/20 backdrop-blur">
              <h3 className="mb-4 text-xl font-bold text-white">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.values.map((value) => <Tag key={value}>{value}</Tag>)}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="experience" title={t.sections.experience}>
        <div className="space-y-6">
          {t.experience.map((job) => (
            <article key={job.role} className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl shadow-blue-950/20 backdrop-blur md:p-8">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                  <p className="text-blue-100">{job.place}</p>
                </div>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-blue-50">{job.period}</span>
              </div>
              <ul className="mt-6 grid gap-3 text-blue-50/90">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="university" title={t.sections.university}>
        <div className="grid gap-5 md:grid-cols-2">
          {t.universityProjects.map((project) => (
            <article key={project.title} className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl shadow-blue-950/20 backdrop-blur">
              <div className="mb-3">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
              <p className="mb-5 leading-7 text-blue-50/85">{project.description}</p>
              {project.tags && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section id="personal" title={t.sections.personal}>
        <div className="grid gap-5 md:grid-cols-2">
          {t.personalProjects.map((project) => (
            <article key={project.title} className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl shadow-blue-950/20 backdrop-blur">
              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <a href={project.link} target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-2 text-blue-50 transition hover:bg-white/20" aria-label="Project link">
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="mb-4 leading-7 text-blue-50/85">{project.description}</p>
              {project.tags && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section id="contact" title={t.sections.contact}>
        <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl shadow-blue-950/30 backdrop-blur md:p-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            <a href={`mailto:${t.contact.email}`} className="rounded-2xl bg-white/10 p-5 transition hover:bg-white/20">
              <Mail className="mb-3" />
              <p className="font-bold">Email</p>
              <p className="break-all text-sm text-blue-50/80">{t.contact.email}</p>
            </a>
            <a href={`tel:${t.contact.phone.replaceAll(" ", "")}`} className="rounded-2xl bg-white/10 p-5 transition hover:bg-white/20">
              <Phone className="mb-3" />
              <p className="font-bold">{language === "es" ? "Teléfono" : "Phone"}</p>
              <p className="text-sm text-blue-50/80">{t.contact.phone}</p>
            </a>
            <div className="rounded-2xl bg-white/10 p-5">
              <MapPin className="mb-3" />
              <p className="font-bold">{language === "es" ? "Ubicación" : "Location"}</p>
              <p className="text-sm text-blue-50/80">{t.contact.location}</p>
            </div>
            <a href={t.contact.linkedinUrl} target="_blank" rel="noreferrer" className="rounded-2xl bg-white/10 p-5 transition hover:bg-white/20">
              <Link className="mb-3" />
              <p className="font-bold">LinkedIn</p>
            </a>
            <a href={t.contact.githubUrl} target="_blank" rel="noreferrer" className="rounded-2xl bg-white/10 p-5 transition hover:bg-white/20">
              <Code2 className="mb-3" />
              <p className="font-bold">GitHub</p>
            </a>
          </div>
        </div>
      </Section>

      <footer className="border-t border-white/10 bg-[#090d24]/80 py-8 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 text-blue-50/80 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {t.contact.name}. {t.footerText}</p>
          <div className="flex gap-3">
            <a href={`mailto:${t.contact.email}`} className="rounded-full bg-white/10 p-3 transition hover:bg-white/20" aria-label="Email"><Mail size={18} /></a>
            <a href={t.contact.linkedinUrl} target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-3 transition hover:bg-white/20" aria-label="LinkedIn"><Link size={18} /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
