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

export default function App() {

  const [id, setID] = useState(null),
    [checked, setChecked] = useState(false)

  useEffect(() => {
<<<<<<< HEAD
    auth.onAuthStateChanged(user => user?setID(user.uid):null)
=======
    auth.onAuthStateChanged(user => {
      user?(
      setID(user.uid)
      ):(
        null
      )
    })
>>>>>>> e5a00026906a0411511a0bc76cd575322251e690
    setChecked(true)
  }, [id])

  return (
    <NavigationContainer>
      <KeyboardAwareScrollView>
        {checked ? (
          <Detector id={id} />
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
    alignItems: 'center',
    justifyContent: 'center'
  }
})
