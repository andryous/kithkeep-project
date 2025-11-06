import { Text, View } from "react-native";

export default function PantallaCumpleanos() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000", // <-- AÑADIDO: Fondo blanco
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#FFF", // <-- AÑADIDO: Texto negro
        }}
      >
        KithKeep: Birthday
      </Text>
      <Text
        style={{
          marginTop: 8,
          color: "#AAA", // <-- AÑADIDO: Texto gris oscuro
        }}
      >
        Here we will see the birthday list.
      </Text>
    </View>
  );
}
