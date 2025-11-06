import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Birthday",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="cake" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="anniversaries"
        options={{
          title: "Anniversaries",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons size={28} name="heart" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
