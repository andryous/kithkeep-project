CREATE TABLE `contacts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`date_iso` text NOT NULL,
	`type` text NOT NULL,
	`notes` text,
	`group_name` text
);
