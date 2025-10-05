import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";

export function About() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === "about-us-image");

  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Nossa Missão é Conectar e Inspirar</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Na RioEduConnect, acreditamos que um ambiente escolar visualmente estimulante é fundamental para o aprendizado e desenvolvimento. Nossa missão é transformar escolas em espaços que inspiram alunos, professores e toda a comunidade.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Comunicação Clara</h4>
                  <p className="text-muted-foreground">Benefícios de uma comunicação visual diferenciada que economiza tempo e resolve problemas.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Custo-Benefício</h4>
                  <p className="text-muted-foreground">Planos anuais de pintura e adesivos com excelente custo-benefício para sua instituição.</p>
                </div>
              </li>
               <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Equipe Apaixonada</h4>
                  <p className="text-muted-foreground">Nosso time é composto por designers e especialistas apaixonados por educação e criatividade.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={600}
                height={400}
                className="rounded-lg shadow-xl aspect-video w-full object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
