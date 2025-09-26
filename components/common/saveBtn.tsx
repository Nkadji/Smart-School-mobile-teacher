import React, { ReactNode } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface SaveBtnProps {
  children?: ReactNode;
}

const SaveBtn = ({ children }: SaveBtnProps) => { 
  return (
    <View style={{
    backgroundColor: '#1504ffff',
    borderRadius:10,
    width:270,
    height:35,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:23
    
    }}>
      <Text style={{fontSize:20, 
      fontWeight:'bold',
        justifyContent:'center', 
        color:'#ffffff',}}>
      {children}
      </Text>
    </View>
  );
};
export default SaveBtn;