// In: app/_layout.tsx

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack, ErrorBoundary } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "react-native-reanimated";

// --- KithKeep Imports ---
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useDatabaseInitialization } from "../src/db"; // Import our custom hook
// ---

export const unstable_settings = {
  anchor: "(tabs)",
};

// Export a custom ErrorBoundary to catch layout errors.
export { ErrorBoundary };

export default function RootLayout() {
  // --- Hook Calls ---
  // Load the color scheme (dark/light mode)
  const colorScheme = useColorScheme();

  // Initialize the database and run migrations.
  // This hook returns the loading and error state.
  const { isDbLoading, dbError } = useDatabaseInitialization();

  // --- Loading and Error States ---
  // While the database is loading (running migrations), show a loading screen.
  // (It can add font loading logic here later).
  if (isDbLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading database...</Text>
      </View>
    );
  }

  // If the database fails to initialize, show a critical error screen.
  // The app cannot function without the database.
  if (dbError) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "red" }}>
          Failed to load database: {dbError.message}
        </Text>
      </View>
    );
  }

  // --- App Ready ---
  // If the database is loaded without errors, render the main app navigation.
  return <RootLayoutNav />;
}

/**
 * Main App Navigation Component
 * This is separated so that it only renders *after* the database is ready.
 */
function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}