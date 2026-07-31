import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import PortfolioReveal from "@/components/PortfolioReveal";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <PortfolioReveal />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
