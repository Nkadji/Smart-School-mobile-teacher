// import React from "react";
// import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";

// interface Course {
//   code: string;
//   name: string;
//   hours: number;
//   exhausted: number;
//   unvalidated: number;
//   remaining: number;
//   type: string;
// }
// const courses = [
//   {
//     code: "arts",
//     name: "Arts",
//     hours: 20,
//     exhausted: 0,
//     unvalidated: 0,
//     remaining: 20,
//     type: "CM",
//   },
//   {
//     code: "music",
//     name: "Music",
//     hours: 20,
//     exhausted: 0,
//     unvalidated: 0,
//     remaining: 20,
//     type: "CM",
//   },
//   {
//     code: "phy",
//     name: "Physique",
//     hours: 3,
//     exhausted: 0,
//     unvalidated: 0,
//     remaining: 3,
//     type: "CM",
//   },
//   {
//     code: "SOCS-HI-401",
//     name: "History Basics",
//     hours: 14,
//     exhausted: 25,
//     unvalidated: 0,
//     remaining: -11,
//     type: "CM",
//   },
//   {
//     code: "ART-PE-503",
//     name: "Physical Education Basics",
//     hours: 2,
//     exhausted: 0,
//     unvalidated: 0,
//     remaining: 2,
//     type: "TD",
//   },
// ];

// const RegisteredCourses = () => {
//   const renderBadge = (value: number | string, color: string) => (
//     <View style={[styles.badge, { backgroundColor: color }]}>
//       <Text style={styles.badgeText}>{value}</Text>
//     </View>
//   );

//   const renderItem = ({ item }: { item: Course }) => (
//     <View style={styles.card}>
//       <View style={styles.headerRow}>
//         <Text style={styles.courseCode}>{item.code}</Text>
//         <Text style={styles.courseType}>{item.type}</Text>
//       </View>

//       <Text style={styles.courseName}>{item.name}</Text>

//       <View style={styles.infoRow}>
//         <Text style={styles.label}>Hours: </Text>
//         {renderBadge(item.hours, "#6c5ce7")}
//       </View>

//       <View style={styles.infoRow}>
//         <Text style={styles.label}>Exhausted: </Text>
//         {renderBadge(item.exhausted, "#00b894")}
//       </View>

//       <View style={styles.infoRow}>
//         <Text style={styles.label}>Unvalidated: </Text>
//         {renderBadge(item.unvalidated, "#d63031")}
//       </View>

//       <View style={styles.infoRow}>
//         <Text style={styles.label}>Remaining: </Text>
//         {renderBadge(item.remaining, item.remaining < 0 ? "#e17055" : "#fdcb6e")}
//       </View>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Registered Courses</Text>
//       <FlatList
//         data={courses}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={renderItem}
//         contentContainerStyle={{ paddingBottom: 30 }}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f6fa",
//     padding: 15,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "700",
//     marginBottom: 15,
//     textAlign: "center",
//     color: "#2d3436",
//   },
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     padding: 15,
//     marginBottom: 15,
//     shadowColor: "#000",
//     shadowOpacity: 0.08,
//     shadowRadius: 6,
//     shadowOffset: { width: 0, height: 3 },
//     elevation: 3,
//   },
//   headerRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 6,
//   },
//   courseCode: {
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "#636e72",
//   },
//   courseType: {
//     fontSize: 13,
//     fontWeight: "600",
//     color: "#0984e3",
//   },
//   courseName: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#2d3436",
//     marginBottom: 12,
//   },
//   infoRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 6,
//   },
//   label: {
//     fontSize: 14,
//     color: "#636e72",
//     width: 100,
//   },
//   badge: {
//     paddingVertical: 4,
//     paddingHorizontal: 12,
//     borderRadius: 20,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   badgeText: {
//     color: "#fff",
//     fontWeight: "700",
//   },
// });

// export default RegisteredCourses;


// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   FlatList,
// } from "react-native";

// interface Course {
//   code: string;
//   name: string;
//   hours: number;
//   exhausted: number;
//   unvalidated: number;
//   remaining: number;
//   type: string;
// }

