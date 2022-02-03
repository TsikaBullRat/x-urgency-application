import React, {useState, useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, VideoScreen, Clone, DoctorProfile } from '..';


const Stack = createNativeStackNavigator()

export const UserScreens = ({ navigation }) => {

    const Exit = () =>{
        navigation.navigate("auth")
    }

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="PlayVideo" component={VideoScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" options={{ headerShown: false }} >
                {props=><Home {...props} Exit={Exit}/>}
            </Stack.Screen>
            <Stack.Screen name="Doctor" options={{ headerShown: false }} >
                {props=><DoctorProfile {...props} match={match} />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}