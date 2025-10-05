import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    name: "Ana Costa",
    title: "Diretora, Escola Aprender Mais",
    avatarId: "testimonial-avatar-1",
    text: "O trabalho da RioEduConnect transformou nossa escola. A nova identidade visual não só embelezou o ambiente, como também melhorou a organização e a comunicação com os pais. Ganhamos muito tempo!",
  },
  {
    name: "Marcos Vianna",
    title: "Coordenador Pedagógico, Colégio Crescer",
    avatarId: "testimonial-avatar-2",
    text: "Desde que fechamos a parceria, a manutenção visual da escola deixou de ser uma dor de cabeça. O plano anual é prático e o resultado é sempre impecável. Recomendo fortemente.",
  },
  {
    name: "Juliana Pereira",
    title: "Professora, Espaço Infantil Brincar",
    avatarId: "testimonial-avatar-3",
    text: "Os alunos ficaram encantados com as novas cores e os adesivos temáticos nas salas. O ambiente ficou mais alegre e estimulante para o aprendizado. Um trabalho que faz a diferença no dia a dia.",
  },
];

export function Testimonials() {
  const getAvatar = (id: string) => PlaceHolderImages.find((p) => p.id === id);

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">O Que Nossos Clientes Dizem</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback de escolas que confiam em nosso trabalho.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const avatar = getAvatar(testimonial.avatarId);
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6 flex-grow flex flex-col justify-between">
                        <blockquote className="text-foreground/80 italic">
                          “{testimonial.text}”
                        </blockquote>
                        <div className="mt-6 flex items-center">
                          {avatar && (
                             <Avatar className="h-12 w-12 border-2 border-primary/50">
                                <AvatarImage src={avatar.imageUrl} alt={testimonial.name} data-ai-hint={avatar.imageHint} />
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                             </Avatar>
                          )}
                          <div className="ml-4">
                            <p className="font-semibold font-headline">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex" />
          <CarouselNext className="hidden md:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
