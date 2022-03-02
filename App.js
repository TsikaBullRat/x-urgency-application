import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createStackNavigator } from '@react-navigation/stack'
import { auth, firestore, LogOut } from './src/firebase'
import { Loading } from './src/Components'
import { StyleSheet, NativeModules, View } from 'react-native'
import { Welcome, FollowMore, UrgentHelp, TakeVideo, ShareContent, LikeConn, UploadVideo, MedicalHome, Upload, UpdateProfile, Home, EmergencyContacts, SignIn, MedSignIn, SignUp, ForgotPassword, ResetPassword, DoctorSignUp, PlayVideo, Doctor } from './src/Screens'

const Stack = createNativeStackNavigator()
// const Stack = createStackNavigator()

export default function App() {
  const [run, setRun] = useState(0)
  const [id, setID] = useState(null)
  const [doctor, setDoctor] = useState()

  const Exit = () => {
    LogOut()
  }

  useEffect(() => {
    if (auth.currentUser) {
      run === 0 ? setRun(1) : setRun(0)
    } else {
      try {
        auth.onAuthStateChanged(doc => (doc ? setID(doc.uid) : setID(null)))
      } catch (err) {
        null
      }
    }
  }, [run])

  useEffect(() => {
    if (id) {
      firestore
        .collection('Users')
        .doc(id)
        .get()
        .then(doc => setDoctor(doc.data().doctor))
    }
  }, [])

  return (

    <NavigationContainer>
      <> {id ? (doctor ? (
        <Stack.Navigator initialRouteName='DocHome'>
          <Stack.Screen name='TakeVideo' component={ForgotPassword} options={{ headerShown: false }} />

          <Stack.Screen name='ShareContent' component={ShareContent} options={{ headerShown: false }} />

          <Stack.Screen name='LikeConn' component={LikeConn} options={{ headerShown: false }} />

          <Stack.Screen name='DocHome' options={{ headerShown: false }}>
            {props => <MedicalHome {...props} Exit={Exit} />}
          </Stack.Screen>

          <Stack.Screen name='Upload' options={{ headerShown: false }}>
            {props => <Upload {...props} />}
          </Stack.Screen>

          <Stack.Screen name='Update' component={UpdateProfile} options={{ headerShown: false }} />

          <Stack.Screen name='UploadVideo' component={UploadVideo} options={{ headerShown: false }} />

          {/* <Stack.Screen name='PlayVideo' component={PlayVideo} options={{ headerShown: false }} /> */}

          <Stack.Screen name='Doctor' component={Doctor} options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />

          <Stack.Screen name='FollowMore' component={FollowMore} options={{ headerShown: false }} />

          <Stack.Screen name='UrgentHelp' component={UrgentHelp} options={{ headerShown: false }} />

          <Stack.Screen name='TakeVideo' component={TakeVideo} options={{ headerShown: false }} />

          <Stack.Screen name='ShareContent' component={ShareContent} options={{ headerShown: false }} />

          <Stack.Screen name='LikeConn' component={LikeConn} options={{ headerShown: false }} />

          <Stack.Screen name='Home' options={{ headerShown: false }}>
            {props => <Home {...props} Exit={Exit} />}
          </Stack.Screen>
          <Stack.Screen name='Doctor' component={Doctor} options={{ headerShown: false }} />

          <Stack.Screen name='PlayVideo' component={PlayVideo} options={{ headerShown: false }} />

          <Stack.Screen name='EmergencyContacts' options={{ headerShown: false }}>
            {props => <EmergencyContacts {...props} />}
          </Stack.Screen>

          {/* <Stack.Screen name='MedSigIn' component={MedSigIn} options={{ headerShown: false }} />

          <Stack.Screen name='DocSignUp' component={DocSignUp} options={{ headerShown: false }} />

          <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{ headerShown: false }} />

          <Stack.Screen name='ResetPassword' component={ForgotPassword} options={{ headerShown: false }} /> */}

        </Stack.Navigator>
      )
      ) : (
        <Stack.Navigator initialRouteName='Sign In'>
          <Stack.Screen name='Sign In' options={{ headerShown: false }} component={SignIn} />

          <Stack.Screen name='Doctor SignUp' options={{ headerShown: false }} component={DoctorSignUp} />

          <Stack.Screen name='Sign Up' options={{ headerShown: false }} component={SignUp} />

          <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{ headerShown: false }}
          />

          <Stack.Screen name='ResetPassword' component={ResetPassword} options={{ headerShown: false }}
          />

          <Stack.Screen name='MedSignIn' component={MedSignIn} options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
      </>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  loader: {
    alignItems: 'center',
    justifyContent: 'center'
  }

})
