import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface HeaderProps {
  children?: ReactNode;
}

const Header = ({ children }: HeaderProps) => { 
  return (
    <View style={{flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,    
    borderColor:'transparent'}}>
      {children}
    </View>
  );
};
export default Header;
