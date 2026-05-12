import { Scale, ShieldPlus, Brain, Wrench } from 'lucide-react';

export default function ServicesGrid() {
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

  return (
    <section className="py-32 px-8 bg-hueso">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-serif text-4xl text-carbon mb-6 tracking-tight">Arquitectura Aplicada</h2>
          <div className="h-px bg-carbon/30 w-24"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {areas.map((area, i) => (
            <div 
              key={i} 
              className="border border-carbon/10 bg-white p-12 hover:bg-carbon/5 transition-colors duration-300 group"
            >
              <area.icon 
                className="w-10 h-10 text-carbon/40 mb-10 group-hover:text-cobalto transition-colors" 
                strokeWidth={1}
              />
              <h3 className="font-serif text-3xl text-carbon mb-4">{area.title}</h3>
              <p className="font-sans text-carbon/70 text-lg leading-relaxed">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
