import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { auth, firestore, LogOut } from './src/firebase'
import { Loading } from "./src/Components";
import { StyleSheet, NativeModules, View } from 'react-native';
import { UploadVideo, MedicalHome, Upload, UpdateProfile, Home, VideoScreen, DoctorProfile, SignIn, SignUp, ForgotPassword, DoctorSignUp } from "./src/Screens";

const Stack = createNativeStackNavigator()

export default function App() {

  const [ initialRoute, setIntialRoute ] = useState("Sign In")

  const Exit = () =>{
    LogOut()
  }

  useEffect(()=>{
    auth.onAuthStateChanged(doc=>{
      if(doc){
        if(firestore.collection("Users").doc(doc.uid).get().then(doc=>doc.data().doctor)){
          setIntialRoute("DocHome")
        }else{
          setIntialRoute("Home")
        }
      }
    })
  }, [auth.currentUser])

  useEffect(()=>{
    console.log(auth.currentUser)
  }, [auth.currentUser])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name='Doctor SignUp'
          options={{ headerShown: false }} >
          {props => <DoctorSignUp {...props} />}
        </Stack.Screen>
        <Stack.Screen name='Sign In' options={{ headerShown: false }}>
          {(props) => <SignIn {...props} />}
        </Stack.Screen>
        <Stack.Screen name='Sign Up' options={{ headerShown: false }}>
          {(props) => <SignUp {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name='Reset Password'
          component={ForgotPassword}
          options={{ headerShown: false }} />
        <Stack.Screen name="DocHome" options={{ headerShown: false }} >
          {props => <MedicalHome {...props} Exit={Exit} />}
        </Stack.Screen>
        <Stack.Screen name="Upload" options={{ headerShown: false }} >
          {props => <Upload {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Update" component={UpdateProfile} options={{ headerShown: false }} />
        <Stack.Screen name="UploadVideo" component={UploadVideo} options={{ headerShown: false }} />
        <Stack.Screen name="PlayVideo" component={VideoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Doctor" component={DoctorProfile} options={{ headerShown: false }} />
        <Stack.Screen name="Home" options={{ headerShown: false }} >
          {props => <Home {...props} Exit={Exit} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loader: {
    alignItems: "center",
    justifyContent: "center"
  }
});

