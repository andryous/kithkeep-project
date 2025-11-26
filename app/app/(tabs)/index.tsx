import { Text, View, Button } from "react-native";
import { addContact } from "@/src/db";
export default function BirthdayScreen() {
  function createTestContact() {
    const newContactId = addContact({
      name: "John Doe",
      date_iso: "1990-01-01",
      type: "Birthday",
      group_name: "Friends",
      notes: "Test contact",
    });
    console.log("New contact added with ID:", newContactId); 
  }

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
      
  

        <View style={{ marginTop: 20 }}>
          <Button 
            title="Add test Contact" 
           onPress={createTestContact}
          />
        </View>
    </View>
  
  );
}
export const __pageId__ = "(tabs)/index";
