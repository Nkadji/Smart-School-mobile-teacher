import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Header from "@/components/list/header";
import HeaderText from "@/components/list/header-text";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const swap = [
  { id: "1", type: "henbdomadiare", charakter: "universel", start: "23-12-2025", end: "05-01-2026", description: "Christmas fest", status: "Pending" },
  { id: "2", type: "journalier", charakter: "universel", start: "20-11-2025", end: "22-11-2025", description: "deuil", status: "Approved" },
  { id: "3", type: "mensuel", charakter: "universel", start: "02-12-2025", end: "01-03-2026", description: "Congé maternité", status: "Approved" },
  { id: "4", type: "journalier", charakter: "universel", start: "17-10-2025", end: "08-10-2025", description: "maladie", status: "Rejected" },
];

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Approved":
      return { backgroundColor: "#d1f7d6", color: "#0c8a1f" };
    case "Rejected":
      return { backgroundColor: "#ffe0e0", color: "#c20000" };
    default:
      return { backgroundColor: "#fff4d6", color: "#a67500" };
  }
};

const VerticalTable = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header>
        <TouchableOpacity onPress={() => router.navigate("/dashboard")}>
          <MaterialIcons name="arrow-back-ios" size={20} color="#050505" style={{ marginTop: 20 }} />
        </TouchableOpacity>
        <HeaderText>Leave</HeaderText>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity onPress={() => router.navigate("/leave-form")} style={styles.addButton}>
            <MaterialIcons name="add" size={36} color="#1302fc" />
          </TouchableOpacity>
        </View>
      </Header>

      {/* Table */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {swap.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardRow}>
              <Text style={styles.label}>Leave type</Text>
              <Text style={styles.value}>{item.type}</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.label}>Leave Character</Text>
              <Text style={styles.value}>{item.charakter}</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.label}>Start date</Text>
              <Text style={styles.value}>{item.start}</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.label}>End Date</Text>
              <Text style={styles.value}>{item.end}</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.label}>Description</Text>
              <Text style={[styles.value, { flexShrink: 1 }]}>{item.description}</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.label}>Status</Text>
              <Text style={[styles.statusBadge, getStatusStyle(item.status)]}>{item.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default VerticalTable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6fa",
    padding: 10,
  },
  addButtonContainer: {
    alignItems: "center",
    marginBottom: -20,
    marginRight: 10,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
    marginHorizontal: -100,
  },

  // Card styles
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    fontWeight: "600",
    color: "#555",
    width: 100,
  },
  value: {
    color: "#222",
    flex: 1,
    textAlign: "right",
  },
  statusBadge: {
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
    overflow: "hidden",
    minWidth: 80,
  },
});
