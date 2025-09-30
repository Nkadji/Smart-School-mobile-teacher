import React, { Children, ReactNode } from 'react';
import { View, Text } from 'react-native';

interface TextLabelProps {
  children?: ReactNode;
}

const TextLabel = ({ children}: TextLabelProps) => { 
  return (
    <View >
      <Text style={{fontSize:13, fontWeight:'bold',
              color:'#020202a6', paddingTop: 15, marginLeft:5}}>
            {children}
      </Text>
    </View>
  );
};
export default TextLabel;