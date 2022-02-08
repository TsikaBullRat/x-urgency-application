import React, { useEffect, useState } from 'react';
import { } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Clone, MedicalHome, Upload, VideoScreen, DoctorProfile, UpdateProfile } from '..';

const Stack = createNativeStackNavigator()

export const DoctorsScreens = ({ navigation, route }) => {

    const credentials = route.params
    const Exit = () => {
        navigation.navigate("auth")
    }
    const [percentage, setPerc] = useState(null)
    const [match, setMatch] = useState(null)

    return (
        <Stack.Navigator>
            <Stack.Screen name="DocHome" options={{ headerShown: false }} >
                {props => <MedicalHome {...props} Log={setPerc} progress={percentage} setMatch={setMatch} Exit={Exit} credentials={credentials} />}
            </Stack.Screen>
            <Stack.Screen name="Upload" options={{ headerShown: false }} >
                {props => <Upload {...props} Log={setPerc} />}
            </Stack.Screen>
            <Stack.Screen name="PlayVideo" component={VideoScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Doctor" component={DoctorProfile} options={{ headerShown: false }} />
            <Stack.Screen name="update" component={UpdateProfile} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}