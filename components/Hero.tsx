export default function Hero() {
  return (
    <section className="bg-carbon text-hueso py-32 px-8 min-h-[85vh] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative">
        <div className="flex flex-col items-start z-10">
          <h1 className="font-serif text-6xl md:text-7xl font-semibold leading-tight tracking-tight mb-8">
            Enfocate en tu<br />profesión.
          </h1>
          <p className="font-sans text-xl mb-12 text-hueso/80 max-w-md leading-relaxed">
            Nosotros diseñamos tu autoridad. Arquitectura de información y soberanía de datos para alta dirección.
          </p>
          <a 
            href="#contacto" 
            className="text-xs font-semibold uppercase tracking-widest border border-hueso px-8 py-4 hover:bg-hueso hover:text-carbon transition-colors"
          >
            Solicitar auditoría gratis
          </a>
        </div>
        
        {/* Aesthetic Document Construction (Abstract) */}
        <div className="relative h-[500px] w-full flex items-center justify-center hidden md:flex">
          <div className="absolute w-48 h-64 bg-carbon border border-hueso/20 transform rotate-[-15deg] -ml-24 shadow-lg"></div>
          <div className="absolute w-56 h-72 bg-[#222] border border-hueso/30 transform rotate-[10deg] shadow-2xl mt-12 ml-12"></div>
          <div className="absolute w-full h-full max-w-[320px] max-h-[420px] bg-hueso text-carbon border border-carbon shadow-2xl flex flex-col p-8 z-20">
            <div className="h-px bg-carbon/20 w-full mb-8"></div>
            <div className="h-2 bg-carbon/20 w-3/4 mb-4"></div>
            <div className="h-2 bg-carbon/20 w-1/2 mb-10"></div>
            <div className="h-px bg-carbon/20 w-full mb-8"></div>
            <div className="h-2 bg-carbon/20 w-full mb-4"></div>
            <div className="h-2 bg-carbon/20 w-5/6 mb-4"></div>
            <div className="h-2 bg-carbon/20 w-4/5 mb-16"></div>
            <div className="mt-auto h-10 border border-carbon w-full flex items-center justify-center">
              <div className="h-1 bg-carbon w-1/3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
