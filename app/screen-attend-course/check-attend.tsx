import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";


import RadioButtonStatus from "@/components/common/check-list";
import SaveBtn from "@/components/common/saveBtn";

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
  { id: "10", course:"Maths", niv:"Cl2", name: " Tomba Fiona", status: null, image:"./assets/nattes" },
  { id: "11", course:"Maths", niv:"Cl2", name: "Hodiep George", status: null, image:"./assets/nattes" },
  { id: "12", course:"Maths", niv:"Cl3", name: "Fokou Hannah", status: null, image:"./assets/nattes" },
  { id: "13", course:"Maths", niv:"Cl1", name: "Gongang Frederic", status: null, image:"./assets/nattes" },
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

  interface DropdownProps {
  options: string[];
  
}

const Dropdown = ({ options }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  return (
    <View >
      <TouchableOpacity 
        style={styles.header}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text>{selected}</Text>
        <MaterialIcons name='expand-more' size={30} color='#666'/>
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.options}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

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
            <Dropdown options={['Mathematics/Class 1', 'Mathematics/Class 2', 'Mathematics/Class5']} />

            <View style={styles.tableHeader}>
              
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
            </View>
            <TouchableOpacity style={styles.save} onPress={() => router.replace('../attendenceCourse')}>
              <SaveBtn >Save</SaveBtn>
            </TouchableOpacity>  
          </View>
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
  dropdown: {
    width: 300,
    marginBottom: 15,
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
    width: '55%',
  },
  presentColumn: {
    width: '25%',
  },
  save: {
     paddingVertical:80,
     marginRight: 40,
    alignSelf: 'center',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
    paddingHorizontal: 15,
    width: 365,
    borderTopWidth: 1,
    borderColor: '#d3d3d3ff',

  },
  options: {
    position:'absolute',
    zIndex:1000,
    borderWidth: 2,
    borderColor: '#d3d3d3ff',
    backgroundColor:'#fffefeff',
    borderTopWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width:365,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3ff',
  },
});