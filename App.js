import React from 'react';
import Navigation from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from './src/Screens/ForgotPassword';

// You can import from local files
import { SignIn, SignUp,} from './src/Screens';


const Stack = createNativeStackNavigator();

export default function App() {

  
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="Sign In" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Reset Password" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


