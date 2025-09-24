import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface CommentProps {
  placeholder: string;
  style?: any;
}

const Comment = ({ placeholder, style }: CommentProps) => { 
  const [height, setHeight] = useState(45);

  return (
    <TextInput
      style={[styles.input, style, { height }]}
      placeholder={placeholder}
      multiline={true} 
      onContentSizeChange={(e) => {
        setHeight(Math.max(45, e.nativeEvent.contentSize.height)); 
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: '#ddcee9ff',
    borderRadius: 15,
    paddingHorizontal: 15,
    width: 300,
    textAlignVertical: 'top', 
  },
});

export default Comment;