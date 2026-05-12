export default function Hero() {
  return (
    <section className="bg-hueso text-carbon pt-40 pb-32 px-8 min-h-[90vh] flex items-center overflow-hidden relative">
      <style dangerouslySetInnerHTML={{ __html: `
        /* Sacred Modernism Micro-interactions */
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes drawLine {
          0% { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        
        .animate-reveal {
          opacity: 0;
          animation: slideUpFade 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-scale {
          opacity: 0;
          animation: scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-draw {
          opacity: 0;
          transform-origin: left;
          transform: scaleX(0);
          animation: drawLine 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}} />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Contexto & Copy */}
        <div className="flex flex-col items-start z-10">
          <h1 className="animate-reveal font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight mb-8 text-carbon">
            Enfocate en tu práctica.<br />
            Nosotros diseñamos<br />tu autoridad.
          </h1>
          <p className="animate-reveal font-sans text-xl mb-12 text-carbon/80 max-w-lg leading-relaxed" style={{ animationDelay: '200ms' }}>
            Delegá la arquitectura de tu información en expertos. Creamos estructuras documentales que proyectan jerarquía, orden absoluto y protegen tu soberanía de datos.
          </p>
          <a 
            href="#contacto" 
            className="animate-scale text-xs font-semibold uppercase tracking-widest border border-carbon text-carbon px-8 py-4 hover:bg-carbon hover:text-hueso transition-colors duration-500"
            style={{ animationDelay: '400ms' }}
          >
            Solicitá un diagnóstico
          </a>
        </div>

        {/* Efecto: Hoja de Papel Técnica */}
        <div className="animate-reveal relative w-full max-w-[420px] aspect-[4/5] mx-auto flex items-center justify-center lg:ml-auto hidden md:flex" style={{ animationDelay: '300ms' }}>
          
          {/* Sombras ornamentales / Hojas apiladas */}
          <div className="absolute w-[90%] h-[95%] bg-[#F2F1EE] border border-carbon/10 right-0 bottom-0 shadow-sm translate-x-4 translate-y-4"></div>
          
          <div className="absolute w-full h-full bg-white border border-carbon/15 shadow-[0px_4px_24px_rgba(26,26,26,0.06)] p-10 flex flex-col z-20">
            {/* Header del documento */}
            <div className="flex justify-between items-end mb-12 w-full">
              <div className="w-12 h-12 border border-carbon/20 flex items-center justify-center">
                <div className="w-2 h-2 bg-carbon"></div>
              </div>
              <div className="h-px bg-carbon/20 w-3/4 mb-2"></div>
            </div>

            {/* Líneas de texto dibujadas */}
            <div className="space-y-6">
              <div className="h-3 bg-carbon/10 w-full animate-draw" style={{ animationDelay: '800ms' }}></div>
              <div className="h-3 bg-carbon/10 w-[90%] animate-draw" style={{ animationDelay: '950ms' }}></div>
              <div className="h-3 bg-carbon/10 w-[75%] animate-draw" style={{ animationDelay: '1100ms' }}></div>
              
              <div className="h-px bg-carbon/10 w-full my-10"></div>
              
              <div className="h-3 bg-carbon/10 w-full animate-draw" style={{ animationDelay: '1250ms' }}></div>
              <div className="h-3 bg-carbon/10 w-[80%] animate-draw" style={{ animationDelay: '1400ms' }}></div>
              <div className="flex gap-4">
                <div className="h-3 bg-carbon/10 w-[40%] animate-draw" style={{ animationDelay: '1550ms' }}></div>
                <div className="h-3 bg-carbon/5 w-[40%] animate-draw" style={{ animationDelay: '1700ms' }}></div>
              </div>
            </div>

            {/* Sello de Autoridad en Acento Cobalto */}
            <div className="mt-auto h-20 w-20 border border-cobalto/20 rounded-full flex items-center justify-center self-end animate-scale" style={{ animationDelay: '2000ms' }}>
              <div className="h-16 w-16 border border-cobalto/30 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-cobalto rounded-full"></div>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}
