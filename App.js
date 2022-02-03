import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { auth, Check, LoadSet } from './src/firebase'
import { StyleSheet, NativeModules } from 'react-native';
import { AuthScreens, UserScreens, DoctorsScreens } from "./src/Screens";

const Stack = createNativeStackNavigator() 

export default function App() {
  
  const [id, setID] = useState(null)
  const [doctor, setDoctor] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(user => user?setID(user.uid):null)
  }, [id])

  useEffect(()=>{
    try{
      firestore.collection("Users").doc(id).get().then(doc=>setDoctor(doc.data().doctor))
    }
    catch(err){
      console.log(err)
    }
  }, [id])

    return (
    <NavigationContainer>
      <KeyboardAwareScrollView>
        <Stack.Navigator>
        {id?(
          doctor?(
            <Stack.Screen name="doctor" component={DoctorsScreens} options={{ headerShown: false }}/>
          ):(
            <Stack.Screen name="user" component={UserScreens} options={{ headerShown: false }}/>
          )
        ):(
          <Stack.Screen name="auth" component={AuthScreens} options={{ headerShown: false }}/>
        )}
        </Stack.Navigator>
      </KeyboardAwareScrollView>
    </NavigationContainer>
    // <UploadVideo/>
  );
}

const styles = StyleSheet.create({
    loader: {
        alignItems: "center",
        justifyContent: "center"
    }
});
