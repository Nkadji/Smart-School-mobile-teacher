import React, { useState } from "react";
import { View, Text, FlatList,Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import HeaderText from "@/components/list/header-text";


import RadioButtonStatus from "@/components/common/check-list";
import Dropdown from "@/components/common/dropdown";
import SaveBtn from "@/components/common/saveBtn";
import Header from "@/components/list/header";

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
  { id: "1", course:"Maths", niv:"Cl1", name: " Kamga Alice", status: null, image:"./assets/nattes" },
  { id: "2", course:"Maths", niv:"Cl2", name: " Tchonnang Bob", status: null, image:"./assets/nattes" },
  { id: "3", course:"Maths", niv:"Cl1", name: " Tiwa Charlie", status: null, image:"./assets/nattes" },
  { id: "4", course:"Maths", niv:"Cl3", name: "Azapfah Diana", status: null, image:"./assets/nattes" },
  { id: "5", course:"Maths", niv:"Cl1", name: "Kitio Ethan", status: null, image:"./assets/nattes" },
  { id: "6", course:"Maths", niv:"Cl2", name: " Tomba Fiona", status: null, image:"./assets/nattes" },
  { id: "7", course:"Maths", niv:"Cl2", name: "Hodiep George", status: null, image:"./assets/nattes" },
  { id: "8", course:"Maths", niv:"Cl3", name: "Fokou Hannah", status: null, image:"./assets/nattes" },
  { id: "9", course:"Maths", niv:"Cl1", name: "Gongang Frederic", status: null, image:"./assets/nattes" },
];

const CheckAttendence = () => {
  const router = useRouter();
  const [students, setStudents] = useState(initialStudents);

  const handleStatusChange = (id: string, status: "present" | "absent" |null) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  return (
    
    <View >
      <Header>
              <TouchableOpacity onPress={() => router.navigate('/checkHomework')}>
                  <MaterialIcons name='arrow-back-ios' size={20} color="#050505ff" style={ { fontWeight:"bold", marginTop: 20}}/>
              </TouchableOpacity>
              <HeaderText>Check...</HeaderText>
          </Header>
      {/* Contenu avec ScrollView */}
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
        horizontal={false}
      >
        
          <View style={styles.tableContainer}>
            
            <View style={styles.tableHeader}>
              
              <View style={[styles.headerCell, styles.nameColumn]}>
                <Text style={styles.headerText}>Student</Text>
              </View>
              <View style={[styles.headerLast, styles.presentColumn]}>
                <Text style={styles.headerText}>Done</Text>
                <Text style={styles.headerText}>Undone</Text>
              </View>
            </View>

            {/* Corps du tableau */}
            <View style={styles.tableBody}>
              {students.map((item) => (
                <View key={item.id} style={styles.tableRow}>
                  {/* Colonne Nom */}
                  <View style={styles.bodyCell}>
                <Image source={require('@/assets/nattes.png')} style={{ width: 35, height: 35, borderRadius: 20 }} />
              </View>
                  <View style={[styles.bodyCell, styles.nameColumn]}>
                    <Text style={styles.cellText}>{item.name}</Text>
                  </View>
                  
                  {/* Colonne RadioButton Present */}
                  <View style={[styles.bodyLast, styles.presentColumn]}>
                    <RadioButtonStatus
                      status={item.status}
                      onChange={(newStatus) => handleStatusChange(item.id, newStatus)}
                      containerStyle={styles.radioContainer}
                      textStyle={styles.radioText}
                    />
                  </View>
                </View>

              ))}
            <TouchableOpacity style={{padding:50,marginLeft:-35, alignItems:'center'}} onPress={() => router.replace('../checkHomework')}>
              <SaveBtn >Save</SaveBtn>
            </TouchableOpacity> 
            </View>
             
          </View>
        </ScrollView>
    </View>
  );
};

export default CheckAttendence;

const styles = StyleSheet.create({
 
  scrollContent: {
    flexGrow: 1,
    paddingBottom:40,
  },
  
  tableContainer: {
    minWidth: 400, // Largeur minimale pour assurer un bon affichage
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    borderBottomWidth: 2,
    borderColor: "#ddd",
    paddingVertical: 12,
  },
  tableBody: {
    borderWidth: 0,
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
    borderColor: "#ddd",
  },
  headerLast: {
    alignItems: "center",
    flexDirection:'row',
    justifyContent:'space-between'
  },
  bodyCell: {
    paddingHorizontal: 8,
    justifyContent: "center",
    //alignItems: "center",
    minHeight: 50,
  },
  bodyLast: {
    minHeight: 50,
    marginLeft:-52,
    alignItems:'center',
    justifyContent: "center",
  },
  headerText: {
    fontSize: 13,
    fontWeight: "bold",
    //textAlign: "center",
    justifyContent:'space-between',
  },
  cellText: {
    fontSize: 14,
    //textAlign: "center",
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
    width: '55%',
  },
  presentColumn: {
    width: '25%',
  },
});