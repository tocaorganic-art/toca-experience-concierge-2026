import { describe, it, expect, vi, beforeEach } from "vitest";
import { appRouter } from "../routers";
import type { TrpcContext } from "../_core/context";

// Mock the LLM so tests don't hit the network.
const invokeLLMMock = vi.fn();
vi.mock("../_core/llm", () => ({
  invokeLLM: (...args: unknown[]) => invokeLLMMock(...args),
}));

function makeCompletion(text: string) {
  return {
    id: "cmpl_test",
    created: Date.now(),
    model: "gemini-2.5-flash",
    choices: [
      {
        index: 0,
        message: { role: "assistant" as const, content: text },
        finish_reason: "stop",
      },
    ],
  };
}

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

describe("tria router", () => {
  let caller: ReturnType<typeof appRouter.createCaller>;

  beforeEach(() => {
    invokeLLMMock.mockReset();
    caller = appRouter.createCaller(createPublicContext());
  });

  describe("chat", () => {
    it("returns the assistant reply for a valid conversation", async () => {
      invokeLLMMock.mockResolvedValue(makeCompletion("Olá! Como posso ajudar?"));

      const result = await caller.tria.chat({
        messages: [{ role: "user", content: "Oi" }],
        idioma: "pt",
      });

      expect(result).toEqual({ reply: "Olá! Como posso ajudar?" });
      expect(invokeLLMMock).toHaveBeenCalledTimes(1);
    });

    it("prepends a system prompt matching the requested language", async () => {
      invokeLLMMock.mockResolvedValue(makeCompletion("Hi there!"));

      await caller.tria.chat({
        messages: [{ role: "user", content: "Hello" }],
        idioma: "en",
      });

      const passed = invokeLLMMock.mock.calls[0][0] as {
        messages: { role: string; content: string }[];
      };
      expect(passed.messages[0].role).toBe("system");
      expect(passed.messages[0].content).toContain("Toca TrIA");
      expect(passed.messages[1]).toEqual({ role: "user", content: "Hello" });
    });

    it("defaults to Portuguese when idioma is omitted", async () => {
      invokeLLMMock.mockResolvedValue(makeCompletion("Bem-vindo!"));

      await caller.tria.chat({ messages: [{ role: "user", content: "Oi" }] });

      const passed = invokeLLMMock.mock.calls[0][0] as {
        messages: { content: string }[];
      };
      expect(passed.messages[0].content).toContain("concierge virtual");
    });

    it("extracts text from structured content responses", async () => {
      invokeLLMMock.mockResolvedValue({
        id: "x",
        created: 0,
        model: "m",
        choices: [
          {
            index: 0,
            message: {
              role: "assistant",
              content: [{ type: "text", text: "Resposta estruturada" }],
            },
            finish_reason: "stop",
          },
        ],
      });

      const result = await caller.tria.chat({
        messages: [{ role: "user", content: "Oi" }],
      });

      expect(result.reply).toBe("Resposta estruturada");
    });

    it("rejects an empty messages array", async () => {
      await expect(
        caller.tria.chat({ messages: [], idioma: "pt" })
      ).rejects.toThrow();
      expect(invokeLLMMock).not.toHaveBeenCalled();
    });

    it("rejects an invalid language", async () => {
      await expect(
        caller.tria.chat({
          messages: [{ role: "user", content: "Oi" }],
          idioma: "fr" as never,
        })
      ).rejects.toThrow();
    });

    it("surfaces a friendly error when the LLM fails", async () => {
      invokeLLMMock.mockRejectedValue(new Error("network down"));

      await expect(
        caller.tria.chat({ messages: [{ role: "user", content: "Oi" }] })
      ).rejects.toThrow(/indisponível/);
    });

    it("errors when the model returns an empty reply", async () => {
      invokeLLMMock.mockResolvedValue(makeCompletion("   "));

      await expect(
        caller.tria.chat({ messages: [{ role: "user", content: "Oi" }] })
      ).rejects.toThrow(/indisponível/);
    });
  });
});
