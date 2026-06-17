"use client";

import {
  Terminal,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  Menu,
  X,
  Code,
  Briefcase,
  GraduationCap,
  Sparkles,
  Globe,
  Database
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Sistema Integral de Información',
    description: 'Plataforma centralizada diseñada para la gestión unificada de procesos académicos, administrativos y de control escolar en una institución educativa. Permite la administración de expedientes, el seguimiento de trayectorias estudiantiles y la automatización de trámites institucionales mediante una arquitectura escalable y segura.',
    technologies: ['React', 'Laravel', 'PostgreSQL', 'Tailwind CSS'],
    images: [
      '/portafolio/projects/sii/1.png',
      '/portafolio/projects/sii/2.png',
      '/portafolio/projects/sii/3.png',
      '/portafolio/projects/sii/4.png',
      '/portafolio/projects/sii/5.png',
      '/portafolio/projects/sii/6.png',
      '/portafolio/projects/sii/7.png',
      '/portafolio/projects/sii/8.png',
      '/portafolio/projects/sii/11.png',
      '/portafolio/projects/sii/12.png',
      '/portafolio/projects/sii/9.png',
      '/portafolio/projects/sii/10.png',
    ],
  },
  {
    id: 2,
    title: 'ERP de Gestión Deportiva y Administrativa para Escuela de Fútbol Celaya FC',
    description: 'Software integral diseñado para optimizar la administración de procesos operativos, deportivos y financieros dentro de la escuela de fútbol oficial del Celaya FC. El sistema centraliza y automatiza operaciones críticas como el registro y control de expedientes de jugadores y sus tutores, el seguimiento de convocatorias y estadísticas en torneos, la administración de cobros y pagos de mensualidades, y el boletaje para partidos, ofreciendo una plataforma unificada que facilita la gestión del ciclo formativo de los deportistas.',
    technologies: ['Vue', 'Laravel', 'MariaDB', 'PrimeVue', 'StripeAPI'],
    images: [
      '/portafolio/projects/toritos/1.png',
      '/portafolio/projects/toritos/2.png',
      '/portafolio/projects/toritos/3.png',
      '/portafolio/projects/toritos/4.png',
      '/portafolio/projects/toritos/5.png',
      '/portafolio/projects/toritos/6.png',
      '/portafolio/projects/toritos/7.png'
    ],
  },
];

