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

const CheckHomeWork = () => { 
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
      state:'Pending',
    },
    {
        id: '3',
      title: 'Chapter 2',
      dueDate: '12 Oct. 2025',
      courseName: 'Data Science', 
      state: 'Pending',
    },
  ];

  return (
    <View style={styles.container}>
      
        <Header>
          <TouchableOpacity onPress={() => router.navigate('/dashboard')}>
            <MaterialIcons name='arrow-back-ios' size={20} color="#050505ff" style={ { fontWeight:"bold", marginTop: 20}}/>
          </TouchableOpacity>
          <HeaderText>Check Homework</HeaderText>
        </Header>
        <Text style={{
            fontSize:17, fontStyle:'italic', padding:12, fontWeight:'300', color:'#0b4e57ff'
        }}>Choose a Homework</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {HomeWorkList.map((hw) => (
            <Components key={hw.id} >
                <TouchableOpacity onPress={()=>router.navigate('./check-hw-list')}>
              <HomeWorkElement
                courseName={hw.courseName}
                dueDate={hw.dueDate}
                title={hw.title}
                state={hw.state}
              />
              </TouchableOpacity>
            </Components>
          ))}
          
        </ScrollView>

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
});

export default CheckHomeWork;