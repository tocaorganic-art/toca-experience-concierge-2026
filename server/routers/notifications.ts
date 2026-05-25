import { z } from "zod";
import { eq } from "drizzle-orm";
import { publicProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { ownerNotifications } from "../../drizzle/schema";
import { notifyOwner } from "../_core/notification";

export const notificationsRouter = router({
  // Registrar clique em botão de reserva
  logReservationClick: publicProcedure
    .input(
      z.object({
        clientName: z.string().min(1),
        clientEmail: z.string().email().optional(),
        clientPhone: z.string().optional(),
        language: z.enum(["pt", "es", "en"]),
        propertyId: z.number().int().positive(),
      })
    )
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }

      try {
        // Salvar no banco de dados
        await db.insert(ownerNotifications).values({
          propertyId: input.propertyId,
          clientName: input.clientName,
          clientEmail: input.clientEmail,
          clientPhone: input.clientPhone,
          language: input.language,
          notificationType: "reservation_click",
          metadata: {
            timestamp: new Date().toISOString(),
            source: "website",
          },
        });

        // Notificar proprietário
        const languageLabel = { pt: "Português", es: "Espanhol", en: "Inglês" }[input.language];
        await notifyOwner({
          title: "Nova Solicitação de Reserva",
          content: `Cliente: ${input.clientName}\nEmail: ${input.clientEmail || "Não fornecido"}\nTelefone: ${input.clientPhone || "Não fornecido"}\nIdioma: ${languageLabel}\n\nO cliente clicou no botão de reserva e demonstrou interesse na propriedade.`,
        });

        return { success: true };
      } catch (error) {
        console.error("Error logging reservation click:", error);
        throw error;
      }
    }),

  // Registrar envio de formulário de interesse
  logInterestForm: publicProcedure
    .input(
      z.object({
        clientName: z.string().min(1),
        clientEmail: z.string().email(),
        clientPhone: z.string(),
        language: z.enum(["pt", "es", "en"]),
        propertyId: z.number().int().positive(),
        message: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }

      try {
        // Salvar no banco de dados
        await db.insert(ownerNotifications).values({
          propertyId: input.propertyId,
          clientName: input.clientName,
          clientEmail: input.clientEmail,
          clientPhone: input.clientPhone,
          language: input.language,
          notificationType: "interest_form",
          metadata: {
            timestamp: new Date().toISOString(),
            message: input.message,
            source: "website",
          },
        });

        // Notificar proprietário
        const languageLabel = { pt: "Português", es: "Espanhol", en: "Inglês" }[input.language];
        await notifyOwner({
          title: "Novo Formulário de Interesse",
          content: `Cliente: ${input.clientName}\nEmail: ${input.clientEmail}\nTelefone: ${input.clientPhone}\nIdioma: ${languageLabel}\n\nMensagem:\n${input.message || "Nenhuma mensagem adicional"}\n\nO cliente preencheu o formulário de interesse na propriedade.`,
        });

        return { success: true };
      } catch (error) {
        console.error("Error logging interest form:", error);
        throw error;
      }
    }),

  // Listar notificações (para admin)
  listNotifications: publicProcedure
    .input(
      z.object({
        propertyId: z.number().int().positive(),
        limit: z.number().int().positive().default(20),
      })
    )
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }

      try {
        const notifications = await db
          .select()
          .from(ownerNotifications)
          .where(eq(ownerNotifications.propertyId, input.propertyId))
          .limit(input.limit);

        return notifications;
      } catch (error) {
        console.error("Error fetching notifications:", error);
        throw error;
      }
    }),
});
