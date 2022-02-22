import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from "./SignIn";
import SignUp from "./SignUp"
import ForgotPassword from "./ForgotPassword"
import DoctorSignUp from "./DoctorSignUp"
import MedSignIn from "./MedSignIn"

const Stack = createNativeStackNavigator()

export const AuthScreens = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName='SignIn'>

      <Stack.Screen
        name='DoctorSignUp'
        options={{ headerShown: false }} >
        {props => <DoctorSignUp {...props} authNavigation={navigation} />}
      </Stack.Screen>

      <Stack.Screen name='SignIn' options={{ headerShown: false }}>
        {(props) => <SignIn {...props} />}
      </Stack.Screen>

      <Stack.Screen name='SignUp' options={{ headerShown: false }}>
        {(props) => <SignUp {...props} />}
      </Stack.Screen>

      <Stack.Screen
        name='MedSignIn'
        component={MedSignIn}
        options={{ headerShown: false }} />

      <Stack.Screen
        name='ResetPassword'
        component={ForgotPassword}
        options={{ headerShown: false }} />

    </Stack.Navigator>
  )
}


