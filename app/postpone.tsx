// import React from "react";
// import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
// import Header from "@/components/list/header";
// import HeaderText from "@/components/list/header-text";
// import { MaterialIcons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";

// const swap = [
//   { id: "1", name: "Physics", date: "12-10-2025", start: "10am", end: "12pm", comment:'accident imprevu', status:'Pending' },
//   { id: "2", name: "Mathematics", date: "10-11-2025", start: "8pm", end: "11am", comment:'imtemperie violent ', status:'Pending' },
//   { id: "3", name: "Chemie", date: "2-11-2025", start: "9am", end: "12pm", comment:'conge de maternite', status:'Pending' },
//   { id: "4", name: "Physics", date: "12-11-2025", start: "1pm", end: "3pm", comment:'conge de maternite', status:'Pending' },
//   { id: "5", name: "Mathematics", date: "15-10-2025", start: "2pm", end: "4pm", comment:'conge de maternite', status:'Pending' },
// ];

// const VerticalTable = () => {
//     const router=useRouter();
//   return (
//     <View style={styles.container}>
//         <Header>
//           <TouchableOpacity onPress={() => router.navigate('/dashboard')}>
//             <MaterialIcons name='arrow-back-ios' size={20} color="#050505ff" style={ { fontWeight:"bold", marginTop: 20}}/>
//           </TouchableOpacity>
//           <HeaderText>Postponed</HeaderText>
//           <View style={styles.addButtonContainer}>
//             <TouchableOpacity onPress={() => router.navigate('/postpone-form')} style={styles.addButton}>
//               <MaterialIcons name='add' size={40} color="#1302fcff" />
//             </TouchableOpacity>
//           </View>
//         </Header>
//       <ScrollView horizontal showsHorizontalScrollIndicator>
//         <View style={styles.table}>
//           {/* Colonne des entêtes */}
//           <View style={styles.headerColumn}>
//             <Text style={styles.headerCell}>Course Code</Text>
//             <Text style={styles.headerCell}>Name uvc</Text>
//             <Text style={styles.headerCell}>Date</Text>
//             <Text style={styles.headerCell}>Start</Text>
//             <Text style={styles.headerCell}>End</Text>
//             <Text style={[styles.headerCell, {paddingBottom:28}, {borderBottomWidth: 0}]}>Comment</Text>
//             <Text style={[styles.headerCell, {borderTopWidth: 1}]}>Status</Text>
//           </View>

//           {swap.map((swap) => (
//             <View key={swap.id}>
//               <Text style={styles.dataCell}>{swap.id}</Text>
//               <Text style={styles.dataCell}>{swap.name}</Text>
//               <Text style={styles.dataCell}>{swap.date}</Text>
//               <Text style={styles.dataCell}>{swap.start}</Text>
//               <Text style={styles.dataCell}>{swap.end}</Text>
//               <Text style={[styles.dataCell, {borderBottomWidth: 0,}]}>{swap.comment}</Text>
//               <Text style={[styles.dataCell, {borderTopWidth: 1,}]}>{swap.status}</Text>
//             </View>
//           ))}
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default VerticalTable;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: "#fff",
//   },
//    addButtonContainer: {
//     alignItems: 'center',
//     marginBottom: -20,
//     marginRight: 10,

//   },
//   addButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 0,
//     marginHorizontal: -100,
//   },
//   table: {
//     flexDirection: "row",
//     borderWidth: 0,
//     borderColor: "#ccc",
//   },

//     headerColumn: {
//     //backgroundColor: "#f0f0f0",
//     //borderRightWidth: 1,
//     borderColor: "#ccc",
//   },
//   headerCell: {
//     width: 100,
//     color:"#22009eff",
//     paddingVertical: 12,
//     paddingHorizontal: 8,
//     fontWeight: "bold",
//     fontSize:14,
//     borderBottomWidth: 1,
//     borderColor: "#eee",
//     textAlign: "left",
//   },

  
//   dataCell: {
//     width: 120,
//     paddingVertical: 12,
//     paddingHorizontal: 8,
//     borderBottomWidth: 1,
//     borderColor: "#eee",
//     textAlign: "center",
//   },

  
// });


import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Header from "@/components/list/header";
import HeaderText from "@/components/list/header-text";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const swap = [
  { id: "1", name: "Physics", date: "12-10-2025", start: "10:00", end: "12:00", comment: "Accident imprévu", status: "Pending" },
  { id: "2", name: "Mathematics", date: "10-11-2025", start: "08:00", end: "11:00", comment: "Intempéries violentes", status: "Pending" },
  { id: "3", name: "Chemie", date: "02-11-2025", start: "09:00", end: "12:00", comment: "Congé maternité", status: "Approved" },
  { id: "4", name: "Physics", date: "12-11-2025", start: "13:00", end: "15:00", comment: "Congé maternité de jumequx mort de naissance", status: "Rejected" },
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
        <HeaderText>Postponed</HeaderText>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity onPress={() => router.navigate("/postpone-form")} style={styles.addButton}>
            <MaterialIcons name="add" size={36} color="#1302fc" />
          </TouchableOpacity>
        </View>
      </Header>

      {/* Table */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {swap.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardRow}>
              <Text style={styles.label}>Course</Text>
              <Text style={styles.value}>{item.name}</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.label}>Date</Text>
              <Text style={styles.value}>{item.date}</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.label}>Start</Text>
              <Text style={styles.value}>{item.start}</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.label}>End</Text>
              <Text style={styles.value}>{item.end}</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.label}>Comment</Text>
              <Text style={[styles.value, { flexShrink: 1 }]}>{item.comment}</Text>
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
