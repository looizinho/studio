import { Header } from "@/components/rio-edu/Header";
import { Hero } from "@/components/rio-edu/Hero";
import { Services } from "@/components/rio-edu/Services";
import { About } from "@/components/rio-edu/About";
import { Testimonials } from "@/components/rio-edu/Testimonials";
import { AIContentTool } from "@/components/rio-edu/AIContentTool";
import { Contact } from "@/components/rio-edu/Contact";
import { Footer } from "@/components/rio-edu/Footer";

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