// const courses: Course[] = [
//   { code: "arts", name: "arts", hours: 20, exhausted: 0, unvalidated: 0, remaining: 20, type: "CM" },
//   { code: "music", name: "music", hours: 20, exhausted: 0, unvalidated: 0, remaining: 20, type: "CM" },
//   { code: "Phy", name: "Physique", hours: 3, exhausted: 0, unvalidated: 0, remaining: 3, type: "CM" },
//   { code: "SOCS-HI-401", name: "History Basics", hours: 14, exhausted: 25, unvalidated: 0, remaining: -11, type: "CM" },
//   { code: "ART-PE-503", name: "Physical Education Basics", hours: 2, exhausted: 0, unvalidated: 0, remaining: 2, type: "TD" },
//   { code: "ART-PE-503", name: "Physical Education Basics", hours: 2, exhausted: 0, unvalidated: 0, remaining: 2, type: "CM" },
// ];

// const RegisteredCoursesTable = () => {
//   const renderHeader = () => (
//     <View style={[styles.row, styles.headerRow]}>
//       <Text style={[styles.cell, styles.headerCell, { flex: 1.2 }]}>Code uvc</Text>
//       <Text style={[styles.cell, styles.headerCell, { flex: 2 }]}>Name uvc</Text>
//       <Text style={[styles.cell, styles.headerCell]}>Hours</Text>
//       <Text style={[styles.cell, styles.headerCell]}>Exhausted</Text>
//       <Text style={[styles.cell, styles.headerCell]}>Unvalidated</Text>
//       <Text style={[styles.cell, styles.headerCell]}>Remaining</Text>
//       <Text style={[styles.cell, styles.headerCell]}>Type</Text>
//     </View>
//   );

//   const renderRow = ({ item, index }: { item: Course; index: number }) => (
//     <View
//       style={[
//         styles.row,
//         index % 2 === 0 ? styles.evenRow : styles.oddRow,
//       ]}
//     >
//       <Text style={[styles.cell, { flex: 1.2 }]}>{item.code}</Text>
//       <Text style={[styles.cell, { flex: 2 }]}>{item.name}</Text>
//       <Text style={[styles.cell, styles.badgePurple]}>{item.hours}</Text>
//       <Text style={[styles.cell, styles.badgeGreen]}>{item.exhausted}</Text>
//       <Text style={[styles.cell, item.unvalidated === 0 ? styles.badgeRedEmpty : styles.badgeRed]}>
//         {item.unvalidated}
//       </Text>
//       <Text style={[styles.cell, item.remaining < 0 ? styles.badgeOrange : styles.badgeYellow]}>
//         {item.remaining}
//       </Text>
//       <Text style={styles.cell}>{item.type}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Registered Courses</Text>

//       {/* Scroll horizontal pour voir toutes les colonnes */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//         <View style={{ minWidth: 800 }}>
//           {renderHeader()}
//           <FlatList
//             data={courses}
//             renderItem={renderRow}
//             keyExtractor={(item, index) => index.toString()}
//             scrollEnabled={false} // important pour éviter double scroll
//           />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f6fa",
//     padding: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "700",
//     marginVertical: 10,
//     textAlign: "center",
//     color: "#2d3436",
//   },
//   row: {
//     flexDirection: "row",
//     paddingVertical: 10,
//     alignItems: "center",
//   },
//   headerRow: {
//     backgroundColor: "#eaeaea",
//     borderTopLeftRadius: 8,
//     borderTopRightRadius: 8,
//   },
//   cell: {
//     flex: 1,
//     textAlign: "center",
//     fontSize: 13,
//     color: "#2d3436",
//   },
//   headerCell: {
//     fontWeight: "700",
//     fontSize: 13,
//     color: "#2d3436",
//   },
//   evenRow: {
//     backgroundColor: "#ffffff",
//   },
//   oddRow: {
//     backgroundColor: "#f1f2f6",
//   },
//   badgePurple: {
//     backgroundColor: "#6c5ce7",
//     color: "#fff",
//     borderRadius: 20,
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     overflow: "hidden",
//     textAlign: "center",
//   },
//   badgeGreen: {
//     backgroundColor: "#00b894",
//     color: "#fff",
//     borderRadius: 20,
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     overflow: "hidden",
//     textAlign: "center",
//   },
//   badgeRed: {
//     backgroundColor: "#d63031",
//     color: "#fff",
//     borderRadius: 20,
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     overflow: "hidden",
//     textAlign: "center",
//   },
//   badgeRedEmpty: {
//     backgroundColor: "#d63031",
//     color: "#fff",
//     borderRadius: 20,
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     overflow: "hidden",
//     textAlign: "center",
//   },
//   badgeYellow: {
//     backgroundColor: "#fdcb6e",
//     color: "#fff",
//     borderRadius: 20,
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     overflow: "hidden",
//     textAlign: "center",
//   },
//   badgeOrange: {
//     backgroundColor: "#e17055",
//     color: "#fff",
//     borderRadius: 20,
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     overflow: "hidden",
//     textAlign: "center",
//   },
// });

