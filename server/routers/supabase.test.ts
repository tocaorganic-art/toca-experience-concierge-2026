import { describe, it, expect, vi, beforeEach } from "vitest";
import { appRouter } from "../routers";
import type { TrpcContext } from "../_core/context";
import {
  createPreBooking,
  createReview,
  getApprovedReviews,
  getReviewStats,
  getCounters,
} from "../supabase-db";

vi.mock("../supabase-db", () => ({
  createPreBooking: vi.fn(),
  getPreBookings: vi.fn().mockResolvedValue([]),
  createReview: vi.fn(),
  getApprovedReviews: vi.fn().mockResolvedValue([]),
  getReviewStats: vi.fn().mockResolvedValue({ average: 0, total: 0 }),
  getCounters: vi.fn().mockResolvedValue({}),
  updateCounter: vi.fn().mockResolvedValue(true),
  incrementCounter: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as TrpcContext["res"],
  };
}

const validPreBooking = {
  nome: "João Silva",
  email: "joao@example.com",
  telefone: "+5547999999999",
  check_in: "2026-07-01",
  check_out: "2026-07-05",
  adultos: 2,
  criancas: 1,
  mensagem: "Olá",
  idioma: "pt" as const,
};

describe("supabase router", () => {
  let caller: ReturnType<typeof appRouter.createCaller>;

  beforeEach(() => {
    vi.clearAllMocks();
    caller = appRouter.createCaller(createPublicContext());
  });

  describe("prebooking.create", () => {
    it("returns success with the created row", async () => {
      vi.mocked(createPreBooking).mockResolvedValue({
        id: "uuid-1",
        ...validPreBooking,
        mensagem: validPreBooking.mensagem,
        created_at: "",
        updated_at: "",
      });

      const result = await caller.supabase.prebooking.create(validPreBooking);

      expect(result.success).toBe(true);
      expect(result.data.id).toBe("uuid-1");
    });

    it("rejects an invalid email", async () => {
      await expect(
        caller.supabase.prebooking.create({ ...validPreBooking, email: "not-an-email" })
      ).rejects.toThrow();
    });

    it("rejects when there are zero adults", async () => {
      await expect(
        caller.supabase.prebooking.create({ ...validPreBooking, adultos: 0 })
      ).rejects.toThrow();
    });

    it("rejects an invalid check-in date", async () => {
      await expect(
        caller.supabase.prebooking.create({ ...validPreBooking, check_in: "not-a-date" })
      ).rejects.toThrow();
    });

    it("throws a friendly error when the helper returns null", async () => {
      vi.mocked(createPreBooking).mockResolvedValue(null);

      await expect(caller.supabase.prebooking.create(validPreBooking)).rejects.toThrow(
        /pré-reserva/i
      );
    });
  });

  describe("reviews.submit", () => {
    it("returns success with the created review", async () => {
      vi.mocked(createReview).mockResolvedValue({
        id: "uuid-2",
        nome: "Maria",
        estrelas: 5,
        comentario: "Excelente experiência",
        idioma: "pt",
        status: "pendente",
        created_at: "",
        updated_at: "",
      });

      const result = await caller.supabase.reviews.submit({
        nome: "Maria",
        estrelas: 5,
        comentario: "Excelente experiência",
        idioma: "pt",
      });

      expect(result.success).toBe(true);
      expect(result.data.status).toBe("pendente");
    });

    it("rejects star ratings outside 1-5", async () => {
      await expect(
        caller.supabase.reviews.submit({
          nome: "Maria",
          estrelas: 6,
          comentario: "Excelente experiência",
          idioma: "pt",
        })
      ).rejects.toThrow();
    });

    it("rejects comments that are too short", async () => {
      await expect(
        caller.supabase.reviews.submit({
          nome: "Maria",
          estrelas: 5,
          comentario: "curto",
          idioma: "pt",
        })
      ).rejects.toThrow();
    });
  });

  describe("reviews.getApproved / getStats", () => {
    it("returns approved reviews from the helper", async () => {
      vi.mocked(getApprovedReviews).mockResolvedValue([
        {
          id: "1",
          nome: "Ana",
          estrelas: 5,
          comentario: "Ótimo",
          idioma: "pt",
          status: "aprovado",
          created_at: "",
          updated_at: "",
        },
      ]);

      const result = await caller.supabase.reviews.getApproved();

      expect(result).toHaveLength(1);
      expect(result[0].status).toBe("aprovado");
    });

    it("returns review stats from the helper", async () => {
      vi.mocked(getReviewStats).mockResolvedValue({ average: 4.7, total: 12 });

      const result = await caller.supabase.reviews.getStats();

      expect(result).toEqual({ average: 4.7, total: 12 });
    });
  });

  describe("counters.get", () => {
    it("returns counters from the helper", async () => {
      vi.mocked(getCounters).mockResolvedValue({
        clientes_satisfeitos: 500,
        reservas_realizadas: 150,
      });

      const result = await caller.supabase.counters.get();

      expect(result.clientes_satisfeitos).toBe(500);
    });

    it("falls back to defaults when the helper throws", async () => {
      vi.mocked(getCounters).mockRejectedValue(new Error("down"));

      const result = await caller.supabase.counters.get();

      expect(result).toMatchObject({ clientes_satisfeitos: 500 });
    });
  });
});
