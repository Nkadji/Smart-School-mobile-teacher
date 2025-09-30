import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ViewStyle, StyleSheet, StyleProp } from 'react-native';

interface DropdownProps {
  options: string[];
  style?: StyleProp<ViewStyle>;
}

const Dropdown = ({ options, style }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  return (
    <View >
      <TouchableOpacity 
        style={styles.header}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text>{selected}</Text>
        <MaterialIcons name='expand-more' size={30} color='#666'/>
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.options}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 325,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cacacaff',
    borderRadius: 10,
    height: 45,
    paddingHorizontal: 15,
    width: 280,
  },
  options: {
    position:'absolute',
    zIndex:1000,
    borderWidth: 2,
    borderColor: '#d3d3d3ff',
    backgroundColor:'#fffefeff',
    borderTopWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width:280,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3ff',
  },
});

export default Dropdown;