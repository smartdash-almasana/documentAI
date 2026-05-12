"use client";
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email') as string;

    if (!email || !email.includes('@')) {
      setStatus('Por favor, ingresá un correo electrónico válido.');
      return;
    }

    setLoading(true);
    setStatus('Procesando tu solicitud...');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus('Solicitud enviada firmemente. Recibirás respuesta a la brevedad.');
        form.reset();
      } else {
        setStatus('Hubo un inconveniente en la transmisión. Intentá nuevamente.');
      }
    } catch (error) {
       setStatus('Error de conexión. Revisá el estado de tu red y volvé a intentarlo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="auditoria" className="py-32 px-8 bg-[#171614] border-t border-oro/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:items-start justify-between">
        
        <div className="lg:w-1/2">
          <h2 className="font-serif text-5xl md:text-6xl text-arena mb-6 tracking-tight">Iniciá el Proceso</h2>
          <p className="font-sans text-xl text-arena/70 max-w-md leading-relaxed">
            Solicitá una auditoría documental confidencial. Un arquitecto de información evaluará tu ecosistema actual.
          </p>
        </div>

        <div className="lg:w-1/2 bg-carbon border border-oro/20 p-12">
          <form onSubmit={handleSubmit} className="space-y-10">
            
            <div className="relative group">
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder=" "
                className="block w-full bg-transparent border-0 border-b border-arena/20 py-3 text-arena focus:ring-0 focus:border-oro transition-colors peer text-lg outline-none"
              />
              <label 
                htmlFor="name"
                className="absolute left-0 top-3 text-xs uppercase tracking-widest text-arena/50 transition-all peer-focus:-top-4 peer-focus:text-oro peer-focus:text-[10px] peer-valid:-top-4 peer-valid:text-[10px] cursor-text"
              >
                Nombre Completo / Institución
              </label>
            </div>

            <div className="relative group">
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder=" "
                className="block w-full bg-transparent border-0 border-b border-arena/20 py-3 text-arena focus:ring-0 focus:border-oro transition-colors peer text-lg outline-none"
              />
              <label 
                htmlFor="email"
                className="absolute left-0 top-3 text-xs uppercase tracking-widest text-arena/50 transition-all peer-focus:-top-4 peer-focus:text-oro peer-focus:text-[10px] peer-valid:-top-4 peer-valid:text-[10px] cursor-text"
              >
                Correo Electrónico Oficial
              </label>
            </div>
            
            <div className="relative group">
              <input
                type="text"
                name="area"
                id="area"
                required
                placeholder=" "
                className="block w-full bg-transparent border-0 border-b border-arena/20 py-3 text-arena focus:ring-0 focus:border-oro transition-colors peer text-lg outline-none"
              />
              <label 
                htmlFor="area"
                className="absolute left-0 top-3 text-xs uppercase tracking-widest text-arena/50 transition-all peer-focus:-top-4 peer-focus:text-oro peer-focus:text-[10px] peer-valid:-top-4 peer-valid:text-[10px] cursor-text"
              >
                Área de Interés
              </label>
            </div>

            {status && (
              <div className={`text-sm tracking-wide border-l-2 pl-4 py-2 ${status.includes('Error') || status.includes('inconveniente') ? 'text-red-400 border-red-500' : 'text-oro border-oro'}`}>
                {status}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-8 bg-oro text-carbon text-xs uppercase tracking-widest font-semibold py-4 px-10 hover:bg-[#b09462] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Enviar Solicitud
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
