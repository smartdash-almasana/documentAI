import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import DocumentCatalog from '@/components/DocumentCatalog';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[88px]"> {/* Offset for fixed header */}
        <Hero />
        <ServicesGrid />
        <DocumentCatalog />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
