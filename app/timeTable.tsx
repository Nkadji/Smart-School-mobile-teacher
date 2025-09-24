import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Header from '@/components/list/header';
import HeaderText from '@/components/list/header-text';

const { width } = Dimensions.get('window');

interface Course {
  id: string;
  subject: string;
  class: string;
  startTime: string;
  endTime: string;
  room?: string;
  duration: number; // en heures
}
interface DaySchedule {
  date: Date;
  courses: Course[];
  isDayOff: boolean;
}
// DONNÉES RÉELLES DE L'ENSEIGNANT
const TEACHER_SUBJECTS = ['Mathematics', 'Physics'];
const TEACHER_DATA: DaySchedule[] = [
  // Lundi
  {
    date: new Date(2024, 0, 22), // 22 janvier 2024 (lundi)
    isDayOff: false,
    courses: [
      {
        id: '1',
        subject: 'Mathematics',
        class: '7th B',
        startTime: '07:30',
        endTime: '09:30',
        room: 'Room 101',
        duration: 2
      },
      {
        id: '2',
        subject: 'Physics',
        class: '8th A',
        startTime: '10:30',
        endTime: '12:30',
        room: 'Lab 2',
        duration: 2 },
      {
        id: '3',
        subject: 'Mathematics',
        class: '6th A',
        startTime: '13:30',
        endTime: '15:30',
        room: 'Room 102',
        duration: 2
      }
    ]
  },
  // Mardi
  {
    date: new Date(2024, 0, 23),
    isDayOff: false,
    courses: [
      {
        id: '4',
        subject: 'Physics',
        class: '7th A',
        startTime: '08:30',
        endTime: '10:30',
        room: 'Lab 1',
        duration: 2
      },
      {
        id: '5',
        subject: 'Mathematics',
        class: '8th B',
        startTime: '11:30',
        endTime: '13:30',
        room: 'Room 201',
        duration: 2
      } ]
  },
  // Mercredi - JOUR DE REPOS
  {
    date: new Date(2024, 0, 24),
    isDayOff: true,
    courses: []
  },
  // Jeudi
  {
    date: new Date(2024, 0, 25),
    isDayOff: false,
    courses: [
      {
        id: '6',
        subject: 'Mathematics',
        class: '7th A',
        startTime: '07:30',
        endTime: '09:30',
        room: 'Room 101',
        duration: 2
      },
      {
        id: '7',
        subject: 'Physics',class: '6th B',
        startTime: '10:30',
        endTime: '12:30',
        room: 'Lab 2',
        duration: 2
      }
    ]
  },
  // Vendredi
  {
    date: new Date(2024, 0, 26),
    isDayOff: false,
    courses: [
      {
        id: '8',
        subject: 'Physics',
        class: '8th A',
        startTime: '08:30',
        endTime: '11:30',
        room: 'Lab 1',
        duration: 3
      },
      {id: '9',
        subject: 'Mathematics',
        class: '7th B',
        startTime: '13:30',
        endTime: '15:30',
        room: 'Room 102',
        duration: 2
      }
    ]
  }
];
const TeacherTimetableScreen = () => {
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);

  // Génération de la semaine basée sur le décalage
  const getWeekData = (offset: number): DaySchedule[] => {
    const baseDate = new Date(2024, 0, 22); // Date de référence (lundi)
    const weekStart = new Date(baseDate);
    weekStart.setDate(baseDate.getDate() + (offset * 7));
    
    return TEACHER_DATA.map(day => {
      const newDate = new Date(day.date);
      newDate.setDate(day.date.getDate() + (offset * 7));
      return {
        ...day,
        date: newDate
      };
    });
  };
  const weekData = getWeekData(currentWeekOffset);
  const currentDate = new Date();

  // Tranches horaires de la journée (7h30 à 15h30)
  const timeSlots = [
    '07:30', '08:30', '09:30', '10:30', '11:30', '12:30', '13:30', '14:30', '15:30'
  ];

  const isToday = (date: Date) => {
    return date.toDateString() === currentDate.toDateString();
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short'
    });
  };

  const getDayName = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };
  const navigateWeek = (direction: 'prev' | 'next') => {
    setCurrentWeekOffset(prev => direction === 'next' ? prev + 1 : prev - 1);
  };

  // Trouve le cours à une heure spécifique
  const getCourseAtTime = (day: DaySchedule, time: string) => {
    return day.courses.find(course => course.startTime === time);
  };

  // Vérifie si l'heure est dans un cours
  const isTimeInCourse = (course: Course, time: string) => {
    const courseStart = parseInt(course.startTime.replace(':', ''));
    const courseEnd = parseInt(course.endTime.replace(':', ''));
    const currentTime = parseInt(time.replace(':', ''));
    return currentTime >= courseStart && currentTime < courseEnd;
  };

  // Calcule le nombre total d'heures de la semaine
  const getTotalWeeklyHours = () => {
    return weekData.reduce((total, day) => {
      return total + day.courses.reduce((dayTotal, course) => dayTotal + course.duration, 0);
    }, 0);
};

