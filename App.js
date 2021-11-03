/**
    * @description      : 
    * @author           : TLeeuw
    * @group            : 
    * @created          : 12/10/2021 - 16:06:47
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 12/10/2021
    * - Author          : TLeeuw
    * - Modification    : 
**/
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// You can import from local files
import { SignIn, SignUp, Home, Strokes, ForgotPassword, DoctorSignUp, MedicalHome, UploadVideo, PlayVideo, DoctorProfile } from './src/Screens';
import { auth } from './src/firebase'
import { ActivityIndicator } from 'react-native-paper';
import { LoadSet } from './src/firebase';

const Stack = createNativeStackNavigator();

export default function App() {
  const [successful, setSuccess] = useState(false),
    [user, setUser] = useState(null),
    [load, setLoad] = useState();
  LoadSet(setLoad)
  console.log(load)
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user)
      setSuccess(true)
    })
    return () => {
      auth.onAuthStateChanged(user => {
        setUser(user)
        setSuccess(true)
      })
    }
  }, [successful, user])
  return (
    <NavigationContainer>
       <Stack.Navigator >
       <Stack.Screen name="Doc" component={DoctorProfile} options={{ headerShown: false }} />

       </Stack.Navigator >
    </NavigationContainer>
  );
}