export default function Footer() {
  const curYear = new Date().getFullYear();

  return (
    <footer className="bg-carbon text-hueso py-20 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16">
        <div>
          <span className="font-serif text-3xl uppercase tracking-tighter leading-none block mb-4">
            Arquitectura<br />Documental
          </span>
          <p className="font-sans text-xs text-hueso/50 tracking-widest uppercase">
            © {curYear} Arquitectura Documental.<br />Soberanía y rigor privado.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 text-[11px] uppercase font-semibold tracking-[0.2em]">
          <a href="#" className="text-hueso/60 hover:text-hueso transition-colors">Soberanía de Datos</a>
          <a href="#" className="text-hueso/60 hover:text-hueso transition-colors">Auditoría</a>
          <a href="#" className="text-hueso/60 hover:text-hueso transition-colors">Protocolos</a>
          <a href="#" className="text-hueso/60 hover:text-hueso transition-colors">Desarrollo Documental</a>
        </div>
      </div>
    </footer>
  );
}
