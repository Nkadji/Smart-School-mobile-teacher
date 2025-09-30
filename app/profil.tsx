import { FontAwesome5, MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons';
import { ImageBackground } from 'expo-image';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, Modal, TouchableOpacity,  View, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function TabTwoScreen() {
  const router=useRouter();
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
    };
  const handleLogout = () => {
  Alert.alert(
    "Confirmation",
    "Are you sure you want to log out ?",
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      {
        text: "Logout",
        style: "destructive",
        onPress: () => router.replace("/")
      }
    ]
  );
};
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      
      
      <ImageBackground
  source={require('../assets/nattes.png')}
  style={styles.profileSection}
  resizeMode="cover"
  imageStyle={styles.bgImage}
>
</ImageBackground>
<TouchableOpacity  onPress={() => router.navigate('./dashboard')}>
  <MaterialIcons name='arrow-back-ios' size={20} color="#050505ff" style={{marginTop: -315, marginLeft: 25, borderRadius:12, zIndex:1}} />
</TouchableOpacity>
<TouchableOpacity onPress={pickImage}>
  <MaterialIcons name='add-a-photo' size={25} color="#000000ff" style={ { fontWeight:'bold', marginTop: -320, marginLeft: 320}}/>
</TouchableOpacity>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>First Name</Text>
            <Text style={styles.statLabel}>Njonfack Ebenezer</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>Last Name</Text>
            <Text style={styles.statLabel}>Collins Amougunoussa</Text>
          </View>
        </View>

        <View style={styles.detailsGrid}>
          <View style={styles.detailRow}>
            <FontAwesome5 name="birthday-cake" size={20} color="#666" style={styles.detailIcon} />
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailLabel}>Date of birth</Text>
              <Text style={styles.detailValue}>31 Dec 1980</Text>
            </View>
          </View>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="ring" size={20} color="#666" style={styles.detailIcon} />
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailLabel}>Marital status</Text>
              <Text style={styles.detailValue}>Single</Text>
            </View>
          </View>

          <View style={styles.detailRow}>
            <FontAwesome5 name="venus-mars" size={20} color="#666" style={styles.detailIcon} />
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailLabel}>Gender</Text>
              <Text style={styles.detailValue}>Male</Text>
            </View>
          </View>
          <View style={styles.detailRow}>
            <FontAwesome5 name="briefcase" size={20} color="#666" style={styles.detailIcon} />
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailLabel}>Profession</Text>
              <Text style={styles.detailValue}>Entrepreneur</Text>
            </View>
          </View>
        </View>

        <View style={styles.contactInfoContainer}>
          <View style={styles.contactItem}>
            <View style={styles.contactIconText}>
              <MaterialCommunityIcons name="email-outline" size={24} color="#666" style={styles.contactIcon} />
              <View>
                <Text style={styles.contactLabel}>Email address</Text>
                <Text style={styles.contactValue}>Andreajameosn@guesthouser.com</Text>
              </View>
            </View>
            <FontAwesome5 name="checkcircle" size={20} color="green" />
          </View>

          <View style={styles.contactItem}>
            <View style={styles.contactIconText}>
              <FontAwesome5 name="phone" size={20} color="#666" style={styles.contactIcon} />
              <View>
                <Text style={styles.contactLabel}>Phone number</Text>
                <Text style={styles.contactValue}>+91-9812765290</Text>
              </View>
            </View>
            <FontAwesome5 name="checkcircle" size={20} color="green" />
          </View>

          <View style={styles.contactItem}>
            <View style={styles.contactIconText}>
              <FontAwesome5 name="user" size={24} color="#666" style={styles.contactIcon} />
              <View>
                <Text style={styles.contactLabel}>Account</Text>
                <Text style={styles.contactValue}>Update Account Info</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
              <Text style={styles.connectText}>change Password</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.logout} onPress={handleLogout}>
             <MaterialIcons name="logout" size={20} color={"#be0303ff"} style={{fontWeight:'bold'}}/>
             <Text style={{color:'#be0303ff', fontSize:15, fontWeight:'bold',}}>Log out</Text>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
 
  profileSection: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 350,
    width: '100%',
    overflow: 'hidden',
  },
  
  bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  statDivider: {
    width: 1,
    height: '80%',
    backgroundColor: '#eee',
  },
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    marginBottom: 20,
  },
  detailIcon: {
    marginRight: 10,
    width: 24,
    textAlign: 'center',
  },
  detailTextContainer: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 12,
    color: '#888',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginTop: 2,
  },
  contactInfoContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  contactIconText: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  contactIcon: {
    marginRight: 15,
  },
  contactLabel: {
    fontSize: 12,
    color: '#888',
  },
  contactValue: {
    fontSize: 14,
    color: '#333',
    marginTop: 2,
  },
  connectText: {
    color: '#3700fdd2',
    fontWeight: 'bold',
    fontSize: 14,
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
  logout:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'flex-end',
    padding: 40,
    
 },
});