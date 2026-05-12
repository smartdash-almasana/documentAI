"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevenir scroll cuando el menú mobile está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-carbon border-b border-arena/10 px-6 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo y Nombre */}
          <div className="flex items-center gap-4">
            {/* Reemplazar con el path real de logo.png si es un SVG/Image */}
            <img src="/logo.png" alt="documentIA" className="h-10 w-auto object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
            <span className="font-sans text-xs uppercase tracking-[0.3em] font-medium text-arena">
              Arquitectura Documental
            </span>
          </div>

          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#soluciones" className="text-xs uppercase tracking-widest text-arena/70 hover:text-oro transition-colors">
              Soluciones
            </a>
            <a href="#industrias" className="text-xs uppercase tracking-widest text-arena/70 hover:text-oro transition-colors">
              Industrias
            </a>
            <a 
              href="#auditoria" 
              className="text-xs uppercase tracking-widest text-oro border border-oro px-6 py-3 hover:bg-oro hover:text-carbon transition-colors duration-300"
            >
              Auditoría Gratis
            </a>
          </nav>

          {/* Menú Mobile: Hamburgesa */}
          <button 
            className="md:hidden text-arena hover:text-oro transition-colors"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Overlay Menú Mobile */}
      <div 
        className={`fixed inset-0 z-[60] bg-carbon flex flex-col items-center justify-center transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button 
          className="absolute top-6 right-6 text-arena hover:text-oro transition-colors"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Cerrar menú"
        >
          <X className="w-8 h-8" />
        </button>

        <nav className="flex flex-col items-center gap-12 text-center">
          <a 
            href="#soluciones" 
            className="text-xl font-serif text-arena hover:text-oro transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Soluciones
          </a>
          <a 
            href="#industrias" 
            className="text-xl font-serif text-arena hover:text-oro transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Industrias
          </a>
          <a 
            href="#auditoria" 
            className="text-sm uppercase tracking-widest text-oro border border-oro px-8 py-4 hover:bg-oro hover:text-carbon transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Auditoría Gratis
          </a>
        </nav>
      </div>
    </>
  );
}
