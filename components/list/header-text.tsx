import React, { ReactNode } from 'react';
import { Text } from 'react-native';

interface HeaderTextProps {
  children?: ReactNode;
}

const HeaderText = ({ children }: HeaderTextProps) => { 
  return (
    <Text style={{fontSize: 20,
    fontWeight: 'bold',
    color: '#080808ff',
    marginRight:100,
    marginTop: 15}}>
      {children}
    </Text>
  );
};
export default HeaderText;