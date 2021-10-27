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
import { SignIn, SignUp, Home, Strokes, ForgotPassword, DoctorSignUp, MedicalHome, UploadVideo } from './src/Screens';
import { auth } from './src/firebase'
import { ActivityIndicator } from 'react-native-paper';
const Stack = createNativeStackNavigator();
export default function App() {
  const [successful, setSuccess] = useState(false),
    [user, setUser] = useState(null);
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
      <KeyboardAwareScrollView>
        {successful ? (
          user ? (
            // Main Application
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" options={{ headerShown: false }} >
                {props => <Home {...props} setDone={setSuccess} />}
              </Stack.Screen>
              <Stack.Screen name="Strokes" component={Strokes} options={{ headerShown: false }} />

              <Stack.Screen name="DocHome" component={MedicalHome} options={{ headerShown: false }} />
              
              <Stack.Screen name="UploadVideo" component={UploadVideo} options={{ headerShown: false }} />
            </Stack.Navigator>
          ) : (
            //Loader
            <Stack.Navigator initialRouteName="SignIn">
              <Stack.Screen name="Sign In" options={{ headerShown: false }} >
                {props => <SignIn {...props} setDone={setSuccess} />}
              </Stack.Screen>
              <Stack.Screen name="Sign Up" options={{ headerShown: false }}>
                {props => <SignUp {...props} setDone={setSuccess} />}
              </Stack.Screen>
              <Stack.Screen name="Doctor SignUp" component={DoctorSignUp} options={{ headerShown: false }}>
              </Stack.Screen>
              <Stack.Screen name="MedicalHome" component={MedicalHome} options={{ headerShown: false }}>
              </Stack.Screen>
              <Stack.Screen name="Reset Password" component={ForgotPassword} options={{ headerShown: false }} />

              

              
            </Stack.Navigator>
          )
        ) : (
          // Login/Sign functions
          <ActivityIndicator size="large" />
        )}
      </KeyboardAwareScrollView>
    </NavigationContainer>
  );
}