'use server';

/**
 * @fileOverview An AI agent that suggests edits to website copy to improve clarity and enhance site presentation.
 *
 * - suggestContentEdits - A function that takes website copy as input and returns suggested edits.
 * - ContentSuggestionInput - The input type for the suggestContentEdits function.
 * - ContentSuggestionOutput - The return type for the suggestContentEdits function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContentSuggestionInputSchema = z.object({
  websiteCopy: z
    .string()
    .describe('The website copy to be reviewed and edited.'),
});
export type ContentSuggestionInput = z.infer<typeof ContentSuggestionInputSchema>;

const ContentSuggestionOutputSchema = z.object({
  suggestedEdits: z
    .string()
    .describe('The AI-suggested edits to improve the website copy.'),
});
export type ContentSuggestionOutput = z.infer<typeof ContentSuggestionOutputSchema>;

export async function suggestContentEdits(input: ContentSuggestionInput): Promise<ContentSuggestionOutput> {
  return suggestContentEditsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contentSuggestionPrompt',
  input: {schema: ContentSuggestionInputSchema},
  output: {schema: ContentSuggestionOutputSchema},
  prompt: `You are an expert content editor specializing in improving website copy for clarity and presentation.

You will review the provided website copy and suggest edits to enhance its effectiveness.

Website Copy: {{{websiteCopy}}}`,
});

const suggestContentEditsFlow = ai.defineFlow(
  {
    name: 'suggestContentEditsFlow',
    inputSchema: ContentSuggestionInputSchema,
    outputSchema: ContentSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
