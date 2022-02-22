import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStackNavigator } from "@react-navigation/stack"
import { auth, firestore } from './src/firebase'
import { Loading } from './src/Components'
import { StyleSheet, NativeModules, View } from 'react-native'
import { SignIn, SignUp, ForgotPassword, Home, PlayVideo, UploadVideo, DoctorSignUp, MedicalHome, Upload, EmergencyContacts, UpdateProfile, MedSignIn, Navigator} from './src/Screens'

// const Stack = createNativeStackNavigator()
const Stack = createStackNavigator()

export default function App() {
  const [id, setID] = useState(null)
  
  useEffect(()=>{
    auth.onAuthStateChanged(doc=>setID(doc.uid))
    setSelected(0)
  }, [])

  const [doctor, setDoctor] = useState(null)
  useEffect(()=>{
    id?(
    firestore.collection("Users").doc(auth.currentUser.uid).get()
      .then(doc=>setDoctor(doc.data().doctor))
    ):(
      null
    )
  }, [])

  const [param, setParam] = useState()
  const [percentage, setPerc] = useState(null)
  const [match, setMatch] = useState(null)
  const [selected, setSelected] = useState(0)
  const Navigate = (num, data )=>{
    setSelected(num)
    setParam(data)
  }

  return (
    id?(
          <Navigator selected={selected}>
            <Home Navigate={Navigate}/>
            <PlayVideo param={param} Navigate={Navigate}/>
            <EmergencyContacts Navigate={Navigate}/>
          </Navigator>
        ):(
          <Navigator selected={selected}>
            <SignIn Navigate={Navigate}/>
            <SignUp Navigate={Navigate}/>
            <DoctorSignUp Navigate={Navigate}/>
          </Navigator>
      )
  )
}
const styles = StyleSheet.create({
  loader: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
