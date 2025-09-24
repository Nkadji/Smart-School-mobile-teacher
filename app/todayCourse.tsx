import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import TimeTableDay  from '@/components/list/timeTableDay';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import Header from '@/components/list/header';
import HeaderText from '@/components/list/header-text';



const TodayScreen = () => { 

  const todayLectures = [
    {
      id: '1',
      title: 'Maths',
      location: '7th B',
      startTime: '10:30',
      endTime: ' 11:30 AM',
    },
    {
        id: '2',
      title: 'Physique',
      location: '7th A',
      startTime: '11:30',
      endTime: ' 12:30 AM', 
    },
    {
        id: '3',
      title: 'Data Science',
      location: '6th',
      startTime: '13:30',
      endTime: ' 15:30 AM', 
    },
  ];

    return (
    <View style={{backgroundColor: '#F8F9FA'}}>
      {/* Header */}
      <Header>
        <TouchableOpacity onPress={() => router.navigate('/dashboard')}>
            <MaterialIcons name='arrow-back-ios' size={20} color="#050505ff" style={ { fontWeight:"bold", marginTop: 20}}/>
          </TouchableOpacity>
        <HeaderText>Today's Course</HeaderText>
      </Header>

      {/* Today's Courses */}
      <ScrollView  showsVerticalScrollIndicator={false}>
        {todayLectures.map((lecture) => (
          <View key={lecture.id}>
            <TimeTableDay
              title={lecture.title}
              startTime={lecture.startTime}
              endTime={lecture.endTime}
              location={lecture.location}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
    
  headerText:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  
    });

    export default TodayScreen;