import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface ComponentsProps {
  children?: ReactNode;
}

const Components: React.FC<ComponentsProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f1f1f1ff",
        borderRadius: 10,
        padding: 12,
        paddingTop: 17,
        marginVertical: 7,
        paddingHorizontal:10,
        marginLeft:10,
        flex: 1,
        height:'100%',
        width:'95%',
    },
});

export default Components;
