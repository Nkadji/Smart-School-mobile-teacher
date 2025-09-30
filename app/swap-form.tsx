import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import Header from '@/components/list/header';
import HeaderText from '@/components/list/header-text';
import TextLabel from '@/components/common/text-label';
import Dropdown from '@/components/common/dropdown';
import DatePicker from '@/components/common/date';
import Comment from '@/components/common/comment';
import SaveBtn from '@/components/common/saveBtn';
import TimeInput from '@/components/common/time-input';

const SwapForm = () => { 
  return (
    <View style={styles.container}>
      <Header>
        <TouchableOpacity onPress={() => router.navigate('/swap')}>
          <MaterialIcons 
            name='arrow-back-ios' 
            size={24} 
            color="#333" 
            style={styles.backIcon} 
          />
        </TouchableOpacity>
        <HeaderText>Swap Class</HeaderText>
      </Header>

      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.formCard}>
            <TextLabel>My Course</TextLabel>
            <Dropdown 
              style={styles.dropdown} 
              options={[
                'Mathematics-2025-08-02', 
                'Mathematics-2025-08-03', 
                'Mathematics-2025-08-04',
                'Mathematics-2025-08-09', 
                'Physique-2025-08-10', 
                'Physics-2025-08-11'
              ]} 
            />

            <TextLabel>Other Course</TextLabel>
            <Dropdown 
              style={styles.dropdown} 
              options={[
                'Music-2025-08-02', 
                'Physique-2025-08-03', 
                'Informatique-2025-08-04',
                'Sport-2025-08-09', 
                'Physique-2025-08-10', 
                'Chemestry-2025-08-11'
              ]} 
            />

            <TextLabel>Comment</TextLabel>
            <Comment placeholder="Your comment..." />
          </View>

          <TouchableOpacity 
            style={styles.save} 
            onPress={() => router.replace("/swap")}
          >
            <SaveBtn>Save</SaveBtn>
          </TouchableOpacity> 
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  backIcon: {
    marginTop: 20,
  },
  keyboardAvoidingView: {
    flex: 1,
    width: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  formCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 40,
  },
  dropdown: {
    width: '100%',
    marginBottom: 15,
  },
  save: {
    paddingVertical:150,
    paddingHorizontal: 50,
    alignSelf: 'center',
  },
});

export default SwapForm;


