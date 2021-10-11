/**
    * @description      : 
    * @author           : MLab
    * @group            : 
    * @created          : 07/10/2021 - 10:00:40
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 07/10/2021
    * - Author          : MLab
    * - Modification    : 
**/
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from './src/Screens/ForgotPassword';
// You can import from local files
import { SignIn, SignUp, Home, Strokes} from './src/Screens';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">



        <Stack.Screen name="Sign In" component={SignIn} options={{ headerShown: false }} />

        <Stack.Screen name="Sign Up" component={SignUp} options={{ headerShown: false }}/>

        <Stack.Screen name="Reset Password" component={ForgotPassword} options={{ headerShown: false }}/>

        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>

        <Stack.Screen name="Strokes" component={Strokes} options={{ headerShown: false }}/>



      </Stack.Navigator>
    </NavigationContainer>
  );
}