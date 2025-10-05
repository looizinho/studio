"use server";

import { z } from "zod";
import { suggestContentEdits, ContentSuggestionInput } from "@/ai/flows/content-suggestion";

// AI Content Suggestion Action
export type AIFormState = {
  form: {
    websiteCopy: string;
  };
  status: "idle" | "loading" | "success" | "error";
  message: string;
  suggestion?: string;
};

export async function suggestContentAction(
  prevState: AIFormState,
  formData: FormData
): Promise<AIFormState> {
  const websiteCopy = formData.get("websiteCopy") as string;
  
  if (!websiteCopy) {
    return {
      ...prevState,
      status: "error",
      message: "Por favor, insira algum texto para receber sugestões.",
    };
  }

  try {
    const input: ContentSuggestionInput = { websiteCopy };
    const result = await suggestContentEdits(input);
    return {
      form: { websiteCopy },
      status: "success",
      message: "Sugestões geradas com sucesso!",
      suggestion: result.suggestedEdits,
    };
  } catch (error) {
    console.error(error);
    return {
      ...prevState,
      form: { websiteCopy },
      status: "error",
      message: "Ocorreu um erro ao gerar as sugestões. Tente novamente.",
    };
  }
}

// Contact Form Action
const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres."),
  email: z.string().email("Email inválido."),
  school: z.string().min(2, "Nome da escola deve ter pelo menos 2 caracteres."),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres."),
});

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    school?: string[];
    message?: string[];
  };
};

export async function sendContactMessageAction(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    school: formData.get("school"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      status: "error",
      message: "Por favor, corrija os erros no formulário.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  // Here you would typically send an email or save to a database.
  // For this example, we'll just log it and return success.
  console.log("Contact message received:", validatedFields.data);

  return {
    status: "success",
    message: "Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.",
  };
}
