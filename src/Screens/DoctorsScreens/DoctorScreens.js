import React, { useState } from 'react';
import { } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MedicalHome, Upload, PlayVideo, DoctorProfile } from '..';

const Stack = createNativeStackNavigator()

export const DoctorsScreens = () => {

    const [percentage, setPerc] = useState(null)

    return (
        <Stack.Navigator>
            <Stack.Screen name="DocHome" options={{ headerShown: false }} >
                {props => <MedicalHome {...props} Log={setPerc} progress={percentage} />}
            </Stack.Screen>
            <Stack.Screen name="Upload" options={{ headerShown: false }} >
                {props => <Upload {...props} Log={setPerc} />}
            </Stack.Screen>
            <Stack.Screen name="PlayVideo" component={PlayVideo} options={{ headerShown: false }} />
            <Stack.Screen name="Doctor" component={DoctorProfile} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}