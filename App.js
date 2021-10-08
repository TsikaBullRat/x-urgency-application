import React, {useState} from 'react';
import Navigation from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn, SignUp, ForgotPassword } from './src/Screens';
import { HeartLoader } from './src/Components';


const Stack = createNativeStackNavigator();

export default function App() {

  const [successful, setSuccess] = useState(false),
        [user, setUser] = useState(null);

  return (
    successful?(
      user?(
        // Main Application
        <>
        </>
      ):(
        //Loader
        <>
        </>
      )
    ):(
    // Login/Sign functions
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="Sign In" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Reset Password" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  );
}