// export default RegisteredCoursesTable;


// RegisteredCoursesTable.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Header from "@/components/list/header";
import HeaderText from "@/components/list/header-text";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";


interface Course {
  code: string;
  name: string;
  hours: number;
  exhausted: number;
  unvalidated: number;
  remaining: number;
  type: string;
}

/** Ajuste ces largeurs si tu veux un rendu différent */
const COL_WIDTHS = {
  code: 110,
  name: 240,
  hours: 80,
  exhausted: 100,
  unvalidated: 110,
  remaining: 100,
  type: 80,
};
const TOTAL_WIDTH =
  COL_WIDTHS.code +
  COL_WIDTHS.name +
  COL_WIDTHS.hours +
  COL_WIDTHS.exhausted +
  COL_WIDTHS.unvalidated +
  COL_WIDTHS.remaining +
  COL_WIDTHS.type;

const windowHeight = Dimensions.get("window").height;
const LIST_MAX_HEIGHT = Math.max(240, windowHeight - 220); // ajuste la hauteur maximale du tableau

const sampleData: Course[] = [
  { code: "ARTS-101", name: "Arts", hours: 20, exhausted: 0, unvalidated: 0, remaining: 20, type: "CM" },
  { code: "MUS-205", name: "Music", hours: 20, exhausted: 0, unvalidated: 0, remaining: 20, type: "CM" },
  { code: "PHY-003", name: "Physique", hours: 3, exhausted: 0, unvalidated: 0, remaining: 3, type: "CM" },
  { code: "SOCS-HI-401", name: "History Basics", hours: 14, exhausted: 25, unvalidated: 0, remaining: -11, type: "CM" },
  { code: "PE-503", name: "Physical Education Basics", hours: 2, exhausted: 0, unvalidated: 0, remaining: 2, type: "TD" },
  { code: "ARTS-101", name: "Arts", hours: 20, exhausted: 0, unvalidated: 0, remaining: 20, type: "CM" },
  { code: "MUS-205", name: "Music", hours: 20, exhausted: 0, unvalidated: 0, remaining: 20, type: "CM" },
  { code: "PHY-003", name: "Physique", hours: 3, exhausted: 0, unvalidated: 0, remaining: 3, type: "CM" },
  { code: "SOCS-HI-401", name: "History Basics", hours: 14, exhausted: 25, unvalidated: 0, remaining: -11, type: "CM" },
  { code: "PE-503", name: "Physical Education Basics", hours: 2, exhausted: 0, unvalidated: 0, remaining: 2, type: "TD" },
  { code: "ARTS-101", name: "Arts", hours: 20, exhausted: 0, unvalidated: 0, remaining: 20, type: "CM" },
  { code: "MUS-205", name: "Music", hours: 20, exhausted: 0, unvalidated: 0, remaining: 20, type: "CM" },
  { code: "PHY-003", name: "Physique", hours: 3, exhausted: 0, unvalidated: 0, remaining: 3, type: "CM" },
  { code: "SOCS-HI-401", name: "History Basics", hours: 14, exhausted: 25, unvalidated: 0, remaining: -11, type: "CM" },
  { code: "PE-503", name: "Physical Education Basics", hours: 2, exhausted: 0, unvalidated: 0, remaining: 2, type: "TD" },
];

const Pill: React.FC<{ children: React.ReactNode; style?: any }> = ({ children, style }) => (
  <View style={[styles.pill, style]}>
    <Text style={styles.pillText}>{children}</Text>
  </View>
);

const HeaderCell: React.FC<{ width: number; children: React.ReactNode }> = ({ width, children }) => (
  <View style={[styles.headerCell, { width }]}>
    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.headerCellText}>
      {children}
    </Text>
  </View>
);

