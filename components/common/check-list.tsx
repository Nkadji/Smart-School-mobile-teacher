import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type StatusType = "present" | "absent";

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
          {status === "present" && <Icon name="check" size={10} color="Blue" />}
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
          {status === "absent" && <Icon name="close" size={10} color="red" />}
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
    gap: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#aaa",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});
