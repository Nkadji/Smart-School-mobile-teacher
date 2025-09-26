import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface DropdownProps {
  options: string[];
}

const Dropdown = ({ options }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  return (
    <View style={styles.container}>
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
    width: 300,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#cacacaff',
    borderRadius: 10,
    height: 45,
    paddingHorizontal: 15,
  },
  options: {
    borderWidth: 2,
    borderColor: '#d3d3d3ff',
    borderTopWidth: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10, marginTop:-7,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3ff',
  },
});

export default Dropdown;