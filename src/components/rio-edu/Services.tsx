import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Paintbrush, LayoutTemplate, MessageSquare, Instagram } from "lucide-react";

const services = [
  {
    icon: <Paintbrush className="h-8 w-8 text-primary" />,
    title: "Pintura e Adesivos Anuais",
    description: "Renove a aparência da sua escola anualmente com nossos planos de pintura e adesivagem, garantindo um ambiente sempre vibrante e acolhedor.",
  },
  {
    icon: <LayoutTemplate className="h-8 w-8 text-primary" />,
    title: "Identidade Visual Unificada",
    description: "Criamos uma comunicação visual coesa que fortalece a marca da sua escola, desde a fachada até os materiais de sinalização interna.",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: "Consultoria de Comunicação",
    description: "Oferecemos consultoria especializada para otimizar a comunicação visual da sua instituição, focando em clareza, impacto e engajamento.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Nossos Serviços</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para a comunicação visual da sua escola.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="text-center flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  {service.icon}
                </div>
                <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild variant="outline">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" />
              Veja nosso Portfólio no Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
