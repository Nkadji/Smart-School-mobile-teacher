// import React from 'react';
// import {
//   View,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import { router } from 'expo-router';
// import Header  from '@/components/list/header';
// import HeaderText from '@/components/list/header-text';
// import TextLabel from '@/components/common/text-label';
// import Dropdown from '@/components/common/dropdown';
// import DatePicker from '@/components/common/date';
// import Comment from '@/components/common/comment';
// import SaveBtn from '@/components/common/saveBtn';
// import TimeInput from '@/components/common/time-input';

// const PostponeForm = () => { 

  
//   return (
//     <View style={styles.container}>
//         <Header>
//           <TouchableOpacity onPress={() => router.navigate('/postpone')}>
//             <MaterialIcons name='arrow-back-ios' size={20} color="#050505ff" style={ { fontWeight:"bold", marginTop: 20}}/>
//           </TouchableOpacity>
//           <HeaderText>completed..</HeaderText>
//         </Header>

//           <KeyboardAvoidingView
//               style={styles.keyboardAvoidingView}
//               behavior={Platform.OS === "ios" ? "padding" : "height"}
//             >
//               <ScrollView
//                 contentContainerStyle={styles.scrollContainer}
//                 keyboardShouldPersistTaps="handled"
//               >
//             <View>
//             <View style={{marginLeft:15}}>
    
//               <TextLabel >Course</TextLabel>
//               <Dropdown style={{width:200}}options={['Mathematics-2025-08-02', 'Physique-2025-08-03', 'Informatique-2025-08-04','Mathematics-2025-08-09', 'Physique-2025-08-10', 'Informatique-2025-08-11']} />

//               <TextLabel >Start at</TextLabel><TimeInput/>

//               <TextLabel >End at</TextLabel><TimeInput/>

//               <TextLabel >Date</TextLabel>
//               <DatePicker onDateSelect={(date) => console.log(date)} />
                
//               <TextLabel >Comment</TextLabel>
//               <Comment placeholder="Your comment..." />        
//             </View>
//             <TouchableOpacity style={styles.save} onPress={() => router.replace("/postpone")}>
//                 <SaveBtn >Save</SaveBtn>
//             </TouchableOpacity> 
//             </View>
//             </ScrollView>
//           </KeyboardAvoidingView>
        
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: "center",
//     paddingBottom: 100,
//   },
//   keyboardAvoidingView: {
//     width: "100%",
//     flex:1,
//     //alignItems: 'center',
//     height:"100%",
//   },
//  save:{
//     flexDirection:'row',
//     justifyContent:'center',
//     alignItems: 'flex-end',
//     padding: 20,
//     // marginRight:20,
//     marginTop:60,
//   },
 
// });

// export default PostponeForm;

import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import Header from '@/components/list/header';
import HeaderText from '@/components/list/header-text';
import TextLabel from '@/components/common/text-label';
import Dropdown from '@/components/common/dropdown';
import DatePicker from '@/components/common/date';
import Comment from '@/components/common/comment';
import SaveBtn from '@/components/common/saveBtn';
import TimeInput from '@/components/common/time-input';

const PostponeForm = () => { 
  return (
    <View style={styles.container}>
      <Header>
        <TouchableOpacity onPress={() => router.navigate('/postpone')}>
          <MaterialIcons 
            name='arrow-back-ios' 
            size={24} 
            color="#333" 
            style={styles.backIcon} 
          />
        </TouchableOpacity>
        <HeaderText>Postpone Class</HeaderText>
      </Header>

      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.formCard}>
            <TextLabel>Course</TextLabel>
            <Dropdown 
              style={styles.dropdown} 
              options={[
                'Mathematics-2025-08-02', 
                'Physique-2025-08-03', 
                'Informatique-2025-08-04',
                'Mathematics-2025-08-09', 
                'Physique-2025-08-10', 
                'Informatique-2025-08-11'
              ]} 
            />

            <TextLabel>Start at</TextLabel>
            <TimeInput/>

            <TextLabel>End at</TextLabel>
            <TimeInput/>

            <TextLabel>Date</TextLabel>
            <DatePicker onDateSelect={(date) => console.log(date)} />

            <TextLabel>Comment</TextLabel>
            <Comment placeholder="Your comment..." />
          </View>

          <TouchableOpacity 
            style={styles.save} 
            onPress={() => router.replace("/postpone")}
          >
            <SaveBtn>Save</SaveBtn>
          </TouchableOpacity> 
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  backIcon: {
    marginTop: 20,
  },
  keyboardAvoidingView: {
    flex: 1,
    width: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  formCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 40,
  },
  dropdown: {
    width: '100%',
    marginBottom: 15,
  },
  save: {
    paddingVertical:50,
    paddingHorizontal: 50,
    alignSelf: 'center',
  },
});

export default PostponeForm;
