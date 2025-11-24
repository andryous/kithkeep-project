import { openDatabaseSync } from "expo-sqlite";

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
  `
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