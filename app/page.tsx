import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-carbon">
      <Header />
      <main className="flex-grow pt-[80px]">
        <Hero />
      </main>
    </div>
  );
}
