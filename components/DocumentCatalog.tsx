import { LockKeyhole } from 'lucide-react';

export default function DocumentCatalog() {
  const activos = [
    'Contratos y Acuerdos Marco', 
    'Guías de Reclamos Operativos', 
    'Informes Médicos Estandarizados', 
    'Modelos de Psicodiagnóstico', 
    'Manuales de Uso y Mantenimiento'
  ];

  return (
    <section className="py-32 px-8 bg-hueso border-t border-carbon/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        <div className="md:col-span-7 bg-white border border-carbon/10 p-16 shadow-[0px_4px_20px_rgba(26,26,26,0.03)]">
          <h2 className="font-serif text-4xl text-carbon mb-14 tracking-tight">Catálogo de Activos</h2>
          <ul className="space-y-8">
            {activos.map((item, idx) => (
              <li key={idx} className="flex items-center gap-6">
                <div className="w-2 h-2 bg-cobalto flex-shrink-0"></div>
                <span className="font-sans text-xl text-carbon/90 tracking-wide">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5 bg-carbon/5 border border-carbon/10 p-16 flex flex-col items-center justify-center text-center mt-12 md:mt-32">
          <LockKeyhole className="w-12 h-12 text-carbon/50 mb-8" strokeWidth={1} />
          <p className="font-serif text-4xl text-carbon leading-snug tracking-tight">Garantía de Soberanía y<br/>Blindaje de Datos</p>
          <div className="h-px bg-carbon/20 w-16 mt-10"></div>
        </div>

      </div>
    </section>
  );
}
