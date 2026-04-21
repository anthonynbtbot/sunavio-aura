import { useLenis } from "@/hooks/useLenis";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Simulator } from "@/components/sections/Simulator";
import { Segments } from "@/components/sections/Segments";
import { Approach } from "@/components/sections/Approach";
import { Cases } from "@/components/sections/Cases";
import { WhySunavio } from "@/components/sections/WhySunavio";
import { FinalCTA } from "@/components/sections/FinalCTA";

const Index = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-bg text-wh">
      <Header />
      <main>
        <Hero />
        <Simulator />
        <Segments />
        <Approach />
        <Cases />
        <WhySunavio />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
