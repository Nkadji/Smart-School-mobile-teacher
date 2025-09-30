import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import{View, Text, StyleSheet} from "react-native";
import { FullWindowOverlay } from "react-native-screens";

interface HomeWorkProps{
    title: string;
    dueDate: string;
    courseName: string;
    state: any;
}
const HomeWorkElement: React.FC<HomeWorkProps>=({title, dueDate, courseName,  state })=>{
    
    return(
        <View >
            
            <Text style={styles.title}>{title}</Text>
            <View style={styles.dessus}>
                <View style={styles.leftRow}>
                    <MaterialIcons name="article" size={15} color="#666" style={styles.icon} />
                    <Text style={styles.text}>{courseName}</Text>
                    <MaterialIcons name="calendar-month" size={15} color="#666" style={styles.icon} />
                    <Text style={styles.text}>{dueDate}</Text>
                </View>

                <Text style={styles.etat}>{state}</Text>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffffff",
    borderRadius: 10,
    padding: 12,
    paddingTop: 17,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOpacity: 5.1,
    shadowRadius: 10,
    elevation: 3, 
    flex:1,
    height: 'auto',
  },
  dessus: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom:-5,
    marginTop:12,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    fontSize: 13,
    color: "#333",
    marginRight: 12,
  },
  etat: {
    borderWidth: 1,
    borderColor: "#f0ad4e",
    color: "#f0ad4e",
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 15,
    fontSize: 12,
    fontWeight: "600",
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    color: "#000",
    marginTop: -8,
  },
});
export default  HomeWorkElement;