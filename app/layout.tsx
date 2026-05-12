import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Arquitectura Documental | Soberanía de Datos',
  description: 'Consultoría documental y diseño de autoridad para profesionales en Buenos Aires. Blindaje y soberanía de datos.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Arquitectura Documental",
    "description": "Consultoría y diseño de autoridad documental para profesionales.",
    "areaServed": {
      "@type": "City",
      "name": "Buenos Aires"
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Arquitectura Documental",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Buenos Aires",
        "addressCountry": "AR"
      }
    }
  };

  return (
    <html lang="es-AR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
