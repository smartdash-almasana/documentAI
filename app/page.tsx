import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Content from '@/components/Content';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-carbon">
      <Header />
      <main className="flex-grow pt-[80px]">
        <Hero />
        <Content />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
