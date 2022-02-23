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
import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { color } from 'react-native-elements/dist/helpers'
import { auth, firestore, LogOut } from '../firebase'
import { Feather } from '@expo/vector-icons'

export default function Header () {
  return (
    <View>
      {/*---------------------------Header--------------------------*/}

      <View style={{ top: -20 }}>
        <Text style={styles.header}> WHAT'S YOUR</Text>
        <Text style={styles.header}> EMERGENCY ?</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#F96056',
    fontSize: 30,
    fontFamily: 'Arial'
  }
})