const Cell: React.FC<{ width: number; children: React.ReactNode }> = ({ width, children }) => (
  <View style={[styles.cell, { width }]}>
    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.cellText}>
      {children}
    </Text>
  </View>
);

const RegisteredCoursesTable: React.FC<{ data?: Course[] }> = ({ data = sampleData }) => {
  const renderHeader = () => (
    <View style={[styles.row, styles.headerRow]}>
      <HeaderCell width={COL_WIDTHS.code}>Code uvc</HeaderCell>
      <HeaderCell width={COL_WIDTHS.name}>Name uvc</HeaderCell>
      <HeaderCell width={COL_WIDTHS.hours}>Hours</HeaderCell>
      <HeaderCell width={COL_WIDTHS.exhausted}>Exhausted</HeaderCell>
      <HeaderCell width={COL_WIDTHS.unvalidated}>Unvalidated</HeaderCell>
      <HeaderCell width={COL_WIDTHS.remaining}>Remaining</HeaderCell>
      <HeaderCell width={COL_WIDTHS.type}>Type</HeaderCell>
    </View>
  );

  const renderRow = ({ item, index }: { item: Course; index: number }) => {
    const rowStyle = index % 2 === 0 ? styles.evenRow : styles.oddRow;
    return (
      <View style={[styles.row, rowStyle]}>
        <Cell width={COL_WIDTHS.code}>{item.code}</Cell>
        <Cell width={COL_WIDTHS.name}>{item.name}</Cell>

        <View style={[styles.cell, { width: COL_WIDTHS.hours }]}>
          <Pill style={styles.pillPurple}>{item.hours}</Pill>
        </View>

        <View style={[styles.cell, { width: COL_WIDTHS.exhausted }]}>
          <Pill style={styles.pillGreen}>{item.exhausted}</Pill>
        </View>

        <View style={[styles.cell, { width: COL_WIDTHS.unvalidated }]}>
          <Pill style={item.unvalidated === 0 ? styles.pillGray : styles.pillRed}>{item.unvalidated}</Pill>
        </View>

        <View style={[styles.cell, { width: COL_WIDTHS.remaining }]}>
          <Pill style={item.remaining < 0 ? styles.pillOrange : styles.pillYellow}>{item.remaining}</Pill>
        </View>

        <Cell width={COL_WIDTHS.type}>{item.type}</Cell>
      </View>
    );
  };
  const router = useRouter();

  return (
    <View style={styles.container}>
       <Header>
        <TouchableOpacity onPress={() => router.navigate("/dashboard")}>
          <MaterialIcons name="arrow-back-ios" size={20} color="#050505" style={{ marginTop: 20 }} />
        </TouchableOpacity>
        <HeaderText>Registered Course</HeaderText>
      </Header>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ width: TOTAL_WIDTH }}>
          {renderHeader()}

          <FlatList
            data={data}
            renderItem={renderRow}
            keyExtractor={(item, idx) => `${item.code}-${idx}`}
            style={{ maxHeight: LIST_MAX_HEIGHT }}
            contentContainerStyle={{ paddingBottom: 12 }}
            showsVerticalScrollIndicator={true}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f8fb",
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    textAlign: "center",
    color: "#222",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 52,
    borderBottomWidth: 1,
    borderBottomColor: "#eef0f4",
  },

  /** Header */
  headerRow: {
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#dfe6ee",
  },
  headerCell: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8
  },
  headerCellText: {
    fontWeight: "700",
    fontSize: 15,
    color: "#1d04ffff",
  },

  /** Normal cell */
  cell: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  cellText: {
    fontSize: 13,
    color: "#232323",
  },

  /** Stripe */
  evenRow: {
    backgroundColor: "#ffffff",
  },
  oddRow: {
    backgroundColor: "#fbfcff",
  },

  /** Pills (badges) */
  pill: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 18,
    minWidth: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  pillText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
  },

  pillPurple: { backgroundColor: "#6c5ce7" },
  pillGreen: { backgroundColor: "#00b894" },
  pillRed: { backgroundColor: "#d63031" },
  pillGray: { backgroundColor: "#b2bec3" },
  pillYellow: { backgroundColor: "#fdcb6e", color: "#000" },
  pillOrange: { backgroundColor: "#e17055" },
});

export default RegisteredCoursesTable;
