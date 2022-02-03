import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { auth, firestore } from './src/firebase'
import { Loading } from "./src/Components";
import { StyleSheet, NativeModules } from 'react-native';
import { Upload } from "./src/Screens";
import { AuthScreens, UserScreens, DoctorsScreens } from "./src/Screens";


const Stack = createNativeStackNavigator()

export default function App() {

  const [id, setID] = useState(null)
  const [doctor, setDoctor] = useState(null)
  // const [done, setDone ] = useState(false)
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged(user => user ? setID(user.uid) : setID(false))
  })

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
