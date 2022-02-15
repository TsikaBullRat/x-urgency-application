import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { SignIn, SignUp, DoctorSignUp, DocSignUp, MedSignIn, ForgotPassword } from './'
import SignIn from "./SignIn";
import SignUp from "./SignUp"
import ForgotPassword from "./ForgotPassword"
import DoctorSignUp from "./DoctorSignUp"
import MedSignIn from "./MedSignIn"

const Stack = createNativeStackNavigator()

export const AuthScreens = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName='Sign In'>

      <Stack.Screen name='Sign In' options={{ headerShown: false }}>
        {(props) => <SignIn {...props} />}
      </Stack.Screen>

      <Stack.Screen name='Sign Up' options={{ headerShown: false }}>
        {(props) => <SignUp {...props} />}
      </Stack.Screen>

      <Stack.Screen
        name='MedSignIn'
        component={MedSignIn}
        options={{ headerShown: false }} />

        <Stack.Screen
        name='Doctor SignUp'
        options={{ headerShown: false }} >
        {props => <DoctorSignUp {...props} authNavigation={navigation} />}
      </Stack.Screen>

      <Stack.Screen
        name='Reset Password'
        component={ForgotPassword}
        options={{ headerShown: false }} />

    </Stack.Navigator>
  )
}
