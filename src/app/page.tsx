import { Header } from "@/components/help/Header";
import { Hero } from "@/components/help/Hero";
import { Services } from "@/components/help/Services";
import { About } from "@/components/help/About";
import { Testimonials } from "@/components/help/Testimonials";
import { AIContentTool } from "@/components/help/AIContentTool";
import { Contact } from "@/components/help/Contact";
import { Footer } from "@/components/help/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <AIContentTool />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
