

import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

/**
 * Defines the main 'contacts' table.
 * This table stores all user-created events, including birthdays and anniversaries.
 * Corresponds to the V1 ERD defined in the project documentation.
 */
export const contacts = sqliteTable('contacts', {
  /**
   * The unique identifier for the contact.
   * Auto-increments.
   */
  id: integer('id').primaryKey({ autoIncrement: true }),

  /**
   * The name of the person or event.
   * This field is required.
   */
  name: text('name').notNull(),

  /**
   * The ISO 8601 formatted date string (YYYY-MM-DD).
   * This field is required.
   * A "fake" year (e.g., '0000') is used for dates where the year is unknown.
   */
  date_iso: text('date_iso').notNull(),

  /**
   * The type of event (e.g., 'birthday', 'anniversary').
   * Used for filtering and icons. This field is required.
   */
  type: text('type').notNull(),

  /**
   * An optional field for user notes.
   */
  notes: text('notes'),

  /**
   * An optional field for grouping contacts (e.g., 'Friends', 'Work', 'Family').
   * Used for filtering.
   */
  group_name: text('group_name'),
});