return(
    <View style={styles.container}>
        <Header>
            <TouchableOpacity onPress={() => router.navigate('/dashboard')}>
              <MaterialIcons name='arrow-back-ios' size={20} color="#050505ff" style={ { fontWeight:"bold", marginTop: 20}}/>
            </TouchableOpacity>
            <HeaderText>Time Table</HeaderText>
        </Header>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigateWeek('prev')} style={styles.navButton}>
            <Icon name="chevron-left" size={24} color="#007AFF" />
            </TouchableOpacity>
            
            <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>
                {weekData[0].date.toLocaleDateString('en-US', { month: 'long' })} Timetable
            </Text>
            </View>
            
            <TouchableOpacity onPress={() => navigateWeek('next')} style={styles.navButton}>
            <Icon name="chevron-right" size={24} color="#007AFF" />
            </TouchableOpacity>
        </View>
        {/* En-tête des jours */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.daysHeader}
      >
        <View style={styles.timeColumn}>
          <Text style={styles.timeLabel}>Time</Text>
          {timeSlots.map((time, index) => (
            <View key={`time-${index}`} style={styles.timeSlotHeader}>
              <Text style={styles.timeText}>{time}</Text>
            </View>
          ))}
        </View>

        {weekData.map((day, dayIndex) => (
          <View key={`day-${dayIndex}`} style={styles.dayColumn}>
            <View style={[
              styles.dayHeader, 
              isToday(day.date) && styles.todayHeader,
              day.isDayOff && styles.dayOffHeader
            ]}><Text style={[
                styles.dayName, 
                (isToday(day.date) || day.isDayOff) && styles.whiteText
              ]}>
                {getDayName(day.date)}
              </Text>
              <Text style={[
                styles.dateText, 
                (isToday(day.date) || day.isDayOff) && styles.whiteText
              ]}>
                {formatDate(day.date)}
              </Text>
              {isToday(day.date) && (
                <Text style={styles.todayBadge}>Today</Text>
              )}
              {day.isDayOff && (
                <Text style={styles.dayOffBadge}>Day Off</Text>
              )}
            </View>
            
            {timeSlots.map((time, timeIndex) => {
              // Trouver le cours qui couvre cette heure
              const course = day.courses.find(c => isTimeInCourse(c, time));return (
                <View key={`cell-${dayIndex}-${timeIndex}`} style={styles.courseCell}>
                  {course && course.startTime === time ? (
                    // Début d'un cours
                    <TouchableOpacity style={[
                      styles.courseButton,
                      { height: course.duration * 60 - 8 },
                      course.subject === 'Mathematics' ? styles.mathCourse : styles.physicsCourse
                    ]}>
                      <Text style={styles.courseSubject} numberOfLines={1}>
                        {course.subject}
                      </Text>
                      <Text style={styles.courseClass} numberOfLines={1}>
                        {course.class}
                      </Text>
                      <Text style={styles.courseRoom} numberOfLines={1}>
                        {course.room}
                      </Text>
                      <Text style={styles.courseTime}>
                        {course.startTime} - {course.endTime}
                      </Text>
                    </TouchableOpacity>
                  ) : course ? (
                    // Suite d'un cours (cellule fusionnée)
                    <View style={[styles.courseContinue, {
                        backgroundColor: course.subject === 'Mathematics' ? '#E8F5E8' : '#E3F2FD'
                    }]} />
                  ) : day.isDayOff ? (
                    // Jour de repos
                    <View style={styles.dayOffCell} />
                  ) : (
                    // Cellule vide
                    <View style={styles.emptyCell} />
                  )}
                </View>
              );
            })}
          </View>
        ))}
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
    headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#77790fff',
    marginLeft: 10,
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerCenter: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  navButton: {
    padding: 8,
  },
  daysHeader: {
    flex: 1,
    backgroundColor: 'white',
  },
  timeColumn: {
    width: 80,
    borderRightWidth: 1,
    borderRightColor: '#E0E0E0',
  },
  timeLabel: {
    padding: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    backgroundColor: '#F8F9FA',
  },
  timeSlotHeader: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  timeText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  dayColumn: {
    width: 160,
  },
  dayHeader: {
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRightWidth: 1,
    borderRightColor: '#E0E0E0',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    minHeight: 70,
  },
  todayHeader: {
    backgroundColor: '#007AFF',
  },
  dayOffHeader: {
    backgroundColor: '#FF6B6B',
  },
  dayName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  dateText: {
    fontSize: 12,
    color: '#666',
  },
  whiteText: {
    color: 'white',
  },
  todayBadge: {
    fontSize: 10,
    color: 'white',
    backgroundColor: '#FF3B30',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    marginTop: 4,
  },
  dayOffBadge: {
    fontSize: 10,
    color: 'white',
    backgroundColor: '#D32F2F',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    marginTop: 4,
  },
  courseCell: {
    height: 60,
    borderRightWidth: 1,
    borderRightColor: '#E0E0E0',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  courseButton: {
    padding: 6,
    borderRadius: 6,
    margin: 2,
    justifyContent: 'center',
  },
   mathCourse: {
    backgroundColor: '#E8F5E8',
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  physicsCourse: {
    backgroundColor: '#E3F2FD',
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  courseSubject: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  courseClass: {
    fontSize: 10,
    color: '#666',
    marginBottom: 2,
  },
  courseRoom: {
    fontSize: 10,
    color: '#999',
    fontStyle: 'italic',
    marginBottom: 2,
     },
  courseTime: {
    fontSize: 9,
    color: '#888',
  },
  courseContinue: {
    flex: 1,
  },
  emptyCell: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  dayOffCell: {
    flex: 1,
    backgroundColor: '#FFEBEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  
});
export default TeacherTimetableScreen;