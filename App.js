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
import ForgotPassword from './src/Screens/AuthScreens/ForgotPassword'
import Home from './src/Screens/UserScreens/Home'
import PlayVideo from './src/Screens/UserScreens/PlayVideo'
import Doctor from './src/Screens/UserScreens/Doctor'
import {
  EmergencyContacts,
  UploadVideo,
  MedicalHome,
  Upload,
  UpdateProfile
} from './src/Screens'
import { AuthScreens, UserScreens, DoctorsScreens } from './src/Screens'

const Stack = createNativeStackNavigator()
//const Stack = createStackNavigator()

export default function App ({ navigation }) {
  const [id, setID] = useState(null)
  const [doctor, setDoctor] = useState(null)
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)

  const [percentage, setPerc] = useState(null)
  const [match, setMatch] = useState(null)

  const Exit = () => {
    navigation.navigate('auth')
  }

  useEffect(() => {
    auth.onAuthStateChanged(user => (user ? setID(user.uid) : setID(null)))
  })

  useEffect(() => {
    id ? null : setCheck2(false), setDoctor(null)
  }, [id])

  useEffect(() => {
    try {
      firestore
        .collection('Users')
        .doc(id)
        .get()
        .then(doc => setDoctor(doc.data().doctor))
    } catch (err) {
      console.log(err)
    }
  }, [id])

  useEffect(() => {
    id !== null ? setCheck1(true) : null
  }, [id])

  useEffect(() => {
    doctor !== null ? setCheck2(true) : null
  }, [null])

  return (
    <NavigationContainer>
      <KeyboardAwareScrollView>
        {check1 ? (
          id ? (
            check2 ? (
              doctor ? (
                //<DoctorSignUp />
                <Stack.Navigator>
                  <Stack.Screen
                    name='MedicalHome'
                    options={{ headerShown: false }}
                  >
                    {props => (
                      <MedicalHome
                        {...props}
                        Log={setPerc}
                        progress={percentage}
                        setMatch={setMatch}
                        Exit={Exit}
                      />
                    )}
                  </Stack.Screen>
                  <Stack.Screen name='Upload' options={{ headerShown: false }}>
                    {props => <Upload {...props} Log={setPerc} />}
                  </Stack.Screen>

                  <Stack.Screen
                    name='UpdateProfile'
                    component={UpdateProfile}
                    options={{ headerShown: false }}
                  />

                  <Stack.Screen
                    name='UploadVideo'
                    component={UploadVideo}
                    options={{ headerShown: false }}
                  />
                </Stack.Navigator>
              ) : (
                <Stack.Navigator>
                  <Stack.Screen name='Home' options={{ headerShown: false }}>
                    {props => <Home {...props} Exit={Exit} />}
                  </Stack.Screen>

                  <Stack.Screen name='Sign Up' options={{ headerShown: false }}>
                    {props => <SignUp {...props} />}
                  </Stack.Screen>

                  <Stack.Screen
                    name='EmergencyContacts'
                    component={EmergencyContacts}
                    options={{ headerShown: false }}
                  />

                  {/* <Stack.Screen
                    name='Doctor'
                    component={Doctor}
                    options={{ headerShown: false }}>
                    {props => <Doctor {...props} />} 
                  </Stack.Screen>  */}

                  <Stack.Screen
                    name='PlayVideo'
                    component={PlayVideo}
                    options={{ headerShown: false }}
                  />
                </Stack.Navigator>
              )
            ) : (
              // <Stack.Screen
              //   name='DoctorSignUp'
              //   options={{ headerShown: false }} >
              //   {props => <DoctorSignUp {...props} authNavigation={navigation} />}
              // </Stack.Screen>

              <Stack.Navigator>
                <Stack.Screen
                  name='SignIn'
                  component={SignIn}
                  options={{ headerShown: false }}
                />

                <Stack.Screen name='Home' options={{ headerShown: false }}>
                  {props => <Home {...props} Exit={Exit} />}
                </Stack.Screen>

                <Stack.Screen name='Sign Up' options={{ headerShown: false }}>
                  {props => <SignUp {...props} />}
                </Stack.Screen>

                <Stack.Screen
                  name='EmergencyContacts'
                  component={EmergencyContacts}
                  options={{ headerShown: false }}
                />

                <Stack.Screen
                  name='Doctor'
                  component={Doctor}
                  options={{ headerShown: false }}
                />
                {/* {props => <Doctor {...props} />}  */}
                {/* </Stack.Screen>  */}

                <Stack.Screen
                  name='MedSignIn'
                  component={MedSignIn}
                  options={{ headerShown: false }}
                />

                <Stack.Screen
                  name='DoctorSignUp'
                  options={{ headerShown: false }}
                >
                  {props => (
                    <DoctorSignUp {...props} authNavigation={navigation} />
                  )}
                </Stack.Screen>

                <Stack.Screen
                  name='PlayVideo'
                  component={PlayVideo}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            )
          ) : (
            <MedSignIn />
            // <Stack.Group>

            //   <Stack.Screen name='Sign In' options={{ headerShown: false }}>
            //     {(props) => <SignIn {...props} />}
            //   </Stack.Screen>

            //   <Stack.Screen name='Sign Up' options={{ headerShown: false }}>
            //     {(props) => <SignUp {...props} />}
            //   </Stack.Screen>

            //   <Stack.Screen
            //     name='MedSignIn'
            //     options={{ headerShown: false }} >
            //     {props => <MedSignIn {...props} authNavigation={navigation} />}
            //   </Stack.Screen>

            //   <Stack.Screen
            //     name='DoctorSignUp'
            //     options={{ headerShown: false }} >
            //     {props => <DoctorSignUp {...props} authNavigation={navigation} />}
            //   </Stack.Screen>

            //   <Stack.Screen
            //     name='Reset Password'
            //     component={ForgotPassword}
            //     options={{ headerShown: false }} />
            // </Stack.Group>
          )
        ) : (
          //<SignIn />

          <Stack.Navigator>
            <Stack.Screen
              name='SignIn'
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen name='Sign Up' component={SignUp} />
            <Stack.Screen name='Reset Password' component={ForgotPassword} />
            <Stack.Screen name='MedSignIn' component={MedSignIn} />
            <Stack.Screen name='Doctor SignUp' component={DoctorSignUp} />
          </Stack.Navigator>
        )}

        {/*</Stack.Navigator>*/}
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
