import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// You can import from local files
import { auth, Detector } from './src/firebase'
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { DocSignUp } from "./src/Screens";

export default function App() {
  const [user, setUser] = useState(),
    [checked, setChecked] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(user => user ? setUser(user.uid) : null)
    setChecked(true)
  }, [user])

  // useEffect(() => {
  //   doctor !== null ? (
  //     setCheck2(true)
  //   ) : (
  //     null
  //   )
  // }, [doctor])

  return (
    <NavigationContainer>
      <KeyboardAwareScrollView>
        {checked ? (
          <Detector id={user} setChecked={setChecked} />
        ) : (
          // Login/Sign functions
          <View style={styles.loader}>
            <ActivityIndicator size="large" />
          </View>
        )}
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

