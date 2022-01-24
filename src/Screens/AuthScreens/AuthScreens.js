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
//import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SignIn, SignUp, DoctorSignUp, ForgotPassword } from '../'

const Stack = createNativeStackNavigator()

export const AuthScreens = () => {
  return (
    <Stack.Navigator initialRouteName='Sign In'>
      <Stack.Screen
        name='Doctor SignIn'
        component={DoctorSignUp}
        options={{ headerShown: false }}
      />

      <Stack.Screen name='Sign In' options={{ headerShown: false }}>
        {(props) => <SignIn {...props} />}
      </Stack.Screen>

      
    </Stack.Navigator>
  )
}
