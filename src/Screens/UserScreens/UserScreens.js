import React, { useState, useEffect } from 'react';
import { } from 'react-native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, PlayVideo, Doctor } from '..';

const Stack = createNativeStackNavigator()

export const UserScreens = () => {

    const [payload, setPayLoad] = useState(null)

    useEffect(() => {
        console.log(payload)
    }, [payload])
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="PlayVideo" options={{ headerShown: false }} >
                {props => <PlayVideo {...props} data={payload} />}
            </Stack.Screen>
            <Stack.Screen name="Home" options={{ headerShown: false }} >
                {props => <Home {...props} setData={setPayLoad} />}
            </Stack.Screen>
            <Stack.Screen name="Doctor" options={{ headerShown: false }} >
                {props => <Doctor />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}