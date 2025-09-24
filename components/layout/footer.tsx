import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Footer = ()=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.item}>
                <Icon name="home" size={24} color="#6B7280" />
                <Text style={styles.label}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <Icon name="assigment" size={24} color="#6B7280" />
                <Text style={styles.label}>Homework</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <Icon name="event-busy" size={24} color="#6B7280" />
                <Text style={styles.label}>Leave</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <Icon name="person" size={24} color="#6B7280" />
                <Text style={styles.label}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles= StyleSheet.create({
    container:{
        flex:1,
        flexDirection: "row",
        bottom: 0,
        left: 0,
        right:0, 
        padding:1,
        justifyContent: "space-around",
        backgroundColor: "#fff",
        paddingVertical: 10,
        position: "absolute",
        borderTopWidth: 1000,
        borderTopColor: "#E5E7EB",
    },
    item: {
        alignItems: "center",
    },
    label: {
        marginTop: 4,
        fontSize: 12,
        color: "#6B7280",
    },
});
export default Footer;