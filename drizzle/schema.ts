import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, json, decimal, boolean } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Tabela de Propriedades
export const properties = mysqlTable("properties", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  nameEs: varchar("nameEs", { length: 255 }).notNull(),
  namePt: varchar("namePt", { length: 255 }).notNull(),
  nameEn: varchar("nameEn", { length: 255 }).notNull(),
  descriptionEs: text("descriptionEs"),
  descriptionPt: text("descriptionPt"),
  descriptionEn: text("descriptionEn"),
  latitude: decimal("latitude", { precision: 10, scale: 8 }).notNull(),
  longitude: decimal("longitude", { precision: 11, scale: 8 }).notNull(),
  maxGuests: int("maxGuests").notNull(),
  bedrooms: int("bedrooms").notNull(),
  bathrooms: int("bathrooms").notNull(),
  parkingSpaces: int("parkingSpaces").notNull(),
  pricePerNight: decimal("pricePerNight", { precision: 12, scale: 2 }),
  heroImageUrl: varchar("heroImageUrl", { length: 512 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Property = typeof properties.$inferSelect;
export type InsertProperty = typeof properties.$inferInsert;

// Tabela de Pontos de Interesse
export const pointsOfInterest = mysqlTable("pointsOfInterest", {
  id: int("id").autoincrement().primaryKey(),
  propertyId: int("propertyId").notNull(),
  nameEs: varchar("nameEs", { length: 255 }).notNull(),
  namePt: varchar("namePt", { length: 255 }).notNull(),
  nameEn: varchar("nameEn", { length: 255 }).notNull(),
  descriptionEs: text("descriptionEs"),
  descriptionPt: text("descriptionPt"),
  descriptionEn: text("descriptionEn"),
  category: mysqlEnum("category", ["beach", "bar", "club", "restaurant", "airport", "other"]).notNull(),
  latitude: decimal("latitude", { precision: 10, scale: 8 }).notNull(),
  longitude: decimal("longitude", { precision: 11, scale: 8 }).notNull(),
  distance: decimal("distance", { precision: 8, scale: 2 }),
  hours: varchar("hours", { length: 255 }),
  specialties: text("specialties"),
  rating: decimal("rating", { precision: 3, scale: 2 }),
  imageUrl: varchar("imageUrl", { length: 512 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type PointOfInterest = typeof pointsOfInterest.$inferSelect;
export type InsertPointOfInterest = typeof pointsOfInterest.$inferInsert;

// Tabela de Notificações ao Proprietário
export const ownerNotifications = mysqlTable("ownerNotifications", {
  id: int("id").autoincrement().primaryKey(),
  propertyId: int("propertyId").notNull(),
  clientName: varchar("clientName", { length: 255 }).notNull(),
  clientEmail: varchar("clientEmail", { length: 320 }),
  clientPhone: varchar("clientPhone", { length: 20 }),
  language: mysqlEnum("language", ["pt", "es", "en"]).notNull(),
  notificationType: mysqlEnum("notificationType", ["reservation_click", "interest_form"]).notNull(),
  metadata: json("metadata"),
  read: boolean("read").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type OwnerNotification = typeof ownerNotifications.$inferSelect;
export type InsertOwnerNotification = typeof ownerNotifications.$inferInsert;

// Tabela de Imagens Geradas
export const generatedImages = mysqlTable("generatedImages", {
  id: int("id").autoincrement().primaryKey(),
  propertyId: int("propertyId").notNull(),
  type: mysqlEnum("type", ["hero", "lifestyle", "service", "other"]).notNull(),
  prompt: text("prompt").notNull(),
  imageUrl: varchar("imageUrl", { length: 512 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type GeneratedImage = typeof generatedImages.$inferSelect;
export type InsertGeneratedImage = typeof generatedImages.$inferInsert;