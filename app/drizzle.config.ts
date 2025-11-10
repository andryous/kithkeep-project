
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  // dialect: "sqlite", // This is for Drizzle-Kit >= 0.20.7
  // For versions < 0.20.7, use:
  dialect: 'sqlite',
  driver: 'expo', // IMPORTANT: It tells that is for Expo-SQLite!
  
  // Path to our (template) fo data base (lo crearemos después)
  schema: './src/db/schema.ts', 
  
  // Where to save the migration files (SQL)
  out: './drizzle/migrations', 
});