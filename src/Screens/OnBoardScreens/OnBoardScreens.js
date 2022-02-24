import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from "@react-navigation/stack"
import { Welcome, FollowMore, TakeVideo, UrgentHelp } from '.';

const Stack = createNativeStackNavigator()

export const OnBoardScreens = ({ navigation}) => {

    return (
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen
                    name='Welcome'
                    component={EmergencWelcomeContacts}
                    options={{ headerShown: false }}
                  />

                  <Stack.Screen
                    name='FollowMore'
                    component={FollowMore}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name='TakeVideo'
                    component={TakeVideo}
                    options={{ headerShown: false }}
                  />

                  <Stack.Screen
                    name='UrgentHelp'
                    component={UrgentHelp}
                    options={{ headerShown: false }}
                  />

        </Stack.Navigator>
    )
}