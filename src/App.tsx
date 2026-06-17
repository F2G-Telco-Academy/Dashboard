import { useReveal } from "./lib/useReveal";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import HowItWorks from "./components/sections/HowItWorks";
import UseCases from "./components/sections/UseCases";
import FAQ from "./components/sections/FAQ";

export default function App() {
  useReveal();

  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <UseCases />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
