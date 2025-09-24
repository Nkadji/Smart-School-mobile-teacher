import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TimeTableDay  from '@/components/list/timeTableDay';
import { useRouter } from 'expo-router'; 
import { MaterialIcons } from '@expo/vector-icons';
import Components from '@/components/list/component';
import { hide } from 'expo-router/build/utils/splash';


const DashboardScreen = () => { 

    const [greeting, setGreeting] = useState<string>('');

    const getGreeting = (): string => {
    const currentHour = new Date().getHours();
    
    if (currentHour >= 5 && currentHour < 12) {
      return 'Good morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };
   
  useEffect(() =>{
    setGreeting(getGreeting());
    const interval= setInterval(() =>{
        setGreeting(getGreeting());
    },  60000);
    return () => clearInterval(interval);
  }, []);

  const gridItems = [
    { id: '0', icon: 'view-timeline', title: 'Time Table', color: '#009688', route:'/timeTable' },
    { id: '1', icon: 'checklist-rtl', title: 'Attendence by Class', color: '#F44336', route:'/attendenceClass' },
    { id: '2', icon: 'auto-stories', title: 'Attendance by Course', color: '#9C27B0', route:'/attendenceCourse' },
    { id: '3', icon: 'assignment-turned-in', title: 'Check Homework', color: '#1177b3', route:'/checkHomework' },
    { id: '4', icon: 'assessment', title: 'Registered Course', color: '#aa90e6', route:'/registeredCourse'},
    { id: '5', icon: 'connecting-airports', title: 'Course Swap', color: '#2196F3', route:'/swap' },
    { id: '6', icon: 'fast-forward', title: 'Course Postpone', color: '#FF9800', route:'/postpone' },
    { id: '7', icon: 'event-busy', title: 'Leave', color: '#EE179C', route:'/leave' },
    
    
  ] as const;
  

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

  const router = useRouter()

  interface gridItems {
  id: string;
  icon: string;
  title: string;
  color: string;
  route: string;
}

    return (
        <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.photo}>
                            <Image
                            source={require('@/assets/nattes.png')}
                            style={styles.stylPhoto}/>
                        </View>
                        <View style={{flexDirection:"column"}}>
                            <Text style={styles.headerSubtitle}>{greeting} ! </Text>
                            <Text style={styles.headerName}>Rainsong Azapfah </Text>
                        </View>
                        <MaterialIcons name='notifications' size={25} color="#0e0d0dcb" style={{ marginTop: 40,marginLeft:-40}}/>
                    </View>
                    <View style={styles.gridContainer}>
                    {/* les icones */}
                    <View style={[styles.gridRow, {marginTop: 20}]}>
                        {gridItems.slice(0, 4).map(item => (
                            <TouchableOpacity key={item.id} style={styles.gridItem} onPress={()=> router.navigate(item.route)}>
                                <View style={[styles.iconContainer, { backgroundColor: item.color + '30' }]}>
                                    <Icon name={item.icon} size={24} color={item.color} />
                                </View>
                                <Text style={styles.gridTitle}>{item.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.gridRow}>
                        {gridItems.slice(4, 8).map(item => (
                        <TouchableOpacity key={item.id} style={styles.gridItem} onPress={()=> router.navigate(item.route)} >
                            <View style={[styles.iconContainer, { backgroundColor: item.color + '30' }]}>
                                <Icon name={item.icon} size={24} color={item.color} />
                            </View>
                            <Text style={styles.gridTitle}>{item.title}</Text>
                        </TouchableOpacity>
                        ))}
                    </View>
                    
                </View>

                {/* today's Course */}
                <View style={styles.lecturesSection}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Today Lectures</Text>
                        <TouchableOpacity onPress={() => router.navigate("/todayCourse")}>
                            <Text style={styles.viewAllText}>View All</Text>
                        </TouchableOpacity>
                    </View>  
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                            {todayLectures.map((lecture) =>(
                            <View key={lecture.id} style= {{flexDirection: "row", zIndex:1000, width:'auto', height:'100%', borderRadius:1000 }}>
                                    <TimeTableDay
                                    style={{borderRadius:20, overflow:'hidden', width:220}}
                                    title={lecture.title}
                                    startTime={lecture.startTime}
                                    endTime={lecture.endTime}
                                    location={lecture.location}
                                    />
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>

            
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem} onPress={() => router.navigate("/dashboard")}>
                <Icon name="home" size={24} color="#4b01f8ff" />
                <Text style={[styles.navTextActive,{color:"#4b01f8ff"}]}>Home</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.navItem} onPress={() => router.navigate("/homework")}>
                <Icon name="assignment" size={24} color="#666" />
                <Text style={styles.navText}>Homework</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem} onPress={() => router.navigate("/PlannedCourse")}>
                <Icon name="event" size={24} color="#666" />
                <Text style={styles.navText}>Planned Course</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.navItem} onPress={() => router.navigate("/profil")}>
                <Icon name="account-circle" size={24} color="#666" />
                <Text style={styles.navText}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    };

    

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffffff',
    },
    gridContainer: {
        padding: 16,
    },
    gridRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        
    },
    gridItem: {
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 8,
    },
    iconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },
    gridTitle: {
        fontSize: 12,
        fontWeight: '500',
        color: '#333',
        textAlign: 'center',
    },
    lecturesSection: {
        padding: 15,
        flexDirection: 'column',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#57520bff',
        marginLeft:10,
    },
    viewAllText: {
        fontSize: 14,
        color: '#007AFF',
        fontWeight: '500',
    },
    
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position:'absolute',
        bottom:40,
        height: 100,
        width:'100%',
        zIndex:1000
        
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
    },
    navTextActive: {
        fontSize: 12,
        color: '#007AFF',
        fontWeight: '600',
        marginTop: 4,
    },
     header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#ffffffff",
    paddingHorizontal: 20,
    paddingVertical: 15,
   
    
  },
  headerContent: {
    justifyContent: "center",
    alignContent:"center",
  },
  
  headerSubtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#020202ff',
    marginBottom:-7,
    marginTop: 30,
    padding:7,
  },
  headerName:{
    fontSize: 15,
    marginLeft: 0,
    marginRight: 150,
    padding:7,
    marginTop: -7,
    opacity:0.4
  },
  photo:{
    marginTop: 37,
    marginLeft: -5,
    borderRadius: 20,
  },
  stylPhoto: {
  width: 40,
  height: 40,
  borderRadius: 25,
  
},
    });

    export default DashboardScreen;