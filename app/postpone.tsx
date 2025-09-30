import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Header from "@/components/list/header";
import HeaderText from "@/components/list/header-text";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const swap = [
  { id: "1", name: "Alice", date: "Maths", start: "Cl1", end: "Pending", comment:'conge de maternite', status:'Pending' },
  { id: "2", name: "Bob", date: "Physique", start: "Cl2", end: "Absent", comment:'conge de maternite', status:'Pending' },
  { id: "3", name: "Charlie", date: "Chimie", start: "Cl3", end: "Présent", comment:'conge de maternite', status:'Pending' },
  { id: "4", name: "Diana", date: "Info", start: "Cl1", end: "Présent", comment:'conge de maternite', status:'Pending' },
  { id: "5", name: "Ethan", date: "Maths", start: "Cl2", end: "Absent", comment:'conge de maternite', status:'Pending' },
];

const VerticalTable = () => {
    const router=useRouter();
  return (
    <View style={styles.container}>
        <Header>
          <TouchableOpacity onPress={() => router.navigate('/postpone-form')}>
            <MaterialIcons name='arrow-back-ios' size={20} color="#050505ff" style={ { fontWeight:"bold", marginTop: 20}}/>
          </TouchableOpacity>
          <HeaderText>Postponed</HeaderText>
          <View style={styles.addButtonContainer}>
            <TouchableOpacity onPress={() => router.navigate('/homework-form')} style={styles.addButton}>
              <MaterialIcons name='add' size={40} color="#f0ad4e" />
            </TouchableOpacity>
          </View>
        </Header>
      <ScrollView horizontal showsHorizontalScrollIndicator>
        <View style={styles.table}>
          {/* Colonne des entêtes */}
          <View style={styles.headerColumn}>
            <Text style={styles.headerCell}>Course Code</Text>
            <Text style={styles.headerCell}>Name uvc</Text>
            <Text style={styles.headerCell}>Date</Text>
            <Text style={styles.headerCell}>Start</Text>
            <Text style={styles.headerCell}>End</Text>
            <Text style={[styles.headerCell, {marginBottom:13}]}>Comment</Text>
            <Text style={styles.headerCell}>Status</Text>
          </View>

          {swap.map((swap) => (
            <View key={swap.id} style={styles.dataColumn}>
              <Text style={styles.dataCell}>{swap.id}</Text>
              <Text style={styles.dataCell}>{swap.name}</Text>
              <Text style={styles.dataCell}>{swap.date}</Text>
              <Text style={styles.dataCell}>{swap.start}</Text>
              <Text style={styles.dataCell}>{swap.end}</Text>
              <Text style={styles.dataCell}>{swap.comment}</Text>
              <Text style={styles.dataCell}>{swap.status}</Text>
              <Text
                style={[
                  styles.dataCell,
                ]}
              >
                {swap.status}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default VerticalTable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
   addButtonContainer: {
    alignItems: 'center',
    marginBottom: -20,
    marginRight: 10,

  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    marginHorizontal: -100,
  },
  table: {
    flexDirection: "row",
    borderWidth: 0,
    borderColor: "#ccc",
  },

    headerColumn: {
    //backgroundColor: "#f0f0f0",
    //borderRightWidth: 1,
    borderColor: "#ccc",
  },
  headerCell: {
    width: 100,
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontWeight: "bold",
    fontSize:14,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    textAlign: "left",
  },

  dataColumn: {
    borderRightWidth: 1,
    borderColor: "#eee",
  },
  dataCell: {
    width: 120,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderColor: "#eee",
    textAlign: "center",
  },

  
});
