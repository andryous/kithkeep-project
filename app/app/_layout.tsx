import { useEffect } from "react";
import { Stack } from "expo-router";
import { initDb } from "@/src/db"; // Using the alias path

export default function RootLayout() {
  
  // Initialize the database when the app mounts for the first time
  useEffect(() => {
    initDb();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}