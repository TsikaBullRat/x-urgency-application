import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStackNavigator } from "@react-navigation/stack"
import { auth, firestore, Exit } from './src/firebase'
import { Loading } from './src/Components'
import { StyleSheet, NativeModules, View } from 'react-native'
import { SignIn, SignUp, ForgotPassword, Home, PlayVideo, UploadVideo, DoctorSignUp, MedicalHome, Upload, EmergencyContacts, UpdateProfile, ResetPassword, Navigator} from './src/Screens'

// const Stack = createNativeStackNavigator()
const Stack = createStackNavigator()

export default function App() {

  const [Component, setComponent] = useState()
  const [selected, setSelected] = useState(0)
  const [id, setID] = useState(null)
  
  useEffect(()=>{
    auth.onAuthStateChanged(doc=>{
      doc.uid?(
        setID(doc.uid)
      ):(
        setID(null),
        setSelected(0)
      )
    })
  }, [])

  const [doctor, setDoctor] = useState(null)
  useEffect(()=>{
    id?(
    firestore.collection("Users").doc(auth.currentUser.uid).get()
      .then(doc=>setDoctor(doc.data().doctor))
    ):(
      null
    )
  }, [id])

  const [param, setParam] = useState()
  // const [percentage, setPerc] = useState(null)
  
  const Navigate = (num, data )=>{
    setSelected(num)
    setParam(data)
  }

  const LogOut = () =>{
    Exit()
    setSelected(0)
  }
  

  return (
    id?(
          doctor?(
            <Navigator selected={selected}>
              <MedicalHome Navigate={Navigate} Exit={LogOut}/>
              <PlayVideo param={param} Navigate={Navigate}/>
              <Upload Navigate={Navigate}/>
              <UploadVideo Navigate={Navigate}/>
              <UpdateProfile Navigate={Navigate}/>
            </Navigator>
          ):(
            <Navigator selected={selected}>
              <Home Navigate={Navigate} Exit={LogOut}/>
              <PlayVideo param={param} Navigate={Navigate}/>
              <EmergencyContacts Navigate={Navigate}/>
            </Navigator>
          )
        ):(
          <Navigator selected={selected}>
            <SignIn Navigate={Navigate}/>
            <SignUp Navigate={Navigate}/>
            <DoctorSignUp Navigate={Navigate}/>
            <ForgotPassword Navigate={Navigate}/>
            <ResetPassword Navigate={Navigate}/>
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
