import { Picker } from '@react-native-picker/picker';
import * as DocumentPicker from 'expo-document-picker';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import SaveBtn from '../common/saveBtn';

interface HwFormProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const HwForm: React.FC<HwFormProps> = ({ visible, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    course: '',
    file: null as any,
    date: new Date(),
    comment: '',
  });
  const [showDatePicker, setShowDatePicker] = useState(false);

  const categories = [
    { label: 'Physics', value: 'Physics' },
    { label: 'Mathematics', value: 'Mathematics' },
    { label: 'History', value: 'History' },
    { label: 'Biology', value: 'Biology' },
  ];

  const pickDocument = async () => {
  try {
    const result = await DocumentPicker.getDocumentAsync({
      type: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/*'],
    });
    
    if (result.canceled === false && result.assets && result.assets.length > 0) {
        setFormData({...formData, file: result.assets[0]});
      }
  } catch (err) {
    Alert.alert('Erreur', 'Impossible de sélectionner ce fichier');
  }
};

  const handleSubmit = () => { 
    onSubmit(formData);
    setFormData({
      title: '',
      course: '',
      file: null,
      date: new Date(),
      comment: ''
    });
    onClose();
  };

  return (
    <Modal
      visible={visible}
       transparent={false}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoidingView}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>New Home Work</Text>
            
            <ScrollView>
              <Text style={styles.label}>Title</Text>
              <TextInput
                style={styles.input}
                value={formData.title} 
                onChangeText={(text) => setFormData({...formData, title: text})}
                placeholder="Enter homework title"
              />

              <Text style={styles.label}>Course</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={formData.course} 
                  onValueChange={(itemValue) => 
                    setFormData({...formData, course: itemValue})
                  }
                  style={styles.picker}
                >
                  <Picker.Item label="Select a course" value="" />
                  {categories.map((item, index) => (
                    <Picker.Item 
                      key={index} 
                      label={item.label} 
                      value={item.value} 
                    />
                  ))}
                </Picker>
              </View>
              
              {/* Sélecteur de fichier */}
              <Text style={styles.label}>File</Text>
              <TouchableOpacity 
                style={styles.fileButton}
                onPress={pickDocument}
              >
                <Text style={styles.fileButtonText}>
                    {formData.file ? formData.file.name : 'Choose a file'}
                </Text>
              </TouchableOpacity>

              {/* Sélecteur de date */}
              <Text style={styles.label}>Date</Text>
              <TouchableOpacity 
                style={styles.dateButton}
                onPress={() => setShowDatePicker(true)}
              >
                <Text style={styles.dateButtonText}>
                  {formData.date.toLocaleDateString('fr-FR')}
                </Text>
              </TouchableOpacity>

              <DatePicker
                modal
                open={showDatePicker}
                date={formData.date}
                mode="date"
                onConfirm={(date) => {
                  setShowDatePicker(false);
                  setFormData({...formData, date});
                }}
                onCancel={() => {
                  setShowDatePicker(false);
                }}
                locale="fr"
              />

              <Text style={styles.label}>Comment</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={formData.comment} 
                onChangeText={(text) => setFormData({...formData, comment: text})}
                placeholder="Your comment"
                multiline={true}
                numberOfLines={4}
              />
            </ScrollView>

            <View style={styles.buttonContainer}>              
             <SaveBtn>Save</SaveBtn>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  keyboardAvoidingView: {
    width: 100,
    alignItems: 'center',
    height:600,
    backgroundColor: "#ffff"
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: 330,
    maxHeight: 525,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  picker: {
    width: '100%',
  },
  fileButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
  },
  fileButtonText: {
    color: '#666',
  },
  dateButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
  },
  dateButtonText: {
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
  },
  cancelButtonText: {
    color: '#666',
    fontWeight: '600',
  },
  submitButton: {
    backgroundColor: '#007AFF',
  },
});

export default HwForm;