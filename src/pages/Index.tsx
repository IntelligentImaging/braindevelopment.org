import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResearchAreas from "@/components/ResearchAreas";
import AITools from "@/components/AITools";
import Team from "@/components/Team";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ResearchAreas />
      <AITools />
      <Team />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
