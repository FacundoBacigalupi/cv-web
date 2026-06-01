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
      "Analista en Computación y estudiante avanzado de Ingeniería en Computación en la Universidad de la República. Soy desarrollador de software con experiencia en backend, desarrollo web, mantenimiento de sistemas y testing automatizado, trabajando principalmente con Java, Spring Boot, Angular, TypeScript, bases de datos SQL/NoSQL y servicios REST/SOAP. Me interesa construir software práctico, entender sistemas existentes y mejorar el código para que sea más claro, mantenible y útil para los usuarios. Me considero una persona curiosa, persistente y adaptable, con interés en aprender nuevas tecnologías aplicándolas en proyectos reales. También utilizo herramientas de IA generativa como apoyo para debugging, análisis de código, documentación técnica y aprendizaje, revisando y validando los resultados como parte de mi proceso de desarrollo.",
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
      "Experiencia en backend, web y automatización de pruebas.",
      "Uso aplicado de IA generativa para debugging, documentación técnica, análisis de código y aprendizaje.",
      "Interés por soluciones mantenibles, escalables y centradas en el usuario.",
    ],
    skills: [
      { title: "Lenguajes", values: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript", "SQL", "Dart"] },
      { title: "Backend", values: ["Spring Boot", "Spring Framework", "APIs REST", "SOAP", "Java EE", "Servlets", "JSP", "JWT", "WebSocket"] },
      { title: "Frontend / Mobile", values: ["React", "Angular", "Flutter", "HTML5", "CSS3", "Tailwind CSS", "Vite"] },
      { title: "Bases de datos", values: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"] },
      { title: "Testing y QA", values: ["Selenium", "Cucumber", "TDD", "Postman", "JUnit"] },
      { title: "Herramientas", values: ["Git", "Docker", "Maven", "Kafka", "Tomcat"] },
      { title: "IA y productividad", values: ["TensorFlow Lite", "uso aplicado de IA para desarrollo, debugging, documentación y aprendizaje"] },
    ],
    experience: [
      {
        role: "Desarrollador de Software",
        place: "GEOCOM Uruguay",
        period: "07/2022 — 01/2024",
        points: [
          "Participé en el desarrollo, mantenimiento y testing de software en proyectos backend, web y de automatización de pruebas.",
          "Trabajé en el mantenimiento y evolución de subsistemas de promociones para aplicaciones de ventas y finanzas, corrigiendo errores e incorporando nuevas funcionalidades con Java 6 y servicios SOAP.",
          "Implementé pruebas automatizadas para sistemas de punto de venta utilizando Java 8 y Cucumber, contribuyendo a validar flujos críticos del negocio.",
          "Participé en el desarrollo de microservicios de contabilidad y reportes con Spring Framework, MongoDB, Kafka y servicios REST, aplicando prácticas de TDD.",
          "Desarrollé y mantuve funcionalidades frontend con Angular y TypeScript integradas con servicios backend, y automaticé pruebas para un sitio web de contabilidad utilizando Java, Spring Boot, Selenium y Cucumber.",
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
        title: "Página web CV bilingüe",
        description:
          "Desarrollo de una página web personal de una sola página utilizando React y Vite. Implementación de navegación interna con scroll suave, cambio de idioma Español/Inglés, diseño responsive, enlaces a proyectos y sección de contacto. Uso de Tailwind CSS, lucide-react, GitHub Pages y GitHub Actions para construir y desplegar una interfaz moderna de presentación profesional.",
        tags: ["React", "Vite", "Tailwind CSS", "i18n"],
        link: "https://github.com/FacundoBacigalupi/cv-web"
      },
      {
        title: "Juego Scoundrel en consola",
        description:
          "Desarrollo de una implementación en Python del juego solitario de cartas Scoundrel, ejecutado desde consola. Implementación de mecánicas de exploración de habitaciones, combate contra monstruos, uso de pociones, equipamiento de armas y condiciones de victoria/derrota. Diseño de una arquitectura modular separando cartas, mazo, jugador, lógica de juego e interfaz de consola.",
        tags: ["Python", "POO", "Arquitectura", "Consola"],
        link: "https://github.com/FacundoBacigalupi/scoundrel"
      },
      {
        title: "Clear the Dungeon",
        description:
          "Desarrollo de un juego de cartas single-player en Godot 4 basado en la limpieza táctica de un dungeon. Implementación de cartas de monstruos, cartas de poder, Jokers, layouts alternativos, condiciones de victoria/derrota, sistema de daño y variantes opcionales de reglas. Trabajo sobre interfaz gráfica, estados de juego, manejo de turnos, lógica de selección de cartas y exportación para Windows.",
        tags: ["Godot", "C#", "Game Dev", "Táctico"],
        link: "#"
      },
      {
        title: "uconvert",
        description:
          "Desarrollo de una herramienta CLI local en Python para conversión y procesamiento de archivos. Implementación de funcionalidades para convertir imágenes, documentos, PDFs, audio/video, ebooks y datos GIS mediante integración con herramientas externas como Pillow, Pandoc, Typst, FFmpeg, GDAL, Calibre, Ghostscript, ImageMagick y qpdf. Soporte para instalación local o uso mediante Docker, junto con comandos de conversión por archivo y procesamiento por lotes.",
        tags: ["Python", "CLI", "Docker", "Conversión"],
        link: "#"
      },
      {
        title: "Smart Photo Editor",
        description:
          "Desarrollo de un editor de fotos web basado en canvas, orientado a desktop y mobile. Implementación de canvas con capas, historial de cambios, zoom, paneo, pincel, borrador, formas, texto, relleno, cuentagotas, selección de píxeles, recorte, filtros y exportación con área seleccionable. Integración de frontend en React con Fabric.js y backend en Express, con soporte para edición con IA, múltiples proveedores, temas visuales y diez idiomas.",
        tags: ["React", "Express", "Canvas", "Fabric.js"],
        link: "#"
      },
      {
        title: "Mi Stock",
        description:
          "Desarrollo de una aplicación móvil de gestión de inventario y stock para Android utilizando Flutter. Implementación de alta, edición y eliminación de productos con múltiples fotos, escaneo de códigos de barras, movimientos de stock, historial, ventas, carrito de compras, reportes en PDF/XLS y dashboard. Integración de SQLite, Riverpod, Material 3, internacionalización y búsqueda visual offline mediante TensorFlow Lite con MobileNet V3 Small.",
        tags: ["Flutter", "Android", "SQLite", "TensorFlow Lite"],
        link: "#"
      },
      {
        title: "Download Manager",
        description:
          "Desarrollo de una aplicación desktop en Python y PySide6 para descargar archivos desde listas de URLs. Implementación de carga de enlaces desde archivos links.txt o JSON, agregado manual de URLs, descargas concurrentes configurables, pausa, reanudación, reintentos y verificación SHA256. Uso de SQLite para historial de descargas, detección de duplicados, configuración persistente y organización de la cola de descarga.",
        tags: ["Python", "PySide6", "Desktop", "SQLite"],
        link: "#"
      },
      {
        title: "CipherChat",
        description:
          "Desarrollo de un prototipo educativo de mensajería cifrada de extremo a extremo. Implementación de frontend en React y TypeScript, backend en Spring Boot 3 con Java 21, autenticación JWT, PostgreSQL, Flyway, Spring Data JPA, WebSocket/STOMP y despliegue local con Docker Compose. Soporte para múltiples dispositivos por usuario, generación de claves en el navegador, almacenamiento local de claves privadas en IndexedDB, envío de mensajes cifrados por dispositivo, chats directos y grupales, verificación de identidad y restauración de historial cifrado.",
        tags: ["React", "Spring Boot", "WebSocket", "Criptografía"],
        link: "#"
      },
      {
        title: "HomeCinema",
        description:
          "Desarrollo de un servidor multimedia personal para red LAN con interfaz tipo streaming. Implementación de backend en Spring Boot, frontend en React y TypeScript, base de datos SQLite, migraciones con Flyway, integración con TMDb y reproducción de video mediante HLS usando FFmpeg. Soporte para escaneo de biblioteca local, búsqueda de catálogo, guardado de progreso de reproducción, generación de manifiestos HLS, modo portable en Windows y navegación compatible con browser y Android TV.",
        tags: ["Spring Boot", "React", "FFmpeg", "HLS"],
        link: "#"
      },
      {
        title: "DashForge 3D",
        description:
          "Desarrollo de un juego 3D tipo obstacle-runner construido en C11 con OpenGL 3.3 Core. Implementación de cinco niveles oficiales, editor de niveles con guardado/carga, niveles personalizados, exportación mediante archivos .dash, HUD con barra de progreso y tres modos de cámara. Uso de GLFW, GLAD, cglm, stb_image, stb_easy_font, CMake y Ninja, con builds Debug y Release para Windows.",
        tags: ["C11", "OpenGL", "Game Dev", "3D"],
        link: "#"
      },
      {
        title: "Rubik's Cube 3D",
        description:
          "Desarrollo de un juego 3D de Rubik's Cube en Unity 6. Implementación de un cubo 3x3x3 con 27 cubies individuales, rotación de cámara con middle mouse, detección de stickers mediante raycasting y giros de capas con click y arrastre. Desarrollo de funcionalidades de shuffle con temporizador, solve mediante reproducción inversa del historial de movimientos y detección automática de cubo resuelto.",
        tags: ["Unity", "C#", "Game Dev", "3D"],
        link: "#"
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
      "Computer Analyst and advanced Computer Engineering student at Universidad de la República. I am a software developer with experience in backend, web development, maintenance, and automated testing, mainly working with Java, Spring Boot, Angular, TypeScript, SQL/NoSQL databases, and REST/SOAP services. I enjoy understanding how systems work from the inside, improving existing codebases, and building practical solutions that are clear, maintainable, and useful for real users. Through both professional experience and personal projects, I have worked across backend services, frontend interfaces, mobile applications, desktop tools, and local automation. I consider myself curious, persistent, and adaptable. I like learning new technologies by applying them in real projects, solving concrete problems, and improving step by step. I also use generative AI tools as support for debugging, code analysis, technical documentation, and learning, while always reviewing, testing, and adapting the results myself.",
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
      "Experience in backend, web development, and test automation.",
      "Applied use of generative AI for debugging, technical documentation, code analysis, and learning.",
      "Interest in maintainable, scalable, user-centered solutions.",
    ],
    skills: [
      { title: "Languages", values: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript", "SQL", "Dart"] },
      { title: "Backend", values: ["Spring Boot", "Spring Framework", "REST APIs", "SOAP", "Java EE", "Servlets", "JSP", "JWT", "WebSocket"] },
      { title: "Frontend / Mobile", values: ["React", "Angular", "Flutter", "HTML5", "CSS3", "Tailwind CSS", "Vite"] },
      { title: "Databases", values: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"] },
      { title: "Testing and QA", values: ["Selenium", "Cucumber", "TDD", "Postman", "JUnit"] },
      { title: "Tools", values: ["Git", "Docker", "Maven", "Kafka", "Tomcat"] },
      { title: "AI and Productivity", values: ["TensorFlow Lite", "applied use of AI tools for development, debugging, documentation and learning"] },
    ],
    experience: [
      {
        role: "Software Developer",
        place: "GEOCOM Uruguay",
        period: "07/2022 — 01/2024",
        points: [
          "Participated in software development, maintenance, and testing for backend, web, and test automation projects.",
          "Worked on the maintenance and evolution of promotion subsystems for sales and finance applications, fixing bugs and implementing new features using Java 6 and SOAP services.",
          "Implemented automated tests for point-of-sale systems using Java 8 and Cucumber, helping validate critical business flows.",
          "Developed accounting and reporting microservices using Spring Framework, MongoDB, Kafka, and REST services, applying TDD practices.",
          "Contributed to frontend development with Angular and TypeScript, and to web test automation using Java, Spring Boot, Selenium, and Cucumber.",
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
        title: "Bilingual CV Website",
        description:
          "Single-page personal website built with React and Vite. Implemented smooth internal navigation, Spanish/English language switching, responsive design, project links, and a contact section. Used Tailwind CSS, lucide-react, GitHub Pages, and GitHub Actions to build and deploy a modern professional portfolio interface.",
        tags: ["React", "Vite", "Tailwind CSS", "i18n"],
        link: "https://github.com/FacundoBacigalupi/cv-web"
      },
      {
        title: "Scoundrel Console Game",
        description:
          "Developed a Python implementation of the solitaire card game Scoundrel, executed from the console. Implemented room exploration mechanics, combat against monsters, potion usage, weapon equipment, and win/loss conditions. Designed a modular architecture separating cards, deck handling, player logic, game rules, and the console interface.",
        tags: ["Python", "OOP", "Architecture", "Console"],
        link: "https://github.com/FacundoBacigalupi/scoundrel"
      },
      {
        title: "Clear the Dungeon",
        description:
          "Developed a single-player card game in Godot 4 based on tactical dungeon clearing. Implemented monster cards, power cards, Jokers, alternative layouts, win/loss conditions, damage handling, and optional rule variants. Worked on the graphical interface, game states, turn handling, card selection logic, and Windows export.",
        tags: ["Godot", "C#", "Game Dev", "Tactical"],
        link: "#"
      },
      {
        title: "uconvert",
        description:
          "Developed a local Python CLI tool for file conversion and processing. Implemented features for converting images, documents, PDFs, audio/video files, ebooks, and GIS data through integration with external tools such as Pillow, Pandoc, Typst, FFmpeg, GDAL, Calibre, Ghostscript, ImageMagick, and qpdf. Added support for local installation or Docker usage, with commands for single-file conversion and batch processing.",
        tags: ["Python", "CLI", "Docker", "Conversion"],
        link: "#"
      },
      {
        title: "Smart Photo Editor",
        description:
          "Developed a web-based photo editor using canvas, designed for both desktop and mobile. Implemented canvas layers, edit history, zoom, pan, brush, eraser, shapes, text, fill, eyedropper, pixel selection, crop, filters, and export with selectable area. Integrated a React frontend with Fabric.js and an Express backend, with support for AI editing, multiple providers, visual themes, and ten languages.",
        tags: ["React", "Express", "Canvas", "Fabric.js"],
        link: "#"
      },
      {
        title: "Mi Stock",
        description:
          "Developed a mobile inventory and stock management application for Android using Flutter. Implemented product creation, editing and deletion with multiple photos, barcode scanning, stock movements, history, sales, shopping cart, PDF/XLS reports, and a dashboard. Integrated SQLite, Riverpod, Material 3, internationalization, and offline visual search using TensorFlow Lite with MobileNet V3 Small.",
        tags: ["Flutter", "Android", "SQLite", "TensorFlow Lite"],
        link: "#"
      },
      {
        title: "Download Manager",
        description:
          "Developed a desktop application in Python and PySide6 for downloading files from URL lists. Implemented link loading from links.txt or JSON files, manual URL entry, configurable concurrent downloads, pause, resume, retries, and SHA256 verification. Used SQLite for download history, duplicate detection, persistent configuration, and download queue organization.",
        tags: ["Python", "PySide6", "Desktop", "SQLite"],
        link: "#"
      },
      {
        title: "CipherChat",
        description:
          "Developed an educational prototype of an end-to-end encrypted messaging application. Implemented a React and TypeScript frontend, a Spring Boot 3 backend with Java 21, JWT authentication, PostgreSQL, Flyway, Spring Data JPA, WebSocket/STOMP, and local deployment with Docker Compose. Added support for multiple devices per user, browser-side key generation, local private-key storage in IndexedDB, encrypted per-device message delivery, direct and group chats, identity verification, and encrypted history restoration.",
        tags: ["React", "Spring Boot", "WebSocket", "Cryptography"],
        link: "#"
      },
      {
        title: "HomeCinema",
        description:
          "Developed a personal LAN media server with a streaming-style interface. Implemented a Spring Boot backend, React and TypeScript frontend, SQLite database, Flyway migrations, TMDb integration, and video playback through HLS using FFmpeg. Added support for local library scanning, catalog search, playback progress tracking, HLS manifest generation, portable Windows mode, and navigation compatible with browsers and Android TV.",
        tags: ["Spring Boot", "React", "FFmpeg", "HLS"],
        link: "#"
      },
      {
        title: "DashForge 3D",
        description:
          "Developed a 3D obstacle-runner game built in C11 with OpenGL 3.3 Core. Implemented five official levels, a level editor with save/load support, custom levels, export through .dash files, a HUD with progress bar, and three camera modes. Used GLFW, GLAD, cglm, stbimage, stbeasyf ont, CM ake, andN inja, withDebugandReleasebuildsforW indows.",
        tags: ["C11", "OpenGL", "Game Dev", "3D"],
        link: "#"
      },
      {
        title: "Rubik's Cube 3D",
        description:
          "Developed a 3D Rubik's Cube game in Unity 6. Implemented a 3x3x3 cube with 27 individual cubies, camera rotation with middle mouse, sticker detection through raycasting, and layer turns using click and drag. Developed shuffle functionality with a timer, solve functionality through reverse playback of the move history, and automatic solved-state detection.",
        tags: ["Unity", "C#", "Game Dev", "3D"],
        link: "#"
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
              <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-blue-50">{project.period}</span>
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
                <a href={project.link} target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-2 text-blue-50 transition hover:bg-white/20" aria-label="Project link">                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="mb-5 leading-7 text-blue-50/85">{project.description}</p>
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
              <p className="font-bold">Teléfono</p>
              <p className="text-sm text-blue-50/80">{t.contact.phone}</p>
            </a>
            <div className="rounded-2xl bg-white/10 p-5">
              <MapPin className="mb-3" />
              <p className="font-bold">Ubicación</p>
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
