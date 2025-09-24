// import { Text, View , Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
// import React from 'react'
// import { useRouter } from 'expo-router'
// import { AntDesign, MaterialIcons } from '@expo/vector-icons'
// import HeaderText from '@/components/list/header-text'
// import Header from '@/components/list/header'

// const Profil = () =>  {
//     const  router = useRouter()
  
//     return (
//       <View>
//         <Header>
//             <TouchableOpacity onPress={() => router.navigate('/dashboard')}>
//                 <MaterialIcons name='arrow-back-ios' size={20} color="#050505ff" style={ { fontWeight:"bold", marginTop: 20}}/>
//             </TouchableOpacity>
//             <HeaderText>Profil</HeaderText>
//             <AntDesign name='edit' 
//             size={20} color={'#050505ff'} 
//             style={ { fontWeight:"bold", 
//             marginTop: 20}}
//             onPress= {() => router.navigate("/edit-profile")}/>
//         </Header>
           
//         <View style={styles.avatarContainer}>
//             <Image
//             source={require('@/assets/nattes.png')}
//             style={{width:140, height:140, borderRadius:70, borderWidth: 3, borderColor: "#fff"}}/>
//         </View>
 
//         <View style={styles.infoContainer}>

//              <View style={styles.infoSection}>
//                 <Text style={styles.label}>First Name</Text>
//                 <Text style={styles.value}>Christie Alexis</Text>
//             </View>

//              <View style={styles.infoSection}>
//                 <Text style={styles.label}>Last Name</Text>
//                 <Text style={styles.value}>Azapfah</Text>
//             </View>

//              <View style={styles.infoSection}>
//                 <Text style={styles.label}>Username</Text>
//                 <Text style={styles.value}>CM-UDS-22SCI0894</Text>
//             </View>
            
//             <View style={styles.infoSection}>
//                 <Text style={styles.label}>Email Address</Text>
//                 <Text style={styles.value}>teacher@gmail.com</Text>
//             </View>

//             {/* Mot de passe */}
           

//             {/* Téléphone */}
//             <View style={styles.infoSection}>
//                 <Text style={styles.label}>Phone Number</Text>
//                 <Text style={styles.value}>+237 690 456 765</Text>
//             </View>
//             {/* Adresse */}
           
//         </View>

//          <TouchableOpacity style={styles.logout} onPress={() => router.replace("/")}>
//             <MaterialIcons name="logout" size={20} color={"#be0303ff"} style={{fontWeight:'bold'}}/>
//             <Text style={{color:'#be0303ff', fontSize:15, fontWeight:'bold',}}>Log out</Text>
//         </TouchableOpacity>


//     </View>

//     );
  
// }
// export default Profil;

// const styles=StyleSheet.create({
//     card: {
//     borderRadius: 12,
//     backgroundColor: "#fff",
//     margin: 20,
//     flex:1,
//   },
//   header: {
//     height: 150,
//     backgroundColor: "#2f01fdee", 
//     borderTopLeftRadius: 12,
//     borderTopRightRadius: 12,
//     marginTop:12,
//   },
//   avatarContainer: {
//     alignItems: "center",
//   },
//   infoContainer: {
//     marginLeft: 40,
//     marginTop:20,
    
//   },
//   infoSection: {
//     paddingTop:15,
//     borderBottomWidth: 0.5,
//     marginRight:50,
//     borderBottomColor: '#030303ff',    
//   },
//   label: {
//     fontSize: 10,
//     fontWeight: '600',
//     color: '#666',
//     marginBottom: 5,
//     textTransform: 'uppercase',
//     letterSpacing: 0.5,
    
//   },
//   value: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 5,
//     paddingLeft:1,
//   },
//   logout:{
//     flexDirection:'row',
//     justifyContent:'center',
//     alignItems: 'flex-end',
//     paddingTop: 70,
    
//   },
 
// });







import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { IconButton, Divider, Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/list/header';
import HeaderText from '@/components/list/header-text'; 
import {useRouter} from 'expo-router';

const ProfileScreen = () => {

  const router = useRouter();

  const profile = {
    name: 'Rainsong Azapfah',
    age: 27,
    status: 'Teacher',
    swap: 17,
    postponed: 12,
    dob: '31 Dec 1998',
    maritalStatus: 'Single',
    gender: 'Male',
    email: 'rainsong@teacher.com',
    phone: '+237 456 765 943',
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header>
            <TouchableOpacity onPress={() => router.navigate('/dashboard')}>
                 <MaterialIcons name='arrow-back-ios' size={20} color="#050505ff" style={ { fontWeight:"bold", marginTop: 20}}/>
             </TouchableOpacity>
             <HeaderText>Profil</HeaderText>
            <AntDesign name='edit' 
             size={20} color={'#050505ff'} 
             style={ { fontWeight:"bold", 
             marginTop: 20}}
             onPress= {() => router.navigate("/edit-profile")}/>
        </Header>

        {/* Profile Image and Name Section */}
        <View style={styles.profileSection}>
          <Avatar.Image
            size={120}
            source={require('@/assets/nattes.png')}
            style={styles.profileImage}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{profile.name}, {profile.age} yrs</Text>
            <Text style={styles.memberText}> {profile.status}</Text>
          </View>
        </View>
        
        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{profile.swap}</Text>
            <Text style={styles.statLabel}>Swap Course</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{profile.postponed}</Text>
            <Text style={styles.statLabel}>Postponed Course</Text>
          </View>
        </View>

        <Divider style={styles.divider} />

        {/* Personal Details Section */}
        <View style={styles.detailsSection}>
          <View style={styles.detailRow}>
            <MaterialIcons name="calendar-today" size={24} color="#999" />
            <Text style={styles.detailText}>Date of birth</Text>
            <Text style={styles.detailValue}>{profile.dob}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="wc" size={24} color="#999" />
            <Text style={styles.detailText}>Marital status</Text>
            <Text style={styles.detailValue}>{profile.maritalStatus}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="transgender" size={24} color="#999" />
            <Text style={styles.detailText}>Gender</Text>
            <Text style={styles.detailValue}>{profile.gender}</Text>
          </View>
          
        </View>
        
        <Divider style={styles.divider} />

        {/* Contact Information */}
        <View style={styles.contactSection}>
          <View style={styles.contactItem}>
            <MaterialIcons name="email" size={24} color="#000" />
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Email address</Text>
              <Text style={styles.contactValue}>{profile.email}</Text>
            </View>
            <MaterialIcons name="check-circle" size={24} color="#4CAF50" />
          </View>
          <View style={styles.contactItem}>
            <MaterialIcons name="phone" size={24} color="#000" />
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Phone number</Text>
              <Text style={styles.contactValue}>{profile.phone}</Text>
            </View>
            <MaterialIcons name="check-circle" size={24} color="#4CAF50" />
          </View>
        </View>
        
        <Divider style={styles.divider} />

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:-40,
  },
  container: {
    //paddingBottom: 20,
  },
 
  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#e8f5e9', // Light green background for the profile image section
  },
  profileImage: {
    borderWidth: 3,
    borderColor: '#fff',
  },
  nameContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: -20,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  memberText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#e8f5e9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  divider: {
    height: 10,
    backgroundColor: '#f5f5f5',
  },
  detailsSection: {
    padding: 20,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  detailText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  contactSection: {
    padding: 20,
    backgroundColor: '#e8f5e9',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  contactInfo: {
    flex: 1,
    marginLeft: 15,
  },
  contactLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  contactValue: {
    fontSize: 14,
    color: '#666',
  },
});

export default ProfileScreen;
