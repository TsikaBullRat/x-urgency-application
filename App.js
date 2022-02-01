/**
 * @description      :
 * @author           : TLeeuw
 * @group            :
 * @created          : 12/10/2021 - 16:06:47
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 12/10/2021 
 * - Author          : TLeeuw
 * - Modification    :
 **/

import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// You can import from local files
import { auth, Check, LoadSet } from './src/firebase'
import { StyleSheet, NativeModules } from 'react-native';
import { AuthScreens, UserScreens, DoctorsScreens } from "./src/Screens";

export default function App() {
  const [id, setID] = useState();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => user ? setID(user.uid) : null)
  })

  useEffect(()=>console.log("Im running"))

  return (

    <NavigationContainer>
      <KeyboardAwareScrollView>
      {
        id?(
          <Check id={id} details={details}/>
        ):(
          <AuthScreens setDetails={setDetails} />
        )
      }
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
