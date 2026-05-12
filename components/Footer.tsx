export default function Footer() {
  const curYear = new Date().getFullYear();

  return (
    <footer className="bg-carbon text-arena/70 border-t border-oro/10 py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <span className="font-serif text-3xl uppercase tracking-tighter leading-none block mb-4 text-arena">
            Arquitectura<br />Documental
          </span>
          <p className="font-sans text-xs tracking-widest uppercase">
            © {curYear} Arquitectura Documental. Soberanía y rigor privado.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 md:gap-8 text-[10px] uppercase font-semibold tracking-[0.15em]">
          <a href="#" className="hover:text-oro transition-colors">Soberanía de Datos</a>
          <a href="#" className="hover:text-oro transition-colors">Auditoría</a>
          <a href="#" className="hover:text-oro transition-colors">Protocolos</a>
          <a href="#" className="hover:text-oro transition-colors">Desarrollo Documental</a>
        </div>
      </div>
    </footer>
  );
}
