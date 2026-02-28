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
  X
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Sistema Integral de Información',
    description: 'Plataforma centralizada diseñada para la gestión unificada de procesos académicos, administrativos y de control escolar en una institución educativa. Permite la administración de expedientes, el seguimiento de trayectorias estudiantiles y la automatización de trámites institucionales mediante una arquitectura escalable y segura.',
    technologies: ['React', 'Laravel', 'PostgreSQL', 'Tailwind CSS'],
    images: [
      '/projects/1.png',
      '/projects/2.png',
      '/projects/3.png',
      '/projects/4.png',
      '/projects/5.png'
    ],
  },
];

function ProjectCard({ project, onOpenLightbox }: { project: any, onOpenLightbox: (data: { images: string[], index: number }) => void }) {
  const [activeImg, setActiveImg] = useState(0);

  const nextImg = () => setActiveImg((prev) => (prev + 1) % project.images.length);
  const prevImg = () => setActiveImg((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <div className="glass-card project-card">
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
                    onClick={() => setActiveImg(idx)}
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
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
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
              style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}
            >
              Contactar
            </button>
          </div>

          <button
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-bg-glow"></div>
          <div className="hero-bg-glow-2"></div>

          <div className="container">
            <div className="hero-content animate-fade-in">
              <div className="hero-badge">
                <Terminal size={16} />
                <span>Disponible para nuevos proyectos</span>
              </div>

              <h1 className="hero-title">
                Alejandro Mendoza <br />
                <span className="text-gradient">Desarrollador Web Full Stack</span>
              </h1>

              <p className="hero-subtitle">
                Ingeniero en Sistemas Computacionales enfocado en la resolución
                de problemas complejos a través de soluciones eficientes, escalables
                y con interfaces excepcionales.
              </p>

              <div className="hero-actions">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn btn-primary"
                >
                  <Mail size={18} />
                  Contactar ahora
                </button>
                <a
                  href="/cv.pdf"
                  download
                  className="btn btn-secondary"
                >
                  <Download size={18} />
                  Descargar CV
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <h2 className="section-title">Proyectos Destacados</h2>
            <div className="projects-grid">
              {projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} onOpenLightbox={setLightboxData} />
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <h2 className="section-title">Experiencia Profesional</h2>

            <div className="timeline">
              <div className="timeline-item glass-card" style={{ marginBottom: '2rem', padding: '2rem 2rem 2rem 3.5rem', borderLeft: 'none' }}>
                <div className="timeline-dot"></div>
                <span className="timeline-date">Actualidad</span>
                <h3 className="timeline-title">Desarrollador Full Stack</h3>
                <h4 className="timeline-company">ICE México</h4>
                <p className="timeline-details">
                  Desarrollo y mantenimiento de aplicaciones end-to-end. Diseño e implementación de interfaces interactivas con React.
                  Construcción de APIs y lógica de negocio robusta utilizando Laravel y .NET. Optimización de consultas a la base de datos
                  y aseguramiento de calidad mediante pruebas constantes.
                </p>
              </div>

              <div className="timeline-item glass-card" style={{ marginBottom: '2rem', padding: '2rem 2rem 2rem 3.5rem', borderLeft: 'none' }}>
                <div className="timeline-dot"></div>
                <span className="timeline-date">Anterior</span>
                <h3 className="timeline-title">Desarrollador de Software</h3>
                <h4 className="timeline-company">Sistema Babbel</h4>
                <p className="timeline-details">
                  Creación de un sistema integral de gestión de tareas y flujos de trabajo.
                  Desarrollado en Java con integración a base de datos PostgreSQL.
                  Responsable del modelado de datos, arquitectura MVC y despliegue del aplicativo.
                </p>
              </div>

              <div className="timeline-item glass-card" style={{ padding: '2rem 2rem 2rem 3.5rem', borderLeft: 'none' }}>
                <div className="timeline-dot"></div>
                <span className="timeline-date">Prácticas / Servicio</span>
                <h3 className="timeline-title">Administrador de Centro de Cómputo</h3>
                <h4 className="timeline-company">Tecnológico Nacional de México</h4>
                <p className="timeline-details">
                  Administración de infraestructura tecnológica, mantenimiento preventivo y correctivo de equipos.
                  Soporte técnico a usuarios, configuración de redes locales y gestión de inventarios de software y hardware.
                  Aseguramiento de la operatividad continua de los laboratorios.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <h2 className="section-title">Educación</h2>

            <div className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Ingeniería en Sistemas Computacionales
                </h3>
                <h4 style={{ color: 'var(--accent-cyan)', fontSize: '1.1rem', marginBottom: '1rem' }}>
                  Tecnológico Nacional de México, Campus Celaya
                </h4>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Enfoque especializado en desarrollo de software interactivo, arquitectura de sistemas y bases de datos.
                </p>
              </div>
              <div style={{ textAlign: 'right', minWidth: '150px' }}>
                <span style={{
                  background: 'rgba(139, 92, 246, 0.1)',
                  color: 'var(--accent-violet)',
                  padding: '0.5rem 1rem',
                  borderRadius: '999px',
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}>
                  2020 — 2025
                </span>
                <div style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="var(--accent-cyan)" /> Egresado
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>¿Listo para empezar un proyecto?</h2>

            <div className="social-links">
              <a href="mailto:[EMAIL_ADDRESS]" className="social-link" title="Email" target="_blank" rel="noopener noreferrer">
                <Mail size={20} />
              </a>
              <a href="https://linkedin.com/in/alejandro-mendoza-paramo" className="social-link" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </div>

            <div className="footer-info" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={16} color="var(--accent-cyan)" />
              Celaya, Guanajuato, México
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Alejandro Mendoza Paramo. Todos los derechos reservados.</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>Hecho con Next.js y diseño Vanilla CSS</p>
          </div>
        </div>
      </footer>

      {lightboxData && (
        <div className="lightbox-overlay" onClick={() => setLightboxData(null)}>
          <button className="lightbox-close" onClick={() => setLightboxData(null)}>
            <X size={28} color="white" />
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
                <ChevronLeft size={32} color="white" />
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
                <ChevronRight size={32} color="white" />
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
