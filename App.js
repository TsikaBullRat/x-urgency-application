import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { auth, firestore } from './src/firebase'
import { Loading } from "./src/Components";
import { StyleSheet, NativeModules, View } from 'react-native';
import { AuthScreens, UserScreens, DoctorsScreens, MedicalHome, Upload, VideoScreen, DoctorProfile, UpdateProfile } from "./src/Screens";

import SignIn from './src/Screens/AuthScreens/SignIn'
import SignUp from './src/Screens/AuthScreens/SignUp'
import ForgotPassword from './src/Screens/AuthScreens/ForgotPassword'

import Doctor from './src/Screens/DoctorsScreens/Upload'
import UploadVideo from './src/Screens/DoctorsScreens/UploadVideo'
import Home from './src/Screens/UserScreens/Home'
import PlayVideo from './src/Screens/UserScreens/PlayVideo'
import EmergencyContacts from './src/Components/EmergencyContacts'


const Stack = createNativeStackNavigator()

export default function App() {

  const [id, setID] = useState(null)
  const [doctor, setDoctor] = useState(null)
  const [done, setDone] = useState(true)
  const [check1, setCheck1] = useState(true)
  const [check2, setCheck2] = useState(true)

  useEffect(() => {
    auth.onAuthStateChanged(user => user ? setID(user.uid) : setID(false))
  })

  useEffect(() => {
    id ? null : setCheck2(false), setDoctor(null)
  }, [id])

  useEffect(() => {
    try {
      firestore.collection("Users").doc(id).get().then(doc => setDoctor(doc.data().doctor))
    }

    catch (err) {
      console.log(err)
    }

  }, [id])

  useEffect(() => {
    id !== null ? (
      setCheck1(true)
    ) : null
  }, [id])

  useEffect(() => {
    doctor !== null ? (
      setCheck2(true)
    ) : (
      null
    )
  }, [doctor])

  return (
    <NavigationContainer>
      <KeyboardAwareScrollView>
         <Stack.Navigator>

          <Stack.Screen name= 'home' component={Home} />

          <Stack.Screen name= 'PlayVideo' component={PlayVideo} /> 

          <Stack.Screen name='uploadVideo' component={UploadVideo} />

          {check1 ? (
            id ? (
              check2 ? (
                doctor ? (
                  <Stack.Screen name="doctor" component={DoctorsScreens} options={{ headerShown: false }} />
                ) : (
                  <Stack.Screen name="user" component={UserScreens} options={{ headerShown: false }} />
                )
              ) : (
                <Stack.Screen name="loading" component={Loading} options={{ headerShown: false }} />
              )
            ) : (
              <Stack.Screen name="auth" component={AuthScreens} options={{ headerShown: false }} />
            )
          ) : (
            <Stack.Screen name="loading" component={Loading} options={{ headerShown: false }} />
          )}
        </Stack.Navigator>
      </KeyboardAwareScrollView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loader: {
    alignItems: "center",
    justifyContent: "center"
  }
});

