import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import HomeWorkElement from '@/components/list/hwList';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Components from '@/components/list/component';
import Header  from '@/components/list/header';
import HeaderText from '@/components/list/header-text';

const HomeWorkScreen = () => { 
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [submittedData, setSubmittedData] = useState<any[]>([]);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleSubmitForm = (data: any) => {
    setSubmittedData([...submittedData, data]);
    console.log('Données soumises:', data);
  };

  const HomeWorkList = [
    {
      id: '1',
      title: 'complex number',
      dueDate: '12 Oct. 2025',
      courseName: 'Math',
      state: 'Pending',
    },
    {
        id: '2',
      title: 'Continuous assignment',
      dueDate: '12 Oct. 2025',
      courseName: 'Physics',
      state: 'Pending',
    },
    {
        id: '3',
      title: 'Chapter 2',
      dueDate: '12 Oct. 2025',
      courseName: 'Data Science', 
      state: 'Pending',
    },
    {
        id: '4',
      title: 'Chapter 1',
      dueDate: '15 Oct. 2025',
      courseName: 'Biology', 
      state: 'completed',
    },
  ];

  return (
    <View style={styles.container}>
      
        <Header>
          <TouchableOpacity onPress={() => router.navigate('/dashboard')}>
            <MaterialIcons name='arrow-back-ios' size={20} color="#050505ff" style={ { fontWeight:"bold", marginTop: 20}}/>
          </TouchableOpacity>
          <HeaderText>Home Work</HeaderText>
          <View style={styles.addButtonContainer}>
            <TouchableOpacity onPress={() => router.navigate('/homework-form')} style={styles.addButton}>
              <MaterialIcons name='add' size={40} color="#f0ad4e" />
            </TouchableOpacity>
          </View>
        </Header>

        <ScrollView showsVerticalScrollIndicator={false}>
          {HomeWorkList.map((hw) => (
            <Components key={hw.id} >
              <HomeWorkElement
                courseName={hw.courseName}
                dueDate={hw.dueDate}
                title={hw.title}
                state={hw.state}
              />
            </Components>
          ))}
          
        </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => router.navigate("/dashboard")}>
          <Icon name="home" size={24} color="#666" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Icon name="assignment" size={24} color="#4b01f8ff" />
          <Text style={[styles.navText, {color: "#4b01f8ff"}]}>Homework</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Icon name="event" size={24} color="#666" />
          <Text style={styles.navText}>Planned Course</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
        style={styles.navItem}
        onPress={() => router.navigate("/profil")}>
          <Icon name="person" size={24} color="#666" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#F8F9FA',
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
  addButtonContainer: {
    alignItems: 'center',
    marginBottom: -20,
    marginRight: 10,

  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    marginHorizontal: -100,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position:'absolute',
    bottom:40,
    height: 100,
    width:'100%',
    zIndex:1000,
    borderTopWidth:1,
    borderColor:'#e6e6e6ff'
        
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#666666ff',
    marginTop: 4,
  },
});

export default HomeWorkScreen;