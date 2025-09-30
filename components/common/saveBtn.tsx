import React, { ReactNode } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface SaveBtnProps {
  children?: ReactNode;
}

const SaveBtn = ({ children }: SaveBtnProps) => { 
  return (
    <View style={{
    borderRadius:7,
    height:40,
    width:330,
    backgroundColor:'#0267ffff',
    alignItems:'center',
    alignContent:'center',
    borderColor:'#0267ffff',
    borderWidth:1.5,
    justifyContent:'center',
    
    }}>
      <Text style={{fontSize:20, 
      fontWeight:'bold',
        justifyContent:'center', 
        color:'#fcfcfdff',}}>
      {children}
      </Text>
    </View>
  );
};
export default SaveBtn;