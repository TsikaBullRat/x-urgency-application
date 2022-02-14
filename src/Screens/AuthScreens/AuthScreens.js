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
import { SignIn, SignUp, DoctorSignUp, MedSignIn, ForgotPassword } from '../'

const Stack = createNativeStackNavigator()

export const AuthScreens = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName='Sign In'>

      <Stack.Screen
        name='Doctor SignUp'
        options={{ headerShown: false }} >
        {props => <DoctorSignUp {...props} authNavigation={navigation} />}
      </Stack.Screen>

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
