import { Scale, ShieldPlus, Brain, Wrench, LockKeyhole } from 'lucide-react';

export default function Content() {
  const areas = [
    { 
      icon: Scale, 
      title: 'Legales', 
      desc: 'Consultoría documental estructural para abogados y firmas jurídicas.' 
    },
    { 
      icon: ShieldPlus, 
      title: 'Salud', 
      desc: 'Protocolos estandarizados y registros médicos de alta fiabilidad y rigor.' 
    },
    { 
      icon: Brain, 
      title: 'Salud Mental', 
      desc: 'Modelos de psicodiagnóstico, evolución técnica y resguardo de confidencialidad.' 
    },
    { 
      icon: Wrench, 
      title: 'Técnica', 
      desc: 'Manuales de procedimiento, especificaciones y guías operativas de ingeniería.' 
    },
  ];

  const activos = [
    'Contratos y Acuerdos Marco', 
    'Guías de Reclamos Operativos', 
    'Informes Médicos Estandarizados', 
    'Modelos de Psicodiagnóstico', 
    'Manuales de Uso y Mantenimiento'
  ];

  return (
    <div className="bg-carbon text-arena">
      {/* Industrias */}
      <section id="industrias" className="py-32 px-8 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-serif text-4xl text-oro mb-6 tracking-tight">Arquitectura Aplicada</h2>
          <div className="h-px bg-oro/30 w-24"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.map((area, i) => (
            <div 
              key={i} 
              className="border border-oro/20 bg-[#171614] p-12 hover:border-oro/50 hover:bg-[#1a1917] transition-all duration-300 group"
            >
              <area.icon 
                className="w-10 h-10 text-oro/60 mb-8 group-hover:text-oro transition-colors" 
                strokeWidth={1}
              />
              <h3 className="font-serif text-3xl text-arena mb-4">{area.title}</h3>
              <p className="font-sans text-arena/70 text-lg leading-relaxed">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Catálogo y Seguridad */}
      <section id="soluciones" className="py-20 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        <div className="md:col-span-7 bg-[#171614] border border-oro/20 p-12 relative shadow-[0px_4px_24px_rgba(0,0,0,0.2)]">
          <h2 className="font-serif text-4xl text-oro mb-14 tracking-tight">Catálogo de Activos</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {activos.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-oro mt-2.5 flex-shrink-0 rounded-sm"></div>
                <span className="font-sans text-lg text-arena/90 tracking-wide">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5 bg-carbon border border-oro/20 p-12 flex flex-col items-center justify-center text-center">
          <LockKeyhole className="w-10 h-10 text-oro mb-6" strokeWidth={1} />
          <p className="font-serif text-3xl text-arena leading-snug tracking-tight">
            Garantía de Soberanía y<br/>Blindaje de Datos
          </p>
          <div className="h-px bg-oro/30 w-16 mt-8"></div>
        </div>
      </section>
    </div>
  );
}
