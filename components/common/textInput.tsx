import React from 'react';
import { TextInput, StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface TextInProps {
  placeholder: string;
  style?: any; 
}

const TextIn = ({ placeholder,style }: TextInProps) => { 
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
     flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ddcee9ff',
    borderRadius: 15,
    height: 45,
    paddingHorizontal: 15,
    width:300,
  },
});

export default TextIn;