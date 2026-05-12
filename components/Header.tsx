import { Grid2X2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-hueso border-b border-carbon/10 px-8 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Grid2X2 className="w-6 h-6 text-carbon" strokeWidth={1.5} />
          <span className="font-serif text-xl tracking-tight uppercase font-medium leading-none">
            Arquitectura<br />Documental
          </span>
        </div>
        <a 
          href="#contacto" 
          className="text-xs font-semibold uppercase tracking-widest border border-carbon px-6 py-3 hover:bg-carbon hover:text-hueso transition-colors"
        >
          Solicitar Auditoría
        </a>
      </div>
    </header>
  );
}
