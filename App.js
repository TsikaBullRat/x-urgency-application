import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//import { createStackNavigator } from "@react-navigation/stack"
import { auth, firestore } from './src/firebase'
import { Loading } from './src/Components'
import { StyleSheet, NativeModules, View } from 'react-native'
import SignIn from './src/Screens/AuthScreens/SignIn'
import SignUp from './src/Screens/AuthScreens/SignUp'
import MedSignIn from './src/Screens/AuthScreens/MedSignIn'
import DoctorSignUp from './src/Screens/AuthScreens/DoctorSignUp'
import ResetPassword from './src/Screens/AuthScreens/ResetPassword'
import ForgotPassword from './src/Screens/AuthScreens/ForgotPassword'

import Home from './src/Screens/UserScreens/Home'
import PlayVideo from './src/Screens/UserScreens/PlayVideo'
import Doctor from './src/Screens/UserScreens/Doctor'
import { EmergencyContacts, UploadVideo, MedicalHome, Upload, UpdateProfile } from './src/Screens'
import { AuthScreens, UserScreens, DoctorsScreens } from './src/Screens'

const Stack = createNativeStackNavigator()
//const Stack = createStackNavigator()

export default function App({ navigation }) {
  const [id, setID] = useState(null)
  const [doctor, setDoctor] = useState(null)
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)

  const [percentage, setPerc] = useState(null)
  const [match, setMatch] = useState(null)

  const Exit = () => { navigation.navigate('auth') }

  useEffect(() => { auth.onAuthStateChanged(user => (user ? setID(user.uid) : setID(false))) })

  useEffect(() => { id ? '' : setCheck2(false), setDoctor('') }, [id])

  useEffect(() => { try { firestore.collection('Users').doc(id).get().then(doc => setDoctor(doc.data().doctor)) } catch (err) { console.log(err) } }, [id])

  useEffect(() => { id !== null ? setCheck1(true) : null }, [id])

  useEffect(() => { doctor !== null ? setCheck2(true) : null }, [doctor])

  return (
    <NavigationContainer>
      <KeyboardAwareScrollView>
         <Stack.Navigator>
           <Stack.Screen component={SignIn} name="SignIn"/>
           <Stack.Screen component={Home} name="Home"/>
           <Stack.Screen component={MedicalHome} name="MedicalHome"/>
         </Stack.Navigator>
      </KeyboardAwareScrollView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  loader: {
    alignItems: 'center',
    justifyContent: 'center'
  }

})
