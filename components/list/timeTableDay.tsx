import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import{View, Text, StyleSheet, ViewStyle} from "react-native";
import Components from "./component";


interface TimeTableDayProps{
    title: string;
    startTime: string;
    endTime: string;
    location: string;
    style?: ViewStyle;
}
const TimeTableDay: React.FC<TimeTableDayProps> =({ title, startTime, endTime, location, style})=>{
    return(
        <Components>
            <View style={{flexDirection:'column', borderRadius:20}}>
                <Text style={styles.title}>{title} Lecture in {location}</Text>
                <View style={{flexDirection:"row"}}>
                    <MaterialIcons name="schedule" size={20} color="#5f5e5eff" />
                    <Text style={styles.time}>{startTime} To {endTime}</Text>
                </View>
            </View>
        </Components>
    );
};


const styles= StyleSheet.create({
    
    title: {
        fontSize: 17,
        fontWeight: 500,
        marginBottom: 4,
        color:"#070707ff",
    },
    time: {
        fontSize: 14,
        color: "#6B7280",
    },
});
export default TimeTableDay;