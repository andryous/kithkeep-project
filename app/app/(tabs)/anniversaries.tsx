// In: app/(tabs)/anniversaries.tsx
import { Text, View } from "react-native";

export default function PantallaAniversarios() {
  // (We can rename this function)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000", // Using your dark theme
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#FFF",
        }}
      >
        KithKeep: Anniversaries
      </Text>
      <Text
        style={{
          marginTop: 8,
          color: "#AAAAAA",
        }}
      >
        Here we will see the anniversary list.
      </Text>
    </View>
  );
}
