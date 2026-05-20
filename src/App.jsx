import React, { useMemo, useState } from "react";
import { Mail, MapPin, Phone, ExternalLink, Menu, X, Code2, Link } from "lucide-react";
import profilePhoto from "./assets/facundo.jpg";

const content = {
  es: {
    langLabel: "EN",
    nav: [
      { id: "skills", label: "Habilidades" },
      { id: "experience", label: "Experiencia laboral" },
      { id: "university", label: "Proyectos de universidad" },
      { id: "personal", label: "Proyectos personales" },
      { id: "contact", label: "Contacto" },
    ],
    heroSubtitle: "Analista en Computación · Estudiante avanzado de Ingeniería en Computación",
    heroText:
      "Tengo experiencia en desarrollo, mantenimiento y testing de aplicaciones backend y web. He trabajado con tecnologías como Java, Spring Boot, Angular, TypeScript, MongoDB, MySQL, PostgreSQL, servicios REST/SOAP y herramientas de testing automatizado. Me interesa construir soluciones robustas, mantenibles y alineadas con las necesidades del usuario, combinando buenas prácticas de desarrollo con capacidad de aprendizaje y adaptación a nuevos entornos. Además, utilizo herramientas de IA generativa como apoyo para el análisis de código, debugging, documentación técnica y aprendizaje de nuevas tecnologías.",
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
      { title: "Lenguajes", values: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript", "SQL"] },
      { title: "Backend", values: ["Spring Boot", "Spring Framework", "REST APIs", "SOAP", "Java EE", "Servlets", "JSP"] },
      { title: "Frontend", values: ["React", "Angular", "HTML5", "CSS3", "Tailwind CSS", "Swing"] },
      { title: "Bases de datos", values: ["MongoDB", "MySQL", "PostgreSQL"] },
      { title: "Testing y QA", values: ["Selenium", "Cucumber", "TDD", "Postman"] },
      { title: "Herramientas", values: ["Git", "Kafka", "Tomcat", "Vite"] },
    ],
    experience: [
      {
        role: "Desarrollador de Software",
        place: "GEOCOM Uruguay",
        period: "07/2022 — 01/2024",
        points: [
          "Participación en desarrollo, mantenimiento y testing de software en proyectos backend, web y de automatización de pruebas.",
          "Mantenimiento y evolución de subsistemas de promociones para aplicaciones de ventas y finanzas usando Java 6 y servicios SOAP.",
          "Implementación de pruebas automatizadas para sistemas de punto de venta utilizando Java 8 y Cucumber.",
          "Desarrollo de microservicios de contabilidad y reportes con Spring Framework, MongoDB, Kafka y servicios REST, aplicando TDD.",
          "Desarrollo y mantenimiento de funcionalidades frontend con Angular y TypeScript integradas con servicios backend.",
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
        title: "Juego Scoundrel en consola",
        description:
          "Proyecto personal en Python orientado a practicar diseño modular y programación orientada a objetos. Implementa la lógica de un juego solitario de cartas, separación de responsabilidades y visualización de cartas desde consola.",
        tags: ["Python", "Arquitectura", "Consola", "POO"],
        link: "https://github.com/FacundoBacigalupi/scoundrel"
      },
      {
        title: "Página web CV bilingüe",
        description:
          "Sitio personal de una sola página desarrollado con React y Vite. Incluye navegación interna con scroll suave, cambio de idioma ES/EN, diseño responsive, componentes reutilizables y estilos con Tailwind CSS.",        tags: ["React", "UI", "Responsive", "i18n"],
        link: "https://github.com/FacundoBacigalupi/cv-web"
      },
    ],
    footerText: "Disponible para oportunidades de desarrollo de software, backend, web y proyectos técnicos.",
  },
  en: {
    langLabel: "ES",
    nav: [
      { id: "skills", label: "Skills" },
      { id: "experience", label: "Work experience" },
      { id: "university", label: "University projects" },
      { id: "personal", label: "Personal projects" },
      { id: "contact", label: "Contact" },
    ],
    heroSubtitle: "Computer Analyst · Advanced Computer Engineering Student",
    heroText:
      "I have experience in development, maintenance, and testing of backend and web applications. I have worked with technologies such as Java, Spring Boot, Angular, TypeScript, MongoDB, MySQL, PostgreSQL, REST/SOAP services, and automated testing tools. I am interested in building robust, maintainable solutions aligned with user needs, combining good development practices with strong learning ability and adaptability to new environments. I also use generative AI tools to support code analysis, debugging, technical documentation, and learning new technologies.",
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
      { title: "Languages", values: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript", "SQL"] },
      { title: "Backend", values: ["Spring Boot", "Spring Framework", "REST APIs", "SOAP", "Java EE", "Servlets", "JSP"] },
      { title: "Frontend", values: ["React", "Angular", "HTML5", "CSS3", "Tailwind CSS", "Swing"] },
      { title: "Databases", values: ["MongoDB", "MySQL", "PostgreSQL"] },
      { title: "Testing and QA", values: ["Selenium", "Cucumber", "TDD", "Postman"] },
      { title: "Tools", values: ["Git", "Kafka", "Tomcat", "Vite"] },
    ],
    experience: [
      {
        role: "Software Developer",
        place: "GEOCOM Uruguay",
        period: "07/2022 — 01/2024",
        points: [
          "Participated in software development, maintenance, and testing across backend, web, and test automation projects.",
          "Maintained and evolved promotion subsystems for sales and finance applications using Java 6 and SOAP services.",
          "Implemented automated tests for point-of-sale systems using Java 8 and Cucumber.",
          "Developed accounting and reporting microservices using Spring Framework, MongoDB, Kafka, and REST services, applying TDD practices.",
          "Developed and maintained frontend features with Angular and TypeScript integrated with backend services.",
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
        title: "Console Scoundrel Game",
        description:
          "Personal Python project focused on modular design and object-oriented programming. It implements the logic of a solitaire card game, clear responsibility separation, and card visualization through the console.",        link: "#",
        link: "https://github.com/FacundoBacigalupi/scoundrel"
      },
      {
        title: "Bilingual CV Website",
        description:
          "Single-page personal website built with React and Vite. It includes internal smooth-scroll navigation, ES/EN language switching, responsive layout, reusable components, and styling with Tailwind CSS.",        tags: ["React", "UI", "Responsive", "i18n"],
        link: "https://github.com/FacundoBacigalupi/cv-web"
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
                <span className="text-sm text-blue-100/80">{project.period}</span>
              </div>
              <p className="mb-5 leading-7 text-blue-50/85">{project.description}</p>
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
