import React, { useState, useEffect } from 'react';
import { } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, PlayVideo, DoctorProfile } from '..';

const Stack = createNativeStackNavigator()

export const UserScreens = () => {

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="PlayVideo" component={PlayVideo} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Doctor" component={DoctorProfile} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}