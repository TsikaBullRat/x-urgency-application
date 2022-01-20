<<<<<<< HEAD
import React from 'react';
=======
import React, {useState, useEffect} from 'react';
>>>>>>> 940d586b45539a0a5f9410e803d91ccde0a64d2d
import { } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, PlayVideo, Clone, Doctor } from '..';

const Stack = createNativeStackNavigator()

export const UserScreens = () => {

<<<<<<< HEAD
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="PlayVideo" component={PlayVideo} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Doctor" component={Doctor} options={{ headerShown: false }} />
=======
    const [payload, setPayLoad] = useState(null)

    useEffect(()=>{
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
>>>>>>> 940d586b45539a0a5f9410e803d91ccde0a64d2d
        </Stack.Navigator>
    )
}