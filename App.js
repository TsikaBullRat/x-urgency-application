import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack"
import { auth, firestore } from './src/firebase'
import { Loading } from "./src/Components";
import { StyleSheet, NativeModules, View } from 'react-native';
import { Home, VideoScreen, DoctorProfile, EmergencyContacts, ViewMap, UploadVideo, MedicalHome, Upload, UpdateProfile, SignIn, SignUp, ForgotPassword, DoctorSignUp } from "./src/Screens";

// const Stack = createNativeStackNavigator()
const Stack = createStackNavigator()

export default function App() {

  const [id, setID] = useState(null)
  const [doctor, setDoctor] = useState(null)
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)
  const Exit = () => {
    navigation.navigate("auth")
  }
  const [percentage, setPerc] = useState(null)
  const [match, setMatch] = useState(null)

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
          {check1 ? (
            id ? (
              check2 ? (
                doctor ? (
                  <Stack.Group>
                    <Stack.Screen name="DocHome" options={{ headerShown: false }} >
                      {props => <MedicalHome {...props} Log={setPerc} progress={percentage} setMatch={setMatch} Exit={Exit} />}
                    </Stack.Screen>
                    <Stack.Screen name="Upload" options={{ headerShown: false }} >
                      {props => <Upload {...props} Log={setPerc} />}
                    </Stack.Screen>
                    <Stack.Screen name="Update" component={UpdateProfile} options={{ headerShown: false }} />
                    <Stack.Screen name="UploadVideo" component={UploadVideo} options={{ headerShown: false }} />
                    <Stack.Screen name="PlayVideo" component={VideoScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Doctor" component={DoctorProfile} options={{ headerShown: false }} />
                  </Stack.Group>
                ) : (
                  <Stack.Group>
                    <Stack.Screen name="PlayVideo" component={VideoScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Home" options={{ headerShown: false }} >
                      {props => <Home {...props} Exit={Exit} />}
                    </Stack.Screen>
                    <Stack.Screen name="Doctor" options={{ headerShown: false }} >
                      {props => <DoctorProfile {...props} />}
                    </Stack.Screen>
                    <Stack.Screen name="ViewMap" component={ViewMap} options={{ headerShown: false }} />
                    <Stack.Screen name="EmergencyContacts" component={EmergencyContacts} options={{ headerShown: false }} />
                  </Stack.Group>
                )
              ) : (
                <Stack.Screen name="loading" component={Loading} options={{ headerShown: false }} />
              )
            ) : (
              <Stack.Group>
                <Stack.Screen
                  name='Doctor SignUp'
                  options={{ headerShown: false }} >
                  {props => <DoctorSignUp {...props} authNavigation={navigation} />}
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
              </Stack.Group>
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

