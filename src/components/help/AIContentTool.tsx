"use client";

import { useActionState, useEffect } from "react";
import { suggestContentAction, AIFormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const initialState: AIFormState = {
  form: {
    websiteCopy: "",
  },
  status: "idle",
  message: "",
};

export function AIContentTool() {
  const [state, formAction, isPending] = useActionState(suggestContentAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.status === "error") {
      toast({
        variant: "destructive",
        title: "Erro",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <section id="ai-tool" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Otimize seu Conteúdo com IA</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            Use nossa ferramenta de inteligência artificial para refinar a apresentação e clareza do seu site.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Card>
            <CardHeader>
              <CardTitle>Análise de Conteúdo</CardTitle>
              <CardDescription>Cole o texto do seu site abaixo e receba sugestões de melhoria.</CardDescription>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-4">
                <Textarea
                  name="websiteCopy"
                  placeholder="Cole seu texto aqui..."
                  rows={10}
                  defaultValue={state.form.websiteCopy}
                  className="bg-background"
                />
                <Button type="submit" disabled={isPending} className="w-full">
                  {isPending ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="mr-2 h-4 w-4" />
                  )}
                  {isPending ? "Analisando..." : "Gerar Sugestões"}
                </Button>
              </form>
            </CardContent>
          </Card>
          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle>Sugestões da IA</CardTitle>
              <CardDescription>Aqui estão as edições sugeridas para melhorar seu texto.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 rounded-md bg-background min-h-[250px] whitespace-pre-wrap font-mono text-sm overflow-y-auto">
                {isPending && <p className="text-muted-foreground">Gerando sugestões...</p>}
                {!isPending && state.status !== "success" && <p className="text-muted-foreground">As sugestões aparecerão aqui.</p>}
                {state.suggestion}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
