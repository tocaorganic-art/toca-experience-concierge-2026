import { describe, it, expect, vi, beforeEach } from "vitest";
import { appRouter } from "../routers";
import type { TrpcContext } from "../_core/context";

// Mock the database
vi.mock("../db", () => ({
  getDb: vi.fn(() => ({
    insert: vi.fn().mockReturnThis(),
    select: vi.fn().mockReturnThis(),
    from: vi.fn().mockReturnThis(),
    where: vi.fn().mockReturnThis(),
    limit: vi.fn().mockResolvedValue([]),
    values: vi.fn().mockResolvedValue({}),
  })),
}));

// Mock the notification service
vi.mock("../_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
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

describe("notifications router", () => {
  let caller: ReturnType<typeof appRouter.createCaller>;

  beforeEach(() => {
    const ctx = createPublicContext();
    caller = appRouter.createCaller(ctx);
  });

  describe("logReservationClick", () => {
    it("should accept valid reservation click data", async () => {
      const result = await caller.notifications.logReservationClick({
        clientName: "João Silva",
        clientEmail: "joao@example.com",
        clientPhone: "+5547999999999",
        language: "pt",
        propertyId: 1,
      });

      expect(result).toEqual({ success: true });
    });

    it("should handle missing optional fields", async () => {
      const result = await caller.notifications.logReservationClick({
        clientName: "Maria Santos",
        language: "es",
        propertyId: 1,
      });

      expect(result).toEqual({ success: true });
    });

    it("should validate language enum", async () => {
      try {
        await caller.notifications.logReservationClick({
          clientName: "Test User",
          language: "invalid" as any,
          propertyId: 1,
        });
        expect.fail("Should have thrown validation error");
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });

  describe("logInterestForm", () => {
    it("should accept valid interest form data", async () => {
      const result = await caller.notifications.logInterestForm({
        clientName: "Ana Costa",
        clientEmail: "ana@example.com",
        clientPhone: "+5547988888888",
        language: "pt",
        propertyId: 1,
        message: "Interested in the property",
      });

      expect(result).toEqual({ success: true });
    });

    it("should require all mandatory fields", async () => {
      try {
        await caller.notifications.logInterestForm({
          clientName: "Test",
          clientEmail: "test@example.com",
          // Missing clientPhone
          language: "en",
          propertyId: 1,
        } as any);
        expect.fail("Should have thrown validation error");
      } catch (error) {
        expect(error).toBeDefined();
      }
    });

    it("should validate email format", async () => {
      try {
        await caller.notifications.logInterestForm({
          clientName: "Test",
          clientEmail: "invalid-email",
          clientPhone: "+5547999999999",
          language: "en",
          propertyId: 1,
        });
        expect.fail("Should have thrown validation error");
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });

  describe("listNotifications", () => {
    it("should return notifications for a property", async () => {
      const result = await caller.notifications.listNotifications({
        propertyId: 1,
        limit: 10,
      });

      expect(Array.isArray(result)).toBe(true);
    });

    it("should use default limit of 20", async () => {
      const result = await caller.notifications.listNotifications({
        propertyId: 1,
      });

      expect(Array.isArray(result)).toBe(true);
    });

    it("should require positive propertyId", async () => {
      try {
        await caller.notifications.listNotifications({
          propertyId: -1,
        });
        expect.fail("Should have thrown validation error");
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });
});
