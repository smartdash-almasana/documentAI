export default function Hero() {
  return (
    <section className="relative bg-carbon text-arena pt-40 pb-32 px-8 min-h-[90vh] flex items-center overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--color-oro)_0%,_transparent_40%)] opacity-10 blur-3xl pointer-events-none"></div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* Sacred Modernism Micro-interactions */
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes drawLine {
          0% { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        
        .animate-reveal {
          opacity: 0;
          animation: slideUpFade 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-draw {
          opacity: 0;
          transform-origin: left;
          transform: scaleX(0);
          animation: drawLine 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}} />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Contexto & Copy */}
        <div className="flex flex-col items-start text-left">
          <h1 className="animate-reveal font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.15] tracking-tight mb-6 text-arena">
            Enfocate en tu profesión.
          </h1>
          <p className="animate-reveal font-serif text-2xl md:text-3xl lg:text-4xl mb-12 text-oro/90 max-w-lg leading-snug" style={{ animationDelay: '400ms' }}>
            Nosotros diseñamos tu autoridad.
          </p>
          <div className="animate-reveal" style={{ animationDelay: '800ms' }}>
            <a 
              href="#auditoria" 
              className="inline-block text-xs font-semibold uppercase tracking-widest bg-oro text-carbon px-8 py-4 hover:bg-[#b09462] transition-colors duration-300"
            >
              Solicitar auditoría gratis
            </a>
          </div>
        </div>

        {/* Efecto: Hoja de Papel Técnica (Oscura con líneas doradas) */}
        <div className="animate-reveal relative w-full max-w-[420px] aspect-[4/5] mx-auto flex items-center justify-center lg:ml-auto hidden md:flex" style={{ animationDelay: '500ms' }}>
          
          <div className="absolute w-full h-full bg-[#171614] border border-oro/30 shadow-[0px_10px_40px_rgba(212,180,122,0.05)] p-10 flex flex-col z-20">
            {/* Header del documento simulado */}
            <div className="flex justify-between items-end mb-14 w-full">
              <div className="w-12 h-12 border-2 border-oro/40 flex items-center justify-center">
                <div className="w-2 h-2 bg-oro"></div>
              </div>
              <div className="h-px bg-oro/20 w-3/4 mb-2"></div>
            </div>

            {/* Líneas de texto dibujadas (color oro tenue) */}
            <div className="space-y-6">
              <div className="h-[2px] bg-oro w-full animate-draw" style={{ animationDelay: '1000ms' }}></div>
              <div className="h-[2px] bg-oro/60 w-[90%] animate-draw" style={{ animationDelay: '1200ms' }}></div>
              <div className="h-[2px] bg-oro/40 w-[75%] animate-draw" style={{ animationDelay: '1400ms' }}></div>
              
              <div className="h-px bg-arena/10 w-full my-10"></div>
              
              <div className="h-[2px] bg-oro/70 w-full animate-draw" style={{ animationDelay: '1600ms' }}></div>
              <div className="h-[2px] bg-oro/50 w-[80%] animate-draw" style={{ animationDelay: '1800ms' }}></div>
              <div className="flex gap-4 pt-4">
                <div className="h-[2px] bg-oro/40 w-[40%] animate-draw" style={{ animationDelay: '2000ms' }}></div>
                <div className="h-[2px] bg-oro/20 w-[40%] animate-draw" style={{ animationDelay: '2200ms' }}></div>
              </div>
            </div>

            {/* Sello Final */}
            <div className="mt-auto h-20 w-20 border border-oro/30 rounded-full flex items-center justify-center self-end animate-reveal" style={{ animationDelay: '2500ms' }}>
              <div className="h-16 w-16 border border-oro/50 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-oro rounded-full"></div>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}
