import { Text, View, Button, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { addContact, getContacts, deleteContact } from "@/src/db"; // Added deleteContact
import { Contact } from "@/src/types";

export default function BirthdayScreen() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  // Function to load data from DB to State
  function loadData() {
    const fetchedContacts = getContacts();
    setContacts(fetchedContacts);
  }

  // Initial load
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
    loadData(); // Refresh list after adding
  }

  // Function to handle DELETION
  function handleDelete(id: number) {
    deleteContact(id);
    loadData(); // Refresh list immediately after deleting
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        paddingTop: 50,
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

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        style={{ width: "100%", paddingHorizontal: 20 }}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#222",
              padding: 15,
              borderRadius: 10,
              marginBottom: 10,
              borderLeftWidth: 4,
              borderLeftColor: "#4A90E2",
              // Layout change: Row to align text left and button right
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Left side: Text Info */}
            <View>
              <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 18 }}>
                {item.name}
              </Text>
              <Text style={{ color: "#AAA" }}>
                {item.date_iso} ({item.type})
              </Text>
            </View>

            {/* Right side: Delete Button */}
            <View>
              <Button
                title="X"
                color="#FF453A" // iOS red system color
                onPress={() => handleDelete(item.id)}
              />
            </View>
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
