import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface CourseHeaderProps {
  course: string;
  niv: string;
  day: string;
}

const CourseHeader: React.FC<CourseHeaderProps> = ({ course, niv, day }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>
        {course} / {niv}
      </Text>
      <View style={styles.separator} />
      <Text style={styles.bottomText}>{day}</Text>
    </View>
  );
};

export default CourseHeader;

const styles = StyleSheet.create({
  container: {
   // alignItems: "center",
    marginVertical: 0,
  },
  topText: {
    fontSize: 9,
    color: "#222",
  },
  separator: {
    marginVertical: 0.1,
    
    
    backgroundColor: "#ccc",
  },
  bottomText: {
    fontSize: 9,
    color: "#444",
    fontWeight: "bold",
  },
});
