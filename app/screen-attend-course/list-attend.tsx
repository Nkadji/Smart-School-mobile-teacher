import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import RadioButtonStatus from "@/components/common/check-list";
import CourseHeader from "@/components/common/attend-compo";

type StatusType = "present" | "absent" | null;

interface Student {
  id: string;
  course: string;
  niv: string;
  name: string;
  status: StatusType;
  image: any;
}

const initialStudents: Student[] = [
  { id: "1", course:"Maths", niv:"Cl1", name: "Kamga Atangana", status: "present", image:"./assets/nattes" },
  { id: "2", course:"Maths", niv:"Cl1", name: "Tchonnang Djioe", status: "absent", image:"@/assets/nattes" },
  { id: "3", course:"Maths", niv:"Cl1", name: "Tiwa Atangana", status: "present", image:"@/assets/nattes" },
  { id: "4", course:"Maths", niv:"Cl1", name: "Azapfah Djiolim", status: "present", image:"@/assets/nattes" },
  { id: "5", course:"Maths", niv:"Cl1", name: "Kitio Atangana", status: "absent", image:"@/assets/nattes" },
  { id: "6", course:"Maths", niv:"Cl1", name: "Tomba Djiolime", status: "present", image:"@/assets/nattes" },
  { id: "7", course:"Maths", niv:"Cl1", name: "Hodiep Atangana", status: "absent", image:"@/assets/nattes" },
  { id: "8", course:"Maths", niv:"Cl1", name: "Fokou Djiolime", status: "present", image:"@/assets/nattes" },
];

const ListAttendence = () => {
  const router = useRouter();
  const [students, setStudents] = useState(initialStudents);

  // const handleStatusChange = (id: string, status: "present" | "absent" | null) => {
  //   setStudents((prev) =>
  //     prev.map((student) =>
  //       student.id === id ? { ...student, status } : student
  //     )
  //   );
  // };

  return (
    <View style={{ flex: 1 }}>

      {/* Contenu avec ScrollView */}
      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
        horizontal={false}
      >
        
          <View style={styles.tableContainer}>

            {/* En-tête du tableau */}
            <View style={styles.tableHeader}>
                {/* <View style={[styles.headerCell, styles.nameColumn]}>
                <Text style={styles.headerText}>Specification</Text>
              </View> */}
              <View style={[styles.headerCell, styles.nameColumn]}>
                <Text style={styles.headerText}>Student</Text>
              </View>
              <View style={[styles.headerLast, styles.presentColumn]}>
                <Text style={styles.headerText}>Present</Text>
                <Text style={styles.headerText}>Absent</Text>
              </View>
            </View>

            {/* Corps du tableau */}
            <View style={styles.tableBody}>
              {students.map((item) => (
                <View key={item.id} style={styles.tableRow}>
                    {/* Colonne Specification */}
                    <View style={styles.bodyCell}>
                    <Image source={require('@/assets/nattes.png')} style={{ width: 35, height: 35, marginRight:5, borderRadius: 20 }} />
                    </View>
                  {/* Colonne Nom */}
                  <View style={[styles.bodyCell, styles.nameColumn, {paddingHorizontal:80}]}>
                    <Text style={styles.cellText}>{item.name}</Text>
                    <CourseHeader 
                        course={item.course} 
                        niv={item.niv} 
                        day="11/03/2025" 
                    />
                  </View>
                  
                  {/* Colonne RadioButton Present */}
                  <View style={[styles.bodyCell, styles.presentColumn]}>
                    <RadioButtonStatus
                      status={item.status}
                      onChange={(newStatus) => null}
                      containerStyle={styles.radioContainer}
                      textStyle={styles.radioText}
                    />
                  </View>
                  
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
    </View>
  );
};

export default ListAttendence;

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
    paddingHorizontal: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: "#ddd",
  },
   headerLast: {
    justifyContent:'space-between',
    alignItems: "center",
    flexDirection:'row',
    marginLeft: 30,
  
    
  },
  bodyCell: {
    paddingLeft: 8,
     justifyContent: "center",
    //  alignItems: "center",
    //borderRightWidth: 1,
    borderColor: "#eee",
    minHeight: 50,
  },
  headerText: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  cellText: {
    fontSize: 14,
    fontWeight:'bold',
    //textAlign: "center",
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
    //justifyContent: "center",
    alignItems: "center",
    marginLeft:-50,
    paddingLeft: 8,
  },
  radioText: {
    fontWeight: "bold",
  },
  // Définition des largeurs de colonnes
  nameColumn: {
    width: 200,
  },
  presentColumn: {
    width: 90,
  },
});