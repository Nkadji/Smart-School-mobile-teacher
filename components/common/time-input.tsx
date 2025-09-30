import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TimeInput = () => {
  const [time, setTime] = useState(''); 
const handleChange = (text: string) => {
    const numeric = text.replace(/\D/g, '');

    let formatted = numeric;

    if (numeric.length > 2) {
      formatted = numeric.slice(0, 2) + ':' + numeric.slice(2, 4);
    }

    setTime(formatted);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={time} 
        onChangeText={handleChange}
        keyboardType="number-pad"
        placeholder="--:--"
        maxLength={5} // 2 chiffres + ':' + 2 chiffres
      />
        <Icon name="access-time" size={22} color="#555" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    width:280,
    height:45,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingVertical: 8,
  },
  
});

export default TimeInput;
