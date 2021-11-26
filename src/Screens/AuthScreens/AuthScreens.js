import React from 'react';
import { } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn, SignUp, DoctorSignUp, ForgotPassword } from '..';

const Stack = createNativeStackNavigator()

<<<<<<< HEAD
export const AuthScreens = ({setData}) => {
  return (
    <Stack.Navigator initialRouteName="Sign In">
      <Stack.Screen name="Doctor SignIn" options={{ headerShown: false }} >
        {props => <DoctorSignUp {...props} setData={setData} />}
=======
export const AuthScreens = ({setDetails}) => {
  return (
    <Stack.Navigator initialRouteName="Sign In">
      <Stack.Screen name="Doctor SignIn" options={{ headerShown: false }} >
        {props => <DoctorSignUp {...props} setDetails={setDetails}/>}
>>>>>>> e5a00026906a0411511a0bc76cd575322251e690
      </Stack.Screen>
      <Stack.Screen name="Sign In" options={{ headerShown: false }} >
        {props => <SignIn {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Sign Up" options={{ headerShown: false }}>
        {props => <SignUp {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Reset Password" component={ForgotPassword} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}