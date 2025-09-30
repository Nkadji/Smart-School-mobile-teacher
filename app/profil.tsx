// import { Text, View , Image, StyleSheet, TouchableOpacity, Alert,ScrollView} from 'react-native'
// import React from 'react'
// import { useRouter } from 'expo-router'
// import { AntDesign, MaterialIcons } from '@expo/vector-icons'
// import HeaderText from '@/components/list/header-text'
// import Header from '@/components/list/header'

// const Profil = () =>  {
//     const  router = useRouter()

//     const handleLogout = () => {
//   Alert.alert(
//     "Confirmation",
//     "Are you sure you want to log out ?",
//     [
//       {
//         text: "Cancel",
//         style: "cancel"
//       },
//       {
//         text: "Logout",
//         style: "destructive",
//         onPress: () => router.replace("/")
//       }
//     ]
//   );
// };
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

//          <TouchableOpacity style={styles.logout} onPress={handleLogout}>
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




import { FontAwesome5, MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons';
import { ImageBackground } from 'expo-image';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity,  View, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

export default function TabTwoScreen() {
  const router=useRouter();
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
            <TouchableOpacity onPress={()=>router.navigate('./edit-profile')}>
              <Text style={styles.connectText}>Edit Account</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.logout} onPress={handleLogout}>
             <MaterialIcons name="logout" size={20} color={"#be0303ff"} style={{fontWeight:'bold'}}/>
             <Text style={{color:'#be0303ff', fontSize:15, fontWeight:'bold',}}>Log out</Text>
        </TouchableOpacity>

      </ScrollView>
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
  logout:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'flex-end',
    padding: 40,
    
 },
});