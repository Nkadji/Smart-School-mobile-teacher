import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type StatusType = "present" | "absent" | null;

interface RadioButtonStatusProps {
  status: StatusType;
  onChange: (newStatus: StatusType) => void;
  containerStyle?: ViewStyle;
  optionStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const RadioButtonStatus: React.FC<RadioButtonStatusProps> = ({
  status,
  onChange,
  containerStyle,
  optionStyle,
  textStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {/* Présent */}
      <TouchableOpacity
        style={[styles.option, optionStyle]}
        onPress={() => onChange("present")}
      >
        <View
          style={[
            styles.circle,
            status === "present" && { borderColor: "blue", backgroundColor: "#d5d4fcff" },
          ]}
        >
          {status === "present" && <Icon name="check" size={12} color="Blue" />}
        </View>
      </TouchableOpacity>

      {/* Absent */}
      <TouchableOpacity
        style={[styles.option, optionStyle]}
        onPress={() => onChange("absent")}
      >
        <View
          style={[
            styles.circle,
            status === "absent" && { borderColor: "red", backgroundColor: "#ffd6d6" },
          ]}
        >
          {status === "absent" && <Icon name="close" size={12} color="red" />}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RadioButtonStatus;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 50,
    //justifyContent:'space-between',
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 17,
    height: 17,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#aaa",
    justifyContent:'space-between',
    alignItems: "center",
    //marginRight: 8,
  },

});
