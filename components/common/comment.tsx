import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface CommentProps {
  placeholder: string;
  style?: any;
}

const Comment = ({ placeholder, style }: CommentProps) => { 
  const [height, setHeight] = useState(70);

  return (
    <TextInput
      style={[styles.input, style, { height }]}
      placeholder={placeholder}
      multiline={true} 
      onContentSizeChange={(e) => {
        setHeight(Math.max(100, e.nativeEvent.contentSize.height)); 
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#cacacaff',
    borderRadius: 10,
    paddingHorizontal: 15,
    width: 325,
    textAlignVertical: 'top', 
  },
});

export default Comment;