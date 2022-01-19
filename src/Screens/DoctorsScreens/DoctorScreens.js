import React, {useEffect, useState} from 'react';
import { } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Clone, MedicalHome, UploadVideo, Upload } from '..';

const Stack = createNativeStackNavigator()

export const DoctorsScreens = () => {

    const [percentage, setPerc] = useState(null)

    return (
        <Stack.Navigator>
            <Stack.Screen name="DocHome" options={{ headerShown: false }} >
                {props=><MedicalHome {...props} Log={setPerc} progress={percentage}/>}
            </Stack.Screen>
            <Stack.Screen name="Upload" options={{ headerShown: false }} >
                {props=><Upload {...props} Log={setPerc}/>}
            </Stack.Screen>
            <Stack.Screen name="MedicalHome" component={MedicalHome} options={{ headerShown: false}} />
        </Stack.Navigator>
    )
}