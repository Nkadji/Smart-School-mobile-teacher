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
    width:320,
    margin:60,
    backgroundColor:'#0206fdff',
    alignItems:'center',
    alignContent:'center',
    borderColor:'#0206fdff',
    borderWidth:1.5,
    justifyContent:'center',
    marginBottom:-93
    
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