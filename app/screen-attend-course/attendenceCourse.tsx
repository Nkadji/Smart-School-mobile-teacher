import React from 'react';
import { Tabs } from 'expo-router';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import { View, TouchableOpacity } from 'react-native';
import HeaderText from '@/components/list/header-text';
import Header from '@/components/list/header';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import ListAttendence from './list-attend';
import CheckAttendence from './check-attend';

const TopTabs= createMaterialTopTabNavigator();

export default function TabsLayout() {
    const router=useRouter();
  return (
    <View style={{flex:1}}>
        <Header>
            <TouchableOpacity onPress={() => router.navigate('/dashboard')}>
                <MaterialIcons name='arrow-back-ios' size={20} color="#050505ff" style={ { fontWeight:"bold", marginTop: 20}}/>
            </TouchableOpacity>
            <HeaderText>Attendence</HeaderText>
        </Header>
        <TopTabs.Navigator
        initialRouteName="list-attend"
        screenOptions={{
            swipeEnabled: true, // autorise le swipe horizontal
            tabBarIndicatorStyle: { backgroundColor: "#4b01f8" },
            tabBarLabelStyle: { fontWeight: "600" },
            tabBarStyle: { elevation: 0, shadowOpacity: 0 },
        }}
        >
        <TopTabs.Screen
            name="list-attend"
            component={ListAttendence}
            options={{ title: "List of Attendence" }}
        />
        <TopTabs.Screen
            name="check-attend"
            component={CheckAttendence}
            options={{ title: "Check Attendence" }}
        />
        </TopTabs.Navigator>
        </View>
  );
}