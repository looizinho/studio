"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendContactMessageAction, ContactFormState } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Loader2 } from "lucide-react";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(sendContactMessageAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Sucesso!",
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.status === "error" && !state.errors) {
       toast({
        variant: "destructive",
        title: "Erro",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl md:text-4xl">Entre em Contato</CardTitle>
            <CardDescription>Pronto para transformar sua escola? Envie-nos uma mensagem!</CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={formAction} className="space-y-4">
              <div>
                <Input name="name" placeholder="Seu Nome" aria-label="Seu Nome" />
                {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
              </div>
              <div>
                <Input name="email" type="email" placeholder="Seu Email" aria-label="Seu Email" />
                 {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
              </div>
              <div>
                <Input name="school" placeholder="Nome da Escola" aria-label="Nome da Escola" />
                 {state.errors?.school && <p className="text-sm text-destructive mt-1">{state.errors.school[0]}</p>}
              </div>
              <div>
                <Textarea name="message" placeholder="Sua Mensagem" rows={5} aria-label="Sua Mensagem" />
                 {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
              </div>
              <Button type="submit" disabled={isPending} className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80">
                {isPending ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Send className="mr-2 h-4 w-4" />
                )}
                {isPending ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
