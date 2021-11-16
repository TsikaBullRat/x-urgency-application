import React from 'react';
import { } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, PlayVideo } from '..';

const Stack = createNativeStackNavigator()

export const UserScreens = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="PlayVideo" component={PlayVideo} options={{ headerShown: false }} />
            <Stack.Screen name="Home" options={{ headerShown: false }} >
                {props => <Home {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}