function ProjectCard({ project, onOpenLightbox }: { project: any, onOpenLightbox: (data: { images: string[], index: number }) => void }) {
  const [activeImg, setActiveImg] = useState(0);

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImg((prev) => (prev + 1) % project.images.length);
  };
  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImg((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="project-card">
      <div className="project-gallery">
        <div className="project-image-container">
          <img
            src={project.images[activeImg]}
            alt={`${project.title} screenshot ${activeImg + 1}`}
            className="project-image"
            onClick={() => onOpenLightbox({ images: project.images, index: activeImg })}
            style={{ cursor: 'zoom-in' }}
          />
          {project.images.length > 1 && (
            <>
              <button className="gallery-btn prev" onClick={prevImg} aria-label="Anterior">
                <ChevronLeft size={20} />
              </button>
              <button className="gallery-btn next" onClick={nextImg} aria-label="Siguiente">
                <ChevronRight size={20} />
              </button>
              <div className="gallery-indicators">
                {project.images.map((_: any, idx: number) => (
                  <button
                    key={idx}
                    className={`indicator ${idx === activeImg ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImg(idx);
                    }}
                    aria-label={`Ir a imagen ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech: string, idx: number) => (
            <span key={idx} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function DeveloperTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ type: 'input' | 'output'; text: string }>>([
    {
      type: 'output',
      text: 'Alejandro Mendoza [Versión 2.0.0]\n(c) 2026 Alejandro Mendoza. Todos los derechos reservados.\n\nEscribe "help" para ver la lista de comandos disponibles o haz clic en los accesos rápidos de abajo.'
    }
  ]);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    let reply = '';
    const cmdClean = trimmed.toLowerCase();

    switch (cmdClean) {
      case 'help':
        reply = 'Comandos disponibles:\n  about      - Quién es Alejandro Mendoza\n  skills     - Tecnologías y habilidades principales\n  projects   - Resumen de proyectos destacados\n  contact    - Información de contacto y redes sociales\n  clear      - Limpiar la pantalla de la terminal';
        break;
      case 'about':
        reply = 'Alejandro Mendoza - Desarrollador Web Full Stack\n\nIngeniero en Sistemas Computacionales egresado del Tecnológico Nacional de México, Campus Celaya.\nApasionado por la arquitectura limpia, la automatización y la creación de interfaces de usuario interactivas, fluidas y memorables.';
        break;
      case 'skills':
        reply = 'Habilidades principales:\n  * Frontend: React, Vue, Javascript (ES6), HTML5, CSS3, PrimeVue, Tailwind CSS\n  * Backend : Laravel (PHP), .NET (C#), Java MVC\n  * Base de datos: PostgreSQL, MariaDB, MySQL\n  * Integraciones y APIs: Stripe, RESTful APIs, Git';
        break;
      case 'projects':
        reply = 'Proyectos destacados:\n  1. Sistema Integral de Información: Gestión académica integral (React, Laravel, PostgreSQL, Tailwind).\n  2. ERP Celaya FC Escuela: Administración, finanzas y pasarela Stripe (Vue, Laravel, MariaDB, PrimeVue).';
        break;
      case 'contact':
        reply = 'Información de Contacto:\n  * Correo: mendozaparamo.a@gmail.com\n  * LinkedIn: linkedin.com/in/alejandro-mendoza-paramo\n  * GitHub: github.com/AlejandroMendozaP\n  * Ubicación: Celaya, Guanajuato, México';
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        reply = `Comando no reconocido: "${trimmed}". Escribe "help" para ver la lista de comandos disponibles.`;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'input', text: trimmed },
      { type: 'output', text: reply }
    ]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    }
  };

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <span className="terminal-dot red"></span>
        <span className="terminal-dot yellow"></span>
        <span className="terminal-dot green"></span>
        <span className="terminal-title">visitor@alejandromendoza: ~</span>
      </div>
      <div className="terminal-body" ref={bodyRef}>
        {history.map((line, idx) => (
          <div key={idx}>
            {line.type === 'input' ? (
              <div className="terminal-input-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-output-command">{line.text}</span>
              </div>
            ) : (
              <div className="terminal-output">{line.text}</div>
            )}
          </div>
        ))}
        <div className="terminal-input-line">
          <span className="terminal-prompt">$</span>
          <input
            type="text"
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe help..."
          />
        </div>
        <div className="terminal-btn-grid">
          {['help', 'about', 'skills', 'projects', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              className="terminal-btn"
              onClick={() => executeCommand(cmd)}
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState<{ images: string[], index: number } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Inicio', id: 'home' },
    { name: 'Proyectos', id: 'projects' },
    { name: 'Experiencia', id: 'experience' },
    { name: 'Educación', id: 'education' },
  ];

  return (
    <>
      {/* Background glow orbs */}
      <div className="bg-glow-container">
        <div className="bg-glow-orb orb-1"></div>
        <div className="bg-glow-orb orb-2"></div>
        <div className="bg-glow-orb orb-3"></div>
      </div>

      {/* Floating pill navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <button onClick={() => scrollToSection('home')} className="nav-logo">
            AMP<span></span>
          </button>

          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="nav-link"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-primary"
              style={{ padding: '0.4rem 1.2rem', fontSize: '0.85rem' }}
            >
              Contacto
            </button>
          </div>

          <button
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <main className="container">
        <div className="bento-container">

          {/* CARD 1: HERO (col-8) */}
          <section id="home" className="bento-card col-8 card-hero animate-fade-in">
            <div className="hero-badge">
              <Terminal size={14} />
              <span>Disponible para nuevos proyectos</span>
            </div>
            <h1 className="hero-title">
              Alejandro Mendoza <br />
              <span className="text-gradient">Desarrollador Web Full Stack</span>
            </h1>
            <p className="hero-subtitle">
              Ingeniero en Sistemas Computacionales especializado en crear soluciones escalables, eficientes y visualmente impecables, resolviendo problemas complejos de extremo a extremo.
            </p>
            <div className="hero-actions">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-primary"
              >
                <Mail size={16} />
                Contactar ahora
              </button>
              <a
                href="/portafolio/cv.pdf"
                download
                className="btn btn-secondary"
              >
                <Download size={16} />
                Descargar CV
              </a>
            </div>
          </section>

          {/* CARD 2: QUICK STATUS (col-4) */}
          <div className="bento-card col-4 animate-fade-in" style={{ justifyContent: 'center' }}>
            <h3 className="bento-title"><Sparkles size={18} /> Resumen</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="contact-icon-wrapper" style={{ width: '36px', height: '36px', borderRadius: '8px' }}>
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Egresado</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>TecNM Celaya (2020 - 2024)</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="contact-icon-wrapper" style={{ width: '36px', height: '36px', borderRadius: '8px', color: 'var(--accent-violet)' }}>
                  <Briefcase size={16} />
                </div>
                <div>
                  <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Full Stack Dev</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>ICE México</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="contact-icon-wrapper" style={{ width: '36px', height: '36px', borderRadius: '8px', color: 'var(--accent-rose)' }}>
                  <MapPin size={16} />
                </div>
                <div>
                  <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Ubicación</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Celaya, Guanajuato, México</div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3: INTERACTIVE TERMINAL (col-12) */}
          <div className="bento-card col-12 animate-fade-in">
            <h3 className="bento-title" style={{ marginBottom: '1rem' }}><Terminal size={18} /> Terminal del Desarrollador</h3>
            <DeveloperTerminal />
          </div>

          {/* CARD 4: PROJECTS HEADER (col-12) */}
          <div id="projects" className="col-12" style={{ marginTop: '2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Code size={24} color="var(--accent-cyan)" /> Proyectos Destacados
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '1rem' }}>
              Una selección de los sistemas de producción y plataformas integrales que he diseñado e implementado.
            </p>
          </div>

          {/* CARDS 5 & 6: FEATURED PROJECTS */}
          {projectsData.map((project) => (
            <div key={project.id} className="bento-card col-6" style={{ padding: 0 }}>
              <ProjectCard project={project} onOpenLightbox={setLightboxData} />
            </div>
          ))}

          {/* CARD 7: EXPERIENCE TIMELINE (col-8) */}
          <section id="experience" className="bento-card col-8">
            <h3 className="bento-title"><Briefcase size={18} /> Experiencia Profesional</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-header">
                  <div>
                    <h4 className="timeline-title">Desarrollador Full Stack</h4>
                    <span className="timeline-company">ICE México</span>
                  </div>
                  <span className="timeline-date">Actualidad</span>
                </div>
                <p className="timeline-details">
                  Desarrollo de punta a punta de aplicaciones corporativas. Implementación de dashboards interactivos en React con consumo de APIs eficientes. Diseño de servicios e integraciones robustas en el backend utilizando Laravel (PHP) y .NET (C#), modelando esquemas en bases de datos relacionales y realizando control de calidad de forma continua.
                </p>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-header">
                  <div>
                    <h4 className="timeline-title">Desarrollador de Software</h4>
                    <span className="timeline-company">Sistema Babbel</span>
                  </div>
                  <span className="timeline-date">Prácticas</span>
                </div>
                <p className="timeline-details">
                  Diseño integral de una plataforma interna de gestión y distribución de tareas y flujos de trabajo organizacionales. Construido sobre arquitectura MVC con Java y PostgreSQL, mejorando los tiempos de respuesta del equipo interno.
                </p>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-header">
                  <div>
                    <h4 className="timeline-title">Administrador de Centro de Cómputo</h4>
                    <span className="timeline-company">Tecnológico Nacional de México</span>
                  </div>
                  <span className="timeline-date">Servicio Social</span>
                </div>
                <p className="timeline-details">
                  Soporte técnico integral para hardware, software de laboratorio e infraestructura de red local. Gestión preventiva y correctiva de equipos de cómputo y conectividad en red.
                </p>
              </div>
            </div>
          </section>

          {/* CARD 8: SKILLS GRID (col-4) */}
          <div className="bento-card col-4">
            <h3 className="bento-title"><Code size={18} /> Habilidades</h3>
            <div className="skills-grid">

              <div className="skills-category">
                <span className="skills-category-title"><Globe size={14} /> Frontend</span>
                <div className="skills-list">
                  {['React', 'Vue', 'Javascript', 'HTML5 / CSS3', 'PrimeVue', 'Tailwind CSS'].map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="skills-category">
                <span className="skills-category-title"><Database size={14} /> Backend & DB</span>
                <div className="skills-list">
                  {['Laravel', '.NET', 'Java MVC', 'PostgreSQL', 'MariaDB', 'REST APIs'].map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="skills-category">
                <span className="skills-category-title"><Sparkles size={14} /> Integraciones</span>
                <div className="skills-list">
                  {['Stripe API', 'Git', 'Agile / Scrum', 'CI/CD'].map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* CARD 9: EDUCATION (col-6) */}
          <section id="education" className="bento-card col-6" style={{ justifyContent: 'space-between' }}>
            <div>
              <h3 className="bento-title"><GraduationCap size={18} /> Educación</h3>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Ingeniería en Sistemas Computacionales
              </h4>
              <p style={{ color: 'var(--accent-cyan)', fontWeight: '500', fontSize: '0.95rem', marginBottom: '1rem' }}>
                Tecnológico Nacional de México, Campus Celaya
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Formación orientada a la ingeniería de software interactiva, modelado avanzado de datos, arquitectura de sistemas y seguridad informática.
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--card-border)' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Periodo</span>
              <span style={{ background: 'rgba(139, 92, 246, 0.1)', color: 'var(--accent-violet)', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.85rem', fontWeight: '600' }}>
                2020 — 2025
              </span>
            </div>
          </section>

          {/* CARD 10: CONTACT DETAILS (col-6) */}
          <section id="contact" className="bento-card col-6" style={{ justifyContent: 'space-between' }}>
            <div>
              <h3 className="bento-title"><Mail size={18} /> Contacto</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                ¿Tienes alguna consulta o propuesta interesante? Estoy disponible para charlar.
              </p>

              <div className="contact-grid">
                <a href="mailto:mendozaparamo.a@gmail.com" className="contact-info-row">
                  <div className="contact-icon-wrapper"><Mail size={18} /></div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Enviar correo electrónico</div>
                    <div style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '0.95rem' }}>mendozaparamo.a@gmail.com</div>
                  </div>
                </a>

                <div className="contact-info-row">
                  <div className="contact-icon-wrapper" style={{ color: 'var(--accent-rose)' }}><MapPin size={18} /></div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Ubicación actual</div>
                    <div style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '0.95rem' }}>Celaya, Guanajuato, México</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="social-pill-grid">
              <a href="https://linkedin.com/in/alejandro-mendoza-paramo" className="social-pill" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="https://github.com/AlejandroMendozaP" className="social-pill" target="_blank" rel="noopener noreferrer">
                <Github size={18} /> GitHub
              </a>
            </div>
          </section>

        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Alejandro Mendoza Paramo. Todos los derechos reservados.</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Hecho con Next.js y diseño premium Vanilla CSS</p>
          </div>
        </div>
      </footer>

      {lightboxData && (
        <div className="lightbox-overlay" onClick={() => setLightboxData(null)}>
          <button className="lightbox-close" onClick={() => setLightboxData(null)}>
            <X size={24} color="white" />
          </button>

          <img
            src={lightboxData.images[lightboxData.index]}
            alt="Fullscreen preview"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          {lightboxData.images.length > 1 && (
            <>
              <button
                className="lightbox-btn prev"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxData({
                    ...lightboxData,
                    index: (lightboxData.index - 1 + lightboxData.images.length) % lightboxData.images.length
                  });
                }}
              >
                <ChevronLeft size={28} color="white" />
              </button>
              <button
                className="lightbox-btn next"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxData({
                    ...lightboxData,
                    index: (lightboxData.index + 1) % lightboxData.images.length
                  });
                }}
              >
                <ChevronRight size={28} color="white" />
              </button>
              <div className="lightbox-counter">
                {lightboxData.index + 1} / {lightboxData.images.length}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
