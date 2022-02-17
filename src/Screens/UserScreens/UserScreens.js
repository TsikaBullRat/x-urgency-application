import React, { useState, useEffect } from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createStackNavigator } from "@react-navigation/stack"
import Home from './Home';
import PlayVideo from './PlayVideo';
import EmergencyContacts from './EmergencyContacts';
import Doctor from './Doctor';
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
            <Stack.Screen name="Home" options={{ headerShown: false }} >
                {props => <Home {...props} Exit={Exit} />}
            </Stack.Screen>

            <Stack.Screen name="PlayVideo" component={PlayVideo} options={{ headerShown: false }} />

            <Stack.Screen name="Doctor" options={{ headerShown: false }} >
                {props => <Doctor {...props} />}
            </Stack.Screen>

                <Stack.Screen name="EmergencyContacts" component={EmergencyContacts} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}