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
import { auth, Detector } from './src/firebase'
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { EmergencyContacts } from "./src/Screens";

export default function App() {
  const [user, setUser] = useState(),
    [checked, setChecked] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(user => user ? setUser(user.uid) : null)
    setChecked(true)
  })

  return (
   <view>
     <EmergencyContacts/>
   </view>
  );
}

const styles = StyleSheet.create({
  loader: {
    alignItems: "center",
    justifyContent: "center"
  }
});
