import SaveBtn from '@/components/common/saveBtn'
import Header from '@/components/list/header'
import HeaderText from '@/components/list/header-text'
import { MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import * as ImagePicker from 'expo-image-picker';
import {useState} from 'react';
import { Image,  ScrollView, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Profil = () =>  {
    const  router = useRouter()

    const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      alert('Désolé, nous avons besoin de la permission pour accéder à vos photos!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    // if (!result.canceled) {
    //   setSelectedImage(result.assets[0].uri);
    //   // Ici vous pouvez envoyer l'image à votre backend ou la sauvegarder
    //   console.log('Image sélectionnée:', result.assets[0].uri);
    // }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {
    //  logique pour changer le mot de passe
    console.log('Changement de mot de passe:', { currentPassword, newPassword, confirmPassword });
    
    setIsModalVisible(false);
    
    // Réinitialiser les champs
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };
  
    return (
      <View>
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
              style={{width:140, height:140, borderRadius:70, borderWidth: 1, borderColor: "#0206fdff"}}/>
              <TouchableOpacity onPress={pickImage}>
                  <MaterialIcons name='add-a-photo' size={25} color="#989affff" style={ { fontWeight:'bold', marginTop: -25, marginLeft: 80}}/>
              </TouchableOpacity>
          </View>
          
          <View style={styles.infoContainer}>

            <View style={styles.infoSection}>
                <Text style={styles.label}>First Name</Text>
                <Text style={styles.value}>Christie Alexis</Text>
            </View>

              <View style={styles.infoSection}>
                <Text style={styles.label}>Last Name</Text>
                <Text style={styles.value}>Azapfah</Text>
            </View>

              <View style={styles.infoSection}>
                <Text style={styles.label}>Username</Text>
                <Text style={styles.value}>CM-UDS-22SCI0894</Text>
            </View>
            
            <View style={styles.infoSection}>
                <Text style={styles.label}>Email Address</Text>
                <Text style={styles.value}>teacher@gmail.com</Text>
            </View>

            <View style={styles.infoSection}>
                <Text style={styles.label}>Phone Number</Text>
                <Text style={styles.value}>+237 690 456 765</Text>
            </View>

            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
              <Text style={{color:'#3a03ffff', marginTop:25}}> Change my Password</Text>
            </TouchableOpacity>
              
          </View>          
          <TouchableOpacity style={styles.save} onPress={() => router.replace("/profil")}>
              <SaveBtn >Save</SaveBtn>
            </TouchableOpacity>
          </ScrollView>
          <Modal
              animationType="fade"
              transparent={true}
              visible={isModalVisible}
              onRequestClose={() => setIsModalVisible(false)}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalTitle}>Change Password</Text>
                  
                  <TextInput
                    style={styles.input}
                    placeholder="Current Password"
                    secureTextEntry={true}
                    value={currentPassword}
                    onChangeText={setCurrentPassword}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="New Password"
                    secureTextEntry={true}
                    value={newPassword}
                    onChangeText={setNewPassword}
                  />
                  
                  <TextInput
                    style={styles.input}
                    placeholder="Confirm New Password"
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                  />
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                      style={[styles.button, styles.cancelButton]} 
                      onPress={() => setIsModalVisible(false)}
                    >
                      <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                      style={[styles.button, styles.confirmButton]} 
                      onPress={handleChangePassword}
                    >
                      <Text style={styles.confirmButtonText}>Confirm</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
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
    alignSelf: 'center',
    marginTop: 55,
  },
 

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
  },
  confirmButton: {
    backgroundColor: '#3a03ffff',
  },
  cancelButtonText: {
    color: '#333',
  },
  confirmButtonText: {
    color: 'white',
  },
});