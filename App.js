import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { auth, Detector } from './src/firebase'
import { ActivityIndicator, StyleSheet, View, Share } from 'react-native';

export default function App() {
  
  const [id, setID] = useState(null),
    [checked, setChecked] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged(user => user?setID(user.uid):null)
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
        alignItems: "center",
        justifyContent: "center"
    }
});
