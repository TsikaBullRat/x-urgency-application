import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { auth, firestore, LogOut } from './src/firebase'
import { Loading } from "./src/Components";
import { StyleSheet, NativeModules, View } from 'react-native';
import { Welcome, TakeVideo, UrgentHelp, FollowMore, UploadVideo, MedicalHome, Upload, UpdateProfile, Home, EmergencyContacts, SignIn, SignUp, ForgotPassword, DoctorSignUp, PlayVideo, Doctor } from "./src/Screens";

const Stack = createNativeStackNavigator()
//const Stack = createStackNavigator()

export default function App() {
  
  const [ run, setRun ] = useState(0)
  const [ id, setID] = useState(null)
  const [ doctor, setDoctor ] = useState()

  const Exit = () =>{
    LogOut()
  }

  useEffect(()=>{
    if(auth.currentUser){
      run === 0?(
        setRun(1)
      ):(
        setRun(0)
      )
    }else{
      try{
        auth.onAuthStateChanged(doc=>doc?setID(doc.uid):setID(null))
      }catch(err){
        null
      }
    }
  }, [run])

  useEffect(()=>{
    if(id){
      firestore.collection("Users").doc(id).get().then(doc=>setDoctor(doc.data().doctor))
    }
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator >
        {id?(
          doctor?(
            <>

              <Stack.Screen name='TakeVideo' component={ForgotPassword} options={{ headerShown: false }} />

              <Stack.Screen name="DocHome" options={{ headerShown: false }} >
                {props => <MedicalHome {...props} Exit={Exit} />}
              </Stack.Screen>

              <Stack.Screen name="Upload" options={{ headerShown: false }} >
                {props => <Upload {...props} />}
              </Stack.Screen>

              <Stack.Screen name="Update" component={UpdateProfile} options={{ headerShown: false }} />

              <Stack.Screen name="UploadVideo" component={UploadVideo} options={{ headerShown: false }} />

              <Stack.Screen name="PlayVideo" component={PlayVideo} options={{ headerShown: false }} />

              <Stack.Screen name="Doctor" component={Doctor} options={{ headerShown: false }} />

            </>
          ):(
            <>

              <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />

            <Stack.Screen name='FollowMore' component={FollowMore} options={{ headerShown: false }} />

            <Stack.Screen name='UrgentHelp' component={UrgentHelp} options={{ headerShown: false }} />

              <Stack.Screen name="Home" options={{ headerShown: false }} >
                {props => <Home {...props} Exit={Exit} />}
              </Stack.Screen>    
              <Stack.Screen name="Doctor" component={Doctor} options={{ headerShown: false }} />
              <Stack.Screen name="PlayVideo" component={PlayVideo} options={{ headerShown: false }} />

              {/* <Stack.Screen name="EmergencyContacts" components={EmergencyContacts} 
              options={{headerShown: false}} /> */}
              
            
            </>
          )
        ):(
          <>
            <Stack.Screen name='Sign In' options={{ headerShown: false }} component={SignIn} />
            <Stack.Screen name='Doctor SignUp' options={{ headerShown: false }} component={DoctorSignUp} />
            <Stack.Screen name='Sign Up' options={{ headerShown: false }} component={SignUp}/>
            <Stack.Screen name='Reset Password' component={ForgotPassword} options={{ headerShown: false }} />
           
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  loader: {
    alignItems: 'center',
    justifyContent: 'center'
  }

})
