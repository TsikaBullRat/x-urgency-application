import React, { useState, useEffect } from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createStackNavigator } from "@react-navigation/stack"
import { Home, VideoScreen, DoctorProfile, Emergency } from '.';
import { LogOut } from '../../firebase';

// const Stack = createNativeStackNavigator()
const Stack = createStackNavigator()

export const UserScreens = ({ navigation }) => {

    const Exit = () => {
        LogOut()
        navigation.navigate("auth")
    }

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="EmergencyContacts" component={Emergency} /*options={{ headerShown: false }}*/ />
            <Stack.Screen name="PlayVideo" component={VideoScreen} /*options={{ headerShown: false }}*/ />
            <Stack.Screen name="Home" /*options={{ headerShown: false }}*/ >
                {props => <Home {...props} Exit={Exit} />}
            </Stack.Screen>
            <Stack.Screen name="Doctor" /*options={{ headerShown: false }}*/ >
                {props => <DoctorProfile {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}