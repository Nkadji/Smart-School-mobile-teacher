import React, { Children, ReactNode } from 'react';
import { View, Text } from 'react-native';

interface TextLabelProps {
  children?: ReactNode;
}

const TextLabel = ({ children}: TextLabelProps) => { 
  return (
    <View >
      <Text style={{fontSize:17, 
              color:'#020202ff', marginLeft: 10, marginTop: 15}}>
            {children}
      </Text>
    </View>
  );
};
export default TextLabel;