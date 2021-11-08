import React from 'react';
import {} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MedicalHome, UploadVideo } from '..';

const Stack = createNativeStackNavigator()

export const DoctorsScreens = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="DocHome" component={MedicalHome} options={{ headerShown: false }} />
            <Stack.Screen name="Upload" component={UploadVideo} options={{ headerShown: false }} />
            <Stack.Screen name="MedicalHome" component={MedicalHome} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}