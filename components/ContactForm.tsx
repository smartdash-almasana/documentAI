"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email') as string;

    // Validación Vanilla en el cliente (Minimalismo)
    if (!email || !email.includes('@')) {
      setStatus('Por favor, ingresá un correo electrónico válido.');
      return;
    }

    setLoading(true);
    setStatus('Procesando tu solicitud...');

    /** 
     * [INSTRUCCIÓN DE DEPLOY]: 
     * Reemplazá 'YOUR_FORMSPREE_ID' por el hash real de tu cuenta Formspree
     * Ej: https://formspree.io/f/xqkndawb
     */
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
    <section id="contacto" className="py-32 px-8 bg-hueso border-t border-carbon/10">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl text-carbon mb-6 tracking-tight">Iniciá tu Proyecto</h2>
          <p className="font-sans text-lg text-carbon/70">Completá los detalles a continuación para solicitar una auditoría estructural sin cargo.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          
          <div className="relative group">
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder=" "
              className="block w-full bg-transparent border-0 border-b border-carbon/30 py-4 text-carbon focus:ring-0 focus:border-cobalto transition-colors peer text-lg outline-none"
            />
            <label 
              htmlFor="name"
              className="absolute left-0 top-4 text-xs uppercase tracking-widest text-carbon/50 transition-all peer-focus:-top-4 peer-focus:text-cobalto peer-focus:text-[10px] peer-valid:-top-4 peer-valid:text-[10px] cursor-text"
            >
              Nombre Completo
            </label>
          </div>

          <div className="relative group">
            <input
              type="text"
              name="specialty"
              id="specialty"
              required
              placeholder=" "
              className="block w-full bg-transparent border-0 border-b border-carbon/30 py-4 text-carbon focus:ring-0 focus:border-cobalto transition-colors peer text-lg outline-none"
            />
            <label 
              htmlFor="specialty"
              className="absolute left-0 top-4 text-xs uppercase tracking-widest text-carbon/50 transition-all peer-focus:-top-4 peer-focus:text-cobalto peer-focus:text-[10px] peer-valid:-top-4 peer-valid:text-[10px] cursor-text"
            >
              Especialidad Profesional
            </label>
          </div>

          <div className="relative group">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder=" "
              className="block w-full bg-transparent border-0 border-b border-carbon/30 py-4 text-carbon focus:ring-0 focus:border-cobalto transition-colors peer text-lg outline-none"
            />
            <label 
              htmlFor="email"
              className="absolute left-0 top-4 text-xs uppercase tracking-widest text-carbon/50 transition-all peer-focus:-top-4 peer-focus:text-cobalto peer-focus:text-[10px] peer-valid:-top-4 peer-valid:text-[10px] cursor-text"
            >
              Correo Electrónico
            </label>
          </div>

          {status && (
            <div className={`text-sm tracking-wide border-l-2 pl-4 py-2 ${status.includes('Error') || status.includes('inconveniente') ? 'text-red-700 border-red-700' : 'text-cobalto border-cobalto'}`}>
              {status}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-carbon text-hueso text-xs uppercase tracking-widest font-semibold py-6 mt-10 hover:bg-cobalto hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Enviar Solicitud
          </button>

        </form>
      </div>
    </section>
  );
}
