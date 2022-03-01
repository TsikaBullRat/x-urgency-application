import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { color } from 'react-native-elements/dist/helpers'
import { auth, firestore, LogOut } from '../firebase'
import { Feather } from '@expo/vector-icons'

export default function LogOutComp({ navigation }) {
  return (

    <View>

      {/*---------------------------Header--------------------------*/}

      <Image source={require('../images/logOut.png')} style={styles.logoutIMG} />

    </View>
  )
}

const styles = StyleSheet.create({

  logoutIMG: {
    height: 20,
    width: 20,
  }

})
