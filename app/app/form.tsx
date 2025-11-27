import { View, Text, StyleSheet } from "react-native";

export default function ContactFormScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Contact</Text>
      <Text style={styles.subtitle}>Form coming soon...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#AAA",
  },
});
