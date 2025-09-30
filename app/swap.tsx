import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Header from "@/components/list/header";
import HeaderText from "@/components/list/header-text";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const swap = [
  { id: "1", enam: "Physics", other: "English", comment: "evaluation", status: "Pending", action: "what is it?" },
  { id: "2", name: "Mathematics", other: "English", comment: "maladie", status: "Pending", action: "what is it?" },
  { id: "3", name: "Chemie", other: "English", comment: "indisponibilite", status: "Approved", action: "what is it?" },
  { id: "4", name: "Physics", other: "English", comment: "activite post et peri scolaire", status: "Rejected", action: "what is it?"},
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
        <HeaderText>Swap Course</HeaderText>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity onPress={() => router.navigate("/swap-form")} style={styles.addButton}>
            <MaterialIcons name="add" size={36} color="#1302fc" />
          </TouchableOpacity>
        </View>
      </Header>

      {/* Table */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {swap.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardRow}>
              <Text style={styles.label}> My Course</Text>
              <Text style={styles.value}>{item.name}</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.label}>Other Course</Text>
              <Text style={styles.value}>{item.other}</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.label}>Comment</Text>
              <Text style={[styles.value, { flexShrink: 1 }]}>{item.comment}</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.label}>Status</Text>
              <Text style={[styles.statusBadge, getStatusStyle(item.status)]}>{item.status}</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.label}>Action</Text>
              <Text style={styles.value}>{item.action}</Text>
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
