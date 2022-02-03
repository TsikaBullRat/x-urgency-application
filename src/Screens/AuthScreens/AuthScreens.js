/**
 * @description      :
 * @author           : TLeeuw
 * @group            :
 * @created          : 09/11/2021 - 14:34:47
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 09/11/2021
 * - Author          : TLeeuw
 * - Modification    :
 **/

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SignIn, SignUp, DoctorSignUp, DocSignUp, MedSignIn, ForgotPassword } from '../'

const Stack = createNativeStackNavigator()

export const AuthScreens = () => {
  return (
    <Stack.Navigator initialRouteName='Doctor SignUp'>
      <Stack.Screen
        name='Doctor SignIn'
        component={MedSignIn}
        options={{ headerShown: false }} />

        <Stack.Screen
        name='Doctor SignUp'
        component={DoctorSignUp}
        options={{ headerShown: false }} />

        <Stack.Screen
        name='Doc SignUp'
        component={DocSignUp}
        options={{ headerShown: false }} />

      <Stack.Screen name='Sign In' options={{ headerShown: false }}>
        {(props) => <SignIn {...props} />}
      </Stack.Screen>

      <Stack.Screen name='Sign Up' options={{ headerShown: false }}>
        {(props) => <SignUp {...props} />}
      </Stack.Screen>

      <Stack.Screen
        name='Reset Password'
        component={ForgotPassword}
        options={{ headerShown: false }} />


    </Stack.Navigator>
  )
}
