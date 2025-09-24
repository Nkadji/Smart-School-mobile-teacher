import SaveBtn from '@/components/common/saveBtn'
import Header from '@/components/list/header'
import HeaderText from '@/components/list/header-text'
import { MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Profil = () =>  {
    const  router = useRouter()
  
    return (
      <View>
        <KeyboardAvoidingView 
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
         style={styles.keyboardAvoidingView}>
          <Header>
              <TouchableOpacity onPress={() => router.navigate('/profil')}>
                  <MaterialIcons name='arrow-back-ios' size={20} color="#050505ff" style={ { fontWeight:"bold", marginTop: 20}}/>
              </TouchableOpacity>
              <HeaderText>Edit Profil</HeaderText>
          </Header>
        <ScrollView>
          <View style={styles.avatarContainer}>
              <Image
              source={require('@/assets/nattes.png')}
              style={{width:140, height:140, borderRadius:70, borderWidth: 3, borderColor: "#fff"}}/>
          </View>
          
          <View style={styles.infoContainer}>

              <View style={styles.infoSection}>
                  <Text style={styles.label}>First Name</Text>
                  <TextInput style={styles.value}>Christie Alexis</TextInput>
              </View>

              <View style={styles.infoSection}>
                  <Text style={styles.label}>Last Name</Text>
                  <TextInput style={styles.value}>Azapfah</TextInput>
              </View>
              
              <View style={styles.infoSection}>
                  <Text style={styles.label}>Email Address</Text>
                  <TextInput style={styles.value}>tsuippp@gmail.com</TextInput>
              </View>

              <View style={styles.infoSection}>
                  <Text style={styles.label}>Phone Number</Text>
                  <TextInput style={styles.value}>+237 690 456 765</TextInput>
              </View>
              
          </View>          
          <TouchableOpacity style={styles.save} onPress={() => router.replace("/profil")}>
              <SaveBtn >Save</SaveBtn>
            </TouchableOpacity>
          </ScrollView>
         </KeyboardAvoidingView>
      </View>
    );
  
}
export default Profil;

const styles=StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: "#fff",
    margin: 20,
    flex:1,
  },
  keyboardAvoidingView: {
    width: "100%",
    //alignItems: 'center',
    height:"100%",
  },
  header: {
    height: 150,
    backgroundColor: "#2f01fdee", 
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginTop:12,
  },
  avatarContainer: {
    alignItems: "center",
  },
  infoContainer: {
    marginLeft: 40,
    marginTop:20,
    
  },
  infoSection: {
    paddingTop:15,
    borderBottomWidth: 0.5,
    marginRight:50,
    borderBottomColor: '#030303ff',    
  },
  label: {
    fontSize: 10,
    fontWeight: '600',
    color: '#666',
    marginBottom: 5,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
    paddingLeft:1,
  },
  save:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'flex-end',
    paddingTop: 32,
  },
 
});