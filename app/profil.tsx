import { Text, View , Image, StyleSheet, TouchableOpacity, Alert,ScrollView} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import HeaderText from '@/components/list/header-text'
import Header from '@/components/list/header'

const Profil = () =>  {
    const  router = useRouter()

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
      <View>
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
           
        <View style={styles.avatarContainer}>
            <Image
            source={require('@/assets/nattes.png')}
            style={{width:140, height:140, borderRadius:70, borderWidth: 3, borderColor: "#fff"}}/>
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

            {/* Mot de passe */}
           

            {/* Téléphone */}
            <View style={styles.infoSection}>
                <Text style={styles.label}>Phone Number</Text>
                <Text style={styles.value}>+237 690 456 765</Text>
            </View>
            {/* Adresse */}
           
        </View>

         <TouchableOpacity style={styles.logout} onPress={handleLogout}>
            <MaterialIcons name="logout" size={20} color={"#be0303ff"} style={{fontWeight:'bold'}}/>
            <Text style={{color:'#be0303ff', fontSize:15, fontWeight:'bold',}}>Log out</Text>
        </TouchableOpacity>


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
  logout:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'flex-end',
    paddingTop: 70,
    
  },
 
});
