import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, PlayVideo, Doctor, EmergencyContacts } from '..';
import { LogOut } from '../../firebase';

const Stack = createNativeStackNavigator()

export const UserScreens = ({ navigation }) => {

    const Exit = () => {
        LogOut()
        navigation.navigate("auth")
    }

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="PlayVideo" component={PlayVideo} options={{ headerShown: false }} />
            <Stack.Screen name="Home" options={{ headerShown: false }} >
                {props => <Home {...props} Exit={Exit} />}
            </Stack.Screen>
            <Stack.Screen name="Doctor" options={{ headerShown: false }} >
<<<<<<< HEAD
                {props => <Doctor {...props} />}
                </Stack.Screen>
                <Stack.Screen name="EmergencyContacts" component={EmergencyContacts} options={{ headerShown: false }} />
=======
                {props => <DoctorProfile {...props} />}
            </Stack.Screen>
            <Stack.Screen name="EmergencyContacts" component={EmergencyContacts} options={{ headerShown: false }} />
>>>>>>> c0a1a31f009fbaa9c017263838606c7829cb91cb
        </Stack.Navigator>
    )
}