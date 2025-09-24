import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import Header  from '@/components/list/header';
import HeaderText from '@/components/list/header-text';
import TextIn from '@/components/common/textInput';
import TextLabel from '@/components/common/text-label';
import Dropdown from '@/components/common/dropdown';
import FileInput from '@/components/common/file-import';
import DatePicker from '@/components/common/date';
import Comment from '@/components/common/comment';
import SaveBtn from '@/components/common/saveBtn';

const HomeWorkForm = () => { 

  
  return (
    <View style={styles.container}>
      
        <Header>
          <TouchableOpacity onPress={() => router.navigate('/homework')}>
            <MaterialIcons name='arrow-back-ios' size={20} color="#050505ff" style={ { fontWeight:"bold", marginTop: 20}}/>
          </TouchableOpacity>
          <HeaderText>New Homework</HeaderText>
        </Header>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}>
          <View style={{marginLeft: 20}}>
            <TextLabel>Titre</TextLabel>
            <TextIn placeholder='Enter your title'></TextIn>

            <TextLabel >Course</TextLabel>
            <Dropdown options={['Math', 'Physique', 'Informatique']} />

            <TextLabel >File</TextLabel>
            <FileInput onFileSelect={(file) => console.log(file)} />

            <TextLabel >Due Date</TextLabel>
            <DatePicker onDateSelect={(date) => console.log(date)} />
              
            <TextLabel >Comment</TextLabel>
            <Comment placeholder="Your comment..." />  

            <TouchableOpacity style={styles.save} onPress={() => router.replace("/homework")}>
              <SaveBtn >Save</SaveBtn>
            </TouchableOpacity>       
          </View>
        </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderWidth:-5,
    borderColor:'transparent'
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#080808ff',
    marginLeft: 20,
    marginTop: 20,
    
  },
  keyboardAvoidingView: {
    width: "100%",
    //alignItems: 'center',
    height:"100%",
  },
 save:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'flex-end',
    paddingTop: 10,
    marginRight:20,

  },
 
});

export default HomeWorkForm;