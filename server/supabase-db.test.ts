import { describe, it, expect, vi, beforeEach } from "vitest";
import { getSupabaseClient } from "./_core/supabase";
import {
  createPreBooking,
  createReview,
  getApprovedReviews,
  getReviewStats,
  getCounters,
  updateCounter,
} from "./supabase-db";

vi.mock("./_core/supabase", () => ({
  getSupabaseClient: vi.fn(),
}));

const mockedGetClient = vi.mocked(getSupabaseClient);

/**
 * Builds a chainable, thenable Supabase query mock. Every builder method
 * (from/insert/select/single/order/eq/update/limit) returns the same builder,
 * and awaiting it anywhere in the chain resolves to `result`. This mirrors the
 * supabase-js fluent API closely enough for the helpers under test.
 */
function createClientMock(result: { data?: unknown; error?: unknown }) {
  const builder: Record<string, unknown> = {};
  const methods = [
    "from",
    "insert",
    "select",
    "single",
    "order",
    "eq",
    "update",
    "limit",
  ];
  for (const name of methods) {
    builder[name] = vi.fn(() => builder);
  }
  // Make the builder awaitable so chains that don't end in a terminal still resolve.
  builder.then = (resolve: (value: unknown) => unknown) => resolve(result);
  return builder as unknown as ReturnType<typeof getSupabaseClient>;
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
  idioma: "pt",
};

describe("supabase-db helpers", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("createPreBooking", () => {
    it("returns the inserted row on success", async () => {
      const row = { id: "uuid-1", ...validPreBooking };
      mockedGetClient.mockReturnValue(createClientMock({ data: row, error: null }));

      const result = await createPreBooking(validPreBooking);

      expect(result).toEqual(row);
    });

    it("returns null when Supabase returns an error", async () => {
      mockedGetClient.mockReturnValue(
        createClientMock({ data: null, error: { message: "boom" } })
      );

      const result = await createPreBooking(validPreBooking);

      expect(result).toBeNull();
    });

    it("returns null when the client is not initialized", async () => {
      mockedGetClient.mockReturnValue(null);

      const result = await createPreBooking(validPreBooking);

      expect(result).toBeNull();
    });
  });

  describe("createReview", () => {
    it("returns the created review on success", async () => {
      const row = {
        id: "uuid-2",
        nome: "Maria",
        estrelas: 5,
        comentario: "Excelente experiência",
        idioma: "pt",
        status: "pendente",
      };
      mockedGetClient.mockReturnValue(createClientMock({ data: row, error: null }));

      const result = await createReview({
        nome: "Maria",
        estrelas: 5,
        comentario: "Excelente experiência",
        idioma: "pt",
      });

      expect(result).toEqual(row);
    });

    it("returns null when the client is not initialized", async () => {
      mockedGetClient.mockReturnValue(null);

      const result = await createReview({
        nome: "Maria",
        estrelas: 5,
        comentario: "Excelente experiência",
        idioma: "pt",
      });

      expect(result).toBeNull();
    });
  });

  describe("getApprovedReviews", () => {
    it("returns the list of approved reviews", async () => {
      const rows = [
        { id: "1", estrelas: 5, status: "aprovado" },
        { id: "2", estrelas: 4, status: "aprovado" },
      ];
      mockedGetClient.mockReturnValue(createClientMock({ data: rows, error: null }));

      const result = await getApprovedReviews();

      expect(result).toEqual(rows);
    });

    it("returns an empty array on error", async () => {
      mockedGetClient.mockReturnValue(
        createClientMock({ data: null, error: { message: "boom" } })
      );

      const result = await getApprovedReviews();

      expect(result).toEqual([]);
    });
  });

  describe("getReviewStats", () => {
    it("computes the rounded average and total", async () => {
      mockedGetClient.mockReturnValue(
        createClientMock({
          data: [{ estrelas: 5 }, { estrelas: 4 }, { estrelas: 4 }],
          error: null,
        })
      );

      const result = await getReviewStats();

      // (5 + 4 + 4) / 3 = 4.333 -> rounded to 4.3
      expect(result).toEqual({ average: 4.3, total: 3 });
    });

    it("returns zeros when there are no reviews", async () => {
      mockedGetClient.mockReturnValue(createClientMock({ data: [], error: null }));

      const result = await getReviewStats();

      expect(result).toEqual({ average: 0, total: 0 });
    });
  });

  describe("getCounters", () => {
    it("maps rows into a tipo -> valor record", async () => {
      mockedGetClient.mockReturnValue(
        createClientMock({
          data: [
            { tipo: "clientes_satisfeitos", valor: 500 },
            { tipo: "reservas_realizadas", valor: 150 },
          ],
          error: null,
        })
      );

      const result = await getCounters();

      expect(result).toEqual({
        clientes_satisfeitos: 500,
        reservas_realizadas: 150,
      });
    });

    it("returns an empty record on error", async () => {
      mockedGetClient.mockReturnValue(
        createClientMock({ data: null, error: { message: "boom" } })
      );

      const result = await getCounters();

      expect(result).toEqual({});
    });
  });

  describe("updateCounter", () => {
    it("returns true on success", async () => {
      mockedGetClient.mockReturnValue(createClientMock({ error: null }));

      const result = await updateCounter("clientes_satisfeitos", 600);

      expect(result).toBe(true);
    });

    it("returns false when Supabase returns an error", async () => {
      mockedGetClient.mockReturnValue(
        createClientMock({ error: { message: "boom" } })
      );

      const result = await updateCounter("clientes_satisfeitos", 600);

      expect(result).toBe(false);
    });
  });
});
