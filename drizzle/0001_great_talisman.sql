CREATE TABLE `generatedImages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`propertyId` int NOT NULL,
	`type` enum('hero','lifestyle','service','other') NOT NULL,
	`prompt` text NOT NULL,
	`imageUrl` varchar(512) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `generatedImages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `ownerNotifications` (
	`id` int AUTO_INCREMENT NOT NULL,
	`propertyId` int NOT NULL,
	`clientName` varchar(255) NOT NULL,
	`clientEmail` varchar(320),
	`clientPhone` varchar(20),
	`language` enum('pt','es','en') NOT NULL,
	`notificationType` enum('reservation_click','interest_form') NOT NULL,
	`metadata` json,
	`read` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `ownerNotifications_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `pointsOfInterest` (
	`id` int AUTO_INCREMENT NOT NULL,
	`propertyId` int NOT NULL,
	`nameEs` varchar(255) NOT NULL,
	`namePt` varchar(255) NOT NULL,
	`nameEn` varchar(255) NOT NULL,
	`descriptionEs` text,
	`descriptionPt` text,
	`descriptionEn` text,
	`category` enum('beach','bar','club','restaurant','airport','other') NOT NULL,
	`latitude` decimal(10,8) NOT NULL,
	`longitude` decimal(11,8) NOT NULL,
	`distance` decimal(8,2),
	`hours` varchar(255),
	`specialties` text,
	`rating` decimal(3,2),
	`imageUrl` varchar(512),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `pointsOfInterest_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `properties` (
	`id` int AUTO_INCREMENT NOT NULL,
	`slug` varchar(255) NOT NULL,
	`nameEs` varchar(255) NOT NULL,
	`namePt` varchar(255) NOT NULL,
	`nameEn` varchar(255) NOT NULL,
	`descriptionEs` text,
	`descriptionPt` text,
	`descriptionEn` text,
	`latitude` decimal(10,8) NOT NULL,
	`longitude` decimal(11,8) NOT NULL,
	`maxGuests` int NOT NULL,
	`bedrooms` int NOT NULL,
	`bathrooms` int NOT NULL,
	`parkingSpaces` int NOT NULL,
	`pricePerNight` decimal(12,2),
	`heroImageUrl` varchar(512),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `properties_id` PRIMARY KEY(`id`),
	CONSTRAINT `properties_slug_unique` UNIQUE(`slug`)
);
