import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import Header from "@/components/list/header";
import HeaderText from "@/components/list/header-text";
import RadioButtonStatus from "@/components/common/check-list";
import CourseHeader from "@/components/common/attend-compo";

type StatusType = "present" | "absent";

interface Student {
  id: string;
  course: string;
  niv: string;
  name: string;
  status: StatusType;
}

const initialStudents: Student[] = [
  { id: "1", course:"Maths", niv:"Cl1", name: " Kamga Alicein dousjaidjsoia", status: "present" },
  { id: "2", course:"Maths", niv:"Cl2", name: " Tchonnang Bob", status: "absent" },
  { id: "3", course:"Maths", niv:"Cl1", name: " Tiwa Charlie", status: "present" },
  { id: "4", course:"Maths", niv:"Cl3", name: "Azapfah Diana", status: "present" },
  { id: "5", course:"Maths", niv:"Cl1", name: "Kitio Ethan", status: "absent" },
  { id: "6", course:"Maths", niv:"Cl2", name: " Tomba Fiona", status: "present" },
  { id: "7", course:"Maths", niv:"Cl2", name: "Hodiep George", status: "absent" },
  { id: "8", course:"Maths", niv:"Cl3", name: "Fokou Hannah", status: "present" },
];

const CheckAttendence = () => {
  const router = useRouter();
  const [students, setStudents] = useState(initialStudents);

  const handleStatusChange = (id: string, status: "present" | "absent") => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <Header>
        <TouchableOpacity onPress={() => router.push("/dashboard")}>
          <MaterialIcons
            name="arrow-back-ios"
            size={20}
            color="#050505ff"
            style={{ fontWeight: "bold", marginTop: 20 }}
          />
        </TouchableOpacity>
        <HeaderText>Attendence </HeaderText>
      </Header>

      {/* Contenu avec ScrollView */}
      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
        horizontal={false}
      >
        {/* Conteneur horizontal pour le défilement horizontal */}
        <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.horizontalScrollContent}
        >
          <View style={styles.tableContainer}>
            <Text style={styles.title}>List of Attendence</Text>

            {/* En-tête du tableau */}
            <View style={styles.tableHeader}>
                <View style={[styles.headerCell, styles.nameColumn]}>
                <Text style={styles.headerText}>Specification</Text>
              </View>
              <View style={[styles.headerCell, styles.nameColumn]}>
                <Text style={styles.headerText}>Nom</Text>
              </View>
              <View style={[styles.headerCell, styles.presentColumn]}>
                <Text style={styles.headerText}>Attendence</Text>
              </View>
            </View>

            {/* Corps du tableau */}
            <View style={styles.tableBody}>
              {students.map((item) => (
                <View key={item.id} style={styles.tableRow}>
                    {/* Colonne Specification */}
                    <View style={styles.bodyCell}>
                    <CourseHeader 
                        course={item.course} 
                        niv={item.niv} 
                        day="11/03/2025" 
                    />
                    </View>
                  {/* Colonne Nom */}
                  <View style={[styles.bodyCell, styles.nameColumn]}>
                    <Text style={styles.cellText}>{item.name}</Text>
                  </View>
                  
                  {/* Colonne RadioButton Present */}
                  <View style={[styles.bodyCell, styles.presentColumn]}>
                    <RadioButtonStatus
                      status={item.status}
                      onChange={(newStatus) => handleStatusChange(item.id, newStatus)}
                      containerStyle={styles.radioContainer}
                      textStyle={styles.radioText}
                    />
                  </View>
                  
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default CheckAttendence;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    flexGrow: 1,
  },
  horizontalScrollContent: {
    minWidth: "100%",
  },
  tableContainer: {
    padding: 20,
    minWidth: 400, // Largeur minimale pour assurer un bon affichage
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    //textAlign: "center",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    borderBottomWidth: 2,
    borderColor: "#ddd",
    paddingVertical: 12,
  },
  tableBody: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderTopWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#eee",
    minHeight: 50,
    alignItems: "center",
  },
  headerCell: {
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: "#ddd",
  },
  bodyCell: {
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: "#eee",
    minHeight: 50,
  },
  headerText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  cellText: {
    fontSize: 14,
    textAlign: "center",
  },
  statusText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "capitalize",
  },
  presentStatus: {
    color: "green",
  },
  absentStatus: {
    color: "red",
  },
  placeholderText: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  radioText: {
    fontWeight: "bold",
  },
  // Définition des largeurs de colonnes
  nameColumn: {
    width: 110,
  },
  statusColumn: {
    width: 100,
  },
  presentColumn: {
    width: 100,
  },
  absentColumn: {
    width: 100,
  },
});