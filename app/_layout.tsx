import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { Alert } from "react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" />
        <Stack.Screen name="dashboard" options={{headerShown: false}} />
        <Stack.Screen name="todayCourse" options={{headerShown: false}}/>
        <Stack.Screen name="homework" options={{headerShown: false}}/>
        <Stack.Screen name="attendanceClass" options={{headerShown: false}}/>
        <Stack.Screen name="attendenceCourse" options={{headerShown: false}}/>
        <Stack.Screen name="checkHomework" options={{headerShown: false}}/>
        <Stack.Screen name="leave" options={{headerShown: false}}/>
        <Stack.Screen name="leave-form" options={{headerShown: false}}/>
        <Stack.Screen name="plannedCourse" options={{headerShown: false}}/>
        <Stack.Screen name="postpone" options={{headerShown: false}}/>
        <Stack.Screen name="postpone-form" options={{headerShown: false}}/>
        <Stack.Screen name="swap" options={{headerShown: false}}/>
        <Stack.Screen name="swap-form" options={{headerShown: false}}/>
        <Stack.Screen name="timetable" options={{headerShown: false}}/>
        <Stack.Screen name="profil" options={{headerShown: false}}/>
        <Stack.Screen name="homework-form" options={{headerShown: false}}/>
        <Stack.Screen name="check-hw-list" options={{headerShown: false}}/>
    </Stack>
    </GestureHandlerRootView>
  );
}


