import { openDatabaseSync } from "expo-sqlite";
import { Contact } from "@/src/types";

// Open the database connection synchronously
export const db = openDatabaseSync("kithkeep.db");

// SQL instructions to create the database schema
const MIGRATIONS = [
  `
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    date_iso TEXT NOT NULL,
    type TEXT NOT NULL,
    group_name TEXT NOT NULL,
    notes TEXT
  );
  `,
];

/**
 * Initializes the database by executing migrations.
 * This should be called once when the app starts.
 */
export const initDb = () => {
  try {
    for (const migration of MIGRATIONS) {
      db.execSync(migration);
    }
    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Failed to initialize database:", error);
  }
};

/**
 * Adds a new contact to the database.
 * Uses the synchronous API for simplicity.
 */
export const addContact = (contact: Omit<Contact, "id">) => {
  const statement = db.prepareSync(
    `INSERT INTO contacts (name, date_iso, type, group_name, notes) VALUES ($name, $date_iso, $type, $group_name, $notes)`
  );

  try {
    const result = statement.executeSync({
      $name: contact.name,
      $date_iso: contact.date_iso,
      $type: contact.type,
      $group_name: contact.group_name,
      $notes: contact.notes || null,
    });

    return result.lastInsertRowId;
  } finally {
    statement.finalizeSync();
  }
};

/**
 * Retrieves all contacts from the database.
 * Uses getAllSync for a clean, one-line query execution.
 */
export const getContacts = (): Contact[] => {
  return db.getAllSync<Contact>("SELECT * FROM contacts");
};
