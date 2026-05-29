import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { invokeLLM, type Message } from "../_core/llm";

/**
 * Toca TrIA — concierge virtual assistant for Toca Experience.
 *
 * Wraps the built-in LLM (`invokeLLM`) with a domain-specific system prompt so
 * guests can ask about the property, the stay, local attractions and the
 * booking process in Portuguese, Spanish or English.
 */

const SYSTEM_PROMPTS: Record<"pt" | "es" | "en", string> = {
  pt: `Você é a Toca TrIA, a concierge virtual da Toca Experience — um serviço de concierge e lifestyle premium para estadias em casas de alto padrão no litoral do Brasil.
Sua missão é encantar e ajudar hóspedes e interessados com:
- Detalhes da propriedade (estrutura, capacidade, comodidades, piscina, jacuzzi).
- Sugestões de roteiros e experiências (praias, bares, clubs, gastronomia, passeios).
- Informações sobre períodos, check-in/check-out e o processo de pré-reserva.
Seja calorosa, sofisticada e objetiva. Respostas curtas e bem formatadas (use listas quando ajudar).
Quando o hóspede demonstrar interesse em reservar, incentive-o gentilmente a preencher o formulário de pré-reserva.
Nunca invente preços ou datas que não foram informados; nesses casos, oriente a falar com a equipe Toca Experience.`,
  es: `Eres Toca TrIA, la concierge virtual de Toca Experience — un servicio de concierge y lifestyle premium para estadías en casas de alto nivel en el litoral de Brasil.
Tu misión es encantar y ayudar a huéspedes e interesados con:
- Detalles de la propiedad (estructura, capacidad, comodidades, piscina, jacuzzi).
- Sugerencias de itinerarios y experiencias (playas, bares, clubs, gastronomía, paseos).
- Información sobre períodos, check-in/check-out y el proceso de pre-reserva.
Sé cálida, sofisticada y objetiva. Respuestas cortas y bien formateadas (usa listas cuando ayude).
Cuando el huésped muestre interés en reservar, invítalo gentilmente a completar el formulario de pre-reserva.
Nunca inventes precios o fechas que no fueron informados; en esos casos, orienta a hablar con el equipo Toca Experience.`,
  en: `You are Toca TrIA, the virtual concierge of Toca Experience — a premium concierge and lifestyle service for stays in high-end houses on the Brazilian coast.
Your mission is to delight and assist guests and prospects with:
- Property details (structure, capacity, amenities, pool, jacuzzi).
- Itinerary and experience suggestions (beaches, bars, clubs, dining, tours).
- Information about periods, check-in/check-out and the pre-booking process.
Be warm, sophisticated and concise. Keep answers short and well formatted (use lists when helpful).
When the guest shows interest in booking, gently encourage them to fill out the pre-booking form.
Never invent prices or dates that were not provided; in those cases, guide them to speak with the Toca Experience team.`,
};

/**
 * Extracts plain text from an LLM completion, tolerating both the
 * string and structured-content response shapes.
 */
function extractText(content: unknown): string {
  if (typeof content === "string") return content;
  if (Array.isArray(content)) {
    return content
      .map((part) =>
        part && typeof part === "object" && "type" in part && part.type === "text"
          ? (part as { text?: string }).text ?? ""
          : ""
      )
      .join("");
  }
  return "";
}

export const triaRouter = router({
  chat: publicProcedure
    .input(
      z.object({
        messages: z
          .array(
            z.object({
              role: z.enum(["user", "assistant"]),
              content: z.string().min(1).max(4000),
            })
          )
          .min(1, "É necessária pelo menos uma mensagem")
          .max(40, "Histórico de conversa muito longo"),
        idioma: z.enum(["pt", "es", "en"]).default("pt"),
      })
    )
    .mutation(async ({ input }) => {
      const llmMessages: Message[] = [
        { role: "system", content: SYSTEM_PROMPTS[input.idioma] },
        ...input.messages.map((m) => ({ role: m.role, content: m.content })),
      ];

      try {
        const result = await invokeLLM({ messages: llmMessages });
        const reply = extractText(result.choices?.[0]?.message?.content).trim();

        if (!reply) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "A Toca TrIA está indisponível no momento. Tente novamente em instantes.",
          });
        }

        return { reply };
      } catch (error) {
        if (error instanceof TRPCError) throw error;
        console.error("[Toca TrIA] chat error:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "A Toca TrIA está indisponível no momento. Tente novamente em instantes.",
        });
      }
    }),
});
