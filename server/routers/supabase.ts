import { z } from 'zod';
import { publicProcedure, router } from '../_core/trpc';
import {
  createPreBooking,
  getPreBookings,
  createReview,
  getApprovedReviews,
  getReviewStats,
  getCounters,
  updateCounter,
  incrementCounter,
} from '../supabase-db';

export const supabaseRouter = router({
  // Pre-bookings
  prebooking: router({
    create: publicProcedure
      .input(
        z.object({
          nome: z.string().min(2, 'Nome é obrigatório'),
          email: z.string().email('Email inválido'),
          telefone: z.string().min(10, 'Telefone inválido'),
          check_in: z.string().refine(
            (date) => !isNaN(Date.parse(date)),
            'Data de check-in inválida'
          ),
          check_out: z.string().refine(
            (date) => !isNaN(Date.parse(date)),
            'Data de check-out inválida'
          ),
          adultos: z.number().min(1, 'Mínimo 1 adulto'),
          criancas: z.number().min(0, 'Número de crianças inválido'),
          mensagem: z.string().optional(),
          idioma: z.enum(['pt', 'es', 'en']).default('pt'),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const result = await createPreBooking(input);
          if (!result) {
            throw new Error('Erro ao criar pré-reserva');
          }
          return { success: true, data: result };
        } catch (error) {
          console.error('Error creating pre-booking:', error);
          throw new Error('Falha ao enviar pré-reserva. Tente novamente.');
        }
      }),

    list: publicProcedure.query(async () => {
      try {
        const bookings = await getPreBookings();
        return bookings;
      } catch (error) {
        console.error('Error listing pre-bookings:', error);
        return [];
      }
    }),
  }),

  // Reviews
  reviews: router({
    submit: publicProcedure
      .input(
        z.object({
          nome: z.string().min(2, 'Nome é obrigatório'),
          estrelas: z.number().min(1).max(5, 'Estrelas deve estar entre 1 e 5'),
          comentario: z.string().min(10, 'Comentário deve ter no mínimo 10 caracteres'),
          mes_estadia: z.string().optional(),
          idioma: z.enum(['pt', 'es', 'en']).default('pt'),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const result = await createReview(input);
          if (!result) {
            throw new Error('Erro ao criar avaliação');
          }
          return { success: true, data: result };
        } catch (error) {
          console.error('Error submitting review:', error);
          throw new Error('Falha ao enviar avaliação. Tente novamente.');
        }
      }),

    getApproved: publicProcedure.query(async () => {
      try {
        const reviews = await getApprovedReviews();
        return reviews;
      } catch (error) {
        console.error('Error fetching approved reviews:', error);
        return [];
      }
    }),

    getStats: publicProcedure.query(async () => {
      try {
        const stats = await getReviewStats();
        return stats;
      } catch (error) {
        console.error('Error fetching review stats:', error);
        return { average: 0, total: 0 };
      }
    }),
  }),

  // Counters
  counters: router({
    get: publicProcedure.query(async () => {
      try {
        const counters = await getCounters();
        return counters;
      } catch (error) {
        console.error('Error fetching counters:', error);
        return {
          clientes_satisfeitos: 500,
          reservas_realizadas: 150,
          taxa_satisfacao: 98,
        };
      }
    }),

    update: publicProcedure
      .input(
        z.object({
          tipo: z.string(),
          valor: z.number(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const success = await updateCounter(input.tipo, input.valor);
          return { success };
        } catch (error) {
          console.error('Error updating counter:', error);
          return { success: false };
        }
      }),

    increment: publicProcedure
      .input(z.object({ tipo: z.string() }))
      .mutation(async ({ input }) => {
        try {
          const success = await incrementCounter(input.tipo);
          return { success };
        } catch (error) {
          console.error('Error incrementing counter:', error);
          return { success: false };
        }
      }),
  }),
});
