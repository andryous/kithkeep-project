import { Text, View, Button, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { addContact, getContacts } from "@/src/db";
import { Contact } from "@/src/types";

export default function BirthdayScreen() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  // 1. Function to load data from DB to State
  function loadData() {
    const fetchedContacts = getContacts();
    setContacts(fetchedContacts); // Updates the UI
  }

  // 2. Initial load when the app starts
  useEffect(() => {
    loadData();
  }, []);

  function createTestContact() {
    addContact({
      name: "John Doe",
      date_iso: "1990-01-01",
      type: "Birthday",
      group_name: "Friends",
      notes: "Test contact",
    });

    // 3. REFRESH: Reload data after adding so the new contact appears immediately
    loadData();
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        paddingTop: 50, // Added padding to avoid status bar
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#FFF",
          marginBottom: 20,
        }}
      >
        KithKeep: Birthday
      </Text>

      {/* 4. THE LIST: Displays the contacts */}
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()} // Unique ID for each item
        style={{ width: "100%", paddingHorizontal: 20 }}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#222",
              padding: 15,
              borderRadius: 10,
              marginBottom: 10,
              borderLeftWidth: 4,
              borderLeftColor: "#4A90E2", // Blue accent
            }}
          >
            <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 18 }}>
              {item.name}
            </Text>
            <Text style={{ color: "#AAA" }}>
              {item.date_iso} ({item.type})
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ color: "#555", textAlign: "center", marginTop: 20 }}>
            No birthdays yet. Add one!
          </Text>
        }
      />

      <View style={{ marginVertical: 20 }}>
        <Button title="Add Test Contact" onPress={createTestContact} />
      </View>
    </View>
  );
}
