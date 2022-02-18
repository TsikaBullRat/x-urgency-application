import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from "@react-navigation/stack"
import { MedicalHome, Upload, UploadVideo, UpdateProfile } from '.';

const Stack = createNativeStackNavigator()
// const Stack = createStackNavigator()

export const DoctorsScreens = ({ navigation, route }) => {

    const Exit = () => {
        navigation.navigate("auth")
    }
    const [percentage, setPerc] = useState(null)
    const [match, setMatch] = useState(null)

    return (
        <Stack.Navigator initialRouteName='MedicalHome'>
            <Stack.Screen name="MedicalHome" options={{ headerShown: false }} >
                {props => <MedicalHome {...props} Log={setPerc} progress={percentage} setMatch={setMatch} Exit={Exit} />}
            </Stack.Screen>

            <Stack.Screen name="Upload" options={{ headerShown: false }} >
                {props => <Upload {...props} Log={setPerc} />}
            </Stack.Screen>

            <Stack.Screen name="UpdateProfile" component={UpdateProfile} options={{ headerShown: false }} />

            <Stack.Screen name="UploadVideo" component={UploadVideo} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}