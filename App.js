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
import { SignIn, SignUp, Home, Strokes, ForgotPassword, DoctorSignUp, MedicalHome, UploadVideo, PlayVideo, DocProfile } from './src/Screens';
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
      <KeyboardAwareScrollView>
        {successful ? (
          user ? (
            <Stack.Navigator initialRouteName="SignIn">
              <Stack.Screen name="Sign In" options={{ headerShown: false }} >
                {props => <UploadVideo {...props} setDone={setSuccess} />}
              </Stack.Screen>
              <Stack.Screen name="Sign Up" options={{ headerShown: false }}>
                {props => <SignUp {...props} setDone={setSuccess} />}
              </Stack.Screen>
              <Stack.Screen name="Doctor SignUp" component={DoctorSignUp} options={{ headerShown: false }}>
              </Stack.Screen>
<<<<<<< HEAD

              <Stack.Screen name="Doctor SignIn" component={DoctorSignUp} options={{ headerShown: false }}/>
           

=======
              <Stack.Screen name="Doctor SignIn" component={DoctorSignUp} options={{ headerShown: false }}>
              </Stack.Screen>
>>>>>>> a63d26169c456fc56b6ac4f4bd7654c1144d2b68
              <Stack.Screen name="MedicalHome" component={MedicalHome} options={{ headerShown: false }}>
              </Stack.Screen>
              <Stack.Screen name="Reset Password" component={ForgotPassword} options={{ headerShown: false }} />
              <Stack.Screen name="Upload" component={UploadVideo} options={{ headerShown: false }} />
              <Stack.Screen name="PlayVideo" component={PlayVideo} options={{ headerShown: false }} />

              <Stack.Screen name="DocHome" component={MedicalHome} options={{ headerShown: false }} />
<<<<<<< HEAD

              <Stack.Screen name="DocProfile" component={DocProfile} options={{ headerShown: false }} />

=======
>>>>>>> a63d26169c456fc56b6ac4f4bd7654c1144d2b68
            </Stack.Navigator>
          ) : (
            //Loader
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" options={{ headerShown: false }} >
                {props => <Home {...props} setDone={setSuccess} />}
              </Stack.Screen>
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