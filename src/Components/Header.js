/**
    * @description      : 
    * @author           : TLeeuw
    * @group            : 
    * @created          : 03/11/2021 - 12:02:33
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/11/2021
    * - Author          : TLeeuw
    * - Modification    : 
**/
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { auth, firestore, LogOut } from '../firebase'
import { Feather } from '@expo/vector-icons';

export default function Header({Exit}) {

  return (

    <View>

      {/*---------------------------Header--------------------------*/}

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

      </View>
    </View>
  )
}

const styles = StyleSheet.create({

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

})
