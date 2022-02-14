import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
<<<<<<< HEAD
import { Home, VideoScreen, ViewMap, Clone, DoctorProfile, EmergencyContacts } from '..';
=======
import { Home, VideoScreen, DoctorProfile } from '.';
>>>>>>> cc05f61b3102b50db4e327e96aa62d61eaffcb15
import { LogOut } from '../../firebase';

const Stack = createNativeStackNavigator()

export const UserScreens = ({ navigation }) => {

    const Exit = () => {
        LogOut()
        navigation.navigate("auth")
    }

    return (
<<<<<<< HEAD
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="PlayVideo" component={VideoScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" options={{ headerShown: false }} >
                {props => <Home {...props} Exit={Exit} />}
            </Stack.Screen>
            <Stack.Screen name="Doctor" options={{ headerShown: false }} >
                {props => <DoctorProfile {...props} />}
                </Stack.Screen>
                <Stack.Screen name="ViewMap" component={ViewMap} options={{ headerShown: false }} />
                <Stack.Screen name="EmergencyContacts" component={EmergencyContacts} options={{ headerShown: false }} />
        </Stack.Navigator>
=======
        // <Stack.Navigator initialRouteName="Home">
        //     <Stack.Screen name="PlayVideo" component={VideoScreen} options={{ headerShown: false }} />
        //     <Stack.Screen name="Home" options={{ headerShown: false }} >
        //         {props => <Home {...props} Exit={Exit} />}
        //     </Stack.Screen>
        //     <Stack.Screen name="Doctor" options={{ headerShown: false }} >
        //         {props => <DoctorProfile {...props} />}
        //     </Stack.Screen>
        // </Stack.Navigator>
        <VideoScreen />
>>>>>>> cc05f61b3102b50db4e327e96aa62d61eaffcb15
    )
}