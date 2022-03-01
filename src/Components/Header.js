import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { color } from 'react-native-elements/dist/helpers'
import { auth, firestore, LogOut } from '../firebase'
<<<<<<< HEAD
import { Feather } from '@expo/vector-icons';

export default function Header({Exit}) {
=======
import { Feather } from '@expo/vector-icons'
>>>>>>> 36f8773e978df9701dfdd2050ef20a2d74cd394d

export default function Header () {
  return (
    <View>
      {/*---------------------------Header--------------------------*/}

<<<<<<< HEAD
      <View style={{
        flexDirection: 'row',
        width: 340,
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>

        <View style={{ top: -20 }}>
          <Text style={styles.header}> WHAT'S YOUR</Text>
          <Text style={styles.header}> EMERGENCY ?</Text>
        </View>

        <View style={{ top: -20 }}>
          <TouchableOpacity onPress={Exit} style={{width: 40, height: 40, justifyContent: "center", alignItems: "center", backgroundColor: "#000" }}>
            <Image source={require("../images/logOut.png")} style={styles.logoutIMG} /> 
          </TouchableOpacity>
        </View>

=======
      <View style={{ top: -20 }}>
        <Text style={styles.header}> WHAT'S YOUR</Text>
        <Text style={styles.header}> EMERGENCY ?</Text>
>>>>>>> 36f8773e978df9701dfdd2050ef20a2d74cd394d
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
<<<<<<< HEAD

  contain: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

  logoutIMG: {
    width: 20,
    height: 20,
    alignSelf:'flex-end'
  },

  header: {
    color: '#F96056',
    fontSize: 30,
  },

=======
  header: {
    color: '#F96056',
    fontSize: 30,
    fontFamily: 'Arial'
  }
>>>>>>> 36f8773e978df9701dfdd2050ef20a2d74cd394d
})
