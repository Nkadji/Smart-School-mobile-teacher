import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';

interface FileInputProps {
  onFileSelect?: (file: any) => void;
}

const FileInput = ({ onFileSelect }: FileInputProps) => {
  const [fileName, setFileName] = useState('');

  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (result.assets) {
        setFileName(result.assets[0].name);
        onFileSelect?.(result.assets[0]);
      }
    } catch (error) {
      Alert.alert('Erreur', 'Impossible to select this file');
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={pickFile}>
      <Text style={styles.text}>{fileName || 'Import a file'}</Text>
      <MaterialIcons name="attach-file" size={22} color="#666" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cacacaff',
    borderRadius: 10,
    width: 280,
    height: 45,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    //backgroundColor: '#f9f9f9',
  },
  text: {
    color: '#666',
    fontSize: 16,
  },
});

export default FileInput;